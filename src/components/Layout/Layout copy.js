import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import  AppNav from '../AppNav';
import { Container } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <AppNav />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
