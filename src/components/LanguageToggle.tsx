import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-all duration-300 hover:scale-110 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 px-3 py-1 rounded-full border border-blue-500/10 hover:border-cyan-400/30 backdrop-blur-sm"
      title={language === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Languages size={20} />
      <span className="text-sm font-medium">
        {language === 'pt-BR' ? 'EN' : 'PT'}
      </span>
    </button>
  );
};

export default LanguageToggle;