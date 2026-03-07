import { useState, useEffect } from 'react';
import { Menu, X, Bird, AlertTriangle, Heart } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';

const nosotrosLinks = [
  { label: 'Quiénes somos', href: '/nosotros#quienes-somos' },
  { label: 'Misión y visión', href: '/nosotros#mision-vision' },
  { label: 'Filosofía', href: '/nosotros#filosofia' },
  { label: 'Objetivos', href: '/nosotros#objetivos' },
  { label: 'Fundadores', href: '/nosotros#fundadores' },
];

const avesLinks = [
  { label: 'Aves cotidianas', href: '/aves#cotidianas' },
  { label: 'Aves de humedales', href: '/aves#humedales' },
];

const informesLinks = [
  { label: 'Informes de Veeduría', href: '/informes#veeduria' },
  { label: 'Informes de Gestión', href: '/informes#gestion' },
];

function ListItem({ href, children, title, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

function MobileDrawer({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {open && (
        <div onClick={onClose} className="fixed inset-0 z-40 bg-black/40" />
      )}

      <div
        className={cn(
          'fixed right-0 top-0 bottom-0 w-72 bg-background shadow-lg z-50',
          'transform transition-transform duration-300 ease-out overflow-y-auto',
          'border-l border-border',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <a href="/" onClick={onClose} className="flex items-center gap-2">
            <Bird className="w-5 h-5 text-primary" />
            <span className="font-bold text-sm">
              Aves <span className="text-primary">S.O.S</span>
            </span>
          </a>
          <button
            onClick={onClose}
            className="p-1 hover:bg-accent rounded"
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-4">
          {[
            { title: 'Nosotros', links: nosotrosLinks },
            { title: 'Aves', links: avesLinks },
            { title: 'Informes', links: informesLinks },
          ].map((section) => (
            <div key={section.title}>
              <p className="text-xs uppercase font-semibold text-muted-foreground mb-2 px-2">
                {section.title}
              </p>
              <div className="space-y-1">
                {section.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block px-3 py-2 rounded text-sm hover:bg-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <a
            href="/contacto"
            onClick={onClose}
            className="block px-3 py-2 rounded text-sm font-medium hover:bg-accent transition-colors"
          >
            Contacto
          </a>
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <a
            href="/donar"
            onClick={onClose}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded border border-border hover:bg-accent transition-colors text-sm font-medium"
          >
            <Heart className="w-4 h-4" />
            Donar
          </a>
          <a
            href="/emergencia"
            onClick={onClose}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors text-sm font-medium"
          >
            <AlertTriangle className="w-4 h-4" />
            Reportar ave
          </a>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-background border-b border-border',
        'transition-shadow duration-300',
        scrolled && 'shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="/images/logo-bird.jpg"
              alt="Fundación Aves S.O.S Bogotá"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-sm tracking-tight">
            Aves <span className="text-primary">S.O.S</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Nosotros */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-sans text-sm font-medium">
                Nosotros
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-72 p-2">
                  {nosotrosLinks.map((link) => (
                    <ListItem
                      key={link.href}
                      href={link.href}
                      title={link.label}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Aves */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-sans text-sm font-medium">
                Aves
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-72 p-2">
                  {avesLinks.map((link) => (
                    <ListItem
                      key={link.href}
                      href={link.href}
                      title={link.label}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Informes */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-sans text-sm font-medium">
                Informes
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-72 p-2">
                  {informesLinks.map((link) => (
                    <ListItem
                      key={link.href}
                      href={link.href}
                      title={link.label}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contacto */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/contacto" className="font-sans text-sm font-medium">
                  Contacto
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <ModeToggle />
          <a
            href="/donar"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-border hover:bg-accent transition-colors text-sm font-medium"
          >
            <Heart className="w-3.5 h-3.5" />
            Donar
          </a>
          <a
            href="/emergencia"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors text-sm font-medium"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            Reportar ave
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 hover:bg-accent rounded"
          aria-label="Abrir menú"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
