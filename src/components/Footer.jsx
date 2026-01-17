import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600 mb-4">
          SALINA BISWOKARMA
        </h2>

        <div className="flex justify-center space-x-8 mb-8">
          {[
            { icon: FaGithub, href: "https://github.com/Thesalina" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/salina-bishwokarma-5bb0a91b9/" },
            { icon: FaFacebook, href: "https://www.facebook.com/salina.gotame.23" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#f472b6" }}
              className="text-slate-400 text-3xl transition-colors duration-300"
            >
              <social.icon />
            </motion.a>
          ))}
        </div>

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Salina Biswokarma. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
