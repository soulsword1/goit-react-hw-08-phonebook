import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Form,
  FormLabel,
  FormInput,
  FormSubmitBtn,
  RegistrationLink,
  LogInLink
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <RegistrationLink>Registration</RegistrationLink> <LogInLink>Log In</LogInLink>
      <FormLabel>
        <FormInput type="name" name="name" placeholder="Enter your name"/>
      </FormLabel>
      <FormLabel>
        <FormInput type="email" name="email" placeholder="Enter your email"/>
      </FormLabel>
      <FormLabel>
        <FormInput type="password" name="password" placeholder="Create a password"/>
      </FormLabel>
      <FormSubmitBtn type="submit">Register Now</FormSubmitBtn>
    </Form>
  );
};
