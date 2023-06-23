import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Form,
  FormLabel,
  FormInput,
  FormSubmitBtn,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

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

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Email
        <FormInput type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput type="password" name="password" />
      </FormLabel>
      <FormSubmitBtn type="submit">Log In</FormSubmitBtn>
    </Form>
  );
};
