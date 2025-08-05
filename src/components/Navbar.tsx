import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Mission', to: '/mission' },
    { label: 'Programs', to: '/programs' },
    { label: 'Events', to: '/events' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Daisy's Journey Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-primary-700">Daisy’s Journey</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-gray-700 hover:text-primary-500 transition font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-6 flex flex-col space-y-6">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={closeMenu}
              className="text-xl text-gray-800 hover:text-primary-500 font-semibold transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
