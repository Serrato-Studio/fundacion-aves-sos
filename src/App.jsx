import { Outlet } from 'react-router';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </ThemeProvider>
    </div>
  );
}
