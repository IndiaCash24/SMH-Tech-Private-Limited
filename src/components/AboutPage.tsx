import React from 'react';
import { Mail, MapPin, Briefcase, Building2, User } from 'lucide-react';

interface AboutPageProps {
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <main id="main" className="site-main w-full py-8 sm:py-12">
      <article className="post-14 page type-page status-publish hentry entry">
        {/* Entry Header */}
        <header className="entry-header responsive-container text-left mb-8">
          <h1 className="entry-title text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-normal text-[#394d55] leading-tight mb-2">
            About
          </h1>
        </header>

        {/* Entry Content */}
        <div className="entry-content responsive-container space-y-6 text-[#394d55] text-base sm:text-[1.05rem] leading-relaxed">
          <p className="text-lg sm:text-xl text-[#253136]">
            <strong>
              <em>Welcome to SMH Tech Private Limited </em>
            </strong>
            !
          </p>

          <p>
            <span className="text-[#9b51e0] font-semibold">SMH Tech</span> is a dynamic
            technology and software development company focused on delivering cutting-edge
            digital solutions, mobile applications, and web infrastructure.
          </p>

          <p className="text-[#ff6900] font-medium text-base sm:text-lg bg-orange-50/40 p-3 rounded-lg border-l-3 border-[#ff6900]">
            We design and build high-performance software systems tailored to solve complex
            real-world challenges and enhance user experiences.
          </p>

          <div className="pt-2">
            <p className="text-lg font-serif font-bold text-[#253136] mb-3">
              <strong>What We Do:</strong>
            </p>
            <div className="space-y-3.5 pl-1">
              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#3E7D98] mt-2 shrink-0"></span>
                <p className="m-0">
                  <strong className="text-[#253136]">Mobile &amp; Web App Development:</strong> Building
                  scalable Android and cross-platform applications with modern UI/UX architecture.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#2d24dd] mt-2 shrink-0"></span>
                <p className="m-0 text-[#2d24dd] font-medium">
                  <strong>Cloud &amp; API Integration:</strong> Implementing secure data pipelines,
                  database architectures, and cloud services for robust functionality.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#3E7D98] mt-2 shrink-0"></span>
                <p className="m-0">
                  <strong className="text-[#253136]">Digital Infrastructure:</strong> Crafting
                  responsive web frameworks and software applications focused on stability,
                  security, and performance.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-lg font-serif font-bold text-[#253136] mb-2">
              <strong>Our Mission:</strong>
            </p>
            <p className="text-[#394d55] bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              Our goal is to drive digital innovation by building user-centric, secure, and reliable
              software tools that empower businesses and end-users alike.
            </p>
          </div>

          {/* Founder Section */}
          <div className="py-8 flex flex-col items-center justify-center text-center">
            <div className="relative group">
              <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-4 border-[#3E7D98]/20 shadow-lg p-1 bg-white">
                <img
                  src="/founder.png"
                  alt="Founder & CEO Surendra Murmu"
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://www.image2url.com/r2/default/images/1791437602272-d934483d-5be1-4334-b49e-a3623a46b37f.png';
                  }}
                />
              </div>
            </div>
            <p className="mt-4 text-lg text-[#253136]">
              <strong>Founder &amp; CEO</strong>{' '}
              <strong className="text-[#9b51e0] font-bold">Surendra Murmu</strong>
            </p>
          </div>

          {/* Company Overview Card */}
          <div className="bg-[#f8fafb] border border-[#e2e8ea] rounded-xl p-6 sm:p-7 space-y-3">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="font-serif font-bold text-xl text-[#253136] flex items-center gap-2 m-0">
                <Building2 className="w-5 h-5 text-[#3E7D98]" />
                <span>Company Overview</span>
              </h3>
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-200 bg-white p-0.5 shadow-2xs">
                <img
                  src="/company_logo.png"
                  alt="SMH Tech Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://www.image2url.com/r2/default/images/1791437548072-14738165-2d46-4ff2-bb29-16207b85d14a.png';
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#627d89]">Company Name:</span>
                <span className="font-semibold text-[#253136]">SMH Tech Private Limited</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#627d89]">Industry:</span>
                <span className="font-semibold text-[#253136]">Software Development &amp; IT Services</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <span className="text-[#627d89]">Headquarters:</span>
                <span className="font-semibold text-[#253136] flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-rose-500" /> Bokaro, Jharkhand, India
                </span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xl font-bold text-[#cf2e2e] mb-2">
              Contact Us:
            </p>
            <p className="text-[#4d6974] mb-3">
              For business inquiries, support, or partnership opportunities, please reach out to us:
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="bg-sky-50 px-4 py-2.5 rounded-lg border border-sky-100 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0693e3]" />
                <span className="text-sm text-[#4d6974]">Email:</span>
                <a
                  href="mailto:emily.digitalbusiness02@gmail.com"
                  className="text-[#0693e3] font-bold hover:underline"
                >
                  emily.digitalbusiness02@gmail.com
                </a>
              </div>
              <button
                onClick={onOpenContact}
                className="bg-[#3E7D98] hover:bg-[#2f5f74] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer shadow-sm"
              >
                Send Direct Message
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
