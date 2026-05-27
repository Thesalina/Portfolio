import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-white/90 dark:bg-black/90 backdrop-blur-sm text-gray-900 dark:text-white py-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center hover:text-pink-400 cursor-pointer transition-all duration-300">
          SALINA BISWOKARMA
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 items-center">
        {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`cursor-pointer transition-all duration-300 ${
                  activeItem === item ? "text-pink-400" : "hover:text-pink-400"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </a>
            ))}
          <li>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="text-gray-600 dark:text-white hover:text-pink-400 transition-colors duration-300 text-xl">
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger + Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-gray-600 dark:text-white hover:text-pink-400 transition-colors duration-300 text-xl">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <FaTimes className="text-gray-900 dark:text-white text-3xl" />
            ) : (
              <FaBars className="text-gray-900 dark:text-white text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } absolute top-0 right-0 w-full bg-white dark:bg-black text-gray-900 dark:text-white py-4 px-6 md:hidden transition-transform duration-300 shadow-lg`}
      >
        <ul className="flex flex-col space-y-6">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`cursor-pointer transition-all duration-300 ${
                activeItem === item ? "text-pink-400" : "hover:text-pink-400"
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
