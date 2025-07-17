import React, { useState } from 'react';
import { Youtube, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen text-white relative overflow-x-hidden">
      {/* Main background with blue gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        {/* Large decorative circles */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-300/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 px-4">
        {/* Hero content container */}
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="relative z-20 text-left">
            {/* Large decorative text */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black leading-none mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                <span className="text-white">Thinking</span><br />
                <span className="text-white">about</span><br />
                <span className="text-blue-200">you</span>
              </h1>
            </div>
            
            {/* Profile info */}
            <div className="mb-8">
              <p className="text-blue-100 text-xl mb-2" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                {t('hero.creator')}
              </p>
              <p className="text-blue-200/80 text-lg" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                {t('hero.editor')}
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-4">
              <a 
                href="https://www.youtube.com/@EuSouOBackk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-red-500 hover:border-red-400 hover:bg-red-500/10 transition-all px-6 py-3 rounded-full text-sm font-medium text-red-500 hover:text-red-400 backdrop-blur-sm"
              >
                <Youtube size={18} />
                {t('hero.youtube')}
              </a>
              <a 
                href="#videos" 
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all px-6 py-3 rounded-full text-sm font-medium text-white border border-white/30 hover:border-white/50"
              >
                <Camera size={18} />
                {t('hero.videos')}
              </a>
            </div>
          </div>
          
          {/* Right side - Character illustration area */}
          <div className="relative flex items-center justify-center">
            {/* Large decorative circle behind character */}
            <div className="absolute w-96 h-96 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-sm"></div>
            <div className="absolute w-80 h-80 bg-gradient-to-br from-blue-200/30 to-blue-300/10 rounded-full"></div>
            
            {/* Profile image as character placeholder */}
            <div className="relative z-10">
              <img 
                src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
                alt="Backk" 
                className="w-32 h-32 rounded-full border-4 border-white/50 shadow-2xl shadow-blue-900/30"
              />
            </div>
            
            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/30">
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/30">
              <ChevronRight size={20} className="text-white" />
            </button>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 flex items-center gap-2 text-blue-100/60 text-sm">
              <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
              <span>backk creator</span>
            </div>
            
            {/* Numbered indicators */}
            <div className="absolute -right-16 top-1/4 flex flex-col gap-4">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white/30">
                01
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs border border-white/30">
                02
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xs border border-white/20">
                03
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-blue-600/30 to-blue-500/20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {t('about.title')}
          </h2>
          <p className="text-blue-100 text-xl leading-relaxed backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative py-24 px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 via-blue-700/40 to-blue-600/30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {t('videos.title')}
          </h2>
          
          {/* Category filter */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-xl">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === 'all' 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
              >
                {t('videos.all')}
              </button>
              <button 
                onClick={() => setActiveCategory('mmv')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === 'mmv' 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
              >
                MMV
              </button>
              <button 
                onClick={() => setActiveCategory('amv')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === 'amv' 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
              >
                AMV
              </button>
              <button 
                onClick={() => setActiveCategory('gameplay')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === 'gameplay' 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
              >
                GAMEPLAY
              </button>
              <button 
                onClick={() => setActiveCategory('motion')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === 'motion' 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
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

      <Footer />
    </div>
  );
}

export default App;