import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
  grid-gap: 12px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastListItem = styled.li`
  border-radius: 2px;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const ActorNameWrap = styled.div`
  padding: 10px 8px;
`;

export const ActorName = styled.h4`
  margin-bottom: 4px;
  font-weight: 600;
  color: #474747;
`;

export const ActorChar = styled.p`
  font-weight: 400;
  font-style: italic;
  color: orange;
`;
