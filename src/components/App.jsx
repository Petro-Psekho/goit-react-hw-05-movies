import { Routes, Route, NavLink, Link } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';

import { Container, StyledLink, NavList } from 'components/App.styled';

export const App = () => {
  return (
    <Container>
      <NavList>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavList>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
