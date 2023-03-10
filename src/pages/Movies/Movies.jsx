import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';

import { getMovies } from 'services/fetchMovies ';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import {
  MainMovies,
  MoviesForm,
  MoviesFormInput,
  FormInputButton,
} from 'pages/Movies/Movies.styled';

const Movies = () => {
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    getMovies(query)
      .then(data => {
        setSearchMovies(data.results);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [query]);

  const onSubmit = data => {
    data = Object.values(data);

    setSearchParams({ query: data });

    reset();
  };

  return (
    <MainMovies>
      <MoviesForm onSubmit={handleSubmit(onSubmit)}>
        <MoviesFormInput
          autoComplete="off"
          {...register('query', { required: true })}
        />

        {errors.query && <span>This field is required</span>}

        <FormInputButton type="submit">Search</FormInputButton>
      </MoviesForm>

      <ul>
        {isLoading && <LoaderSpinner />}
        {searchMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </MainMovies>
  );
};

export default Movies;
