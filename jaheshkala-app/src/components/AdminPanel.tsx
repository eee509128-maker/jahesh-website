import React, { useState, useMemo } from 'react';
import { ImageCropperModal } from './ImageCropperModal';
import {
  Crop,
  ShieldCheck, Package, ShoppingCart, PlusCircle, Trash2, Edit3, CheckCircle2,
  AlertCircle, Phone, Mail, Clock, CreditCard, RefreshCw, X, FileText,
  Sliders, ExternalLink, Code2, Server, HelpCircle, Layers, Tag, Sparkles,
  Flame, Percent, Truck, Check, Ticket, ToggleLeft, ToggleRight, ArrowDownRight, Calculator, Users, MessageCircle, ArrowLeft, Reply, Paperclip, Image as ImageIcon, CornerUpRight, Download,
  Search, UserPlus, Shield, UserCheck, Key, Lock, Copy, Camera, Upload, Plus, Eye, Images,
  ChevronRight, ChevronLeft, Gift, Monitor, Smartphone, Type, Palette, BarChart3, TrendingUp, Filter, ArrowUpDown,
  Cpu, Link2, Globe, Wrench, CheckSquare, RotateCcw, ChevronUp, ChevronDown, ArrowUp, ArrowDown, ChevronsUp, ChevronsDown,
  KeyRound,
  Zap
} from 'lucide-react';
import { Order, Product, OrderStatus, Coupon, User, ChatMessage, UserChat, BannerSlide, SubscriptionPlan, DashboardTool, AppSubscriptionLicense } from '../types';
import { fetchChatsFromDb, saveChatToDb, subscribeToChatsFromDb, fetchOrdersFromDb, saveOrderToDb, fetchBannersFromDb, saveBannerToDb, saveAllBannersToDb, deleteBannerFromDb, uploadBannerImage, uploadProductImage, parseOrderTimestamp, sortUsersNewestFirst, fetchToolsFromDb, saveToolToDb, saveAllToolsToDb, deleteToolFromDb, uploadToolImage, saveAllProductsOrderToDb, sortProductsByRank } from '../lib/dbService';
import { getPendingOrder } from '../lib/zibalService';
import { compressImageFile, getFallbackProductImage } from '../lib/imageUtils';
import { INITIAL_BANNERS, INITIAL_TOOLS } from '../data/initialData';
import { renderFormattedBannerTitle } from '../lib/bannerUtils';
import { JAHESH_OFFICIAL_25_GUILDS } from '../data/guildProducts';
import { buildAiAppPrompt, parseSubscriptionDays, checkLicenseStatus } from '../lib/appLicenseService';

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
  onToggleIncredible?: (product: Product) => void;
  onReorderProducts?: (orderedList: Product[]) => void;
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
  onSaveBanner?: (banner: BannerSlide, fullList?: BannerSlide[]) => void;
  onDeleteBanner?: (bannerId: string, fullList?: BannerSlide[]) => void;
  currentUser?: User | null;
  onAdminInstantPurchase?: (product: Product, quantity?: number) => void;
  onOpenAmlakApp?: () => void;
  onGrantUserLicense?: (
    targetUser: User,
    product: Product,
    durationDays: number,
    plan?: SubscriptionPlan,
    adminNotes?: string
  ) => Promise<{ success: boolean; order?: Order; appLicense?: AppSubscriptionLicense; amlakLicense?: any; message?: string }>;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  orders = [],
  onUpdateOrderStatus,
  onDeleteOrder,
  onClearAllOrders,
  products = [],
  onAddNewProduct,
  onUpdateProduct,
  onDeleteProduct,
  onToggleIncredible,
  onReorderProducts,
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
  banners: initialBannersProp = [],
  onSaveBanner,
  onDeleteBanner,
  currentUser,
  onAdminInstantPurchase,
  onOpenAmlakApp,
  onGrantUserLicense,
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'new-product' | 'banners' | 'coupons' | 'integrations' | 'users' | 'chats' | 'dashboard-tools' | 'backup-restore'>('orders');

  // ==========================================
  // Dashboard Tools Management State
  // ==========================================
  const [toolsList, setToolsList] = useState<DashboardTool[]>(INITIAL_TOOLS || []);
  const [toolsLoading, setToolsLoading] = useState(false);
  const [toolSearchTerm, setToolSearchTerm] = useState('');
  const [toolFilter, setToolFilter] = useState<'all' | 'active' | 'inactive' | 'has_link'>('all');
  const [editingTool, setEditingTool] = useState<DashboardTool | null>(null);
  const [isCreatingNewTool, setIsCreatingNewTool] = useState(false);
  const [toolActionMessage, setToolActionMessage] = useState<string | null>(null);
  const [toolDeleteConfirmId, setToolDeleteConfirmId] = useState<string | null>(null);
  const [productDeleteConfirmId, setProductDeleteConfirmId] = useState<string | null>(null);

  // ==========================================
  // Grant Licensed Product to Registered User State
  // ==========================================
  const [isGrantLicenseModalOpen, setIsGrantLicenseModalOpen] = useState(false);
  const [grantSelectedUser, setGrantSelectedUser] = useState<User | null>(null);
  const [grantSelectedProduct, setGrantSelectedProduct] = useState<Product | null>(null);
  const [grantSelectedPlan, setGrantSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [grantDurationDays, setGrantDurationDays] = useState<number>(1); // Default 1 day (24 full hours)
  const [grantCustomDaysInput, setGrantCustomDaysInput] = useState<string>('1');
  const [grantAdminNotes, setGrantAdminNotes] = useState<string>('');
  const [grantUserSearchTerm, setGrantUserSearchTerm] = useState<string>('');
  const [grantProductSearchTerm, setGrantProductSearchTerm] = useState<string>('');
  const [grantIsSubmitting, setGrantIsSubmitting] = useState(false);
  const [grantSuccessDialog, setGrantSuccessDialog] = useState<{
    isOpen: boolean;
    user: User;
    product: Product;
    days: number;
    order: Order;
    license: any;
  } | null>(null);
  const [grantCopiedField, setGrantCopiedField] = useState<string | null>(null);

  const handleExecuteGrantLicense = async () => {
    if (!grantSelectedUser) {
      alert('لطفاً کاربر مورد نظر را انتخاب فرمایید.');
      return;
    }
    if (!grantSelectedProduct) {
      alert('لطفاً محصول مورد نظر را انتخاب فرمایید.');
      return;
    }
    const safeDays = Math.max(1, parseSubscriptionDays(grantDurationDays || grantCustomDaysInput, 1));
    setGrantIsSubmitting(true);
    try {
      if (onGrantUserLicense) {
        const result = await onGrantUserLicense(
          grantSelectedUser,
          grantSelectedProduct,
          safeDays,
          grantSelectedPlan || undefined,
          grantAdminNotes || undefined
        );
        if (result && result.order) {
          setGrantSuccessDialog({
            isOpen: true,
            user: grantSelectedUser,
            product: grantSelectedProduct,
            days: safeDays,
            order: result.order,
            license: result.appLicense || result.amlakLicense,
          });
          setIsGrantLicenseModalOpen(false);
        }
      }
    } catch (err: any) {
      alert('خطا در اعطای لایسنس: ' + (err?.message || 'خطای سرور'));
    } finally {
      setGrantIsSubmitting(false);
    }
  };

  // Form fields for adding/editing tool
  const [toolTitle, setToolTitle] = useState('');
  const [toolTag, setToolTag] = useState('');
  const [toolMediaBadge, setToolMediaBadge] = useState('');
  const [toolCodeVer, setToolCodeVer] = useState('');
  const [toolDesc, setToolDesc] = useState('');
  const [toolLink, setToolLink] = useState('');
  const [toolBtnText, setToolBtnText] = useState('ورود به سامانه');
  const [toolImage, setToolImage] = useState('');
  const [toolIsActive, setToolIsActive] = useState(true);
  const [toolCardClickable, setToolCardClickable] = useState(true);
  const [toolUploadingImage, setToolUploadingImage] = useState(false);

  const resetToolForm = () => {
    setToolTitle('');
    setToolTag('');
    setToolMediaBadge('');
    setToolCodeVer('');
    setToolDesc('');
    setToolLink('');
    setToolBtnText('ورود به سامانه');
    setToolImage('');
    setToolIsActive(true);
    setToolCardClickable(true);
  };

  const handleStartEditTool = (tool: DashboardTool) => {
    setEditingTool(tool);
    setIsCreatingNewTool(false);
    setToolTitle(tool.title || '');
    setToolTag(tool.tag || '');
    setToolMediaBadge(tool.mediaBadge || '');
    setToolCodeVer(tool.codeVer || '');
    setToolDesc(tool.desc || '');
    setToolLink(tool.link || '');
    setToolBtnText(tool.btnText || 'ورود به سامانه');
    setToolImage(tool.image || '');
    setToolIsActive(tool.isActive !== false);
    setToolCardClickable(tool.cardClickable !== false);
  };

  const handleStartNewTool = () => {
    setEditingTool(null);
    setIsCreatingNewTool(true);
    resetToolForm();
    setToolTag('فناوری و هوش مصنوعی');
    setToolMediaBadge('🚀 JAHESH_TOOL');
    setToolCodeVer(`JHS_TECH_${Date.now().toString().slice(-4)}`);
    setToolBtnText('ورود به محیط سامانه');
  };

  const handleCancelToolForm = () => {
    setEditingTool(null);
    setIsCreatingNewTool(false);
    resetToolForm();
  };

  const handleSaveToolSubmit = async () => {
    if (!toolTitle.trim()) {
      alert('لطفاً عنوان طرح یا ابزار را وارد نمایید.');
      return;
    }

    const itemToSave: DashboardTool = {
      id: editingTool ? editingTool.id : `tool_${Date.now()}`,
      order: editingTool ? editingTool.order : toolsList.length,
      title: toolTitle.trim(),
      tag: toolTag.trim() || 'فناوری و هوش مصنوعی',
      mediaBadge: toolMediaBadge.trim() || '🚀 JAHESH_TOOL',
      codeVer: toolCodeVer.trim() || `JHS_${Date.now().toString().slice(-4)}`,
      desc: toolDesc.trim(),
      link: toolLink.trim() || '#',
      btnText: toolBtnText.trim() || 'ورود به سامانه',
      image: toolImage.trim(),
      isActive: toolIsActive,
      cardClickable: toolCardClickable,
      stickerSvg: editingTool?.stickerSvg || '',
    };

    let updatedList: DashboardTool[] = [];
    if (editingTool) {
      updatedList = toolsList.map(t => (t.id === editingTool.id ? { ...t, ...itemToSave } : t));
    } else {
      updatedList = [itemToSave, ...toolsList];
    }

    setToolsList(updatedList);
    handleCancelToolForm();
    await saveAllToolsToDb(updatedList);

    setToolActionMessage(editingTool ? 'طرح مورد نظر با موفقیت ویرایش و ذخیره شد.' : 'طرح جدید با موفقیت به داشبورد تکنولوژی جهش اضافه شد.');
    setTimeout(() => setToolActionMessage(null), 4000);
  };

  const handleDeleteToolAction = async (toolId: string) => {
    const updatedList = toolsList.filter(t => t.id !== toolId);
    setToolsList(updatedList);
    setToolDeleteConfirmId(null);
    await deleteToolFromDb(toolId, toolsList);
    setToolActionMessage('طرح با موفقیت از لیست حذف شد.');
    setTimeout(() => setToolActionMessage(null), 3000);
  };

  const handleToggleToolActive = async (tool: DashboardTool) => {
    const updated = { ...tool, isActive: tool.isActive === false ? true : false };
    const updatedList = toolsList.map(t => (t.id === tool.id ? updated : t));
    setToolsList(updatedList);
    await saveToolToDb(updated, updatedList);
    setToolActionMessage(`وضعیت نمایش «${tool.title}» به ${updated.isActive ? 'فعال' : 'غیرفعال'} تغییر یافت.`);
    setTimeout(() => setToolActionMessage(null), 3000);
  };

  const handleMoveTool = async (index: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= toolsList.length) return;
    const reordered = [...toolsList];
    const temp = reordered[index];
    reordered[index] = reordered[targetIdx];
    reordered[targetIdx] = temp;
    const updated = reordered.map((t, idx) => ({ ...t, order: idx }));
    setToolsList(updated);
    await saveAllToolsToDb(updated);
  };

  const handleToolImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setToolUploadingImage(true);
    try {
      const reader = new FileReader();
      reader.onload = async (ev) => {
        const base64 = ev.target?.result as string;
        if (base64) {
          const uploadedUrl = await uploadToolImage(base64);
          setToolImage(uploadedUrl || base64);
        }
        setToolUploadingImage(false);
      };
      reader.readAsDataURL(file);
    } catch {
      setToolUploadingImage(false);
    }
  };
  const [bannersList, setBannersList] = useState<BannerSlide[]>(initialBannersProp || INITIAL_BANNERS);
  const [editingBannerId, setEditingBannerId] = useState<string | null>(null);
  const [bannerTitle, setBannerTitle] = useState('');
  const [bannerSubtitle, setBannerSubtitle] = useState('');
  const [bannerBadge, setBannerBadge] = useState('');
  const [bannerCta, setBannerCta] = useState('مشاهده تخفیف‌های شگفت‌انگیز');
  const [bannerActionType, setBannerActionType] = useState<'incredible' | 'category' | 'link' | 'all' | 'product'>('incredible');
  const [bannerActionTarget, setBannerActionTarget] = useState('');
  const [bannerProductSearch, setBannerProductSearch] = useState('');
  const [bannerGradient, setBannerGradient] = useState('from-[#3b1261] via-[#220d3d] to-[#0d071a]');
  const [bannerOpacity, setBannerOpacity] = useState<number>(90);
  const [bannerImagePosition, setBannerImagePosition] = useState('center');
  const [bannerFitMode, setBannerFitMode] = useState<'cover' | 'contain' | 'auto'>('cover');
  const [bannerHideTextOverlay, setBannerHideTextOverlay] = useState<boolean>(false);
  const [bannerTargetGuild, setBannerTargetGuild] = useState<string>('');
  const [bannerImage, setBannerImage] = useState('');
  const [bannerImageLoading, setBannerImageLoading] = useState(false);
  const [bannerSuccessMessage, setBannerSuccessMessage] = useState('');

  // ویژگی‌های پیشرفته گرافیکی متن و پس‌زمینه بنر
  const [bannerTitleColor, setBannerTitleColor] = useState<string>('#ffffff');
  const [bannerSubtitleColor, setBannerSubtitleColor] = useState<string>('#e2e8f0');
  const [bannerHighlightText, setBannerHighlightText] = useState<string>('');
  const [bannerHighlightColor, setBannerHighlightColor] = useState<string>('#fbbf24');
  const [bannerTextBackdropEnabled, setBannerTextBackdropEnabled] = useState<boolean>(false);
  const [bannerTextBackdropTheme, setBannerTextBackdropTheme] = useState<'dark' | 'purple' | 'navy' | 'light'>('dark');
  const [bannerTextBackdropOpacity, setBannerTextBackdropOpacity] = useState<number>(65);
  const [bannerTitleFontSize, setBannerTitleFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');
  const [bannerSubtitleFontSize, setBannerSubtitleFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [bannerSingleLineTitle, setBannerSingleLineTitle] = useState<boolean>(true);
  const [bannerSingleLineSubtitle, setBannerSingleLineSubtitle] = useState<boolean>(false);

  // محصول انتخاب شده برای اتصال به بنر
  const selectedProductForBanner = useMemo(() => {
    if (bannerActionType !== 'product' || !bannerActionTarget) return null;
    return products.find((p) => p.id === bannerActionTarget);
  }, [products, bannerActionType, bannerActionTarget]);

  // لیست کالاهای منطبق با جستجو در ویرایش بنر
  const matchingProductsForBanner = useMemo(() => {
    if (bannerActionType !== 'product') return [];
    const q = bannerProductSearch.trim().toLowerCase();
    if (!q) {
      return products.slice(0, 10);
    }
    return products.filter((p) =>
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q)) ||
      (p.id && p.id.toLowerCase().includes(q))
    ).slice(0, 25);
  }, [products, bannerActionType, bannerProductSearch]);
  const [bannerPreviewDevice, setBannerPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [isRefreshingOrders, setIsRefreshingOrders] = useState(false);
  const [refreshNotice, setRefreshNotice] = useState<string | null>(null);

  const handleRefreshOrders = async () => {
    setIsRefreshingOrders(true);
    setRefreshNotice(null);
    try {
      // Sync all valid orders across server disk, Supabase chats config, orders table, and localStorage
      const fresh = await fetchOrdersFromDb();
      if (fresh && Array.isArray(fresh)) {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('jahesh-orders-updated', { detail: fresh }));
        }
        setRefreshNotice(`لیست سفارشات به روزرسانی شد (${fresh.length.toLocaleString('fa-IR')} سفارش دریافتی)`);
      } else {
        setRefreshNotice('لیست سفارشات بررسی گردید.');
      }
    } catch (e) {
      setRefreshNotice('خطا در دریافت سفارشات جدید از سرور.');
    } finally {
      setTimeout(() => {
        setIsRefreshingOrders(false);
      }, 500);
      setTimeout(() => {
        setRefreshNotice(null);
      }, 4000);
    }
  };
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



  const [isRefreshingUsers, setIsRefreshingUsers] = useState(false);

  const handleRefreshUsersList = async () => {
    setIsRefreshingUsers(true);
    try {
      const { fetchAllUsersFromDb } = await import('../lib/dbService');
      const fresh = await fetchAllUsersFromDb();
      if (fresh && Array.isArray(fresh)) {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('jahesh-users-updated', { detail: fresh }));
        }
        setUserActionMessage(`لیست کاربران با موفقیت همگام‌سازی شد (${fresh.length.toLocaleString('fa-IR')} کاربر)`);
      }
    } catch (err) {
      console.warn('Error refreshing users:', err);
    } finally {
      setTimeout(() => {
        setIsRefreshingUsers(false);
      }, 500);
      setTimeout(() => {
        setUserActionMessage('');
      }, 4000);
    }
  };

  React.useEffect(() => {
    if (isOpen && activeTab === 'users') {
      handleRefreshUsersList();
    }
  }, [isOpen, activeTab]);

  const mainContentRef = React.useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [showScrollBottom, setShowScrollBottom] = React.useState(true);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabNavRef.current) {
      const scrollAmount = direction === 'left' ? -240 : 240;
      tabNavRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleContentScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isAtTop = target.scrollTop < 100;
    const isAtBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 100;
    setShowScrollTop(!isAtTop);
    setShowScrollBottom(!isAtBottom);
  };

  const scrollToTop = () => {
    mainContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: mainContentRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'auto' });
      setShowScrollTop(false);
      setShowScrollBottom(true);
    }
  }, [activeTab]);

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
      const loadTools = async () => {
        setToolsLoading(true);
        try {
          const data = await fetchToolsFromDb();
          if (data && data.length > 0) {
            setToolsList(data);
          } else if (INITIAL_TOOLS && INITIAL_TOOLS.length > 0) {
            setToolsList(INITIAL_TOOLS);
          }
        } catch {
          if (INITIAL_TOOLS && INITIAL_TOOLS.length > 0) {
            setToolsList(INITIAL_TOOLS);
          }
        } finally {
          setToolsLoading(false);
        }
      };

      loadChats();
      loadBanners();
      loadTools();

      // Real-time Firestore Chat Sync: instantly receives messages & human escalation
      const unsubscribeChats = subscribeToChatsFromDb((liveChats) => {
        setChats(liveChats);
        setSelectedChat((currentSelected) => {
          if (!currentSelected) return currentSelected;
          const fresh = liveChats.find((c) => c.userId === currentSelected.userId);
          return fresh || currentSelected;
        });
      });

      const handleChatsUpdated = () => {
        loadChats();
      };
      const handleToolsUpdated = (e: Event) => {
        const customEvent = e as CustomEvent<DashboardTool[]>;
        if (customEvent.detail && Array.isArray(customEvent.detail) && customEvent.detail.length > 0) {
          setToolsList(customEvent.detail);
        } else {
          loadTools();
        }
      };
      const handleBannersUpdated = (e: Event) => {
        const customEvent = e as CustomEvent<BannerSlide[]>;
        if (customEvent.detail && Array.isArray(customEvent.detail) && customEvent.detail.length > 0) {
          setBannersList(customEvent.detail);
        } else {
          loadBanners();
        }
      };
      window.addEventListener('jahesh-chats-updated', handleChatsUpdated);
      window.addEventListener('jahesh-tools-updated', handleToolsUpdated as EventListener);
      window.addEventListener('jahesh-banners-updated', handleBannersUpdated as EventListener);

      return () => {
        if (unsubscribeChats) {
          unsubscribeChats();
        }
        window.removeEventListener('jahesh-chats-updated', handleChatsUpdated);
        window.removeEventListener('jahesh-tools-updated', handleToolsUpdated as EventListener);
        window.removeEventListener('jahesh-banners-updated', handleBannersUpdated as EventListener);
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
    setBannerProductSearch('');
    setBannerGradient(b.gradient || 'from-[#3b1261] via-[#220d3d] to-[#0d071a]');
    setBannerOpacity(b.overlayOpacity !== undefined ? b.overlayOpacity : 90);
    setBannerImagePosition(b.imagePosition || 'center');
    setBannerFitMode(b.fitMode || 'auto');
    setBannerHideTextOverlay(!!b.hideTextOverlay);
    setBannerTargetGuild(b.targetGuild || '');
    setBannerImage(b.image || '');
    setBannerTitleColor(b.titleColor || '#ffffff');
    setBannerSubtitleColor(b.subtitleColor || '#e2e8f0');
    setBannerHighlightText(b.highlightText || '');
    setBannerHighlightColor(b.highlightColor || '#fbbf24');
    setBannerTextBackdropEnabled(!!b.textBackdropEnabled);
    setBannerTextBackdropTheme(b.textBackdropTheme || 'dark');
    setBannerTextBackdropOpacity(b.textBackdropOpacity !== undefined ? b.textBackdropOpacity : 65);
    setBannerTitleFontSize(b.titleFontSize || 'lg');
    setBannerSubtitleFontSize(b.subtitleFontSize || 'md');
    setBannerSingleLineTitle(b.singleLineTitle !== undefined ? b.singleLineTitle : true);
    setBannerSingleLineSubtitle(!!b.singleLineSubtitle);
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
    setBannerProductSearch('');
    setBannerGradient('from-[#3b1261] via-[#220d3d] to-[#0d071a]');
    setBannerOpacity(90);
    setBannerImagePosition('center');
    setBannerFitMode('auto');
    setBannerHideTextOverlay(false);
    setBannerTargetGuild('');
    setBannerImage('');
    setBannerTitleColor('#ffffff');
    setBannerSubtitleColor('#e2e8f0');
    setBannerHighlightText('');
    setBannerHighlightColor('#fbbf24');
    setBannerTextBackdropEnabled(false);
    setBannerTextBackdropTheme('dark');
    setBannerTextBackdropOpacity(65);
    setBannerTitleFontSize('lg');
    setBannerSubtitleFontSize('md');
    setBannerSingleLineTitle(true);
    setBannerSingleLineSubtitle(false);
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
      fitMode: bannerFitMode,
      hideTextOverlay: bannerHideTextOverlay,
      targetGuild: bannerTargetGuild.trim() || undefined,
      image: bannerImage,
      titleColor: bannerTitleColor,
      subtitleColor: bannerSubtitleColor,
      highlightText: bannerHighlightText.trim() || undefined,
      highlightColor: bannerHighlightColor,
      textBackdropEnabled: bannerTextBackdropEnabled,
      textBackdropTheme: bannerTextBackdropTheme,
      textBackdropOpacity: bannerTextBackdropOpacity,
      titleFontSize: bannerTitleFontSize,
      subtitleFontSize: bannerSubtitleFontSize,
      singleLineTitle: bannerSingleLineTitle,
      singleLineSubtitle: bannerSingleLineSubtitle,
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
    if (onSaveBanner) onSaveBanner(newBanner, updatedList);

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
    if (onSaveBanner) onSaveBanner(updated, newList);
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
    if (onSaveBanner && ordered.length > 0) onSaveBanner(ordered[0], ordered);
  };

  const handleDeleteBannerSlide = async (bannerId: string) => {
    if (!window.confirm('آیا از حذف این بنر مطمئن هستید؟')) return;
    const newList = bannersList.filter((b) => b.id !== bannerId);
    setBannersList(newList);
    await saveAllBannersToDb(newList);
    await deleteBannerFromDb(bannerId);
    if (onDeleteBanner) onDeleteBanner(bannerId, newList);
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

  // Products Tab Categorization & Filter States
  const [prodSearchQuery, setProdSearchQuery] = useState('');
  const [prodFilterTab, setProdFilterTab] = useState<'all' | 'guilds' | 'categories' | 'popular' | 'incredible' | 'subscription'>('all');
  const [prodSelectedGuild, setProdSelectedGuild] = useState<string>('all');
  const [prodSelectedCategory, setProdSelectedCategory] = useState<string>('all');
  const [prodSortBy, setProdSortBy] = useState<'rank' | 'newest' | 'price_desc' | 'price_asc' | 'title'>('rank');
  const [newDisplayOrder, setNewDisplayOrder] = useState<number | ''>('');
  const [isSavingProductOrder, setIsSavingProductOrder] = useState(false);
  const [rankSyncSuccessMsg, setRankSyncSuccessMsg] = useState<string | null>(null);
  const [showRankManagerTable, setShowRankManagerTable] = useState(true);

  const handleMoveProductOrder = async (productId: string, direction: 'up' | 'down' | 'top' | 'bottom') => {
    const list = sortProductsByRank(products);
    const index = list.findIndex((p) => p.id === productId);
    if (index < 0) return;
    let targetIndex = index;
    if (direction === 'up') targetIndex = index - 1;
    else if (direction === 'down') targetIndex = index + 1;
    else if (direction === 'top') targetIndex = 0;
    else if (direction === 'bottom') targetIndex = list.length - 1;

    if (targetIndex < 0 || targetIndex >= list.length || targetIndex === index) return;

    const [moved] = list.splice(index, 1);
    list.splice(targetIndex, 0, moved);

    // Re-assign displayOrder sequentially 1, 2, 3...
    const updated = list.map((item, idx) => ({
      ...item,
      displayOrder: idx + 1,
      displayRank: idx + 1,
      updatedAt: new Date().toISOString(),
    }));

    if (onReorderProducts) {
      onReorderProducts(updated);
    } else {
      await saveAllProductsOrderToDb(updated);
    }
  };

  const handleSetProductRank = async (productId: string, rankInput: number) => {
    if (isNaN(rankInput) || rankInput < 1) return;
    const list = sortProductsByRank(products);
    const index = list.findIndex((p) => p.id === productId);
    if (index < 0) return;

    const [moved] = list.splice(index, 1);
    const targetIndex = Math.min(Math.max(rankInput - 1, 0), list.length);
    list.splice(targetIndex, 0, moved);

    const updated = list.map((item, idx) => ({
      ...item,
      displayOrder: idx + 1,
      displayRank: idx + 1,
      updatedAt: new Date().toISOString(),
    }));

    if (onReorderProducts) {
      onReorderProducts(updated);
    } else {
      await saveAllProductsOrderToDb(updated);
    }
  };

  const handleAutoRenumberRanks = async () => {
    const list = sortProductsByRank(products);
    const updated = list.map((item, idx) => ({
      ...item,
      displayOrder: idx + 1,
      displayRank: idx + 1,
      updatedAt: new Date().toISOString(),
    }));
    if (onReorderProducts) {
      onReorderProducts(updated);
    } else {
      await saveAllProductsOrderToDb(updated);
    }
    setRankSyncSuccessMsg(`تمام ${updated.length} محصول با موفقیت به ترتیب شماره‌گذاری و ذخیره شدند.`);
    setTimeout(() => setRankSyncSuccessMsg(null), 4000);
  };

  const handleSyncAllProductsToAllUsers = async () => {
    setIsSavingProductOrder(true);
    try {
      const list = sortProductsByRank(products);
      const ordered = list.map((item, idx) => ({
        ...item,
        displayOrder: typeof item.displayOrder === 'number' && item.displayOrder > 0 ? item.displayOrder : idx + 1,
        displayRank: typeof item.displayRank === 'number' && item.displayRank > 0 ? item.displayRank : idx + 1,
        updatedAt: new Date().toISOString(),
      }));
      await saveAllProductsOrderToDb(ordered);
      if (onReorderProducts) onReorderProducts(ordered);
      setRankSyncSuccessMsg('✅ رتبه‌بندی محصولات در دیتابیس ابری فایربیس و برای تمام کاربران و مهمانان ذخیره و اعمال شد.');
      setTimeout(() => setRankSyncSuccessMsg(null), 4500);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSavingProductOrder(false);
    }
  };

  const [quickViewEditModal, setQuickViewEditModal] = useState<{
    isOpen: boolean;
    product: Product | null;
    category: string;
    guild: string;
  }>({
    isOpen: false,
    product: null,
    category: '',
    guild: '',
  });

  // Edit / New Product Form State
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newBrand, setNewBrand] = useState('');
  
  // Category selection mode
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [selectedExistingCategory, setSelectedExistingCategory] = useState<string>('کالای دیجیتال');
  const [customCategoryName, setCustomCategoryName] = useState<string>('');

  // Guild & Innovation Selection Mode
  const [selectedGuildMode, setSelectedGuildMode] = useState<'25guilds' | 'custom' | 'none'>('25guilds');
  const [selectedOfficialGuild, setSelectedOfficialGuild] = useState<string>(JAHESH_OFFICIAL_25_GUILDS[0] || 'طراحی سایت، وب، اپلیکیشن و فناوری اطلاعات');
  const [customGuildInput, setCustomGuildInput] = useState<string>('');
  const [newPainPointSolved, setNewPainPointSolved] = useState<string>('');

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
  const [incredibleTimerDuration, setIncredibleTimerDuration] = useState<'1day' | '3days' | '1week' | '1month' | 'permanent' | 'custom'>('permanent');
  const [incredibleExpiresAt, setIncredibleExpiresAt] = useState<string>('');
  const [isFreeShipping, setIsFreeShipping] = useState(true);
  const [isInStock, setIsInStock] = useState(true);

  // Subscription Settings Flag & Daily Price
  const [isSubscription, setIsSubscription] = useState(false);
  const [pricePerDayInput, setPricePerDayInput] = useState('250000');

  // Custom Multi-Tier Subscription / Pricing Plans
  const [hasCustomPlans, setHasCustomPlans] = useState(false);
  const [customPlansTitle, setCustomPlansTitle] = useState('پکیج‌های تبلیغات هوشمند');
  const [customPlansSubtitle, setCustomPlansSubtitle] = useState('انتخاب کنید و کمپین خود را به سطح بالاتری ببرید');
  const [customPlans, setCustomPlans] = useState<SubscriptionPlan[]>([]);

  // AI Application & Prompt Engine State (Windows Desktop & Android Mobile App generation)
  const [isAiAppProduct, setIsAiAppProduct] = useState(false);
  const [aiAppName, setAiAppName] = useState('');
  const [aiAppPlatform, setAiAppPlatform] = useState<'windows' | 'android' | 'cross-platform' | 'all'>('all');
  const [aiAppDefaultDays, setAiAppDefaultDays] = useState(7);
  const [aiAppCustomPromptNote, setAiAppCustomPromptNote] = useState('');
  const [copiedPromptFeedback, setCopiedPromptFeedback] = useState<string | null>(null);
  const [testAuthUsername, setTestAuthUsername] = useState('jahesh');
  const [testAuthPassword, setTestAuthPassword] = useState('jahesh1395');
  const [testAuthResult, setTestAuthResult] = useState<any | null>(null);
  const [isTestingAuth, setIsTestingAuth] = useState(false);

  // App Direct Download URL & Installer Package State (لینک دانلود مستقیم اپلیکیشن و فایل نصبی APK / EXE)
  const [newDownloadUrl, setNewDownloadUrl] = useState('');
  const [newAppVersion, setNewAppVersion] = useState('');
  const [newAppFileSize, setNewAppFileSize] = useState('');
  const [isUploadingAppFile, setIsUploadingAppFile] = useState(false);
  const [appUploadProgressText, setAppUploadProgressText] = useState<string | null>(null);
  const appFileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUploadAppFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 250 * 1024 * 1024) {
      alert('حجم فایل انتخابی بیش از ۲۵۰ مگابایت است. لطفاً فایل کم‌حجم‌تر انتخاب کنید یا آن را در هاست دانلود / گوگل درایو آپلود کرده و لینک مستقیم آن را در کادر قرار دهید.');
      return;
    }

    setIsUploadingAppFile(true);
    setAppUploadProgressText(`در حال آماده‌سازی و خواندن فایل ${file.name}...`);

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Data = reader.result as string;
          setAppUploadProgressText(`در حال ارسال و ذخیره‌سازی فایل نصبی روی سرور جهش (${(file.size / (1024 * 1024)).toFixed(1)} MB)...`);

          const res = await fetch('/api/upload-app-file', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fileData: base64Data,
              fileName: file.name,
            }),
          });

          const data = await res.json();
          if (data.success && data.url) {
            setNewDownloadUrl(data.url);
            if (data.fileSize) {
              setNewAppFileSize(data.fileSize);
            }
            setFormSuccess(`فایل نصبی «${file.name}» با موفقیت در مسیر ${data.url} روی سرور ذخیره شد و لینک دانلود درج گردید!`);
            setTimeout(() => setFormSuccess(''), 6000);
          } else {
            alert(data.error || 'خطا در آپلود فایل اپلیکیشن');
          }
        } catch (err: any) {
          alert('خطا در ارتباط با سرور: ' + (err.message || ''));
        } finally {
          setIsUploadingAppFile(false);
          setAppUploadProgressText(null);
          if (appFileInputRef.current) appFileInputRef.current.value = '';
        }
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      setIsUploadingAppFile(false);
      setAppUploadProgressText(null);
      alert('خطا در بارگذاری فایل: ' + (err.message || ''));
    }
  };

  const handleTestAppAuth = async () => {
    setIsTestingAuth(true);
    setTestAuthResult(null);
    try {
      const res = await fetch('/api/app-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: testAuthUsername.trim(),
          password: testAuthPassword.trim(),
          productId: editingProductId || 'test-app',
        }),
      });
      const data = await res.json();
      setTestAuthResult(data);
    } catch (err: any) {
      setTestAuthResult({ success: false, error: err.message || 'خطا در برقراری ارتباط با سرور' });
    } finally {
      setIsTestingAuth(false);
    }
  };

  const handleLoadDefaultPlansPreset = () => {
    setCustomPlans([
      {
        id: 'plan-' + Date.now() + '-1',
        name: 'پایه (استارتر)',
        badge: 'مناسب شروع',
        price: 9900000,
        originalPrice: 14000000,
        durationDays: 30,
        durationLabel: 'دوره ۱ ماهه',
        shortDescription: 'مناسب کسب‌وکارهای نوپا و تست اولیه بازار',
        features: [
          'لیست تا ۲,۰۰۰ شماره هدفمند',
          '۲۰ پوستر حرفه‌ای',
          '۱ تیزر تبلیغاتی',
          'گزارش ساده از عملکرد کمپین',
        ],
        isPopular: false,
      },
      {
        id: 'plan-' + Date.now() + '-2',
        name: 'طلایی (پیشنهادی ویژه)',
        badge: '🔥 پیشنهادی ویژه',
        price: 25500000,
        originalPrice: 36500000,
        durationDays: 30,
        durationLabel: 'دوره ۱ ماهه طلایی',
        shortDescription: '۳۰٪ تخفیف ویژه اولین همکاری',
        features: [
          'تمام امکانات پیشرفته و تحلیلی',
          '۵۰۰۰ + فیلتر حرفه‌ای مخاطبان',
          'تیزر و ویدیو با هوش مصنوعی',
          '۵۰ پوستر و محتوای اختصاصی',
          'پشتیبانی مستقیم و مشاوره کمپین',
        ],
        isPopular: true,
      },
      {
        id: 'plan-' + Date.now() + '-3',
        name: 'پلاتینیوم (VIP)',
        badge: 'VIP پلاتینیوم',
        price: 490000000,
        originalPrice: 590000000,
        durationDays: 365,
        durationLabel: 'کمپین جامع سالانه VIP',
        shortDescription: 'بالاترین سطح دسترسی و مدیریت اختصاصی',
        features: [
          'همه امکانات طلایی + محتوای اختصاصی نامحدود',
          'کمپین ویژه برای هر شهرستان به تفکیک',
          'شناسایی و هماهنگی اینفلوئنسرها',
          'پشتیبانی ۲۴ ساعته اختصاصی VIP',
          'مدیریت صفر تا صد مارکتینگ و لایو',
        ],
        isPopular: false,
      },
    ]);
  };

  const handleAddNewPlan = () => {
    const newP: SubscriptionPlan = {
      id: 'plan-' + Date.now(),
      name: `تعرفه ${customPlans.length + 1}`,
      badge: '',
      price: 10000000,
      originalPrice: 15000000,
      durationDays: 30,
      durationLabel: 'دوره ۱ ماهه',
      shortDescription: '',
      features: ['ویژگی و امکانات اول', 'پشتیبانی اختصاصی'],
      isPopular: customPlans.length === 1,
    };
    setCustomPlans([...customPlans, newP]);
  };

  const handleUpdatePlan = (index: number, updated: Partial<SubscriptionPlan>) => {
    setCustomPlans((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...updated };
      return next;
    });
  };

  const handleDeletePlan = (index: number) => {
    setCustomPlans((prev) => prev.filter((_, i) => i !== index));
  };

  // Helper function to set duration and calculate target expiration date
  const handleSetIncredibleDuration = (duration: '1day' | '3days' | '1week' | '1month' | 'permanent' | 'custom', customHours?: number) => {
    setIncredibleTimerDuration(duration);
    let target = Date.now();
    if (duration === '1day') target += 24 * 60 * 60 * 1000;
    else if (duration === '3days') target += 3 * 24 * 60 * 60 * 1000;
    else if (duration === '1week') target += 7 * 24 * 60 * 60 * 1000;
    else if (duration === '1month') target += 30 * 24 * 60 * 60 * 1000;
    else if (duration === 'permanent') target += 365 * 24 * 60 * 60 * 1000; // 1 year rolling / permanent
    else if (duration === 'custom' && customHours) target += customHours * 60 * 60 * 1000;
    setIncredibleExpiresAt(new Date(target).toISOString());
  };

  const formatPersianDateTime = (isoDate?: string) => {
    if (!isoDate) return 'تنظیم نشده (پیش‌فرض دائمی/همیشگی)';
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
        try {
          const uploadedUrl = await uploadProductImage(compressed, `gallery_${Date.now()}_${i}.webp`);
          newItems.push(uploadedUrl || compressed);
        } catch {
          newItems.push(compressed);
        }
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

  const handleSetGalleryAsMain = (idx: number) => {
    const chosen = newGallery[idx];
    if (!chosen) return;
    const oldMain = newImage;
    setNewImage(chosen);
    setNewGallery((prev) => {
      const next = prev.filter((_, i) => i !== idx);
      if (oldMain && oldMain.trim() !== '' && oldMain !== chosen) {
        return [oldMain, ...next];
      }
      return next;
    });
  };

  const handleRemoveMainImage = () => {
    setNewImage('');
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
  const [userRoleFilter, setUserRoleFilter] = useState<'all' | 'admin' | 'operator' | 'user'>('all');
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserPhone, setNewUserPhone] = useState('');
  const [newUserUsername, setNewUserUsername] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<'admin' | 'operator' | 'user'>('user');
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

  const formatPrice = (num?: number) => {
    if (typeof num !== 'number' || isNaN(num)) return '۰ تومان';
    return num.toLocaleString('fa-IR') + ' تومان';
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
    setHasCustomPlans(false);
    setCustomPlansTitle('پکیج‌های تبلیغات هوشمند');
    setCustomPlansSubtitle('انتخاب کنید و کمپین خود را به سطح بالاتری ببرید');
    setCustomPlans([]);
    setIsAiAppProduct(false);
    setAiAppName('');
    setAiAppPlatform('all');
    setAiAppDefaultDays(7);
    setAiAppCustomPromptNote('');
    setCopiedPromptFeedback(null);
    setTestAuthResult(null);
    setSelectedGuildMode('25guilds');
    setSelectedOfficialGuild(JAHESH_OFFICIAL_25_GUILDS[0] || 'طراحی سایت، وب، اپلیکیشن و فناوری اطلاعات');
    setCustomGuildInput('');
    setNewPainPointSolved('');
    setNewDownloadUrl('');
    setNewAppVersion('');
    setNewAppFileSize('');
    setNewProductCouponCode('');
    setNewProductCouponPercent('');
    setNewDisplayOrder('');
    setFormSuccess('');
    setActiveTab('new-product');
  };

  const handleStartEdit = (prod: Product) => {
    setEditingProductId(prod.id);
    setNewTitle(prod.title);
    setNewBrand(prod.brand || '');
    setNewDisplayOrder(typeof prod.displayOrder === 'number' ? prod.displayOrder : (typeof prod.displayRank === 'number' ? prod.displayRank : ''));
    
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
    const currentImg = (prod.image || '').trim();
    setNewImage(currentImg);
    // Filter out any duplicate of currentImg from gallery so user never sees duplicate photos
    const cleanGal = (prod.gallery || []).filter((g) => g && typeof g === 'string' && g.trim() !== '' && g.trim() !== currentImg);
    setNewGallery(cleanGal);
    setShowUrlInput(false);
    setNewShortDesc(prod.shortDescription || '');
    setNewFullDesc(prod.fullDescription || '');
    setNewFeatures(prod.features ? prod.features.join('\n') : '');
    setIsPopular(Boolean(prod.isPopular));
    setIsIncredible(Boolean(prod.isIncredible));
    setIncredibleTimerDuration((prod.incredibleTimerDuration as any) || 'permanent');
    setIncredibleExpiresAt(prod.incredibleExpiresAt || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString());
    setIsFreeShipping(Boolean(prod.deliveryDays?.includes('رایگان')));
    setIsInStock(true);
    setIsSubscription(Boolean(prod.isSubscription || prod.id === 'pkg-amlak-jahesh'));
    setPricePerDayInput(prod.pricePerDay ? prod.pricePerDay.toString() : '250000');
    setHasCustomPlans(Boolean(prod.hasCustomPlans));
    setCustomPlansTitle(prod.customPlansTitle || 'پکیج‌های تبلیغات هوشمند');
    setCustomPlansSubtitle(prod.customPlansSubtitle || 'انتخاب کنید و کمپین خود را به سطح بالاتری ببرید');
    setCustomPlans(prod.subscriptionPlans && prod.subscriptionPlans.length > 0 ? prod.subscriptionPlans : []);
    
    // AI App & Prompt Engine fields
    setIsAiAppProduct(Boolean(prod.isAiAppProduct || prod.isSubscription || prod.id === 'pkg-amlak-jahesh'));
    setAiAppName(prod.aiAppName || prod.title || '');
    setAiAppPlatform(prod.aiAppPlatform || 'all');
    setAiAppDefaultDays(prod.aiAppDefaultDays || (prod.isSubscription ? 30 : 7));
    setAiAppCustomPromptNote(prod.aiAppCustomPromptNote || '');
    setCopiedPromptFeedback(null);
    setTestAuthResult(null);

    // App Download & Installer File Info
    setNewDownloadUrl(prod.downloadUrl || prod.appDownloadUrl || '');
    setNewAppVersion(prod.appVersion || '');
    setNewAppFileSize(prod.appFileSize || '');

    // Guild & Innovation Settings
    const currentGuild = prod.guild || (prod as any).targetGuild || '';
    if (!currentGuild) {
      setSelectedGuildMode('none');
      setSelectedOfficialGuild(JAHESH_OFFICIAL_25_GUILDS[0] || 'طراحی سایت، وب، اپلیکیشن و فناوری اطلاعات');
      setCustomGuildInput('');
    } else if (JAHESH_OFFICIAL_25_GUILDS.includes(currentGuild)) {
      setSelectedGuildMode('25guilds');
      setSelectedOfficialGuild(currentGuild);
      setCustomGuildInput('');
    } else {
      setSelectedGuildMode('custom');
      setCustomGuildInput(currentGuild);
      setSelectedOfficialGuild(JAHESH_OFFICIAL_25_GUILDS[0] || 'طراحی سایت، وب، اپلیکیشن و فناوری اطلاعات');
    }
    setNewPainPointSolved((prod as any).painPointSolved || '');

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

    const existingProduct = editingProductId ? products.find((p) => p.id === editingProductId) : undefined;
    
    // Resolve final main image and clean gallery:
    // If user cleared newImage, check if there are images in newGallery to use first one as main image.
    // If user cleared everything, finalImage stays empty. NEVER resurrect deleted images!
    let finalImage = newImage.trim();
    let finalGallery = newGallery.filter((g) => typeof g === 'string' && g.trim() !== '');

    if (!finalImage && finalGallery.length > 0) {
      finalImage = finalGallery[0];
      finalGallery = finalGallery.slice(1);
    } else if (finalImage) {
      finalGallery = finalGallery.filter((g) => g !== finalImage);
    }

    let finalGuild: string | undefined = undefined;
    if (selectedGuildMode === '25guilds') {
      finalGuild = selectedOfficialGuild.trim() || undefined;
    } else if (selectedGuildMode === 'custom') {
      finalGuild = customGuildInput.trim() || undefined;
    }

    const productData: Product = {
      ...(existingProduct || {}),
      id: editingProductId || ('prod-' + Date.now()),
      title: newTitle.trim(),
      category: finalCategory,
      brand: newBrand.trim() || undefined,
      guild: finalGuild,
      targetGuilds: finalGuild ? [finalGuild] : undefined,
      painPointSolved: newPainPointSolved.trim() || undefined,
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
      gallery: finalGallery,
      isIncredible: Boolean(isIncredible),
      incredibleTimerDuration: isIncredible ? (incredibleTimerDuration || 'permanent') : undefined,
      incredibleExpiresAt: isIncredible
        ? (incredibleTimerDuration === 'permanent'
            ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
            : (incredibleExpiresAt || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()))
        : undefined,
      isSubscription: Boolean(isSubscription),
      pricePerDay: isSubscription ? (parseInt(pricePerDayInput.replace(/[^0-9]/g, ''), 10) || 250000) : undefined,
      hasCustomPlans: Boolean(hasCustomPlans),
      customPlansTitle: hasCustomPlans ? (customPlansTitle.trim() || 'پکیج‌های تبلیغات هوشمند') : undefined,
      customPlansSubtitle: hasCustomPlans ? (customPlansSubtitle.trim() || 'انتخاب کنید و کمپین خود را به سطح بالاتری ببرید') : undefined,
      subscriptionPlans: hasCustomPlans && customPlans.length > 0
        ? customPlans.map((pl) => ({
            ...pl,
            features: Array.isArray(pl.features)
              ? pl.features.map((f) => f.trim()).filter(Boolean)
              : [],
          }))
        : undefined,
      isAiAppProduct: Boolean(isAiAppProduct),
      aiAppName: isAiAppProduct ? (aiAppName.trim() || newTitle.trim()) : undefined,
      aiAppPlatform: isAiAppProduct ? aiAppPlatform : undefined,
      aiAppDefaultDays: isAiAppProduct ? Math.max(1, aiAppDefaultDays || 7) : undefined,
      aiAppCustomPromptNote: isAiAppProduct ? aiAppCustomPromptNote.trim() : undefined,
      downloadUrl: (() => {
        let u = newDownloadUrl.trim().replace(/\/+$/, '');
        if (u && !u.startsWith('http://') && !u.startsWith('https://') && !u.startsWith('/')) u = '/' + u;
        return u || undefined;
      })(),
      appDownloadUrl: (() => {
        let u = newDownloadUrl.trim().replace(/\/+$/, '');
        if (u && !u.startsWith('http://') && !u.startsWith('https://') && !u.startsWith('/')) u = '/' + u;
        return u || undefined;
      })(),
      appVersion: newAppVersion.trim() || undefined,
      appFileSize: newAppFileSize.trim() || undefined,
      displayOrder: typeof newDisplayOrder === 'number' && newDisplayOrder > 0 ? newDisplayOrder : (existingProduct?.displayOrder || existingProduct?.displayRank || undefined),
      displayRank: typeof newDisplayOrder === 'number' && newDisplayOrder > 0 ? newDisplayOrder : (existingProduct?.displayRank || existingProduct?.displayOrder || undefined),
      updatedAt: new Date().toISOString(),
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
      handleStartNew();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in overflow-hidden">
      <div className="relative w-full max-w-6xl bg-[#0f0924] border border-purple-800/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden h-[90vh] max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 border-b border-purple-900/60 bg-[#150d32]">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h2 className="text-xs sm:text-base font-black text-white truncate">پنل مدیریت جهش‌کالا</h2>
                {currentUser?.role === 'operator' ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[9px] sm:text-[10px] font-bold text-cyan-300 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    ادمین محدود (اپراتور)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[9px] sm:text-[10px] font-bold text-emerald-300 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    مدیر ارشد (ابری)
                  </span>
                )}
              </div>
              <p className="text-[10px] sm:text-xs text-purple-300/70 truncate hidden xs:block">
                {currentUser?.role === 'operator'
                  ? 'مدیریت کالاها، ویرایش محصولات، سفارشات و پشتیبانی آنلاین (دسترسی محدود)'
                  : 'مدیریت محصولات، سفارشات، کدهای تخفیف، کاربران، درگاه و پشتیبانی'}
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
            onWheel={(e) => {
              if (tabNavRef.current && e.deltaY !== 0) {
                tabNavRef.current.scrollLeft += e.deltaY;
              }
            }}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 pt-2.5 sm:pt-3.5 pb-2 overflow-x-auto admin-tabs-scrollbar smooth-scroll flex-1 w-full select-none"
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
              onClick={handleStartNew}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'new-product' && !editingProductId
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <PlusCircle className="w-4 h-4" />
              <span>ثبت کالای جدید</span>
            </button>

            {editingProductId && (
              <button
                onClick={() => setActiveTab('new-product')}
                className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  activeTab === 'new-product'
                    ? 'border-amber-400 text-amber-300 bg-amber-400/10 rounded-t-lg'
                    : 'border-transparent text-amber-400/80 hover:text-amber-300'
                }`}
              >
                <Edit3 className="w-4 h-4 text-amber-400" />
                <span>ویرایش کالا</span>
              </button>
            )}

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
              onClick={() => setActiveTab('backup-restore')}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'backup-restore'
                  ? 'border-emerald-400 text-emerald-300 font-black'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>پشتیبان‌گیری و بازیابی اطلاعات</span>
            </button>

            <button
              onClick={() => setActiveTab('dashboard-tools')}
              className={`pb-2.5 px-3.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === 'dashboard-tools'
                  ? 'border-cyan-400 text-cyan-300 font-black shadow-xs'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>داشبورد تکنولوژی جهش</span>
              <span className="bg-cyan-950 text-cyan-300 border border-cyan-700/50 text-[10px] px-2 py-0.5 rounded-full font-mono">
                {toolsList.length}
              </span>
            </button>

            {currentUser?.role === 'admin' && (
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
            )}

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
        <div
          ref={mainContentRef}
          onScroll={handleContentScroll}
          className="p-4 sm:p-6 overflow-y-auto min-h-0 flex-1 text-right modal-scrollbar overscroll-contain"
        >
          
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
                <div className="flex items-center gap-2 flex-wrap">
                  {refreshNotice && (
                    <div className="bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs px-3 py-1.5 rounded-xl flex items-center gap-1.5 animate-fade-in shadow-md font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{refreshNotice}</span>
                    </div>
                  )}
                  <button
                    onClick={handleRefreshOrders}
                    disabled={isRefreshingOrders}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-xs font-bold transition-all cursor-pointer border border-purple-700/40 active:scale-95 disabled:opacity-50"
                    title="به‌روزرسانی و دریافت لیست جدید سفارشات"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshingOrders ? 'animate-spin text-amber-400' : ''}`} />
                    <span>{isRefreshingOrders ? 'در حال دریافت...' : 'به‌روزرسانی سفارشات'}</span>
                  </button>
                  {orders.length > 0 && onClearAllOrders && (
                    <button
                      onClick={onClearAllOrders}
                      className="px-3 py-1.5 rounded-xl bg-rose-950/60 border border-rose-600/40 text-rose-300 hover:bg-rose-900/80 text-xs font-bold transition-colors cursor-pointer"
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
                      {[...orders]
                        .sort((a, b) => parseOrderTimestamp(b) - parseOrderTimestamp(a))
                        .map((order) => {
                          const cleanPhone = (order.customerPhone || '').replace(/[^0-9]/g, '');
                          const namePhoneMatch = (order.customerName || '').match(/09[0-9]{9}/);
                          const extractedPhone = namePhoneMatch ? namePhoneMatch[0] : '';
                          const effectivePhone = cleanPhone || extractedPhone;

                          const matchedUser = (usersList || []).find((u) => {
                            if (order.userId && (u.id === order.userId || u.username === order.userId)) return true;
                            if (effectivePhone && u.phone && u.phone !== 'ثبت نشده') {
                              const uPhone = u.phone.replace(/[^0-9]/g, '');
                              if (uPhone && (uPhone === effectivePhone || uPhone.endsWith(effectivePhone) || effectivePhone.endsWith(uPhone))) return true;
                            }
                            if (order.customerEmail && u.email && u.email.toLowerCase() === order.customerEmail.toLowerCase()) return true;
                            if (order.customerName && (u.username === order.customerName || u.fullName === order.customerName)) return true;
                            return false;
                          });

                          let displayName = '';
                          let displaySubName = '';

                          if (matchedUser) {
                            displayName = matchedUser.username;
                            displaySubName = matchedUser.fullName && matchedUser.fullName !== matchedUser.username ? matchedUser.fullName : '';
                          } else if (order.userId && order.userId !== 'guest' && !order.userId.startsWith('cust-09') && !order.userId.startsWith('09')) {
                            displayName = order.userId;
                            displaySubName = order.customerName && !order.customerName.includes('09') ? order.customerName : '';
                          } else if (order.customerName && !order.customerName.includes('09') && order.customerName !== 'خریدار جهش‌کالا' && order.customerName !== 'خریدار جهش کالا' && order.customerName !== 'خریدار درگاه شاپرک زیبال') {
                            displayName = order.customerName;
                          } else {
                            displayName = effectivePhone ? `کاربر (${effectivePhone})` : 'کاربر جهش‌کالا';
                          }

                          return (
                            <tr key={order.id} className="hover:bg-purple-950/40 transition-colors">
                              <td className="p-3.5 font-mono font-bold text-purple-300">
                                {order.id}
                                <div className="text-[10px] text-slate-400 font-normal">{order.date}</div>
                                {(order.trackingCode || order.paymentRefId || order.zibalTrackId) && (
                                  <div className="text-[10px] text-cyan-300 font-mono mt-0.5 flex items-center gap-1">
                                    <span className="text-slate-400 font-sans">پیگیری:</span>
                                    <span>{order.trackingCode || order.paymentRefId || order.zibalTrackId}</span>
                                  </div>
                                )}
                              </td>
                              <td className="p-3.5">
                                <div className="font-bold text-white flex items-center gap-1.5 flex-wrap">
                                  <span className="font-mono text-amber-300 font-bold">{displayName}</span>
                                  {displaySubName && (
                                    <span className="text-[11px] font-normal text-slate-300">
                                      ({displaySubName})
                                    </span>
                                  )}
                                </div>
                                {order.customerEmail && (
                                  <div className="text-[10px] text-slate-400">{order.customerEmail}</div>
                                )}
                              </td>
                          <td className="p-3.5 font-mono text-emerald-400">
                            {order.customerPhone}
                          </td>
                          <td className="p-3.5">
                            <div className="max-w-[280px] font-medium text-xs space-y-1">
                              {(order.items || []).map((i, idx) => (
                                <div key={idx} className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-white font-bold">{i.product.title}</span>
                                  {i.selectedPlan && (
                                    <span className="text-[10px] font-bold text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/40 shadow-xs">
                                      تعرفه: {i.selectedPlan.name}
                                    </span>
                                  )}
                                  <span className="text-[10px] text-slate-400">({i.quantity} عدد)</span>
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="p-3.5 font-bold text-amber-300 whitespace-nowrap">
                            {order.totalAmount === 0 || order.paymentGateway?.includes('مدیریت') ? (
                              <span className="inline-flex items-center gap-1 bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40 text-[11px] font-black shadow-sm">
                                <Gift className="w-3 h-3 text-emerald-400" />
                                رایگان (مدیریت)
                              </span>
                            ) : (
                              formatPrice(order.totalAmount)
                            )}
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
                              {onDeleteOrder && currentUser?.role !== 'operator' && (
                                <button
                                  onClick={() => onDeleteOrder(order.id)}
                                  className="p-1.5 rounded-lg hover:bg-rose-950/80 text-slate-400 hover:text-rose-400 transition-colors border border-transparent hover:border-rose-700/50"
                                  title="حذف دائمی سفارش از دیتابیس"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: PRODUCTS LIST */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              {/* PRODUCTS MANAGEMENT & FILTERING */}
              {(() => {
                const totalIncredible = products.filter(
                  (p) => p.isIncredible || ((p.discountPercent || 0) > 0)
                ).length;

                const uniqueGuilds = Array.from(
                  new Set(
                    products
                      .map((p) => ((p as any).guild || (p as any).targetGuild || '').trim())
                      .filter((g) => Boolean(g))
                  )
                );

                const uniqueCategories = Array.from(
                  new Set(
                    products
                      .map((p) => p.category?.trim())
                      .filter((c) => Boolean(c))
                  )
                );

                const processedProducts = products
                  .filter((prod) => {
                    // Search query
                    if (prodSearchQuery.trim()) {
                      const q = prodSearchQuery.trim().toLowerCase();
                      const matchTitle = (prod.title || '').toLowerCase().includes(q);
                      const matchCat = (prod.category || '').toLowerCase().includes(q);
                      const matchGuild = (((prod as any).guild || (prod as any).targetGuild) || '').toLowerCase().includes(q);
                      const matchDesc = (prod.shortDescription || '').toLowerCase().includes(q) || (prod.fullDescription || '').toLowerCase().includes(q);
                      const matchCode = (prod.couponCode || '').toLowerCase().includes(q);
                      if (!matchTitle && !matchCat && !matchGuild && !matchDesc && !matchCode) return false;
                    }

                    // Tab filtering
                    if (prodFilterTab === 'popular') {
                      if (!prod.isPopular && !prod.badge?.includes('پرفروش') && !prod.badge?.includes('محبوب')) return false;
                    } else if (prodFilterTab === 'incredible') {
                      if (!prod.isIncredible && (!prod.discountPercent || prod.discountPercent <= 0)) return false;
                    } else if (prodFilterTab === 'subscription') {
                      if (!prod.isSubscription && !prod.hasCustomPlans && prod.id !== 'pkg-amlak-jahesh') return false;
                    } else if (prodFilterTab === 'guilds') {
                      if (!((prod as any).guild || (prod as any).targetGuild)) return false;
                    }

                    // Guild filtering
                    if (prodSelectedGuild !== 'all') {
                      const pGuild = ((prod as any).guild || (prod as any).targetGuild || '').toLowerCase();
                      if (!pGuild.includes(prodSelectedGuild.toLowerCase())) return false;
                    }

                    // Category filtering
                    if (prodSelectedCategory !== 'all') {
                      if (prod.category?.toLowerCase() !== prodSelectedCategory.toLowerCase()) return false;
                    }

                    return true;
                  })
                  .sort((a, b) => {
                    if (prodSortBy === 'rank') {
                      const orderA = typeof a.displayOrder === 'number' ? a.displayOrder : (typeof a.displayRank === 'number' ? a.displayRank : 9999);
                      const orderB = typeof b.displayOrder === 'number' ? b.displayOrder : (typeof b.displayRank === 'number' ? b.displayRank : 9999);
                      if (orderA !== orderB) return orderA - orderB;
                      if (Boolean(a.isGolden) !== Boolean(b.isGolden)) return a.isGolden ? -1 : 1;
                      return (b.updatedAt || '').localeCompare(a.updatedAt || '');
                    }
                    if (prodSortBy === 'price_desc') return b.price - a.price;
                    if (prodSortBy === 'price_asc') return a.price - b.price;
                    if (prodSortBy === 'title') return a.title.localeCompare(b.title, 'fa');
                    return (b.updatedAt || '').localeCompare(a.updatedAt || '');
                  });

                return (
                  <div className="space-y-4">
                    {rankSyncSuccessMsg && (
                      <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/60 text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in shadow-lg font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{rankSyncSuccessMsg}</span>
                      </div>
                    )}

                    {/* 2. ADVANCED CATEGORIZATION & FILTER CONTROL PANEL */}
                    <div className="p-4 rounded-2xl bg-[#150d33] border border-purple-900/60 shadow-xl space-y-3.5">
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-purple-900/40">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-purple-600/30 text-purple-300 flex items-center justify-center">
                            <Filter className="w-4 h-4" />
                          </div>
                          <h3 className="text-xs sm:text-sm font-black text-white">دسته‌بندی، رتبه‌بندی و مدیریت محصولات</h3>
                          <span className="text-[10px] bg-purple-950 px-2 py-0.5 rounded-full text-purple-300 border border-purple-800/50 font-bold">
                            {processedProducts.length} از {products.length} کالا
                          </span>
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                          {currentUser?.role === 'admin' && (
                            <button
                              type="button"
                              onClick={() => setShowRankManagerTable((prev) => !prev)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer border ${
                                showRankManagerTable
                                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-amber-950/40'
                                  : 'bg-purple-950/60 hover:bg-purple-900/60 text-slate-300 border-purple-800/40'
                              }`}
                              title="نمایش یا پنهان‌سازی بخش تخصصی مدیریت رتبه‌بندی محصولات"
                            >
                              <ArrowUpDown className="w-3.5 h-3.5 text-amber-400" />
                              <span>{showRankManagerTable ? 'بستن پنل رتبه‌بندی' : '🎯 مدیریت رتبه‌بندی محصولات'}</span>
                            </button>
                          )}

                          {currentUser?.role === 'admin' && (
                            <button
                              onClick={handleSyncAllProductsToAllUsers}
                              disabled={isSavingProductOrder}
                              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-950/50 transition-all cursor-pointer disabled:opacity-50"
                              title="ذخیره و همگام‌سازی فوری لیست و ترتیب محصولات با تمام مرورگرها و مهمانان"
                            >
                              <Upload className={`w-3.5 h-3.5 ${isSavingProductOrder ? 'animate-spin' : ''}`} />
                              <span>{isSavingProductOrder ? 'در حال ثبت...' : '🚀 ذخیره سراسری برای همه کاربران'}</span>
                            </button>
                          )}

                          <button
                            onClick={() => {
                              setProdSearchQuery('');
                              setProdFilterTab('all');
                              setProdSelectedGuild('all');
                              setProdSelectedCategory('all');
                              setProdSortBy('rank');
                            }}
                            className="text-[11px] text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-800/40 transition-colors flex items-center gap-1 cursor-pointer"
                            title="پاک کردن تمام فیلترها"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>بازنشانی فیلترها</span>
                          </button>

                          <button
                            onClick={handleStartNew}
                            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-purple-950/50 transition-all cursor-pointer"
                          >
                            <PlusCircle className="w-4 h-4" />
                            <span>ثبت کالای جدید</span>
                          </button>
                        </div>
                      </div>

                      {/* Filter Tabs */}
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none text-xs">
                        <button
                          onClick={() => {
                            setProdFilterTab('all');
                            setProdSortBy('rank');
                          }}
                          className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                            prodFilterTab === 'all'
                              ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                              : 'bg-[#1c1145] text-slate-300 hover:bg-[#251759] border border-purple-900/40'
                          }`}
                        >
                          <Package className="w-3.5 h-3.5" />
                          <span>همه کالاها ({products.length})</span>
                        </button>

                        <button
                          onClick={() => setProdFilterTab('guilds')}
                          className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                            prodFilterTab === 'guilds'
                              ? 'bg-cyan-600 text-white shadow-md shadow-cyan-900/50'
                              : 'bg-[#1c1145] text-cyan-300 hover:bg-[#251759] border border-cyan-500/30'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>طرح‌های اصناف ۲۵‌گانه ({uniqueGuilds.length})</span>
                        </button>

                        <button
                          onClick={() => setProdFilterTab('popular')}
                          className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                            prodFilterTab === 'popular'
                              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/50'
                              : 'bg-[#1c1145] text-emerald-300 hover:bg-[#251759] border border-emerald-500/30'
                          }`}
                        >
                          <Flame className="w-3.5 h-3.5" />
                          <span>محبوب و پرفروش‌ها</span>
                        </button>

                        <button
                          onClick={() => setProdFilterTab('incredible')}
                          className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                            prodFilterTab === 'incredible'
                              ? 'bg-rose-600 text-white shadow-md shadow-rose-900/50'
                              : 'bg-[#1c1145] text-rose-300 hover:bg-[#251759] border border-rose-500/30'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>شگفت‌انگیز با تایمر ({totalIncredible})</span>
                        </button>

                        <button
                          onClick={() => setProdFilterTab('subscription')}
                          className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                            prodFilterTab === 'subscription'
                              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/50'
                              : 'bg-[#1c1145] text-indigo-300 hover:bg-[#251759] border border-indigo-500/30'
                          }`}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>پکیج‌های اشتراکی و SaaS</span>
                        </button>
                      </div>

                      {/* Dropdowns, Search and Sort Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        {/* Search Bar */}
                        <div className="relative">
                          <Search className="w-4 h-4 text-purple-400 absolute right-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={prodSearchQuery}
                            onChange={(e) => setProdSearchQuery(e.target.value)}
                            placeholder="جستجو در نام، صنف، دسته، کد تخفیف..."
                            className="w-full pl-8 pr-9 py-2 bg-[#1b103e] border border-purple-900/60 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                          />
                          {prodSearchQuery && (
                            <button
                              onClick={() => setProdSearchQuery('')}
                              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* Guild Selector */}
                        <div>
                          <select
                            value={prodSelectedGuild}
                            onChange={(e) => setProdSelectedGuild(e.target.value)}
                            className="w-full px-3 py-2 bg-[#1b103e] border border-purple-900/60 rounded-xl text-xs text-amber-300 font-bold focus:outline-none focus:border-purple-500 cursor-pointer"
                          >
                            <option value="all">🏢 فیلتر صنف شغلی (همه ۲۵ صنف)</option>
                            {uniqueGuilds.map((g) => {
                              const count = products.filter(p => ((p as any).guild || (p as any).targetGuild || '') === g).length;
                              return (
                                <option key={g} value={g}>
                                  {g} ({count} محصول)
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        {/* Category Selector */}
                        <div>
                          <select
                            value={prodSelectedCategory}
                            onChange={(e) => setProdSelectedCategory(e.target.value)}
                            className="w-full px-3 py-2 bg-[#1b103e] border border-purple-900/60 rounded-xl text-xs text-cyan-300 font-bold focus:outline-none focus:border-purple-500 cursor-pointer"
                          >
                            <option value="all">🏷️ دسته‌بندی موضوعی (همه)</option>
                            {uniqueCategories.map((c) => {
                              const count = products.filter(p => p.category === c).length;
                              return (
                                <option key={c} value={c}>
                                  {c} ({count} کالا)
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        {/* Sort Selector */}
                        <div className="flex items-center gap-1.5">
                          <ArrowUpDown className="w-4 h-4 text-purple-400 shrink-0" />
                          <select
                            value={prodSortBy}
                            onChange={(e) => setProdSortBy(e.target.value as any)}
                            className="w-full px-3 py-2 bg-[#1b103e] border border-purple-900/60 rounded-xl text-xs text-amber-300 font-bold focus:outline-none focus:border-purple-500 cursor-pointer"
                          >
                            <option value="rank">⭐ رتبه و اولویت نمایش (پیش‌فرض)</option>
                            <option value="newest">⏱️ جدیدترین به‌روزرسانی</option>
                            <option value="price_desc">💰 بالاترین قیمت</option>
                            <option value="price_asc">🏷️ مناسب‌ترین قیمت</option>
                            <option value="title">🔤 بر اساس نام محصول</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* 2.5 DEDICATED PRODUCT RANKING & ORDER MANAGER */}
                    {currentUser?.role === 'admin' && showRankManagerTable && products.length > 0 && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#1a0e3f] via-[#140b33] to-[#0e0724] border-2 border-amber-500/50 shadow-2xl space-y-4 animate-in fade-in">
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-purple-800/60">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center shrink-0 shadow-md">
                              <ArrowUpDown className="w-5 h-5 text-amber-400" />
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-white flex items-center gap-2">
                                <span>سیستم مدیریت رتبه‌بندی و ترتیب نمایش محصولات</span>
                                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/40 font-bold">
                                  {products.length} کالا فعال
                                </span>
                              </h4>
                              <p className="text-[11px] text-slate-300 mt-0.5">
                                رتبه هر کالا اولویت نمایش آن را در ویترین اصلی فروشگاه، دسته‌بندی‌ها و پیشنهادهای شگفت‌انگیز تعیین می‌کند (عدد ۱ = رتبه اول و ابتدای فروشگاه).
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 flex-wrap">
                            <button
                              type="button"
                              onClick={handleAutoRenumberRanks}
                              className="px-3 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800/80 text-purple-200 hover:text-white text-xs font-bold border border-purple-700/60 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                              title="مرتب‌سازی خودکار و بازنشانی شماره رتبه‌ها از ۱ تا N"
                            >
                              <RotateCcw className="w-3.5 h-3.5 text-purple-300" />
                              <span>شماره‌گذاری خودکار (۱ تا {products.length})</span>
                            </button>

                            <button
                              type="button"
                              onClick={handleSyncAllProductsToAllUsers}
                              disabled={isSavingProductOrder}
                              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black shadow-lg shadow-emerald-950/60 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                              title="ذخیره در دیتابیس ابری فایربیس و همگام‌سازی لحظه‌ای برای تمام کاربران و مهمانان"
                            >
                              <Upload className={`w-3.5 h-3.5 ${isSavingProductOrder ? 'animate-spin' : ''}`} />
                              <span>{isSavingProductOrder ? 'در حال ثبت...' : '🚀 ذخیره و انتشار سراسری'}</span>
                            </button>
                          </div>
                        </div>

                        {/* List of ranked products */}
                        <div className="grid grid-cols-1 gap-2.5 max-h-96 overflow-y-auto pr-1">
                          {sortProductsByRank(products).map((prod, index) => {
                            const currentRank = typeof prod.displayOrder === 'number' && prod.displayOrder > 0
                              ? prod.displayOrder
                              : (typeof prod.displayRank === 'number' && prod.displayRank > 0 ? prod.displayRank : index + 1);

                            return (
                              <div
                                key={prod.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-[#150a2e] hover:bg-[#1c0e3d] border border-purple-900/80 hover:border-amber-500/60 transition-all shadow-md group"
                              >
                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                  {/* Rank Badge */}
                                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
                                    #{currentRank}
                                  </div>

                                  {/* Product Thumbnail */}
                                  <img
                                    src={prod.image}
                                    alt={prod.title}
                                    className="w-11 h-11 rounded-lg object-cover border border-purple-800 shrink-0 shadow"
                                  />

                                  {/* Product Info */}
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <h5 className="text-xs font-bold text-white truncate max-w-sm sm:max-w-md">{prod.title}</h5>
                                      {prod.badge && (
                                        <span className="text-[9px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded">
                                          {prod.badge}
                                        </span>
                                      )}
                                      {prod.isGolden && (
                                        <span className="text-[9px] bg-amber-500/20 text-amber-300 font-bold px-1.5 py-0.5 rounded border border-amber-500/30">
                                          پیشنهاد طلایی
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1 flex-wrap">
                                      <span className="bg-purple-950 px-2 py-0.2 rounded border border-purple-800/40 text-purple-300 font-medium">
                                        {prod.category}
                                      </span>
                                      <span className="text-amber-300 font-bold font-mono">
                                        {formatPrice(prod.price)}
                                      </span>
                                      {prod.isIncredible && (
                                        <span className="text-rose-300 bg-rose-950/80 px-1.5 py-0.2 rounded border border-rose-500/40 text-[9px] font-bold">
                                          شگفت‌انگیز
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Reorder Controls & Direct Numeric Input */}
                                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                                  {onToggleIncredible && currentUser?.role === 'admin' && (
                                    <button
                                      type="button"
                                      onClick={() => onToggleIncredible(prod)}
                                      className={`px-2 py-1 transition-all rounded-xl flex items-center gap-1 text-[11px] font-bold cursor-pointer border ${
                                        prod.isIncredible
                                          ? 'bg-rose-500/25 text-rose-300 border-rose-500/60 hover:bg-rose-500/40 shadow-xs shadow-rose-500/30'
                                          : 'bg-purple-950/60 text-slate-400 border-purple-800/60 hover:text-rose-300 hover:border-rose-500/40'
                                      }`}
                                      title={prod.isIncredible ? 'حذف از پیشنهاد شگفت‌انگیز' : 'تنظیم فوری به عنوان پیشنهاد شگفت‌انگیز اصلی'}
                                    >
                                      <Percent className={`w-3.5 h-3.5 ${prod.isIncredible ? 'text-rose-400 fill-rose-400/20' : 'text-slate-400'}`} />
                                      <span>{prod.isIncredible ? 'شگفت‌انگیز فعال' : 'شگفت‌انگیز'}</span>
                                    </button>
                                  )}
                                  <div className="flex items-center gap-1.5 bg-black/70 border border-amber-500/50 px-2.5 py-1 rounded-xl shadow-inner">
                                    <span className="text-[11px] text-amber-300 font-black whitespace-nowrap">رتبه:</span>
                                    <input
                                      type="number"
                                      min="1"
                                      max={products.length + 10}
                                      key={`${prod.id}-${currentRank}`}
                                      defaultValue={currentRank}
                                      onBlur={(e) => {
                                        const val = parseInt(e.target.value, 10);
                                        if (!isNaN(val) && val > 0) {
                                          handleSetProductRank(prod.id, val);
                                        }
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                          const val = parseInt((e.target as HTMLInputElement).value, 10);
                                          if (!isNaN(val) && val > 0) {
                                            handleSetProductRank(prod.id, val);
                                          }
                                        }
                                      }}
                                      className="w-10 bg-purple-950/90 border border-purple-600 rounded-lg px-1.5 py-0.5 text-center text-xs font-mono font-black text-amber-300 focus:border-amber-400 focus:outline-none"
                                      title="شماره رتبه را وارد کرده و Enter بزنید"
                                    />
                                  </div>

                                  {/* Movement Buttons */}
                                  <div className="flex items-center gap-1 bg-[#1a0f35] p-1 rounded-xl border border-purple-800/60">
                                    <button
                                      type="button"
                                      onClick={() => handleMoveProductOrder(prod.id, 'top')}
                                      disabled={index === 0}
                                      className="p-1 rounded-lg bg-purple-900/60 hover:bg-purple-800 disabled:opacity-20 disabled:cursor-not-allowed text-amber-300 hover:text-white transition-colors cursor-pointer"
                                      title="انتقال به اول ویترین (رتبه ۱)"
                                    >
                                      <ChevronsUp className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleMoveProductOrder(prod.id, 'up')}
                                      disabled={index === 0}
                                      className="p-1 rounded-lg bg-purple-900/60 hover:bg-purple-800 disabled:opacity-20 disabled:cursor-not-allowed text-slate-200 hover:text-white transition-colors cursor-pointer"
                                      title="یک پله بالاتر"
                                    >
                                      <ChevronUp className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleMoveProductOrder(prod.id, 'down')}
                                      disabled={index === products.length - 1}
                                      className="p-1 rounded-lg bg-purple-900/60 hover:bg-purple-800 disabled:opacity-20 disabled:cursor-not-allowed text-slate-200 hover:text-white transition-colors cursor-pointer"
                                      title="یک پله پایین‌تر"
                                    >
                                      <ChevronDown className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleMoveProductOrder(prod.id, 'bottom')}
                                      disabled={index === products.length - 1}
                                      className="p-1 rounded-lg bg-purple-900/60 hover:bg-purple-800 disabled:opacity-20 disabled:cursor-not-allowed text-slate-400 hover:text-white transition-colors cursor-pointer"
                                      title="انتقال به انتهای ویترین"
                                    >
                                      <ChevronsDown className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* 3. PRODUCTS GRID */}
                    {processedProducts.length === 0 ? (
                      <div className="p-8 text-center bg-[#150d33] border border-purple-900/50 rounded-2xl space-y-3">
                        <div className="w-12 h-12 rounded-full bg-purple-900/40 text-purple-400 flex items-center justify-center mx-auto">
                          <Package className="w-6 h-6" />
                        </div>
                        <h4 className="text-sm font-black text-white">کالایی با فیلترهای انتخابی یافت نشد</h4>
                        <p className="text-xs text-slate-400">می‌توانید فیلترها را تغییر داده یا جستجو را بازنشانی کنید.</p>
                        <button
                          onClick={() => {
                            setProdSearchQuery('');
                            setProdFilterTab('all');
                            setProdSelectedGuild('all');
                            setProdSelectedCategory('all');
                            setProdSortBy('rank');
                          }}
                          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>مشاهده همه کالاها</span>
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {processedProducts.map((prod) => (
                          <div
                            key={prod.id}
                            className="p-4 rounded-2xl bg-[#140b2f] border border-purple-900/50 hover:border-purple-600/60 transition-all flex flex-col justify-between shadow-lg relative group"
                          >
                            <div>
                              {/* Badges and Category Row */}
                              <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
                                <div className="flex flex-wrap items-center gap-1">
                                  <span className="text-[10px] bg-purple-950 border border-purple-800/40 px-2 py-0.5 rounded text-purple-300 font-bold">
                                    {prod.category}
                                  </span>
                                  {((prod as any).guild || (prod as any).targetGuild) && (
                                    <span className="text-[10px] bg-amber-500/20 border border-amber-400/40 text-amber-300 font-bold px-2 py-0.5 rounded">
                                      🏢 {(prod as any).guild || (prod as any).targetGuild}
                                    </span>
                                  )}
                                </div>

                                {prod.badge && (
                                  <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded">
                                    {prod.badge}
                                  </span>
                                )}
                              </div>

                              {/* Product Info */}
                              <div className="flex gap-3 mb-2.5">
                                <img
                                  src={prod.image}
                                  alt={prod.title}
                                  className="w-14 h-14 rounded-xl object-cover border border-purple-900/60 shrink-0 shadow-md"
                                />
                                <div className="min-w-0 flex-1">
                                  <h4 className="text-xs font-bold text-white line-clamp-2" title={prod.title}>{prod.title}</h4>
                                  <p className="text-xs text-amber-300 font-black mt-1">{formatPrice(prod.price)}</p>

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

                            <div>
                              {/* Actions Bar */}
                              <div className="flex items-center justify-between pt-2.5 border-t border-purple-900/40 mt-1">
                                <span className="text-[11px] text-slate-400 truncate max-w-[130px]">{prod.deliveryDays}</span>
                                <div className="flex items-center gap-1">
                                  {onToggleIncredible && currentUser?.role === 'admin' && (
                                    <button
                                      type="button"
                                      onClick={() => onToggleIncredible(prod)}
                                      className={`p-1.5 transition-all rounded-lg flex items-center gap-1 cursor-pointer border ${
                                        prod.isIncredible
                                          ? 'bg-rose-500/25 text-rose-300 border-rose-500/60 hover:bg-rose-500/40 shadow-xs shadow-rose-500/30'
                                          : 'bg-purple-950/60 text-slate-400 border-purple-800/60 hover:text-rose-300 hover:border-rose-500/40 hover:bg-purple-900/60'
                                      }`}
                                      title={prod.isIncredible ? 'حذف از باکس پیشنهاد شگفت‌انگیز' : 'تنظیم فوری به عنوان پیشنهاد شگفت‌انگیز اصلی'}
                                    >
                                      <Percent className={`w-3.5 h-3.5 ${prod.isIncredible ? 'text-rose-400 fill-rose-400/20' : 'text-slate-400'}`} />
                                      <span className="text-[10px] font-bold">
                                        {prod.isIncredible ? 'شگفت‌انگیز' : 'تنظیم'}
                                      </span>
                                    </button>
                                  )}

                                  <button
                                    onClick={() => {
                                      setQuickViewEditModal({
                                        isOpen: true,
                                        product: prod,
                                        category: prod.category || 'کالای دیجیتال',
                                        guild: (prod as any).guild || (prod as any).targetGuild || '',
                                      });
                                    }}
                                    className="p-1.5 text-slate-400 hover:text-cyan-300 transition-colors rounded-lg hover:bg-purple-900/40"
                                    title="تنظیم سریع دسته‌بندی و صنف"
                                  >
                                    <Sliders className="w-4 h-4" />
                                  </button>

                                  {currentUser?.role === 'admin' && (
                                    <button
                                      onClick={() => handleStartEdit(prod)}
                                      className="p-1.5 text-slate-400 hover:text-amber-400 transition-colors rounded-lg hover:bg-purple-900/40"
                                      title="ویرایش کامل مشخصات این کالا"
                                    >
                                      <Edit3 className="w-4 h-4" />
                                    </button>
                                  )}

                                  {currentUser?.role === 'admin' ? (
                                    productDeleteConfirmId === prod.id ? (
                                      <div className="flex items-center gap-1 bg-rose-950/90 border border-rose-600/70 rounded-lg p-1 animate-in fade-in">
                                        <span className="text-[10px] text-rose-200 font-bold px-1">حذف؟</span>
                                        <button
                                          onClick={() => {
                                            setProductDeleteConfirmId(null);
                                            onDeleteProduct(prod.id);
                                          }}
                                          className="px-1.5 py-0.5 bg-rose-600 hover:bg-rose-500 text-white rounded text-[10px] font-black cursor-pointer shadow-xs transition-colors"
                                          title="بله، حذف قطعی شود"
                                        >
                                          بله
                                        </button>
                                        <button
                                          onClick={() => setProductDeleteConfirmId(null)}
                                          className="px-1.5 py-0.5 bg-purple-900/80 hover:bg-purple-800 text-slate-200 rounded text-[10px] cursor-pointer transition-colors"
                                          title="انصراف"
                                        >
                                          لغو
                                        </button>
                                      </div>
                                    ) : (
                                      <button
                                        onClick={() => setProductDeleteConfirmId(prod.id)}
                                        className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors rounded-lg hover:bg-purple-900/40 cursor-pointer"
                                        title="حذف این کالا"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    )
                                  ) : (
                                    <button
                                      disabled
                                      className="p-1.5 text-slate-600 opacity-40 cursor-not-allowed"
                                      title="حذف کالا نیازمند دسترسی مدیر ارشد است"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Quick Category & Guild Edit Modal */}
              {quickViewEditModal.isOpen && quickViewEditModal.product && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/85 backdrop-blur-sm animate-in fade-in">
                  <div className="relative w-full max-w-md bg-[#120a2a] border border-purple-600/70 rounded-3xl p-5 sm:p-6 text-right space-y-4 shadow-2xl">
                    <div className="flex items-center justify-between pb-3 border-b border-purple-900/50">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                          <Sliders className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-black text-white">تنظیم دسته‌بندی و صنف محصول</h3>
                          <span className="text-[10px] text-purple-300">تنظیمات سریع کالا در پنل مدیریت</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setQuickViewEditModal({ isOpen: false, product: null, category: '', guild: '' })}
                        className="w-7 h-7 rounded-full bg-purple-900/50 hover:bg-purple-800 text-slate-300 flex items-center justify-center cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-3 bg-[#180e38] rounded-2xl border border-purple-900/60 flex items-center gap-3">
                      <img
                        src={quickViewEditModal.product.image}
                        alt={quickViewEditModal.product.title}
                        className="w-12 h-12 rounded-xl object-cover border border-purple-800 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-white truncate">{quickViewEditModal.product.title}</h4>
                        <p className="text-[11px] text-amber-300 mt-0.5">{formatPrice(quickViewEditModal.product.price)}</p>
                      </div>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!quickViewEditModal.product) return;
                        const updated: Product = {
                          ...quickViewEditModal.product,
                          category: quickViewEditModal.category.trim() || quickViewEditModal.product.category,
                          guild: quickViewEditModal.guild.trim() || undefined,
                          updatedAt: new Date().toISOString(),
                        };
                        if (onUpdateProduct) {
                          onUpdateProduct(updated);
                        }
                        setQuickViewEditModal({ isOpen: false, product: null, category: '', guild: '' });
                      }}
                      className="space-y-3.5"
                    >
                      <div>
                        <label className="block text-xs text-slate-300 font-bold mb-1.5">دسته‌بندی موضوعی:</label>
                        <input
                          type="text"
                          value={quickViewEditModal.category}
                          onChange={(e) => setQuickViewEditModal({ ...quickViewEditModal, category: e.target.value })}
                          className="w-full px-3 py-2.5 bg-[#180e38] border border-purple-800 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
                          placeholder="مثلاً خدمات و طراحی سایت، نرم‌افزارها..."
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 font-bold mb-1.5">صنف تخصصی مرتبط:</label>
                        <input
                          type="text"
                          value={quickViewEditModal.guild}
                          onChange={(e) => setQuickViewEditModal({ ...quickViewEditModal, guild: e.target.value })}
                          className="w-full px-3 py-2.5 bg-[#180e38] border border-purple-800 rounded-xl text-xs text-amber-300 focus:outline-none focus:border-amber-400 font-bold"
                          placeholder="مثلاً مشاوران املاک، رستوران‌ها، طلا و جواهر..."
                        />
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <button
                          type="submit"
                          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <Check className="w-4 h-4" />
                          <span>ذخیره تغییرات</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setQuickViewEditModal({ isOpen: false, product: null, category: '', guild: '' })}
                          className="px-4 py-2.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-slate-300 font-bold text-xs transition-all cursor-pointer"
                        >
                          انصراف
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
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

                {/* 2.5 GUILD SPECIFICATION & INNOVATIVE SOLUTION SECTION */}
                <div className="p-4 bg-gradient-to-br from-[#160c33] via-[#100726] to-[#0a0418] border border-amber-500/30 rounded-2xl space-y-3.5 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-900/40 pb-2.5">
                    <label className="text-xs font-bold text-amber-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>صنف شغلی محصول و طرح نوآورانه جهش (۲۵ صنف تخصصی):</span>
                    </label>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs">
                      <button
                        type="button"
                        onClick={() => setSelectedGuildMode('25guilds')}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] ${
                          selectedGuildMode === '25guilds'
                            ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                            : 'bg-purple-950/50 text-slate-300 hover:text-white border border-purple-800/40'
                        }`}
                      >
                        انتخاب از ۲۵ صنف تخصصی جهش
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedGuildMode('custom')}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] ${
                          selectedGuildMode === 'custom'
                            ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                            : 'bg-purple-950/50 text-slate-300 hover:text-white border border-purple-800/40'
                        }`}
                      >
                        + صنف سفارشی / جدید
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedGuildMode('none')}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] ${
                          selectedGuildMode === 'none'
                            ? 'bg-slate-700 text-white font-bold'
                            : 'bg-purple-950/50 text-slate-400 hover:text-white border border-purple-800/40'
                        }`}
                      >
                        بدون صنف (کالای عمومی)
                      </button>
                    </div>
                  </div>

                  {selectedGuildMode === '25guilds' && (
                    <div className="space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>صنف هدف این خدمت یا کالا را انتخاب کنید:</span>
                        <span className="text-amber-400 font-bold">۲۵ صنف رسمی بازار</span>
                      </div>
                      <select
                        value={selectedOfficialGuild}
                        onChange={(e) => setSelectedOfficialGuild(e.target.value)}
                        className="w-full bg-black/60 border border-amber-400/50 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none cursor-pointer"
                      >
                        {JAHESH_OFFICIAL_25_GUILDS.map((g, idx) => (
                          <option key={idx} value={g} className="bg-[#120826] text-white py-1">
                            {idx + 1}. {g}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {selectedGuildMode === 'custom' && (
                    <div className="space-y-1.5 animate-in fade-in">
                      <label className="text-[11px] text-amber-200">
                        نام صنف دلخواه یا بازار هدف جدید:
                      </label>
                      <input
                        type="text"
                        placeholder="مثلاً: قنادی و شیرینی‌پزی، صرافی و ارز دیجیتال، خشکبار و آجیل..."
                        value={customGuildInput}
                        onChange={(e) => setCustomGuildInput(e.target.value)}
                        className="w-full bg-black/60 border border-amber-400/70 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none"
                      />
                    </div>
                  )}

                  {selectedGuildMode === 'none' && (
                    <div className="p-2.5 bg-black/30 rounded-xl border border-purple-900/40 text-[11px] text-slate-400">
                      این محصول فاقد برچسب صنف بوده و در تمام بخش‌های عمومی فروشگاه قابل دسترسی است.
                    </div>
                  )}

                  {/* Pain Point & Challenge Solved Input */}
                  {selectedGuildMode !== 'none' && (
                    <div className="space-y-1.5 pt-1 border-t border-purple-900/40">
                      <label className="text-[11px] font-bold text-slate-200 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="text-rose-400">🚨</span>
                          <span>چالش و معضل اصلی صنف قبل از این طرح (اختیاری):</span>
                        </span>
                        <span className="text-[10px] text-purple-300 font-normal">
                          نمایش در کادر اختصاصی صفحه کالا
                        </span>
                      </label>
                      <textarea
                        rows={2}
                        placeholder="مثلاً: بررسی مشکل نوسانات قیمت، معطلی مراجعان، خطاهای محاسباتی و اینکه چگونه این راهکار جهش آن را حل می‌کند..."
                        value={newPainPointSolved}
                        onChange={(e) => setNewPainPointSolved(e.target.value)}
                        className="w-full bg-black/50 border border-purple-800/80 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none leading-relaxed"
                      />
                    </div>
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
                              onClick={handleRemoveMainImage}
                              className="px-2.5 py-1.5 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-800/60 text-rose-300 hover:text-white font-medium text-xs transition-colors flex items-center gap-1"
                              title={newGallery.length > 0 ? 'حذف تصویر اصلی (جایگزینی با اولین عکس گالری)' : 'حذف تصویر اصلی کالا'}
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
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <label className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Images className="w-3.5 h-3.5 text-cyan-400" />
                          <span>گالری عکس‌های کالا (زوایای مختلف کالا مثل دی‌جی‌کالا):</span>
                        </label>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          کاربران می‌توانند در صفحه محصول این عکس‌ها را به عنوان گالری ورق بزنند و جزئیات کالا را دقیق بررسی کنند.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        {newGallery.length > 0 && (
                          <button
                            type="button"
                            onClick={() => setNewGallery([])}
                            className="px-2.5 py-1.5 rounded-xl bg-rose-950/70 hover:bg-rose-900 border border-rose-800/70 text-rose-300 hover:text-white font-bold text-xs flex items-center gap-1 shadow-md transition-all cursor-pointer"
                            title="حذف تمام عکس‌های این گالری"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>پاک کردن کل گالری ({newGallery.length})</span>
                          </button>
                        )}
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
                              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 transition-opacity p-1">
                                <button
                                  type="button"
                                  onClick={() => handleSetGalleryAsMain(idx)}
                                  className="w-7 h-7 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-md transition-transform hover:scale-110"
                                  title="تبدیل به تصویر اصلی (کاور) کالا"
                                >
                                  <Star className="w-3.5 h-3.5 fill-current" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveGalleryImage(idx)}
                                  className="w-7 h-7 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shadow-md transition-transform hover:scale-110"
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
                          handleSetIncredibleDuration(incredibleTimerDuration || 'permanent');
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

                {/* 6.0 Subscription Configuration (Configurable duration selector for SaaS/Software products + AI App Prompt & Auth) */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-950/70 via-indigo-950/70 to-purple-950/70 border border-amber-400/60 rounded-2xl space-y-4 shadow-xl">
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
                        خرید به صورت اشتراکی روزانه (دارای انتخاب مدت زمان اشتراک در موقع خرید)
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
                    <div className="p-3.5 bg-black/60 border border-amber-400/50 rounded-xl space-y-2 animate-in fade-in">
                      <label className="text-xs font-bold text-amber-200 block">
                        قیمت پایه هر روز اشتراک (تومان):
                      </label>
                      <div className="flex flex-wrap items-center gap-3">
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

                  {/* Integrated AI App Prompt & Auth Module inside Subscription Section */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    isAiAppProduct
                      ? 'bg-gradient-to-br from-[#1c0f38] via-[#150a2e] to-[#0d0520] border-amber-400/80 shadow-[0_0_20px_rgba(251,191,36,0.15)] ring-1 ring-amber-400/40'
                      : 'bg-[#120a26]/80 border-purple-800/60 hover:border-purple-600/70'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-800/60 pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                          isAiAppProduct
                            ? 'bg-amber-400/20 border-amber-400/60 text-amber-300'
                            : 'bg-purple-900/40 border-purple-700/50 text-purple-300'
                        }`}>
                          <Sparkles className="w-4 h-4 animate-pulse" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs sm:text-sm font-black text-white">
                              اتصال به اپلیکیشن ویندوز و اندروید + مولد پرامپت هوش مصنوعی (AI App Prompt & Auth)
                            </h4>
                            <span className="text-[9px] bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-2 py-0.5 rounded-full shadow-sm">
                              ویژه توسعه اپ با AI
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-0.5">
                            تولید پرامپت آماده برای Google Antigravity، Google AI Studio و ChatGPT با API متصل به جهش‌کالا و سیستم اشتراک چند روزه
                          </p>
                        </div>
                      </div>

                      {/* Toggle Switch */}
                      <label className="flex items-center gap-2 text-xs font-black text-amber-300 cursor-pointer self-end sm:self-auto bg-purple-950/70 px-3 py-1.5 rounded-xl border border-purple-700/60 hover:border-amber-400 transition-colors">
                        <input
                          type="checkbox"
                          checked={isAiAppProduct}
                          onChange={(e) => setIsAiAppProduct(e.target.checked)}
                          className="w-4 h-4 rounded border-amber-400 text-amber-500 focus:ring-0 cursor-pointer"
                        />
                        <span>فعال‌سازی اپلیکیشن و صدور لایسنس اشتراک</span>
                      </label>
                    </div>

                    {isAiAppProduct && (
                      <div className="mt-4 space-y-4 animate-in fade-in">
                        {/* Dynamic Duration Info Banner */}
                        <div className="p-3 bg-amber-500/10 border border-amber-400/40 rounded-xl flex items-start gap-2.5 text-xs text-amber-200">
                          <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                          <div className="leading-relaxed">
                            <span className="font-black text-amber-300">مدت زمان اشتراک کاملاً پویا بر اساس انتخاب خریدار: </span>
                            نیازی به تعریف ثابت مدت لایسنس نیست. مشتری در هنگام خرید این محصول از سایت جهش‌کالا، مدت دلخواه خود را (۱ روز، ۷ روز، ۱ ماه، ۳ ماه، ۶ ماه، ۱ سال یا روزهای دلخواه) انتخاب نموده و سیستم به طور خودکار نام کاربری و رمز عبور اختصاصی را با همان مدت منحصراً برای همین محصول (<span className="text-white font-mono font-bold">{editingProductId || 'این کالا'}</span>) صادر می‌نماید.
                          </div>
                        </div>

                        {/* Configuration Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-right">
                          <div>
                            <label className="text-[11px] font-bold text-slate-300 block mb-1">
                              نام اپلیکیشن در پرامپت هوش مصنوعی:
                            </label>
                            <input
                              type="text"
                              value={aiAppName}
                              onChange={(e) => setAiAppName(e.target.value)}
                              placeholder={newTitle.trim() || 'مثلاً: سامانه مدیریت املاک جهش'}
                              className="w-full bg-[#180f33] border border-purple-700/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400 font-bold"
                            />
                          </div>

                          <div>
                            <label className="text-[11px] font-bold text-slate-300 block mb-1">
                              پلتفرم هدف برای تولید کد توسط AI:
                            </label>
                            <select
                              value={aiAppPlatform}
                              onChange={(e) => setAiAppPlatform(e.target.value as any)}
                              className="w-full bg-[#180f33] border border-purple-700/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                            >
                              <option value="all">🌐 همه‌کاره (ویندوز Desktop + موبایل اندروید)</option>
                              <option value="windows">💻 فقط ویندوز دسکتاپ (WPF / C# / Electron)</option>
                              <option value="android">📱 فقط اندروید موبایل (Kotlin / Java / Flutter)</option>
                              <option value="cross-platform">⚡ کراس‌پلتفرم (Flutter / React Native / Tauri)</option>
                            </select>
                          </div>
                        </div>

                        {/* Custom Prompt Notes */}
                        <div>
                          <label className="text-[11px] font-bold text-amber-200 block mb-1">
                            ویژگی‌ها، فیلترها و الزامات اختصاصی برنامه برای اضافه شدن در پرامپت (اختیاری):
                          </label>
                          <input
                            type="text"
                            value={aiAppCustomPromptNote}
                            onChange={(e) => setAiAppCustomPromptNote(e.target.value)}
                            placeholder="مثلاً: دارای بخش فیلتر پیشرفته بر اساس قیمت و منطقه، نمودار سود ماهانه، ثبت قراردادها و بکاپ‌گیری محلی"
                            className="w-full bg-[#180f33] border border-purple-700/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                        </div>

                        {/* The Magic AI Prompt Box */}
                        <div className="rounded-2xl bg-[#0e071e] border border-amber-400/60 p-4 space-y-3 shadow-inner">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-800/60 pb-2.5">
                            <div className="flex items-center gap-2">
                              <span className="text-amber-400 font-black text-xs sm:text-sm flex items-center gap-1.5">
                                <Code2 className="w-4 h-4" />
                                متن آماده پرامپت هوش مصنوعی (Master AI Prompt):
                              </span>
                              <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                                اتصال API + امنیت انحصاری محصول
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                const promptText = buildAiAppPrompt(
                                  {
                                    id: editingProductId || 'pkg-software',
                                    title: newTitle.trim() || 'نرم‌افزار جهش',
                                    aiAppName: aiAppName.trim() || newTitle.trim(),
                                    isSubscription: true,
                                  },
                                  aiAppPlatform,
                                  aiAppCustomPromptNote.trim()
                                );
                                navigator.clipboard.writeText(promptText);
                                setCopiedPromptFeedback('پرامپت با موفقیت کپی شد! اکنون می‌توانید آن را در Google Antigravity، Google AI Studio یا ChatGPT پیست کنید.');
                                setTimeout(() => setCopiedPromptFeedback(null), 5000);
                              }}
                              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs transition-all shadow-md cursor-pointer shrink-0"
                            >
                              <Copy className="w-4 h-4" />
                              <span>کپی پرامپت اتصال هوش مصنوعی (یک کلیک)</span>
                            </button>
                          </div>

                          {copiedPromptFeedback && (
                            <div className="bg-emerald-950/70 border border-emerald-500/60 text-emerald-200 text-xs px-3 py-2 rounded-xl flex items-center gap-2 animate-in fade-in">
                              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>{copiedPromptFeedback}</span>
                            </div>
                          )}

                          {/* Prompt Preview Code Block */}
                          <div className="relative">
                            <textarea
                              readOnly
                              rows={8}
                              value={buildAiAppPrompt(
                                {
                                  id: editingProductId || 'pkg-software',
                                  title: newTitle.trim() || 'نرم‌افزار جهش',
                                  aiAppName: aiAppName.trim() || newTitle.trim(),
                                  isSubscription: true,
                                },
                                aiAppPlatform,
                                aiAppCustomPromptNote.trim()
                              )}
                              className="w-full bg-[#080411] border border-purple-900/80 rounded-xl p-3 text-[11px] text-purple-200 font-mono leading-relaxed focus:outline-none resize-none cursor-text select-all"
                            />
                          </div>

                          {/* AI Instructions Guide */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] text-slate-300 pt-1">
                            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40 space-y-1">
                              <span className="font-bold text-amber-300 block">🤖 ساخت اپلیکیشن با Google Antigravity یا ChatGPT:</span>
                              <p className="text-slate-300 text-[11px] leading-relaxed">
                                کافیست دکمه کپی بالا را بزنید و در <strong>Google Antigravity</strong> یا <strong>Google AI Studio</strong> پیست کنید. هوش مصنوعی بدون نیاز به تعریف روزهای ثابت، اتصال خودکار به API و لاگین جهش‌کالا را پیاده‌سازی می‌کند.
                              </p>
                            </div>

                            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40 space-y-1">
                              <span className="font-bold text-emerald-300 block">🛡️ انحصار محصول و مدت اشتراک پویا:</span>
                              <p className="text-slate-300 text-[11px] leading-relaxed">
                                هر کاربر فقط با نام کاربری و رمز همان محصول خریداری‌شده می‌تواند لاگین کند و به محصولات دیگر دسترسی نخواهد داشت. مدت روزهای فعال نیز بر اساس انتخاب مشتری در زمان خرید محاسبه و مدیریت می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Live API Auth Tester inside Admin Panel */}
                        <div className="p-3.5 rounded-2xl bg-[#140a28] border border-purple-800/60 space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                              <Server className="w-3.5 h-3.5 text-amber-400" />
                              تست زنده API احراز هویت لایسنس (<span className="text-amber-300 font-mono">/api/app-auth</span>):
                            </span>
                            <span className="text-[10px] text-slate-400">تست مستقیم روی سرور جهش</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <input
                              type="text"
                              value={testAuthUsername}
                              onChange={(e) => setTestAuthUsername(e.target.value)}
                              placeholder="نام کاربری (مثلاً 0915...)"
                              className="bg-[#0e071c] border border-purple-700/60 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none"
                            />
                            <input
                              type="text"
                              value={testAuthPassword}
                              onChange={(e) => setTestAuthPassword(e.target.value)}
                              placeholder="رمز عبور"
                              className="bg-[#0e071c] border border-purple-700/60 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={handleTestAppAuth}
                              disabled={isTestingAuth}
                              className="bg-purple-800 hover:bg-purple-700 text-white font-bold rounded-xl px-3 py-1.5 text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                            >
                              {isTestingAuth ? (
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Key className="w-3.5 h-3.5 text-amber-300" />
                              )}
                              <span>تست زنده ورود API</span>
                            </button>
                          </div>

                          {testAuthResult && (
                            <div className={`p-2.5 rounded-xl border text-xs font-mono transition-all ${
                              testAuthResult.success
                                ? 'bg-emerald-950/50 border-emerald-500/60 text-emerald-200'
                                : 'bg-rose-950/50 border-rose-500/60 text-rose-200'
                            }`}>
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold">
                                  {testAuthResult.success ? '✅ ورود موفقیت‌آمیز (اشتراک معتبر)' : '❌ ورود ناموفق یا اشتراک منقضی'}
                                </span>
                                {testAuthResult.daysRemaining !== undefined && (
                                  <span className="text-amber-300 font-bold">
                                    {testAuthResult.daysRemaining} روز باقیمانده
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] opacity-90">{testAuthResult.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 6.045 لینک مستقیم دانلود اپلیکیشن و فایل نصبی (APK اندروید / ویندوز) */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0c1a2e] via-[#101b3b] to-[#0b1329] border-2 border-cyan-400/70 rounded-2xl space-y-4 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-500/30 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-md">
                        <Download className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-cyan-300 flex items-center gap-2">
                          <span>لینک دانلود مستقیم و فایل نصبی اپلیکیشن (APK اندروید / ویندوز)</span>
                          {newDownloadUrl && (
                            <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                              لینک فعال است
                            </span>
                          )}
                        </h4>
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          برای محصولاتی که نرم‌افزار، اپلیکیشن اندروید (مانند جهش شنتیا) یا فایل دانلودی دارند؛ دکمه دانلود خودکار در صفحه محصول و بخش لایسنس خریدار ظاهر می‌شود.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {/* Input & Direct Upload Button */}
                    <div>
                      <label className="text-xs font-bold text-cyan-200 block mb-1.5">
                        لینک مستقیم دانلود اپلیکیشن (یا آپلود فایل):
                      </label>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <input
                          type="text"
                          value={newDownloadUrl}
                          onChange={(e) => {
                            let val = e.target.value;
                            if (val && !val.startsWith('http://') && !val.startsWith('https://') && !val.startsWith('/')) {
                              val = '/' + val;
                            }
                            setNewDownloadUrl(val);
                          }}
                          onBlur={(e) => {
                            let val = e.target.value.trim();
                            if (val && !val.startsWith('http://') && !val.startsWith('https://') && !val.startsWith('/')) {
                              val = '/' + val;
                            }
                            setNewDownloadUrl(val);
                          }}
                          placeholder="مثلاً: /uploads/apps/shantia.apk یا https://.../app.apk"
                          className="flex-1 bg-[#070e1c] border border-cyan-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono text-left dir-ltr"
                        />

                        {/* Hidden File Input for Direct App Upload */}
                        <input
                          type="file"
                          ref={appFileInputRef}
                          accept=".apk,.exe,.zip,.rar,.tar,.gz,.bin"
                          onChange={handleUploadAppFile}
                          className="hidden"
                        />

                        <button
                          type="button"
                          onClick={() => appFileInputRef.current?.click()}
                          disabled={isUploadingAppFile}
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95 disabled:opacity-50"
                        >
                          {isUploadingAppFile ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
                          ) : (
                            <Upload className="w-4 h-4" />
                          )}
                          <span>آپلود مستقیم فایل APK / نصبی</span>
                        </button>

                        {newDownloadUrl && (
                          <a
                            href={(() => {
                              let u = newDownloadUrl.trim().replace(/\/+$/, '');
                              if (u && !u.startsWith('http://') && !u.startsWith('https://') && !u.startsWith('/')) u = '/' + u;
                              return u || '#';
                            })()}
                            download="shantia.apk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1.5 bg-emerald-600/80 hover:bg-emerald-500 text-white font-bold px-3 py-2.5 rounded-xl text-xs transition-colors shrink-0 whitespace-nowrap cursor-pointer"
                            title="تست مستقیم لینک دانلود"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>تست دانلود</span>
                          </a>
                        )}
                      </div>

                      {appUploadProgressText && (
                        <div className="mt-2 text-[11px] text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 rounded-xl p-2 flex items-center gap-2 animate-pulse">
                          <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400 shrink-0" />
                          <span>{appUploadProgressText}</span>
                        </div>
                      )}
                    </div>

                    {/* Version & File Size Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-right">
                      <div>
                        <label className="text-[11px] font-bold text-slate-300 block mb-1">
                          نسخه نرم‌افزار / اپلیکیشن (اختیاری):
                        </label>
                        <input
                          type="text"
                          value={newAppVersion}
                          onChange={(e) => setNewAppVersion(e.target.value)}
                          placeholder="مثلاً: 1.0.0 یا آخرین نسخه"
                          className="w-full bg-[#070e1c] border border-cyan-700/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono text-left dir-ltr"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-300 block mb-1">
                          حجم تقریبی فایل نصبی (اختیاری):
                        </label>
                        <input
                          type="text"
                          value={newAppFileSize}
                          onChange={(e) => setNewAppFileSize(e.target.value)}
                          placeholder="مثلاً: 18.5 مگابایت"
                          className="w-full bg-[#070e1c] border border-cyan-700/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                      </div>
                    </div>

                    {/* Quick Guide Card: راهنمای کجا و چگونه گذاشتن فایل اپلیکیشن */}
                    <div className="rounded-xl bg-[#060a17] border border-cyan-600/40 p-3.5 text-xs text-slate-300 space-y-2">
                      <div className="flex items-center gap-2 text-cyan-300 font-bold">
                        <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>راهنمای ویژه مدیر: چگونه فایل اپلیکیشن را قرار دهم تا لینک دانلود بگیرم؟</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-[11px] leading-relaxed">
                        <div className="bg-cyan-950/40 border border-cyan-700/30 rounded-lg p-2.5 space-y-1">
                          <span className="font-bold text-amber-300 block">۱. آپلود مستقیم (آسان‌ترین):</span>
                          <p className="text-slate-300">
                            روی دکمه آبی‌رنگ «آپلود مستقیم فایل APK» بالا بزنید و فایل را انتخاب کنید. فایل خودکار روی هاست سرور جهش در پوشه <span className="font-mono text-cyan-300">/uploads/apps/</span> آپلود شده و لینک مستقیم آن تولید می‌شود.
                          </p>
                        </div>

                        <div className="bg-cyan-950/40 border border-cyan-700/30 rounded-lg p-2.5 space-y-1">
                          <span className="font-bold text-emerald-300 block">۲. قرار دادن در پوشه سرور:</span>
                          <p className="text-slate-300">
                            اگر از File Manager یا FTP استفاده می‌کنید، فایل APK خود را در پوشه <span className="font-mono text-emerald-300">uploads/apps/</span> هاست کپی کنید و در کادر بالا آدرس <span className="font-mono text-cyan-300">/uploads/apps/name.apk</span> را بنویسید.
                          </p>
                        </div>

                        <div className="bg-cyan-950/40 border border-cyan-700/30 rounded-lg p-2.5 space-y-1">
                          <span className="font-bold text-purple-300 block">۳. لینک خارجی (گوگل درایو/تلگرام):</span>
                          <p className="text-slate-300">
                            می‌توانید فایل نصبی را در Google Drive (با دسترسی Anyone with link)، پیکوفایل یا تلگرام قرار داده و لینک مستقیم دانلود آن را در کادر بالا پیست فرمایید.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6.05 Custom Multi-Tier Subscription & Pricing Plans Builder (پکیج‌ها و تعرفه‌های اشتراک سفارشی) */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#170a2f] via-[#220d3f] to-[#120826] border-2 border-amber-400/70 rounded-2xl space-y-4 shadow-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/30 pb-3">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasCustomPlans}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setHasCustomPlans(checked);
                          if (checked && customPlans.length === 0) {
                            handleLoadDefaultPlansPreset();
                          }
                        }}
                        className="w-5 h-5 rounded border-amber-400 text-amber-500 focus:ring-0 cursor-pointer"
                      />
                      <div>
                        <span className="text-xs sm:text-sm font-black text-amber-300 flex items-center gap-1.5">
                          <Tag className="w-4 h-4 text-amber-400" />
                          خرید به صورت پلن و چند تعرفه‌ای (پکیج‌های انتخابی با قیمت و توضیحات مجزا)
                        </span>
                        <p className="text-[11px] text-slate-300 font-normal mt-0.5">
                          مشابه صفحه پکیج‌های تبلیغات هوشمند یا پلن‌های پایه، طلایی و VIP همراه با پاپ‌آپ انتخاب تعرفه
                        </p>
                      </div>
                    </label>

                    <span className="text-[11px] bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-3 py-1 rounded-full shrink-0 shadow-md">
                      {customPlans.length} تعرفه فعال
                    </span>
                  </div>

                  {hasCustomPlans && (
                    <div className="space-y-4 animate-in fade-in">
                      {/* Top Configs: Titles */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-black/40 p-3.5 rounded-xl border border-purple-900/60">
                        <div>
                          <label className="text-xs font-bold text-amber-200 block mb-1">
                            عنوان اصلی بخش تعرفه‌ها:
                          </label>
                          <input
                            type="text"
                            value={customPlansTitle}
                            onChange={(e) => setCustomPlansTitle(e.target.value)}
                            placeholder="مثلاً: پکیج‌های تبلیغات هوشمند"
                            className="w-full bg-[#100824] border border-purple-700/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-amber-200 block mb-1">
                            زیرعنوان و توضیحات معرفی:
                          </label>
                          <input
                            type="text"
                            value={customPlansSubtitle}
                            onChange={(e) => setCustomPlansSubtitle(e.target.value)}
                            placeholder="مثلاً: انتخاب کنید و کمپین خود را به سطح بالاتری ببرید"
                            className="w-full bg-[#100824] border border-purple-700/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                        </div>
                      </div>

                      {/* Presets & Add Plan Actions */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <span className="text-xs font-black text-amber-300">
                          لیست تعرفه‌ها و پکیج‌های این محصول:
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={handleLoadDefaultPlansPreset}
                            className="flex items-center gap-1.5 bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/50 text-amber-300 font-bold px-3 py-1.5 rounded-xl text-xs transition-all cursor-pointer shadow-sm"
                            title="بارگذاری ۳ تعرفه پایه، طلایی و پلاتینیوم"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            <span>بارگذاری ۳ تعرفه پیش‌فرض (پایه، طلایی، VIP)</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleAddNewPlan}
                            className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs transition-all cursor-pointer shadow-md"
                          >
                            <PlusCircle className="w-3.5 h-3.5" />
                            <span>افزودن تعرفه جدید (+)</span>
                          </button>
                        </div>
                      </div>

                      {/* Plans List Editor */}
                      <div className="space-y-4">
                        {customPlans.map((plan, index) => (
                          <div
                            key={plan.id || index}
                            className={`p-4 rounded-2xl border transition-all ${
                              plan.isPopular
                                ? 'bg-gradient-to-r from-amber-950/30 via-[#1d1136] to-[#140a28] border-amber-400 ring-1 ring-amber-400/40 shadow-lg'
                                : 'bg-[#110924] border-purple-800/60'
                            }`}
                          >
                            {/* Card Top Title & Controls */}
                            <div className="flex items-center justify-between border-b border-purple-900/50 pb-2.5 mb-3">
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-purple-900/80 border border-purple-500/50 text-amber-300 text-xs font-black flex items-center justify-center font-mono">
                                  {index + 1}
                                </span>
                                <span className="text-xs sm:text-sm font-black text-white">
                                  {plan.name || `تعرفه ${index + 1}`}
                                </span>
                                {plan.isPopular && (
                                  <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                                    <Sparkles className="w-3 h-3" />
                                    پلن ویژه طلایی
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center gap-3">
                                <label className="flex items-center gap-1.5 text-xs text-amber-300 font-bold cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={Boolean(plan.isPopular)}
                                    onChange={(e) => handleUpdatePlan(index, { isPopular: e.target.checked })}
                                    className="w-3.5 h-3.5 rounded border-amber-400 text-amber-500 focus:ring-0 cursor-pointer"
                                  />
                                  <span>علامت به عنوان طلایی (پیشنهادی ویژه)</span>
                                </label>

                                {customPlans.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => handleDeletePlan(index)}
                                    className="text-rose-400 hover:text-rose-300 p-1 rounded-lg hover:bg-rose-950/50 transition-colors cursor-pointer"
                                    title="حذف این تعرفه"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Plan Input Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-right">
                              {/* Plan Name */}
                              <div>
                                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                                  نام تعرفه / عنوان پکیج:
                                </label>
                                <input
                                  type="text"
                                  value={plan.name}
                                  onChange={(e) => handleUpdatePlan(index, { name: e.target.value })}
                                  placeholder="مثلاً: طلایی (پیشنهادی ویژه)"
                                  className="w-full bg-[#180f33] border border-purple-700/60 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400 font-bold"
                                />
                              </div>

                              {/* Price */}
                              <div>
                                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                                  قیمت تعرفه (تومان):
                                </label>
                                <input
                                  type="number"
                                  value={plan.price}
                                  onChange={(e) => handleUpdatePlan(index, { price: parseInt(e.target.value, 10) || 0 })}
                                  placeholder="مثلاً: 25500000"
                                  className="w-full bg-[#180f33] border border-amber-400/80 rounded-xl px-3 py-1.5 text-xs text-amber-300 font-black font-mono focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                              </div>

                              {/* Original Price */}
                              <div>
                                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                                  قیمت قبل از تخفیف (اختیاری):
                                </label>
                                <input
                                  type="number"
                                  value={plan.originalPrice || ''}
                                  onChange={(e) => handleUpdatePlan(index, { originalPrice: e.target.value ? parseInt(e.target.value, 10) : undefined })}
                                  placeholder="مثلاً: 36500000"
                                  className="w-full bg-[#180f33] border border-purple-700/60 rounded-xl px-3 py-1.5 text-xs text-slate-300 font-mono focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                              </div>

                              {/* Badge */}
                              <div>
                                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                                  برچسب یا بج روی کارت:
                                </label>
                                <input
                                  type="text"
                                  value={plan.badge || ''}
                                  onChange={(e) => handleUpdatePlan(index, { badge: e.target.value })}
                                  placeholder="مثلاً: 🔥 پیشنهادی ویژه"
                                  className="w-full bg-[#180f33] border border-purple-700/60 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                              </div>

                              {/* Duration / Period */}
                              <div>
                                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                                  عنوان دوره اشتراک:
                                </label>
                                <input
                                  type="text"
                                  value={plan.durationLabel || ''}
                                  onChange={(e) => {
                                    const nextLabel = e.target.value;
                                    const parsedDays = parseSubscriptionDays(nextLabel, plan.durationDays || 30);
                                    handleUpdatePlan(index, { durationLabel: nextLabel, durationDays: parsedDays });
                                  }}
                                  placeholder="مثلاً: دوره ۱ روزه یا ۳۰ روزه"
                                  className="w-full bg-[#180f33] border border-purple-700/60 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                              </div>

                              {/* Exact Duration in Days */}
                              <div>
                                <label className="text-[11px] font-bold text-amber-300 block mb-1">
                                  مدت دقیق لایسنس (به روز):
                                </label>
                                <input
                                  type="number"
                                  min={1}
                                  max={3650}
                                  value={plan.durationDays || 30}
                                  onChange={(e) => handleUpdatePlan(index, { durationDays: parseInt(e.target.value, 10) || 1 })}
                                  placeholder="مثلاً: 1 یا 7 یا 30"
                                  className="w-full bg-[#180f33] border border-amber-500/70 rounded-xl px-3 py-1.5 text-xs text-amber-300 font-bold font-mono focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                                <span className="text-[10px] text-slate-400 mt-0.5 block">
                                  {plan.durationDays === 1 ? '⚡ ۲۴ ساعت کامل محاسبه می‌شود' : `معادل ${(plan.durationDays || 30) * 24} ساعت`}
                                </span>
                              </div>

                              {/* Short Subtitle */}
                              <div>
                                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                                  زیرعنوان یا توضیح کوتاه:
                                </label>
                                <input
                                  type="text"
                                  value={plan.shortDescription || ''}
                                  onChange={(e) => handleUpdatePlan(index, { shortDescription: e.target.value })}
                                  placeholder="مثلاً: ۳۰٪ تخفیف ویژه اولین همکاری"
                                  className="w-full bg-[#180f33] border border-purple-700/60 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                              </div>
                            </div>

                            {/* Features list (multiline textarea) */}
                            <div className="mt-3">
                              <label className="text-[11px] font-bold text-amber-200 block mb-1 flex items-center justify-between">
                                <span>ویژگی‌ها و توضیحات خط‌به‌خط این تعرفه (هر خط یک ویژگی):</span>
                                <span className="text-[10px] text-slate-400 font-normal font-mono">
                                  {plan.features?.filter((s) => s.trim().length > 0).length || 0} ویژگی وارد شده
                                </span>
                              </label>
                              <textarea
                                rows={5}
                                value={plan.features ? plan.features.join('\n') : ''}
                                onChange={(e) => handleUpdatePlan(index, {
                                  features: e.target.value.split('\n')
                                })}
                                placeholder="تمام امکانات پیشرفته&#10;۵۰۰۰ + فیلتر حرفه‌ای&#10;تیزر و ویدیو با هوش مصنوعی"
                                className="w-full bg-[#180f33] border border-purple-700/60 rounded-xl p-2.5 text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400 leading-relaxed font-sans"
                              />
                            </div>
                          </div>
                        ))}
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
                          <span className="text-slate-400 text-[11px]">پیش‌فرض دائمی / بدون انقضا</span>
                        )}
                      </div>
                    </div>

                    {/* Quick Preset Buttons */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200">
                        انتخاب سریع مدت زمان اعتبار تخفیف:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                        <button
                          type="button"
                          onClick={() => handleSetIncredibleDuration('permanent')}
                          className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border text-center flex items-center justify-center gap-1 ${
                            incredibleTimerDuration === 'permanent'
                              ? 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-600/30'
                              : 'bg-purple-950/60 text-slate-300 hover:text-white border-purple-800/60 hover:bg-purple-900/60'
                          }`}
                        >
                          <span>🌟 همیشگی (دائمی)</span>
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
                        {onDeleteCoupon && currentUser?.role === 'admin' && (
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
                        <option value="product">🎯 هدایت به یک محصول / کالای خاص (جستجو و انتخاب کالا)</option>
                        <option value="category">انتخاب دسته‌بندی خاص</option>
                        <option value="all">نمایش تمام کالاها</option>
                        <option value="link">باز کردن لینک اینترنتی خارجی</option>
                      </select>
                    </div>

                    {/* Action Target (if product) */}
                    {bannerActionType === 'product' && (
                      <div className="space-y-2.5 p-3.5 rounded-xl bg-purple-950/50 border border-purple-600/60 shadow-inner">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-black text-amber-300 flex items-center gap-1.5">
                            <Package className="w-3.5 h-3.5 text-amber-400" />
                            <span>انتخاب یا جستجوی کالای هدف برای بنر</span>
                          </label>
                          {selectedProductForBanner && (
                            <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span>کالا متصل شد</span>
                            </span>
                          )}
                        </div>

                        {/* Selected Product Card */}
                        {selectedProductForBanner ? (
                          <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-900/70 border border-amber-400/50 gap-3">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <img
                                src={selectedProductForBanner.image}
                                alt={selectedProductForBanner.title}
                                className="w-12 h-12 rounded-lg object-cover bg-black/50 border border-purple-500/50 shrink-0"
                              />
                              <div className="min-w-0 text-right">
                                <h4 className="text-xs font-bold text-white truncate">
                                  {selectedProductForBanner.title}
                                </h4>
                                <div className="flex items-center gap-2 text-[10px] text-slate-300 mt-1">
                                  <span className="text-amber-300 font-bold font-mono">
                                    {selectedProductForBanner.price.toLocaleString('fa-IR')} تومان
                                  </span>
                                  {selectedProductForBanner.category && (
                                    <span className="text-purple-300">({selectedProductForBanner.category})</span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                type="button"
                                onClick={() => {
                                  if (!bannerTitle || bannerTitle === 'عنوان بنر شما') {
                                    setBannerTitle(selectedProductForBanner.title);
                                  }
                                  if (!bannerImage) {
                                    setBannerImage(selectedProductForBanner.image);
                                  }
                                }}
                                title="استفاده از عکس و نام این کالا در بنر"
                                className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[10px] font-bold border border-amber-500/40 transition-all cursor-pointer"
                              >
                                همگام‌سازی نام و عکس
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setBannerActionTarget('');
                                  setBannerProductSearch('');
                                }}
                                className="p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/60 transition-all cursor-pointer"
                                title="حذف اتصال این کالا"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-[11px] text-amber-300/80 bg-amber-500/10 border border-amber-500/20 p-2 rounded-lg">
                            لطفاً از کادر زیر نام یا کد کالای مورد نظر را جستجو نموده و دکمه «انتخاب کالا» را بزنید.
                          </div>
                        )}

                        {/* Search Input */}
                        <div className="relative">
                          <Search className="w-4 h-4 text-purple-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            value={bannerProductSearch}
                            onChange={(e) => setBannerProductSearch(e.target.value)}
                            placeholder="جستجوی نام، برند، صنف یا کد محصول..."
                            className="w-full bg-black/70 border border-purple-700/70 rounded-xl pr-9 pl-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
                          />
                        </div>

                        {/* Matching Products Scroll Area */}
                        {matchingProductsForBanner.length > 0 && (
                          <div className="max-h-48 overflow-y-auto space-y-1 rounded-xl bg-black/80 border border-purple-800/60 p-1.5 custom-scrollbar">
                            {matchingProductsForBanner.map((p) => {
                              const isChosen = bannerActionTarget === p.id;
                              return (
                                <div
                                  key={p.id}
                                  onClick={() => {
                                    setBannerActionTarget(p.id);
                                    setBannerProductSearch('');
                                  }}
                                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${
                                    isChosen
                                      ? 'bg-amber-500/20 border border-amber-400 text-amber-300'
                                      : 'hover:bg-purple-900/50 text-slate-200'
                                  }`}
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <img
                                      src={p.image}
                                      alt={p.title}
                                      className="w-8 h-8 rounded-md object-cover bg-black/40 shrink-0"
                                    />
                                    <div className="min-w-0 text-right">
                                      <p className="text-xs font-bold truncate">{p.title}</p>
                                      <p className="text-[10px] text-slate-400 font-mono">
                                        {p.price.toLocaleString('fa-IR')} تومان {p.category ? `• ${p.category}` : ''}
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    className={`text-[10px] font-bold px-2.5 py-1 rounded-lg shrink-0 transition-all ${
                                      isChosen
                                        ? 'bg-amber-400 text-slate-950'
                                        : 'bg-purple-800/80 hover:bg-amber-400 hover:text-slate-950 text-white'
                                    }`}
                                  >
                                    {isChosen ? 'انتخاب شده' : 'انتخاب'}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action Target (if category or link) */}
                    {(bannerActionType === 'category' || bannerActionType === 'link') && (
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          {bannerActionType === 'category' ? 'نام صنف یا دسته‌بندی مورد نظر' : 'آدرس اینترنتی لینک (URL)'}
                        </label>
                        <input
                          type="text"
                          value={bannerActionTarget}
                          onChange={(e) => setBannerActionTarget(e.target.value)}
                          placeholder={bannerActionType === 'category' ? 'مثلاً: املاک و مستغلات یا طراحی سایت' : 'https://example.com'}
                          className="w-full bg-black/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    )}

                    {/* Responsive Fit Mode (تطبیق اتوماتیک تصویر با پلتفرم‌های موبایل و دسکتاپ) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        نحوه نمایش عکس در موبایل و سیستم‌ها (Fit Mode)
                      </label>
                      <select
                        value={bannerFitMode}
                        onChange={(e) => setBannerFitMode(e.target.value as any)}
                        className="w-full bg-black/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-amber-300 font-bold focus:outline-none focus:border-amber-400"
                      >
                        <option value="auto">✨ تنظیم خودکار و هوشمند (تضمین دیده شدن کل عکس در تمام پلتفرم‌ها)</option>
                        <option value="contain">🖼️ بدون برش و کامل (Contain - عکس ۱۰۰٪ کامل با زمینه همرنگ)</option>
                        <option value="cover">📐 تمام‌عرض و کشیده (Cover - پر کردن کل فضا)</option>
                      </select>
                      <span className="text-[10px] text-purple-300/80 mt-1 block">
                        گزینه «خودکار» عکس بنر را طوری تنظیم می‌کند که در هیچ موبایل یا سیستمی کات نشود و همه‌چیز دیده شود.
                      </span>
                    </div>

                    {/* Target Guild (صنف هدف برای بنر) */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        صنف هدف بنر (اختیاری)
                      </label>
                      <select
                        value={bannerTargetGuild}
                        onChange={(e) => setBannerTargetGuild(e.target.value)}
                        className="w-full bg-black/50 border border-purple-700/60 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 font-bold focus:outline-none focus:border-amber-400"
                      >
                        <option value="">نمایش به تمام اصناف و کاربران (عمومی)</option>
                        <option value="املاک و مستغلات">🏢 ویژه صنف املاک و مستغلات</option>
                        <option value="طراحی سایت و آی‌تی">🌐 ویژه صنف فناوری و طراحی وب</option>
                        <option value="تبلیغات و مارکتینگ">📢 ویژه صنف تبلیغات و مارکتینگ</option>
                        <option value="پزشکی و سلامت">🩺 ویژه صنف پزشکی و کلینیک‌ها</option>
                        <option value="سوپرمارکت و هایپر">🛒 ویژه صنف سوپرمارکت و هایپر</option>
                        <option value="رستوران و کافی‌شاپ">🍽️ ویژه صنف رستوران و کافی‌شاپ</option>
                        <option value="پوشاک و مد">👔 ویژه صنف پوشاک و مد</option>
                        <option value="طلا و جواهرات">⌚ ویژه صنف طلا، جواهر و ساعت</option>
                        <option value="خودرو و یدکی">🚗 ویژه صنف خودرو و لوازم یدکی</option>
                        <option value="سایر مشاغل و اصناف">💼 ویژه سایر مشاغل و اصناف</option>
                      </select>
                    </div>

                    {/* Checkbox to hide text overlay if banner already has text */}
                    <div className="md:col-span-2 p-3 bg-purple-950/40 border border-purple-800/60 rounded-xl flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-amber-300 block">
                          مخفی‌سازی متن و تیترهای روی بنر
                        </span>
                        <span className="text-[11px] text-slate-400">
                          اگر عکس بنر شما قبلاً توسط گرافیست طراحی شده و خودش متن و تیتر دارد، این گزینه را تیک بزنید تا نوشته‌ها روی عکس قرار نگیرند.
                        </span>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={bannerHideTextOverlay}
                        onClick={() => setBannerHideTextOverlay(!bannerHideTextOverlay)}
                        dir="ltr"
                        className={`w-12 h-6.5 rounded-full transition-colors duration-200 flex items-center px-1 focus:outline-none shrink-0 border mr-3 ${
                          bannerHideTextOverlay
                            ? 'bg-amber-500 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.4)] justify-end'
                            : 'bg-slate-800 border-slate-700 justify-start'
                        }`}
                      >
                        <span className="block w-4.5 h-4.5 rounded-full bg-white shadow-md transition-all duration-200" />
                      </button>
                    </div>

                    {/* Text Graphics, Font Sizes, Highlight Word, Backdrop Blur Box & Single Line Controls */}
                    {!bannerHideTextOverlay && (
                      <div className="md:col-span-2 p-4 bg-[#140b2b] border border-purple-700/60 rounded-2xl space-y-4">
                        <div className="flex items-center gap-2 text-amber-300 font-black text-xs border-b border-purple-800/60 pb-2">
                          <Palette className="w-4 h-4 text-amber-400" />
                          <span>تنظیمات گرافیکی متن، سایز قلم، رنگ‌ها و باکس محوکننده پس‌زمینه</span>
                        </div>

                        {/* Font Sizes & Single-Line No-Wrap Controls */}
                        <div className="p-3.5 bg-purple-950/50 border border-purple-800/70 rounded-xl space-y-3.5">
                          <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                            <Type className="w-4 h-4 text-amber-400" />
                            <span>سایز قلم و کنترل چیدمان خطوط (جلوگیری از شکستن متن به دو خط)</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Title Font Size */}
                            <div>
                              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                                سایز عنوان اصلی بنر:
                              </label>
                              <div className="grid grid-cols-4 gap-1.5">
                                {[
                                  { id: 'sm', label: 'کوچک', desc: 'مناسب تیترهای بلند' },
                                  { id: 'md', label: 'متوسط', desc: 'سایز متوازن و استاندارد' },
                                  { id: 'lg', label: 'بزرگ', desc: 'پیش‌فرض برجسته' },
                                  { id: 'xl', label: 'خیلی‌بزرگ', desc: 'تیتر بسیار درشت' },
                                ].map((s) => (
                                  <button
                                    key={s.id}
                                    type="button"
                                    onClick={() => setBannerTitleFontSize(s.id as any)}
                                    className={`py-2 px-1 rounded-xl text-center border transition-all ${
                                      bannerTitleFontSize === s.id
                                        ? 'bg-amber-400 text-slate-950 font-black border-amber-300 shadow-md scale-102'
                                        : 'bg-black/50 text-slate-300 hover:text-white border-purple-800/60 hover:border-purple-600'
                                    }`}
                                  >
                                    <span className="block text-xs">{s.label}</span>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Subtitle Font Size */}
                            <div>
                              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                                سایز متن زیرعنوان:
                              </label>
                              <div className="grid grid-cols-3 gap-1.5">
                                {[
                                  { id: 'sm', label: 'ریز' },
                                  { id: 'md', label: 'متوسط' },
                                  { id: 'lg', label: 'بزرگ' },
                                ].map((s) => (
                                  <button
                                    key={s.id}
                                    type="button"
                                    onClick={() => setBannerSubtitleFontSize(s.id as any)}
                                    className={`py-2 px-1 rounded-xl text-center border transition-all ${
                                      bannerSubtitleFontSize === s.id
                                        ? 'bg-amber-400 text-slate-950 font-black border-amber-300 shadow-md scale-102'
                                        : 'bg-black/50 text-slate-300 hover:text-white border-purple-800/60 hover:border-purple-600'
                                    }`}
                                  >
                                    <span className="block text-xs">{s.label}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Single Line Title & Subtitle Toggles */}
                          <div className="pt-2.5 border-t border-purple-800/40 space-y-2.5">
                            {/* Force Single Line Title */}
                            <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-purple-800/40">
                              <div>
                                <span className="text-xs font-bold text-slate-200 block">
                                  قفل کردن عنوان در یک سطر (Single-Line / No-Wrap)
                                </span>
                                <span className="text-[10px] sm:text-[11px] text-slate-400">
                                  با فعال بودن این گزینه، کلمات عنوان بنر در تمام دستگاه‌ها (موبایل و کامپیوتر) در یک خط قرار می‌گیرند و به خط دوم نمی‌شکنند.
                                </span>
                              </div>
                              <button
                                type="button"
                                role="switch"
                                aria-checked={bannerSingleLineTitle}
                                onClick={() => setBannerSingleLineTitle(!bannerSingleLineTitle)}
                                dir="ltr"
                                className={`w-11 h-6 rounded-full transition-colors duration-200 flex items-center px-1 focus:outline-none shrink-0 border mr-2 ${
                                  bannerSingleLineTitle
                                    ? 'bg-amber-500 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.35)] justify-end'
                                    : 'bg-slate-800 border-slate-700 justify-start'
                                }`}
                              >
                                <span className="block w-4 h-4 rounded-full bg-white shadow-md transition-all duration-200" />
                              </button>
                            </div>

                            {/* Force Single Line Subtitle */}
                            <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-purple-800/40">
                              <div>
                                <span className="text-xs font-bold text-slate-200 block">
                                  قفل کردن متن توضیحات در یک سطر
                                </span>
                                <span className="text-[10px] sm:text-[11px] text-slate-400">
                                  جلوگیری از شکستن زیرعنوان به دو سطر.
                                </span>
                              </div>
                              <button
                                type="button"
                                role="switch"
                                aria-checked={bannerSingleLineSubtitle}
                                onClick={() => setBannerSingleLineSubtitle(!bannerSingleLineSubtitle)}
                                dir="ltr"
                                className={`w-11 h-6 rounded-full transition-colors duration-200 flex items-center px-1 focus:outline-none shrink-0 border mr-2 ${
                                  bannerSingleLineSubtitle
                                    ? 'bg-amber-500 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.35)] justify-end'
                                    : 'bg-slate-800 border-slate-700 justify-start'
                                }`}
                              >
                                <span className="block w-4 h-4 rounded-full bg-white shadow-md transition-all duration-200" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Title Color */}
                          <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                              <span>رنگ عنوان اصلی بنر</span>
                              <span className="text-[10px] text-slate-400 font-mono" dir="ltr">{bannerTitleColor}</span>
                            </label>
                            <div className="flex items-center gap-2">
                              <input
                                type="color"
                                value={bannerTitleColor}
                                onChange={(e) => setBannerTitleColor(e.target.value)}
                                className="w-9 h-9 rounded-xl border border-purple-600 bg-transparent cursor-pointer p-0.5 shrink-0"
                                title="انتخاب رنگ دلخواه"
                              />
                              <div className="flex items-center gap-1.5 flex-wrap flex-1">
                                {[
                                  { label: 'سفید', color: '#ffffff' },
                                  { label: 'طلایی', color: '#fbbf24' },
                                  { label: 'فیروزه‌ای', color: '#38bdf8' },
                                  { label: 'زمردی', color: '#4ade80' },
                                  { label: 'سرخابی', color: '#f43f5e' },
                                  { label: 'ارغوانی', color: '#c084fc' },
                                ].map((c) => (
                                  <button
                                    key={c.color}
                                    type="button"
                                    onClick={() => setBannerTitleColor(c.color)}
                                    className={`w-6 h-6 rounded-lg border transition-all ${
                                      bannerTitleColor.toLowerCase() === c.color.toLowerCase()
                                        ? 'ring-2 ring-amber-400 scale-110 border-white'
                                        : 'border-white/20 hover:scale-105'
                                    }`}
                                    style={{ backgroundColor: c.color }}
                                    title={c.label}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Subtitle Color */}
                          <div>
                            <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                              <span>رنگ متن توضیحات</span>
                              <span className="text-[10px] text-slate-400 font-mono" dir="ltr">{bannerSubtitleColor}</span>
                            </label>
                            <div className="flex items-center gap-2">
                              <input
                                type="color"
                                value={bannerSubtitleColor}
                                onChange={(e) => setBannerSubtitleColor(e.target.value)}
                                className="w-9 h-9 rounded-xl border border-purple-600 bg-transparent cursor-pointer p-0.5 shrink-0"
                                title="انتخاب رنگ دلخواه"
                              />
                              <div className="flex items-center gap-1.5 flex-wrap flex-1">
                                {[
                                  { label: 'سفید ملایم', color: '#e2e8f0' },
                                  { label: 'خاکستری روشن', color: '#cbd5e1' },
                                  { label: 'طلایی ملایم', color: '#fde047' },
                                  { label: 'آبی آسمانی', color: '#a5f3fc' },
                                  { label: 'صورتی مهتابی', color: '#fbcfe8' },
                                ].map((c) => (
                                  <button
                                    key={c.color}
                                    type="button"
                                    onClick={() => setBannerSubtitleColor(c.color)}
                                    className={`w-6 h-6 rounded-lg border transition-all ${
                                      bannerSubtitleColor.toLowerCase() === c.color.toLowerCase()
                                        ? 'ring-2 ring-amber-400 scale-110 border-white'
                                        : 'border-white/20 hover:scale-105'
                                    }`}
                                    style={{ backgroundColor: c.color }}
                                    title={c.label}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Word / Phrase Highlight Feature */}
                        <div className="p-3 bg-purple-950/40 border border-purple-800/60 rounded-xl space-y-2.5">
                          <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                            <Type className="w-4 h-4 text-amber-400" />
                            <span>تغییر رنگ یک کلمه یا عبارت خاص در عنوان (هایلایت هوشمند)</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] text-slate-300 mb-1">
                                کلمه یا عبارتی که می‌خواهید رنگ متمایز داشته باشد:
                              </label>
                              <input
                                type="text"
                                value={bannerHighlightText}
                                onChange={(e) => setBannerHighlightText(e.target.value)}
                                placeholder="مثلاً: وب‌سایت حرفه‌ای یا تخفیف ویژه"
                                className="w-full bg-black/50 border border-purple-700/60 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] text-slate-300 mb-1 flex items-center justify-between">
                                <span>رنگ کلمه هایلایت‌شده:</span>
                                <span className="text-[10px] text-slate-400 font-mono" dir="ltr">{bannerHighlightColor}</span>
                              </label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="color"
                                  value={bannerHighlightColor}
                                  onChange={(e) => setBannerHighlightColor(e.target.value)}
                                  className="w-8 h-8 rounded-xl border border-purple-600 bg-transparent cursor-pointer p-0.5 shrink-0"
                                />
                                <div className="flex items-center gap-1.5 flex-wrap flex-1">
                                  {[
                                    { label: 'طلایی نئون', color: '#fbbf24' },
                                    { label: 'فیروزه‌ای براق', color: '#06b6d4' },
                                    { label: 'سبز درخشان', color: '#10b981' },
                                    { label: 'قرمز مرجانی', color: '#f43f5e' },
                                    { label: 'ارغوانی فسفری', color: '#e879f9' },
                                  ].map((c) => (
                                    <button
                                      key={c.color}
                                      type="button"
                                      onClick={() => setBannerHighlightColor(c.color)}
                                      className={`w-6 h-6 rounded-lg border transition-all ${
                                        bannerHighlightColor.toLowerCase() === c.color.toLowerCase()
                                          ? 'ring-2 ring-amber-400 scale-110 border-white'
                                          : 'border-white/20 hover:scale-105'
                                      }`}
                                      style={{ backgroundColor: c.color }}
                                      title={c.label}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-[10px] text-purple-300/80 leading-relaxed">
                            💡 <strong className="text-amber-300 font-semibold">نکته حرفه‌ای:</strong> همچنین می‌توانید داخل متن عنوان، هر کلمه‌ای را داخل کروشه بگذارید تا مستقیماً رنگی شود. مثال: <code className="text-amber-300 bg-black/40 px-1 py-0.5 rounded font-sans">همین حالا، [وب‌سایت حرفه‌ای] خود را بسازید!</code>
                          </p>
                        </div>

                        {/* Backdrop Blur Box Feature */}
                        <div className="p-3 bg-purple-950/40 border border-purple-800/60 rounded-xl space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-xs font-bold text-amber-300 block">
                                باکس شیشه‌ای بلور و محوکننده پشت متن (Backdrop Blur Glass Box)
                              </span>
                              <span className="text-[11px] text-slate-400">
                                با فعال‌سازی این گزینه، یک کادر مات و شیشه‌ای زیبا پشت متن‌ها قرار می‌گیرد تا روی هر نوع تصویر زمینه، شلوغی یا رنگ روشن، متن‌ها با نهایت وضوح و خوانایی دیده شوند.
                              </span>
                            </div>
                            <button
                              type="button"
                              role="switch"
                              aria-checked={bannerTextBackdropEnabled}
                              onClick={() => setBannerTextBackdropEnabled(!bannerTextBackdropEnabled)}
                              dir="ltr"
                              className={`w-12 h-6.5 rounded-full transition-colors duration-200 flex items-center px-1 focus:outline-none shrink-0 border mr-3 ${
                                bannerTextBackdropEnabled
                                  ? 'bg-amber-500 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.4)] justify-end'
                                  : 'bg-slate-800 border-slate-700 justify-start'
                              }`}
                            >
                              <span className="block w-4.5 h-4.5 rounded-full bg-white shadow-md transition-all duration-200" />
                            </button>
                          </div>

                          {bannerTextBackdropEnabled && (
                            <div className="pt-2 border-t border-purple-800/40 grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in fade-in">
                              <div>
                                <label className="block text-[11px] text-slate-300 mb-1">
                                  تم رنگی کادر شیشه‌ای:
                                </label>
                                <select
                                  value={bannerTextBackdropTheme}
                                  onChange={(e) => setBannerTextBackdropTheme(e.target.value as any)}
                                  className="w-full bg-black/60 border border-purple-700/60 rounded-xl px-3 py-2 text-xs text-amber-300 font-bold focus:outline-none focus:border-amber-400"
                                >
                                  <option value="dark">⬛ شیشه دودی تیره مات (پیش‌فرض مدرن و فوق‌العاده خوانا)</option>
                                  <option value="purple">🔮 شیشه بنفش بلور سلطنتی (هماهنگ با هویت جهش‌کالا)</option>
                                  <option value="navy">🌊 شیشه سرمه‌ای دیپ (کنتراست بالا و لوکس)</option>
                                  <option value="light">❄️ شیشه یخی روشن مهتابی (برای پس‌زمینه‌های تیره)</option>
                                </select>
                              </div>

                              <div>
                                <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 mb-1">
                                  <span>درصد ماتی کادر شیشه‌ای:</span>
                                  <span className="text-amber-400 font-mono" dir="ltr">{bannerTextBackdropOpacity}%</span>
                                </div>
                                <input
                                  type="range"
                                  min="20"
                                  max="95"
                                  step="5"
                                  value={bannerTextBackdropOpacity}
                                  onChange={(e) => setBannerTextBackdropOpacity(Number(e.target.value))}
                                  className="w-full h-2 bg-purple-900/80 rounded-lg appearance-none cursor-pointer accent-amber-400 mt-2"
                                />
                              </div>
                            </div>
                          )}
                        </div>
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
                        <div className="mt-3 p-3.5 rounded-2xl bg-black/70 border border-purple-800/80 space-y-3">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-bold text-amber-300">
                                پیش‌نمایش زنده در پلتفرم (ابعاد ۲۱:۹ دقیق و تطابق کامل با موبایل و وب):
                              </span>
                              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                                نسبت ثابت در تمام صفحه‌ها
                              </span>
                            </div>

                            {/* Device Preview Toggle */}
                            <div className="flex items-center gap-1 bg-purple-950/80 p-1 rounded-xl border border-purple-700/50">
                              <button
                                type="button"
                                onClick={() => setBannerPreviewDevice('desktop')}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                                  bannerPreviewDevice === 'desktop'
                                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                                    : 'text-slate-300 hover:text-white'
                                }`}
                              >
                                <Monitor className="w-3.5 h-3.5" />
                                <span>نمای کامپیوتر</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => setBannerPreviewDevice('mobile')}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                                  bannerPreviewDevice === 'mobile'
                                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                                    : 'text-slate-300 hover:text-white'
                                }`}
                              >
                                <Smartphone className="w-3.5 h-3.5" />
                                <span>نمای موبایل</span>
                              </button>
                            </div>
                          </div>

                          {/* Responsive Preview Frame */}
                          <div className={`transition-all duration-300 ${bannerPreviewDevice === 'mobile' ? 'max-w-[360px] mx-auto' : 'w-full'}`}>
                            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-purple-600/70 shadow-2xl text-right bg-[#0d071a]">
                              
                              {/* Ambient background blur for contain/auto modes to prevent black voids */}
                              {(bannerFitMode === 'contain' || bannerFitMode === 'auto') && (
                                <div
                                  className="absolute inset-0 scale-110 blur-xl opacity-40 pointer-events-none"
                                  style={{
                                    backgroundImage: `url(${bannerImage})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                  }}
                                />
                              )}

                              {/* Main Banner Image with selected Fit Mode */}
                              <img
                                src={bannerImage}
                                alt="پیش‌نمایش بنر"
                                className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                                  bannerFitMode === 'contain'
                                    ? 'object-contain relative z-[1]'
                                    : bannerFitMode === 'auto'
                                    ? 'object-contain sm:object-cover relative z-[1]'
                                    : 'object-cover'
                                }`}
                                style={{ objectPosition: bannerImagePosition }}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80';
                                }}
                              />
                              
                              {!bannerHideTextOverlay && (
                                <div
                                  className={`absolute inset-0 z-[2] bg-gradient-to-l ${bannerGradient} pointer-events-none`}
                                  style={{ opacity: bannerOpacity / 100 }}
                                />
                              )}

                              {/* Overlay Content Container */}
                              <div className={`absolute inset-0 z-10 flex flex-col justify-between text-right pointer-events-none ${
                                bannerPreviewDevice === 'mobile' ? 'p-2' : 'p-3 sm:p-5'
                              }`}>
                                {/* Top Badges */}
                                <div className="flex justify-between items-center">
                                  {bannerBadge ? (
                                    <span className={`rounded-full bg-black/60 text-white font-bold border border-white/25 backdrop-blur-md ${
                                      bannerPreviewDevice === 'mobile' ? 'px-2 py-0.5 text-[8px]' : 'px-2.5 py-0.5 text-[9px] sm:text-xs'
                                    }`}>
                                      {bannerBadge}
                                    </span>
                                  ) : <span />}
                                  <div className="flex items-center gap-1.5">
                                    {bannerHideTextOverlay && (
                                      <span className={`rounded-full bg-amber-500/40 text-amber-200 font-bold border border-amber-400/50 backdrop-blur-md ${
                                        bannerPreviewDevice === 'mobile' ? 'px-1.5 py-0.5 text-[7.5px]' : 'px-2 py-0.5 text-[8px] sm:text-[10px]'
                                      }`}>
                                        مخفی‌سازی متن فعال است
                                      </span>
                                    )}
                                    {bannerTargetGuild && (
                                      <span className={`rounded-full bg-amber-400/30 text-amber-300 font-bold border border-amber-400/40 backdrop-blur-md ${
                                        bannerPreviewDevice === 'mobile' ? 'px-1.5 py-0.5 text-[8px]' : 'px-2 py-0.5 text-[9px] sm:text-xs'
                                      }`}>
                                        ویژه {bannerTargetGuild}
                                      </span>
                                    )}
                                  </div>
                                </div>

                                {/* Title & Subtitle with optional frosted backdrop blur box */}
                                {!bannerHideTextOverlay ? (
                                  <div
                                    className={`my-auto transition-all ${
                                      bannerSingleLineTitle ? 'w-fit max-w-[94%]' : 'max-w-xl'
                                    } ${
                                      bannerTextBackdropEnabled
                                        ? `${
                                            bannerPreviewDevice === 'mobile'
                                              ? 'p-1.5 rounded-lg border shadow-lg'
                                              : 'p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border shadow-2xl'
                                          } backdrop-blur-md ${
                                            bannerTextBackdropTheme === 'purple'
                                              ? 'bg-purple-950/75 border-purple-500/30'
                                              : bannerTextBackdropTheme === 'navy'
                                              ? 'bg-slate-950/80 border-cyan-500/25'
                                              : bannerTextBackdropTheme === 'light'
                                              ? 'bg-white/20 border-white/30 text-slate-900'
                                              : 'bg-black/65 border-white/15'
                                          }`
                                        : 'space-y-0.5'
                                    }`}
                                    style={{
                                      backgroundColor:
                                        bannerTextBackdropEnabled && bannerTextBackdropOpacity !== undefined
                                          ? `rgba(0, 0, 0, ${bannerTextBackdropOpacity / 100})`
                                          : undefined,
                                    }}
                                  >
                                    <h4
                                      className={`font-black leading-snug drop-shadow-md transition-all ${
                                        bannerSingleLineTitle
                                          ? 'whitespace-nowrap overflow-hidden text-ellipsis'
                                          : ''
                                      } ${
                                        bannerPreviewDevice === 'mobile'
                                          ? bannerTitleFontSize === 'sm'
                                            ? 'text-[10px]'
                                            : bannerTitleFontSize === 'md'
                                            ? 'text-[11px]'
                                            : bannerTitleFontSize === 'xl'
                                            ? 'text-[13px]'
                                            : 'text-[12px]' // 'lg'
                                          : bannerTitleFontSize === 'sm'
                                          ? 'text-sm sm:text-base md:text-xl'
                                          : bannerTitleFontSize === 'md'
                                          ? 'text-base sm:text-lg md:text-2xl'
                                          : bannerTitleFontSize === 'xl'
                                          ? 'text-xl sm:text-2xl md:text-4xl'
                                          : 'text-lg sm:text-xl md:text-3xl' // 'lg'
                                      }`}
                                      style={{ color: bannerTitleColor }}
                                    >
                                      {renderFormattedBannerTitle(
                                        bannerTitle || 'عنوان بنر شما (جهش‌کالا)',
                                        bannerHighlightText,
                                        bannerHighlightColor,
                                        bannerTitleColor
                                      )}
                                    </h4>
                                    <p
                                      className={`drop-shadow-sm font-normal transition-all ${
                                        bannerSingleLineSubtitle
                                          ? 'whitespace-nowrap overflow-hidden text-ellipsis'
                                          : 'line-clamp-1 sm:line-clamp-2'
                                      } ${
                                        bannerPreviewDevice === 'mobile'
                                          ? bannerSubtitleFontSize === 'sm'
                                            ? 'text-[7.5px]'
                                            : bannerSubtitleFontSize === 'lg'
                                            ? 'text-[9.5px]'
                                            : 'text-[8.5px]'
                                          : bannerSubtitleFontSize === 'sm'
                                          ? 'text-xs'
                                          : bannerSubtitleFontSize === 'lg'
                                          ? 'text-sm'
                                          : 'text-xs'
                                      }`}
                                      style={{ color: bannerSubtitleColor }}
                                    >
                                      {bannerSubtitle || 'توضیحات یا زیرعنوان بنر برای جلب توجه مخاطب'}
                                    </p>
                                  </div>
                                ) : (
                                  <div className="my-auto py-1">
                                    <span className="inline-block px-2.5 py-1 rounded-lg bg-black/75 text-amber-300 text-[9px] font-bold border border-amber-400/40 backdrop-blur-md shadow-lg">
                                      بنر گرافیکی بدون متن پیش‌فرض (متن در خود عکس قرار دارد)
                                    </span>
                                  </div>
                                )}

                                {/* Bottom CTA Button */}
                                <div className="flex justify-end">
                                  {!bannerHideTextOverlay ? (
                                    <span className={`bg-gradient-to-r from-amber-400 to-amber-500 text-black font-black shadow-md flex items-center gap-1 ${
                                      bannerPreviewDevice === 'mobile'
                                        ? 'px-2 py-0.5 text-[8.5px] rounded'
                                        : 'px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs rounded-lg'
                                    }`}>
                                      <span>{bannerCta || 'مشاهده'}</span>
                                      <ArrowLeft className={bannerPreviewDevice === 'mobile' ? 'w-2.5 h-2.5 text-slate-950' : 'w-3 h-3 text-slate-950'} />
                                    </span>
                                  ) : <span />}
                                </div>
                              </div>
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
                          <div className="flex items-center gap-2 mt-1 text-[10px] text-amber-300/80 flex-wrap">
                            <span>دکمه: {banner.cta || 'مشاهده'}</span>
                            <span>•</span>
                            {banner.actionType === 'product' && banner.actionTarget && (
                              <>
                                <span className="text-cyan-300 font-bold">
                                  🎯 متصل به کالا: {products.find((p) => p.id === banner.actionTarget)?.title || banner.actionTarget}
                                </span>
                                <span>•</span>
                              </>
                            )}
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

          {/* TAB: BACKUP & RESTORE */}
          {activeTab === 'backup-restore' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 p-6 rounded-3xl border border-emerald-500/30 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                    <Download className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">پشتیبان‌گیری و بازیابی اطلاعات سایت</h3>
                    <p className="text-xs text-emerald-300/80 mt-0.5">
                      دریافت فایل پشتیبان کامل از تمامی محصولات، بنرها، سفارشات، کدهای تخفیف و کاربران، و بازیابی آن با یک کلیک.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                  {/* Export Backup Card */}
                  <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                        <FileText className="w-4 h-4 text-emerald-400" />
                        <span>دانلود فایل پشتیبان (Backup)</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        با کلیک روی دکمه زیر، یک فایل JSON حاوی تمامی محصولات ({products.length} عدد)، بنرها ({bannersList.length} عدد)، سفارشات و اطلاعات سایت دانلود می‌شود تا در هر زمان خواستید از آن استفاده کنید.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        try {
                          const backupData = {
                            version: '1.0',
                            timestamp: new Date().toISOString(),
                            products,
                            banners: bannersList,
                            orders,
                            coupons,
                            users: usersList,
                          };
                          const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupData, null, 2));
                          const downloadAnchor = document.createElement('a');
                          downloadAnchor.setAttribute('href', dataStr);
                          downloadAnchor.setAttribute('download', `jahesh-backup-${new Date().toISOString().slice(0, 10)}.json`);
                          document.body.appendChild(downloadAnchor);
                          downloadAnchor.click();
                          downloadAnchor.remove();
                          alert('فایل پشتیبان سایت با موفقیت دانلود شد!');
                        } catch (err: any) {
                          alert('خطا در ایجاد پشتیبان: ' + err.message);
                        }
                      }}
                      className="mt-5 w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>دانلود فایل پشتیبان کامل (.json)</span>
                    </button>
                  </div>

                  {/* Import Restore Card */}
                  <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                        <Upload className="w-4 h-4 text-cyan-400" />
                        <span>بازیابی اطلاعات از فایل پشتیبان (Restore)</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        اگر اطلاعات سایت تغییر کرد یا ریست شد، فایل پشتیبان قبلی خود را انتخاب کنید تا تمامی محصولات، بنرها و اطلاعات به صورت آنی در سایت و دیتابیس ابری بازگردانی شوند.
                      </p>
                    </div>

                    <div className="mt-5">
                      <label className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer">
                        <Upload className="w-4 h-4" />
                        <span>انتخاب و بارگذاری فایل پشتیبان</span>
                        <input
                          type="file"
                          accept=".json"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const reader = new FileReader();
                            reader.onload = async (event) => {
                              try {
                                const json = JSON.parse(event.target?.result as string);
                                if (!json || typeof json !== 'object') {
                                  throw new Error('فایل JSON نامعتبر است.');
                                }
                                if (confirm('آیا مطمئن هستید که می‌خواهید اطلاعات پشتیبان را روی سایت بارگذاری کنید؟ محصولات و بنرها جایگزین خواهند شد.')) {
                                  if (Array.isArray(json.products) && json.products.length > 0) {
                                    await fetch('/api/products', {
                                      method: 'POST',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify(json.products),
                                    });
                                  }
                                  if (Array.isArray(json.banners) && json.banners.length > 0) {
                                    await fetch('/api/banners', {
                                      method: 'POST',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify(json.banners),
                                    });
                                  }
                                  alert('اطلاعات با موفقیت بازیابی شد! صفحه به‌روزرسانی می‌شود.');
                                  window.location.reload();
                                }
                              } catch (err: any) {
                                alert('خطا در خواندن فایل پشتیبان: ' + err.message);
                              }
                            };
                            reader.readAsText(file);
                          }}
                        />
                      </label>
                    </div>
                  </div>
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

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      setGrantSelectedUser(usersList[0] || null);
                      setGrantSelectedProduct(products.find((p) => p.isSubscription || p.category === 'اشتراک نرم‌افزار' || p.aiAppName) || products[0] || null);
                      setGrantDurationDays(1);
                      setGrantCustomDaysInput('1');
                      setIsGrantLicenseModalOpen(true);
                    }}
                    className="flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 text-xs font-black px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all cursor-pointer ring-1 ring-amber-300"
                    title="اعطای لایسنس و دسترسی ۱۰۰٪ رایگان به هر کاربر و ثبت مستقیم در سفارشات"
                  >
                    <Zap className="w-4 h-4 fill-slate-950" />
                    <span>⚡ اعطای لایسنس رایگان به کاربر</span>
                  </button>

                  <button
                    onClick={handleRefreshUsersList}
                    disabled={isRefreshingUsers}
                    className="flex items-center gap-1.5 bg-purple-900/60 hover:bg-purple-800 border border-purple-700/50 text-purple-200 text-xs font-bold px-3 py-2.5 rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50"
                    title="بروزرسانی و دریافت کاربران ثبت نام شده جدید از تمام دستگاه‌ها و پایگاه ابری"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 text-purple-300 ${isRefreshingUsers ? 'animate-spin' : ''}`} />
                    <span>{isRefreshingUsers ? 'در حال همگام‌سازی...' : 'بروزرسانی زنده لیست'}</span>
                  </button>

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

              {/* Dedicated Hero Banner for Free License Granting */}
              <div className="bg-gradient-to-r from-purple-950/70 via-indigo-950/60 to-amber-950/40 border border-amber-400/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3 text-right">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shrink-0 shadow-md">
                    <Key className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-amber-300 flex items-center gap-1.5">
                      <span>بخش اختصاصی مدیریت: اعطای لایسنس و اشتراک رایگان به کاربران سایت</span>
                      <span className="text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded-full font-mono">100% FREE</span>
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                      امکان انتخاب هر کاربر ثبت‌نام‌شده و باز کردن دسترسی نرم‌افزارها و هوش مصنوعی با مدت دلخواه (۱ روزه ۲۴ ساعته کامل، ۷ روزه، ۳۰ روزه یا دائمی) و ثبت آنی در پیگیری سفارشات کاربر.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setGrantSelectedUser(usersList[0] || null);
                    setGrantSelectedProduct(products.find((p) => p.isSubscription || p.category === 'اشتراک نرم‌افزار' || p.aiAppName) || products[0] || null);
                    setGrantDurationDays(1);
                    setGrantCustomDaysInput('1');
                    setIsGrantLicenseModalOpen(true);
                  }}
                  className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>ثبت و اعطای لایسنس جدید</span>
                </button>
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
                    <option value="admin">فقط مدیران ارشد (Super Admin)</option>
                    <option value="operator">فقط ادمین‌های محدود (Operator)</option>
                    <option value="user">فقط کاربران عادی (User)</option>
                  </select>
                </div>
              </div>

              {/* User List Table */}
              {(() => {
                const filteredUsers = sortUsersNewestFirst(
                  usersList.filter((u) => {
                    if (u.username?.toLowerCase() === 'zahra' || u.fullName?.includes('زهرا') || u.id === 'u-1789594703691') {
                      return false;
                    }
                    const matchesSearch =
                      !userSearchTerm.trim() ||
                      u.fullName?.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
                      u.phone?.includes(userSearchTerm) ||
                      u.username?.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
                      u.email?.toLowerCase().includes(userSearchTerm.toLowerCase());
                    const matchesRole = userRoleFilter === 'all' || u.role === userRoleFilter;
                    return matchesSearch && matchesRole;
                  })
                );

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
                        <tr className="whitespace-nowrap">
                          <th className="p-3.5">#</th>
                          <th className="p-3.5">نام و نام خانوادگی</th>
                          <th className="p-3.5">صنف و زمینه فعالیت</th>
                          <th className="p-3.5">شماره موبایل</th>
                          <th className="p-3.5">نام کاربری / ایمیل</th>
                          <th className="p-3.5 text-center">نقش کاربری</th>
                          <th className="p-3.5">تاریخ ثبت نام</th>
                          <th className="p-3.5 text-center">عملیات مدیریت</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-purple-900/30">
                        {filteredUsers.map((user, idx) => {
                          const isMaster =
                            user.email?.toLowerCase() === 'jahesh1395@gmail.com' ||
                            user.username?.toLowerCase() === 'jahesh1395' ||
                            user.username?.toLowerCase() === 'jahesh_admin' ||
                            user.id === 'usr-jahesh-master' ||
                            user.id === 'admin-jahesh-main';
                          const fullGuildText = `${user.guild || (isMaster ? 'فناوری و مدیریت جهش' : 'ثبت نشده')}${user.customGuild ? ` (${user.customGuild})` : ''}`;
                          return (
                            <tr key={user.id} className="hover:bg-purple-900/15 transition-colors whitespace-nowrap">
                              <td className="p-3.5 text-purple-300/60 font-mono">{idx + 1}</td>
                              <td className="p-3.5 whitespace-nowrap">
                                <div className="font-bold text-white flex items-center gap-1.5">
                                  {user.fullName || 'بدون نام'}
                                  {isMaster && (
                                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/40">
                                      مدیر کل
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="p-3.5 whitespace-nowrap">
                                <div
                                  title={fullGuildText}
                                  className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-lg bg-purple-950/80 text-amber-300 border border-purple-700/50 font-medium whitespace-nowrap max-w-[200px] cursor-default shadow-xs"
                                >
                                  <span className="shrink-0 text-xs">💼</span>
                                  <span className="truncate">
                                    {fullGuildText}
                                  </span>
                                </div>
                              </td>
                              <td className="p-3.5 text-slate-300 font-mono whitespace-nowrap" dir="ltr">
                                {user.phone}
                              </td>
                              <td className="p-3.5 whitespace-nowrap">
                                <div className="font-mono text-amber-300 text-[11px]" dir="ltr">
                                  @{user.username}
                                </div>
                                {user.email && (
                                  <div className="text-[10px] text-slate-400 font-mono" dir="ltr">
                                    {user.email}
                                  </div>
                                )}
                              </td>
                               <td className="p-3.5 text-center whitespace-nowrap">
                                <select
                                  value={user.role || 'user'}
                                  disabled={isMaster || currentUser?.role === 'operator'}
                                  onChange={(e) => {
                                    const nextRole = e.target.value as 'admin' | 'operator' | 'user';
                                    const updated = { ...user, role: nextRole };
                                    onUpdateUser?.(updated);
                                    const roleTitle = nextRole === 'admin' ? 'مدیر ارشد' : nextRole === 'operator' ? 'ادمین محدود (اپراتور)' : 'کاربر عادی';
                                    setUserActionMessage(`نقش کاربر ${user.fullName} به «${roleTitle}» تغییر یافت.`);
                                  }}
                                  className={`text-[11px] px-2.5 py-1 rounded-full font-bold border cursor-pointer focus:outline-none transition-all ${
                                    user.role === 'admin'
                                      ? 'bg-purple-950 text-purple-300 border-purple-500/50 hover:border-purple-400'
                                      : user.role === 'operator'
                                      ? 'bg-cyan-950 text-cyan-300 border-cyan-500/50 hover:border-cyan-400'
                                      : 'bg-slate-900/90 text-slate-300 border-slate-700/50 hover:border-slate-500'
                                  } ${isMaster || currentUser?.role === 'operator' ? 'opacity-60 cursor-not-allowed' : ''}`}
                                >
                                  <option value="user" className="bg-[#130b2e] text-slate-200">👤 کاربر عادی</option>
                                  <option value="operator" className="bg-[#130b2e] text-cyan-300">🛡️ ادمین محدود (اپراتور)</option>
                                  <option value="admin" className="bg-[#130b2e] text-purple-300">👑 مدیر ارشد (Admin)</option>
                                </select>
                              </td>
                              <td className="p-3.5 text-slate-400 font-sans whitespace-nowrap">
                                {user.createdAt || 'ثبت در سیستم'}
                              </td>
                              <td className="p-3.5 text-center whitespace-nowrap">
                                <div className="flex items-center justify-center gap-2">
                                  {/* Quick Grant License Button */}
                                  <button
                                    onClick={() => {
                                      setGrantSelectedUser(user);
                                      setGrantSelectedProduct(
                                        products.find((p) => p.isSubscription || p.category === 'اشتراک نرم‌افزار' || p.aiAppName) || products[0] || null
                                      );
                                      setGrantDurationDays(1);
                                      setGrantCustomDaysInput('1');
                                      setIsGrantLicenseModalOpen(true);
                                    }}
                                    title={`اعطای لایسنس و دسترسی رایگان به «${user.fullName || user.username}»`}
                                    className="p-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/35 text-amber-300 border border-amber-400/50 transition-colors flex items-center gap-1 font-bold text-[11px] cursor-pointer"
                                  >
                                    <Key className="w-3.5 h-3.5 text-amber-400" />
                                    <span className="hidden xl:inline">اعطای لایسنس</span>
                                  </button>

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
                                      if (currentUser?.role === 'operator') {
                                        alert('تغییر سطح دسترسی کاربران نیازمند دسترسی مدیر ارشد است.');
                                        return;
                                      }
                                      if (isMaster) {
                                        alert('نقش مدیر اصلی سایت قابل تغییر نیست.');
                                        return;
                                      }
                                      const nextRole: 'admin' | 'operator' | 'user' =
                                        user.role === 'user' ? 'operator' : user.role === 'operator' ? 'admin' : 'user';
                                      const updated = { ...user, role: nextRole };
                                      onUpdateUser?.(updated);
                                      const roleTitle = nextRole === 'admin' ? 'مدیر ارشد' : nextRole === 'operator' ? 'ادمین محدود (اپراتور)' : 'کاربر عادی';
                                      setUserActionMessage(`نقش کاربر ${user.fullName} به «${roleTitle}» تغییر یافت.`);
                                    }}
                                    disabled={currentUser?.role === 'operator'}
                                    title={
                                      currentUser?.role === 'operator'
                                        ? 'تغییر نقش نیازمند دسترسی مدیر ارشد است'
                                        : `تغییر نقش (فعلی: ${
                                            user.role === 'admin' ? 'مدیر ارشد' : user.role === 'operator' ? 'ادمین محدود' : 'کاربر عادی'
                                          })`
                                    }
                                    className={`p-1.5 rounded-lg border transition-colors ${
                                      currentUser?.role === 'operator'
                                        ? 'opacity-30 cursor-not-allowed bg-slate-900 border-slate-800 text-slate-600'
                                        : 'bg-purple-950/60 hover:bg-purple-900 text-purple-300 border border-purple-700/40'
                                    }`}
                                  >
                                    <Shield className="w-3.5 h-3.5" />
                                  </button>

                                  {/* Delete Button */}
                                  <button
                                    onClick={() => {
                                      if (currentUser?.role === 'operator') {
                                        alert('حذف حساب کاربری نیازمند دسترسی مدیر ارشد است.');
                                        return;
                                      }
                                      if (isMaster) {
                                        alert('حساب کاربری مدیر اصلی سایت قابل حذف نیست.');
                                        return;
                                      }
                                      if (confirm(`آیا از حذف حساب کاربری «${user.fullName}» (${user.username}) اطمینان دارید؟`)) {
                                        onDeleteUser?.(user.id);
                                        setUserActionMessage(`کاربر «${user.fullName}» با موفقیت حذف شد.`);
                                      }
                                    }}
                                    title={currentUser?.role === 'operator' ? 'حذف کاربر نیازمند دسترسی مدیر ارشد است' : 'حذف کاربر'}
                                    disabled={isMaster || currentUser?.role === 'operator'}
                                    className={`p-1.5 rounded-lg border transition-colors ${
                                      isMaster || currentUser?.role === 'operator'
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
                          disabled={currentUser?.role === 'operator'}
                          className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <option value="user">کاربر عادی (User)</option>
                          <option value="operator">ادمین محدود (اپراتور)</option>
                          <option value="admin">مدیر ارشد (Super Admin)</option>
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
                            disabled={currentUser?.role === 'operator'}
                            className="w-full bg-black/50 border border-purple-800/60 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <option value="user">کاربر عادی (User)</option>
                            <option value="operator">ادمین محدود (اپراتور)</option>
                            <option value="admin">مدیر ارشد (Super Admin)</option>
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

          {/* ======================================================== */}
          {/* DASHBOARD TECHNOLOGY TOOLS MANAGEMENT (داشبورد تکنولوژی جهش) */}
          {/* ======================================================== */}
          {activeTab === 'dashboard-tools' && (
            <div className="space-y-6 text-right">
              {/* Notification Banner */}
              {toolActionMessage && (
                <div className="p-3 bg-cyan-950/80 border border-cyan-500/60 rounded-xl text-cyan-200 text-xs flex items-center justify-between shadow-lg animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{toolActionMessage}</span>
                  </div>
                  <button
                    onClick={() => setToolActionMessage(null)}
                    className="text-cyan-400 hover:text-white text-xs px-2 py-0.5 rounded"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Main Header & Actions */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-[#190f38] via-[#120a2e] to-[#0d071f] p-5 rounded-2xl border border-purple-800/40 shadow-xl">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white flex items-center gap-2">
                        <span>مدیریت داشبورد تکنولوژی جهش</span>
                        <span className="text-[11px] bg-cyan-900/60 text-cyan-300 px-2.5 py-0.5 rounded-full border border-cyan-700/50 font-mono">
                          {toolsList.length} طرح ثبت شده
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        مدیریت طرح‌ها، تنظیم مستقیم لینک کلیک هر کارت، افزودن ابزار فناورانه جدید و ویرایش محتوا
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 flex-wrap">
                  <button
                    onClick={handleStartNewTool}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-900/40 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>افزودن طرح / ابزار جدید</span>
                  </button>

                  <button
                    type="button"
                    onClick={scrollToBottom}
                    className="px-3.5 py-2.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-cyan-300 border border-purple-800 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    title="پرش مستقیم به انتهای لیست ابزارها"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                    <span>انتهای لیست</span>
                  </button>

                  <button
                    type="button"
                    onClick={async () => {
                      if (window.confirm('آیا مایل به بازیابی تمام ۴۴ طرح پیش‌فرض داشبورد تکنولوژی جهش هستید؟')) {
                        setToolsLoading(true);
                        setToolsList(INITIAL_TOOLS);
                        await saveAllToolsToDb(INITIAL_TOOLS);
                        setToolsLoading(false);
                        setToolActionMessage('تمام ۴۴ طرح اصلی داشبورد تکنولوژی با موفقیت بازیابی شدند.');
                        setTimeout(() => setToolActionMessage(null), 3500);
                      }
                    }}
                    className="px-3.5 py-2.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-cyan-300 border border-purple-800 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    title="بازیابی تمام ۴۴ طرح اصلی داشبورد تکنولوژی"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>بازیابی ۴۴ طرح اصلی</span>
                  </button>

                  <a
                    href="/abzar-jahesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-xl bg-purple-900/50 hover:bg-purple-800/70 border border-purple-700/60 text-purple-200 text-xs font-bold flex items-center gap-1.5 transition-all"
                    title="مشاهده صفحه زنده داشبورد تکنولوژی جهش در تب جدید"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    <span>مشاهده صفحه داشبورد ↗</span>
                  </a>

                  <button
                    onClick={async () => {
                      setToolsLoading(true);
                      const reloaded = await fetchToolsFromDb();
                      if (reloaded && reloaded.length > 0) {
                        setToolsList(reloaded);
                      } else if (INITIAL_TOOLS && INITIAL_TOOLS.length > 0) {
                        setToolsList(INITIAL_TOOLS);
                      }
                      setToolsLoading(false);
                      setToolActionMessage('لیست ابزارها با موفقیت به‌روزرسانی شد.');
                      setTimeout(() => setToolActionMessage(null), 2500);
                    }}
                    className="p-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 border border-purple-800 text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="بارگذاری مجدد"
                  >
                    <RefreshCw className={`w-4 h-4 ${toolsLoading ? 'animate-spin text-cyan-400' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Action Message Alert */}
              {toolActionMessage && (
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/60 text-emerald-200 rounded-xl text-xs font-bold flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{toolActionMessage}</span>
                </div>
              )}

              {/* Quick KPI Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[#140b2e] border border-purple-900/50 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-xs block">کل طرح‌ها و ابزارها</span>
                    <span className="text-xl font-bold text-white font-mono">{toolsList.length}</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-purple-900/30 border border-purple-800/40 flex items-center justify-center text-purple-300">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-[#140b2e] border border-purple-900/50 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-xs block">طرح‌های فعال در نمایش</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono">
                      {toolsList.filter(t => t.isActive !== false).length}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-[#140b2e] border border-purple-900/50 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-xs block">طرح‌های با لینک مستقیم</span>
                    <span className="text-xl font-bold text-cyan-400 font-mono">
                      {toolsList.filter(t => t.link && t.link !== '#').length}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                    <Link2 className="w-5 h-5" />
                  </div>
                </div>
              </div>



              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#130b2e] p-3 rounded-xl border border-purple-900/40">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={toolSearchTerm}
                    onChange={(e) => setToolSearchTerm(e.target.value)}
                    placeholder="جستجو در عنوان، تگ یا لینک مستقیم..."
                    className="w-full bg-[#0a0518] border border-purple-800 rounded-xl pr-9 pl-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                  <button
                    onClick={() => setToolFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                      toolFilter === 'all'
                        ? 'bg-cyan-500 text-black shadow-sm'
                        : 'bg-purple-950/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    همه طرح‌ها ({toolsList.length})
                  </button>
                  <button
                    onClick={() => setToolFilter('active')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                      toolFilter === 'active'
                        ? 'bg-cyan-500 text-black shadow-sm'
                        : 'bg-purple-950/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    فعال‌ها ({toolsList.filter(t => t.isActive !== false).length})
                  </button>
                  <button
                    onClick={() => setToolFilter('has_link')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                      toolFilter === 'has_link'
                        ? 'bg-cyan-500 text-black shadow-sm'
                        : 'bg-purple-950/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    دارای لینک مستقیم ({toolsList.filter(t => t.link && t.link !== '#').length})
                  </button>
                </div>
              </div>

              {/* Tools List */}
              {(() => {
                const filtered = toolsList.filter(t => {
                  const s = toolSearchTerm.toLowerCase().trim();
                  const matchesSearch = !s ||
                    t.title?.toLowerCase().includes(s) ||
                    t.tag?.toLowerCase().includes(s) ||
                    t.desc?.toLowerCase().includes(s) ||
                    t.link?.toLowerCase().includes(s);

                  if (!matchesSearch) return false;
                  if (toolFilter === 'active') return t.isActive !== false;
                  if (toolFilter === 'inactive') return t.isActive === false;
                  if (toolFilter === 'has_link') return Boolean(t.link && t.link !== '#');
                  return true;
                });

                if (filtered.length === 0) {
                  return (
                    <div className="p-12 text-center rounded-2xl bg-purple-950/20 border border-purple-900/30 space-y-3">
                      <Cpu className="w-12 h-12 text-purple-500/40 mx-auto" />
                      <p className="text-sm font-bold text-white">هیچ طرح یا ابزاری با این مشخصات یافت نشد.</p>
                      <p className="text-xs text-slate-400">می‌توانید عبارت جستجو را تغییر دهید یا طرح جدیدی اضافه نمایید.</p>
                      <button
                        onClick={handleStartNewTool}
                        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
                      >
                        <Plus className="w-4 h-4" />
                        <span>افزودن نخستین طرح جدید</span>
                      </button>
                    </div>
                  );
                }

                return (
                  <div className="space-y-3">
                    {filtered.map((tool, idx) => (
                      <div
                        key={tool.id}
                        className={`p-4 rounded-2xl border transition-all ${
                          tool.isActive === false
                            ? 'bg-[#100924]/60 border-slate-800/60 opacity-60'
                            : 'bg-[#140b2e] border-purple-900/50 hover:border-cyan-500/50'
                        } flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg`}
                      >
                        {/* Order & Icon & Details */}
                        <div className="flex items-start gap-3.5 flex-1 min-w-0">
                          {/* Reorder controls & Index */}
                          <div className="flex flex-col items-center gap-1 shrink-0 pt-1">
                            <button
                              type="button"
                              onClick={() => handleMoveTool(idx, 'up')}
                              disabled={idx === 0}
                              className="p-1 rounded bg-purple-950 hover:bg-purple-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                              title="انتقال به بالا"
                            >
                              ▲
                            </button>
                            <span className="text-[11px] font-mono font-bold text-cyan-300">
                              #{idx + 1}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleMoveTool(idx, 'down')}
                              disabled={idx === toolsList.length - 1}
                              className="p-1 rounded bg-purple-950 hover:bg-purple-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                              title="انتقال به پایین"
                            >
                              ▼
                            </button>
                          </div>

                          {/* Image or Icon */}
                          <div className="w-14 h-14 rounded-xl bg-[#190f38] border border-purple-700/60 flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                            {tool.image ? (
                              <img
                                src={tool.image}
                                alt={tool.title}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <Cpu className="w-7 h-7 text-cyan-400" />
                            )}
                          </div>

                          {/* Info */}
                          <div className="space-y-1 min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-sm font-black text-white truncate">{tool.title}</h4>
                              {tool.tag && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/50">
                                  {tool.tag}
                                </span>
                              )}
                              {tool.mediaBadge && (
                                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-900/60 text-purple-200 border border-purple-700/40 font-mono">
                                  {tool.mediaBadge}
                                </span>
                              )}
                              {tool.codeVer && (
                                <span className="text-[10px] text-slate-400 font-mono" dir="ltr">
                                  {tool.codeVer}
                                </span>
                              )}
                            </div>

                            {tool.desc && (
                              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                                {tool.desc}
                              </p>
                            )}

                            {/* Direct Link Info */}
                            <div className="flex items-center gap-2 pt-1 flex-wrap">
                              <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-800/60 px-2.5 py-1 rounded-lg">
                                <Link2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                <span className="text-slate-400 font-sans">لینک مستقیم:</span>
                                <span className="truncate max-w-[280px]" dir="ltr">
                                  {tool.link || '#'}
                                </span>
                              </div>

                              {tool.link && tool.link !== '#' && (
                                <a
                                  href={tool.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] px-2 py-1 rounded bg-purple-900/40 hover:bg-purple-800 text-amber-300 border border-purple-700/50 flex items-center gap-1 font-bold transition-all"
                                  title="تست مستقیم لینک"
                                >
                                  <span>تست لینک ↗</span>
                                </a>
                              )}

                              <span className="text-[10px] text-slate-400">
                                دکمه: «{tool.btnText || 'ورود به سامانه'}»
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                          {/* Toggle Active Button */}
                          <button
                            type="button"
                            onClick={() => handleToggleToolActive(tool)}
                            className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                              tool.isActive !== false
                                ? 'bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-700/60'
                                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                            title={tool.isActive !== false ? 'غیرفعال کردن نمایش' : 'فعال کردن نمایش'}
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">
                              {tool.isActive !== false ? 'فعال' : 'مخفی'}
                            </span>
                          </button>

                          {/* Edit Button */}
                          <button
                            type="button"
                            onClick={() => handleStartEditTool(tool)}
                            className="px-3 py-2 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-cyan-300 border border-purple-700 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                            title="ویرایش اطلاعات و لینک مستقیم"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>ویرایش و لینک</span>
                          </button>

                          {/* Delete Button */}
                          {toolDeleteConfirmId === tool.id ? (
                            <div className="flex items-center gap-1 bg-rose-950/90 border border-rose-600 rounded-xl p-1">
                              <span className="text-[10px] text-rose-200 px-1 font-bold">حذف؟</span>
                              <button
                                type="button"
                                onClick={() => handleDeleteToolAction(tool.id)}
                                className="px-2 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-[10px] font-bold"
                              >
                                بله
                              </button>
                              <button
                                type="button"
                                onClick={() => setToolDeleteConfirmId(null)}
                                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px]"
                              >
                                خیر
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setToolDeleteConfirmId(tool.id)}
                              className="p-2 rounded-xl bg-rose-950/30 hover:bg-rose-900/60 text-rose-400 border border-rose-900/50 transition-all cursor-pointer"
                              title="حذف این طرح"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          )}

        </div>

        {/* Floating Quick Scroll Controls for Smooth Navigation */}
        <div className="absolute bottom-4 left-6 z-40 flex items-center gap-1 bg-[#120a2d]/95 backdrop-blur-md p-1.5 rounded-2xl border border-purple-700/80 shadow-2xl transition-all select-none">
          <button
            type="button"
            onClick={scrollToTop}
            disabled={!showScrollTop}
            className={`px-2.5 py-1.5 rounded-xl transition-all flex items-center gap-1 text-xs font-bold ${
              showScrollTop
                ? 'bg-purple-900/90 hover:bg-purple-800 text-cyan-300 border border-purple-600/70 shadow-md cursor-pointer hover:scale-105 active:scale-95'
                : 'opacity-30 text-slate-500 cursor-not-allowed'
            }`}
            title="پرش به بالای صفحه (ابتدای لیست)"
          >
            <ChevronUp className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline text-[11px]">بالا</span>
          </button>
          <div className="w-[1px] h-4 bg-purple-800/60"></div>
          <button
            type="button"
            onClick={scrollToBottom}
            disabled={!showScrollBottom}
            className={`px-2.5 py-1.5 rounded-xl transition-all flex items-center gap-1 text-xs font-bold ${
              showScrollBottom
                ? 'bg-purple-900/90 hover:bg-purple-800 text-cyan-300 border border-purple-600/70 shadow-md cursor-pointer hover:scale-105 active:scale-95'
                : 'opacity-30 text-slate-500 cursor-not-allowed'
            }`}
            title="پرش به انتهای صفحه (پایین لیست)"
          >
            <ChevronDown className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline text-[11px]">پایین</span>
          </button>
        </div>

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
                {(() => {
                  const cleanPhone = (selectedOrder.customerPhone || '').replace(/[^0-9]/g, '');
                  const namePhoneMatch = (selectedOrder.customerName || '').match(/09[0-9]{9}/);
                  const extractedPhone = namePhoneMatch ? namePhoneMatch[0] : '';
                  const effectivePhone = cleanPhone || extractedPhone;

                  const matchedUser = (usersList || []).find((u) => {
                    if (selectedOrder.userId && (u.id === selectedOrder.userId || u.username === selectedOrder.userId)) return true;
                    if (effectivePhone && u.phone && u.phone !== 'ثبت نشده') {
                      const uPhone = u.phone.replace(/[^0-9]/g, '');
                      if (uPhone && (uPhone === effectivePhone || uPhone.endsWith(effectivePhone) || effectivePhone.endsWith(uPhone))) return true;
                    }
                    if (selectedOrder.customerEmail && u.email && u.email.toLowerCase() === selectedOrder.customerEmail.toLowerCase()) return true;
                    if (selectedOrder.customerName && (u.username === selectedOrder.customerName || u.fullName === selectedOrder.customerName)) return true;
                    return false;
                  });

                  let usernameToShow = matchedUser?.username || (selectedOrder.userId && !selectedOrder.userId.startsWith('cust-09') && selectedOrder.userId !== 'guest' ? selectedOrder.userId : '');
                  let fullNameToShow = matchedUser?.fullName || (selectedOrder.customerName && !selectedOrder.customerName.includes('09') && selectedOrder.customerName !== 'خریدار جهش‌کالا' ? selectedOrder.customerName : '');

                  if (!usernameToShow && !fullNameToShow) {
                    usernameToShow = effectivePhone ? `کاربر (${effectivePhone})` : 'کاربر جهش‌کالا';
                  }

                  return (
                    <p>
                      <strong>نام کاربری خریدار:</strong>{' '}
                      <span className="font-bold font-mono text-amber-300 text-base">{usernameToShow || fullNameToShow}</span>
                      {fullNameToShow && fullNameToShow !== usernameToShow && (
                        <span className="mr-2 text-xs text-slate-300 font-sans">({fullNameToShow})</span>
                      )}
                    </p>
                  );
                })()}
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

                {/* اطلاعات درگاه پرداخت و کدهای رهگیری بانکی */}
                <div className="bg-cyan-950/40 border border-cyan-500/40 rounded-xl p-3 text-right space-y-2 text-xs">
                  <div className="flex items-center justify-between text-cyan-300 font-bold border-b border-cyan-800/50 pb-1.5">
                    <span className="flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
                      اطلاعات تراکنش و درگاه پرداخت:
                    </span>
                    <span className="text-[11px] bg-cyan-500/20 text-cyan-200 px-2 py-0.5 rounded border border-cyan-500/40 font-mono">
                      {selectedOrder.paymentGateway || 'زیبال (شاپرک)'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-slate-300 pt-1">
                    <div>
                      <span className="text-slate-400 font-sans block text-[10px]">کد پیگیری تراکنش زیبال (Track ID):</span>
                      <span className="text-cyan-300 font-bold">{selectedOrder.zibalTrackId || selectedOrder.trackingCode || 'ثبت نشده'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-sans block text-[10px]">شماره مرجع بانکی / شاپرک (Ref No):</span>
                      <span className="text-amber-300 font-bold">{selectedOrder.zibalRefNumber || selectedOrder.paymentRefId || selectedOrder.trackingCode || 'ثبت نشده'}</span>
                    </div>
                    {selectedOrder.cardNumber && (
                      <div>
                        <span className="text-slate-400 font-sans block text-[10px]">شماره کارت پرداخت‌کننده:</span>
                        <span className="text-emerald-300 font-bold">{selectedOrder.cardNumber}</span>
                      </div>
                    )}
                    {selectedOrder.paidAt && (
                      <div>
                        <span className="text-slate-400 font-sans block text-[10px]">زمان پرداخت شاپرک:</span>
                        <span className="text-slate-200 font-bold">{selectedOrder.paidAt}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <strong className="block mb-2 text-white text-xs">اقلام خریداری‌شده:</strong>
                  <div className="space-y-2">
                    {(selectedOrder.items || []).map((item, idx) => {
                      const cleanItemTitle = item.product?.title?.trim().toLowerCase();
                      const live = products?.find(
                        (p) =>
                          (p.id && item.product?.id && p.id === item.product.id) ||
                          (cleanItemTitle && p.title && p.title.trim().toLowerCase() === cleanItemTitle)
                      );
                      const prodImg = live?.image || item.product?.image;
                      const unitPrice = item.selectedPlan?.price !== undefined
                        ? Number(item.selectedPlan.price)
                        : (Number(item.product?.price) || 0);

                      return (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-black/40 p-3 rounded-xl border border-purple-800/40 text-xs gap-2"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-black/60 border border-purple-800/50 overflow-hidden flex items-center justify-center shrink-0 p-0.5">
                              {prodImg ? (
                                <img
                                  src={prodImg}
                                  alt={item.product?.title || 'محصول'}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <Package className="w-4 h-4 text-purple-400" />
                              )}
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-white block">
                                {item.product?.title || 'پکیج/محصول'}
                              </span>
                              {item.selectedPlan ? (
                                <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/40 text-[11px] font-bold text-amber-300">
                                  <span>پکیج/تعرفه:</span>
                                  <strong className="text-white">{item.selectedPlan.name}</strong>
                                  {item.selectedPlan.durationLabel && (
                                    <span className="text-slate-300 font-normal">({item.selectedPlan.durationLabel})</span>
                                  )}
                                </div>
                              ) : (
                                <span className="text-[10px] text-slate-400 block mt-0.5">
                                  خرید عادی محصول (تعداد: {item.quantity} عدد)
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="font-bold text-amber-300 font-mono text-sm self-end sm:self-center">
                            {formatPrice(unitPrice * item.quantity)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* نمایش لایسنس املاک جهش صادر شده برای مشتری */}
                {selectedOrder.amlakLicense && (
                  <div className="bg-amber-950/30 border border-amber-500/40 rounded-xl p-3 text-right space-y-2 text-xs">
                    <div className="flex items-center justify-between text-amber-400 font-bold">
                      <span>🏢 اطلاعات اشتراک و لایسنس سامانه املاک:</span>
                      <span className="font-mono text-[11px] bg-amber-500/20 px-2 py-0.5 rounded text-amber-300">
                        {selectedOrder.amlakLicense.licenseKey}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] bg-black/40 p-2 rounded-lg border border-amber-500/20 font-mono">
                      <div>
                        <span className="text-slate-400 font-sans block text-[10px]">نام کاربری اختصاصی:</span>
                        <span className="text-white font-bold">{selectedOrder.amlakLicense.username}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-sans block text-[10px]">رمز عبور اختصاصی:</span>
                        <span className="text-amber-300 font-bold">{selectedOrder.amlakLicense.password}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] pt-1">
                      <span className="text-slate-300">انقضا: {selectedOrder.amlakLicense.expiresAt}</span>
                      <a
                        href={`/amlak.html?u=${encodeURIComponent(selectedOrder.amlakLicense.username)}&p=${encodeURIComponent(selectedOrder.amlakLicense.password)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 font-bold underline flex items-center gap-1 text-[11px]"
                      >
                        ورود به سامانه با این اکانت ↗
                      </a>
                    </div>
                  </div>
                )}

                {/* نمایش لایسنس نرم‌افزار / هوش مصنوعی صادر شده برای مشتری */}
                {selectedOrder.appLicense && (() => {
                  const lic = selectedOrder.appLicense;
                  const { isExpired, daysRemaining, totalHoursRemaining, formattedExpiryFa } = checkLicenseStatus(lic);
                  return (
                    <div className="bg-purple-950/40 border border-amber-400/60 rounded-xl p-3 text-right space-y-2 text-xs">
                      <div className="flex items-center justify-between text-amber-300 font-bold">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>⚡ اطلاعات لایسنس نرم‌افزار ({lic.appName || lic.productTitle}):</span>
                        </span>
                        <span className="font-mono text-[11px] bg-amber-500/20 px-2 py-0.5 rounded text-amber-300 border border-amber-500/30">
                          {lic.licenseKey}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] bg-black/50 p-2 rounded-lg border border-purple-800/40 font-mono">
                        <div>
                          <span className="text-slate-400 font-sans block text-[10px]">نام کاربری (Username):</span>
                          <span className="text-white font-bold">{lic.username}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-sans block text-[10px]">رمز عبور (Password):</span>
                          <span className="text-amber-300 font-bold">{lic.password}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] pt-1 border-t border-purple-900/40">
                        <span className="text-slate-300">
                          مدت: <strong className="text-white">{lic.days === 1 ? '۲۴ ساعت کامل (۱ روز)' : `${lic.days} روز`}</strong> • انقضا: <strong className="text-amber-300">{formattedExpiryFa}</strong>
                        </span>
                        <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${isExpired ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'}`}>
                          {isExpired ? 'منقضی شده' : totalHoursRemaining <= 24 ? `${totalHoursRemaining} ساعت باقیمانده` : `${daysRemaining} روز باقیمانده`}
                        </span>
                      </div>
                      {lic.downloadUrl && (
                        <div className="pt-1">
                          <a
                            href={lic.downloadUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] text-emerald-300 hover:text-emerald-200 font-bold bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-lg"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>دانلود فایل نصبی ({lic.appName || lic.productTitle})</span>
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              <div className="flex items-center gap-2 pt-2">
                {onDeleteOrder && currentUser?.role !== 'operator' && (
                  <button
                    onClick={() => {
                      onDeleteOrder(selectedOrder.id);
                      setSelectedOrder(null);
                    }}
                    className="px-4 py-2.5 bg-rose-950/70 hover:bg-rose-900 border border-rose-700/60 text-rose-200 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors"
                    title="حذف کامل این سفارش از سرور و دیتابیس"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                    حذف سفارش
                  </button>
                )}
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="flex-1 py-2.5 bg-purple-700 hover:bg-purple-600 text-white rounded-xl font-bold text-xs transition-colors"
                >
                  بستن پنجره
                </button>
              </div>
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
                setIsUploadingImage(true);
                try {
                  const uploadedUrl = await uploadProductImage(croppedBase64, `product_${Date.now()}.webp`);
                  setNewImage(uploadedUrl || croppedBase64);
                } catch {
                  setNewImage(croppedBase64);
                } finally {
                  setIsUploadingImage(false);
                }
              }
              setCropperModal((prev) => ({ ...prev, isOpen: false }));
            }}
          />
        )}

        {/* MODAL: ADD / EDIT DASHBOARD TOOL DIALOG */}
        {(isCreatingNewTool || editingTool) && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
            <div className="relative w-full max-w-3xl bg-[#120a2e] border-2 border-cyan-500/70 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-right">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-purple-900/80 bg-[#190d3a] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-white">
                      {editingTool ? `ویرایش طرح: ${editingTool.title}` : 'افزودن طرح و ابزار جدید به داشبورد تکنولوژی'}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      تنظیم مستقیم لینک هدایت هنگام کلیک، تصویر، تگ، متن دکمه و وضعیت نمایش
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCancelToolForm}
                  className="w-8 h-8 rounded-full bg-purple-950 hover:bg-purple-900 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body - Scrollable with custom scrollbar */}
              <div className="p-5 sm:p-6 overflow-y-auto min-h-0 flex-1 space-y-4 modal-scrollbar text-right">
                {/* Notice banner */}
                <div className="p-3 bg-cyan-950/40 border border-cyan-800/60 rounded-xl text-xs text-cyan-200 flex items-start gap-2">
                  <Link2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>نکته مهم لینک مستقیم:</strong> هر لینکی که در این قسمت وارد نمایید، به محض کلیک کاربر روی کارت یا دکمه در صفحه داشبورد تکنولوژی جهش، مستقیماً و بدون معطلی باز خواهد شد.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Title */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <span>عنوان کامل طرح یا ابزار</span>
                      <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={toolTitle}
                      onChange={(e) => setToolTitle(e.target.value)}
                      placeholder="مثلاً: سامانه هوشمند تحلیل املاک و مستغلات"
                      className="w-full bg-[#0a0518] border border-purple-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  {/* Direct Link */}
                  <div className="space-y-1.5 md:col-span-2 p-3.5 bg-cyan-950/30 border border-cyan-500/40 rounded-xl">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black text-cyan-300 flex items-center gap-1.5">
                        <Link2 className="w-4 h-4 text-cyan-400" />
                        <span>لینک مستقیم هنگام کلیک (Direct Link):</span>
                      </label>
                      <span className="text-[10px] text-cyan-400/80">هدایت آنی کاربر با کلیک روی کارت یا دکمه</span>
                    </div>
                    <input
                      type="text"
                      value={toolLink}
                      onChange={(e) => setToolLink(e.target.value)}
                      placeholder="مثلاً: /amlak.html یا /hwsh-msnway یا https://yourlink.com"
                      dir="ltr"
                      className="w-full bg-[#080415] border-2 border-cyan-500/60 rounded-xl px-3.5 py-2.5 text-xs font-mono text-cyan-200 placeholder-slate-500 focus:outline-none focus:border-cyan-300"
                    />

                    {/* Quick Link Helpers */}
                    <div className="flex items-center gap-1.5 pt-1 flex-wrap text-[11px]">
                      <span className="text-slate-400 text-[10px]">لینک‌های سریع:</span>
                      <button
                        type="button"
                        onClick={() => setToolLink('/amlak.html')}
                        className="px-2 py-0.5 rounded bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700/50 font-mono text-[10px]"
                      >
                        /amlak.html
                      </button>
                      <button
                        type="button"
                        onClick={() => setToolLink('/hwsh-msnway')}
                        className="px-2 py-0.5 rounded bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700/50 font-mono text-[10px]"
                      >
                        /hwsh-msnway
                      </button>
                      <button
                        type="button"
                        onClick={() => setToolLink('/jaheshkala')}
                        className="px-2 py-0.5 rounded bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700/50 font-mono text-[10px]"
                      >
                        /jaheshkala
                      </button>
                      <button
                        type="button"
                        onClick={() => setToolLink('/akhbar')}
                        className="px-2 py-0.5 rounded bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700/50 font-mono text-[10px]"
                      >
                        /akhbar
                      </button>
                      <button
                        type="button"
                        onClick={() => setToolLink('https://t.me/+7eeuF5ZMpFRmYzg8')}
                        className="px-2 py-0.5 rounded bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700/50 font-mono text-[10px]"
                      >
                        کانال تلگرام جهش
                      </button>
                    </div>
                  </div>

                  {/* Tag / Category */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">تگ / دسته‌بندی موضوعی</label>
                    <input
                      type="text"
                      value={toolTag}
                      onChange={(e) => setToolTag(e.target.value)}
                      placeholder="مثلاً: پردازش ابری و داده‌کاوی"
                      className="w-full bg-[#0a0518] border border-purple-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  {/* Button Text */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">متن دکمه هدایت</label>
                    <input
                      type="text"
                      value={toolBtnText}
                      onChange={(e) => setToolBtnText(e.target.value)}
                      placeholder="مثلاً: ورود به محیط سامانه"
                      className="w-full bg-[#0a0518] border border-purple-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  {/* Media Badge */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">نشان هدر کارت (Media Badge)</label>
                    <input
                      type="text"
                      value={toolMediaBadge}
                      onChange={(e) => setToolMediaBadge(e.target.value)}
                      placeholder="مثلاً: 🚀 LAUNCH_BIG_DATA"
                      className="w-full bg-[#0a0518] border border-purple-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  {/* System Code / Version */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">کد سیستمی یا نسخه</label>
                    <input
                      type="text"
                      value={toolCodeVer}
                      onChange={(e) => setToolCodeVer(e.target.value)}
                      placeholder="مثلاً: JHS_BIG_DATA_v1.0"
                      dir="ltr"
                      className="w-full bg-[#0a0518] border border-purple-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-xs font-bold text-slate-300">توضیحات و عملکرد طرح</label>
                    <textarea
                      rows={3}
                      value={toolDesc}
                      onChange={(e) => setToolDesc(e.target.value)}
                      placeholder="شرح مختصری از امکانات و کاربرد این طرح در داشبورد تکنولوژی..."
                      className="w-full bg-[#0a0518] border border-purple-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-y"
                    />
                  </div>

                  {/* Custom Image or Sticker */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-xs font-bold text-slate-300">تصویر یا آیکون طرح</label>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <input
                        type="text"
                        value={toolImage}
                        onChange={(e) => setToolImage(e.target.value)}
                        placeholder="آدرس تصویر (URL) یا انتخاب فایل از کامپیوتر"
                        dir="ltr"
                        className="flex-1 w-full bg-[#0a0518] border border-purple-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                      <label className="px-4 py-2.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-700 text-purple-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0">
                        <Upload className="w-4 h-4" />
                        <span>{toolUploadingImage ? 'در حال آپلود...' : 'انتخاب تصویر'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleToolImageFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {toolImage && (
                      <div className="mt-2 flex items-center gap-3 p-2 bg-black/40 rounded-xl border border-purple-900/40 w-fit">
                        <img
                          src={toolImage}
                          alt="Preview"
                          className="w-12 h-12 object-contain rounded-lg border border-purple-700/50 bg-[#0f0824]"
                        />
                        <span className="text-[11px] text-slate-300">پیش‌نمایش تصویر تنظیم شده</span>
                        <button
                          type="button"
                          onClick={() => setToolImage('')}
                          className="text-rose-400 hover:text-rose-300 text-xs px-1.5"
                        >
                          حذف تصویر
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Toggle Options */}
                  <div className="md:col-span-2 flex items-center gap-6 pt-2 border-t border-purple-900/40">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={toolIsActive}
                        onChange={(e) => setToolIsActive(e.target.checked)}
                        className="rounded border-purple-700 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-xs text-white font-bold">نمایش فعال در صفحه داشبورد</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={toolCardClickable}
                        onChange={(e) => setToolCardClickable(e.target.checked)}
                        className="rounded border-purple-700 text-cyan-500 focus:ring-cyan-500"
                      />
                      <span className="text-xs text-white font-bold">هدایت به لینک با کلیک بر روی تمام سطح کارت</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Modal Footer - Fixed */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-t border-purple-900/80 bg-[#160d34] shrink-0">
                <button
                  type="button"
                  onClick={handleCancelToolForm}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  انصراف
                </button>
                <button
                  type="button"
                  onClick={handleSaveToolSubmit}
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black text-xs rounded-xl shadow-lg shadow-cyan-900/50 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>{editingTool ? 'ذخیره و اعمال تغییرات طرح' : 'ثبت طرح در داشبورد'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Modal: Grant Licensed Product to Registered User (Free)    */}
        {/* ========================================================= */}
        {isGrantLicenseModalOpen && (
          <div
            className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in"
            dir="rtl"
            onClick={(e) => {
              if (e.target === e.currentTarget && !grantIsSubmitting) {
                setIsGrantLicenseModalOpen(false);
              }
            }}
          >
            <div
              className="bg-[#100826] border-2 border-amber-400/80 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-amber-500/20 text-white flex flex-col max-h-[92vh] animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#230f45] via-[#2f135e] to-[#1a0b33] p-4 sm:p-5 border-b border-amber-400/40 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shrink-0">
                    <Key className="w-5 h-5 fill-slate-950" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-amber-300 leading-tight flex items-center gap-2">
                      <span>اعطای لایسنس و اشتراک رایگان به کاربر</span>
                      <span className="text-[10px] bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full font-mono font-bold">۱۰۰٪ رایگان</span>
                    </h3>
                    <p className="text-[11px] text-purple-200/90 mt-0.5">
                      ثبت آنی و خودکار در بخش پیگیری سفارشات کاربر با اعتبار و کلید لایسنس معتبر
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => !grantIsSubmitting && setIsGrantLicenseModalOpen(false)}
                  disabled={grantIsSubmitting}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50"
                  title="بستن"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-[#130b28] to-[#0c0617] text-xs">
                {/* Step 1: Target User */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>۱. کاربر دریافت‌کننده لایسنس (مشتری ثبت‌نام‌شده):</span>
                  </label>

                  {/* User Search Input */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="جستجوی کاربر بر اساس نام، موبایل یا نام کاربری..."
                      value={grantUserSearchTerm}
                      onChange={(e) => setGrantUserSearchTerm(e.target.value)}
                      className="w-full bg-[#180f33] border border-purple-800/70 rounded-xl pr-9 pl-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* User Selector Dropdown / Selected User Card */}
                  <div className="max-h-36 overflow-y-auto rounded-xl border border-purple-900/60 bg-[#120926] divide-y divide-purple-900/40">
                    {usersList
                      .filter((u) => {
                        if (!grantUserSearchTerm.trim()) return true;
                        const term = grantUserSearchTerm.toLowerCase();
                        return (
                          u.fullName?.toLowerCase().includes(term) ||
                          u.username?.toLowerCase().includes(term) ||
                          u.phone?.includes(term) ||
                          u.email?.toLowerCase().includes(term)
                        );
                      })
                      .map((u) => {
                        const isSelected = grantSelectedUser?.id === u.id || grantSelectedUser?.username === u.username;
                        return (
                          <div
                            key={u.id}
                            onClick={() => setGrantSelectedUser(u)}
                            className={`p-2.5 flex items-center justify-between cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-amber-500/20 text-white font-bold border-r-4 border-amber-400'
                                : 'hover:bg-purple-900/30 text-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-7 h-7 rounded-full bg-purple-950 border border-purple-700/60 flex items-center justify-center text-amber-300 text-[11px] font-bold">
                                {u.fullName ? u.fullName.charAt(0) : 'U'}
                              </span>
                              <div>
                                <div className="text-white font-bold">{u.fullName || u.username}</div>
                                <div className="text-[10px] text-slate-400 font-mono" dir="ltr">
                                  @{u.username} • {u.phone}
                                </div>
                              </div>
                            </div>
                            {isSelected && (
                              <span className="text-[10px] bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full font-black flex items-center gap-1">
                                <Check className="w-3 h-3" />
                                انتخاب شده
                              </span>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Step 2: Licensed Product Selection */}
                <div className="space-y-2 pt-2 border-t border-purple-900/50">
                  <label className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-amber-400" />
                    <span>۲. انتخاب محصول یا نرم‌افزار جهت صدور لایسنس:</span>
                  </label>

                  {/* Product Search */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="جستجوی محصول در فروشگاه..."
                      value={grantProductSearchTerm}
                      onChange={(e) => setGrantProductSearchTerm(e.target.value)}
                      className="w-full bg-[#180f33] border border-purple-800/70 rounded-xl pr-9 pl-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="max-h-44 overflow-y-auto rounded-xl border border-purple-900/60 bg-[#120926] divide-y divide-purple-900/40">
                    {products
                      .filter((p) => {
                        if (!grantProductSearchTerm.trim()) return true;
                        const term = grantProductSearchTerm.toLowerCase();
                        return (
                          p.title?.toLowerCase().includes(term) ||
                          p.category?.toLowerCase().includes(term) ||
                          p.aiAppName?.toLowerCase().includes(term)
                        );
                      })
                      .map((prod) => {
                        const isSelected = grantSelectedProduct?.id === prod.id;
                        const isSubOrApp = prod.isSubscription || prod.category === 'اشتراک نرم‌افزار' || Boolean(prod.aiAppName) || prod.id === 'pkg-amlak-jahesh';
                        return (
                          <div
                            key={prod.id}
                            onClick={() => {
                              setGrantSelectedProduct(prod);
                              setGrantSelectedPlan(prod.subscriptionPlans?.[0] || null);
                            }}
                            className={`p-2.5 flex items-center justify-between cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-amber-500/20 text-white font-bold border-r-4 border-amber-400'
                                : 'hover:bg-purple-900/30 text-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              {prod.image ? (
                                <img
                                  src={prod.image}
                                  alt={prod.title}
                                  className="w-8 h-8 rounded-lg object-cover border border-purple-700/50 shrink-0"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = getFallbackProductImage();
                                  }}
                                />
                              ) : (
                                <div className="w-8 h-8 rounded-lg bg-purple-900 flex items-center justify-center text-amber-300 shrink-0">
                                  ⚡
                                </div>
                              )}
                              <div>
                                <div className="text-white font-bold text-xs">{prod.title}</div>
                                <div className="text-[10px] text-purple-300/80 flex items-center gap-1.5 mt-0.5">
                                  <span>{prod.category}</span>
                                  {isSubOrApp && (
                                    <span className="text-[9px] bg-purple-900/90 text-amber-300 px-1.5 py-0.2 rounded border border-purple-700/60 font-bold">
                                      لایسنس نرم‌افزار
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-[10px] text-amber-400 font-mono font-bold">رایگان برای کاربر</span>
                              {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  {/* Sub-plan selection if product has custom plans */}
                  {grantSelectedProduct?.subscriptionPlans && grantSelectedProduct.subscriptionPlans.length > 0 && (
                    <div className="bg-[#180f33] p-3 rounded-xl border border-purple-800/80 space-y-2 mt-2">
                      <span className="text-[11px] font-bold text-amber-200 block">
                        پلن انتخابی این محصول (اختیاری):
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {grantSelectedProduct.subscriptionPlans.map((pl) => {
                          const isPlSelected = grantSelectedPlan?.id === pl.id;
                          return (
                            <button
                              key={pl.id}
                              type="button"
                              onClick={() => {
                                setGrantSelectedPlan(pl);
                                if (pl.durationDays) {
                                  setGrantDurationDays(pl.durationDays);
                                  setGrantCustomDaysInput(String(pl.durationDays));
                                }
                              }}
                              className={`p-2 rounded-lg border text-right transition-all cursor-pointer ${
                                isPlSelected
                                  ? 'bg-amber-500/25 border-amber-400 text-white font-bold ring-1 ring-amber-400'
                                  : 'bg-black/30 border-purple-900 text-slate-300 hover:border-purple-600'
                              }`}
                            >
                              <div className="font-bold text-xs">{pl.name}</div>
                              <div className="text-[10px] text-amber-300 mt-0.5">
                                {pl.durationDays ? `${pl.durationDays} روزه` : pl.durationLabel}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Step 3: Duration Selection */}
                <div className="space-y-2 pt-2 border-t border-purple-900/50">
                  <label className="text-xs font-black text-amber-300 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span>۳. تعیین مدت زمان اشتراک و انقضای لایسنس:</span>
                    </span>
                    <span className="text-[11px] text-amber-300 font-mono font-bold bg-amber-400/15 px-2 py-0.5 rounded-lg border border-amber-400/30">
                      {grantDurationDays === 1 ? '⚡ ۲۴ ساعت کامل' : grantDurationDays >= 3650 ? 'دائمی (مادام‌العمر)' : `${grantDurationDays} روز`}
                    </span>
                  </label>

                  {/* Preset Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { label: '⚡ ۱ روزه (۲۴ ساعت کامل)', days: 1, highlight: true },
                      { label: '۷ روزه (۱ هفته)', days: 7 },
                      { label: '۳۰ روزه (۱ ماه)', days: 30 },
                      { label: '۹۰ روزه (۳ ماه)', days: 90 },
                      { label: '۱۸۰ روزه (۶ ماه)', days: 180 },
                      { label: '۳۶۵ روزه (۱ سال)', days: 365 },
                      { label: '👑 دائمی / مادام‌العمر', days: 3650, gold: true },
                    ].map((btn) => {
                      const isSel = grantDurationDays === btn.days;
                      return (
                        <button
                          key={btn.days}
                          type="button"
                          onClick={() => {
                            setGrantDurationDays(btn.days);
                            setGrantCustomDaysInput(String(btn.days));
                          }}
                          className={`p-2 rounded-xl border text-center transition-all cursor-pointer font-bold text-xs ${
                            isSel
                              ? btn.gold
                                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-300 shadow-md font-black ring-2 ring-amber-300'
                                : 'bg-gradient-to-r from-amber-500/30 to-purple-600/40 border-amber-400 text-white shadow-md ring-2 ring-amber-400'
                              : 'bg-[#180f33] border-purple-900/60 text-slate-300 hover:border-purple-600'
                          }`}
                        >
                          {btn.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Days Input */}
                  <div className="flex items-center justify-between gap-3 bg-[#180f33] p-2.5 rounded-xl border border-purple-800/60 mt-1">
                    <span className="text-slate-300 text-xs font-bold">یا وارد کردن تعداد روزهای دلخواه:</span>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="number"
                        min={1}
                        max={3650}
                        value={grantCustomDaysInput}
                        onChange={(e) => {
                          setGrantCustomDaysInput(e.target.value);
                          const val = parseInt(e.target.value, 10);
                          if (!isNaN(val) && val >= 1) {
                            setGrantDurationDays(val);
                          }
                        }}
                        className="w-20 bg-black/60 border border-amber-400/80 rounded-lg px-2 py-1 text-center font-mono font-bold text-amber-300 text-xs focus:outline-none"
                      />
                      <span className="text-slate-400 text-xs">روز</span>
                    </div>
                  </div>

                  {/* Guaranteed 24 Hours Info Banner */}
                  {grantDurationDays === 1 && (
                    <div className="bg-emerald-950/50 border border-emerald-500/50 p-2.5 rounded-xl text-emerald-300 text-[11px] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        <strong>محاسبه تضمینی ۲۴ ساعته:</strong> لایسنس ۱ روزه دقیقاً به مدت ۲۴ ساعت کامل (۸۶,۴۰۰ ثانیه) از لحظه صدور اعتبار دارد و به هیچ عنوان زودتر منقضی نخواهد شد.
                      </span>
                    </div>
                  )}
                </div>

                {/* Step 4: Notes */}
                <div className="space-y-1.5 pt-2 border-t border-purple-900/50">
                  <label className="text-xs font-bold text-slate-300 block">
                    ۴. یادداشت مدیریت یا دلیل اعطا (اختیاری):
                  </label>
                  <input
                    type="text"
                    value={grantAdminNotes}
                    onChange={(e) => setGrantAdminNotes(e.target.value)}
                    placeholder="مثلاً: اعطای دسترسی رایگان به مناسبت همکاری / تست محصول"
                    className="w-full bg-[#180f33] border border-purple-800/70 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Live Preview Card */}
                {grantSelectedUser && grantSelectedProduct && (() => {
                  const safeDays = Math.max(1, parseSubscriptionDays(grantDurationDays || grantCustomDaysInput, 1));
                  const previewExpiry = new Date(Date.now() + safeDays * 24 * 60 * 60 * 1000);
                  let previewExpiryFa = '';
                  try {
                    previewExpiryFa = previewExpiry.toLocaleDateString('fa-IR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    });
                  } catch {
                    previewExpiryFa = previewExpiry.toISOString();
                  }

                  return (
                    <div className="bg-gradient-to-r from-amber-950/30 via-[#1b0f38] to-purple-950/40 p-3.5 rounded-2xl border border-amber-400/50 space-y-2">
                      <div className="text-[11px] font-black text-amber-300 flex items-center justify-between">
                        <span>خلاصه سفارش و لایسنس قبل از ثبت:</span>
                        <span className="text-[10px] bg-emerald-900/80 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40 font-bold">
                          ثبت مستقیم در حساب مشتری
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
                        <div>
                          کاربر: <strong className="text-white">{grantSelectedUser.fullName || grantSelectedUser.username}</strong> ({grantSelectedUser.phone})
                        </div>
                        <div>
                          محصول: <strong className="text-amber-300">{grantSelectedProduct.title}</strong>
                        </div>
                        <div>
                          مدت اعتبار: <strong className="text-white font-mono">{safeDays === 1 ? '۲۴ ساعت کامل (۱ روز)' : `${safeDays} روز`}</strong>
                        </div>
                        <div>
                          تاریخ انقضا: <strong className="text-emerald-300 font-mono">{previewExpiryFa}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-t border-purple-900/80 bg-[#160d34] shrink-0">
                <button
                  type="button"
                  onClick={() => setIsGrantLicenseModalOpen(false)}
                  disabled={grantIsSubmitting}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-all cursor-pointer disabled:opacity-50"
                >
                  انصراف
                </button>

                <button
                  type="button"
                  onClick={handleExecuteGrantLicense}
                  disabled={grantIsSubmitting || !grantSelectedUser || !grantSelectedProduct}
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {grantIsSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>در حال صدور لایسنس و ثبت سفارش...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 fill-slate-950" />
                      <span>⚡ صدور آنی لایسنس و ثبت رایگان در سفارشات کاربر</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Modal: Grant Success & Celebration Dialog                 */}
        {/* ========================================================= */}
        {grantSuccessDialog && grantSuccessDialog.isOpen && (
          <div
            className="fixed inset-0 z-[140] flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md animate-in fade-in"
            dir="rtl"
          >
            <div
              className="bg-[#12082b] border-2 border-emerald-400/90 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl shadow-emerald-500/25 text-white flex flex-col max-h-[92vh] animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-950/80 via-teal-950/80 to-[#12082b] p-5 border-b border-emerald-500/40 text-center relative">
                <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-slate-950 mx-auto mb-2 shadow-lg shadow-emerald-500/30">
                  <Sparkles className="w-8 h-8 fill-slate-950" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-emerald-300">
                  🎉 لایسنس با موفقیت صادر و فعال شد!
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  سفارش ۱۰۰٪ رایگان در حساب «{grantSuccessDialog.user.fullName || grantSuccessDialog.user.username}» ثبت گردید.
                </p>
                <button
                  onClick={() => setGrantSuccessDialog(null)}
                  className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 overflow-y-auto space-y-3.5 bg-gradient-to-b from-[#140b2e] to-[#0c0617] text-xs">
                {/* Product & Duration */}
                <div className="bg-black/40 p-3 rounded-2xl border border-purple-800/50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold">محصول اختصاص‌یافته:</span>
                    <span className="font-bold text-amber-300 text-xs sm:text-sm">{grantSuccessDialog.product.title}</span>
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 block font-bold">مدت زمان اعتبار:</span>
                    <span className="font-black text-emerald-300 font-mono text-xs">
                      {grantSuccessDialog.days === 1 ? '۲۴ ساعت کامل' : grantSuccessDialog.days >= 3650 ? 'دائمی VIP' : `${grantSuccessDialog.days} روز`}
                    </span>
                  </div>
                </div>

                {/* Order Details */}
                <div className="bg-purple-950/30 p-3 rounded-2xl border border-purple-800/50 flex items-center justify-between text-[11px]">
                  <div>
                    <span className="text-slate-400">شناسه سفارش: </span>
                    <strong className="text-white font-mono">{grantSuccessDialog.order.id}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">کد پیگیری: </span>
                    <strong className="text-amber-300 font-mono">{grantSuccessDialog.order.trackingCode}</strong>
                  </div>
                </div>

                {/* Credentials */}
                {grantSuccessDialog.license && (
                  <div className="space-y-2 bg-[#170e33] p-3.5 rounded-2xl border border-amber-400/50">
                    <span className="text-xs font-black text-amber-300 block mb-1">
                      مشخصات ورود به اپلیکیشن و لایسنس نرم‌افزار:
                    </span>

                    {/* Username */}
                    <div className="flex items-center justify-between bg-black/50 p-2.5 rounded-xl border border-purple-800/60">
                      <div>
                        <span className="text-[10px] text-slate-400 block">نام کاربری ورود (Username):</span>
                        <span className="font-mono font-bold text-amber-300 text-xs">
                          {grantSuccessDialog.license.username}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(grantSuccessDialog.license.username);
                          setGrantCopiedField('u');
                          setTimeout(() => setGrantCopiedField(null), 2000);
                        }}
                        className="px-2.5 py-1 bg-purple-800 hover:bg-purple-700 text-white rounded-lg text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{grantCopiedField === 'u' ? 'کپی شد!' : 'کپی'}</span>
                      </button>
                    </div>

                    {/* Password */}
                    <div className="flex items-center justify-between bg-black/50 p-2.5 rounded-xl border border-purple-800/60">
                      <div>
                        <span className="text-[10px] text-slate-400 block">رمز عبور ورود (Password):</span>
                        <span className="font-mono font-bold text-emerald-300 text-xs tracking-wider">
                          {grantSuccessDialog.license.password}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(grantSuccessDialog.license.password);
                          setGrantCopiedField('p');
                          setTimeout(() => setGrantCopiedField(null), 2000);
                        }}
                        className="px-2.5 py-1 bg-purple-800 hover:bg-purple-700 text-white rounded-lg text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{grantCopiedField === 'p' ? 'کپی شد!' : 'کپی'}</span>
                      </button>
                    </div>

                    {/* License Key */}
                    <div className="flex items-center justify-between bg-black/50 p-2.5 rounded-xl border border-purple-800/60">
                      <div>
                        <span className="text-[10px] text-slate-400 block">کلید لایسنس (License Key):</span>
                        <span className="font-mono font-bold text-cyan-300 text-xs">
                          {grantSuccessDialog.license.licenseKey}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(grantSuccessDialog.license.licenseKey);
                          setGrantCopiedField('k');
                          setTimeout(() => setGrantCopiedField(null), 2000);
                        }}
                        className="px-2.5 py-1 bg-purple-800 hover:bg-purple-700 text-white rounded-lg text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{grantCopiedField === 'k' ? 'کپی شد!' : 'کپی'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Expiry Timestamp */}
                {grantSuccessDialog.license?.expiresAt && (
                  <div className="bg-black/30 p-2.5 rounded-xl border border-purple-900/40 text-[11px] text-slate-300 flex items-center justify-between">
                    <span>تاریخ دقیق پایان اشتراک:</span>
                    <strong className="text-emerald-300 font-mono">
                      {new Date(grantSuccessDialog.license.expiresAt).toLocaleDateString('fa-IR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </strong>
                  </div>
                )}

                {/* Download URL button */}
                {(grantSuccessDialog.license?.downloadUrl || grantSuccessDialog.product.downloadUrl || (grantSuccessDialog.product as any)?.appDownloadUrl) && (
                  <a
                    href={grantSuccessDialog.license?.downloadUrl || grantSuccessDialog.product.downloadUrl || (grantSuccessDialog.product as any)?.appDownloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer no-underline"
                  >
                    <Download className="w-4 h-4" />
                    <span>دانلود فایل نصبی اپلیکیشن ({grantSuccessDialog.product.title})</span>
                  </a>
                )}

                <div className="bg-emerald-950/40 border border-emerald-500/40 p-2.5 rounded-xl text-emerald-300 text-[11px] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    این سفارش بلافاصله در پنل کاربری خریدار (بخش پیگیری سفارشات) قابل مشاهده است و لایسنس در تمامی دستگاه‌های او فعال می‌باشد.
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-purple-900/80 bg-[#160d34] flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setGrantSuccessDialog(null)}
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  متوجه شدم و بستن
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
