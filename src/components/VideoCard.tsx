import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  thumbnailstatic?: string;
  category: string;
  description: string;
  descriptionKey?: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();
  
  return (
    <div 
      className="group cursor-pointer backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:bg-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-slate-800/50">
        <img 
          src={isHovered ? video.thumbnail : (video.thumbnailstatic || video.thumbnail)}
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Play overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <a 
            href={`https://www.youtube.com/watch?v=${video.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all shadow-2xl transform hover:scale-110">
              <Play size={28} fill="white" className="ml-1" />
            </div>
          </a>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-3 right-3 backdrop-blur-md bg-gradient-to-r from-purple-500/80 to-blue-500/80 border border-white/20 text-xs font-bold px-3 py-1 rounded-full text-white shadow-lg">
          {video.category.toUpperCase()}
        </div>
      </div>
      
      {/* Video info */}
      <div className="p-6 space-y-4">
        <h3 className="text-white font-semibold line-clamp-2 leading-snug text-lg group-hover:text-purple-200 transition-colors">
          {video.title}
        </h3>
        
        {video.description && (
          <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">
            {video.descriptionKey ? t(video.descriptionKey) : video.description}
          </p>
        )}
        
        <a 
          href={`https://www.youtube.com/watch?v=${video.id}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all text-sm backdrop-blur-sm bg-white/10 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 px-4 py-2 rounded-lg border border-white/20 hover:border-purple-400/30 transform hover:scale-105"
        >
          {t('videos.watch')} <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default VideoCard;