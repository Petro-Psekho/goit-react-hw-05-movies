import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainTrend = styled.main`
  padding: 0 5px;
`;

export const TrendList = styled.ul`
  padding: 15px 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const TrendListItem = styled.li`
  font-size: 16px;
  padding: 10px 0;
`;

export const TrendListItemLink = styled(Link)`
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

export const ItemLinkName = styled.p`
  margin-left: 10px;
`;
