// Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Effect to apply and store the theme
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggles between 'light' and 'dark' themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Toggles the mobile navigation menu open/close state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handles navigation link clicks, scrolls to section, and closes menu
  const handleNavClick = (id) => {
    // Check if the element exists before attempting to scroll
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-brand">Bhaskar Rao</div>

      {/* Navigation links for desktop and mobile */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => handleNavClick("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handleNavClick("about")}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => handleNavClick("projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => handleNavClick("projects")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleNavClick("contact")}>
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-icons">
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        {/* Mobile menu toggle button */}
        <button
          onClick={handleToggle}
          className="menu-toggle"
          aria-expanded={isOpen} // Indicates if the controlled element is expanded or collapsed
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default NavBar;