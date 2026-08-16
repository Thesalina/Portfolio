import { motion } from "framer-motion";
import payrollImg from "../assets/photo/payroll.png";
import sudurpaschimImg from "../assets/photo/sudurpaschim.png";
import billsplitterImg from "../assets/photo/billspliter.png";
import mindfullImg from "../assets/photo/mildfull.png";

const projects = [
  {
    title: "Mindfull",
    description: "Mental Wellness App with mood tracking and journaling.",
    image: mindfullImg,
    codeLink: "https://github.com/Thesalina/Mindfull",
    liveLink: "https://mindfull-kappa.vercel.app",
  },
  {
    title: "Payroll System",
    description: "HR payroll platform with automated salary calculations.",
    image: payrollImg,
    codeLink: "https://github.com/Thesalina/ProjectPayrollSystem",
  },
  {
    title: "Know Sudurpashchim",
    description: "Public-facing portal for Sudurpashchim Province.",
    image: sudurpaschimImg,
    codeLink: "https://github.com/Thesalina/Sudurpaschim",
    liveLink: "https://sudurpaschim.vercel.app",
  },
  {
    title: "Bill Splitter API",
    description: "REST API for debt-simplification within groups.",
    image: billsplitterImg,
    codeLink: "https://github.com/Thesalina/Bill-splitter",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="fade-in scroll-mt-24 py-16 bg-chic-alt dark:bg-chic-darkAlt transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 xl:px-0 xl:max-w-5xl">
        <div className="space-y-2 pt-1 pb-4 sm:pt-2 sm:pb-6 md:space-y-5 md:pt-2">
          <h1 className="text-2xl font-extrabold leading-8 tracking-tight text-chic-text dark:text-chic-darkText sm:text-3xl sm:leading-9 md:text-4xl md:leading-11 lg:text-5xl lg:leading-13">
            <span className="text-chic-accent">Projects</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-chic-muted dark:text-chic-darkMuted">
            A selection of my recent work.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative flex flex-col">
              <a href={project.liveLink || project.codeLink} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-sm bg-chic-bg dark:bg-chic-darkBg aspect-video border border-transparent group-hover:border-chic-accent/50 transition-colors duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                />
              </a>
              <div className="pt-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-chic-text dark:text-chic-darkText group-hover:text-chic-accent transition-colors duration-300">
                  <a href={project.liveLink || project.codeLink} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </h3>
                <p className="mt-2 text-sm font-light text-chic-muted dark:text-chic-darkMuted line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-chic-text dark:text-chic-darkText hover:text-chic-accent dark:hover:text-chic-accent transition-colors duration-300"
                  >
                    Source Code <span className="ml-1">→</span>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-chic-text dark:text-chic-darkText hover:text-chic-accent dark:hover:text-chic-accent transition-colors duration-300"
                    >
                      Live Demo <span className="ml-1">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
