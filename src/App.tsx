import React, { useState } from 'react';
import { Youtube, Heart, ExternalLink, Camera, Clapperboard, Star } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-gradient-to-b from-blue-950/50 to-slate-900/80">
        <img 
              src="https://cdn.discordapp.com/attachments/824606051743039528/1346577207476359251/Comp1_1-ezgif.com-video-to-webp-converter.webp?ex=67c8b140&is=67c75fc0&hm=6c4ec315bf3f7ce6a709193ae0788124937628034eca0409d5b018b730e478d3&" 
              alt="EuSouOBackk" 
              className="h-[80vh] w-full absolute -top-20 blur-[8px] "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-slate-900/80 to-blue-950/90 z-10"></div>
        {/* Blue light effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-400/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-l from-blue-400/25 to-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/15 to-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
            src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
          ></video>
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          {/* Channel logo instead of text */}
          <div className="mb-6">
            <img 
              src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
              alt="EuSouOBackk" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gradient-to-r from-blue-400 to-cyan-400 shadow-2xl shadow-blue-500/40 ring-4 ring-blue-500/20"
            />
          </div>
          <p className="text-xl md:text-2xl max-w-2xl mb-1 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
            {t('hero.creator')}
          </p>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 font-semibold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {t('hero.editor')}
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.youtube.com/@EuSouOBackk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 px-6 py-3 rounded-full font-medium shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105"
            >
              <Youtube size={20} />
              {t('hero.youtube')}
            </a>
            <a 
              href="#videos" 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 px-6 py-3 rounded-full font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
            >
              <Camera size={20} />
              {t('hero.videos')}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 container mx-auto px-4 relative bg-gradient-to-b from-slate-900/50 to-blue-950/30">
        {/* Blue light effects */}
        <div className="absolute -left-40 top-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -right-40 bottom-1/4 w-80 h-80 bg-gradient-to-l from-cyan-400/15 to-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 backdrop-blur-sm bg-gradient-to-br from-slate-800/20 to-blue-900/20 rounded-3xl p-8 border border-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
            {t('about.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 container mx-auto px-4 relative bg-gradient-to-b from-blue-950/30 to-slate-900/50">
        {/* Blue light effects */}
        <div className="absolute left-1/4 top-0 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-cyan-400/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-gradient-to-bl from-indigo-400/15 to-blue-600/10 rounded-full blur-[140px] animate-pulse"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center relative z-10 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
          {t('videos.title')}
        </h2>
        
        <div className="flex justify-center mb-8 relative z-10">
          <div className="inline-flex bg-gradient-to-r from-slate-800/80 to-blue-900/60 backdrop-blur-md border border-blue-500/30 rounded-full p-1 shadow-lg shadow-blue-500/20">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === 'all' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-600/40 text-white' 
                  : 'hover:bg-gradient-to-r hover:from-blue-900/50 hover:to-cyan-900/30 text-blue-200'
              }`}
            >
              {t('videos.all')}
            </button>
            <button 
              onClick={() => setActiveCategory('mmv')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === 'mmv' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-600/40 text-white' 
                  : 'hover:bg-gradient-to-r hover:from-blue-900/50 hover:to-cyan-900/30 text-blue-200'
              }`}
            >
              MMV
            </button>
            <button 
              onClick={() => setActiveCategory('amv')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === 'amv' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-600/40 text-white' 
                  : 'hover:bg-gradient-to-r hover:from-blue-900/50 hover:to-cyan-900/30 text-blue-200'
              }`}
            >
              AMV
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;