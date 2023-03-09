import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/fetchMovies ';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import noImage from 'img/stub.jpg';
import {
  CastList,
  CastListItem,
  ActorNameWrap,
  ActorName,
  ActorChar,
} from 'pages/Cast/Cast.styled';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const IMAGE_POSTER_SIZES = '/w154/';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieCredits(movieId).then(data => {
      setMovieCredits(data);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <CastList>
      {isLoading && <LoaderSpinner />}
      {movieCredits.cast &&
        movieCredits.cast.length &&
        movieCredits.cast.map(credits => (
          <CastListItem key={credits.id}>
            <img
              src={
                credits.profile_path
                  ? `${IMAGE_BASE_URL}${IMAGE_POSTER_SIZES}${credits.profile_path}`
                  : `${noImage}`
              }
              alt={credits.character}
            />
            <ActorNameWrap>
              <ActorName>{credits.name}</ActorName>
              <ActorChar>{credits.character}</ActorChar>
            </ActorNameWrap>
          </CastListItem>
        ))}
    </CastList>
  );
};

export default Cast;
