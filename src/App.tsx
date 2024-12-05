import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovieRow } from './components/MovieRow';
import { movies } from './data/movies';
import type { Movie } from './types';

function App() {
  const [myList, setMyList] = useState<Movie[]>([]);

  const handlePlay = (movie: Movie) => {
    console.log('Playing:', movie.title);
  };

  const handleAddToList = (movie: Movie) => {
    setMyList(current => {
      const exists = current.find(m => m.id === movie.id);
      if (exists) {
        return current.filter(m => m.id !== movie.id);
      }
      return [...current, movie];
    });
  };

  return (
    <div className="relative min-h-screen bg-zinc-900">
      <Navbar />
      <main className="relative pl-4 pb-24 lg:pl-8">
        <Hero />
        <section className="md:space-y-16">
          <MovieRow
            title="Trending Now"
            movies={movies.trending}
            onPlay={handlePlay}
            onAddToList={handleAddToList}
          />
          <MovieRow
            title="Popular on Netflix"
            movies={movies.popular}
            onPlay={handlePlay}
            onAddToList={handleAddToList}
          />
          <MovieRow
            title="New Releases"
            movies={movies.newReleases}
            onPlay={handlePlay}
            onAddToList={handleAddToList}
          />
          {myList.length > 0 && (
            <MovieRow
              title="My List"
              movies={myList}
              onPlay={handlePlay}
              onAddToList={handleAddToList}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;