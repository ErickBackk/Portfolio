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
        ? 'backdrop-blur-xl bg-slate-900/80 border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
              alt="EuSouOBackk" 
              className="w-8 h-8 rounded-full border border-purple-400/50"
            />
            <span className="text-lg font-semibold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Backk</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#" 
              className="backdrop-blur-sm bg-white/10 border border-white/20 hover:border-purple-400/50 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all"
              title={t('nav.home')}
            >
              <Home size={18} />
            </a>
            <a 
              href="#videos" 
              className="backdrop-blur-sm bg-white/10 border border-white/20 hover:border-purple-400/50 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all"
              title={t('nav.videos')}
            >
              <Video size={18} />
            </a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="backdrop-blur-sm bg-white/10 border border-white/20 hover:border-red-400/50 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all"
              title="YouTube"
            >
              <Youtube size={18} />
            </a>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden backdrop-blur-sm bg-white/10 border border-white/20 p-2 rounded-lg text-white/80 hover:text-white transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-slate-900/90 border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <a 
              href="#" 
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-white/10 border border-white/20 p-3 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              <span>{t('nav.home')}</span>
            </a>
            <a 
              href="#videos" 
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-white/10 border border-white/20 p-3 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Video size={18} />
              <span>{t('nav.videos')}</span>
            </a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-white/10 border border-white/20 p-3 rounded-lg"
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