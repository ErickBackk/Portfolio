import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt-BR' | 'en-US';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt-BR' ? 'en-US' : 'pt-BR');
  };

  const translations = {
    'pt-BR': {
      'nav.home': 'Início',
      'nav.videos': 'Vídeos',
      'hero.creator': 'Criador de Conteúdo',
      'hero.editor': 'Editor Geral',
      'hero.youtube': 'YouTube',
      'hero.videos': 'Vídeos',
      'about.title': 'Sobre o Canal',
      'about.description': 'Canal dedicado a trabalhos/edição, ou qualquer coisa usando After Effects e conceitos de edição.',
      'videos.title': 'Vídeos em Destaque',
      'videos.all': 'Todos',
      'videos.gameplay': 'Gameplay',
      'videos.motion': 'Motion',
      'videos.watch': 'Assistir no YouTube',
      'footer.description': 'Editor geral.',
      'footer.made': 'Feito com',
      'footer.for': 'para fãs de anime, mangá e música',
      'footer.rights': 'Todos os direitos reservados.',
      'bocchi.description': 'Here Comes The ☀️!',
      'demo.description': 'Ano bom repleto de coisas ruins, obrigado a todos que participaram desse ano incrível 💞',
      'nian.description': 'Animação da Nian de Arknights',
      'fan.description': 'Animação de Fã'
    },
    'en-US': {
      'nav.home': 'Home',
      'nav.videos': 'Videos',
      'hero.creator': 'Content Creator',
      'hero.editor': 'Overall Editor',
      'hero.youtube': 'YouTube',
      'hero.videos': 'Videos',
      'about.title': 'About The Channel',
      'about.description': 'Channel dedicated to jobs/editing, or any thing using After Effects and edit concepts.',
      'videos.title': 'Featured Videos',
      'videos.all': 'All',
      'videos.gameplay': 'Gameplay',
      'videos.motion': 'Motion',
      'videos.watch': 'Watch on YouTube',
      'footer.description': 'Overall editor.',
      'footer.made': 'Made with',
      'footer.for': 'for anime, manga and music fans',
      'footer.rights': 'All rights reserved.',
      'bocchi.description': 'Here Comes The ☀️!',
      'demo.description': 'Good year full of bad things, thanks to everyone who participated in this incredible year 💞',
      'nian.description': 'Nian from Arknights animation',
      'fan.description': 'Fan Animation'
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};