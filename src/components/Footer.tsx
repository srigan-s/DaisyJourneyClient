import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* About Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Daisy's Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering lives through compassionate hospital volunteering, 
                creating meaningful connections, and fostering healing environments.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/daisy-s-journey/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary-300 transition-colors duration-300 p-2 bg-white/10 rounded-lg hover:bg-white/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/journeywithdaisy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary-300 transition-colors duration-300 p-2 bg-white/10 rounded-lg hover:bg-white/20"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/mission" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/founder" className="text-gray-300 hover:text-white transition-colors duration-200 text-lg">
                    Founder's Story
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">3560 Bathurst St, North York, ON M6A 1W1</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 flex-shrink-0" />
                  <span className="text-gray-300">(647) 615-0533</span>
                </li>
               <li className="flex items-start">
  <Mail size={20} className="mr-3 mt-1 flex-shrink-0" />
  <div className="text-gray-300 break-words max-w-xs">
    <a 
      href="mailto:daisysjourney.program@gmail.com" 
      className="hover:text-white transition-colors duration-200"
    >
      daisysjourney.program@gmail.com
    </a>
  </div>
</li>

              </ul>
            </div>
            
            {/* Newsletter Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest events and opportunities.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-400 text-white placeholder-gray-400"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full px-4 py-3 bg-secondary-500 hover:bg-secondary-600 rounded-lg text-white font-medium transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-primary-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Daisy's Journey. All rights reserved.
              </p>
              <p className="text-gray-400 flex items-center">
                Made with <Heart size={16} className="mx-2 text-secondary-400" /> for the community
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;