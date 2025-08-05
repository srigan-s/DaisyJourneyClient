import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Stethoscope } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative py-3 px-6 font-medium text-lg transition-all duration-300 
          ${isActive ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'}
          after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
          after:bg-primary-500 after:transition-all after:duration-300
          ${isActive ? 'after:w-full' : 'hover:after:w-full'}`}
      >
        {children}
      </Link>
    );
  };

  // Proper label for mobile menu links
  const getLabel = (path: string) => {
    if (path === '/') return 'Home';
    return path.slice(1, 2).toUpperCase() + path.slice(2);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Stethoscope className="text-primary-600" size={28} />
            <span className="text-2xl md:text-3xl font-bold text-primary-600">Daisy's Journey</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mission">Mission</NavLink>
            <NavLink to="/partners">Partners</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/founder">Founder</NavLink>
            <div className="ml-8 flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/daisy-s-journey/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-primary-600 p-2 transition-colors duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/journeywithdaisy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-primary-600 p-2 transition-colors duration-300"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 lg:hidden pointer-events-none ${
            isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobile Slide-In Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } shadow-xl pt-24 px-6 flex flex-col`}
          aria-hidden={!isOpen}
        >
          <nav className="flex flex-col space-y-8 text-center flex-grow">
            {['/', '/mission', '/partners', '/events', '/founder'].map((path) => (
              <Link
                key={path}
                to={path}
                className="text-2xl font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {getLabel(path)}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center space-x-8 mt-12">
            <a
              href="https://www.linkedin.com/company/daisy-s-journey/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-primary-600"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/journeywithdaisy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-600 hover:text-primary-600"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
