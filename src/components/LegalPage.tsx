import React from 'react';
import { LegalDocType } from '../types';
import { ShieldCheck, FileText, Trash2, Mail, ExternalLink, ArrowRight } from 'lucide-react';

interface LegalPageProps {
  onOpenDoc: (doc: LegalDocType) => void;
  onOpenContact: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ onOpenDoc, onOpenContact }) => {
  return (
    <main id="main" className="site-main w-full py-8 sm:py-12">
      <article className="post-5 page type-page status-publish hentry entry">
        {/* Entry Header */}
        <header className="entry-header responsive-container text-center sm:text-left mb-8">
          <h1 className="entry-title text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-normal text-[#394d55] leading-tight mb-2">
            SMH Tech – Legal &amp;&nbsp;Privacy
          </h1>
        </header>

        {/* Entry Content */}
        <div className="entry-content responsive-container">
          <div className="h-10 sm:h-16" aria-hidden="true"></div>

          {/* Blockquote */}
          <blockquote className="border-l-4 border-[#3E7D98] pl-5 sm:pl-6 my-8 bg-slate-50/50 py-3 rounded-r-md">
            <p className="font-serif text-xl sm:text-2xl text-[#253136] leading-snug m-0">
              <strong>Official Privacy Policy, Terms of Service, and User Data Management for apps developed by SMH Tech.</strong>
            </p>
          </blockquote>

          {/* Subtitle text */}
          <p className="text-center text-[#4d6974] text-base sm:text-lg max-w-xl mx-auto my-6 leading-relaxed">
            Learn how SMH Tech collects, uses, and protects your personal information when using our apps and services.
          </p>

          {/* Contact Us Button */}
          <div className="flex justify-center my-8">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-[#3E7D98] hover:bg-[#2f5f74] text-white font-bold px-8 py-3.5 rounded-full text-base transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>

          <div className="h-10 sm:h-16" aria-hidden="true"></div>

          {/* Section heading: Legal & Compliance Documents */}
          <p className="text-center text-2xl sm:text-[1.75rem] font-serif font-bold text-[#394d55] mb-8">
            Legal &amp; Compliance Documents
          </p>

          {/* 3 Columns block */}
          <div className="bg-[#f9fafb] border border-[#e5e9ec] rounded-xl p-6 sm:p-8 md:p-10 my-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Privacy Policy */}
              <div className="flex flex-col justify-between pt-6 md:pt-0 md:px-4 first:pt-0 first:px-0">
                <div>
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-[#3E7D98] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#394d55] mb-2.5">
                    Privacy Policy
                  </h4>
                  <p className="text-sm text-[#4d6974] leading-relaxed mb-6">
                    Learn how SMH Tech collects, uses, and protects your personal information when using our apps and services.
                  </p>
                </div>
                <button
                  onClick={() => onOpenDoc('privacy')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3E7D98] hover:text-[#2f5f74] hover:underline cursor-pointer group mt-auto"
                >
                  <span>Read Full Policy</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Terms & Conditions */}
              <div className="flex flex-col justify-between pt-6 md:pt-0 md:px-4">
                <div>
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-[#9B6A36] flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#394d55] mb-2.5">
                    Terms &amp; Conditions
                  </h4>
                  <p className="text-sm text-[#4d6974] leading-relaxed mb-6">
                    Read the rules, terms, and conditions governing the use of software and applications provided by SMH Tech
                  </p>
                </div>
                <button
                  onClick={() => onOpenDoc('terms')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3E7D98] hover:text-[#2f5f74] hover:underline cursor-pointer group mt-auto"
                >
                  <span>Read Full Terms</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Account & Data Deletion */}
              <div className="flex flex-col justify-between pt-6 md:pt-0 md:pl-4">
                <div>
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                    <Trash2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#394d55] mb-2.5 flex items-center gap-1">
                    <span>Account &amp; Data Deletion</span>
                  </h4>
                  <p className="text-sm text-[#4d6974] leading-relaxed mb-3">
                    Submit a request to delete your app account and associated personal data from our servers.
                  </p>
                  <p className="text-sm font-medium text-[#253136] mb-4 bg-white p-2.5 rounded border border-gray-200/80">
                    Email ✉️ <a href="mailto:emily.digitalbusiness02@gmail.com" className="text-[#3E7D98] hover:underline">emily.digitalbusiness02@gmail.com</a>
                  </p>
                </div>
                <button
                  onClick={() => onOpenDoc('deletion')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-rose-700 hover:text-rose-900 hover:underline cursor-pointer group mt-auto"
                >
                  <span>Submit Deletion Request</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Separator */}
          <hr className="border-t border-[#d8e0e3] my-10" />

          {/* Google Play Statement quote */}
          <div className="my-10 px-4 text-center">
            <p className="font-serif text-2xl sm:text-[28px] text-[#394d55] leading-relaxed italic max-w-2xl mx-auto">
              &#8220;SMH Tech is committed to protecting user privacy and ensuring full compliance with Google Play Store Developer Policies.&#8221;
            </p>
          </div>

          {/* Copyright notice */}
          <p className="text-center text-sm font-medium text-[#4d6974] my-6">
            © 2026 SMH Tech Pvt Ltd. All rights reserved.
          </p>

          {/* Separator */}
          <hr className="border-t border-[#d8e0e3] my-10" />

          {/* Spacers */}
          <div className="h-8" aria-hidden="true"></div>
          <div className="h-8" aria-hidden="true"></div>
        </div>
      </article>
    </main>
  );
};
