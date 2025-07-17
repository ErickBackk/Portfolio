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
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Main background with teal gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-300/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-teal-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-cyan-300/30 rounded-lg rotate-45 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-cyan-200/60 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-1/2 right-1/3 w-1.5 h-1.5 bg-teal-200/50 rounded-full animate-bounce delay-1000"></div>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center z-10">
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left">
            {/* Glass morphism card for profile */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
                  alt="EuSouOBackk" 
                  className="w-20 h-20 rounded-full border-2 border-white/30 shadow-lg"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Backk
                  </h1>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-sm">Online</span>
                  </div>
                </div>
              </div>
              
              <p className="text-white/90 text-lg mb-2" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                {t('hero.creator')}
              </p>
              <p className="text-white/70 mb-8" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                {t('hero.editor')}
              </p>
              
              {/* Action buttons with glass effect */}
              <div className="flex gap-4">
                <a 
                  href="https://www.youtube.com/@EuSouOBackk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 backdrop-blur-md bg-white/10 border-2 border-red-500/60 hover:border-red-400 hover:bg-red-500/20 transition-all px-6 py-3 rounded-xl text-sm font-medium text-white shadow-lg"
                >
                  <Youtube size={18} />
                  {t('hero.youtube')}
                </a>
                <a 
                  href="#videos" 
                  className="flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/30 hover:border-white/50 hover:bg-white/20 transition-all px-6 py-3 rounded-xl text-sm font-medium text-white shadow-lg"
                >
                  <Camera size={18} />
                  {t('hero.videos')}
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side - Decorative element */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Large image placeholder with glass morphism frame */}
              <div className="relative w-500 h-1000 backdrop-blur-xl rounded-3xl p-4 shadow-2xl">
                <img 
                  src="https://i.imgur.com/1byCoqA.png"
                  alt="Hero Image"
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                {/* Glass overlay for extra effect */}
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-300/40 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-teal-300/40 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-white/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-600/20 via-cyan-500/30 to-teal-500/20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {t('about.title')}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative py-24 px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/20 via-cyan-600/40 to-teal-700/50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-semibold mb-12 text-center text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {t('videos.title')}
          </h2>
          
          {/* Category filter with glass morphism */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-2 shadow-2xl">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === 'all' 
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-md' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {t('videos.all')}
              </button>
              <button 
                onClick={() => setActiveCategory('mmv')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === 'mmv' 
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-md' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                MMV
              </button>
              <button 
                onClick={() => setActiveCategory('amv')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === 'amv' 
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-md' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                AMV
              </button>
              <button 
                onClick={() => setActiveCategory('gameplay')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === 'gameplay' 
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-md' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                GAMEPLAY
              </button>
              <button 
                onClick={() => setActiveCategory('motion')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === 'motion' 
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-md' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                MOTION
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

      {/* Footer transition */}
      <div className="relative h-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-700/50 to-teal-900/80"></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;