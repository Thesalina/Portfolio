import { motion } from "framer-motion";
import Card from "./ui/Card";
import Button from "./ui/Button";

const projects = [
  {
    title: "Digital Clock",
    description: "A sleek functional digital clock built with modern JS.",
    image: "photo/0.jpg",
    codeLink: "https://github.com/Thesalina/Digital-clock",
  },
  {
    title: "Weather App",
    description: "Real-time weather tracking application.",
    image: "photo/9.jpg",
    codeLink: "https://github.com/Thesalina/Weather-app",
  },
  {
    title: "Mindfull",
    description: "A dedicated platform for better mental health awareness.",
    image: "photo/8.jpg",
    codeLink: "http://github.com/Thesalina/Mindfull",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of projects that showcase my passion for building creative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-0 overflow-hidden group">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-800 animate-pulse" /> {/* Placeholder/Loading skeleton if needed */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400/1e293b/ec4899?text=Project"; // Fallback image
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      View Code
                    </Button>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    React
                  </span>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                    Tailwind
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
