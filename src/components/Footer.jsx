import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-chic-alt bg-chic-bg py-8 font-light text-chic-muted transition-colors duration-500 dark:border-chic-darkAlt dark:bg-chic-darkBg dark:text-chic-darkMuted sm:mt-16 sm:py-10">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 xl:px-0">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-0">
          
          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Thesalina"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl transition-all duration-300 hover:-translate-y-0.5 hover:text-chic-accent active:scale-95 sm:text-2xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/salina-bishwokarma-5bb0a91b9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl transition-all duration-300 hover:-translate-y-0.5 hover:text-chic-accent active:scale-95 sm:text-2xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-chic-accent active:scale-95"
            >
              <FiFileText className="text-lg" />
              <span>Resume</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs tracking-wide">
            © 2026{" "}
            <span className="font-medium text-chic-text dark:text-chic-darkText">
              Salina Bishwokarma
            </span>
          </p>

          {/* Tagline */}
          <p className="text-xs tracking-wide">Built with curiosity & code.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;