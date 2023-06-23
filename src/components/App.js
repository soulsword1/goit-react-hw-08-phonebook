import { useDispatch } from "react-redux";
import { useEffect, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from "redux/contacts/operations";
import Layout from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contacts'));

export default function App(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactPage />} />
        }
      />
    </Route>
  </Routes>
  );
};
