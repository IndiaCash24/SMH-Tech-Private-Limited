import React, { useState } from 'react';
import { ActivePage } from '../types';
import { Menu, X, Shield, Info, DollarSign, Mail, Sparkles } from 'lucide-react';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenContact,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page: ActivePage) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header w-full border-b border-gray-100 bg-white sticky top-0 z-40 shadow-2xs">
      {/* Main Header Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 sm:py-5 flex items-center justify-between gap-3">
        {/* Left Side: Brand Logo & Title */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <button
            onClick={() => handleNav('legal')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer min-w-0"
            aria-label="SMH Tech Private Limited Home"
          >
            {/* Professional Company Icon Logo */}
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-xs border border-gray-100 flex items-center justify-center bg-white transition-transform duration-200 group-hover:scale-105 shrink-0">
              <img
                src="/company_logo.png"
                alt="SMH Tech Private Limited Icon"
                className="w-full h-full object-contain p-0.5"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = 'https://www.image2url.com/r2/default/images/1791440342593-5c6dfe16-78d8-4faf-ae83-2a983a248802.png';
                }}
              />
            </div>

            <div className="min-w-0">
              <span className="block font-serif font-bold text-lg sm:text-2xl text-[#253136] group-hover:text-[#3E7D98] transition-colors tracking-tight leading-tight truncate sm:whitespace-normal">
                SMH Tech Private Limited
              </span>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#627d89] font-medium font-sans truncate">
                Software &amp; Digital Solutions
              </span>
            </div>
          </button>
        </div>

        {/* Right Side: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Desktop Navigation">
          <button
            onClick={() => handleNav('legal')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activePage === 'legal'
                ? 'text-[#3E7D98] font-bold bg-[#3E7D98]/10'
                : 'text-[#394d55] hover:text-[#253136] hover:bg-gray-100/70'
            }`}
          >
            Legal &amp; Privacy
          </button>

          <button
            onClick={() => handleNav('about')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activePage === 'about'
                ? 'text-[#3E7D98] font-bold bg-[#3E7D98]/10'
                : 'text-[#394d55] hover:text-[#253136] hover:bg-gray-100/70'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNav('financial')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activePage === 'financial'
                ? 'text-[#3E7D98] font-bold bg-[#3E7D98]/10'
                : 'text-[#394d55] hover:text-[#253136] hover:bg-gray-100/70'
            }`}
          >
            Financial Information
          </button>

          <button
            onClick={onOpenContact}
            className="ml-2 bg-[#3E7D98] hover:bg-[#2f5f74] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Us</span>
          </button>
        </nav>

        {/* Right Side: Professional Mobile & Tablet Menu Icon Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="text-xs font-bold text-[#3E7D98] bg-[#3E7D98]/10 hover:bg-[#3E7D98]/20 px-3 py-2 rounded-lg transition-colors cursor-pointer sm:inline-block hidden"
          >
            Contact
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-11 h-11 rounded-xl bg-slate-100/80 hover:bg-slate-200/90 active:scale-95 text-[#253136] flex items-center justify-center transition-all cursor-pointer border border-slate-200/60 shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-[#3E7D98]"
            aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-[#253136] transition-transform duration-200 rotate-90 scale-105" />
            ) : (
              <div className="w-5 h-4 flex flex-col justify-between items-end">
                <span className="w-5 h-0.5 bg-[#253136] rounded-full transition-all"></span>
                <span className="w-3.5 h-0.5 bg-[#3E7D98] rounded-full transition-all"></span>
                <span className="w-5 h-0.5 bg-[#253136] rounded-full transition-all"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 animate-fadeIn shadow-lg">
          <div className="space-y-1.5">
            <button
              onClick={() => handleNav('legal')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                activePage === 'legal'
                  ? 'bg-[#3E7D98] text-white shadow-xs'
                  : 'text-[#394d55] hover:bg-gray-100'
              }`}
            >
              <Shield className="w-4 h-4 shrink-0" />
              <span>Legal &amp; Privacy Policy</span>
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                activePage === 'about'
                  ? 'bg-[#3E7D98] text-white shadow-xs'
                  : 'text-[#394d55] hover:bg-gray-100'
              }`}
            >
              <Info className="w-4 h-4 shrink-0" />
              <span>About SMH Tech</span>
            </button>

            <button
              onClick={() => handleNav('financial')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                activePage === 'financial'
                  ? 'bg-[#3E7D98] text-white shadow-xs'
                  : 'text-[#394d55] hover:bg-gray-100'
              }`}
            >
              <DollarSign className="w-4 h-4 shrink-0" />
              <span>Financial Information &amp; Valuations</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
