import styled from '@emotion/styled';

export const Username = styled.p`
font-weight: 500;
color: #647c90;
}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoutBtn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;

  cursor: pointer;
  color: #647c90;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #647c90;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    color: #fff;
    background-color: #647c90;
    border: 1px solid transparent;
  }
`;
