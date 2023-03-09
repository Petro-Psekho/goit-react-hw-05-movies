import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from 'components/BackLink/BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="20" />
      {children}
    </StyledLink>
  );
};
