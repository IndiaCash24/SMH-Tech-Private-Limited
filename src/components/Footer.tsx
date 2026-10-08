import React from 'react';
import { ActivePage } from '../types';
import { ShieldCheck, Mail, MapPin, Building, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <footer id="colophon" className="site-footer w-full bg-[#f8fafb] border-t border-[#e2e8ea] mt-16 py-12 text-[#4d6974] text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Quick Nav in Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-[#e6eced] text-left">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-200 bg-white p-0.5 shadow-2xs shrink-0 flex items-center justify-center">
                <img
                  src="/company_logo.png"
                  alt="SMH Tech Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://www.image2url.com/r2/default/images/1791440342593-5c6dfe16-78d8-4faf-ae83-2a983a248802.png';
                  }}
                />
              </div>
              <h4 className="font-serif font-bold text-[#253136] text-lg m-0">
                SMH Tech Private Limited
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-[#4d6974] mb-3">
              Delivering secure, scalable software systems, Android mobile applications, and enterprise digital solutions.
            </p>
            <p className="text-xs text-[#627d89] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>Headquarters: Bokaro, Jharkhand, India</span>
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-[#253136] text-base mb-3">
              Company Navigation
            </h4>
            <ul className="space-y-2 list-none p-0 m-0 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('legal')}
                  className="hover:text-[#3E7D98] transition-colors cursor-pointer text-left"
                >
                  Legal &amp; Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#3E7D98] transition-colors cursor-pointer text-left"
                >
                  About SMH Tech &amp; Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('financial')}
                  className="hover:text-[#3E7D98] transition-colors cursor-pointer text-left"
                >
                  Financial Information &amp; Net Worth
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-[#253136] text-base mb-3">
              Compliance &amp; Communication
            </h4>
            <p className="text-sm leading-relaxed text-[#4d6974] mb-2">
              For corporate inquiries, privacy requests, or partnership discussions:
            </p>
            <button
              onClick={onOpenContact}
              className="text-[#3E7D98] font-semibold hover:underline block mb-2 cursor-pointer text-left flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>emily.digitalbusiness02@gmail.com</span>
            </button>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Google Play Policy Compliant</span>
              </span>
            </div>
          </div>
        </div>

        {/* Corporate Copyright & Identity Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#627d89]">
          <div className="site-info flex items-center gap-2">
            <span className="site-name font-bold text-[#253136]">SMH Tech Private Limited</span>
            <span>•</span>
            <span>Official Corporate &amp; Compliance Portal</span>
          </div>
          <div>
            © 2026 SMH Tech Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
