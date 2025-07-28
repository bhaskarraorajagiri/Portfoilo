// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import { useTheme } from '../ThemeContext';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); 

  const handleToggle = () => setIsOpen(!isOpen);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-brand">Bhaskar Rao</div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => handleNavClick("home")}>Home</a></li>
        <li><a href="#about" onClick={() => handleNavClick("about")}>About</a></li>
        <li><a href="#projects" onClick={() => handleNavClick("projects")}>Projects</a></li>
        <li><a href="#skills" onClick={() => handleNavClick("skills")}>Skills</a></li>
        <li><a href="#contact" onClick={() => handleNavClick("contact")}>Contact</a></li>
      </ul>

      <div className="nav-icons">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
        <button
          onClick={handleToggle}
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
