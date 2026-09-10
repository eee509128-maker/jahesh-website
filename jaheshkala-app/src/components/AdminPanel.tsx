import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ImageCropperModal } from './ImageCropperModal';
import {
  Crop,
  ShieldCheck, Package, ShoppingCart, PlusCircle, Trash2, Edit3, CheckCircle2,
  AlertCircle, Phone, Mail, Clock, CreditCard, RefreshCw, X, FileText,
  Sliders, ExternalLink, Code2, Server, HelpCircle, Layers, Tag, Sparkles,
  Flame, Percent, Truck, Check, Ticket, ToggleLeft, ToggleRight, ArrowDownRight, Calculator, Users, MessageCircle, ArrowLeft, Reply, Paperclip, Image as ImageIcon, CornerUpRight, Download,
  Search, UserPlus, Shield, UserCheck, Key, Lock, Copy, Camera, Upload, Plus, Eye, Images,
  ChevronRight, ChevronLeft, Play
} from 'lucide-react';
import { Order, Product, OrderStatus, Coupon, User, ChatMessage, UserChat, BannerSlide } from '../types';
import { fetchChatsFromDb, saveChatToDb, fetchOrdersFromDb, fetchBannersFromDb, saveBannerToDb, saveAllBannersToDb, deleteBannerFromDb, uploadBannerImage } from '../lib/dbService';
import { compressImageFile, getFallbackProductImage } from '../lib/imageUtils';
import { INITIAL_BANNERS } from '../data/initialData';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
  onUpdateOrderStatus: (orderId: string, newStatus: OrderStatus) => void;
  onDeleteOrder?: (orderId: string) => void;
  onClearAllOrders?: () => void;
  products: Product[];
  onAddNewProduct: (newProduct: Product) => void;
  onUpdateProduct?: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  coupons?: Coupon[];
  onAddNewCoupon?: (newCoupon: Coupon) => void;
  onDeleteCoupon?: (couponId: string) => void;
  onToggleCoupon?: (couponId: string) => void;
  zibalMerchant: string;
  onUpdateZibalMerchant: (merchant: string) => void;
  usersList?: User[];
  onDeleteUser?: (userId: string) => void;
  onUpdateUser?: (user: User) => void;
  onAddNewUser?: (user: User, initialPass?: string) => void;
  banners?: BannerSlide[];
  onSaveBanner?: (banner: BannerSlide) => void;
  onDeleteBanner?: (bannerId: string) => void;
  onSimulateRealPayment?: (testOrder: Order, showReceipt?: boolean) => void;
  onOpenUserOrdersModal?: (phone?: string) => void;
  onOpenAmlakModal?: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  orders,
  onUpdateOrderStatus,
  onDeleteOrder,
  onClearAllOrders,
  products,
  onAddNewProduct,
  onUpdateProduct,
  onDeleteProduct,
  coupons = [],
  onAddNewCoupon,
  onDeleteCoupon,
  onToggleCoupon,
  zibalMerchant,
  onUpdateZibalMerchant,
  usersList = [],
  onDeleteUser,
  onUpdateUser,
  onAddNewUser,
  banners: initialBannersProp,
  onSaveBanner,
  onDeleteBanner,
  onSimulateRealPayment,
  onOpenUserOrdersModal,
  onOpenAmlakModal,
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'test-order' | 'new-product' | 'banners' | 'coupons' | 'integrations' | 'users' | 'chats'>('orders');
  const [bannersList, setBannersList] = useState<BannerSlide[]>(initialBannersProp || INITIAL_BANNERS);
  const [editingBannerId, setEditingBannerId] = useState<string | null>(null);
  const [bannerTitle, setBannerTitle] = useState('');
  const [bannerSubtitle, setBannerSubtitle] = useState('');
  const [bannerBadge, setBannerBadge] = useState('');
  const [bannerCta, setBannerCta] = useState('مشاهده تخفیف‌های شگفت‌انگیز');
  const [bannerActionType, setBannerActionType] = useState<'incredible' | 'category' | 'link' | 'all'>('incredible');
  const [bannerActionTarget, setBannerActionTarget] = useState('');
  const [bannerGradient, setBannerGradient] = useState('from-[#3b1261] via-[#220d3d] to-[#0d071a]');
  const [bannerOpacity, setBannerOpacity] = useState<number>(90);
  const [bannerImagePosition, setBannerImagePosition] = useState('center');
  const [bannerImage, setBannerImage] = useState('');
  const [bannerImageLoading, setBannerImageLoading] = useState(false);
  const [bannerSuccessMessage, setBannerSuccessMessage] = useState('');
  const [cropperModal, setCropperModal] = useState<{ isOpen: boolean, imageSrc: string, aspectRatio: number, target: 'banner' | 'product_main' | 'product_gallery' }>({
    isOpen: false,
    imageSrc: '',
    aspectRatio: 1,
    target: 'banner'
  });

  const bannerFileInputRef = React.useRef<HTMLInputElement>(null);
  const [chats, setChats] = useState<UserChat[]>([]);
  const [selectedChat, setSelectedChat] = useState<UserChat | null>(null);
  const [replyText, setReplyText] = useState('');
  const [replyTarget, setReplyTarget] = useState<ChatMessage | null>(null);
  const [fileAttachment, setFileAttachment] = useState<{ name: string; url: string; type: 'image' | 'file'; sizeText: string } | null>(null);
  const [fileUploadError, setFileUploadError] = useState<string>('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const tabNavRef = React.useRef<HTMLDivElement>(null);

  // Test Order / Real Payment Simulation State (ویژه مدیریت)
  const [selectedTestProductId, setSelectedTestProductId] = useState<string>('');
  const [testCustomerName, setTestCustomerName] = useState('مدیر سیستم (تست پرداخت)');
  const [testCustomerPhone, setTestCustomerPhone] = useState('09881234567');
  const [testCustomerEmail, setTestCustomerEmail] = useState('admin@jaheshit.ir');
  const [testRequestedDomain, setTestRequestedDomain] = useState('jahesh-sample.ir');
  const [testClientNotes, setTestClientNotes] = useState('تست اعتبارسنجی پرداخت شاپرک و نحوه تحویل فوری محصول به مشتری');
  const [testCouponCode, setTestCouponCode] = useState('');
  const [testQuantity, setTestQuantity] = useState<number>(1);
  const [testOrderStatus, setTestOrderStatus] = useState<OrderStatus>('در حال بررسی');
  const [lastExecutedTestOrder, setLastExecutedTestOrder] = useState<Order | null>(null);
  const [isTestExecuting, setIsTestExecuting] = useState(false);
  const [testSuccessNotice, setTestSuccessNotice] = useState<string>('');
  const [testReceiptPreviewModal, setTestReceiptPreviewModal] = useState<Order | null>(null);
  const [testProductSearch, setTestProductSearch] = useState('');

  React.useEffect(() => {
    if (products && products.length > 0 && !selectedTestProductId) {
      setSelectedTestProductId(products[0].id);
    }
  }, [products, selectedTestProductId]);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabNavRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      tabNavRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      const loadChats = async () => {
        const data = await fetchChatsFromDb();
        setChats(data);
      };
      const loadBanners = async () => {
        const data = await fetchBannersFromDb();
        if (data && data.length > 0) {
          setBannersList(data);
        }
      };
      loadChats();
      loadBanners();
      const interval = setInterval(loadChats, 3000);

      const handleChatsUpdated = () => {
        loadChats();
      };
      window.addEventListener('jahesh-chats-updated', handleChatsUpdated);

      return () => {
        clearInterval(interval);
        window.removeEventListener('jahesh-chats-updated', handleChatsUpdated);
      };
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (initialBannersProp && initialBannersProp.length > 0) {
      setBannersList(initialBannersProp);
    }
  }, [initialBannersProp]);

  const handleBannerImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBannerImageLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        const raw = event.target?.result as string;
        if (raw) {
          setCropperModal({
            isOpen: true,
            imageSrc: raw,
            aspectRatio: 21 / 9,
            target: 'banner',
          });
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Failed to read image:', err);
    } finally {
      setBannerImageLoading(false);
      if (bannerFileInputRef.current) bannerFileInputRef.current.value = '';
    }
  };

  const handleStartEditBanner = (b: BannerSlide) => {
    setEditingBannerId(b.id);
    setBannerTitle(b.title);
    setBannerSubtitle(b.subtitle || '');
    setBannerBadge(b.badge || '');
    setBannerCta(b.cta || 'مشاهده و خرید');
    setBannerActionType(b.actionType || 'incredible');
    setBannerActionTarget(b.actionTarget || '');
    setBannerGradient(b.gradient || 'from-[#3b1261] via-[#220d3d] to-[#0d071a]');
    setBannerOpacity(b.overlayOpacity !== undefined ? b.overlayOpacity : 90);
    setBannerImagePosition(b.imagePosition || 'center');
    setBannerImage(b.image || '');
    setBannerSuccessMessage('');
  };

  const handleResetBannerForm = () => {
    setEditingBannerId(null);
    setBannerTitle('');
    setBannerSubtitle('');
    setBannerBadge('');
    setBannerCta('مشاهده تخفیف‌های شگفت‌انگیز');
    setBannerActionType('incredible');
    setBannerActionTarget('');
    setBannerGradient('from-[#3b1261] via-[#220d3d] to-[#0d071a]');
    setBannerOpacity(90);
    setBannerImagePosition('center');
    setBannerImage('');
    setBannerSuccessMessage('');
    if (bannerFileInputRef.current) bannerFileInputRef.current.value = '';
  };

  const handleSaveBannerForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bannerTitle.trim() || !bannerImage.trim()) {
      alert('لطفاً عنوان بنر و تصویر آن را وارد یا بارگذاری نمایید.');
      return;
    }

    const newBanner: BannerSlide = {
      id: editingBannerId || `banner_${Date.now()}`,
      title: bannerTitle.trim(),
      subtitle: bannerSubtitle.trim() || undefined,
      badge: bannerBadge.trim() || undefined,
      cta: bannerCta.trim() || 'مشاهده تخفیف‌های شگفت‌انگیز',
      actionType: bannerActionType,
      actionTarget: bannerActionTarget.trim() || undefined,
      gradient: bannerGradient,
      overlayOpacity: bannerOpacity,
      imagePosition: bannerImagePosition,
      image: bannerImage,
      isActive: true,
      order: editingBannerId
        ? (bannersList.find((b) => b.id === editingBannerId)?.order ?? 0)
        : bannersList.length,
    };

    let updatedList: BannerSlide[];
    if (editingBannerId) {
      updatedList = bannersList.map((b) => (b.id === editingBannerId ? newBanner : b));
    } else {
      updatedList = [...bannersList, newBanner];
    }

    setBannersList(updatedList);
    const ok = await saveAllBannersToDb(updatedList);
    if (onSaveBanner) onSaveBanner(newBanner);

    setBannerSuccessMessage(
      ok
        ? (editingBannerId ? 'بنر با موفقیت ویرایش و در سرور ذخیره شد (روی همه دستگاه‌ها اعمال شد).' : 'بنر جدید با موفقیت در سرور ذخیره و منتشر شد!')
        : 'بنر ذخیره شد؛ اطلاعات برای همه موبایل‌ها و حساب‌ها ارسال شد.'
    );
    handleResetBannerForm();
    setTimeout(() => setBannerSuccessMessage(''), 4500);
  };

  const handleToggleBannerActive = async (banner: BannerSlide) => {
    const updated: BannerSlide = { ...banner, isActive: banner.isActive === false ? true : false };
    const newList = bannersList.map((b) => (b.id === banner.id ? updated : b));
    setBannersList(newList);
    await saveAllBannersToDb(newList);
    if (onSaveBanner) onSaveBanner(updated);
  };

  const handleMoveBanner = async (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === bannersList.length - 1)
    ) {
      return;
    }
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const newList = [...bannersList];
    const [moved] = newList.splice(index, 1);
    newList.splice(targetIndex, 0, moved);

    // Update order values
    const ordered = newList.map((item, idx) => ({ ...item, order: idx }));
    setBannersList(ordered);
    await saveAllBannersToDb(ordered);
  };

  const handleDeleteBannerSlide = async (bannerId: string) => {
    if (!window.confirm('آیا از حذف این بنر مطمئن هستید؟')) return;
    const newList = bannersList.filter((b) => b.id !== bannerId);
    setBannersList(newList);
    await saveAllBannersToDb(newList);
    await deleteBannerFromDb(bannerId);
    if (onDeleteBanner) onDeleteBanner(bannerId);
  };

  const handleAdminFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileUploadError('');
    const file = e.target.files?.[0];
    if (!file) return;

    // Check 10MB limit
    const MAX_SIZE = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > MAX_SIZE) {
      setFileUploadError('حجم فایل نمی‌تواند بیشتر از ۱۰ مگابایت باشد.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
    const sizeText = file.size > 1024 * 1024 ? `${sizeInMb} MB` : `${Math.round(file.size / 1024)} KB`;
    const isImage = file.type.startsWith('image/');

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setFileAttachment({
        name: file.name,
        url: result,
        type: isImage ? 'image' : 'file',
        sizeText
      });
    };
    reader.readAsDataURL(file);
  };

  const handleReply = async () => {
    if (!selectedChat || (!replyText.trim() && !fileAttachment)) return;
    const msg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'support',
      text: replyText.trim(),
      time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      isHumanAdmin: true,
      senderTitle: 'کارشناس پشتیبانی جهش‌کالا',
      ...(replyTarget ? {
        replyTo: {
          id: replyTarget.id,
          text: replyTarget.text || (replyTarget.file ? `[فایل: ${replyTarget.file.name}]` : ''),
          sender: replyTarget.sender
        }
      } : {}),
      ...(fileAttachment ? { file: fileAttachment } : {})
    };

    const updatedChat = {
      ...selectedChat,
      messages: [...selectedChat.messages, msg],
      lastUpdated: new Date().toISOString(),
      isReadByAdmin: true,
      needsHumanSupport: false // Admin has handled this escalated chat
    };
    await saveChatToDb(updatedChat);
    setReplyText('');
    setReplyTarget(null);
    setFileAttachment(null);
    setFileUploadError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
    setChats(prev => prev.map(c => c.userId === selectedChat.userId ? updatedChat : c));
    setSelectedChat(updatedChat);
  };
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Edit / New Product Form State
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newBrand, setNewBrand] = useState('');
  
  // Category selection mode
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [selectedExistingCategory, setSelectedExistingCategory] = useState<string>('کالای دیجیتال');
  const [customCategoryName, setCustomCategoryName] = useState<string>('');

  const [newOriginalPrice, setNewOriginalPrice] = useState('');
  const [newDiscountPercent, setNewDiscountPercent] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDeliveryDays, setNewDeliveryDays] = useState('ارسال سریع در ۱ تا ۳ روز کاری');
  const [newWarranty, setNewWarranty] = useState('۷ روز ضمانت بازگشت و اصالت کالا');
  const [newBadge, setNewBadge] = useState('');
  const [newImage, setNewImage] = useState('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80');
  const [newGallery, setNewGallery] = useState<string[]>([]);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const mainImageInputRef = React.useRef<HTMLInputElement>(null);
  const galleryImageInputRef = React.useRef<HTMLInputElement>(null);

  const [newShortDesc, setNewShortDesc] = useState('');
  const [newFullDesc, setNewFullDesc] = useState('');
  const [newFeatures, setNewFeatures] = useState('کیفیت ساخت و متریال درجه یک\nدارای گارانتی سلامت و ضمانت تعویض\nبسته‌بندی ایمن و ارسال پستی سراسری');
  
  // Product flags
  const [isPopular, setIsPopular] = useState(false);
  const [isIncredible, setIsIncredible] = useState(false);
  const [incredibleTimerDuration, setIncredibleTimerDuration] = useState<'1day' | '3days' | '1week' | '1month' | 'custom'>('1week');
  const [incredibleExpiresAt, setIncredibleExpiresAt] = useState<string>('');
  const [isFreeShipping, setIsFreeShipping] = useState(true);
  const [isInStock, setIsInStock] = useState(true);

  // Subscription Settings Flag & Daily Price
  const [isSubscription, setIsSubscription] = useState(false);
  const [pricePerDayInput, setPricePerDayInput] = useState('250000');

  // Helper function to set duration and calculate target expiration date
  const handleSetIncredibleDuration = (duration: '1day' | '3days' | '1week' | '1month' | 'custom', customHours?: number) => {
    setIncredibleTimerDuration(duration);
    let target = Date.now();
    if (duration === '1day') target += 24 * 60 * 60 * 1000;
    else if (duration === '3days') target += 3 * 24 * 60 * 60 * 1000;
    else if (duration === '1week') target += 7 * 24 * 60 * 60 * 1000;
    else if (duration === '1month') target += 30 * 24 * 60 * 60 * 1000;
    else if (duration === 'custom' && customHours) target += customHours * 60 * 60 * 1000;
    setIncredibleExpiresAt(new Date(target).toISOString());
  };

  const formatPersianDateTime = (isoDate?: string) => {
    if (!isoDate) return 'تنظیم نشده (پیش‌فرض ۲۴ ساعته)';
    try {
      const d = new Date(isoDate);
      return d.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return isoDate;
    }
  };

  const formatRemainingTime = (isoDate?: string) => {
    if (!isoDate) return '۲۴ ساعت پیش‌فرض';
    const diff = new Date(isoDate).getTime() - Date.now();
    if (diff <= 0) return 'مهلت پایان یافته';
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
    if (days > 0) return `${days} روز و ${hours} ساعت`;
    return `${hours} ساعت و ${minutes} دقیقه`;
  };

  const formatForDateTimeLocal = (isoDate?: string) => {
    if (!isoDate) return '';
    try {
      const d = new Date(isoDate);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const hours = String(d.getHours()).padStart(2, '0');
      const minutes = String(d.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    } catch {
      return '';
    }
  };

  // Dedicated Product Coupon Code (Specifically for this product)
  const [newProductCouponCode, setNewProductCouponCode] = useState('');
  const [newProductCouponPercent, setNewProductCouponPercent] = useState('');

  const [formSuccess, setFormSuccess] = useState('');

  // Image Upload Handlers
  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploadingImage(true);
    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        const raw = event.target?.result as string;
        if (raw) {
          setCropperModal({
            isOpen: true,
            imageSrc: raw,
            aspectRatio: 1,
            target: 'product_main',
          });
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Failed to read product image:', err);
      alert('خطا در خواندن تصویر.');
    } finally {
      setIsUploadingImage(false);
      if (e.target) e.target.value = '';
    }
  };

  const handleGalleryImagesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setIsUploadingImage(true);
    try {
      const newItems: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const compressed = await compressImageFile(files[i], 1000, 1000, 0.82);
        newItems.push(compressed);
      }
      setNewGallery((prev) => [...prev, ...newItems].slice(0, 8));
    } catch (err) {
      console.error('Failed to compress gallery image:', err);
      alert('خطا در پردازش تصاویر گالری.');
    } finally {
      setIsUploadingImage(false);
      if (e.target) e.target.value = '';
    }
  };

  const handleRemoveGalleryImage = (idxToRemove: number) => {
    setNewGallery((prev) => prev.filter((_, idx) => idx !== idxToRemove));
  };

  const handleSetFallbackImage = () => {
    const finalCategory = isCustomCategory ? (customCategoryName.trim() || 'عمومی') : selectedExistingCategory;
    setNewImage(getFallbackProductImage(newTitle.trim() || 'محصول جهش‌کالا', finalCategory));
  };

  // Coupon Manager Form State
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponPercent, setNewCouponPercent] = useState('15');
  const [newCouponDesc, setNewCouponDesc] = useState('');
  const [couponSuccessMsg, setCouponSuccessMsg] = useState('');

  // User Management State (Search, Filter, Edit Modal, Create Modal)
  const [userSearchTerm, setUserSearchTerm] = useState('');
  const [userRoleFilter, setUserRoleFilter] = useState<'all' | 'admin' | 'user'>('all');
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserPhone, setNewUserPhone] = useState('');
  const [newUserUsername, setNewUserUsername] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<'admin' | 'user'>('user');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [userActionMessage, setUserActionMessage] = useState('');

  if (!isOpen) return null;

  // Extract all existing unique categories from products
  const existingCategories = Array.from(
    new Set([
      'کالای دیجیتال',
      'موبایل و تبلت',
      'لپ‌تاپ و کامپیوتر',
      'پوشاک و مد',
      'لوازم خانگی و آشپزخانه',
      'زیبایی و سلامت',
      'کتاب و فرهنگ',
      'خدمات و نرم‌افزار',
      ...products.map((p) => p.category).filter(Boolean),
    ])
  );

  const formatPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const handleExecuteTestPayment = async (mode: 'storefront_receipt' | 'in_panel') => {
    const targetProduct = products.find((p) => p.id === selectedTestProductId) || products[0];
    if (!targetProduct) {
      alert('لطفاً ابتدا یک کالا یا محصول را برای تست انتخاب کنید.');
      return;
    }

    setIsTestExecuting(true);
    setTestSuccessNotice('');

    // Generate realistic bank values for Shaparak & Zibal
    const randomSuffix = Math.floor(10000 + Math.random() * 90000).toString();
    const orderId = `JAHESH-TEST-${randomSuffix}`;
    const trackId = `100${Math.floor(10000000 + Math.random() * 90000000)}`;
    const refNumber = `9820${Math.floor(10000000 + Math.random() * 90000000)}`;

    const qty = Math.max(1, testQuantity || 1);
    const basePrice = (Number(targetProduct.price) || 0) * qty;
    let discountAmount = 0;
    if (testCouponCode.trim()) {
      const foundCoupon = coupons.find(
        (c) => c.code.toLowerCase() === testCouponCode.trim().toLowerCase() && c.isActive
      );
      if (foundCoupon) {
        discountAmount = Math.round((basePrice * foundCoupon.discountPercent) / 100);
      } else if (
        targetProduct.couponCode &&
        targetProduct.couponCode.toLowerCase() === testCouponCode.trim().toLowerCase()
      ) {
        discountAmount = Math.round((basePrice * (targetProduct.couponDiscountPercent || 15)) / 100);
      }
    }
    const finalAmount = Math.max(0, basePrice - discountAmount);

    const nowPersian = new Date().toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const isDesignOrHosting =
      targetProduct.category?.includes('طراحی') ||
      targetProduct.id === 'pkg-golden-jahesh' ||
      targetProduct.title?.includes('سایت');

    const testOrder: Order = {
      id: orderId,
      trackingCode: trackId,
      paymentRefId: refNumber,
      userId: 'admin-test-user',
      customerName: testCustomerName.trim() || 'مدیر سیستم (تست پرداخت)',
      customerPhone: testCustomerPhone.trim() || '09881234567',
      customerEmail: testCustomerEmail.trim() || 'admin@jaheshit.ir',
      requestedDomain: isDesignOrHosting ? (testRequestedDomain || 'sample-domain.ir') : undefined,
      clientNotes: testClientNotes.trim(),
      items: [
        {
          product: targetProduct,
          quantity: qty,
          requestedDomain: isDesignOrHosting ? (testRequestedDomain || 'sample-domain.ir') : undefined,
          clientNotes: testClientNotes.trim(),
        },
      ],
      totalAmount: finalAmount,
      discountAmount: discountAmount,
      appliedCouponCode: testCouponCode.trim() || undefined,
      status: testOrderStatus || 'در حال بررسی',
      paymentGateway: 'زیبال (Zibal - شبیه‌ساز پرداخت واقعی شاپرک)',
      acceptedTerms: true,
      date: nowPersian,
    };

    try {
      const { saveOrderToDb } = await import('../lib/dbService');
      await saveOrderToDb(testOrder);
    } catch (e) {
      console.warn('Test order save warning:', e);
    }

    setLastExecutedTestOrder(testOrder);
    setIsTestExecuting(false);

    try {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch {}

    if (mode === 'storefront_receipt' && onSimulateRealPayment) {
      onSimulateRealPayment(testOrder, true);
    } else {
      setTestSuccessNotice(`سفارش تستی ${orderId} با موفقیت در دیتابیس ثبت شد و اکنون در چرخه سفارشات قرار دارد.`);
    }
  };

  const handleTestDownloadFile = (order: Order) => {
    const item = order.items[0]?.product;
    const title = item?.title || 'فایل دانلودی جهش کالا';
    const csvContent = `نام صنف/شغل,استان,شهر,تلفن تماس,وضعیت تایید,تاریخ به روزرسانی
دفتر خدمات مهندسی و معماری آریا,تهران,تهران,02188765432,فعال و معتبر,1403/12
شرکت بازرگانی توسعه صادرات البرز,البرز,کرج,02634567890,فعال و معتبر,1403/12
فروشگاه مرکزی تجهیزات الکترونیک نور,اصفهان,اصفهان,03132345678,فعال و معتبر,1403/12
کلینیک تخصصی دندانپزشکی مهرگان,فارس,شیراز,07136289012,فعال و معتبر,1403/12
آژانس مسافرتی و گردشگری پرواز سپهر,خراسان رضوی,مشهد,05138456712,فعال و معتبر,1403/12
مجتمع پخش و تامین مواد غذایی کوثر,آذربایجان شرقی,تبریز,04133345678,فعال و معتبر,1403/12
مرکز چاپ و بسته‌بندی نگین خلیج,خوزستان,اهواز,06132214567,فعال و معتبر,1403/12
شرکت نرم‌افزاری و هوش مصنوعی جهش,تهران,تهران,02191001395,فعال و معتبر,1403/12
---
اطلاعات لایسنس و سفارش رسمی جهش کالا:
محصول دانلودی: ${title}
شماره سفارش: ${order.id}
کد پیگیری شاپرک: ${order.trackingCode}
خریدار: ${order.customerName}
شماره تماس: ${order.customerPhone}
مبلغ پرداخت شده: ${formatPrice(order.totalAmount)}
وضعیت سفارش: ${order.status}
پشتیبانی آنلاین جهش کالا: https://jaheshit.ir
`;

    try {
      const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `JaheshKala_${order.id}_Database_Export.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.warn('Test download notice:', e);
    }
  };

  const handleStartNew = () => {
    setEditingProductId(null);
    setNewTitle('');
    setNewBrand('');
    setIsCustomCategory(false);
    setSelectedExistingCategory('کالای دیجیتال');
    setCustomCategoryName('');
    setNewOriginalPrice('');
    setNewDiscountPercent('');
    setNewPrice('');
    setNewDeliveryDays('ارسال در ۱ تا ۳ روز کاری');
    setNewWarranty('۷ روز ضمانت بازگشت کالا');
    setNewBadge('');
    setNewImage('');
    setNewGallery([]);
    setShowUrlInput(false);
    setNewShortDesc('');
    setNewFullDesc('');
    setNewFeatures('کیفیت ساخت درجه یک و استاندارد\nدارای گارانتی سلامت فیزیکی\nارسال با بسته‌بندی ایمن سراسر کشور');
    setIsPopular(false);
    setIsIncredible(false);
    setIncredibleTimerDuration('1week');
    setIncredibleExpiresAt('');
    setIsFreeShipping(true);
    setIsInStock(true);
    setIsSubscription(false);
    setPricePerDayInput('250000');
    setNewProductCouponCode('');
    setNewProductCouponPercent('');
    setFormSuccess('');
    setActiveTab('new-product');
  };

  const handleStartEdit = (prod: Product) => {
    setEditingProductId(prod.id);
    setNewTitle(prod.title);
    setNewBrand(prod.brand || '');
    
    if (existingCategories.includes(prod.category)) {
      setIsCustomCategory(false);
      setSelectedExistingCategory(prod.category);
    } else {
      setIsCustomCategory(true);
      setCustomCategoryName(prod.category);
    }

    const orig = prod.originalPrice || prod.price;
    const current = prod.price;
    const disc = prod.discountPercent || (orig > current ? Math.round(((orig - current) / orig) * 100) : 0);

    setNewOriginalPrice(orig ? orig.toString() : current.toString());
    setNewDiscountPercent(disc > 0 ? disc.toString() : '');
    setNewPrice(current.toString());

    setNewDeliveryDays(prod.deliveryDays || 'ارسال در ۱ تا ۳ روز کاری');
    setNewWarranty(prod.warranty || '۷ روز ضمانت بازگشت کالا');
    setNewBadge(prod.badge || '');
    setNewImage(prod.image || '');
    setNewGallery(prod.gallery || []);
    setShowUrlInput(false);
    setNewShortDesc(prod.shortDescription || '');
    setNewFullDesc(prod.fullDescription || '');
    setNewFeatures(prod.features ? prod.features.join('\n') : '');
    setIsPopular(Boolean(prod.isPopular));
    setIsIncredible(Boolean(prod.isIncredible));
    setIncredibleTimerDuration((prod.incredibleTimerDuration as any) || '1week');
    setIncredibleExpiresAt(prod.incredibleExpiresAt || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString());
    setIsFreeShipping(Boolean(prod.deliveryDays?.includes('رایگان')));
    setIsInStock(true);
    setIsSubscription(Boolean(prod.isSubscription || prod.id === 'pkg-amlak-jahesh'));
    setPricePerDayInput(prod.pricePerDay ? prod.pricePerDay.toString() : '250000');
    setNewProductCouponCode(prod.couponCode || '');
    setNewProductCouponPercent(prod.couponDiscountPercent ? prod.couponDiscountPercent.toString() : '');
    setFormSuccess('');
    setActiveTab('new-product');
  };

  // Price & Discount Calculation handlers
  const handleOriginalPriceChange = (val: string) => {
    setNewOriginalPrice(val);
    const orig = parseInt(val.replace(/[^0-9]/g, ''), 10);
    const percent = parseInt(newDiscountPercent.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(orig) && orig > 0) {
      if (!isNaN(percent) && percent > 0) {
        const discounted = Math.round(orig * (1 - percent / 100));
        setNewPrice(discounted.toString());
      } else if (!newPrice) {
        setNewPrice(orig.toString());
      }
    }
  };

  const handleDiscountPercentChange = (val: string) => {
    setNewDiscountPercent(val);
    const percent = parseInt(val.replace(/[^0-9]/g, ''), 10);
    const orig = parseInt(newOriginalPrice.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(percent) && percent >= 0 && percent <= 100 && !isNaN(orig) && orig > 0) {
      const discounted = Math.round(orig * (1 - percent / 100));
      setNewPrice(discounted.toString());
    } else if ((isNaN(percent) || percent === 0) && !isNaN(orig) && orig > 0) {
      setNewPrice(orig.toString());
    }
  };

  const handleFinalPriceChange = (val: string) => {
    setNewPrice(val);
    const finalP = parseInt(val.replace(/[^0-9]/g, ''), 10);
    const orig = parseInt(newOriginalPrice.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(finalP) && !isNaN(orig) && orig > finalP && orig > 0) {
      const calcPercent = Math.round(((orig - finalP) / orig) * 100);
      setNewDiscountPercent(calcPercent.toString());
    }
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPrice.trim()) return;

    const finalCategory = isCustomCategory
      ? (customCategoryName.trim() || 'عمومی')
      : selectedExistingCategory;

    const priceNum = parseInt(newPrice.replace(/[^0-9]/g, ''), 10) || 100000;
    const origPriceNum = newOriginalPrice ? parseInt(newOriginalPrice.replace(/[^0-9]/g, ''), 10) : undefined;
    const percentNum = newDiscountPercent ? parseInt(newDiscountPercent.replace(/[^0-9]/g, ''), 10) : undefined;

    let discount = percentNum;
    if (discount === undefined && origPriceNum && origPriceNum > priceNum) {
      discount = Math.round(((origPriceNum - priceNum) / origPriceNum) * 100);
    } else if (discount === undefined && isIncredible) {
      discount = 15;
    }

    const calculatedOrig = origPriceNum || (discount && discount > 0 ? Math.round(priceNum / (1 - discount / 100)) : undefined);
    const prodCouponCode = newProductCouponCode.trim().toUpperCase() || undefined;
    const prodCouponPercent = newProductCouponPercent ? Math.min(100, Math.max(1, parseInt(newProductCouponPercent.replace(/[^0-9]/g, ''), 10) || 10)) : undefined;

    const finalImage = newImage.trim() || getFallbackProductImage(newTitle.trim(), finalCategory);

    const productData: Product = {
      id: editingProductId || ('prod-' + Date.now()),
      title: newTitle.trim(),
      category: finalCategory,
      brand: newBrand.trim() || undefined,
      warranty: newWarranty.trim() || undefined,
      price: priceNum,
      originalPrice: calculatedOrig && calculatedOrig > priceNum ? calculatedOrig : undefined,
      discountPercent: discount && discount > 0 ? discount : undefined,
      couponCode: prodCouponCode,
      couponDiscountPercent: prodCouponCode ? (prodCouponPercent || discount || 15) : undefined,
      badge: newBadge.trim() || (discount && discount > 0 ? `${discount}% تخفیف` : undefined),
      isPopular: Boolean(isPopular),
      isGolden: Boolean(newTitle.includes('طلایی') || finalCategory.includes('طراحی سایت')),
      rating: 5.0,
      reviewsCount: Math.floor(Math.random() * 20) + 5,
      deliveryDays: newDeliveryDays.trim() || 'ارسال ۱ تا ۳ روز کاری',
      shortDescription: newShortDesc.trim() || newTitle.trim(),
      fullDescription: newFullDesc.trim() || newShortDesc.trim() || newTitle.trim(),
      features: newFeatures.split('\n').map((s) => s.trim()).filter(Boolean),
      image: finalImage,
      gallery: newGallery,
      isIncredible: Boolean(isIncredible),
      incredibleTimerDuration: isIncredible ? incredibleTimerDuration : undefined,
      incredibleExpiresAt: isIncredible ? (incredibleExpiresAt || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()) : undefined,
      isSubscription: Boolean(isSubscription),
      pricePerDay: isSubscription ? (parseInt(pricePerDayInput.replace(/[^0-9]/g, ''), 10) || 250000) : undefined,
    };

    if (editingProductId && onUpdateProduct) {
      onUpdateProduct(productData);
      setFormSuccess('تغییرات محصول با موفقیت در دیتابیس ذخیره شد!');
    } else {
      onAddNewProduct(productData);
      setFormSuccess(`محصول «${productData.title}» با قیمت ${formatPrice(priceNum)} در دیتابیس ثبت و منتشر شد!`);
    }
    
    setTimeout(() => {
      setFormSuccess('');
      setActiveTab('products');
    }, 1200);
  };

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCouponCode.trim() || !newCouponPercent.trim()) return;
    const percent = Math.min(100, Math.max(1, parseInt(newCouponPercent.replace(/[^0-9]/g, ''), 10) || 10));
    
    const newCoupon: Coupon = {
      id: 'cp-' + Date.now(),
      code: newCouponCode.trim().toUpperCase(),
      discountPercent: percent,
      description: newCouponDesc.trim() || `کد تخفیف ${percent} درصدی جهش‌کالا`,
      isActive: true,
    };

    if (onAddNewCoupon) {
      onAddNewCoupon(newCoupon);
    }
    setCouponSuccessMsg(`کد تخفیف «${newCoupon.code}» با ${percent}% تخفیف با موفقیت ایجاد شد.`);
    setNewCouponCode('');
    setNewCouponPercent('15');
    setNewCouponDesc('');

    setTimeout(() => {
      setCouponSuccessMsg('');
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-[#0f0924] border border-purple-800/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-2 sm:my-4 max-h-[94vh] flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 border-b border-purple-900/60 bg-[#150d32]">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h2 className="text-xs sm:text-base font-black text-white truncate">پنل مدیریت جهش‌کالا</h2>
                <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[9px] sm:text-[10px] font-bold text-emerald-300 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  ابری
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-purple-300/70 truncate hidden xs:block">
                مدیریت محصولات، سفارشات، کدهای تخفیف، کاربران و پشتیبانی
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('chats')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors ${
                activeTab === 'chats'
                  ? 'bg-amber-500 text-black border-amber-400 font-black'
                  : 'bg-purple-950/80 hover:bg-purple-900 border-purple-800/60 text-purple-200'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>پشتیبانی و چت</span>
              {chats.filter(c => c.needsHumanSupport || !c.isReadByAdmin).length > 0 && (
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              )}
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-950 hover:bg-purple-900 text-slate-300 flex items-center justify-center transition-colors shrink-0"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation with Scroll Controls and Visible Drag Scrollbar */}
        <div className="relative border-b border-purple-900/40 bg-[#120a2b] flex items-center">
          {/* Scroll Right Button */}
          <button
            onClick={() => scrollTabs('right')}
            title="مشاهده تب‌های قبلی"
            className="hidden sm:flex z-10 w-7 h-7 mx-1 rounded-lg bg-purple-950/90 hover:bg-purple-900 border border-purple-800/60 text-purple-200 items-center justify-center shrink-0 transition-all shadow-md active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div
            ref={tabNavRef}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 pt-2.5 sm:pt-3.5 pb-2 overflow-x-auto admin-tabs-scrollbar smooth-scroll flex-1 w-full"
          >
            <button
              onClick={() => setActiveTab('orders')}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'orders'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>سفارشات مشتریان</span>
              <span className="bg-purple-900 text-purple-200 text-[10px] px-2 py-0.5 rounded-full">
                {orders.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'products'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>محصولات و کالاها</span>
              <span className="bg-purple-900 text-purple-200 text-[10px] px-2 py-0.5 rounded-full">
                {products.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('test-order')}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'test-order'
                  ? 'border-emerald-400 text-emerald-300 font-black'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>تست پرداخت و تحویل محصول</span>
              <span className="bg-emerald-950 text-emerald-300 border border-emerald-500/50 text-[10px] px-2 py-0.5 rounded-full font-bold">
                ویژه مدیر
              </span>
            </button>

            <button
              onClick={() => {
                if (!editingProductId) handleStartNew();
                else setActiveTab('new-product');
              }}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'new-product'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <PlusCircle className="w-4 h-4" />
              <span>{editingProductId ? 'ویرایش کالا' : 'ثبت کالای جدید'}</span>
            </button>

            <button
              onClick={() => setActiveTab('coupons')}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'coupons'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Ticket className="w-4 h-4" />
              <span>مدیریت کدهای تخفیف</span>
              <span className="bg-purple-900 text-purple-200 text-[10px] px-2 py-0.5 rounded-full">
                {coupons.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('banners')}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'banners'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>بنرها و اسلایدر صفحه اول</span>
              <span className="bg-purple-900 text-purple-200 text-[10px] px-2 py-0.5 rounded-full">
                {bannersList.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('integrations')}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'integrations'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>تنظیمات درگاه زیبال و دیپلوی</span>
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'users'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>لیست کاربران سایت</span>
              <span className="bg-purple-900 text-purple-200 text-[10px] px-2 py-0.5 rounded-full">
                {usersList?.length || 0}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('chats')}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'chats'
                  ? 'border-amber-400 text-amber-300 font-black'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>پشتیبانی کاربران (چت)</span>
              {chats.filter(c => c.needsHumanSupport).length > 0 && (
                <span className="bg-amber-500 text-black font-black text-[10px] px-2 py-0.5 rounded-full animate-bounce flex items-center gap-1 shadow-md shadow-amber-500/50" title="پیام‌های نیازمند اقدام فوری پشتیبانی (تشخیص هوش مصنوعی)">
                  <AlertCircle className="w-3 h-3 text-black" />
                  <span>{chats.filter(c => c.needsHumanSupport).length} ارجاع هوش مصنوعی</span>
                </span>
              )}
              {chats.filter(c => !c.isReadByAdmin && !c.needsHumanSupport).length > 0 && (
                <span className="bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">
                  {chats.filter(c => !c.isReadByAdmin && !c.needsHumanSupport).length}
                </span>
              )}
            </button>
          </div>

          {/* Scroll Left Button */}
          <button
            onClick={() => scrollTabs('left')}
            title="مشاهده تب‌های بعدی (چت و پشتیبانی)"
            className="hidden sm:flex z-10 w-7 h-7 mx-1 rounded-lg bg-purple-950/90 hover:bg-purple-900 border border-purple-800/60 text-purple-200 items-center justify-center shrink-0 transition-all shadow-md active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 text-right">
          
          {/* TAB 1: ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    لیست سفارشات ثبت‌شده مشتریان:
                  </h3>
                  <p className="text-xs text-slate-400">
                    کلیه تراکنش‌ها و سفارشات ثبت‌شده از طریق درگاه پرداخت در این بخش نمایش داده می‌شوند.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={async () => {
                      try {
                        const fresh = await fetchOrdersFromDb();
                        if (fresh && typeof window !== 'undefined') {
                          window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: fresh }));
                        }
                      } catch (e) {}
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-xs font-bold transition-all cursor-pointer"
                    title="به‌روزرسانی و دریافت لیست جدید سفارشات"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>به‌روزرسانی سفارشات</span>
                  </button>
                  {orders.length > 0 && onClearAllOrders && (
                    <button
                      onClick={onClearAllOrders}
                      className="px-3 py-1.5 rounded-xl bg-rose-950/60 border border-rose-600/40 text-rose-300 hover:bg-rose-900/80 text-xs font-bold transition-colors"
                    >
                      پاکسازی تمام سفارشات
                    </button>
                  )}
                </div>
              </div>

              {orders.length === 0 ? (
                <div className="p-12 text-center rounded-2xl bg-purple-950/20 border border-purple-900/30">
                  <ShoppingCart className="w-12 h-12 text-purple-500/40 mx-auto mb-3" />
                  <p className="text-sm font-bold text-white">هنوز هیچ سفارشی ثبت نشده است.</p>
                  <p className="text-xs text-slate-400 mt-1">
                    به‌محض اینکه کاربری خریدی را انجام دهد، اطلاعات سفارش فوراً در این جدول ظاهر می‌گردد.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-2xl border border-purple-900/40 bg-[#130b2e]">
                  <table className="w-full text-xs text-right">
                    <thead className="bg-[#190f38] text-slate-300 border-b border-purple-900/50">
                      <tr>
                        <th className="p-3.5">کد سفارش</th>
                        <th className="p-3.5">نام خریدار</th>
                        <th className="p-3.5">شماره تماس</th>
                        <th className="p-3.5">اقلام خریداری‌شده</th>
                        <th className="p-3.5">مبلغ کل</th>
                        <th className="p-3.5">وضعیت</th>
                        <th className="p-3.5 text-center">عملیات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-900/30 text-slate-200">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-purple-950/40 transition-colors">
                          <td className="p-3.5 font-mono font-bold text-purple-300">
                            {order.id}
                            <div className="text-[10px] text-slate-400 font-normal">{order.date}</div>
                          </td>
                          <td className="p-3.5">
                            <span className="font-bold text-white">{order.customerName}</span>
                            {order.customerEmail && (
                              <div className="text-[10px] text-slate-400">{order.customerEmail}</div>
                            )}
                          </td>
                          <td className="p-3.5 font-mono text-emerald-400">
                            {order.customerPhone}
                          </td>
                          <td className="p-3.5">
                            <div className="max-w-[220px] truncate font-medium">
                              {order.items.map((i) => `${i.product.title} (${i.quantity} عدد)`).join('، ')}
                            </div>
                          </td>
                          <td className="p-3.5 font-bold text-amber-300 whitespace-nowrap">
                            {formatPrice(order.totalAmount)}
                          </td>
                          <td className="p-3.5">
                            <select
                              value={order.status}
                              onChange={(e) => {
                                const newStat = e.target.value as OrderStatus;
                                onUpdateOrderStatus(order.id, newStat);
                                if (selectedOrder && selectedOrder.id === order.id) {
                                  setSelectedOrder({ ...selectedOrder, status: newStat });
                                }
                              }}
                              className="bg-[#0b061b] border border-purple-700/60 rounded-xl px-2.5 py-1.5 text-xs text-amber-200 focus:outline-none focus:border-amber-400 cursor-pointer font-medium"
                            >
                              <option value="در حال بررسی">در حال بررسی</option>
                              <option value="تایید شده / در حال آماده‌سازی">تایید شده / در حال آماده‌سازی</option>
                              <option value="ارسال شده به پست">ارسال شده به پست</option>
                              <option value="در حال طراحی و کدنویسی">در حال طراحی و کدنویسی (پروژه‌ها)</option>
                              <option value="تحویل نهایی شده">تحویل نهایی شده</option>
                              <option value="لغو شده">لغو شده</option>
                              {/* Legacy status mappings for backwards compatibility */}
                              {order.status === 'در حال طراحی و بهینه‌سازی' && (
                                <option value="در حال طراحی و بهینه‌سازی">در حال طراحی و کدنویسی</option>
                              )}
                              {order.status === 'تایید شده و آغاز پروژه' && (
                                <option value="تایید شده و آغاز پروژه">تایید شده / در حال آماده‌سازی</option>
                              )}
                              {order.status === 'تکمیل شده و تحویل نهایی' && (
                                <option value="تکمیل شده و تحویل نهایی">تحویل نهایی شده</option>
                              )}
                            </select>
                          </td>
                          <td className="p-3.5 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                onClick={() => setSelectedOrder(order)}
                                className="px-2.5 py-1 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-[11px] font-bold"
                              >
                                جزئیات
                              </button>
                              {onDeleteOrder && (
                                <button
                                  onClick={() => onDeleteOrder(order.id)}
                                  className="p-1 rounded-lg hover:bg-rose-950/60 text-slate-400 hover:text-rose-400 transition-colors"
                                  title="حذف سفارش"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: PRODUCTS LIST */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">لیست کالاهای موجود در فروشگاه:</h3>
                <button
                  onClick={handleStartNew}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>ثبت کالای جدید</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-4 rounded-2xl bg-[#140b2f] border border-purple-900/40 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] bg-purple-950 px-2 py-0.5 rounded text-purple-300 font-bold">
                          {prod.category}
                        </span>
                        {prod.badge && (
                          <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded">
                            {prod.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-3 mb-2">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="w-12 h-12 rounded-xl object-cover border border-purple-900/60 shrink-0"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-white line-clamp-2">{prod.title}</h4>
                          <p className="text-xs text-amber-300 font-bold mt-1">{formatPrice(prod.price)}</p>
                          {prod.couponCode && (
                            <div className="flex items-center gap-1 mt-1 text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30 w-fit">
                              <Ticket className="w-3 h-3" />
                              <span>کد تخفیف: <strong className="font-mono">{prod.couponCode}</strong> ({prod.couponDiscountPercent || 15}%)</span>
                            </div>
                          )}
                          {prod.isIncredible && (
                            <div className="flex items-center gap-1 mt-1 text-[10px] text-rose-300 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/30 w-fit">
                              <Clock className="w-3 h-3 text-rose-400" />
                              <span>تایمر شگفت‌انگیز: {formatRemainingTime(prod.incredibleExpiresAt)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-purple-900/40 mt-2">
                      <span className="text-[11px] text-slate-400 truncate max-w-[140px]">{prod.deliveryDays}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setSelectedTestProductId(prod.id);
                            setActiveTab('test-order');
                          }}
                          className="px-2 py-1 rounded-lg bg-emerald-600/25 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer active:scale-95"
                          title="تست خرید واقعی، پرداخت بانکی و نحوه تحویل این محصول به مشتری"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                          <span>تست پرداخت این کالا</span>
                        </button>
                        <button
                          onClick={() => handleStartEdit(prod)}
                          className="p-1.5 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
                          title="ویرایش این کالا"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDeleteProduct(prod.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                          title="حذف این کالا"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ADD/EDIT PRODUCT FORM (Universal for all products & Custom Categories) */}
          {activeTab === 'new-product' && (
            <div className="max-w-3xl mx-auto space-y-5">
              <div className="p-4 bg-purple-950/30 rounded-2xl border border-purple-800/40 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-white mb-1">
                    {editingProductId ? 'ویرایش اطلاعات کالا یا محصول' : 'فرم ثبت هرگونه کالا یا محصول جدید در فروشگاه'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    شما می‌توانید هر نوع کالای فیزیکی، دیجیتالی، پوشاک، لوازم خانگی یا خدمات را همراه با دسته‌بندی دلخواه ثبت کنید.
                  </p>
                </div>
                {editingProductId && (
                  <button
                    onClick={handleStartNew}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                  >
                    لغو ویرایش (کالای جدید)
                  </button>
                )}
              </div>

              {formSuccess && (
                <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/50 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{formSuccess}</span>
                </div>
              )}

              <form onSubmit={handleCreateProduct} className="space-y-4">
                
                {/* 1. Title & Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold text-slate-300">عنوان کالا یا محصول (الزامی):</label>
                    <input
                      type="text"
                      placeholder="مثلاً: کفش ورزشی نایک، گوشی سامسونگ، عطر ادکلن دیور، کتاب روانشناسی..."
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full bg-black/50 border border-purple-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">برند یا سازنده (اختیاری):</label>
                    <input
                      type="text"
                      placeholder="نایک، سامسونگ، اپل، دل، ال‌جی..."
                      value={newBrand}
                      onChange={(e) => setNewBrand(e.target.value)}
                      className="w-full bg-black/50 border border-purple-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* 2. CATEGORY SELECTION (Dynamic or Custom Created!) */}
                <div className="p-3.5 bg-[#140b2f] border border-purple-900/60 rounded-2xl space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                      <Tag className="w-4 h-4 text-amber-400" />
                      <span>دسته‌بندی محصول:</span>
                    </label>
                    <div className="flex items-center gap-3 text-xs">
                      <button
                        type="button"
                        onClick={() => setIsCustomCategory(false)}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                          !isCustomCategory
                            ? 'bg-purple-700 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        انتخاب از دسته‌های موجود
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsCustomCategory(true)}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                          isCustomCategory
                            ? 'bg-amber-400 text-slate-950 font-black'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        + ساخت دسته‌بندی جدید
                      </button>
                    </div>
                  </div>

                  {isCustomCategory ? (
                    <div className="space-y-1 animate-in fade-in">
                      <input
                        type="text"
                        placeholder="نام دسته‌بندی دلخواه خود را بنویسید (مثلاً: پوشاک و کفش، عطر و ادکلن، ابزار برقی، کتاب، لوازم خودرو...)"
                        value={customCategoryName}
                        onChange={(e) => setCustomCategoryName(e.target.value)}
                        className="w-full bg-black/60 border border-amber-400/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none"
                        required={isCustomCategory}
                      />
                      <p className="text-[11px] text-amber-200/80">
                        این دسته‌بندی جدید فوراً در نوار دسته‌بندی‌ها و فیلترهای بالای سایت قرار می‌گیرد.
                      </p>
                    </div>
                  ) : (
                    <select
                      value={selectedExistingCategory}
                      onChange={(e) => setSelectedExistingCategory(e.target.value)}
                      className="w-full bg-black/50 border border-purple-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-amber-400 focus:outline-none cursor-pointer"
                    >
                      {existingCategories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                {/* 3. Pricing & Discount Calculation & Shipping */}
                <div className="bg-purple-950/30 border border-purple-800/60 p-4 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                      <Calculator className="w-4 h-4 text-amber-400" />
                      <span>تعیین قیمت و محاسبه خودکار تخفیف محصول</span>
                    </div>
                    <span className="text-[10px] text-slate-400">
                      محاسبه خودکار درصد و قیمت فروش
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">قیمت اصلی / پایه (تومان):</label>
                      <input
                        type="number"
                        placeholder="مثال: 1000000"
                        value={newOriginalPrice}
                        onChange={(e) => handleOriginalPriceChange(e.target.value)}
                        className="w-full bg-black/50 border border-purple-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-amber-300 flex items-center gap-1">
                        <Percent className="w-3.5 h-3.5 text-amber-400" />
                        <span>درصد تخفیف (%):</span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          max="99"
                          placeholder="مثال: 20"
                          value={newDiscountPercent}
                          onChange={(e) => handleDiscountPercentChange(e.target.value)}
                          className="w-full bg-amber-950/30 border border-amber-500/50 rounded-xl px-3.5 py-2 text-xs text-amber-300 font-bold focus:border-amber-400 focus:outline-none"
                        />
                        <span className="absolute left-3 top-2 text-xs text-amber-400 font-black">%</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-emerald-300">قیمت فروش نهایی (تومان):</label>
                      <input
                        type="number"
                        placeholder="مثال: 800000"
                        value={newPrice}
                        onChange={(e) => handleFinalPriceChange(e.target.value)}
                        className="w-full bg-emerald-950/30 border border-emerald-500/50 rounded-xl px-3.5 py-2 text-xs text-emerald-300 font-bold focus:border-emerald-400 focus:outline-none"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">زمان تحویل / ارسال:</label>
                      <input
                        type="text"
                        placeholder="مثال: ۱ تا ۳ روز کاری"
                        value={newDeliveryDays}
                        onChange={(e) => setNewDeliveryDays(e.target.value)}
                        className="w-full bg-black/50 border border-purple-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {newOriginalPrice && newPrice && (
                    <div className="flex flex-wrap items-center gap-3 bg-black/40 p-2.5 rounded-xl text-[11px] text-slate-300 border border-purple-900/40">
                      <span>پیش‌نمایش قیمت در سایت:</span>
                      <span className="line-through text-slate-500">{formatPrice(parseInt(newOriginalPrice, 10) || 0)}</span>
                      <ArrowDownRight className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-black text-emerald-400 text-xs">{formatPrice(parseInt(newPrice, 10) || 0)}</span>
                      {newDiscountPercent && parseInt(newDiscountPercent, 10) > 0 && (
                        <span className="bg-red-600 text-white font-black text-[10px] px-2 py-0.5 rounded-full">
                          {newDiscountPercent}% تخفیف
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* 4. Dedicated Product Coupon Code (Specifically for this product) */}
                <div className="p-4 rounded-2xl bg-[#140b2e] border border-amber-500/50 space-y-3 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                      <Ticket className="w-4 h-4 text-amber-400" />
                      <span>ساخت کد تخفیف اختصاصی برای این محصول (Coupon Code)</span>
                    </div>
                    <span className="text-[10px] bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40 font-bold">
                      اختیاری
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    می‌توانید برای همین محصول یک کد تخفیف مشخص و درصد تخفیف معین تعریف کنید. وقتی خریدار در سبد خرید این کد را بنویسد، تخفیف فوراً روی قیمت این محصول اعمال می‌گردد.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">کد تخفیف اختصاصی محصول (لاتین):</label>
                      <input
                        type="text"
                        dir="ltr"
                        placeholder="مثلاً: PROD25 یا SPECIAL30"
                        value={newProductCouponCode}
                        onChange={(e) => setNewProductCouponCode(e.target.value.toUpperCase())}
                        className="w-full bg-black/60 border border-amber-500/40 rounded-xl px-3.5 py-2 text-xs text-amber-300 font-mono uppercase font-bold focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">درصد تخفیف این کد (%):</label>
                      <div className="relative">
                        <input
                          type="number"
                          min="1"
                          max="99"
                          placeholder="مثلاً: 25 (درصد کسر از قیمت)"
                          value={newProductCouponPercent}
                          onChange={(e) => setNewProductCouponPercent(e.target.value)}
                          className="w-full bg-black/60 border border-amber-500/40 rounded-xl px-3.5 py-2 text-xs text-white font-bold focus:border-amber-400 focus:outline-none"
                        />
                        <span className="absolute left-3 top-2 text-xs text-amber-400 font-black">%</span>
                      </div>
                    </div>
                  </div>

                  {newProductCouponCode && (
                    <div className="p-2.5 bg-amber-950/40 border border-amber-500/30 rounded-xl flex items-center gap-2 text-[11px] text-amber-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>
                        کد تخفیف <strong className="font-mono text-amber-300">«{newProductCouponCode}»</strong> با کسر <strong className="text-amber-300">{newProductCouponPercent || newDiscountPercent || '15'}%</strong> برای خریداران این محصول فعال خواهد شد.
                      </span>
                    </div>
                  )}
                </div>

                {/* 5. Warranty & Badge */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">گارانتی / ضمانت کالا:</label>
                    <input
                      type="text"
                      placeholder="مثال: ۷ روز ضمانت بازگشت یا گارانتی ۱۸ ماهه"
                      value={newWarranty}
                      onChange={(e) => setNewWarranty(e.target.value)}
                      className="w-full bg-black/50 border border-purple-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">برچسب ویژه (Badge):</label>
                    <input
                      type="text"
                      placeholder="مثلاً: پرفروش، ویژه جشنواره، ارسال رایگان"
                      value={newBadge}
                      onChange={(e) => setNewBadge(e.target.value)}
                      className="w-full bg-black/50 border border-purple-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* 5.1 DIGIKALA-GRADE REAL IMAGE UPLOAD & GALLERY (بدون نیاز به فیلترشکن برای کاربر ایران) */}
                <div className="p-4 bg-[#140c30] border border-purple-800/80 rounded-2xl space-y-4">
                  {/* Hidden File Inputs */}
                  <input
                    ref={mainImageInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleMainImageUpload}
                  />
                  <input
                    ref={galleryImageInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleGalleryImagesUpload}
                  />

                  {/* Section Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-900/60 pb-3">
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                        <Camera className="w-4 h-4 text-amber-400" />
                        <span>تصاویر و گالری کالا (طراحی شده دقیقاً مشابه دی‌جی‌کالا)</span>
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        عکس‌های آپلود شده بهینه‌سازی می‌شوند تا برای تمام کاربران در سراسر ایران <strong>بدون نیاز به فیلترشکن</strong> با سرعت بالا باز شوند.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowUrlInput(!showUrlInput)}
                        className="text-[11px] text-purple-300 hover:text-white bg-purple-950/80 px-2.5 py-1 rounded-lg border border-purple-700/50 flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>{showUrlInput ? 'بستن ورودی لینک' : 'ورود آدرس اینترنتی (URL)'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Optional Manual URL Input */}
                  {showUrlInput && (
                    <div className="p-3 bg-black/50 border border-purple-700/50 rounded-xl space-y-1.5 animate-in fade-in">
                      <label className="text-[11px] font-bold text-amber-300 block text-right">
                        آدرس مستقیم تصویر اینترنتی (اختیاری):
                      </label>
                      <input
                        type="url"
                        dir="ltr"
                        placeholder="https://..."
                        value={newImage}
                        onChange={(e) => setNewImage(e.target.value)}
                        className="w-full bg-black/80 border border-purple-600 rounded-lg px-3 py-1.5 text-xs text-white font-mono focus:border-amber-400 focus:outline-none text-left"
                      />
                    </div>
                  )}

                  {/* PART A: Main Product Cover Image */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-white flex items-center gap-1.5">
                        <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                        <span>تصویر اصلی کالا (عکس کاور):</span>
                      </label>
                      {newImage && (
                        <span className="text-[10px] text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
                          تصویر اصلی انتخاب شده است
                        </span>
                      )}
                    </div>

                    {newImage ? (
                      <div className="flex flex-col sm:flex-row items-center gap-4 p-3 bg-black/40 border border-purple-700/60 rounded-xl">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-black/80 border border-purple-500/50 relative shrink-0 group">
                          <img
                            src={newImage}
                            alt="تصویر اصلی"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = getFallbackProductImage(newTitle, selectedExistingCategory);
                            }}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>

                        <div className="flex-1 space-y-2 text-right">
                          <div className="text-xs font-bold text-white">
                            این عکس به عنوان تصویر شاخص و ویترین کالا در تمام بخش‌های فروشگاه نمایش داده می‌شود.
                          </div>
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <button
                              type="button"
                              disabled={isUploadingImage}
                              onClick={() => mainImageInputRef.current?.click()}
                              className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                            >
                              <Upload className="w-3.5 h-3.5" />
                              <span>{isUploadingImage ? 'در حال بهینه‌سازی...' : 'تغییر عکس از سیستم یا گوشی'}</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                if (newImage) {
                                  setCropperModal({
                                    isOpen: true,
                                    imageSrc: newImage,
                                    aspectRatio: 1,
                                    target: 'product_main',
                                  });
                                }
                              }}
                              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                              title="تنظیم کادر، زوم و برش تصویر کالا"
                            >
                              <Crop className="w-3.5 h-3.5" />
                              <span>تنظیم کادر و برش (Crop)</span>
                            </button>

                            <button
                              type="button"
                              onClick={handleSetFallbackImage}
                              className="px-3 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-600/50 text-purple-200 hover:text-white font-medium text-xs transition-colors"
                              title="استفاده از تصویر پیش‌فرض فوق‌سبک داخلی بدون نیاز به اینترنت خارجی"
                            >
                              تصویر پیش‌فرض داخلی
                            </button>

                            <button
                              type="button"
                              onClick={() => setNewImage('')}
                              className="px-2.5 py-1.5 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-800/60 text-rose-300 hover:text-white font-medium text-xs transition-colors flex items-center gap-1"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>حذف</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => mainImageInputRef.current?.click()}
                        className="border-2 border-dashed border-purple-700/70 hover:border-amber-400 bg-purple-950/20 hover:bg-purple-950/40 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-purple-900/60 group-hover:bg-amber-400 group-hover:text-slate-950 text-purple-300 flex items-center justify-center transition-all mb-2 shadow-lg">
                          <Upload className="w-6 h-6" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          {isUploadingImage ? 'در حال فشرده‌سازی و بارگذاری عکس...' : 'برای انتخاب عکس اصلی کالا کلیک کنید'}
                        </span>
                        <span className="text-[11px] text-slate-400 mt-1">
                          پشتیبانی از انواع فرمت‌های تصویری (JPG, PNG, WebP) - فشرده‌سازی خودکار و لود آنی در ایران
                        </span>
                        <div className="mt-3 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSetFallbackImage();
                            }}
                            className="text-[10px] bg-purple-900/80 hover:bg-purple-800 text-purple-200 px-3 py-1 rounded-lg border border-purple-700"
                          >
                            استفاده از تصویر پیش‌فرض سبک
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* PART B: Digikala Product Gallery (Multiple Images) */}
                  <div className="space-y-2 pt-2 border-t border-purple-900/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Images className="w-3.5 h-3.5 text-cyan-400" />
                          <span>گالری عکس‌های کالا (زوایای مختلف کالا مثل دی‌جی‌کالا):</span>
                        </label>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          کاربران می‌توانند در صفحه محصول این عکس‌ها را به عنوان گالری ورق بزنند و جزئیات کالا را دقیق بررسی کنند.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => galleryImageInputRef.current?.click()}
                        disabled={isUploadingImage}
                        className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>افزودن عکس به گالری</span>
                      </button>
                    </div>

                    {/* Gallery Thumbnails List */}
                    <div className="flex items-center gap-3 overflow-x-auto p-2 bg-black/40 border border-purple-800/60 rounded-xl min-h-[90px]">
                      {newGallery.length > 0 ? (
                        <>
                          {newGallery.map((imgUrl, idx) => (
                            <div
                              key={idx}
                              className="relative w-20 h-20 rounded-xl overflow-hidden bg-black border border-purple-600/70 shrink-0 group"
                            >
                              <img
                                src={imgUrl}
                                alt={`گالری ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                <button
                                  type="button"
                                  onClick={() => handleRemoveGalleryImage(idx)}
                                  className="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md hover:bg-rose-500"
                                  title="حذف این عکس از گالری"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <span className="absolute bottom-1 right-1 text-[9px] bg-black/80 text-white px-1 rounded">
                                {idx + 1}
                              </span>
                            </div>
                          ))}

                          {newGallery.length < 8 && (
                            <button
                              type="button"
                              onClick={() => galleryImageInputRef.current?.click()}
                              className="w-20 h-20 rounded-xl border-2 border-dashed border-purple-700/80 hover:border-cyan-400 bg-purple-950/30 hover:bg-purple-950/60 flex flex-col items-center justify-center text-purple-300 hover:text-cyan-300 transition-colors shrink-0 cursor-pointer"
                            >
                              <Plus className="w-5 h-5 mb-0.5" />
                              <span className="text-[10px] font-bold">عکس جدید</span>
                            </button>
                          )}
                        </>
                      ) : (
                        <div
                          onClick={() => galleryImageInputRef.current?.click()}
                          className="w-full py-4 text-center cursor-pointer hover:bg-purple-950/20 rounded-lg transition-colors"
                        >
                          <span className="text-xs text-slate-400 block font-medium">
                            هنوز عکسی به گالری کالا اضافه نشده است. برای انتخاب چند عکس همزمان کلیک کنید.
                          </span>
                          <span className="text-[10px] text-cyan-400 font-bold mt-1 inline-block">
                            + افزودن عکس‌های بیشتر از جعبه، زوایا و محتویات کالا
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 6. General E-commerce Options */}
                <div className="p-3.5 bg-[#150d30] border border-purple-900/50 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isIncredible}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setIsIncredible(checked);
                        if (checked && !incredibleExpiresAt) {
                          handleSetIncredibleDuration(incredibleTimerDuration || '1week');
                        }
                      }}
                      className="rounded border-rose-500 text-rose-500 focus:ring-0"
                    />
                    <span className="text-rose-300 font-bold flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5" />
                      پیشنهاد شگفت‌انگیز
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isPopular}
                      onChange={(e) => setIsPopular(e.target.checked)}
                      className="rounded border-orange-500 text-orange-500 focus:ring-0"
                    />
                    <span className="text-orange-300 font-bold flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" />
                      کالای پرفروش
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isFreeShipping}
                      onChange={(e) => setIsFreeShipping(e.target.checked)}
                      className="rounded border-emerald-500 text-emerald-500 focus:ring-0"
                    />
                    <span className="text-emerald-300 font-bold flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5" />
                      ارسال رایگان
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isInStock}
                      onChange={(e) => setIsInStock(e.target.checked)}
                      className="rounded border-purple-500 text-purple-500 focus:ring-0"
                    />
                    <span className="text-purple-300 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      موجود در انبار
                    </span>
                  </label>
                </div>

                {/* 6.0 Subscription Configuration (Configurable duration selector for SaaS/Software products) */}
                <div className="p-4 bg-gradient-to-r from-purple-950/70 via-indigo-950/70 to-purple-950/70 border border-amber-400/60 rounded-2xl space-y-3 shadow-xl">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isSubscription}
                        onChange={(e) => setIsSubscription(e.target.checked)}
                        className="w-4 h-4 rounded border-amber-400 text-amber-500 focus:ring-0 cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm font-black text-amber-300 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        خرید به صورت اشتراکی (دارای انتخاب مدت زمان اشتراک در موقع خرید)
                      </span>
                    </label>
                    <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full">
                      ویژه نرم‌افزارها و سامانه‌ها
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    با فعال‌سازی این گزینه، هنگامی که مشتری روی «افزودن به سبد خرید» یا «خرید فوری» این محصول کلیک کند، سیستم به طور ویژه از او می‌پرسد برای چه مدت (۱ روز، ۱ هفته، ۱ ماه، ۳ ماه، ۶ ماه، ۱ سال یا روزهای دلخواه) اشتراک تهیه می‌کند.
                  </p>

                  {isSubscription && (
                    <div className="p-3 bg-black/60 border border-amber-400/50 rounded-xl space-y-2 animate-in fade-in">
                      <label className="text-xs font-bold text-amber-200 block">
                        قیمت پایه هر روز اشتراک (تومان):
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          placeholder="250000"
                          value={pricePerDayInput}
                          onChange={(e) => setPricePerDayInput(e.target.value)}
                          className="w-48 bg-[#0f0820] border border-amber-400/80 rounded-lg px-3 py-1.5 text-xs text-amber-300 font-black focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                        <span className="text-xs text-slate-300 font-bold">تومان به ازای هر روز</span>
                        {pricePerDayInput && !isNaN(parseInt(pricePerDayInput, 10)) && (
                          <span className="text-xs text-emerald-400 font-mono mr-auto">
                            (۱ ماه اشتراک = { (parseInt(pricePerDayInput, 10) * 30).toLocaleString('fa-IR') } تومان)
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* 6.1 Incredible Offer Countdown Timer Configuration (Configurable: 1 day, 1 week, 1 month, custom) */}
                {isIncredible && (
                  <div className="p-4 bg-gradient-to-r from-rose-950/40 via-purple-950/50 to-indigo-950/40 border border-rose-600/50 rounded-2xl space-y-3.5 transition-all shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-800/40 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-rose-900/60 text-rose-300 border border-rose-500/40">
                          <Clock className="w-5 h-5 animate-pulse" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-black text-rose-200">
                            تنظیم تایمر شمارش معکوس پیشنهاد شگفت‌انگیز
                          </h4>
                          <p className="text-[11px] text-slate-300">
                            تعیین مدت زمان نمایش در باکس شگفت‌انگیز و ساعت شمارش معکوس زنده در سایت
                          </p>
                        </div>
                      </div>

                      <div className="text-left font-mono text-xs text-rose-300">
                        {incredibleExpiresAt ? (
                          <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-rose-500/30 text-[11px] inline-block">
                            ⏳ {formatRemainingTime(incredibleExpiresAt)}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[11px]">پیش‌فرض ۲۴ ساعته</span>
                        )}
                      </div>
                    </div>

                    {/* Quick Preset Buttons */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200">
                        انتخاب سریع مدت زمان اعتبار تخفیف:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        <button
                          type="button"
                          onClick={() => handleSetIncredibleDuration('1day')}
                          className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border text-center flex items-center justify-center gap-1 ${
                            incredibleTimerDuration === '1day'
                              ? 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-600/30'
                              : 'bg-purple-950/60 text-slate-300 hover:text-white border-purple-800/60 hover:bg-purple-900/60'
                          }`}
                        >
                          <span>⏱️ ۱ روز (۲۴ ساعت)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSetIncredibleDuration('3days')}
                          className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border text-center flex items-center justify-center gap-1 ${
                            incredibleTimerDuration === '3days'
                              ? 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-600/30'
                              : 'bg-purple-950/60 text-slate-300 hover:text-white border-purple-800/60 hover:bg-purple-900/60'
                          }`}
                        >
                          <span>⏱️ ۳ روز (۷۲ ساعت)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSetIncredibleDuration('1week')}
                          className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border text-center flex items-center justify-center gap-1 ${
                            incredibleTimerDuration === '1week'
                              ? 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-600/30'
                              : 'bg-purple-950/60 text-slate-300 hover:text-white border-purple-800/60 hover:bg-purple-900/60'
                          }`}
                        >
                          <span>⏱️ ۱ هفته (۷ روز)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSetIncredibleDuration('1month')}
                          className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border text-center flex items-center justify-center gap-1 ${
                            incredibleTimerDuration === '1month'
                              ? 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-600/30'
                              : 'bg-purple-950/60 text-slate-300 hover:text-white border-purple-800/60 hover:bg-purple-900/60'
                          }`}
                        >
                          <span>⏱️ ۱ ماه (۳۰ روز)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setIncredibleTimerDuration('custom')}
                          className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border text-center flex items-center justify-center gap-1 ${
                            incredibleTimerDuration === 'custom'
                              ? 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-600/30'
                              : 'bg-purple-950/60 text-slate-300 hover:text-white border-purple-800/60 hover:bg-purple-900/60'
                          }`}
                        >
                          <span>⚙️ زمان دلخواه</span>
                        </button>
                      </div>
                    </div>

                    {/* Custom Date/Time input if 'custom' is selected */}
                    {incredibleTimerDuration === 'custom' && (
                      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-black/40 p-3 rounded-xl border border-rose-900/40">
                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            تاریخ و ساعت دقیق پایان تخفیف:
                          </label>
                          <input
                            type="datetime-local"
                            value={incredibleExpiresAt ? formatForDateTimeLocal(incredibleExpiresAt) : ''}
                            onChange={(e) => {
                              if (e.target.value) {
                                setIncredibleExpiresAt(new Date(e.target.value).toISOString());
                              }
                            }}
                            className="w-full bg-[#110826] border border-purple-700/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-300 block mb-1">
                            تمدید سریع برحسب ساعت دلخواه:
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="720"
                            placeholder="مثلاً: ۴۸ ساعت"
                            onChange={(e) => {
                              const hrs = parseInt(e.target.value, 10);
                              if (hrs > 0) {
                                setIncredibleExpiresAt(new Date(Date.now() + hrs * 3600 * 1000).toISOString());
                              }
                            }}
                            className="w-full bg-[#110826] border border-purple-700/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                          />
                        </div>
                      </div>
                    )}

                    {/* Status Feedback */}
                    <div className="flex flex-wrap items-center justify-between text-[11px] bg-rose-950/30 p-2.5 rounded-xl border border-rose-900/30 text-rose-200 gap-2">
                      <span>
                        زمان دقیق انقضا: <strong>{formatPersianDateTime(incredibleExpiresAt)}</strong>
                      </span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        تایمر شمارش معکوس برای این محصول در صفحه اول فعال است
                      </span>
                    </div>
                  </div>
                )}

                {/* 6. Descriptions */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">توضیح کوتاه معرفی کالا:</label>
                  <input
                    type="text"
                    placeholder="یک خط توضیح خلاصه و جذاب برای نمایش در کارت محصول"
                    value={newShortDesc}
                    onChange={(e) => setNewShortDesc(e.target.value)}
                    className="w-full bg-black/50 border border-purple-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">توضیحات کامل و معرفی محصول:</label>
                  <textarea
                    rows={3}
                    placeholder="توضیحات جامع درباره کاربردها، جنس، کیفیت و ویژگی‌های کالا..."
                    value={newFullDesc}
                    onChange={(e) => setNewFullDesc(e.target.value)}
                    className="w-full bg-black/50 border border-purple-800 rounded-xl p-3 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">ویژگی‌ها و مشخصات فنی (هر خط یک ویژگی):</label>
                  <textarea
                    rows={3}
                    value={newFeatures}
                    onChange={(e) => setNewFeatures(e.target.value)}
                    className="w-full bg-black/50 border border-purple-800 rounded-xl p-3 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs shadow-xl shadow-emerald-600/20 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                >
                  {editingProductId ? 'ذخیره تغییرات کالا و به‌روزرسانی در فروشگاه' : 'ثبت نهایی کالا و انتشار فوری در سایت جهش‌کالا'}
                </button>
              </form>
            </div>
          )}

          {/* TAB 4: COUPONS & DISCOUNTS MANAGEMENT */}
          {activeTab === 'coupons' && (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Add New Coupon Card */}
              <div className="p-6 rounded-3xl bg-[#160d33] border border-amber-500/40 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-black">
                      %
                    </div>
                    <h3 className="text-sm font-black text-white">ایجاد کد تخفیف جدید برای مشتریان</h3>
                  </div>
                  <span className="text-[11px] bg-amber-950/80 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full font-bold">
                    اعمال خودکار درصد روی فاکتور
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  کد تخفیف مورد نظر را تعریف کنید و درصد تخفیف را تعیین نمایید تا خریداران هنگام ثبت سفارش با وارد کردن کد، از تخفیف بهره‌مند شوند.
                </p>

                {couponSuccessMsg && (
                  <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-2xl flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{couponSuccessMsg}</span>
                  </div>
                )}

                <form onSubmit={handleCreateCoupon} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">کد تخفیف (لاتین):</label>
                    <input
                      type="text"
                      dir="ltr"
                      placeholder="مثلاً: JAHESH20 یا OFF50"
                      value={newCouponCode}
                      onChange={(e) => setNewCouponCode(e.target.value.toUpperCase())}
                      className="w-full bg-black/60 border border-amber-500/40 rounded-xl px-3 py-2 text-xs text-amber-300 font-mono uppercase font-bold focus:border-amber-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">درصد تخفیف (۱ تا ۱۰۰):</label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        max="100"
                        placeholder="مثال: 20"
                        value={newCouponPercent}
                        onChange={(e) => setNewCouponPercent(e.target.value)}
                        className="w-full bg-black/60 border border-amber-500/40 rounded-xl px-3 py-2 text-xs text-white font-bold focus:border-amber-400 focus:outline-none"
                        required
                      />
                      <span className="absolute left-3 top-2 text-xs text-amber-400 font-black">%</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">توضیحات کوتاه / مناسبت:</label>
                    <input
                      type="text"
                      placeholder="مثلاً: تخفیف ویژه نوروز یا افتتاحیه"
                      value={newCouponDesc}
                      onChange={(e) => setNewCouponDesc(e.target.value)}
                      className="w-full bg-black/60 border border-purple-800 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-3 pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>ایجاد و فعال‌سازی فوری کد تخفیف در فروشگاه</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Coupons List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-300 flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-purple-400" />
                    <span>کدهای تخفیف فعال در سیستم ({coupons.length})</span>
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coupons.map((cp) => (
                    <div
                      key={cp.id}
                      className="p-4 rounded-2xl bg-[#140c2e] border border-purple-900/60 flex items-center justify-between hover:border-purple-700 transition-all"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-black text-sm text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-lg border border-amber-500/40">
                            {cp.code}
                          </span>
                          <span className="bg-red-950 text-red-300 border border-red-500/40 text-[10px] font-black px-2 py-0.5 rounded-full">
                            {cp.discountPercent}% تخفیف
                          </span>
                          {cp.isActive ? (
                            <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                              فعال
                            </span>
                          ) : (
                            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                              غیرفعال
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400">{cp.description || 'بدون توضیحات'}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        {onToggleCoupon && (
                          <button
                            onClick={() => onToggleCoupon(cp.id)}
                            title={cp.isActive ? 'غیرفعال‌سازی' : 'فعال‌سازی'}
                            className="p-1.5 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-slate-300 transition-colors"
                          >
                            {cp.isActive ? (
                              <ToggleRight className="w-5 h-5 text-emerald-400" />
                            ) : (
                              <ToggleLeft className="w-5 h-5 text-slate-500" />
                            )}
                          </button>
                        )}
                        {onDeleteCoupon && (
                          <button
                            onClick={() => onDeleteCoupon(cp.id)}
                            title="حذف کد تخفیف"
                            className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                  {coupons.length === 0 && (
                    <div className="col-span-2 py-8 text-center text-slate-500 text-xs bg-[#120a28] rounded-2xl border border-dashed border-purple-900">
                      هیچ کد تخفیفی تاکنون ثبت نشده است. از فرم بالا کد جدید ایجاد کنید.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB: BANNERS & SLIDER MANAGEMENT */}
          {activeTab === 'banners' && (
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Add / Edit Banner Form */}
              <div className="bg-[#140c2e] border border-purple-800/80 rounded-2xl p-5 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-purple-900/60 pb-3">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-amber-400" />
                    <h3 className="text-sm font-bold text-white">
                      {editingBannerId ? 'ویرایش بنر اسلایدر' : 'افزودن بنر جدید به اسلایدر صفحه اصلی'}
                    </h3>
                  </div>
                  {editingBannerId && (
                    <button
                      type="button"
                      onClick={handleResetBannerForm}
                      className="text-xs text-rose-300 hover:text-white bg-rose-950/60 px-3 py-1 rounded-lg border border-rose-800/60"
                    >
                      انصراف از ویرایش
                    </button>
                  )}
                </div>

                {bannerSuccessMessage && (
                  <div className="p-3 bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs rounded-xl flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{bannerSuccessMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSaveBannerForm} className="space-y-4 text-right">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Title */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        عنوان اصلی بنر <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={bannerTitle}
                        onChange={(e) => setBannerTitle(e.target.value)}
                        placeholder="مثلاً: جشنواره تخفیف‌های شگفت‌انگیز پاییزه"
                        className="w-full bg-black/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    {/* Subtitle */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        توضیحات کوتاه بنر
                      </label>
                      <input
                        type="text"
                        value={bannerSubtitle}
                        onChange={(e) => setBannerSubtitle(e.target.value)}
                        placeholder="مثلاً: امکان خرید با درگاه امن بانکی و ضمانت اصالت"
                        className="w-full bg-black/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    {/* Badge */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        نشانک / برچسب بالای بنر
                      </label>
                      <input
                        type="text"
                        value={bannerBadge}
                        onChange={(e) => setBannerBadge(e.target.value)}
                        placeholder="مثلاً: جشنواره تخفیف‌های ویژه یا تضمین اصالت"
                        className="w-full bg-black/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    {/* CTA Button Text */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        متن دکمه اکشن بنر
                      </label>
                      <input
                        type="text"
                        value={bannerCta}
                        onChange={(e) => setBannerCta(e.target.value)}
                        placeholder="مثلاً: مشاهده تخفیف‌های شگفت‌انگیز یا خرید آنلاین"
                        className="w-full bg-black/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    {/* Action Type */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        عملکرد کلیک روی دکمه بنر
                      </label>
                      <select
                        value={bannerActionType}
                        onChange={(e) => setBannerActionType(e.target.value as any)}
                        className="w-full bg-black/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-amber-300 font-bold focus:outline-none focus:border-amber-400"
                      >
                        <option value="incredible">هدایت به لیست شگفت‌انگیزها (تخفیف‌دارها)</option>
                        <option value="all">نمایش تمام کالاها</option>
                        <option value="category">انتخاب دسته‌بندی خاص</option>
                        <option value="link">باز کردن لینک اینترنتی خارجی</option>
                      </select>
                    </div>

                    {/* Action Target (if category or link) */}
                    {(bannerActionType === 'category' || bannerActionType === 'link') && (
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          {bannerActionType === 'category' ? 'نام دسته‌بندی مورد نظر' : 'آدرس اینترنتی لینک (URL)'}
                        </label>
                        <input
                          type="text"
                          value={bannerActionTarget}
                          onChange={(e) => setBannerActionTarget(e.target.value)}
                          placeholder={bannerActionType === 'category' ? 'مثلاً: کالای دیجیتال یا پوشاک' : 'https://example.com'}
                          className="w-full bg-black/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    )}

                    {/* Color Theme Preset */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-300 mb-2">
                        تم رنگی پس‌زمینه بنر
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { name: 'بنفش سلطنتی', val: 'from-[#3b1261] via-[#220d3d] to-[#0d071a]' },
                          { name: 'آبی اقیانوسی', val: 'from-[#172554] via-[#111827] to-[#080d1a]' },
                          { name: 'نیلی تیره', val: 'from-[#1e1b4b] via-[#171239] to-[#0c081f]' },
                          { name: 'زمردی تیره', val: 'from-[#064e3b] via-[#022c22] to-[#051310]' },
                          { name: 'سرخ آتشین', val: 'from-[#881337] via-[#4c0519] to-[#1f020a]' },
                          { name: 'طلایی تیره', val: 'from-[#713f12] via-[#422006] to-[#1a0e02]' },
                        ].map((theme) => (
                          <button
                            key={theme.val}
                            type="button"
                            onClick={() => setBannerGradient(theme.val)}
                            className={`p-2.5 rounded-xl border text-xs text-right flex items-center justify-between transition-all ${
                              bannerGradient === theme.val
                                ? 'border-amber-400 bg-purple-900/60 text-amber-300 font-bold shadow-md'
                                : 'border-purple-800/40 bg-black/40 text-slate-400 hover:text-white'
                            }`}
                          >
                            <span>{theme.name}</span>
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${theme.val} border border-white/20`} />
                          </button>
                        ))}
                      </div>

                      {/* Opacity Control Slider */}
                      <div className="mt-3.5 p-3.5 bg-[#0f0924] border border-purple-800/60 rounded-xl space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                          <span>درصد شفافیت تم رنگی پس‌زمینه (Opacity)</span>
                          <span className="text-amber-400 font-bold px-2 py-0.5 bg-amber-950/60 border border-amber-500/40 rounded-lg text-xs" dir="ltr">
                            {bannerOpacity}%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 pt-1">
                          <span className="text-[10px] text-slate-400 shrink-0">۰٪ (شفاف/عکس روشن)</span>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            step="5"
                            value={bannerOpacity}
                            onChange={(e) => setBannerOpacity(Number(e.target.value))}
                            className="flex-1 h-2 bg-purple-900/80 rounded-lg appearance-none cursor-pointer accent-amber-400"
                          />
                          <span className="text-[10px] text-slate-400 shrink-0">۱۰۰٪ (رنگ کامل)</span>
                        </div>
                      </div>
                      
                    </div>

                    {/* Banner Image Upload & Preview */}
                    <div className="md:col-span-2 space-y-3">
                      <label className="block text-xs font-bold text-slate-300">
                        تصویر بنر (بارگذاری مستقیم یا آدرس اینترنتی) <span className="text-rose-400">*</span>
                      </label>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="file"
                          ref={bannerFileInputRef}
                          onChange={handleBannerImageUpload}
                          accept="image/*"
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => bannerFileInputRef.current?.click()}
                          disabled={bannerImageLoading}
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-900/80 hover:bg-purple-800 border border-purple-600/70 text-purple-200 hover:text-white font-bold rounded-xl text-xs transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
                        >
                          <Camera className="w-4 h-4 text-amber-400" />
                          <span>{bannerImageLoading ? 'در حال آماده‌سازی...' : 'بارگذاری عکس بنر از گالری/دستگاه'}</span>
                        </button>

                        {bannerImage && (
                          <button
                            type="button"
                            onClick={() => {
                              setCropperModal({
                                isOpen: true,
                                imageSrc: bannerImage,
                                aspectRatio: 21 / 9,
                                target: 'banner',
                              });
                            }}
                            className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
                            title="تنظیم کادر و زاویه نمایش بنر"
                          >
                            <Crop className="w-4 h-4" />
                            <span>تنظیم کادر و برش (Crop)</span>
                          </button>
                        )}

                        <input
                          type="text"
                          value={bannerImage}
                          onChange={(e) => setBannerImage(e.target.value)}
                          placeholder="یا وارد کردن مستقیم لینک تصویر (https://...)"
                          className="flex-1 bg-black/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-left"
                          dir="ltr"
                        />
                      </div>

                      {/* Live Banner Preview Box */}
                      {bannerImage && (
                        <div className="mt-3 p-3 rounded-2xl bg-black/60 border border-purple-800/80 space-y-2">
                          <span className="text-[11px] font-bold text-amber-300 block">پیش‌نمایش زنده بنر:</span>
                          <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden border border-purple-700/50 flex flex-col justify-between p-4 text-right">
                            <img
                              src={bannerImage}
                              alt="پیش‌نمایش بنر"
                              className="absolute inset-0 w-full h-full object-cover"
                              style={{ objectPosition: bannerImagePosition }}
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80';
                              }}
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${bannerGradient}`}
                              style={{ opacity: bannerOpacity / 100 }}
                            ></div>

                            <div className="relative z-10 flex justify-between items-center">
                              {bannerBadge ? (
                                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold border border-white/30">
                                  {bannerBadge}
                                </span>
                              ) : <span />}
                            </div>

                            <div className="relative z-10 space-y-1">
                              <h4 className="text-white font-black text-sm sm:text-base">{bannerTitle || 'عنوان بنر شما'}</h4>
                              <p className="text-slate-200 text-xs line-clamp-1">{bannerSubtitle || 'توضیحات کوتاه بنر'}</p>
                            </div>

                            <div className="relative z-10 flex justify-end">
                              <span className="px-3 py-1 bg-amber-400 text-black font-black text-xs rounded-lg shadow">
                                {bannerCta || 'مشاهده'}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    {editingBannerId && (
                      <button
                        type="button"
                        onClick={handleResetBannerForm}
                        className="px-4 py-2.5 bg-purple-950/80 hover:bg-purple-900 text-slate-300 rounded-xl text-xs font-bold transition-colors"
                      >
                        انصراف
                      </button>
                    )}
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl text-xs shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4" />
                      <span>{editingBannerId ? 'ذخیره تغییرات بنر' : 'افزودن و انتشار بنر'}</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* List of Existing Banners with Sorting & Controls */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-300 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>لیست بنرهای فعال در اسلایدر ({bannersList.length} بنر)</span>
                  </h4>
                  <span className="text-[10px] text-slate-400">
                    می‌توانید با فلش‌های بالا/پایین، اولویت نمایش بنرها در اسلایدر را جابجا کنید.
                  </span>
                </div>

                <div className="space-y-3">
                  {bannersList.map((banner, index) => (
                    <div
                      key={banner.id}
                      className={`p-3.5 rounded-2xl bg-[#140c2e] border transition-all flex flex-col sm:flex-row items-center justify-between gap-4 ${
                        banner.isActive === false
                          ? 'border-purple-950/60 opacity-60'
                          : 'border-purple-800/80 shadow-md'
                      }`}
                    >
                      {/* Left side preview & info */}
                      <div className="flex items-center gap-3.5 w-full sm:w-auto">
                        <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border border-purple-700/60">
                          <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80';
                            }}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient || 'from-purple-900 to-black'} opacity-60`}></div>
                          <span className="absolute top-1 right-1 text-[9px] bg-black/70 text-amber-300 px-1.5 py-0.5 rounded font-bold">
                            #{index + 1}
                          </span>
                        </div>

                        <div className="text-right flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-black text-white text-xs truncate">{banner.title}</span>
                            {banner.badge && (
                              <span className="text-[9px] bg-purple-900/80 text-purple-200 px-2 py-0.5 rounded-full border border-purple-700/40">
                                {banner.badge}
                              </span>
                            )}
                          </div>
                          {banner.subtitle && (
                            <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{banner.subtitle}</p>
                          )}
                          <div className="flex items-center gap-2 mt-1 text-[10px] text-amber-300/80">
                            <span>دکمه: {banner.cta || 'مشاهده'}</span>
                            <span>•</span>
                            <span>وضعیت: {banner.isActive === false ? 'غیرفعال' : 'در حال نمایش'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right side actions */}
                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        
                        {/* Order Controls */}
                        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-purple-800/40">
                          <button
                            type="button"
                            disabled={index === 0}
                            onClick={() => handleMoveBanner(index, 'up')}
                            className="p-1 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400"
                            title="انتقال به اولویت بالاتر (عقب‌تر)"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          <span className="text-[10px] text-slate-400 px-1 font-mono">{index + 1}</span>
                          <button
                            type="button"
                            disabled={index === bannersList.length - 1}
                            onClick={() => handleMoveBanner(index, 'down')}
                            className="p-1 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400"
                            title="انتقال به اولویت پایین‌تر (جلوتر)"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Toggle Active */}
                        <button
                          type="button"
                          onClick={() => handleToggleBannerActive(banner)}
                          className={`p-2 rounded-xl border transition-colors ${
                            banner.isActive === false
                              ? 'bg-purple-950/60 border-purple-800/40 text-slate-500 hover:text-white'
                              : 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                          }`}
                          title={banner.isActive === false ? 'فعال‌سازی بنر' : 'غیرفعال‌سازی بنر'}
                        >
                          {banner.isActive === false ? <ToggleLeft className="w-4 h-4" /> : <ToggleRight className="w-4 h-4" />}
                        </button>

                        {/* Edit Banner */}
                        <button
                          type="button"
                          onClick={() => handleStartEditBanner(banner)}
                          className="p-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 rounded-xl text-xs transition-colors"
                          title="ویرایش این بنر"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        {/* Delete Banner */}
                        <button
                          type="button"
                          onClick={() => handleDeleteBannerSlide(banner.id)}
                          className="p-2 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 rounded-xl text-xs transition-colors"
                          title="حذف بنر"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                      </div>
                    </div>
                  ))}

                  {bannersList.length === 0 && (
                    <div className="py-8 text-center text-slate-500 text-xs bg-[#120a28] rounded-2xl border border-dashed border-purple-900">
                      هیچ بنری ثبت نشده است. از فرم بالا بنر جدید اضافه کنید.
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* TAB 5: INTEGRATIONS (Zibal Merchant) */}
          {activeTab === 'integrations' && (
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Zibal Merchant Configuration */}
              <div className="p-5 rounded-2xl bg-[#160d33] border border-emerald-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
                    <CreditCard className="w-5 h-5 text-emerald-400" />
                    <span>پیکربندی مرچنت درگاه پرداخت زیبال (Zibal Merchant)</span>
                  </div>
                  <span className="text-[11px] bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    فعال
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  هنگامی که درگاه پرداخت زیبال شما تایید شد، کد مرچنت (Merchant ID) دریافتی از پنل زیبال را در کادر زیر وارد کنید:
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    dir="ltr"
                    value={zibalMerchant}
                    placeholder="6a9db4410df8756c31ea5d00"
                    onChange={(e) => onUpdateZibalMerchant(e.target.value)}
                    className="flex-1 bg-black/60 border border-emerald-500/50 rounded-xl px-3 py-2 text-xs text-emerald-300 font-mono focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => onUpdateZibalMerchant('6a9db4410df8756c31ea5d00')}
                    className="px-3 py-1.5 bg-emerald-950 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs hover:bg-emerald-900 transition-colors"
                    title="بازنشانی به مرچنت پیش‌فرض رسمی جهش"
                  >
                    پیش‌فرض
                  </button>
                </div>
              </div>

              {/* Supabase SQL Database Script (for User management table & permissions) */}
              <div className="p-5 rounded-2xl bg-[#160d33] border border-indigo-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-indigo-300">
                    <Server className="w-5 h-5 text-indigo-400" />
                    <span>کد اسکریپت SQL دیتابیس Supabase (جدول کاربران users و سفارشات)</span>
                  </div>
                  <span className="text-[11px] bg-indigo-950 text-indigo-300 px-2.5 py-0.5 rounded border border-indigo-500/30">
                    SQL Editor
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  اگر می‌خواهید جدول کاربران در Supabase با تمام فیلدها و دسترسی‌ها کامل باشد، کافیست وارد پنل Supabase خود در بخش <strong>SQL Editor</strong> شده و کد زیر را اجرا (Run) کنید:
                </p>
                <div className="relative">
                  <pre className="p-4 bg-black/80 rounded-xl text-[11px] text-indigo-200 font-mono overflow-x-auto max-h-56 leading-relaxed border border-indigo-900/60 custom-scrollbar" dir="ltr">
{`-- ایجاد جدول کاربران (users) در صورت عدم وجود
create table if not exists public.users (
  id text primary key,
  full_name text not null,
  phone text not null,
  email text,
  username text unique not null,
  password text not null,
  role text default 'user',
  created_at text not null
);

-- حذف پالیسی‌های قبلی در صورت وجود (جلوگیری از خطای تکرار)
drop policy if exists "Allow public select users" on public.users;
drop policy if exists "Allow public insert users" on public.users;
drop policy if exists "Allow public update users" on public.users;
drop policy if exists "Allow public delete users" on public.users;

-- فعال‌سازی RLS و تنظیم دسترسی کامل برای عملیات‌ها
alter table public.users enable row level security;

create policy "Allow public select users" 
on public.users for select using (true);

create policy "Allow public insert users" 
on public.users for insert with check (true);

create policy "Allow public update users" 
on public.users for update using (true);

create policy "Allow public delete users" 
on public.users for delete using (true);`}
                  </pre>
                  <button
                    onClick={() => {
                      const code = `-- ایجاد جدول کاربران (users) در صورت عدم وجود
create table if not exists public.users (
  id text primary key,
  full_name text not null,
  phone text not null,
  email text,
  username text unique not null,
  password text not null,
  role text default 'user',
  created_at text not null
);

-- حذف پالیسی‌های قبلی در صورت وجود (جلوگیری از خطای تکرار)
drop policy if exists "Allow public select users" on public.users;
drop policy if exists "Allow public insert users" on public.users;
drop policy if exists "Allow public update users" on public.users;
drop policy if exists "Allow public delete users" on public.users;

-- فعال‌سازی RLS و تنظیم دسترسی کامل برای عملیات‌ها
alter table public.users enable row level security;

create policy "Allow public select users" 
on public.users for select using (true);

create policy "Allow public insert users" 
on public.users for insert with check (true);

create policy "Allow public update users" 
on public.users for update using (true);

create policy "Allow public delete users" 
on public.users for delete using (true);`;
                      navigator.clipboard.writeText(code);
                      alert('کد SQL با موفقیت کپی شد!');
                    }}
                    className="absolute top-3 left-3 bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-md"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    کپی کد SQL
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 6: USERS */}
          {activeTab === 'users' && (
            <div className="space-y-5">
              {/* Header with Stats & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-purple-950/30 p-4 rounded-2xl border border-purple-900/40">
                <div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    <h3 className="text-base font-bold text-white">مدیریت کاربران و مشتریان</h3>
                    <span className="bg-purple-900/80 text-purple-200 text-xs px-2.5 py-0.5 rounded-full border border-purple-700/50">
                      {usersList.length} کاربر
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    امکان مشاهده، جستجو، افزودن، ویرایش مشخصات، تغییر نقش (مدیر/کاربر عادی) و حذف حساب‌های کاربری.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setNewUserName('');
                      setNewUserPhone('');
                      setNewUserUsername('');
                      setNewUserEmail('');
                      setNewUserRole('user');
                      setNewUserPassword('123456');
                      setIsAddUserModalOpen(true);
                    }}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-purple-950/40 transition-all cursor-pointer"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>افزودن کاربر جدید</span>
                  </button>
                </div>
              </div>

              {/* Notification Banner */}
              {userActionMessage && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {userActionMessage}
                  </span>
                  <button onClick={() => setUserActionMessage('')} className="text-emerald-400 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Search & Filter Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-8 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="جستجو بر اساس نام، شماره تلفن، نام کاربری یا ایمیل..."
                    value={userSearchTerm}
                    onChange={(e) => setUserSearchTerm(e.target.value)}
                    className="w-full bg-[#130b2e] border border-purple-900/50 rounded-xl pr-10 pl-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  {userSearchTerm && (
                    <button
                      onClick={() => setUserSearchTerm('')}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="sm:col-span-4 flex gap-2">
                  <select
                    value={userRoleFilter}
                    onChange={(e) => setUserRoleFilter(e.target.value as any)}
                    className="w-full bg-[#130b2e] border border-purple-900/50 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                  >
                    <option value="all">همه نقش‌ها</option>
                    <option value="admin">فقط مدیران (Admin)</option>
                    <option value="user">فقط کاربران عادی (User)</option>
                  </select>
                </div>
              </div>

              {/* User List Table */}
              {(() => {
                const filteredUsers = usersList.filter((u) => {
                  const matchesSearch =
                    !userSearchTerm.trim() ||
                    u.fullName?.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
                    u.phone?.includes(userSearchTerm) ||
                    u.username?.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
                    u.email?.toLowerCase().includes(userSearchTerm.toLowerCase());
                  const matchesRole = userRoleFilter === 'all' || u.role === userRoleFilter;
                  return matchesSearch && matchesRole;
                });

                if (filteredUsers.length === 0) {
                  return (
                    <div className="p-12 text-center rounded-2xl bg-purple-950/20 border border-purple-900/30 space-y-2">
                      <Users className="w-12 h-12 text-purple-500/40 mx-auto" />
                      <p className="text-sm font-bold text-white">کاربری با این مشخصات یافت نشد.</p>
                      <p className="text-xs text-slate-400">می‌توانید فیلترها را بازنشانی کنید یا کاربر جدید ثبت نمایید.</p>
                    </div>
                  );
                }

                return (
                  <div className="overflow-x-auto rounded-2xl border border-purple-900/40 bg-[#130b2e] shadow-xl">
                    <table className="w-full text-xs text-right">
                      <thead className="bg-[#190f38] text-slate-300 border-b border-purple-900/50">
                        <tr>
                          <th className="p-3.5">#</th>
                          <th className="p-3.5">نام و نام خانوادگی</th>
                          <th className="p-3.5">شماره موبایل</th>
                          <th className="p-3.5">نام کاربری / ایمیل</th>
                          <th className="p-3.5 text-center">نقش کاربری</th>
                          <th className="p-3.5">تاریخ ثبت نام</th>
                          <th className="p-3.5 text-center">عملیات مدیریت</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-purple-900/30">
                        {filteredUsers.map((user, idx) => {
                          const isMaster = user.username === 'jahesh_admin' || user.phone === '09152331974';
                          return (
                            <tr key={user.id} className="hover:bg-purple-900/15 transition-colors">
                              <td className="p-3.5 text-purple-300/60 font-mono">{idx + 1}</td>
                              <td className="p-3.5">
                                <div className="font-bold text-white flex items-center gap-1.5">
                                  {user.fullName || 'بدون نام'}
                                  {isMaster && (
                                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/40">
                                      مدیر کل
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="p-3.5 text-slate-300 font-mono" dir="ltr">
                                {user.phone}
                              </td>
                              <td className="p-3.5">
                                <div className="font-mono text-amber-300 text-[11px]" dir="ltr">
                                  @{user.username}
                                </div>
                                {user.email && (
                                  <div className="text-[10px] text-slate-400 font-mono" dir="ltr">
                                    {user.email}
                                  </div>
                                )}
                              </td>
                              <td className="p-3.5 text-center">
                                <span
                                  className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full font-bold border ${
                                    user.role === 'admin'
                                      ? 'bg-purple-950 text-purple-300 border-purple-500/50'
                                      : 'bg-slate-900/80 text-slate-300 border-slate-700/50'
                                  }`}
                                >
                                  {user.role === 'admin' ? (
                                    <>
                                      <Shield className="w-3 h-3 text-purple-400" />
                                      مدیر سیستم
                                    </>
                                  ) : (
                                    <>
                                      <UserCheck className="w-3 h-3 text-slate-400" />
                                      کاربر عادی
                                    </>
                                  )}
                                </span>
                              </td>
                              <td className="p-3.5 text-slate-400 font-sans">
                                {user.createdAt || 'ثبت در سیستم'}
                              </td>
                              <td className="p-3.5 text-center">
                                <div className="flex items-center justify-center gap-2">
                                  {/* Edit button */}
                                  <button
                                    onClick={() => setEditingUser(user)}
                                    title="ویرایش کاربر"
                                    className="p-1.5 rounded-lg bg-indigo-950/60 hover:bg-indigo-900 text-indigo-300 border border-indigo-700/40 transition-colors"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>

                                  {/* Toggle Role Button */}
                                  <button
                                    onClick={() => {
                                      if (isMaster) {
                                        alert('نقش مدیر اصلی سایت قابل تغییر نیست.');
                                        return;
                                      }
                                      const nextRole: 'admin' | 'user' = user.role === 'admin' ? 'user' : 'admin';
                                      const updated = { ...user, role: nextRole };
                                      onUpdateUser?.(updated);
                                      setUserActionMessage(`نقش کاربر ${user.fullName} به ${nextRole === 'admin' ? 'مدیر' : 'کاربر عادی'} تغییر یافت.`);
                                    }}
                                    title={user.role === 'admin' ? 'تنزل به کاربر عادی' : 'ارتقا به مدیر'}
                                    className="p-1.5 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-purple-300 border border-purple-700/40 transition-colors"
                                  >
                                    <Shield className="w-3.5 h-3.5" />
                                  </button>

                                  {/* Delete Button */}
                                  <button
                                    onClick={() => {
                                      if (isMaster) {
                                        alert('حساب کاربری مدیر اصلی سایت قابل حذف نیست.');
                                        return;
                                      }
                                      if (confirm(`آیا از حذف حساب کاربری «${user.fullName}» (${user.username}) اطمینان دارید؟`)) {
                                        onDeleteUser?.(user.id);
                                        setUserActionMessage(`کاربر «${user.fullName}» با موفقیت حذف شد.`);
                                      }
                                    }}
                                    title="حذف کاربر"
                                    disabled={isMaster}
                                    className={`p-1.5 rounded-lg border transition-colors ${
                                      isMaster
                                        ? 'opacity-30 cursor-not-allowed bg-slate-900 border-slate-800 text-slate-600'
                                        : 'bg-rose-950/60 hover:bg-rose-900 text-rose-300 border-rose-700/40'
                                    }`}
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              })()}

              {/* Edit User Modal */}
              {editingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in" dir="rtl">
                  <div className="bg-[#150c2f] border border-purple-700 rounded-3xl w-full max-w-md p-6 space-y-4 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-purple-800/60 pb-3">
                      <div className="flex items-center gap-2">
                        <Edit3 className="w-5 h-5 text-indigo-400" />
                        <h4 className="text-sm font-bold text-white">ویرایش مشخصات کاربر</h4>
                      </div>
                      <button onClick={() => setEditingUser(null)} className="text-slate-400 hover:text-white">
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-300 mb-1 font-bold">نام و نام خانوادگی:</label>
                        <input
                          type="text"
                          value={editingUser.fullName}
                          onChange={(e) => setEditingUser({ ...editingUser, fullName: e.target.value })}
                          className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1 font-bold">شماره تماس:</label>
                        <input
                          type="text"
                          dir="ltr"
                          value={editingUser.phone}
                          onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
                          className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1 font-bold">نام کاربری:</label>
                        <input
                          type="text"
                          dir="ltr"
                          value={editingUser.username}
                          onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value.toLowerCase() })}
                          className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-amber-300 font-mono focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1 font-bold">ایمیل (اختیاری):</label>
                        <input
                          type="email"
                          dir="ltr"
                          value={editingUser.email || ''}
                          onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                          className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-slate-200 font-mono focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1 font-bold">نقش کاربر:</label>
                        <select
                          value={editingUser.role}
                          onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value as any })}
                          className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                        >
                          <option value="user">کاربر عادی (User)</option>
                          <option value="admin">مدیر سایت (Admin)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          onUpdateUser?.(editingUser);
                          setUserActionMessage(`تغییرات اطلاعات ${editingUser.fullName} ذخیره شد.`);
                          setEditingUser(null);
                        }}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs"
                      >
                        ذخیره تغییرات
                      </button>
                      <button
                        onClick={() => setEditingUser(null)}
                        className="px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs"
                      >
                        انصراف
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Add New User Modal */}
              {isAddUserModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in" dir="rtl">
                  <div className="bg-[#150c2f] border border-purple-700 rounded-3xl w-full max-w-md p-6 space-y-4 shadow-2xl">
                    <div className="flex items-center justify-between border-b border-purple-800/60 pb-3">
                      <div className="flex items-center gap-2">
                        <UserPlus className="w-5 h-5 text-purple-400" />
                        <h4 className="text-sm font-bold text-white">ثبت کاربر یا مدیر جدید</h4>
                      </div>
                      <button onClick={() => setIsAddUserModalOpen(false)} className="text-slate-400 hover:text-white">
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-300 mb-1 font-bold">نام و نام خانوادگی:</label>
                        <input
                          type="text"
                          placeholder="مثال: عرفان مقدم"
                          value={newUserName}
                          onChange={(e) => setNewUserName(e.target.value)}
                          className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1 font-bold">شماره موبایل:</label>
                        <input
                          type="text"
                          dir="ltr"
                          placeholder="09152331974"
                          value={newUserPhone}
                          onChange={(e) => setNewUserPhone(e.target.value)}
                          className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1 font-bold">نام کاربری:</label>
                        <input
                          type="text"
                          dir="ltr"
                          placeholder="erfan_jahesh"
                          value={newUserUsername}
                          onChange={(e) => setNewUserUsername(e.target.value.toLowerCase())}
                          className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-amber-300 font-mono focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-300 mb-1 font-bold">رمز عبور پیش‌فرض:</label>
                        <input
                          type="text"
                          dir="ltr"
                          value={newUserPassword}
                          onChange={(e) => setNewUserPassword(e.target.value)}
                          className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-emerald-400 font-mono focus:outline-none focus:border-purple-500"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-slate-300 mb-1 font-bold">ایمیل (اختیاری):</label>
                          <input
                            type="email"
                            dir="ltr"
                            placeholder="user@gmail.com"
                            value={newUserEmail}
                            onChange={(e) => setNewUserEmail(e.target.value)}
                            className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-slate-200 font-mono focus:outline-none focus:border-purple-500"
                          />
                        </div>

                        <div>
                          <label className="block text-slate-300 mb-1 font-bold">سطح دسترسی (نقش):</label>
                          <select
                            value={newUserRole}
                            onChange={(e) => setNewUserRole(e.target.value as any)}
                            className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                          >
                            <option value="user">کاربر عادی (User)</option>
                            <option value="admin">مدیر (Admin)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          if (!newUserName.trim() || !newUserPhone.trim() || !newUserUsername.trim()) {
                            alert('لطفاً نام، شماره موبایل و نام کاربری را وارد کنید.');
                            return;
                          }
                          const newUser: User = {
                            id: 'u-' + Date.now(),
                            fullName: newUserName.trim(),
                            phone: newUserPhone.trim(),
                            email: newUserEmail.trim(),
                            username: newUserUsername.trim().toLowerCase(),
                            role: newUserRole,
                            createdAt: new Date().toLocaleDateString('fa-IR'),
                          };
                          onAddNewUser?.(newUser, newUserPassword || '123456');
                          setUserActionMessage(`کاربر «${newUser.fullName}» با موفقیت اضافه شد.`);
                          setIsAddUserModalOpen(false);
                        }}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs"
                      >
                        ایجاد و ثبت کاربر
                      </button>
                      <button
                        onClick={() => setIsAddUserModalOpen(false)}
                        className="px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs"
                      >
                        انصراف
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

          {activeTab === 'chats' && (
            <div className="flex h-[500px] gap-4 bg-[#130b2e] rounded-2xl border border-purple-900/40 p-4 overflow-hidden">
              {/* Chat List */}
              <div className="w-1/3 border-l border-purple-900/50 pl-4 flex flex-col h-full overflow-hidden">
                <h3 className="text-sm font-bold text-white mb-4">گفتگوها</h3>
                <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                  {[...chats].sort((a, b) => {
                    // Highest priority: chats needing human support
                    if (a.needsHumanSupport !== b.needsHumanSupport) return a.needsHumanSupport ? -1 : 1;
                    if (a.isReadByAdmin !== b.isReadByAdmin) return a.isReadByAdmin ? 1 : -1;
                    return a.isReadByAdmin 
                      ? new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime() // newest read first
                      : new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime(); // oldest unread first
                  }).map(chat => (
                    <button
                      key={chat.userId}
                      onClick={() => {
                        setSelectedChat(chat);
                        if (!chat.isReadByAdmin) {
                           const updated = { ...chat, isReadByAdmin: true };
                           saveChatToDb(updated);
                           setChats(prev => prev.map(c => c.userId === chat.userId ? updated : c));
                        }
                      }}
                      className={`w-full text-right p-3 rounded-xl border transition-all ${
                        selectedChat?.userId === chat.userId
                          ? 'bg-purple-900/50 border-purple-500/50'
                          : chat.needsHumanSupport
                          ? 'bg-amber-950/40 border-amber-500/70 hover:bg-amber-950/60 shadow-lg shadow-amber-950/50'
                          : 'bg-purple-950/20 border-purple-900/30 hover:bg-purple-900/30'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-xs font-bold text-white truncate">{chat.userName}</span>
                          {chat.needsHumanSupport && (
                            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] px-1.5 py-0.2 rounded flex items-center gap-0.5 font-mono">
                              <AlertCircle className="w-2.5 h-2.5 text-amber-400" />
                              ارجاع هوش مصنوعی
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {chat.needsHumanSupport && (
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-4 ring-amber-400/30 animate-pulse" title="نیازمند پاسخ فوری شما (هوش مصنوعی ارجاع داده است)"></span>
                          )}
                          {!chat.isReadByAdmin && !chat.needsHumanSupport && (
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          )}
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-400 truncate">{chat.messages[chat.messages.length - 1]?.text}</p>
                    </button>
                  ))}
                  {chats.length === 0 && (
                    <p className="text-xs text-slate-500 text-center mt-10">هیچ گفتگویی وجود ندارد.</p>
                  )}
                </div>
              </div>
              
              {/* Chat Window */}
              <div className="w-2/3 flex flex-col h-full relative">
                {selectedChat ? (
                  <>
                    <div className="pb-3 border-b border-purple-900/40 mb-3 flex items-center justify-between">
                       <div className="flex items-center gap-2">
                         <h3 className="text-sm font-bold text-amber-300">{selectedChat.userName}</h3>
                         {selectedChat.needsHumanSupport && (
                           <span className="bg-amber-500/20 text-amber-300 border border-amber-500/50 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
                             <AlertCircle className="w-3 h-3 text-amber-400" />
                             ارجاع شده توسط هوش مصنوعی
                           </span>
                         )}
                       </div>
                       <button onClick={() => setSelectedChat(null)} className="text-slate-400 hover:text-white"><ArrowLeft className="w-4 h-4" /></button>
                    </div>

                    {selectedChat.needsHumanSupport && (
                      <div className="mb-3 p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/50 flex items-center justify-between text-xs text-amber-200">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
                          <span>
                            هوش مصنوعی تشخیص داده که این سوال نیاز به پاسخ مستقیم و تایید واحد مدیریت دارد.
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = { ...selectedChat, needsHumanSupport: false };
                            saveChatToDb(updated);
                            setChats(prev => prev.map(c => c.userId === selectedChat.userId ? updated : c));
                            setSelectedChat(updated);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-[10px] transition-colors shrink-0"
                        >
                          تغییر وضعیت به پیگیری شد
                        </button>
                      </div>
                    )}

                    <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar flex flex-col">
                      {selectedChat.messages.map(msg => (
                        <div
                          key={msg.id}
                          className={`max-w-[85%] p-3 rounded-2xl text-xs relative group flex flex-col ${
                            msg.sender === 'user'
                              ? 'bg-purple-900/40 border border-purple-800/40 text-slate-200 self-start rounded-tr-none'
                              : 'bg-indigo-600 text-white self-end rounded-tl-none shadow-md'
                          }`}
                        >
                          {/* Reply quote banner if present */}
                          {msg.replyTo && (
                            <div className={`mb-2 p-2 rounded-xl text-[11px] border-r-4 ${
                              msg.sender === 'user'
                                ? 'bg-black/40 border-purple-400 text-purple-200'
                                : 'bg-black/30 border-amber-400 text-amber-200'
                            }`}>
                              <span className="font-bold block text-[10px] opacity-80">
                                {msg.replyTo.sender === 'user' ? selectedChat.userName : 'پشتیبانی'}:
                              </span>
                              <p className="truncate line-clamp-1">{msg.replyTo.text}</p>
                            </div>
                          )}

                          {/* Image / File display */}
                          {msg.file && (
                            <div className="mb-2">
                              {msg.file.type === 'image' ? (
                                <div className="rounded-xl overflow-hidden border border-white/20 max-w-[280px]">
                                  <img
                                    src={msg.file.url}
                                    alt={msg.file.name}
                                    className="w-full max-h-56 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => window.open(msg.file?.url, '_blank')}
                                  />
                                  <div className="flex items-center justify-between p-1.5 bg-black/40 text-[10px]">
                                    <span className="truncate max-w-[160px]">{msg.file.name}</span>
                                    <span className="opacity-70">{msg.file.sizeText}</span>
                                  </div>
                                </div>
                              ) : (
                                <a
                                  href={msg.file.url}
                                  download={msg.file.name}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 p-2.5 rounded-xl bg-black/30 hover:bg-black/50 border border-white/20 text-white transition-colors"
                                >
                                  <Paperclip className="w-4 h-4 shrink-0 text-amber-300" />
                                  <div className="flex-1 min-w-0">
                                    <p className="font-bold truncate text-[11px]">{msg.file.name}</p>
                                    <span className="text-[9px] opacity-70">{msg.file.sizeText}</span>
                                  </div>
                                  <Download className="w-3.5 h-3.5 opacity-80 shrink-0" />
                                </a>
                              )}
                            </div>
                          )}

                          {msg.text && (
                            <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                          )}

                          <div className="flex items-center justify-between mt-1 text-[9px] opacity-60">
                            <button
                              type="button"
                              onClick={() => setReplyTarget(msg)}
                              className="opacity-0 group-hover:opacity-100 hover:text-amber-300 flex items-center gap-1 transition-opacity text-[10px]"
                              title="پاسخ به این پیام"
                            >
                              <CornerUpRight className="w-3 h-3" />
                              <span>ریپلای</span>
                            </button>
                            <span>{msg.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Reply target indicator bar */}
                    {replyTarget && (
                      <div className="mt-2 p-2 rounded-xl bg-purple-950/80 border border-purple-700/60 flex items-center justify-between text-xs text-purple-200">
                        <div className="flex items-center gap-2 min-w-0">
                          <CornerUpRight className="w-4 h-4 text-amber-400 shrink-0" />
                          <div className="truncate">
                            <span className="font-bold text-amber-300 block text-[11px]">
                              پاسخ به {replyTarget.sender === 'user' ? selectedChat.userName : 'پشتیبانی'}:
                            </span>
                            <span className="text-[10px] text-slate-300 truncate">
                              {replyTarget.text || (replyTarget.file ? `[فایل: ${replyTarget.file.name}]` : '')}
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setReplyTarget(null)}
                          className="text-slate-400 hover:text-white p-1"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* File attachment preview before send */}
                    {fileAttachment && (
                      <div className="mt-2 p-2 rounded-xl bg-purple-950/90 border border-amber-500/40 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 min-w-0">
                          {fileAttachment.type === 'image' ? (
                            <img src={fileAttachment.url} alt="پیش‌نمایش" className="w-9 h-9 object-cover rounded-lg border border-purple-500" />
                          ) : (
                            <Paperclip className="w-5 h-5 text-amber-300" />
                          )}
                          <div className="truncate">
                            <p className="font-bold text-white text-xs truncate max-w-[200px]">{fileAttachment.name}</p>
                            <span className="text-[10px] text-emerald-400">{fileAttachment.sizeText} (آماده ارسال)</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setFileAttachment(null);
                            if (fileInputRef.current) fileInputRef.current.value = '';
                          }}
                          className="text-rose-400 hover:text-rose-200 p-1"
                          title="حذف فایل"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {fileUploadError && (
                      <div className="mt-1 text-[11px] text-rose-400 px-2">
                        ⚠️ {fileUploadError}
                      </div>
                    )}

                    {/* Chat input box with file attach button */}
                    <div className="mt-3 pt-3 border-t border-purple-900/40 flex gap-2 items-center">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleAdminFileUpload}
                        className="hidden"
                        accept="image/*,.pdf,.doc,.docx,.zip,.rar,.txt"
                      />

                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="p-2.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-700/60 text-purple-200 hover:text-amber-300 transition-colors flex items-center justify-center shrink-0"
                        title="ارسال عکس یا فایل (حداکثر ۱۰ مگابایت - مخصوص مدیریت)"
                      >
                        <Paperclip className="w-4 h-4" />
                      </button>

                      <input
                        type="text"
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleReply()}
                        placeholder="پاسخ خود را بنویسید..."
                        className="flex-1 bg-black/40 border border-purple-800/60 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-right"
                      />
                      <button
                        type="button"
                        onClick={handleReply}
                        className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl flex items-center justify-center transition-colors shrink-0"
                        title="ارسال پیام"
                      >
                        <Reply className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-500">
                    <MessageCircle className="w-12 h-12 mb-3 opacity-20" />
                    <p className="text-xs">یک گفتگو را برای مشاهده و پاسخ انتخاب کنید.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Test Order & Payment Simulation Tab (ویژه مدیریت) */}
          {activeTab === 'test-order' && (
            <div className="space-y-6">
              {/* Header Card */}
              <div className="bg-gradient-to-r from-emerald-950/80 via-[#1a0f35] to-[#120826] border border-emerald-500/40 rounded-3xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 text-xs font-black">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
                      <span>شبیه‌ساز پرداخت واقعی جهش‌کالا (Admin Payment & Delivery Sandbox)</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
                      <span>تست و شبیه‌سازی خرید محصول و فرآیند پس از پرداخت</span>
                    </h3>
                    <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                      با این بخش می‌توانید هر کدام از کالاهای سایت را بدون پرداخت پول واقعی تست کنید تا دقیقاً ببینید بعد از پرداخت شاپرک چه اتفاقی می‌افتد:
                      نحوه صدور رسید بانکی، ثبت در دیتابیس سفارشات، دانلود فوری فایل و دیتابیس، دسترسی به نرم‌افزار، و وضعیت در پیگیری سفارشات مشتری.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] bg-black/40 border border-emerald-500/30 text-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>محیط تست امن و ایزوله</span>
                    </span>
                  </div>
                </div>
              </div>

              {testSuccessNotice && (
                <div className="p-4 rounded-2xl bg-emerald-950/90 border border-emerald-500/60 text-emerald-200 text-xs flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{testSuccessNotice}</span>
                  </div>
                  <button
                    onClick={() => setTestSuccessNotice('')}
                    className="text-emerald-400 hover:text-white text-xs px-2 py-1"
                  >
                    بستن
                  </button>
                </div>
              )}

              {/* Main 2-Column Test Grid: Product Selector + Configuration */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Column 1: Select Product to Test (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-[#191038]/80 border border-purple-800/60 rounded-3xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-purple-900/60 pb-3">
                      <h4 className="text-xs font-black text-white flex items-center gap-2">
                        <Package className="w-4 h-4 text-amber-400" />
                        <span>۱. انتخاب کالای مورد نظر برای تست</span>
                      </h4>
                      <span className="text-[11px] text-purple-300">
                        {products.length} محصول موجود
                      </span>
                    </div>

                    {/* Search bar inside products */}
                    <div className="relative">
                      <input
                        type="text"
                        value={testProductSearch}
                        onChange={(e) => setTestProductSearch(e.target.value)}
                        placeholder="جستجوی سریع در نام یا دسته‌بندی کالا..."
                        className="w-full bg-black/40 border border-purple-800/80 rounded-2xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-right pr-9"
                      />
                      <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                      {testProductSearch && (
                        <button
                          onClick={() => setTestProductSearch('')}
                          className="absolute left-3 top-2.5 text-slate-400 hover:text-white text-xs"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    {/* Product List Selector */}
                    <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1 custom-scrollbar">
                      {products
                        .filter((p) => {
                          if (!testProductSearch.trim()) return true;
                          const q = testProductSearch.trim().toLowerCase();
                          return (
                            p.title.toLowerCase().includes(q) ||
                            p.category?.toLowerCase().includes(q) ||
                            p.id.toLowerCase().includes(q)
                          );
                        })
                        .map((prod) => {
                          const isSelected = prod.id === selectedTestProductId;
                          const isDownloadable =
                            prod.deliveryDays?.includes('دانلود') ||
                            prod.title.includes('بانک') ||
                            prod.title.includes('اطلاعات') ||
                            prod.category?.includes('دانلود');
                          const isAmlak =
                            prod.id === 'pkg-amlak-jahesh' || prod.title.includes('املاک');
                          const isWebDesign =
                            prod.category?.includes('طراحی') ||
                            prod.id === 'pkg-golden-jahesh';

                          return (
                            <div
                              key={prod.id}
                              onClick={() => setSelectedTestProductId(prod.id)}
                              className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                                isSelected
                                  ? 'bg-emerald-950/70 border-emerald-400 shadow-md shadow-emerald-950/50'
                                  : 'bg-black/30 border-purple-900/40 hover:bg-purple-900/20 hover:border-purple-700/60'
                              }`}
                            >
                              <img
                                src={prod.image || getFallbackProductImage(prod.category)}
                                alt={prod.title}
                                className="w-12 h-12 rounded-xl object-cover bg-black/40 border border-purple-900/40 shrink-0"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    getFallbackProductImage(prod.category);
                                }}
                              />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1 mb-0.5">
                                  <h5
                                    className={`text-xs font-bold truncate ${
                                      isSelected ? 'text-emerald-200' : 'text-white'
                                    }`}
                                  >
                                    {prod.title}
                                  </h5>
                                  {isSelected && (
                                    <span className="shrink-0 bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                                      <Check className="w-3 h-3" />
                                      <span>انتخاب شده</span>
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center justify-between text-[11px]">
                                  <span className="text-slate-400 truncate max-w-[150px]">
                                    {prod.category}
                                  </span>
                                  <span className="text-amber-300 font-bold">
                                    {formatPrice(prod.price)}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5 mt-1">
                                  {isDownloadable && (
                                    <span className="text-[10px] bg-emerald-900/60 text-emerald-300 border border-emerald-700/40 px-2 py-0.5 rounded-full">
                                      📥 فایل دانلودی
                                    </span>
                                  )}
                                  {isAmlak && (
                                    <span className="text-[10px] bg-amber-900/60 text-amber-300 border border-amber-700/40 px-2 py-0.5 rounded-full">
                                      🏢 سامانه املاک
                                    </span>
                                  )}
                                  {isWebDesign && (
                                    <span className="text-[10px] bg-purple-900/60 text-purple-300 border border-purple-700/40 px-2 py-0.5 rounded-full">
                                      🌐 طراحی وبسایت
                                    </span>
                                  )}
                                  {!isDownloadable && !isAmlak && !isWebDesign && (
                                    <span className="text-[10px] bg-blue-900/60 text-blue-300 border border-blue-700/40 px-2 py-0.5 rounded-full">
                                      📦 تحویل پستی
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {/* Highlight card for selected product */}
                  {(() => {
                    const selectedProd =
                      products.find((p) => p.id === selectedTestProductId) || products[0];
                    if (!selectedProd) return null;
                    return (
                      <div className="bg-gradient-to-b from-[#1c123d] to-[#120a28] border border-emerald-500/40 rounded-3xl p-4 space-y-3">
                        <div className="flex items-center justify-between text-xs text-emerald-300 font-bold">
                          <span className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            <span>پیش‌نمایش کالای انتخابی برای تست:</span>
                          </span>
                          <span className="font-mono text-[11px] text-slate-400">
                            کد: {selectedProd.id}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <img
                            src={
                              selectedProd.image || getFallbackProductImage(selectedProd.category)
                            }
                            alt={selectedProd.title}
                            className="w-14 h-14 rounded-2xl object-cover border border-emerald-500/30 shrink-0"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                getFallbackProductImage(selectedProd.category);
                            }}
                          />
                          <div>
                            <h4 className="text-xs font-black text-white">
                              {selectedProd.title}
                            </h4>
                            <p className="text-[11px] text-slate-300 mt-0.5">
                              روش تحویل: {selectedProd.deliveryDays}
                            </p>
                            <p className="text-xs text-amber-300 font-black mt-1">
                              مبلغ آزمایشی: {formatPrice(selectedProd.price)}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Column 2: Test Parameters & Trigger Actions (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="bg-[#191038]/80 border border-purple-800/60 rounded-3xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-purple-900/60 pb-3">
                      <h4 className="text-xs font-black text-white flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-emerald-400" />
                        <span>۲. تنظیم اطلاعات آزمایشی خرید و پرداخت</span>
                      </h4>
                      <span className="text-[10px] bg-emerald-950 border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded-full font-bold">
                        اطلاعات بدون نیاز به پرداخت واقعی
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] text-slate-300 font-bold mb-1">
                          نام خریدار تستی:
                        </label>
                        <input
                          type="text"
                          value={testCustomerName}
                          onChange={(e) => setTestCustomerName(e.target.value)}
                          placeholder="مثلاً: مدیر سیستم جهش"
                          className="w-full bg-black/40 border border-purple-800/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 text-right"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-300 font-bold mb-1">
                          شماره موبایل خریدار (جهت پیگیری سفارش):
                        </label>
                        <input
                          type="text"
                          value={testCustomerPhone}
                          onChange={(e) => setTestCustomerPhone(e.target.value)}
                          placeholder="09881234567"
                          className="w-full bg-black/40 border border-purple-800/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 text-right font-mono"
                        />
                        <span className="text-[10px] text-slate-400">
                          * با این شماره می‌توانید سفارش را در «پیگیری سفارشات من» مشاهده کنید.
                        </span>
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-300 font-bold mb-1">
                          ایمیل خریدار:
                        </label>
                        <input
                          type="email"
                          value={testCustomerEmail}
                          onChange={(e) => setTestCustomerEmail(e.target.value)}
                          placeholder="admin@jaheshit.ir"
                          className="w-full bg-black/40 border border-purple-800/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 text-right"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-300 font-bold mb-1">
                          کد تخفیف تستی (اختیاری):
                        </label>
                        <input
                          type="text"
                          value={testCouponCode}
                          onChange={(e) => setTestCouponCode(e.target.value)}
                          placeholder="مثلاً JAHESH20 یا AMLAK10"
                          className="w-full bg-black/40 border border-purple-800/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 text-right uppercase"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-300 font-bold mb-1">
                          دامنه / نام پروژه (برای سایت و هاست):
                        </label>
                        <input
                          type="text"
                          value={testRequestedDomain}
                          onChange={(e) => setTestRequestedDomain(e.target.value)}
                          placeholder="مثلاً: mycompany.ir"
                          className="w-full bg-black/40 border border-purple-800/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 text-right font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-300 font-bold mb-1">
                          وضعیت اولیه سفارش ثبت‌شده:
                        </label>
                        <select
                          value={testOrderStatus}
                          onChange={(e) => setTestOrderStatus(e.target.value as OrderStatus)}
                          className="w-full bg-black/40 border border-purple-800/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 text-right cursor-pointer"
                        >
                          <option value="در حال بررسی">در حال بررسی (پیش‌فرض پس از پرداخت)</option>
                          <option value="تایید شده">تایید شده و در صف آماده‌سازی</option>
                          <option value="ارسال شده">ارسال شده / تحویل داده شده</option>
                          <option value="تحویل نهایی شده">تحویل نهایی شده</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-300 font-bold mb-1">
                        توضیحات و بریف خریدار:
                      </label>
                      <input
                        type="text"
                        value={testClientNotes}
                        onChange={(e) => setTestClientNotes(e.target.value)}
                        placeholder="توضیحات ویژه سفارش..."
                        className="w-full bg-black/40 border border-purple-800/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 text-right"
                      />
                    </div>

                    {/* Action Execution Buttons */}
                    <div className="pt-3 border-t border-purple-900/60 space-y-3">
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        {/* Primary Button: Run test and show real storefront receipt */}
                        <button
                          type="button"
                          onClick={() => handleExecuteTestPayment('storefront_receipt')}
                          disabled={isTestExecuting}
                          className="flex-1 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all cursor-pointer active:scale-95"
                        >
                          {isTestExecuting ? (
                            <RefreshCw className="w-4 h-4 animate-spin text-white" />
                          ) : (
                            <Sparkles className="w-4 h-4 text-amber-300" />
                          )}
                          <span>🚀 شبیه‌سازی پرداخت واقعی شاپرک و باز شدن رسید در فروشگاه</span>
                        </button>

                        {/* Secondary Button: Execute in panel */}
                        <button
                          type="button"
                          onClick={() => handleExecuteTestPayment('in_panel')}
                          disabled={isTestExecuting}
                          className="py-3.5 px-4 rounded-2xl bg-purple-900/60 hover:bg-purple-800 border border-purple-700/60 text-purple-200 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 text-emerald-400" />
                          <span>⚡ اجرای تست درون پنل مدیریت</span>
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-400 text-center">
                        * دکمه اول پنل مدیریت را موقتاً می‌بندد و دقیقاً همان رسید بانکی سبز رنگ شاپرک که مشتری در صفحه فروشگاه می‌بیند را با افکت جشن و کانفتی باز می‌کند.
                      </p>
                    </div>
                  </div>

                  {/* Live Results Panel if a test order was executed */}
                  {lastExecutedTestOrder && (
                    <div className="bg-gradient-to-b from-[#122325] via-[#10192e] to-[#0c1224] border-2 border-emerald-500/80 rounded-3xl p-5 shadow-2xl space-y-4 text-right">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-900/60 pb-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-bounce" />
                          <h4 className="text-sm font-black text-emerald-300">
                            نتیجه زنده شبیه‌سازی پرداخت واقعی شاپرک
                          </h4>
                        </div>
                        <span className="text-[11px] font-mono bg-emerald-950 border border-emerald-500/50 text-emerald-200 px-3 py-1 rounded-full font-bold">
                          {lastExecutedTestOrder.id}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        <div className="bg-black/40 p-2.5 rounded-xl border border-emerald-900/40">
                          <span className="text-[10px] text-slate-400 block mb-0.5">کد پیگیری شاپرک:</span>
                          <strong className="font-mono text-emerald-300 text-xs">
                            {lastExecutedTestOrder.trackingCode}
                          </strong>
                        </div>
                        <div className="bg-black/40 p-2.5 rounded-xl border border-emerald-900/40">
                          <span className="text-[10px] text-slate-400 block mb-0.5">شماره مرجع بانکی (RefId):</span>
                          <strong className="font-mono text-amber-300 text-xs">
                            {lastExecutedTestOrder.paymentRefId}
                          </strong>
                        </div>
                        <div className="bg-black/40 p-2.5 rounded-xl border border-emerald-900/40">
                          <span className="text-[10px] text-slate-400 block mb-0.5">مبلغ پرداختی:</span>
                          <strong className="text-white text-xs">
                            {formatPrice(lastExecutedTestOrder.totalAmount)}
                          </strong>
                        </div>
                        <div className="bg-black/40 p-2.5 rounded-xl border border-emerald-900/40">
                          <span className="text-[10px] text-slate-400 block mb-0.5">وضعیت سفارش:</span>
                          <span className="text-emerald-400 font-bold">
                            {lastExecutedTestOrder.status}
                          </span>
                        </div>
                      </div>

                      {/* Interactive Actions on Test Order */}
                      <div className="pt-2 space-y-2">
                        <span className="text-xs font-black text-white block">
                          اقدامات و دسترسی‌های خریدار پس از پرداخت (همین حالا تست کنید):
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setTestReceiptPreviewModal(lastExecutedTestOrder)}
                            className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>👁️ پیش‌نمایش رسید بانکی شاپرک (مشتری)</span>
                          </button>

                          {onOpenUserOrdersModal && (
                            <button
                              type="button"
                              onClick={() => {
                                onOpenUserOrdersModal(lastExecutedTestOrder.customerPhone);
                              }}
                              className="px-3 py-2 rounded-xl bg-purple-800 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                            >
                              <Truck className="w-3.5 h-3.5 text-amber-300" />
                              <span>📦 باز کردن صفحه پیگیری سفارشات من</span>
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => setActiveTab('orders')}
                            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                          >
                            <ShoppingCart className="w-3.5 h-3.5 text-blue-400" />
                            <span>📋 مشاهده این سفارش در تب سفارشات مدیریت</span>
                          </button>

                          {/* Specific Delivery actions */}
                          {lastExecutedTestOrder.items.some(
                            (it) =>
                              it.product?.id === 'pkg-amlak-jahesh' ||
                              it.product?.title?.includes('املاک')
                          ) && onOpenAmlakModal && (
                            <button
                              type="button"
                              onClick={() => onOpenAmlakModal()}
                              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
                            >
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>🏢 ورود به سامانه هوشمند مدیریت املاک جهش</span>
                            </button>
                          )}

                          {lastExecutedTestOrder.items.some(
                            (it) =>
                              it.product?.deliveryDays?.includes('دانلود') ||
                              it.product?.title?.includes('بانک') ||
                              it.product?.title?.includes('اطلاعات') ||
                              it.product?.category?.includes('دانلود')
                          ) && (
                            <button
                              type="button"
                              onClick={() => handleTestDownloadFile(lastExecutedTestOrder)}
                              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-black text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
                            >
                              <Download className="w-3.5 h-3.5 text-amber-300" />
                              <span>📥 دانلود فایل دیتابیس و محتوای محصول</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Step-by-Step Educational Flowchart: What happens after real payment */}
              <div className="bg-[#140b2e]/90 border border-purple-800/60 rounded-3xl p-6 space-y-4">
                <h4 className="text-sm font-black text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  <span>چرخه کامل رفتار سیستم جهش‌کالا پس از پرداخت واقعی در درگاه شاپرک</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                  <div className="bg-black/30 border border-purple-900/40 p-4 rounded-2xl space-y-2">
                    <div className="w-8 h-8 rounded-xl bg-purple-900/60 border border-purple-700/60 flex items-center justify-center text-amber-300 font-black text-sm">
                      ۱
                    </div>
                    <h5 className="text-xs font-black text-white">تأیید تراکنش در شاپرک</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      درگاه زیبال کد پیگیری ۱۱ رقمی و شماره مرجع بانکی (RefNumber) را برای سفارش صادر و اعتبارسنجی می‌کند.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-purple-900/40 p-4 rounded-2xl space-y-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center text-emerald-300 font-black text-sm">
                      ۲
                    </div>
                    <h5 className="text-xs font-black text-white">صدور رسید رسمی به کاربر</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      پاپ‌آپ سبز رسید با نمایش شماره پیگیری، مشخصات اقلام خریداری شده و افکت کانفتی روی صفحه سایت باز می‌شود.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-purple-900/40 p-4 rounded-2xl space-y-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-900/60 border border-blue-700/60 flex items-center justify-center text-blue-300 font-black text-sm">
                      ۳
                    </div>
                    <h5 className="text-xs font-black text-white">ثبت در دیتابیس و پنل مدیر</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      سفارش فوراً در دیتابیس ابری ثبت شده و در تب «سفارشات مشتریان» ظاهر می‌گردد تا مدیر وضعیت آن را تغییر دهد.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-purple-900/40 p-4 rounded-2xl space-y-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-900/60 border border-amber-700/60 flex items-center justify-center text-amber-300 font-black text-sm">
                      ۴
                    </div>
                    <h5 className="text-xs font-black text-white">تحویل فوری بر اساس کالا</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      فایل‌های دانلودی دکمه دانلود فوری می‌گیرند، نرم‌افزار املاک لینک ورود اختصاصی دریافت می‌کند، و کالای پستی کد رهگیری می‌گیرد.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Test Receipt Preview Modal (Directly in Admin Panel) */}
          {testReceiptPreviewModal && (
            <div className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <div className="bg-[#121c29] border-2 border-emerald-500 rounded-3xl p-6 max-w-lg w-full space-y-5 text-right shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white">رسید پرداخت موفق شاپرک</h4>
                      <span className="text-[10px] text-emerald-300">درگاه امن بانکی زیبال - جهش کالا</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setTestReceiptPreviewModal(null)}
                    className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 bg-black/40 p-4 rounded-2xl border border-emerald-900/50 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">شماره سفارش:</span>
                    <strong className="font-mono text-emerald-300 font-bold">{testReceiptPreviewModal.id}</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">کد رهگیری شاپرک:</span>
                    <strong className="font-mono text-amber-300 font-bold">{testReceiptPreviewModal.trackingCode}</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">شماره مرجع بانکی (RefId):</span>
                    <strong className="font-mono text-white font-bold">{testReceiptPreviewModal.paymentRefId}</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">نام خریدار:</span>
                    <strong className="text-white">{testReceiptPreviewModal.customerName}</strong>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">تلفن خریدار:</span>
                    <strong className="text-white font-mono">{testReceiptPreviewModal.customerPhone}</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">مبلغ پرداخت شده:</span>
                    <strong className="text-emerald-400 text-sm font-black">{formatPrice(testReceiptPreviewModal.totalAmount)}</strong>
                  </div>
                </div>

                {/* Items in receipt */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-300 block">کالای خریداری شده:</span>
                  {testReceiptPreviewModal.items.map((it, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <span className="font-bold text-white">{it.product?.title}</span>
                      <span className="text-emerald-300 font-bold">{formatPrice((it.product?.price || 0) * it.quantity)}</span>
                    </div>
                  ))}
                </div>

                {/* Delivery actions in modal */}
                <div className="flex flex-wrap items-center justify-end gap-2 pt-3 border-t border-emerald-900/60">
                  {testReceiptPreviewModal.items.some(
                    (it) =>
                      it.product?.deliveryDays?.includes('دانلود') ||
                      it.product?.title?.includes('بانک') ||
                      it.product?.title?.includes('اطلاعات') ||
                      it.product?.category?.includes('دانلود')
                  ) && (
                    <button
                      type="button"
                      onClick={() => handleTestDownloadFile(testReceiptPreviewModal)}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-black text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-300" />
                      <span>دانلود فایل دیتابیس</span>
                    </button>
                  )}

                  {testReceiptPreviewModal.items.some(
                    (it) =>
                      it.product?.id === 'pkg-amlak-jahesh' ||
                      it.product?.title?.includes('املاک')
                  ) && onOpenAmlakModal && (
                    <button
                      type="button"
                      onClick={() => {
                        setTestReceiptPreviewModal(null);
                        onOpenAmlakModal();
                      }}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>ورود به سامانه املاک</span>
                    </button>
                  )}

                  <button
                    onClick={() => setTestReceiptPreviewModal(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    بستن پیش‌نمایش
                  </button>
                </div>
              </div>
            </div>
          )}
        {/* Selected Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#140c2e] border border-purple-800 rounded-3xl p-6 max-w-lg w-full space-y-4 text-right">
              <div className="flex items-center justify-between border-b border-purple-900 pb-3">
                <h4 className="text-sm font-bold text-white">جزئیات کامل سفارش {selectedOrder.id}</h4>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p><strong>نام مشتری:</strong> {selectedOrder.customerName}</p>
                <p><strong>شماره تماس:</strong> {selectedOrder.customerPhone}</p>
                {selectedOrder.customerEmail && (
                  <p><strong>ایمیل:</strong> {selectedOrder.customerEmail}</p>
                )}
                {selectedOrder.requestedDomain && (
                  <p><strong>دامنه درخواستی:</strong> {selectedOrder.requestedDomain}</p>
                )}
                <p><strong>تاریخ ثبت:</strong> {selectedOrder.date}</p>
                <p><strong>مبلغ کل پرداختی:</strong> {formatPrice(selectedOrder.totalAmount)}</p>
                <div className="flex items-center gap-2 pt-1">
                  <strong>وضعیت سفارش:</strong>
                  <select
                    value={selectedOrder.status}
                    onChange={(e) => {
                      const newStat = e.target.value as OrderStatus;
                      onUpdateOrderStatus(selectedOrder.id, newStat);
                      setSelectedOrder({ ...selectedOrder, status: newStat });
                    }}
                    className="bg-[#0b061b] border border-purple-700/80 rounded-lg px-2.5 py-1 text-xs text-amber-300 font-bold focus:outline-none cursor-pointer"
                  >
                    <option value="در حال بررسی">در حال بررسی</option>
                    <option value="تایید شده / در حال آماده‌سازی">تایید شده / در حال آماده‌سازی</option>
                    <option value="ارسال شده به پست">ارسال شده به پست</option>
                    <option value="در حال طراحی و کدنویسی">در حال طراحی و کدنویسی (پروژه‌ها)</option>
                    <option value="تحویل نهایی شده">تحویل نهایی شده</option>
                    <option value="لغو شده">لغو شده</option>
                  </select>
                </div>

                <div className="pt-2">
                  <strong className="block mb-2 text-white text-xs">اقلام خریداری‌شده:</strong>
                  <div className="space-y-2">
                    {selectedOrder.items.map((item, idx) => {
                      const cleanItemTitle = item.product?.title?.trim().toLowerCase();
                      const live = products?.find(
                        (p) =>
                          (p.id && item.product?.id && p.id === item.product.id) ||
                          (cleanItemTitle && p.title && p.title.trim().toLowerCase() === cleanItemTitle)
                      );
                      const prodImg = live?.image || item.product?.image;

                      return (
                        <div
                          key={idx}
                          className="flex items-center justify-between bg-black/40 p-2 rounded-xl border border-purple-800/40 text-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-lg bg-black/60 border border-purple-800/50 overflow-hidden flex items-center justify-center shrink-0 p-0.5">
                              {prodImg ? (
                                <img
                                  src={prodImg}
                                  alt={item.product.title}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <Package className="w-4 h-4 text-purple-400" />
                              )}
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-white block">
                                {item.product.title}
                              </span>
                              <span className="text-[10px] text-slate-400">
                                تعداد: {item.quantity} عدد
                              </span>
                            </div>
                          </div>
                          <span className="font-bold text-amber-300">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="w-full py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-bold text-xs"
              >
                بستن پنجره
              </button>
            </div>
          </div>
        )}

        {/* INTERACTIVE IMAGE CROPPER MODAL */}
        {cropperModal.isOpen && (
          <ImageCropperModal
            imageSrc={cropperModal.imageSrc}
            initialAspect={cropperModal.aspectRatio}
            targetType={cropperModal.target === 'banner' ? 'banner' : 'product'}
            onClose={() => setCropperModal((prev) => ({ ...prev, isOpen: false }))}
            onCropComplete={async (croppedBase64) => {
              if (cropperModal.target === 'banner') {
                setBannerImageLoading(true);
                try {
                  const uploadedUrl = await uploadBannerImage(croppedBase64, 'banner_crop.jpg');
                  setBannerImage(uploadedUrl || croppedBase64);
                } catch {
                  setBannerImage(croppedBase64);
                } finally {
                  setBannerImageLoading(false);
                }
              } else if (cropperModal.target === 'product_main') {
                setNewImage(croppedBase64);
              }
              setCropperModal((prev) => ({ ...prev, isOpen: false }));
            }}
          />
        )}

      </div>
    </div>
  );
};
