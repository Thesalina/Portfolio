import { motion } from "framer-motion";
//import heroImage from "../assets/girly.jpg"; // Place image inside 'src/assets' folder

const HeroSection = () => {
  return (
    <section className="bg-black text-white relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-pink-400">SALINA</span> IS HERE TO BE
          <br />
          YOUR <span className="underline">ASSISTANT</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I am here, ready to help you create creative digital products.
          
        </motion.p>
     <br/>
        {/* CTA Button */}
       {/* <motion.button
          className="mt-6 px-10 py-4 bg-pink-400 text-black font-semibold rounded-full text-lg hover:bg-pink-300 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let’s Discuss
        </motion.button>
       */}
       {/* CTA Button */}
       <motion.a
          href="#contact"
          className="mt-6 px-10 py-4 bg-pink-400 text-black font-semibold rounded-full text-lg hover:bg-pink-300 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
         >
       Let’s Discuss
      </motion.a>
      </div>

      {/* Hero Image */}
      <motion.div
        className="absolute bottom-0 right-10 w-[250px] md:w-[350px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        
      </motion.div>

      {/* Decorative Blur Effect */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-60"></div>
    </section>
  );
};

export default HeroSection;
