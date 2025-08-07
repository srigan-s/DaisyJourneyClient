import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram, Stethoscope } from 'lucide-react';
import logo from '/daisy-icon.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBgClass, setNavbarBgClass] = useState('bg-transparent');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBgClass(window.scrollY > 50 ? 'bg-white shadow-md' : 'bg-transparent');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${navbarBgClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Daisy Icon" className="w-10 h-10 object-contain" />
            <span className="text-2xl md:text-3xl font-bold text-primary-600">Daisy's Journey</span>
          </Link>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['/', '/mission', '/team', '/contact'].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`text-lg transition-colors duration-200 ${
                  isActive(path)
                    ? 'text-primary-700 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-primary-600" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-primary-600" />
              </a>
            </div>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start px-6 py-4 space-y-4">
            {['/', '/mission', '/team', '/contact'].map((path, index) => (
              <Link
                key={index}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`text-lg w-full transition-colors duration-200 ${
                  isActive(path)
                    ? 'text-primary-700'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
            <div className="flex items-center space-x-4 mt-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-primary-600" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-primary-600" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
