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
      className="group cursor-pointer backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video thumbnail */}
      <div className="relative aspect-video mb-4 overflow-hidden rounded-xl bg-white/5">
        <img 
          src={isHovered ? video.thumbnail : (video.thumbnailstatic || video.thumbnail)}
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Play overlay */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <a 
            href={`https://www.youtube.com/watch?v=${video.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full h-full flex items-center justify-center"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors border border-white/30">
              <Play size={24} fill="white" className="ml-1" />
            </div>
          </a>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-3 right-3 bg-blue-500 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-white border border-white/30">
          {video.category.toUpperCase()}
        </div>
      </div>
      
      {/* Video info */}
      <div className="space-y-3">
        <h3 className="text-white font-semibold line-clamp-2 leading-snug text-lg">
          {video.title}
        </h3>
        
        {video.description && (
          <p className="text-blue-100/80 text-sm line-clamp-2">
            {video.descriptionKey ? t(video.descriptionKey) : video.description}
          </p>
        )}
        
        <a 
          href={`https://www.youtube.com/watch?v=${video.id}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm font-medium bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 hover:border-white/40"
        >
          {t('videos.watch')} <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
};

export default VideoCard;