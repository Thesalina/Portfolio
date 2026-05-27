import { motion } from "framer-motion";
import payrollImg from "../assets/photo/payroll.png";
import sudurpaschimImg from "../assets/photo/sudurpaschim.png";
import billsplitterImg from "../assets/photo/billspliter.png";
import mindfullImg from "../assets/photo/mildfull.png";

const projects = [
  {
    title: "Mindfull",
    description: "A mental health wellness platform built during my internship at Digital Pathshala — React.js frontend, Express.js backend, RESTful APIs for user sessions and content management.",
    image: mindfullImg,
    codeLink: "https://github.com/Thesalina/Mindfull",
    liveLink: "https://mindfull-kappa.vercel.app",
  },
  {
    title: "Payroll Management System",
    description: "Final-year project automating salary computation, attendance tracking, and employee management workflows — built with React and Spring Boot.",
    image: payrollImg,
    codeLink: "https://github.com/Thesalina/ProjectPayrollSystem",
  },
  {
    title: "Sudurpaschim",
    description: "A web application showcasing services and information for the Sudurpaschim region.",
    image: sudurpaschimImg,
    codeLink: "https://github.com/Thesalina/Sudurpaschim",
    liveLink: "https://sudurpaschim.vercel.app",
  },
  {
    title: "Bill Splitter",
    description: "An app to split bills and track shared expenses easily.",
    image: billsplitterImg,
    codeLink: "https://github.com/Thesalina/Bill-splitter",
  },
];

   const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 text-pink-400">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-pink-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-0 left-0 w-full h-full bg-black opacity-50 hover:opacity-0 transition-all duration-300"
                ></a>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-pink-400 mb-2">{project.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-600 transition-all duration-300"
                  >
                    View Source Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-600 transition-all duration-300 font-semibold"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
