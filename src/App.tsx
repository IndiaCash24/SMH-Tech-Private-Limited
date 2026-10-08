/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ActivePage, LegalDocType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LegalPage } from './components/LegalPage';
import { AboutPage } from './components/AboutPage';
import { FinancialPage } from './components/FinancialPage';
import { DeveloperTeamPage } from './components/DeveloperTeamPage';
import { LegalDocModal } from './components/LegalDocModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('legal');
  const [activeDoc, setActiveDoc] = useState<LegalDocType>(null);
  const [contactOpen, setContactOpen] = useState(false);

  // Sync path and hash routing
  useEffect(() => {
    const handleRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (hash === '#about' || path.includes('/about')) {
        setActivePage('about');
      } else if (
        hash === '#team' ||
        hash === '#developer-team' ||
        path.includes('/team') ||
        path.includes('/developer-team')
      ) {
        setActivePage('team');
      } else if (
        hash === '#financial' ||
        hash === '#financial-information' ||
        path.includes('/financial')
      ) {
        setActivePage('financial');
      } else {
        setActivePage('legal');
      }
    };

    handleRoute();
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);
    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    if (page === 'legal') {
      window.location.hash = '';
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#394d55] font-sans antialiased selection:bg-[#3E7D98]/20 selection:text-[#253136]">
      {/* Top Header */}
      <Header
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 w-full">
        {activePage === 'legal' && (
          <LegalPage
            onOpenDoc={(doc) => setActiveDoc(doc)}
            onOpenContact={() => setContactOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onOpenContact={() => setContactOpen(true)} />
        )}

        {activePage === 'team' && (
          <DeveloperTeamPage />
        )}

        {activePage === 'financial' && (
          <FinancialPage onOpenContact={() => setContactOpen(true)} />
        )}
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handlePageChange}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Legal Document Reader / Deletion Modal */}
      {activeDoc && (
        <LegalDocModal
          type={activeDoc}
          onClose={() => setActiveDoc(null)}
        />
      )}

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
