import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/shared/ui/MainLayout';
import MainPage from '@/pages/mainPage/MainPage';
import Resume from '@/pages/resume/Resume';
import ChoiceAndAppear from '@/pages/projects/cna/ChoiceAndAppear';
import DoroLaw from '@/pages/projects/dorolaw/DoroLaw';
import DevPilot from '@/pages/projects/devpilot/DevPilot';

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
      {
        path: '/projects',
        children: [
          {
            path: 'choice-and-appear',
            element: <ChoiceAndAppear />,
          },
          {
            path: 'dorolaw',
            element: <DoroLaw />,
          },
          {
            path: 'devpilot',
            element: <DevPilot />,
          },
        ],
      },
    ],
  },
]);
