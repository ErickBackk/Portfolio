import React from 'react';
import { Youtube, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/20 py-16 z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-700/40 to-blue-600/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img 
                src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
                alt="Backk" 
                className="w-8 h-8 rounded-full border border-white/30"
              />
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                backk graphics
              </span>
            </div>
            <p className="text-blue-100/80 text-sm max-w-md backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Right side */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm"
            >
              <Youtube size={16} />
              YouTube
            </a>
            
            <div className="text-center md:text-right">
              <p className="text-blue-200/60 text-xs mb-2 flex items-center gap-1">
                {t('footer.made')} <Heart size={12} className="text-red-400" /> {t('footer.for')}
              </p>
              <p className="text-blue-300/40 text-xs">
                © {new Date().getFullYear()} Backk. {t('footer.rights')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;