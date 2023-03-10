import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { GiFilmSpool } from 'react-icons/gi';

import { getMovies } from 'services/fetchMovies ';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import {
  MainMovies,
  MoviesForm,
  MoviesFormInput,
  FormInputButton,
  MoviesList,
  MoviesListItem,
  MoviesListItemLink,
  MoviesItemLinkName,
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
      {isLoading && <LoaderSpinner />}

      {searchMovies.length > 0 && (
        <MoviesList>
          {searchMovies.map(movie => (
            <MoviesListItem key={movie.id}>
              <MoviesListItemLink to={`${movie.id}`} state={{ from: location }}>
                <GiFilmSpool size="20" fill="#999898" />
                <MoviesItemLinkName>{movie.title}</MoviesItemLinkName>
              </MoviesListItemLink>
            </MoviesListItem>
          ))}
        </MoviesList>
      )}
    </MainMovies>
  );
};

export default Movies;
