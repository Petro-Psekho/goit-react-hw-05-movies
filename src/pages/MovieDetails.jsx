import { useState, useEffect } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchMovies ';
import { BackLink } from 'components/BackLink/BackLink';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const IMAGE_POSTER_SIZES = '/w342/';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovieDetails(data);
    });
  }, [movieId]);

  return (
    <main>
      {' '}
      {location.state !== null && (
        <BackLink to={backLinkHref}>Back to products</BackLink>
      )}
      <div>
        <div>
          {
            <img
              src={`${IMAGE_BASE_URL}${IMAGE_POSTER_SIZES}${movieDetails.poster_path}`}
              alt={movieDetails.original_title}
            />
          }
        </div>
        <div>
          <h2>{movieDetails.title}</h2>
          <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <div>
            {movieDetails.genres &&
              movieDetails.genres.length &&
              movieDetails.genres.map(({ id, name }) => (
                <span key={id}>{name}</span>
              ))}
          </div>
        </div>
      </div>
      <div>
        <p>_____________________________________________________________</p>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <p>_____________________________________________________________</p>
        <Outlet />
      </div>
    </main>
  );
};
