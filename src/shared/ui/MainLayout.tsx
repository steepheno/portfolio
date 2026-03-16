import Header from '@/widgets/header/Header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height' }}>
        <Outlet />
      </main>
    </>
  );
}
