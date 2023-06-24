import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  console.log(`isLoggedIn ${isLoggedIn}`);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
