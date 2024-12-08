import { Play, Plus, ThumbsUp, Info } from 'lucide-react';
import { useState } from 'react';
import type { Movie } from '../types';
import { cn } from '../lib/utils';

interface MovieCardProps {
  movie: Movie;
  onPlay?: (movie: Movie) => void;
  onAddToList?: (movie: Movie) => void;
}

export function MovieCard({ movie, onPlay, onAddToList }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition-all duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="rounded-sm object-cover w-full h-full md:rounded"
      />
      
      {isHovered && (
        <div className="absolute inset-0 bg-black/60 rounded-sm md:rounded p-3 flex flex-col justify-between">
          <h3 className="text-white font-semibold">{movie.title}</h3>
          
          <div>
            <div className="flex items-center space-x-2 text-xs mb-2">
              <span className="text-green-500 font-semibold">98% Match</span>
              <span className="border px-1">{movie.rating}</span>
              <span>{movie.duration}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button 
                  onClick={() => onPlay?.(movie)}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-white/80"
                >
                  <Play className="w-4 h-4 text-black fill-black" />
                </button>
                <button 
                  onClick={() => onAddToList?.(movie)}
                  className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white">
                  <ThumbsUp className="w-4 h-4" />
                </button>
              </div>
              <button className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white">
                <Info className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center space-x-2 mt-2">
              {movie.genre?.slice(0, 3).map((genre, index) => (
                <span key={index} className="text-xs">
                  {genre}{index < (movie.genre?.length || 0) - 1 && '•'}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}