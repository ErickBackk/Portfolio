import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
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