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
      className="bg-gradient-to-br from-slate-800/60 via-blue-900/40 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden group shadow-2xl shadow-blue-900/30 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-blue-500/40 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video">
        <img 
          src={isHovered ? video.thumbnail : (video.thumbnailstatic || video.thumbnail)}
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-blue-950/60 to-transparent flex items-center justify-center transition-all duration-700 group-hover:scale-110 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <a 
            href={`https://www.youtube.com/watch?v=${video.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 p-4 w-full h-full flex items-center justify-center hover:scale-110"
          >
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 shadow-lg shadow-blue-500/50">
              <Play size={32} fill="white" className="ml-1" />
            </div>
          </a>
        </div>
        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-500/40 backdrop-blur-sm">
          {video.category.toUpperCase()}
        </div>
      </div>
      <div className="p-6 bg-gradient-to-b from-transparent to-slate-900/20">
        <h3 className="text-lg font-semibold mb-3 line-clamp-1 text-blue-50">{video.title}</h3>
        <p className="text-blue-200/70 text-sm mb-4 line-clamp-2 leading-relaxed">
          {video.descriptionKey ? t(video.descriptionKey) : video.description}
        </p>
        <a 
          href={`https://www.youtube.com/watch?v=${video.id}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 transition-all duration-300 text-sm font-medium hover:scale-105 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-3 py-1 rounded-full border border-blue-500/20 hover:border-cyan-400/40"
        >
          {t('videos.watch')} <ExternalLink size={14} />
        </a>    
      </div>
    </div>
  );
};

export default VideoCard;