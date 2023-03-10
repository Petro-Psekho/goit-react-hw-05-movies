import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import { Toaster } from 'react-hot-toast';

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
      <Suspense fallback={<LoaderSpinner />}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Container>
  );
};
