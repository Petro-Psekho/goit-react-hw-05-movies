import styled from '@emotion/styled';

export const MainMovies = styled.main`
  padding: 0 5px;
`;

export const MoviesForm = styled.form`
  display: flex;
  margin: 5px 0 18px 10px;
`;

export const MoviesFormInput = styled.input`
  width: 300px;
  height: 30px;
  margin-right: 10px;
  font-size: 18px;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const FormInputButton = styled.button`
  width: 120px;
  height: 32px;
  margin-right: 10px;
  font-size: 16px;
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
