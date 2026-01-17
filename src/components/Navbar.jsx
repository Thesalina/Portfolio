import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const navLinks = ["Home", "Services", "Portfolio", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <a href="#" className="relative group">
          <h1 className="text-2xl font-bold text-white tracking-widest group-hover:text-pink-400 transition-colors duration-300">
            SALINA<span className="text-pink-400">.</span>
          </h1>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => handleItemClick(item)}
                className={`relative text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${activeItem === item ? "text-pink-400" : "text-slate-300 hover:text-white"
                  }`}
              >
                {item}
                {activeItem === item && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-400"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center space-y-8"
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => handleItemClick(item)}
                className={`text-2xl font-light uppercase tracking-widest ${activeItem === item ? "text-pink-400" : "text-white hover:text-pink-400"
                  }`}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
