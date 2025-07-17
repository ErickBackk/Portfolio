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
      className="group cursor-pointer backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/15 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video thumbnail */}
      <div className="relative aspect-video mb-4 overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm">
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
            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-4 hover:bg-white/30 transition-colors shadow-lg">
              <Play size={24} fill="white" className="ml-1" />
            </div>
          </a>
        </div>
        
        {/* Category badge with glass effect */}
        <div className="absolute top-3 right-3 backdrop-blur-md bg-white/20 border border-white/30 text-xs font-medium px-3 py-1 rounded-full text-white shadow-lg">
          {video.category.toUpperCase()}
        </div>
      </div>
      
      {/* Video info */}
      <div className="space-y-3">
        <h3 className="text-white font-medium line-clamp-2 leading-snug">
          {video.title}
        </h3>
        
        {video.description && (
          <p className="text-white/70 text-sm line-clamp-2">
            {video.descriptionKey ? t(video.descriptionKey) : video.description}
          </p>
        )}
        
        <a 
          href={`https://www.youtube.com/watch?v=${video.id}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm backdrop-blur-sm bg-white/10 px-3 py-1 rounded-lg border border-white/20 hover:border-white/30"
        >
          {t('videos.watch')} <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
};

export default VideoCard;