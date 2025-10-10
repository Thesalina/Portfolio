import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative h-screen bg-black text-white py-16 flex items-center justify-center"
    >
      {/* Animated Decorative Background Effect */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48  bg-pink-500 bg-pink-400 rounded-full blur-3xl opacity-40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-pink-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center  justify-center gap-6 md:gap-12">
          {/* About Text */}
          <motion.div
            className="max-w-xl text-center md:text-left bg-white  p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="text-lg text-black mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              I am a passionate developer with expertise in creating visually
              appealing and user-friendly web interfaces. With a keen eye for
              design and attention to detail, I strive to build websites that
              leave a lasting impression.
            </motion.p>
            <motion.p
              className="text-lg text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I have experience with various front-end technologies like HTML,
              CSS, JavaScript, React, and Node.js, and I’m always eager to learn
              and improve my skills.
            </motion.p>
          </motion.div>

          {/* Profile Image with Animation */}
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg transform hover:scale-105 transition-transform duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src="https://as1.ftcdn.net/v2/jpg/08/33/84/98/1000_F_833849841_s9ikrcxCtGcEzMtVCp4cFpnUKhMJRkWK.jpg"
              alt="SALINA"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
