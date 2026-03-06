import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.jsx';
import NotFound from '@/pages/NotFound.jsx';
import HomePage from '@/pages/HomePage';
import EmergencyPage from '@/pages/EmergencyPage';
import DonatePage from '@/pages/DonatePage';
import AboutPage from '@/pages/AboutPage';
import BirdsPage from '@/pages/BirdsPage';
import ReportsPage from '@/pages/ReportsPage';
import ContactFormPage from '@/pages/ContactFormPage';
import PoliciesPage from '@/pages/PoliciesPage';
import ErrorPage from '@/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/emergencia', element: <EmergencyPage /> },
      { path: '/donar', element: <DonatePage /> },
      { path: '/nosotros', element: <AboutPage /> },
      { path: '/aves', element: <BirdsPage /> },
      { path: '/informes', element: <ReportsPage /> },
      { path: '/contacto', element: <ContactFormPage /> },
      { path: '/privacidad', element: <PoliciesPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
