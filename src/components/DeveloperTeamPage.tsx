import React from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  bio: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dilip-hansda',
    name: 'Dilip Hansda',
    role: 'Lead Android & Core Logic Engineer',
    specialization: ['Native Android Architecture', 'Sketchware Pro Custom Java', 'XML Layouts'],
    bio: 'Oversees core Android application architecture, custom Java logic compiling, and advanced layout rendering across all SMH Tech mobile solutions.'
  },
  {
    id: 'rahul-sharma',
    name: 'Rahul Sharma',
    role: 'Senior Backend Developer',
    specialization: ['Node.js', 'REST APIs', 'Microservices'],
    bio: 'Designs high-concurrency backend services, asynchronous REST endpoints, and resilient server infrastructure for scalable mobile client communications.'
  },
  {
    id: 'aman-verma',
    name: 'Aman Verma',
    role: 'UI/UX & Product Designer',
    specialization: ['Figma', 'User-Centric UI', 'Interactive Mobile Prototypes'],
    bio: 'Transforms complex functional workflows into modern, intuitive interfaces and pixel-perfect mobile application prototypes.'
  },
  {
    id: 'vikas-kumar',
    name: 'Vikas Kumar',
    role: 'DevOps & Server Control Specialist',
    specialization: ['AWS Cloud', 'NGINX', 'Netlify Deployment', 'CI/CD'],
    bio: 'Manages automated deployment pipelines, reverse proxy configurations, CDN routing, and high-availability cloud cluster orchestration.'
  },
  {
    id: 'rohan-mehta',
    name: 'Rohan Mehta',
    role: 'Database & Data Architect',
    specialization: ['Firebase Cloud Firestore', 'PostgreSQL', 'Realtime DB'],
    bio: 'Architects real-time synchronization pipelines, NoSQL collections, relational indexing, and low-latency database queries for active users.'
  },
  {
    id: 'karan-patel',
    name: 'Karan Patel',
    role: 'Security & Data Protection Lead',
    specialization: ['App Security', 'Authentication', 'Token Encryption', 'Security Rules'],
    bio: 'Enforces strict cryptographic token authentication, audit logs, Firebase security rules, and user data privacy protections in accordance with IT standards.'
  },
  {
    id: 'aditya-roy',
    name: 'Aditya Roy',
    role: 'Frontend & Web Layout Engineer',
    specialization: ['React', 'Next.js', 'Tailwind CSS', 'Responsive Web Design'],
    bio: 'Builds blazing fast web applications, dynamic single-page portals, and cross-platform responsive interfaces with modern frontend tooling.'
  },
  {
    id: 'deepak-joshi',
    name: 'Deepak Joshi',
    role: 'Payment & API Integration Engineer',
    specialization: ['Razorpay Gateway', 'Payment Webhooks', 'Automated Billing'],
    bio: 'Integrates frictionless digital payment rails, transaction webhook reconciliation, automated order processing, and payment security.'
  },
  {
    id: 'suresh-prasad',
    name: 'Suresh Prasad',
    role: 'QA Testing & Automation Engineer',
    specialization: ['APK Performance Testing', 'Bug Tracking', 'Cross-Device Audit'],
    bio: 'Runs comprehensive quality validation across low-end and flagship Android devices, profiling memory footprints and UI responsiveness.'
  },
  {
    id: 'ankit-mishra',
    name: 'Ankit Mishra',
    role: 'Mobile Systems & Performance Engineer',
    specialization: ['Android Build Optimization', 'Gradle Management', 'Memory Leak Fixes'],
    bio: 'Optimizes APK package weight, gradle build speed, thread allocation, and garbage collection cycles to guarantee smooth 60fps mobile execution.'
  }
];

export const DeveloperTeamPage: React.FC = () => {
  return (
    <main id="main" className="site-main w-full py-8 sm:py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Clean Hero Header */}
        <header className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#253136] tracking-tight leading-tight mb-4">
            Engineering &amp; Technology Team
          </h1>
          <p className="text-base sm:text-lg text-[#4d6974] max-w-2xl mx-auto leading-relaxed">
            Meet the engineers building high-performance mobile applications, secure cloud backends, and scalable digital systems tailored to power modern digital enterprises.
          </p>
        </header>

        {/* 10 Clean Developer Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#f8fafb] border border-[#e2e8ea] rounded-xl p-6 sm:p-7 hover:border-[#3E7D98]/50 hover:bg-white transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between text-left"
            >
              <div>
                {/* Member Name */}
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#253136] m-0">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm font-semibold text-[#3E7D98] mt-1 mb-3">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-sm text-[#4d6974] leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              {/* Specialization Tags */}
              <div className="pt-3 border-t border-gray-200/60">
                <div className="flex flex-wrap gap-2">
                  {member.specialization.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-white text-[#253136] px-2.5 py-1 rounded-md border border-[#e2e8ea]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
