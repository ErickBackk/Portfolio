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
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video thumbnail */}
      <div className="relative aspect-video overflow-hidden">
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
            <div className="bg-white/90 hover:bg-white rounded-full p-3 transition-colors">
              <Play size={20} fill="currentColor" className="ml-0.5 text-gray-800" />
            </div>
          </a>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-gray-700">
          {video.category.toUpperCase()}
        </div>
      </div>
      
      {/* Video info */}
      <div className="p-4">
        <h3 className="text-gray-800 font-medium line-clamp-2 leading-snug mb-2 text-sm">
          {video.title}
        </h3>
        
        {video.description && (
          <p className="text-gray-600 text-xs line-clamp-2 mb-3">
            {video.descriptionKey ? t(video.descriptionKey) : video.description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">by @Backk</span>
          <a 
            href={`https://www.youtube.com/watch?v=${video.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-xs font-medium"
          >
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;