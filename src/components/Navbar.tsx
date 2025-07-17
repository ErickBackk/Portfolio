import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, Home, Video, User, Plus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and profile */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors">
              <User className="text-white" size={18} />
            </button>
            <button className="w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-xl flex items-center justify-center transition-colors">
              <Plus className="text-white" size={18} />
            </button>
          </div>

          {/* Center - Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors border-b-2 border-gray-900 pb-1"
            >
              Home
            </a>
            <a 
              href="#videos" 
              className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
            >
              Search
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
            >
              Message
            </a>
          </div>

          {/* Right side - Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <button className="px-6 py-2 border border-gray-300 hover:border-gray-400 rounded-full font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Log in
            </button>
            <button className="px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full font-medium transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#" 
              className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </a>
            <a 
              href="#videos" 
              className="flex items-center gap-3 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Video size={18} />
              <span>Search</span>
            </a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Youtube size={18} />
              <span>YouTube</span>
            </a>
            <div className="pt-2 border-t border-gray-200">
              <LanguageToggle />
            </div>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full font-medium text-gray-700">
                Log in
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-full font-medium">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;