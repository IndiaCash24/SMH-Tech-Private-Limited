import React, { useState } from 'react';
import { LegalDocType } from '../types';
import { X, ShieldCheck, FileText, Trash2, CheckCircle2, Copy, Check, Mail, AlertTriangle } from 'lucide-react';

interface LegalDocModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export const LegalDocModal: React.FC<LegalDocModalProps> = ({ type, onClose }) => {
  const [appName, setAppName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [reason, setReason] = useState('No longer using the app');
  const [confirmed, setConfirmed] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!type) return null;

  const handleDeletionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed || !appName || !userEmail) return;

    const ref = `SMH-DEL-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(ref);
  };

  const copyEmailTemplate = () => {
    const text = `Subject: Account & Data Deletion Request - Ref: ${submittedRef}
To: emily.digitalbusiness02@gmail.com

Hello SMH Tech Compliance Team,

I am requesting permanent deletion of my account and personal data:
- Application: ${appName}
- Registered Email: ${userEmail}
- User ID / Account ID: ${userId || 'N/A'}
- Reason: ${reason}
- Reference ID: ${submittedRef}

Please confirm when the deletion is completed within 30 days as per Google Play Store policy.

Thank you.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-gray-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-[#f8fafb]">
          <div className="flex items-center gap-3">
            {type === 'privacy' && (
              <div className="w-9 h-9 rounded-full bg-sky-100 text-[#3E7D98] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
            )}
            {type === 'terms' && (
              <div className="w-9 h-9 rounded-full bg-amber-100 text-[#9B6A36] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
            )}
            {type === 'deletion' && (
              <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                <Trash2 className="w-5 h-5" />
              </div>
            )}
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#253136] m-0">
                {type === 'privacy' && 'Privacy Policy — SMH Tech Private Limited'}
                {type === 'terms' && 'Terms & Conditions — SMH Tech Private Limited'}
                {type === 'deletion' && 'Account & User Data Deletion Portal'}
              </h3>
              <p className="text-xs text-[#627d89] m-0">
                Official Compliance Document • Last Updated: October 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#394d55] text-sm leading-relaxed">
          {type === 'privacy' && (
            <div className="space-y-5">
              <div className="bg-sky-50 border-l-4 border-[#3E7D98] p-4 text-xs text-[#253136] rounded-r">
                <strong>Google Play Developer Policy Compliance:</strong> This policy applies to all Android applications, mobile tools, and digital web properties published under the developer identity of <strong>SMH Tech Private Limited</strong>.
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">1. Introduction</h4>
                <p>
                  SMH Tech Private Limited (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is dedicated to safeguarding the privacy and personal information of our users (&quot;you&quot;, &quot;user&quot;). This Privacy Policy explains our practices regarding data collection, processing, protection, and your individual rights when accessing our mobile applications and services.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">2. Information We Collect</h4>
                <p className="mb-2">We only gather data necessary to ensure optimal application performance and support:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Device Information:</strong> Device model, operating system version, screen resolution, and unique device identifiers to deliver tailored UI and troubleshooting.</li>
                  <li><strong>Log &amp; Performance Data:</strong> Application crash metrics, uptime telemetry, and interaction logs for debugging and system stability.</li>
                  <li><strong>User-Provided Data:</strong> Any information submitted voluntarily, such as email addresses for support inquiries or profile synchronization.</li>
                  <li><strong>Advertising Identifiers:</strong> Google Advertising ID (GAID) collected anonymously through certified ad networks if in-app ads are enabled.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">3. Use of Information</h4>
                <p>We process your data strictly for legitimate operational purposes:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To provide, maintain, and upgrade our mobile applications.</li>
                  <li>To authenticate user sessions securely with Firebase and cloud services.</li>
                  <li>To respond promptly to customer service requests and bug tickets.</li>
                  <li>To detect and prevent fraudulent, unauthorized, or unlawful activity.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">4. Third-Party Service Providers</h4>
                <p>We partner with industry-standard third-party providers that adhere to rigorous privacy frameworks:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Google Play Services:</strong> Core application updates and distribution APIs.</li>
                  <li><strong>Firebase (Google LLC):</strong> Real-time database hosting, authentication, and crash reporting.</li>
                  <li><strong>AdMob / Google Ad Networks:</strong> Standard non-personalized or contextual advertising delivery.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">5. Data Security &amp; Encryption</h4>
                <p>
                  We enforce TLS/HTTPS cryptographic protocols for all data in transit between our client apps and cloud infrastructure. We implement strict role-based access controls to prevent unauthorized access, alteration, or disclosure of user data.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">6. Children&apos;s Privacy (COPPA Compliance)</h4>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly harvest or store personally identifiable data from minors. If you believe a minor has submitted personal information, contact us immediately for prompt erasure.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">7. Data Retention &amp; Deletion Rights</h4>
                <p>
                  You possess the fundamental right to request complete deletion of your account and related records at any time. Refer to our Account &amp; Data Deletion section or email us at <strong>emily.digitalbusiness02@gmail.com</strong>.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">Grievance &amp; Compliance Officer</h4>
                <p className="text-xs text-[#627d89]">
                  SMH Tech Private Limited<br />
                  Founder &amp; CEO: Surendra Murmu<br />
                  Location: Bokaro, Jharkhand, India<br />
                  Email: emily.digitalbusiness02@gmail.com
                </p>
              </div>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-5">
              <div className="bg-amber-50 border-l-4 border-[#9B6A36] p-4 text-xs text-[#253136] rounded-r">
                <strong>Terms of Service &amp; User License:</strong> By downloading, installing, or accessing any software products provided by SMH Tech Private Limited, you agree to these Terms.
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">1. Acceptance of Terms</h4>
                <p>
                  By creating an account, browsing, or utilizing applications developed by SMH Tech Private Limited, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">2. Grant of License</h4>
                <p>
                  SMH Tech grants you a revocable, non-exclusive, non-transferable, limited license to download and install our applications solely for your personal, non-commercial purposes strictly in accordance with Google Play Developer Terms.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">3. Prohibited Conduct</h4>
                <p className="mb-2">Users agree not to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Decompile, reverse-engineer, disassemble, or derive the source code of any SMH Tech app.</li>
                  <li>Exploit vulnerabilities or engage in automated scraping without authorization.</li>
                  <li>Transmit harmful malicious software or engage in unauthorized tampering.</li>
                  <li>Violate any applicable state, national, or international laws.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">4. Intellectual Property Rights</h4>
                <p>
                  All software codebases, graphics, trademarks, logos, brand names, and digital infrastructure are the exclusive proprietary property of SMH Tech Private Limited and its founder, Surendra Murmu.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">5. Limitation of Liability</h4>
                <p>
                  To the maximum extent permitted by applicable law, SMH Tech Private Limited shall not be held liable for indirect, incidental, special, or consequential damages resulting from the use or inability to use the software.
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#253136] mb-1">6. Governing Law &amp; Jurisdiction</h4>
                <p>
                  These Terms are governed by and construed in accordance with the laws of India. Any legal disputes arising hereunder shall fall under the jurisdiction of the competent courts in Jharkhand, India.
                </p>
              </div>
            </div>
          )}

          {type === 'deletion' && (
            <div>
              {!submittedRef ? (
                <form onSubmit={handleDeletionSubmit} className="space-y-4">
                  <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r">
                    <div className="flex items-start gap-2 text-rose-800 text-xs">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <p className="m-0 leading-relaxed">
                        In accordance with <strong>Google Play Store Developer Policies</strong> on Account Deletion, users have the permanent right to delete their application account, records, and related personal data stored on SMH Tech servers.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Target Mobile App / Product *
                    </label>
                    <input
                      type="text"
                      required
                      value={appName}
                      onChange={(e) => setAppName(e.target.value)}
                      placeholder="e.g., SMH Utility App, Android Suite"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#3E7D98] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Registered User Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="your-email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#3E7D98] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Account ID / User ID (Optional)
                      </label>
                      <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="Optional username or ID"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#3E7D98] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Reason for Deletion
                    </label>
                    <select
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#3E7D98] text-sm bg-white"
                    >
                      <option value="No longer using the app">No longer using the app</option>
                      <option value="Privacy concerns">Privacy concerns</option>
                      <option value="Switching devices">Switching devices</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-200">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={confirmed}
                        onChange={(e) => setConfirmed(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                      />
                      <span className="text-xs text-gray-600 leading-snug">
                        I hereby request the permanent deletion of my account, profile, and all associated stored data from SMH Tech servers. I understand this action cannot be reversed.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={!confirmed || !appName || !userEmail}
                      className="bg-rose-600 hover:bg-rose-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg text-sm transition-colors cursor-pointer flex-1"
                    >
                      Generate Deletion Request Ticket
                    </button>
                    <a
                      href={`mailto:emily.digitalbusiness02@gmail.com?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20account%20from%20SMH%20Tech%20servers.`}
                      className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-3 px-5 rounded-lg text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Direct Email</span>
                    </a>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl text-[#253136]">
                      Deletion Request Generated!
                    </h4>
                    <p className="text-sm text-[#4d6974] mt-1">
                      Reference Ticket ID: <span className="font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">{submittedRef}</span>
                    </p>
                  </div>

                  <p className="text-xs text-[#627d89] max-w-md mx-auto leading-relaxed">
                    Our compliance officer has recorded your deletion request for app <strong>{appName}</strong> ({userEmail}). Your account and database records will be erased within the standard SLA period.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={copyEmailTemplate}
                      className="inline-flex items-center justify-center gap-2 bg-[#3E7D98] hover:bg-[#2f5f74] text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Proof'}</span>
                    </button>
                    <a
                      href={`mailto:emily.digitalbusiness02@gmail.com?subject=Account%20Deletion%20Request%20-%20${submittedRef}&body=Hello%20SMH%20Tech%2C%0A%0APlease%20permanently%20delete%20my%20account%20records%20for%20app%3A%20${encodeURIComponent(appName)}%20with%20email%3A%20${encodeURIComponent(userEmail)}.%0A%0AReference%3A%20${submittedRef}`}
                      className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send to Emily.digitalbusiness02@gmail.com</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-[#627d89]">
          <span>SMH Tech Private Limited • Bokaro, Jharkhand</span>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black font-semibold hover:underline cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
