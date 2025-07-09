import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, ListStart, Video } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

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
      isScrolled ? 'bg-gradient-to-r from-slate-900/90 via-blue-950/80 to-slate-900/90 backdrop-blur-xl py-3 border-b border-blue-500/30 shadow-lg shadow-blue-900/20' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
             <img 
              src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
              alt="EuSouOBackk" 
              className="w-10 h-10 md:w-10 md:h-10 rounded-full shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/30"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Backk</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-blue-100 hover:text-cyan-300 transition-all duration-300 hover:scale-110" title={t('nav.home')}>
              <ListStart size={20} />
            </a>
            <a href="#videos" className="text-blue-100 hover:text-cyan-300 transition-all duration-300 hover:scale-110" title={t('nav.videos')}>
              <Video size={20} />
            </a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-cyan-300 rounded-full transition-all duration-300 hover:scale-110"
              title="YouTube"
            >
              <Youtube size={20} />
            </a>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-100 hover:text-cyan-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900/95 to-blue-950/90 backdrop-blur-xl border-t border-blue-500/30 absolute top-full left-0 right-0 p-4 shadow-lg shadow-blue-900/20">
          <div className="flex flex-col gap-4">
            <a 
              href="#" 
              className="rounded-full text-blue-100 hover:text-cyan-300 transition-all duration-300 flex justify-center items-center gap-2 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListStart size={30} />
              <span>{t('nav.home')}</span>
            </a>
            <a 
              href="#videos" 
              className="rounded-full text-blue-100 hover:text-cyan-300 transition-all duration-300 flex justify-center items-center gap-2 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              <Video size={30} />
              <span>{t('nav.videos')}</span>
            </a>
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full transition-all duration-300 text-blue-100 hover:text-cyan-300 text-center flex justify-center items-center gap-2 hover:scale-105"
            >
              <Youtube size={30} />
              <span>YouTube</span>
            </a>
            <div className="flex justify-center">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;