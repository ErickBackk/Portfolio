import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm border border-gray-300 hover:border-gray-400 px-3 py-1.5 rounded-full"
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