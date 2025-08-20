import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/pages';
import { Layout } from '@/shared/ui';
import type { FC } from 'react';

export const Router: FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
