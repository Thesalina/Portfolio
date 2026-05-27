import { motion } from "framer-motion";
import resume from "../assets/Salina_Bishwokarma_CV.pdf";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-white dark:from-black dark:to-black text-gray-900 dark:text-white relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/30 dark:from-black to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-pink-400">SALINA</span> <span className="underline">BISHWOKARMA</span>
          <br />
          <span className="text-3xl md:text-5xl">Full-Stack Developer</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          React · Spring Boot · MySQL | Computer Engineering Graduate | Open to Internship Opportunities
          
        </motion.p>
     <br/>
       {/* CTA Buttons */}
       <div className="flex gap-4 justify-center mt-6">
        <motion.a
           href="#contact"
           className="px-10 py-4 bg-pink-400 text-black font-semibold rounded-full text-lg hover:bg-pink-300 transition-all duration-300 shadow-lg"
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
          >
        Let’s Discuss
       </motion.a>
       <motion.a
           href={resume}
           target="_blank"
           className="px-10 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-full text-lg hover:bg-pink-400 hover:text-black transition-all duration-300 shadow-lg"
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
          >
        Download Resume
       </motion.a>
       </div>
      </div>

      {/* Decorative Blur Effect */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-60"></div>
    </section>
  );
};

export default HeroSection;
