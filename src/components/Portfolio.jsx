import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "A web application that allows users to create and manage tasks.",
    image: "photo/8.jpg",
    codeLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "A web app that tells weather of diffrent places.",
    image: "photo/9.jpg",
    codeLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    description: "Mindfull – A Website for Better Mental Health .",
    image: "/path/to/project3.jpg",
    codeLink: "https://github.com/yourusername/project3",
  },
  // Add more projects as needed
];

   const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-800 text-pink-400">
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
                <p className="text-lg text-pink-400 mb-4">{project.description}</p>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-600 transition-all duration-300"
                >
                 View Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
