import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/mainPage/MainPage';
import MainLayout from '@/shared/ui/MainLayout';
import Resume from '@/pages/resume/Resume';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);
