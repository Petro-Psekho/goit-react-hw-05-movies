import { useParams } from 'react-router-dom';

import { fetchMovies } from 'services/fetchMovies ';

// fetchMovies().then(resp => console.log(resp.results));

const MovieDetails = () => {
  const { movieId } = useParams();
  return <div>Now showing product with id - {movieId}</div>;
};
