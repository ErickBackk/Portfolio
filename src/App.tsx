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
    <div className="min-h-screen text-white relative">
      {/* Animated background with smooth transitions */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000514] to-[#000000]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-400/2 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-600/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        {/* Section-specific background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/90 via-[#000514]/60 to-transparent"></div>
        
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.discordapp.com/attachments/824606051743039528/1346577207476359251/Comp1_1-ezgif.com-video-to-webp-converter.webp?ex=67c8b140&is=67c75fc0&hm=6c4ec315bf3f7ce6a709193ae0788124937628034eca0409d5b018b730e478d3&" 
            alt="EuSouOBackk" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        {/* Hero-specific light effects */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-20 text-center max-w-2xl mx-auto px-4">
          {/* Profile image */}
          <div className="mb-8">
            <img 
              src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
              alt="EuSouOBackk" 
              className="w-24 h-24 rounded-full mx-auto border border-slate-700 shadow-2xl shadow-blue-500/20"
            />
          </div>
          
          {/* Title and subtitle */}
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Backk
          </h1>
          <p className="text-slate-400 text-lg mb-2" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
            {t('hero.creator')}
          </p>
          <p className="text-slate-500 mb-12" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
            {t('hero.editor')}
          </p>
          
          {/* Action buttons */}
          <div className="flex gap-4 justify-center">
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-red-600 hover:border-red-500 hover:bg-red-600/10 transition-all px-6 py-3 rounded-lg text-sm font-medium text-red-600 hover:text-red-500"
            >
              <Youtube size={18} />
              {t('hero.youtube')}
            </a>
            <a 
              href="#videos" 
              className="flex items-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-[#000514]/50 transition-all px-6 py-3 rounded-lg text-sm font-medium"
            >
              <Camera size={18} />
              {t('hero.videos')}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-4 z-10">
        {/* Section transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000514]/40 to-transparent"></div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {t('about.title')}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed relative z-10">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative py-24 px-4 z-10">
        {/* Section-specific background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/60 to-[#000514]/40"></div>
        
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center text-white relative z-10" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {t('videos.title')}
          </h2>
          
          {/* Category filter */}
          <div className="flex justify-center mb-16 relative z-10">
            <div className="inline-flex bg-[#000514]/80 backdrop-blur-sm border border-slate-800 rounded-lg p-1 shadow-lg shadow-blue-500/10">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === 'all' 
                    ? 'bg-[#000000] text-white shadow-lg shadow-blue-500/20' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t('videos.all')}
              </button>
              <button 
                onClick={() => setActiveCategory('mmv')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === 'mmv' 
                    ? 'bg-[#000000] text-white shadow-lg shadow-blue-500/20' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                MMV
              </button>
              <button 
                onClick={() => setActiveCategory('amv')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === 'amv' 
                    ? 'bg-[#000000] text-white shadow-lg shadow-blue-500/20' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AMV
              </button>
            </div>
          </div>
          
          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {filteredVideos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer transition section */}
      <div className="relative h-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000]"></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;