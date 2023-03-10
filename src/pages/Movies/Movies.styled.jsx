import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainMovies = styled.main`
  padding: 0 5px;
`;

export const MoviesForm = styled.form`
  display: flex;
  margin: 5px 0 20px 10px;
`;

export const MoviesFormInput = styled.input`
  width: 300px;
  height: 30px;
  margin-right: 10px;
  font-size: 16px;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const FormInputButton = styled.button`
  width: 120px;
  height: 32px;
  margin-right: 10px;
  font-size: 14px;
  border: none;
  border-radius: 2px;
  color: #fff;
  background-color: orange;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);

  :hover {
    background-color: orangered;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.03);
    transition: transform 250ms;
  }
`;

export const MoviesList = styled.ul`
  padding: 15px 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const MoviesListItem = styled.li`
  font-size: 16px;
  padding: 6px 0;
`;

export const MoviesListItemLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #474747;
  font-size: 16px;

  :hover {
    color: orange;
    transform: scale(0.99);
    transition: transform 350ms;
  }
`;

export const MoviesItemLinkName = styled.p`
  margin-left: 10px;
`;
