import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // Close mobile nav on route change
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/mission', label: 'Mission' },
    { to: '/partners', label: 'Partners' },
    { to: '/events', label: 'Events' },
    { to: '/founder', label: 'Founder' }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/daisy-s-journey/',
      label: 'LinkedIn'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/journeywithdaisy/',
      label: 'Instagram'
    }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/daisylogoNObaycrest(1).png"
              alt="Daisy Icon"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-primary-600">Daisy's Journey</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-3 py-2 text-lg font-medium transition-colors duration-300
                  ${location.pathname === to ? 'text-primary-700 border-b-2 border-primary-500' : 'text-gray-700 hover:text-primary-600'}`}
              >
                {label}
              </Link>
            ))}
            {/* Social Icons */}
            <div className="ml-6 flex items-center space-x-4 border-l border-gray-300 pl-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  aria-label={label}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 lg:hidden ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 transition-transform duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } shadow-xl pt-24 px-6 flex flex-col`}
        >
          <nav className="flex flex-col space-y-6 text-left">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-xl font-medium text-gray-800 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="flex justify-start space-x-6 pt-6 border-t border-gray-200">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 flex items-center space-x-2"
                  aria-label={label}
                >
                  <Icon size={24} />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
