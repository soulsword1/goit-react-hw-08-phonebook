import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Eye from '../../images/eye.svg';
import {
  Form,
  FormLabel,
  FormLabelPassword,
  FormInput,
  FormSubmitBtn,
  RegistrationLink,
  LogInLink,
  ImgIcon
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { showPassword } = useAuth();
  console.log(showPassword);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  let InputType = 'password';
  // console.log(InputType)
  // const changeInputType = e => {
  //   InputType = 'text';
  //   console.log(InputType)
  // }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <RegistrationLink>Registration</RegistrationLink> <LogInLink>Log In</LogInLink>
      <FormLabel>
        <FormInput type="email" name="email" placeholder="Enter your email"/>
      </FormLabel>
      <FormLabelPassword>
        <FormInput id="password" type={showPassword} name="password" placeholder="Confirm your password" />
        <ImgIcon src={Eye} alt="watch password icon" />
      </FormLabelPassword>
      <FormSubmitBtn type="submit">Register Now</FormSubmitBtn>
    </Form>
  );
};
