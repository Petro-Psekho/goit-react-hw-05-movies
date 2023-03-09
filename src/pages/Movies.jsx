import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import { useSearchParams, useLocation, Link } from 'react-router-dom';

import { getMovies } from 'services/fetchMovies ';

export const Movies = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [searchMovies, setSearchMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovies(query)
      .then(data => {
        setSearchMovies(data.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  const onSubmit = data => {
    data = Object.values(data);

    setSearchParams({ query: data });

    reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input autoComplete="off" {...register('query', { required: true })} />

        {errors.query && <span>This field is required</span>}

        <button type="submit">Search</button>
      </form>

      <ul>
        {searchMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
