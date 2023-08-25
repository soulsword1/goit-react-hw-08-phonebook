import styled from '@emotion/styled';

export const Form = styled.form`
  width: 335px;
  min-height: 300px;
  margin: 0 auto;
  padding: 40px;

  background: #151515;
  color: #fff;

  border: none;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 424px;
  }
`;

export const RegistrationLink = styled.a`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 30px;

  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.02em;
  cursor: pointer;
  opacity: 30%;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 100%;
  }
`;

export const LogInLink = styled.a`
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.02em;
  cursor: pointer;
`;

export const FormGroup = styled.div``;

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 25px;
  width: 100%;
  font-weight: 700;
  color: #647c90;
`;

export const FormLabelPassword = styled.label`
  position: relative;
  display: inline-block;
  margin-bottom: 25px;
  width: 100%;
  font-weight: 700;
  color: #647c90;
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  padding: 5px 0 5px 10px;

  width: 100%;
  height: 49px;
  outline: none;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #fff;
  background: #1f1f1f;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
`;

export const FormSubmitBtn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  height: 49px;

  cursor: pointer;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.02em;
  background-color: #bedbb0;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    color: #fff;
  }
`;

export const ImgIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 5%;

  cursor: pointer;
  transform: translate(-50%, -50%) scale(1);
`;
