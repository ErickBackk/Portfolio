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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Profile card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <img 
                    src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
                    alt="EuSouOBackk" 
                    className="w-24 h-24 rounded-full border-2 border-purple-400/50 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                    Backk
                  </h1>
                  <div className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Online</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-xl text-white/90 font-medium">
                  {t('hero.creator')}
                </p>
                <p className="text-white/70 text-lg">
                  {t('hero.editor')}
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.youtube.com/@EuSouOBackk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
                >
                  <Youtube size={20} />
                  {t('hero.youtube')}
                </a>
                <a 
                  href="#videos" 
                  className="flex items-center gap-3 backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                >
                  <Camera size={20} />
                  {t('hero.videos')}
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side - Large image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main image container */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Hero Image"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                
                {/* Decorative overlay */}
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-purple-900/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500/30 rounded-full backdrop-blur-sm border border-white/20 animate-bounce"></div>
              <div className="absolute -bottom-8 -left-8 w-8 h-8 bg-blue-500/30 rounded-full backdrop-blur-sm border border-white/20 animate-bounce delay-500"></div>
              <div className="absolute top-1/2 -left-4 w-6 h-6 bg-indigo-500/30 rounded-full backdrop-blur-sm border border-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative py-24 px-6 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-slate-900/50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            {t('videos.title')}
          </h2>
          
          {/* Category filter */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl">
              {[
                { key: 'all', label: t('videos.all') },
                { key: 'mmv', label: 'MMV' },
                { key: 'amv', label: 'AMV' },
                { key: 'gameplay', label: 'GAMEPLAY' },
                { key: 'motion', label: 'MOTION' }
              ].map(({ key, label }) => (
                <button 
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === key 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </button>
              ))}
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