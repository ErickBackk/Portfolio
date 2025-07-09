import React, { useState } from 'react';
import { Youtube, Camera } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import Footer from './components/Footer';
import { videos } from './data/videos';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useLanguage();
  
  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://cdn.discordapp.com/attachments/824606051743039528/1346577207476359251/Comp1_1-ezgif.com-video-to-webp-converter.webp?ex=67c8b140&is=67c75fc0&hm=6c4ec315bf3f7ce6a709193ae0788124937628034eca0409d5b018b730e478d3&" 
            alt="EuSouOBackk" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>
        
        {/* Subtle blue accent */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          {/* Profile image */}
          <div className="mb-8">
            <img 
              src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
              alt="EuSouOBackk" 
              className="w-24 h-24 rounded-full mx-auto border border-slate-700"
            />
          </div>
          
          {/* Title and subtitle */}
          <h1 className="text-4xl md:text-5xl font-light mb-2 text-white">
            Backk
          </h1>
          <p className="text-slate-400 text-lg mb-2">
            {t('hero.creator')}
          </p>
          <p className="text-slate-500 mb-12">
            {t('hero.editor')}
          </p>
          
          {/* Action buttons */}
          <div className="flex gap-4 justify-center">
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-lg text-sm font-medium"
            >
              <Youtube size={18} />
              {t('hero.youtube')}
            </a>
            <a 
              href="#videos" 
              className="flex items-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-slate-900/50 transition-all px-6 py-3 rounded-lg text-sm font-medium"
            >
              <Camera size={18} />
              {t('hero.videos')}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 text-white">
            {t('about.title')}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center text-white">
            {t('videos.title')}
          </h2>
          
          {/* Category filter */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-slate-900 border border-slate-800 rounded-lg p-1">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === 'all' 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t('videos.all')}
              </button>
              <button 
                onClick={() => setActiveCategory('mmv')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === 'mmv' 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                MMV
              </button>
              <button 
                onClick={() => setActiveCategory('amv')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === 'amv' 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AMV
              </button>
            </div>
          </div>
          
          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;