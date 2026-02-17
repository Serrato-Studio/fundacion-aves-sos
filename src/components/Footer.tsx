import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';

function FooterLogo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-2xl font-bold tracking-tight"
    >
      <span className="text-foreground">Aves S.O.S</span>
    </Link>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

function FooterLink({ href, label, external = false }: FooterLinkProps) {
  const className =
    'text-sm text-muted-foreground hover:text-foreground transition-colors';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {label}
    </Link>
  );
}

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function SocialLinks() {
  const socials = [
    {
      icon: FacebookIcon,
      href: 'https://www.facebook.com/Aves.SOS.Bogota/',
      label: 'Facebook',
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/avessosbogota/',
      label: 'Instagram',
    },
    // { icon: YouTubeIcon, href: 'https://www.youtube.com/', label: 'YouTube' },
  ];

  return (
    <div className="flex gap-2">
      {socials.map(({ icon: Icon, href, label }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon"
          asChild
          className="text-muted-foreground hover:text-foreground"
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        </Button>
      ))}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <FooterLogo />
            <p className="text-sm text-muted-foreground">
              Protegiendo aves en peligro. Juntos hacemos la diferencia.
            </p>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Síguenos
              </h3>
              <SocialLinks />
            </div>
          </div>

          <FooterSection title="Navegación">
            <FooterLink href="#" label="Inicio" />
            <FooterLink href="#" label="Nosotros" />
            <FooterLink href="#" label="Contacto" />
            <FooterLink href="#" label="Donaciones" />
          </FooterSection>

          <FooterSection title="Organización">
            <FooterLink href="#" label="Sobre nosotros" />
            <FooterLink href="#" label="Misión y valores" />
            <FooterLink href="#" label="Equipo" />
            <FooterLink href="#" label="Empleos" />
          </FooterSection>

          <FooterSection title="Legal">
            <FooterLink href="#" label="Políticas de privacidad" />
            <FooterLink href="#" label="Términos de uso" />
            <FooterLink href="#" label="Soporte" />
            <FooterLink href="#" label="Accesibilidad" />
          </FooterSection>
        </div>

        <div className="border-t border-border/40 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Fundación Aves S.O.S. Todos los derechos reservados.
          </p>

          <Link to="#">
            <Button size="sm" className="gap-2">
              <Heart className="w-4 h-4" />
              Donar
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
