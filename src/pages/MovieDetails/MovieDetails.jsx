import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchMovies ';
import { BackLink } from 'components/BackLink/BackLink';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import {
  MainDetails,
  DetailsWrap,
  PosterWrap,
  PosterImage,
  DetailsTitle,
  DetailsScore,
  OverviewTitle,
  OverviewText,
  GenresTitle,
  GenresText,
  InfoWrap,
  InfoTitle,
  InfoList,
  InfoListItem,
  InfoLink,
} from 'pages/MovieDetails/MovieDetails.styled';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const IMAGE_POSTER_SIZES = '/w342/';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId).then(data => {
      setMovieDetails(data);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <MainDetails>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <DetailsWrap>
        {isLoading && <LoaderSpinner />}
        <PosterWrap>
          {
            <PosterImage
              src={`${IMAGE_BASE_URL}${IMAGE_POSTER_SIZES}${movieDetails.poster_path}`}
              alt={movieDetails.original_title}
            />
          }
        </PosterWrap>
        <div>
          <DetailsTitle>{movieDetails.title}</DetailsTitle>
          <DetailsScore>
            User Score: {Math.round(movieDetails.vote_average * 10)}%
          </DetailsScore>
          <OverviewTitle>Overview</OverviewTitle>
          <OverviewText>{movieDetails.overview}</OverviewText>
          <GenresTitle>Genres</GenresTitle>
          <div>
            {movieDetails.genres &&
              movieDetails.genres.length &&
              movieDetails.genres.map(({ id, name }) => (
                <GenresText key={id}> "{name}" </GenresText>
              ))}
          </div>
        </div>
      </DetailsWrap>
      <InfoWrap>
        <InfoTitle>Additional information</InfoTitle>
        <InfoList>
          <InfoListItem>
            <InfoLink to="cast" state={{ ...location.state }}>
              Cast
            </InfoLink>
          </InfoListItem>
          <InfoListItem>
            <InfoLink to="reviews" state={{ ...location.state }}>
              Reviews
            </InfoLink>
          </InfoListItem>
        </InfoList>

        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </InfoWrap>
    </MainDetails>
  );
};

export default MovieDetails;
