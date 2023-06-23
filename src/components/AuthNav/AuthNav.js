import { StyledLink } from './AuthNav.styled';

export default function AuthNav(){
  return (
    <div>
      <StyledLink to="/register">
        Register
      </StyledLink>
      <StyledLink to="/login">
        Log In
      </StyledLink>
    </div>
  );
};
