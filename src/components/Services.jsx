import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

// Move services data outside of the component to avoid re-defining it every render
const services = [
  {
    icon: "fas fa-laptop-code",
    title: "Web Development",
    description: "I build responsive websites and web apps using React, Tailwind CSS, and Node.js. From landing pages to full platforms, I focus on making things that look good and work well.",
  },
  {
    icon: "fas fa-server",
    title: "Backend & APIs",
    description: "I design and build RESTful APIs using Express.js and Spring Boot. I have worked on user authentication, session management, and connecting frontends to databases.",
  },
  {
    icon: "fas fa-database",
    title: "Databases",
    description: "I work with MySQL and MongoDB for storing and managing data. Whether it is designing schemas or writing queries, I try to keep things organized and efficient.",
  },
  {
    icon: "fas fa-code",
    title: "Languages I Use",
    description: "JavaScript is my go-to, but I also write Java, Python, and a bit of TypeScript. I pick whatever makes sense for the project I am working on.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Frontend Focus",
    description: "I build user interfaces with React and make them responsive with Tailwind CSS. I care about how a page feels, not just how it looks.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-black text-pink-400 relative">
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
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Items */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
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
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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
