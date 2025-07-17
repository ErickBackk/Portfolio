import React from 'react';
import { Youtube, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <img 
                src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
                alt="EuSouOBackk" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-lg font-medium text-gray-800">Backk</span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Right side */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors text-sm font-medium"
            >
              <Youtube size={16} />
              YouTube
            </a>
            
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-xs mb-1">
                {t('footer.made')} <Heart size={12} className="inline text-red-500" /> {t('footer.for')}
              </p>
              <p className="text-gray-400 text-xs">
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