import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-black text-white py-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white flex items-center hover:text-pink-400 cursor-pointer transition-all duration-300">
          SALINA BISWOKARMA
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
        {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`} // Converts "Home" to "#home"
                className={`cursor-pointer transition-all duration-300 ${
                  activeItem === item ? "text-pink-400" : "hover:text-pink-400"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </a>
            ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <FaTimes className="text-white text-3xl" />
            ) : (
              <FaBars className="text-white text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } absolute top-0 right-0 w-full bg-black text-white py-4 px-6 md:hidden transition-transform duration-300`}
      >
        <ul className="flex flex-col space-y-6">
          
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`} // Converts "Home" to "#home"
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
