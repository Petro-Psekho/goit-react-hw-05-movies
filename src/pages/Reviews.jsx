import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchMovies ';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setMovieReviews(data.results);
    });
  }, [movieId]);

  return (
    <ul>
      {movieReviews.length > 0
        ? movieReviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        : 'Something will appear here soon'}
    </ul>
  );
};
