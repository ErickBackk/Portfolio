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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Card */}
          <div className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
            
            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
              <ChevronLeft className="text-white" size={20} />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
              <ChevronRight className="text-white" size={20} />
            </button>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Left content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <img 
                    src="https://yt3.googleusercontent.com/xIwL1F5HTg0c7zhkajS9YeeM03P9qU5y8UOHir2uQWkxngr5ffbEVCgMfcdNl4XC3dZnphg4=s160-c-k-c0x00ffffff-no-rj" 
                    alt="EuSouOBackk" 
                    className="w-16 h-16 rounded-full mx-auto md:mx-0 border-2 border-white/30"
                  />
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Backk
                </h1>
                <p className="text-white/90 text-lg mb-8 max-w-md" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                  {t('hero.creator')} & {t('hero.editor')}. {t('about.description')}
                </p>
                
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105">
                  {t('hero.videos')}
                </button>
              </div>
              
              {/* Right content - Character illustration placeholder */}
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Camera size={64} className="text-white/60" />
                </div>
              </div>
            </div>
            
            {/* Progress dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-8 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Videos */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {t('videos.title')} <span className="text-blue-600">›</span>
                </h2>
              </div>
              
              {/* Video Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {filteredVideos.slice(0, 4).map((video, index) => (
                  <VideoCard key={index} video={video} />
                ))}
              </div>
              
              <button className="w-full bg-white hover:bg-gray-50 text-gray-700 py-3 rounded-2xl font-medium transition-colors shadow-sm border border-gray-200">
                View More
              </button>
            </div>
            
            {/* Center - Category Filter */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {t('videos.all')} Categories
              </h3>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setActiveCategory('all')}
                  className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-all ${
                    activeCategory === 'all' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                  }`}
                >
                  🎬 {t('videos.all')}
                </button>
                <button 
                  onClick={() => setActiveCategory('mmv')}
                  className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-all ${
                    activeCategory === 'mmv' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                  }`}
                >
                  🎵 MMV
                </button>
                <button 
                  onClick={() => setActiveCategory('amv')}
                  className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-all ${
                    activeCategory === 'amv' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                  }`}
                >
                  🎌 AMV
                </button>
                <button 
                  onClick={() => setActiveCategory('gameplay')}
                  className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-all ${
                    activeCategory === 'gameplay' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                  }`}
                >
                  🎮 Gameplay
                </button>
                <button 
                  onClick={() => setActiveCategory('motion')}
                  className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-all ${
                    activeCategory === 'motion' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                  }`}
                >
                  ✨ Motion
                </button>
              </div>
            </div>
            
            {/* Right Sidebar - Featured Content */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Featured</h3>
              
              <div className="space-y-4">
                {/* Featured items */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Youtube className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">YouTube Channel</h4>
                      <p className="text-sm text-gray-600">Latest uploads and content</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <Camera className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Latest Work</h4>
                      <p className="text-sm text-gray-600">Recent video projects and edits</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">AE</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">After Effects</h4>
                      <p className="text-sm text-gray-600">Professional video editing and motion graphics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;