import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-3 border-b border-blue-900/30' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-full">
              <Youtube size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold">EuSouOBackk</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">Home</a>
            <a href="#videos" className="text-white hover:text-blue-400 transition-colors">Videos</a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors"
            >
              YouTube Channel
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 border-t border-blue-900/30 absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col gap-4">
            <a 
              href="#" 
              className="text-white hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#videos" 
              className="text-white hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Videos
            </a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors text-center"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;