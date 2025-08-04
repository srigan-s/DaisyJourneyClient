import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Stethoscope } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative py-3 px-6 font-medium text-lg transition-all duration-300 
        ${isActive 
          ? 'text-primary-700' 
          : 'text-gray-700 hover:text-primary-600'
        }
        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
        after:bg-primary-500 after:transition-all after:duration-300
        ${isActive ? 'after:w-full' : 'hover:after:w-full'}`}
      >
        {children}
      </Link>
    );
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

          {/* Desktop Navigation */}
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
                className="text-gray-600 hover:text-primary-600 transition-colors duration-300 p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="https://www.instagram.com/journeywithdaisy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-300 p-2"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="lg:hidden text-gray-700 focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } pt-24`}
        >
          <div className="flex flex-col items-center space-y-8 p-8">
            <Link 
              to="/" 
              className="text-2xl font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/mission" 
              className="text-2xl font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Mission
            </Link>
            <Link 
              to="/partners" 
              className="text-2xl font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Partners
            </Link>
            <Link 
              to="/events" 
              className="text-2xl font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/founder" 
              className="text-2xl font-medium text-gray-800 hover:text-primary-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Founder
            </Link>
            
            <div className="flex space-x-8 mt-12">
              <a 
                href="https://www.linkedin.com/company/daisy-s-journey/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://www.instagram.com/journeywithdaisy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;