import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-pink-400 py-6 text-center flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-lg font-medium">© 2024 SALINA. All rights reserved.</p>

      {/* Social Media Links */}
      <div className="flex space-x-6 mt-4">
        <a
          href="https://github.com/Thesalina"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 transition-colors duration-300 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/salina-bishwokarma-5bb0a91b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 transition-colors duration-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/salina.gotame.23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 transition-colors duration-300 text-2xl"
        >
          <FaFacebook />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
