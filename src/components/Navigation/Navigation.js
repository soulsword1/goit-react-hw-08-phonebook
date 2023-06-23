import { StyledLink } from './Navigation.styled';

export default function Navigation(){

  return (
    <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
    </nav>
  );
};

