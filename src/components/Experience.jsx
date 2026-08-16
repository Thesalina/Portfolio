import { motion } from "framer-motion";

const experiences = [
  {
    role: "QA Engineer",
    company: "Nepal Police CBS / ICMS-CIB",
    date: "May 2026 – Jun 2026",
    description: "Wrote and maintained Playwright end-to-end test suites using Page Object Model architecture for a Next.js-based cybercrime investigation management platform. Systematically mapped RFP requirements against the live system using screenshot evidence, and traced status-sync defects across connected portals to their root module.",
  },
  {
    role: "QA Engineer",
    company: "EasyCare 365 (Easy Health Care)",
    date: "Feb 2026 – April 2026",
    description: "Owned QA for EasyCare 365, a healthcare subscription platform for the Nepali diaspora, across the full cycle from pre-launch testing through release handoff. Wrote structured, reproducible bug reports and worked directly with developers to triage and close issues ahead of each release.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Digital Pathshala (Remote)",
    date: "Apr 2025 – Jul 2025",
    description: "Shipped Mindful — a production mental health wellness platform serving real users, built with React.js, TypeScript, and Express.js. Architected and delivered RESTful APIs for dynamic content delivery and user management. Collaborated on UI/UX decisions using Figma wireframes, ensuring accessible and intuitive interface design across all device sizes.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="fade-in scroll-mt-24 py-16 bg-chic-bg dark:bg-chic-darkBg transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 xl:px-0 xl:max-w-5xl">
        <div className="space-y-2 pt-1 pb-4 sm:pt-2 sm:pb-6 md:space-y-5 md:pt-2">
          <h1 className="text-2xl font-extrabold leading-8 tracking-tight text-chic-text dark:text-chic-darkText sm:text-3xl sm:leading-9 md:text-4xl md:leading-11 lg:text-5xl lg:leading-13">
            <span className="text-chic-accent">Experience</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-chic-muted dark:text-chic-darkMuted">
            Professional background and technical proficiency.
          </p>
        </div>
        
        <div className="mt-8">
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border border-chic-alt dark:border-chic-darkAlt group-hover:border-chic-accent transition-colors duration-300 bg-white dark:bg-[#222120] flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden p-1">
                       <span className="text-xl font-medium text-chic-muted dark:text-chic-darkMuted group-hover:text-chic-accent transition-colors duration-300">{exp.company.charAt(0)}</span>
                    </div>
                    {index !== experiences.length - 1 && (
                      <div className="w-[1px] bg-chic-alt dark:bg-chic-darkAlt mt-2 mb-2 group-hover:bg-chic-accent/50 transition-colors duration-300" style={{height: "100px"}}></div>
                    )}
                  </div>
                  
                  <div className="pb-8 flex-1 pt-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3">
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-chic-text dark:text-chic-darkText group-hover:text-chic-accent transition-colors duration-300">{exp.company}</h3>
                        <p className="text-sm text-chic-muted dark:text-chic-darkMuted font-medium mt-0.5">{exp.role}</p>
                      </div>
                      <div className="text-xs sm:text-sm text-chic-muted dark:text-chic-darkMuted whitespace-nowrap font-medium flex-shrink-0 tracking-wide uppercase">
                        {exp.date}
                      </div>
                    </div>
                    <p className="mt-2 text-sm sm:text-base text-chic-muted dark:text-chic-darkMuted font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
