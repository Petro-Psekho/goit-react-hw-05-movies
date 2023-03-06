import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'services/fetchMovies ';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(data => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <main>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};
