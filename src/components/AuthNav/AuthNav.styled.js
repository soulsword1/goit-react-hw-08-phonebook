import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  color: #647c90;
  font-weight: 500;

  &:hover {
    color: #970c10;
  }
`;
