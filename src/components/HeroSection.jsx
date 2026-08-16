import { motion } from "framer-motion";
import resume from "../assets/Salina_Bishwokarma_CV.pdf";

const HeroSection = () => {
  return (
    <section className="bg-chic-bg dark:bg-chic-darkBg text-chic-text dark:text-chic-darkText relative min-h-screen flex items-center justify-start overflow-hidden transition-colors duration-500">
      
      {/* Subtle glowing orb instead of bright blobs, now with a hint of pink */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full bg-chic-accent/20 dark:bg-chic-accent/10 blur-[100px] opacity-70 pointer-events-none"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 xl:max-w-5xl relative z-10 flex flex-col justify-center py-14 sm:py-16 md:py-24">
        
        <motion.h1
          className="text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, I'm <br className="md:hidden" />
          <span className="text-chic-accent italic opacity-90 font-serif">Salina</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-chic-muted dark:text-chic-darkMuted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Full-Stack Developer
        </motion.p>
        
        <motion.p
          className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 font-light text-base sm:text-lg text-chic-muted dark:text-chic-darkMuted lg:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <span className="block">
            Explore 
            <a className="mx-2 font-medium text-chic-text dark:text-chic-darkText hover:text-chic-accent dark:hover:text-chic-accent transition-colors underline decoration-1 underline-offset-4" href="#about">
              <span>my background</span>
            </a>
            or
            <a className="ml-2 font-medium text-chic-text dark:text-chic-darkText hover:text-chic-accent dark:hover:text-chic-accent transition-colors underline decoration-1 underline-offset-4" href="#contact">
              <span>get in touch</span>
            </a>
          </span>
          <span className="block mt-4 text-sm sm:text-base opacity-70 tracking-wide uppercase">
            I'm a Computer Engineering developer from Nepal focused on building modern web applications, full-stack systems, and thoughtful digital experiences.
          </span>
        </motion.p>
        
       {/* CTA Buttons */}
       <motion.div 
         className="flex flex-wrap gap-4 mt-10"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.8, duration: 1 }}
       >
        <a
           href={resume}
           target="_blank"
           rel="noreferrer"
           className="px-8 py-4 bg-chic-accent text-white dark:bg-chic-accent dark:text-white font-medium rounded-sm text-sm sm:text-base tracking-widest uppercase transition-all duration-300 hover:opacity-80"
          >
          Download CV
        </a>
       </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
