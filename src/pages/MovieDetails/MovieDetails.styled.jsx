import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainDetails = styled.main`
  padding: 0 5px;
`;

export const DetailsWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
  padding: 16px 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const PosterWrap = styled.div`
  min-width: 300px;
  margin-right: 16px;
`;

export const PosterImage = styled.img`
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(92, 91, 91, 0.3),
    -23px 0 20px -23px rgba(92, 91, 91, 0.6),
    23px 0 20px -23px rgba(92, 91, 91, 0.6),
    inset 0 0 40px rgba(92, 91, 91, 0.1);
`;

export const DetailsTitle = styled.h2`
  margin-bottom: 6px;
  font-size: 30px;
  font-weight: 400;
  color: #474747;
`;

export const DetailsScore = styled.p`
  margin-bottom: 14px;
  color: orange;
`;

export const OverviewTitle = styled.h3`
  margin-bottom: 6px;

  font-weight: 600;
  color: #474747;
`;

export const OverviewText = styled.p`
  margin-bottom: 14px;
  font-style: italic;

  font-weight: 400;
  color: #474747;
`;

export const GenresTitle = styled.h4`
  margin-bottom: 6px;

  font-weight: 600;
  color: #474747;
`;

export const GenresText = styled.span`
  margin-right: 6px;
  font-style: italic;

  font-weight: 400;
  color: #474747;
`;

export const InfoWrap = styled.div`
  margin-bottom: 20px;
  padding: 16px 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const InfoTitle = styled.h4`
  padding-top: 10px;
  margin-bottom: 16px;

  font-weight: 600;
  color: #474747;
`;

export const InfoList = styled.ul`
  display: flex;
`;

export const InfoListItem = styled.li`
  margin-right: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 400;
  border-radius: 4px;
  overflow: hidden;

  color: #474747;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);

  :hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.03);
    transition: transform 250ms;
  }
`;

export const InfoLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100px;
  padding: 5px 10px;

  text-decoration: none;
  background-color: orange;

  color: #ffffff;

  :hover {
    background-color: orangered;
    transition: transform 250ms;
  }
`;
