import { Outlet } from 'react-router-dom';

import {
  Container,
  StyledLink,
  NavList,
} from 'components/SharedLayout/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        {' '}
        <NavList>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavList>
      </header>
      <Outlet />
    </Container>
  );
};
