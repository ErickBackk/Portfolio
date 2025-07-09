import React from 'react';
import { Youtube, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-t from-slate-900 via-blue-950/50 to-slate-900/80 border-t border-blue-500/30 py-12 relative backdrop-blur-sm">
      {/* Blue light effect */}
      <div className="absolute left-1/4 top-0 w-96 h-32 bg-gradient-to-r from-blue-500/15 to-cyan-400/10 rounded-full blur-[100px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 p-3 rounded-full shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-110"
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center gap-2">
            </a>
            <p className="text-blue-200/70 mt-2 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.youtube.com/@EuSouOBackk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 transition-colors p-2 rounded-full"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </div>
            <p className="text-blue-200/70 text-sm">
              {t('footer.made')} <Heart size={14} className="inline text-red-500" /> {t('footer.for')}
            </p>
            <p className="text-blue-300/50 text-xs mt-1">
              © {new Date().getFullYear()} Backk. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;