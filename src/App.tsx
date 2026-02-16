import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactFormPage from '@/pages/ContactFormPage';
import DonatePage from '@/pages/DonatePage';
import PoliciesPage from '@/pages/PoliciesPage';
import SuccessPage from '@/pages/SuccessPage';
import NotFoundPage from '@/pages/NotFoundPage';
import Layout from '@/components/Layout';
import EmergencyPage from '@/pages/EmergencyPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactFormPage />} />
        <Route path="/donaciones" element={<DonatePage />} />
        <Route path="/donaciones/exito" element={<SuccessPage />} />
        <Route path="/politicas" element={<PoliciesPage />} />
        <Route path="/emergencia" element={<EmergencyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
