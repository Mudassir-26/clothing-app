//client/src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navClass = ({ isActive }) =>
    `block py-2 px-4 transition ${
      isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
    } hover:text-blue-600`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600 tracking-wide"
          onClick={closeMenu}
        >
          ClothesPrint
        </NavLink>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none text-gray-600"
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Desktop Nav - No space-x (no gaps) */}
        <div className="hidden md:flex text-sm md:text-base">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/create-product" className={navClass}>Create Product</NavLink>
          <NavLink to="/login" className={navClass}>Login</NavLink>
          <NavLink to="/signup" className={navClass}>Sign Up</NavLink>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" className={navClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/create-product" className={navClass} onClick={closeMenu}>Create Product</NavLink>
          <NavLink to="/login" className={navClass} onClick={closeMenu}>Login</NavLink>
          <NavLink to="/signup" className={navClass} onClick={closeMenu}>Sign Up</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
