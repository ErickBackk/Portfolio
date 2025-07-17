import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, Home, Video } from 'lucide-react';
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
        ? 'bg-white/10 backdrop-blur-xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
              alt="Backk" 
              className="w-8 h-8 rounded-full border border-white/30"
            />
            <span className="text-lg font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              backk graphics
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {t('nav.home')}
            </a>
            <a 
              href="#videos" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {t('nav.videos')}
            </a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              YouTube
            </a>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#" 
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              <span>{t('nav.home')}</span>
            </a>
            <a 
              href="#videos" 
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Video size={18} />
              <span>{t('nav.videos')}</span>
            </a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <Youtube size={18} />
              <span>YouTube</span>
            </a>
            <div className="pt-2">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;