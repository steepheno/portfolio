import Header from '@/widgets/header/Header';
import { Outlet } from 'react-router-dom';
import ScrollRestoration from './ScrollRestoration';

export default function MainLayout() {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <Outlet />
      </main>
    </>
  );
}
