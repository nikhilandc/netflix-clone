export interface Movie {
  id: number;
  title: string;
  image: string;
  thumbnailImage?: string;
  description?: string;
  genre?: string[];
  rating?: string;
  year?: number;
  duration?: string;
}

export interface Profile {
  id: number;
  name: string;
  avatar: string;
}

export interface Genre {
  id: number;
  name: string;
}