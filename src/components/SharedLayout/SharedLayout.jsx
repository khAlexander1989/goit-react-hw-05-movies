import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import NavBar from 'components/NavBar';
import { PageHeader, Container } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <PageHeader>
        <NavBar />
      </PageHeader>
      <Suspense fallback={<p>Loading page...</p>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
}
