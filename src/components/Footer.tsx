import React from 'react';
import { Youtube, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-slate-800 py-12 z-10 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="text-lg font-medium text-white">Backk</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Right side */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <Youtube size={16} />
              YouTube
            </a>
            
            <div className="text-center md:text-right">
              <p className="text-slate-500 text-xs mb-1">
                {t('footer.made')} <Heart size={12} className="inline text-red-500" /> {t('footer.for')}
              </p>
              <p className="text-slate-600 text-xs">
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