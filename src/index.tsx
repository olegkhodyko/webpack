import './styles.scss';

import App from '@/app/App';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import AboutScreenLazy from '@/pages/About/About.screen.lazy';
import ShopScreenLazy from '@/pages/Shop/Shop.screen.lazy';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found!');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense>
            <AboutScreenLazy />
          </Suspense>
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense>
            <ShopScreenLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
