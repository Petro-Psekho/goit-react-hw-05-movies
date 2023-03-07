import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/fetchMovies ';
import noImage from 'img/stub.jpg';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const IMAGE_POSTER_SIZES = '/w154/';

export const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(data => {
      console.log(data.cast);
      setMovieCredits(data);
    });
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieCredits.cast &&
          movieCredits.cast.length &&
          movieCredits.cast.map(credits => (
            <li key={credits.id}>
              <img
                src={
                  credits.profile_path
                    ? `${IMAGE_BASE_URL}${IMAGE_POSTER_SIZES}${credits.profile_path}`
                    : `${noImage}`
                }
                alt=""
              />
              <h4>{credits.name}</h4>
              <p>{credits.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
