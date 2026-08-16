import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

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
    <section id="services" className="py-24 bg-chic-light text-stone-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
            What I Do.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white p-10 border border-stone-200 hover:border-stone-400 transition-all duration-300 flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl text-stone-800 mb-6 group-hover:text-stone-500 transition-colors duration-300">
                <i className={service.icon} aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
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
