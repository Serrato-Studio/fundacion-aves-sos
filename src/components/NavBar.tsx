import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Heart, Menu } from 'lucide-react';

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-2xl font-bold tracking-tight"
    >
      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
        <span className="text-primary-foreground text-sm">🕊️</span>
      </div>
      <span className="hidden sm:inline text-foreground">Aves S.O.S</span>
    </Link>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
}

function NavLink({ href, label }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
        isActive
          ? 'text-primary bg-primary/10'
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {label}
    </Link>
  );
}

function NavigationLinks() {
  const links = [
    { href: '/', label: 'Inicio' },
    { href: '#', label: 'Nosotros' },
    { href: '#', label: 'Contacto' },
    { href: '#', label: 'Políticas' },
  ];

  return (
    <nav className="hidden md:flex items-center gap-1">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
}

function DonateButton() {
  return (
    <Link to="#">
      <Button size="sm" className="gap-2">
        <Heart className="w-4 h-4" />
        <span className="hidden sm:inline">Donar</span>
        <span className="sm:hidden">Donar</span>
      </Button>
    </Link>
  );
}

function EmergencyButton() {
  return (
    <Link to="/emergencia">
      <Button variant="destructive" size="sm" className="gap-2">
        <span className="hidden sm:inline">S.O.S: Ave en peligro</span>
        <span className="sm:hidden">S.O.S: Ave en peligro</span>
      </Button>
    </Link>
  );
}

function MobileMenu() {
  const links = [
    { href: '/', label: 'Inicio' },
    { href: '#', label: 'Nosotros' },
    { href: '#', label: 'Contacto' },
    { href: '#', label: 'Políticas' },
  ];

  return (
    <nav className="flex flex-col gap-2">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />

        <NavigationLinks />

        <div className="flex items-center gap-2">
          <DonateButton />
          <EmergencyButton />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-8">
                <h2 className="font-semibold text-lg">Menú</h2>
                <MobileMenu />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
