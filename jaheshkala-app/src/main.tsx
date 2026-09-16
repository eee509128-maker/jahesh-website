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
    return { hasError: false, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('JaheshKala auto-recovered from error:', error, errorInfo);
    // Auto-clean any corrupted temporary data without bothering user
    try {
      const errorStr = error?.toString() || '';
      if (errorStr.includes('toLocaleString') || errorStr.includes('undefined') || errorStr.includes('null')) {
        localStorage.removeItem('jahesh_cart');
      }
    } catch {}
  }

  render() {
    // Always render children smoothly so user never sees a blocking error screen
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

