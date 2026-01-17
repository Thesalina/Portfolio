import { motion } from "framer-motion";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-pink-400 mb-4 uppercase">
            Portfolio
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
            <span className="text-white">SALINA</span>
            <br />
            <span className="text-gradient">BISWOKARMA</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            I craft digital experiences with a focus on motion, aesthetics, and user interaction.
            Ready to bring your creative ideas to life.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#contact">
              <Button variant="primary" className="text-lg px-8 py-4">
                Let's Discuss
              </Button>
            </a>
            <a href="#portfolio">
              <Button variant="secondary" className="text-lg px-8 py-4">
                View Work
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-pink-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
