import React from 'react';
import { Youtube, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/90 border-t border-blue-500/15 py-12 relative backdrop-blur-sm">
      {/* Blue light effect */}
      <div className="absolute left-1/4 top-0 w-96 h-32 bg-gradient-to-r from-blue-500/8 to-cyan-400/5 rounded-full blur-[100px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">Backk</span>
            </a>
            <p className="text-slate-400/80 mt-2 max-w-md">
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
            <p className="text-slate-400/80 text-sm">
              {t('footer.made')} <Heart size={14} className="inline text-red-500" /> {t('footer.for')}
            </p>
            <p className="text-slate-500/60 text-xs mt-1">
              © {new Date().getFullYear()} Backk. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;