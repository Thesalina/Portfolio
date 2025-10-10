import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

// Move services data outside of the component to avoid re-defining it every render
const services = [
  {
    icon: "fas fa-code",
    title: "Programming Languages",
    description: "Strong foundation in languages like Python, JavaScript, Java, and C# for building versatile software solutions.",
  },
  {
    icon: "fas fa-project-diagram",
    title: "Data Structures & Algorithms",
    description: "Skilled in solving complex problems using efficient data structures and algorithms.",
  },
  {
    icon: "fas fa-layer-group",
    title: "Version Control",
    description: "Experienced with Git and GitHub for code versioning, collaboration, and source control.",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Web Development",
    description: "Proficient in building responsive front-end interfaces and robust back-end services using modern frameworks.",
  },
  {
    icon: "fas fa-server",
    title: "API Development",
    description: "Able to design, build, and integrate RESTful and GraphQL APIs for scalable applications.",
  },
  {
    icon: "fas fa-database",
    title: "Database Management",
    description: "Knowledgeable in both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase) databases.",
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud Solutions",
    description: "Deploy and manage applications using cloud services like AWS, GCP, and Azure.",
  },
  {
    icon: "fas fa-bug",
    title: "Testing & Debugging",
    description: "Utilize tools and methodologies for unit testing, integration testing, and debugging to ensure code quality.",
  },
  {
    icon: "fas fa-terminal",
    title: "Command Line Tools",
    description: "Comfortable using the command line for development tasks, scripting, and automation.",
  },
  {
    icon: "fas fa-cogs",
    title: "DevOps & CI/CD",
    description: "Understand CI/CD pipelines, containerization with Docker, and basic Kubernetes operations.",
  },
  {
    icon: "fas fa-users",
    title: "Collaboration & Agile",
    description: "Experienced working in agile teams with tools like Jira, Trello, and Slack for effective communication.",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Problem-Solving",
    description: "Creative thinker with a passion for solving real-world problems through code and technology.",
  },
  
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-black text-pink-400 relative">
      {/* Animated Background Effects */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-pink-400 mb-12">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Items */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-4xl text-pink-400 mb-4">
                <i className={service.icon} aria-hidden="true"></i>
              </div>
              <h3 className="text-2xl font-semibold text-pink-400 mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
