import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Workspace from './components/Workspace';
import PricingPage from './components/PricingPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import TemplatesPage from './components/TemplatesPage';
import CommunityPage from './components/CommunityPage';
import { useToast } from './hooks/useToast';
import Toast from './components/Toast';
import GlobalLoader from './components/GlobalLoader';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PrivacyPage from './components/PrivacyPage';
import DocsPage from './components/DocsPage';

const ToastContainer: React.FC = () => {
  const { toasts } = useToast();
  return (
    <div className="fixed top-24 right-4 z-[100] w-full max-w-sm space-y-3">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LANDING);
  const [scrollTargetId, setScrollTargetId] = useState<string | null>(null);

  const navigateTo = (page: Page, targetId: string | null = null) => {
    if (page === currentPage && targetId) {
      // If we are on the same page, just scroll smoothly
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0); // Scroll to top on page change
      // If changing pages, set the page and targetId for the target component
      setCurrentPage(page);
      setScrollTargetId(targetId);
    }
  };

  useEffect(() => {
    // This effect runs after a render where scrollTargetId might have been set.
    // If it's set, we clear it so it doesn't persist for the next navigation to the same page.
    if (scrollTargetId) {
        const timer = setTimeout(() => {
            setScrollTargetId(null);
        }, 100); // A small delay ensures the consuming component has time to react
        return () => clearTimeout(timer);
    }
  }, [scrollTargetId]);


  const renderPage = () => {
    switch (currentPage) {
      case Page.WORKSPACE:
        return <Workspace />;
      case Page.PRICING:
        return <PricingPage />;
      case Page.TEMPLATES:
        return <TemplatesPage />;
      case Page.COMMUNITY:
        return <CommunityPage />;
      case Page.ABOUT:
        return <AboutPage navigateTo={navigateTo} />;
      case Page.CONTACT:
        return <ContactPage />;
      case Page.PRIVACY:
        return <PrivacyPage />;
      case Page.DOCS:
        return <DocsPage />;
      case Page.LOGIN:
        return <LoginPage setPage={navigateTo} />;
      case Page.LANDING:
      default:
        return <LandingPage scrollTargetId={scrollTargetId} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050610] text-gray-200 font-sans overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <GlobalLoader />
      <ToastContainer />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header setPage={navigateTo} />
        <main className="flex-grow">{renderPage()}</main>
        <Footer setPage={navigateTo} />
      </div>
    </div>
  );
};

export default App;