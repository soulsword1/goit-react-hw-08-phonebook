import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #647c90;
  text-decoration: none;
  font-weight: 500;

  &:active,
  &:hover {
    color: #970c10;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;