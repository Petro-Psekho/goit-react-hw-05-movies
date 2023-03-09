import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 700px;
  margin: 10px auto;
`;

export const NavList = styled.nav`
  padding: 15px 5px;
  margin-bottom: 20px;
  /* border-bottom: 1px solid #e6e4e4; */
  box-shadow: 0 10px 12px -12px rgba(0, 0, 0, 0.6);
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: #474747;
  margin-right: 20px;
  margin-left: 10px;

  &.active {
    color: orange;
  }
`;
