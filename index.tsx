
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// كل الـ contexts داخل src/contexts
import { LocalizationProvider } from './src/contexts/LocalizationContext';
import { HistoryProvider } from './src/contexts/HistoryContext';
import { ToastProvider } from './src/contexts/ToastContext';
import { LoadingProvider } from './src/contexts/LoadingContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LocalizationProvider>
      <HistoryProvider>
        <ToastProvider>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </ToastProvider>
      </HistoryProvider>
    </LocalizationProvider>
  </React.StrictMode>
);


