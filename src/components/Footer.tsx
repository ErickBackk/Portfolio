import React from 'react';
import { Youtube, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/20 py-12 z-10 backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="text-lg font-medium text-white">Backk</span>
            </div>
            <p className="text-white/70 text-sm max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Right side */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm backdrop-blur-sm bg-white/10 border border-white/20 px-3 py-2 rounded-lg"
            >
              <Youtube size={16} />
              YouTube
            </a>
            
            <div className="text-center md:text-right">
              <p className="text-white/60 text-xs mb-1">
                {t('footer.made')} <Heart size={12} className="inline text-red-400" /> {t('footer.for')}
              </p>
              <p className="text-white/50 text-xs">
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