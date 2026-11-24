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
  recoveryKey: number;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, recoveryKey: 0 };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('JaheshKala silent recovery:', error, errorInfo);
    try {
      localStorage.removeItem('jahesh_cart');
      localStorage.removeItem('jahesh_products');
      localStorage.removeItem('jahesh_banners');
    } catch {}

    // Auto-recover cleanly without showing any error screen
    if (this.state.recoveryKey < 3) {
      setTimeout(() => {
        this.setState((prev) => ({
          hasError: false,
          error: null,
          recoveryKey: prev.recoveryKey + 1,
        }));
      }, 50);
    }
  }

  render() {
    if (this.state.hasError && this.state.recoveryKey >= 3) {
      // Clear cache and silently reload once if recovery fails
      try {
        localStorage.clear();
      } catch {}
      window.location.reload();
      return null;
    }

    return (
      <React.Fragment key={this.state.recoveryKey}>
        {this.props.children}
      </React.Fragment>
    );
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

