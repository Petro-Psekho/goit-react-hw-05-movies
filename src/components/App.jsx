import { Routes, Route, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';

import { Container } from 'components/App.styled';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <Container>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>

        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
