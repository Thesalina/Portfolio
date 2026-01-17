import { motion } from "framer-motion";
import { FaCode, FaProjectDiagram, FaLayerGroup, FaLaptopCode, FaServer, FaDatabase, FaCloud, FaBug, FaTerminal, FaCogs, FaUsers, FaLightbulb } from "react-icons/fa";
import Card from "./ui/Card";

const services = [
  {
    icon: FaCode,
    title: "Programming Languages",
    description: "Strong foundation in languages like Python, JavaScript, Java, and C# for building versatile software solutions.",
  },
  {
    icon: FaProjectDiagram,
    title: "Data Structures & Algorithms",
    description: "Skilled in solving complex problems using efficient data structures and algorithms.",
  },
  {
    icon: FaLayerGroup,
    title: "Version Control",
    description: "Experienced with Git and GitHub for code versioning, collaboration, and source control.",
  },
  {
    icon: FaLaptopCode,
    title: "Web Development",
    description: "Proficient in building responsive front-end interfaces and robust back-end services using modern frameworks.",
  },
  {
    icon: FaServer,
    title: "API Development",
    description: "Able to design, build, and integrate RESTful and GraphQL APIs for scalable applications.",
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description: "Knowledgeable in both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase) databases.",
  },
  {
    icon: FaCloud,
    title: "Cloud Solutions",
    description: "Deploy and manage applications using cloud services like AWS, GCP, and Azure.",
  },
  {
    icon: FaBug,
    title: "Testing & Debugging",
    description: "Utilize tools and methodologies for unit testing, integration testing, and debugging to ensure code quality.",
  },
  {
    icon: FaTerminal,
    title: "Command Line Tools",
    description: "Comfortable using the command line for development tasks, scripting, and automation.",
  },
  {
    icon: FaCogs,
    title: "DevOps & CI/CD",
    description: "Understand CI/CD pipelines, containerization with Docker, and basic Kubernetes operations.",
  },
  {
    icon: FaUsers,
    title: "Collaboration & Agile",
    description: "Experienced working in agile teams with tools like Jira, Trello, and Slack for effective communication.",
  },
  {
    icon: FaLightbulb,
    title: "Problem-Solving",
    description: "Creative thinker with a passion for solving real-world problems through code and technology.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Comprehensive technical solutions for your digital needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:bg-white/5 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-2xl text-pink-400 group-hover:text-purple-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
