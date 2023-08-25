import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 375px;
  min-height: 812px;
  margin: 0 auto;
  text-align: center;
  color: #161616;

  @media (min-width: 768px) {
    width: 473px;
    height: 438px;
  }
`;

export const MainImg = styled.img`
  display: block;
  margin: 0 auto;

  width: 148px;
  height: 148px;

  @media (min-width: 768px) {
    width: 162px;
    height: 162px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconImg = styled.img`
  margin-right: 15px;
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: 0.04em;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const MainText = styled.p`
  margin-bottom: 35px;

  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.02em;
`;

export const RegistrationButton = styled.button`
  margin-bottom: 10px;
  width: 335px;
  height: 49px;

  cursor: pointer;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
  background: #161616;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #ffffff;
    color: #161616;
    border: 1px solid #161616;
  }

  @media (min-width: 768px) {
    width: 344px;
  }
`;

export const LoginLink = styled.a`
  display: block;

  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.02em;
`;

// transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

// &:hover{
//   transform: scale(1.1);
// }
