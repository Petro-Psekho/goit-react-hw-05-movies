import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'services/fetchMovies ';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import { GiFilmSpool } from 'react-icons/gi';
import {
  MainTrend,
  TrendList,
  TrendListItem,
  TrendListItemLink,
  ItemLinkName,
} from 'pages/Home/Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendingMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <MainTrend>
      <TrendList>
        {isLoading && <LoaderSpinner />}
        {trendingMovies.map(movie => (
          <TrendListItem key={movie.id}>
            <TrendListItemLink
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <GiFilmSpool size="20" fill="#999898" />
              <ItemLinkName>{movie.title}</ItemLinkName>
            </TrendListItemLink>
          </TrendListItem>
        ))}
      </TrendList>
    </MainTrend>
  );
};

export default Home;
