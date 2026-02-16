import type { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app-container">
      <NavBar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
