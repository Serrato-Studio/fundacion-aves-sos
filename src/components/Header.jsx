import { Link, useNavigate } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Menu, AlertTriangle, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';

const nosotrosLinks = [
  {
    label: 'Quiénes Somos',
    anchor: 'quienes-somos',
    desc: 'Nuestra historia y propósito',
  },
  {
    label: 'Misión y Visión',
    anchor: 'mision-vision',
    desc: 'Lo que nos mueve y hacia dónde vamos',
  },
  {
    label: 'Filosofía',
    anchor: 'filosofia',
    desc: 'Los valores que guían nuestro trabajo',
  },
  { label: 'Objetivos', anchor: 'objetivos', desc: 'Nuestras metas concretas' },
  {
    label: 'Fundadores',
    anchor: 'fundadores',
    desc: 'Las personas detrás de la fundación',
  },
];

const avesLinks = [
  {
    label: 'Aves Cotidianas',
    anchor: 'cotidianas',
    desc: 'Las que ves todos los días en Bogotá',
  },
  {
    label: 'Aves de Humedales',
    anchor: 'humedales',
    desc: 'Habitantes de La Conejera y Córdoba',
  },
];

const informesLinks = [
  {
    label: 'Informes de Veeduría',
    anchor: 'veeduria',
    desc: 'Documentos de control ciudadano',
  },
  {
    label: 'Informes de Gestión',
    anchor: 'gestion',
    desc: 'Reportes de actividad institucional',
  },
];

function DropdownItem({ label, desc, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group flex flex-col gap-0.5 rounded-md px-3 py-2.5 text-left w-full',
        'transition-colors hover:bg-accent focus:outline-none focus:bg-accent'
      )}
    >
      <span className="text-sm font-medium font-sans text-foreground group-hover:text-accent-foreground transition-colors">
        {label}
      </span>
      <span className="text-xs font-sans text-muted-foreground group-hover:text-accent-foreground/80 transition-colors">
        {desc}
      </span>
    </button>
  );
}

export default function NavBar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (path, anchor) => {
    setMobileOpen(false);
    navigate(path);
    if (anchor) {
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border
        transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-3'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group select-none">
          <div className="leading-tight">
            <p className="font-serif text-foreground text-base font-bold tracking-tight">
              Aves <span className="text-primary">S.O.S</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans">
              Bogotá
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-sans text-sm font-medium">
                  Nosotros
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-2">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-3 pt-1 pb-2 font-sans font-medium">
                      La Fundación
                    </p>
                    {nosotrosLinks.map((item) => (
                      <DropdownItem
                        key={item.anchor}
                        label={item.label}
                        desc={item.desc}
                        onClick={() => goTo('/nosotros', item.anchor)}
                      />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-sans text-sm font-medium">
                  Aves
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-2">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-3 pt-1 pb-2 font-sans font-medium">
                      Aves de Bogotá
                    </p>
                    {avesLinks.map((item) => (
                      <DropdownItem
                        key={item.anchor}
                        label={item.label}
                        desc={item.desc}
                        onClick={() => goTo('/aves', item.anchor)}
                      />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-sans text-sm font-medium">
                  Informes
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-2">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-3 pt-1 pb-2 font-sans font-medium">
                      Documentos
                    </p>
                    {informesLinks.map((item) => (
                      <DropdownItem
                        key={item.anchor}
                        label={item.label}
                        desc={item.desc}
                        onClick={() => goTo('/informes', item.anchor)}
                      />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={() => goTo('/contacto')}
                  className="px-4 py-2 text-sm font-medium font-sans text-foreground/80
                             hover:text-foreground hover:bg-accent rounded-md transition-colors"
                >
                  Contacto
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ModeToggle />

          <Button
            variant="outline"
            size="sm"
            onClick={() => goTo('/donaciones')}
            className="font-sans font-medium"
          >
            <Heart className="w-3.5 h-3.5 mr-1.5" />
            Donar
          </Button>

          <Button
            size="sm"
            variant="destructive"
            onClick={() => goTo('/sos')}
            className="font-sans font-medium"
          >
            <AlertTriangle className="w-3.5 h-3.5 mr-1.5" />
            Reportar ave
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-80 p-0">
            <div className="flex flex-col h-full">
              <div className="px-6 py-5 border-b border-border">
                <p className="font-serif text-foreground text-lg font-bold">
                  Aves <span className="text-primary">S.O.S</span>
                </p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-sans mt-0.5">
                  Bogotá
                </p>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-2 pt-2 pb-1 font-sans">
                  Nosotros
                </p>
                {nosotrosLinks.map((item) => (
                  <button
                    key={item.anchor}
                    onClick={() => goTo('/nosotros', item.anchor)}
                    className="w-full text-left px-3 py-2 rounded-md text-sm font-sans
                               text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                <Separator className="my-2" />

                <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-2 pt-2 pb-1 font-sans">
                  Aves de Bogotá
                </p>
                {avesLinks.map((item) => (
                  <button
                    key={item.anchor}
                    onClick={() => goTo('/aves', item.anchor)}
                    className="w-full text-left px-3 py-2 rounded-md text-sm font-sans
                               text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                <Separator className="my-2" />

                <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-2 pt-2 pb-1 font-sans">
                  Informes
                </p>
                {informesLinks.map((item) => (
                  <button
                    key={item.anchor}
                    onClick={() => goTo('/informes', item.anchor)}
                    className="w-full text-left px-3 py-2 rounded-md text-sm font-sans
                               text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                <Separator className="my-2" />

                <button
                  onClick={() => goTo('/contacto')}
                  className="w-full text-left px-3 py-2 rounded-md text-sm font-sans
                             text-foreground/70 hover:text-foreground hover:bg-accent transition-colors"
                >
                  Contacto
                </button>
              </div>

              <div className="px-4 py-3 border-t border-border flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans font-medium">
                  Tema
                </span>
                <ModeToggle />
              </div>
              <div className="px-4 py-5 border-t border-border flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goTo('/donaciones')}
                  className="w-full font-sans font-medium"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Donar
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => goTo('/sos')}
                  className="w-full font-sans font-medium"
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Reportar un ave
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
