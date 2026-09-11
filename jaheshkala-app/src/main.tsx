import React, { Component, ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('JaheshKala Uncaught Error:', error, errorInfo);
    // Auto-clean corrupted products/cart if they caused a fatal render crash
    try {
      const errorStr = error?.toString() || '';
      if (errorStr.includes('toLocaleString') || errorStr.includes('undefined') || errorStr.includes('null')) {
        localStorage.removeItem('jahesh_products');
        localStorage.removeItem('jahesh_cart');
      }
    } catch {}
  }

  handleReset = () => {
    try {
      localStorage.removeItem('jahesh_cart');
      localStorage.removeItem('jahesh_theme');
      localStorage.removeItem('jahesh_products');
      localStorage.removeItem('jahesh_orders');
      localStorage.removeItem('jahesh_banners');
      localStorage.removeItem('jahesh_coupons');
      sessionStorage.clear();
    } catch {
      // ignore
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090714] text-white flex flex-col items-center justify-center p-6 text-center font-['Vazirmatn',sans-serif]">
          <div className="max-w-md w-full bg-purple-950/40 border border-purple-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
            <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ⚠️
            </div>
            <h1 className="text-xl font-black text-amber-400 mb-2">فروشگاه جهش کالا</h1>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              متأسفانه خطایی در بارگذاری بخش رخ داد. با فشردن دکمه زیر صفحه را تازه‌سازی کنید:
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold rounded-xl shadow-lg transition"
              >
                تلاش مجدد و بارگذاری صفحه
              </button>
              <button
                onClick={this.handleReset}
                className="w-full py-2 px-4 bg-black/40 hover:bg-black/60 text-slate-400 hover:text-slate-200 text-xs font-medium rounded-xl border border-purple-900/50 transition"
              >
                پاکسازی حافظه موقت و بارگذاری مجدد
              </button>
            </div>
            {this.state.error && (
              <details className="mt-4 text-right text-[11px] text-slate-500 bg-black/30 p-2 rounded-lg overflow-auto max-h-32">
                <summary className="cursor-pointer text-amber-400/80 font-mono">مشاهده جزئیات فنی خطا</summary>
                <p className="mt-1 font-mono break-words">{this.state.error.toString()}</p>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}

