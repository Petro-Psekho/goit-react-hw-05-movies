import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchMovies ';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const IMAGE_POSTER_SIZES = '/w342/';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovieDetails(data);
    });
  }, [movieId]);

  return (
    <main>
      {
        <img
          src={`${IMAGE_BASE_URL}${IMAGE_POSTER_SIZES}${movieDetails.poster_path}`}
          alt=""
        />
      }
    </main>
  );
};
