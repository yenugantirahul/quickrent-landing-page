import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-blue-500">QuickRent</div>
        <button
          className="text-blue-500 md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul
          className={`md:flex md:space-x-6 space-y-6 md:space-y-0 fixed md:static bg-white inset-0 md:inset-auto flex-col md:flex-row items-center justify-center transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:transform-none`}
        >
          <li>
            <a
              href="#home"
              className="text-lg font-medium hover:text-blue-500 transition"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-lg font-medium hover:text-blue-500 transition"
              onClick={closeMenu}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#listings"
              className="text-lg font-medium hover:text-blue-500 transition"
              onClick={closeMenu}
            >
              Listings
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg font-medium hover:text-blue-500 transition"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
