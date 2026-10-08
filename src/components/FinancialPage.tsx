import React from 'react';
import { DollarSign, TrendingUp, Cpu, Server, Users, Mail, Building, Award } from 'lucide-react';

interface FinancialPageProps {
  onOpenContact: () => void;
}

export const FinancialPage: React.FC<FinancialPageProps> = ({ onOpenContact }) => {
  return (
    <main id="main" className="site-main w-full py-8 sm:py-12">
      <article className="post-15 page type-page status-publish hentry entry">
        {/* Entry Header */}
        <header className="entry-header responsive-container text-left mb-6">
          <h1 className="entry-title text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-normal text-[#394d55] leading-tight mb-2">
            Financial Information
          </h1>
        </header>

        {/* Entry Content */}
        <div className="entry-content responsive-container space-y-7 text-[#394d55] text-base sm:text-[1.05rem] leading-relaxed">
          <p className="text-lg text-[#253136] font-medium border-b border-gray-100 pb-3">
            Financial Overview &amp; Corporate Net Worth — SMH Tech Private Limited
          </p>

          {/* Snapshot & Valuations */}
          <div className="bg-[#fafbfc] border border-[#e4eaec] rounded-xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#9b51e0] m-0">
              Financial Snapshot &amp; Valuations
            </h2>
            <p className="text-[#4d6974]">
              SMH Tech Private Limited operates as a self-sustained and growing technology firm, continuously investing in internal software IP, cloud infrastructure, and core mobile applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-lg border border-emerald-100 shadow-xs">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block mb-1">
                  Brand &amp; Enterprise Valuation
                </span>
                <p className="text-lg sm:text-xl font-bold text-[#253136] m-0 flex flex-wrap items-baseline gap-1.5">
                  <span className="text-[#00d084] text-2xl font-black">₹15,00,000</span>
                  <span>INR</span>
                  <span className="text-sm font-normal text-gray-600">(~</span>
                  <span className="text-[#ff6900] font-bold">1.5 Million</span>
                  <span className="text-sm font-normal text-gray-600">)</span>
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block mb-1">
                  Authorized &amp; Operational Capital
                </span>
                <p className="text-base sm:text-lg font-bold text-[#3E7D98] m-0">
                  Privately Held / Self-Funded Enterprise
                </p>
              </div>
            </div>
          </div>

          {/* Revenue Models & Monetization */}
          <div className="pt-2 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#253136] m-0">
              Revenue Models &amp; Monetization Channels
            </h2>
            <p className="text-[#9b51e0] font-medium text-base sm:text-lg">
              Our technology infrastructure generates sustainable revenue streams across multiple digital channels:
            </p>

            <div className="space-y-3.5 pl-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#3E7D98] mt-2 shrink-0"></div>
                <p className="m-0">
                  <strong className="text-[#253136]">Digital Product Development &amp; Licensing:</strong> Custom enterprise software, web architecture, and app development solutions.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#3E7D98] mt-2 shrink-0"></div>
                <p className="m-0">
                  <strong className="text-[#253136]">Application Revenue &amp; Monetization:</strong> In-app monetization, premium digital utility services, and ad network integration across Android applications.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#cf2e2e] mt-2 shrink-0"></div>
                <p className="m-0 text-[#cf2e2e] font-medium">
                  <strong>IT Consulting &amp; Skill Training Programs:</strong> Specialized technical education, development courses, and corporate training.
                </p>
              </div>
            </div>
          </div>

          {/* Asset Base & Core Capabilities */}
          <div className="pt-2 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#253136] m-0">
              Asset Base &amp; Core Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#3E7D98] flex items-center justify-center mb-2.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#253136] text-sm mb-1">Digital Infrastructure</h4>
                <p className="text-xs text-[#4d6974] leading-relaxed">
                  Proprietary software codebases, web frameworks, domain assets, and active app portfolios.
                </p>
              </div>

              <div className="bg-sky-50/60 p-4 rounded-xl border border-sky-100">
                <div className="w-8 h-8 rounded-lg bg-sky-200 text-[#0693e3] flex items-center justify-center mb-2.5">
                  <Server className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#0693e3] text-sm mb-1">Cloud &amp; Server Assets</h4>
                <p className="text-xs text-[#394d55] leading-relaxed">
                  Firebase real-time database deployments, scalable hosting networks, and secure server architectures.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#9B6A36] flex items-center justify-center mb-2.5">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#253136] text-sm mb-1">Human Capital</h4>
                <p className="text-xs text-[#4d6974] leading-relaxed">
                  In-house software engineering, UI/UX designing, and full-stack technical expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Growth Statement */}
          <div className="pt-2 space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#253136] m-0">
              Corporate Growth Statement
            </h2>
            <div className="bg-gradient-to-r from-slate-50 to-white p-5 rounded-xl border-l-4 border-[#3E7D98] shadow-2xs">
              <p className="italic text-[#394d55] m-0 leading-relaxed">
                SMH Tech Pvt Ltd remains committed to reinvesting operating revenue into tech innovation, product scaling, and expanding software services to ensure strong financial health and long-term organizational stability.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#253136] m-0">
              Contact Information
            </h2>
            <p className="text-[#4d6974] text-sm">
              For corporate financial inquiries or investment partnerships:
            </p>
            <div className="bg-[#f9fafb] p-5 rounded-xl border border-[#e5e9ec] space-y-2 text-sm max-w-md">
              <div className="flex justify-between">
                <span className="text-[#627d89]">Company:</span>
                <span className="font-semibold text-[#253136]">SMH Tech Private Limited</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#627d89]">Founder &amp; CEO:</span>
                <span className="font-semibold text-[#9b51e0]">Surendra Murmu</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-[#627d89]">Email Contact:</span>
                <a
                  href="mailto:emily.digitalbusiness02@gmail.com"
                  className="font-bold text-[#0693e3] hover:underline"
                >
                  emily.digitalbusiness02@gmail.com
                </a>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="bg-[#3E7D98] hover:bg-[#2f5f74] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors cursor-pointer shadow-sm"
              >
                Inquire With Corporate Team
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
