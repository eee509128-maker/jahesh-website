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
    console.error('JaheshKala application error:', error, errorInfo);
    try {
      localStorage.removeItem('jahesh_cart');
    } catch {}
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090714] text-white flex flex-col items-center justify-center p-6 text-center font-['Vazirmatn',sans-serif]" dir="rtl">
          <div className="max-w-md bg-purple-950/40 border border-purple-500/30 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
            <h2 className="text-xl font-black text-amber-400 mb-3">خطا در بارگذاری سامانه جهش‌کالا</h2>
            <p className="text-sm text-slate-300 mb-2">متأسفانه در اجرای بخش محتوایی مشکلی رخ داد.</p>
            {this.state.error && (
              <div className="bg-red-950/60 border border-red-500/40 rounded-xl p-3 mb-4 text-xs text-red-200 text-left font-mono overflow-auto max-h-32" dir="ltr">
                {this.state.error.toString()}
              </div>
            )}
            <button
              onClick={() => {
                try {
                  localStorage.clear();
                } catch {}
                window.location.href = '/jaheshkala/';
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-lg hover:opacity-90 transition-opacity"
            >
              بارگذاری مجدد سامانه
            </button>
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

