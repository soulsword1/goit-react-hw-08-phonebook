import Navigation from '../Navigation';
import Menu from '../Menu';
import AuthNav from '../AuthNav';
import { useAuth } from 'hooks';
import { Header } from './AppNav.styled';

export default function AppNav() {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <Menu /> : <AuthNav />}
    </Header>
  );
};
