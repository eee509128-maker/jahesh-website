import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { X, Check, RotateCw, ZoomIn, ZoomOut, Maximize2, Sparkles, Sliders } from 'lucide-react';
import { getCroppedImg } from '../lib/cropImage';

interface ImageCropperModalProps {
  imageSrc: string;
  initialAspect?: number; // e.g. 21/9 for banners, 1 for products
  targetType?: 'banner' | 'product';
  onCropComplete: (croppedBase64: string) => void;
  onClose: () => void;
}

export const ImageCropperModal: React.FC<ImageCropperModalProps> = ({
  imageSrc,
  initialAspect = 1,
  targetType = 'product',
  onCropComplete,
  onClose,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(initialAspect);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onCropCompleteLocal = useCallback((_croppedArea: any, pixels: any) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleSave = async () => {
    if (!croppedAreaPixels) return;
    try {
      setIsProcessing(true);
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
      onCropComplete(croppedImage);
    } catch (e) {
      console.error(e);
      alert('خطا در پردازش و برش تصویر. لطفاً مجدداً تلاش کنید.');
    } finally {
      setIsProcessing(false);
    }
  };

  const rotateImage = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-[#0f0924] border border-purple-800/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-purple-800/50 bg-[#160b33]">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs sm:text-sm font-black text-white">
              تنظیم موقعیت و برش دقیق تصویر ({targetType === 'banner' ? 'بنر و اسلایدر' : 'محصول'})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 flex items-center justify-center transition-colors cursor-pointer"
            title="بستن"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cropper Container */}
        <div className="relative w-full h-[45vh] sm:h-[52vh] bg-[#070314] overflow-hidden select-none">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={aspect}
            onCropChange={setCrop}
            onCropComplete={onCropCompleteLocal}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
            showGrid={true}
            style={{
              containerStyle: { background: '#080414' },
              cropAreaStyle: {
                border: '2px solid rgba(251, 191, 36, 0.9)',
                boxShadow: '0 0 0 9999em rgba(0, 0, 0, 0.75)',
                borderRadius: targetType === 'banner' ? '12px' : '8px',
              },
            }}
          />
          
          <div className="absolute top-3 right-3 pointer-events-none bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-[10px] text-amber-300 font-bold">
            عکس را با لمس یا ماوس بکشید و زوم کنید
          </div>
        </div>

        {/* Aspect Ratio Presets & Controls */}
        <div className="p-4 sm:p-5 space-y-4 bg-[#140b2e] border-t border-purple-900/50">
          
          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="text-[11px] text-slate-300 font-bold shrink-0 ml-1">نسبت کادر:</span>
              
              <button
                type="button"
                onClick={() => setAspect(1)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  aspect === 1
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                    : 'bg-purple-950/80 text-purple-200 hover:bg-purple-900 border border-purple-800/60'
                }`}
              >
                ۱:۱ (مربع کالا)
              </button>

              <button
                type="button"
                onClick={() => setAspect(21 / 9)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  aspect && Math.abs(aspect - 21 / 9) < 0.05
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                    : 'bg-purple-950/80 text-purple-200 hover:bg-purple-900 border border-purple-800/60'
                }`}
              >
                ۲۱:۹ (بنر عریض)
              </button>

              <button
                type="button"
                onClick={() => setAspect(16 / 9)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  aspect && Math.abs(aspect - 16 / 9) < 0.05
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                    : 'bg-purple-950/80 text-purple-200 hover:bg-purple-900 border border-purple-800/60'
                }`}
              >
                ۱۶:۹ (واید)
              </button>

              <button
                type="button"
                onClick={() => setAspect(undefined)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  aspect === undefined
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                    : 'bg-purple-950/80 text-purple-200 hover:bg-purple-900 border border-purple-800/60'
                }`}
              >
                کادر آزاد
              </button>
            </div>

            {/* Rotate Button */}
            <button
              type="button"
              onClick={rotateImage}
              className="px-3 py-1.5 rounded-lg bg-purple-900/60 hover:bg-purple-800 border border-purple-700/60 text-purple-200 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="چرخش ۹۰ درجه تصویر"
            >
              <RotateCw className="w-3.5 h-3.5 text-amber-400" />
              <span>چرخش</span>
            </button>
          </div>

          {/* Zoom Slider */}
          <div className="flex items-center gap-3 bg-[#0d0720] p-2.5 rounded-xl border border-purple-800/40">
            <ZoomOut className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.05}
              aria-label="Zoom"
              onChange={(e) => setZoom(Number(e.target.value))}
              className="flex-1 h-2 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <ZoomIn className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-[11px] font-mono text-amber-300 min-w-[36px] text-left" dir="ltr">
              {zoom.toFixed(1)}x
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={() => {
                setCrop({ x: 0, y: 0 });
                setZoom(1);
                setRotation(0);
              }}
              className="text-[11px] text-purple-300 hover:text-white underline cursor-pointer"
            >
              بازنشانی به حالت اول
            </button>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 hover:text-white text-xs font-bold transition-colors border border-white/10 cursor-pointer"
              >
                انصراف
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={isProcessing}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 text-xs font-black shadow-lg shadow-amber-500/25 transition-all disabled:opacity-50 cursor-pointer"
              >
                {isProcessing ? 'در حال اعمال برش...' : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>تایید و برش نهایی</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
