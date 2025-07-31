import { Youtube, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 py-12 border-t border-white/10 backdrop-blur-xl bg-slate-900/80">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left side */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 mb-2 md:justify-start">
              <span className="text-lg font-semibold text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text">Backk</span>
            </div>
            <p className="max-w-md text-sm text-white/70">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Right side */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-200 border rounded-lg text-white/70 hover:text-white bg-white/10 border-white/20 hover:border-red-400/50"
            >
              <Youtube size={16} />
              YouTube
            </a>
            
            <div className="text-center md:text-right">
              <p className="mb-1 text-xs text-white/60">
                {t('footer.made')} <Heart size={12} className="inline text-red-400" /> {t('footer.for')}
              </p>
              <p className="text-xs text-white/50">
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