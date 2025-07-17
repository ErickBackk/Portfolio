import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 px-3 py-2 rounded-full backdrop-blur-sm"
      title={language === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Languages size={14} />
      <span className="text-xs font-medium">
        {language === 'pt-BR' ? 'EN' : 'PT'}
      </span>
    </button>
  );
};

export default LanguageToggle;