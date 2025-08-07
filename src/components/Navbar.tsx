import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const navbarBgClass = isOpen
    ? 'bg-white shadow-lg py-4'
    : isScrolled
    ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
    : 'bg-transparent py-6';

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`
          relative py-2 px-4 font-medium text-lg transition-colors duration-300
          ${isActive ? 'text-primary-700' : 'text-gray-700 hover:text-primary-600'}
        `}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    );
  };

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/mission', label: 'Mission' },
    { to: '/partners', label: 'Partners' },
    { to: '/events', label: 'Events' },
    { to: '/founder', label: 'Founder' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${navbarBgClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/daisylogoNObaycrest(1).png"
              alt="Daisy Icon"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span className="text-2xl md:text-3xl font-bold text-primary-600">
              Daisy's Journey
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
            ))}
            <div className="flex items-center space-x-4 border-l border-gray-300 pl-6">
              <a
                href="https://www.linkedin.com/company/daisy-s-journey/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/journeywithdaisy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
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

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } shadow-xl pt-24 px-6 flex flex-col`}
          aria-hidden={!isOpen}
        >
          <nav className="flex flex-col space-y-8 text-center flex-grow">
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to}>{label}</NavLink>
            ))}
            <div className="flex justify-center space-x-8 mt-4">
              <a
                href="https://www.linkedin.com/company/daisy-s-journey/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-primary-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/journeywithdaisy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-primary-600"
              >
                <Instagram size={24} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar:
