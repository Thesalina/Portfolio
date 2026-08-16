import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "About", "Experience", "Portfolio", "Contact"];
      let currentSection = "Home";
      for (const item of sections) {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = item;
            break;
          }
        }
      }
      setActiveItem(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item);
    setIsMenuOpen(false);
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveItem("Home");
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-chic-bg/90 dark:bg-chic-darkBg/90 backdrop-blur-md text-chic-text dark:text-chic-darkText py-4 sm:py-6 fixed top-0 w-full z-50 transition-all duration-500">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight hover:text-chic-accent cursor-pointer transition-colors duration-300">
          <a href="#home" onClick={handleLogoClick}>SALINA</a>
        </h1>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1 text-sm sm:text-base font-medium">
            {["Home", "About", "Experience", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`p-2 sm:p-4 rounded-md transition-colors duration-300 ${
                    activeItem === item 
                      ? "text-chic-accent font-bold" 
                      : "text-chic-muted dark:text-chic-darkMuted hover:text-chic-accent dark:hover:text-chic-accent"
                  }`}
                  onClick={(e) => handleItemClick(e, item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode} 
            aria-label="Toggle Dark Mode" 
            className="ml-2 mr-1 sm:mr-2 h-9 w-9 rounded p-2 flex items-center justify-center transition-all duration-300 text-chic-text dark:text-chic-darkText hover:text-chic-accent dark:hover:text-chic-accent active:scale-95"
          >
            {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              aria-label="Toggle menu" 
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-chic-alt dark:border-chic-darkAlt bg-chic-bg dark:bg-chic-darkBg transition-all duration-300 hover:text-chic-accent dark:hover:text-chic-accent active:scale-95"
            >
              {isMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-20 right-4 z-50 w-52 bg-chic-bg dark:bg-chic-darkBg shadow-xl border border-chic-alt dark:border-chic-darkAlt rounded-sm overflow-hidden transition-all duration-300 origin-top-right ${
          isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col w-full">
          {["Home", "About", "Experience", "Portfolio", "Contact"].map((item) => (
            <li key={item} className="border-b border-chic-alt dark:border-chic-darkAlt last:border-0">
              <a
                href={`#${item.toLowerCase()}`}
                className={`block px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
                  activeItem === item 
                    ? "bg-chic-alt dark:bg-chic-darkAlt text-chic-accent" 
                    : "text-chic-muted dark:text-chic-darkMuted hover:bg-chic-alt dark:hover:bg-chic-darkAlt hover:text-chic-accent dark:hover:text-chic-accent"
                }`}
                onClick={(e) => handleItemClick(e, item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
