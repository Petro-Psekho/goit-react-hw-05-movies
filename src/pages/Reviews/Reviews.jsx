import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/fetchMovies ';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import {
  ReviewsList,
  ReviewsListItem,
  ReviewsTitle,
  ReviewsText,
} from 'pages/Reviews/Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId).then(data => {
      setMovieReviews(data.results);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <ReviewsList>
      {isLoading && <LoaderSpinner />}
      {movieReviews.length > 0 ? (
        movieReviews.map(({ author, content, id }) => (
          <ReviewsListItem key={id}>
            <ReviewsTitle>{author}</ReviewsTitle>
            <ReviewsText>{content}</ReviewsText>
          </ReviewsListItem>
        ))
      ) : (
        <li>Something will appear here soon</li>
      )}
    </ReviewsList>
  );
};

export default Reviews;
