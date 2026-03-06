import {
  Bird,
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  Instagram,
  Facebook,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Aves de Bogotá', href: '/aves' },
  { label: 'Informes', href: '/informes' },
  { label: 'Donar', href: '/donar' },
  { label: 'Reportar ave', href: '/emergencia' },
  { label: 'Contacto', href: '/contacto' },
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
    >
      {children}
    </a>
  );
}

function FooterSection({ title, children }) {
  return (
    <div>
      <h3 className="text-xs uppercase font-semibold tracking-widest text-foreground mb-3">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function SocialLinks() {
  const socials = [
    {
      href: 'https://www.instagram.com/avessosbogota/',
      icon: Instagram,
      label: 'Instagram',
    },
    {
      href: 'https://www.facebook.com/Aves.SOS.Bogota/',
      icon: Facebook,
      label: 'Facebook',
    },
  ];

  return (
    <div className="flex gap-3">
      {socials.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      {/* Emergency Banner */}
      <div className="bg-destructive text-destructive-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-medium">
            ¿Encontraste un ave herida o en peligro?
          </p>
          <a
            href="/emergencia"
            className={cn(
              'inline-flex items-center gap-2 px-3 py-1.5 rounded',
              'border border-destructive-foreground',
              'bg-transparent hover:bg-destructive-foreground hover:text-destructive',
              'transition-colors text-sm font-medium flex-shrink-0'
            )}
          >
            <AlertTriangle className="w-4 h-4" />
            Reportar emergencia
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-3">
              <Bird className="w-6 h-6 text-primary" />
              <span className="font-bold">
                Aves <span className="text-primary">S.O.S</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              ONG colombiana fundada en 2019, dedicada al rescate, crianza y
              rehabilitación de aves silvestres en Bogotá.
            </p>
            <SocialLinks />
          </div>

          {/* Navigation */}
          <FooterSection title="Navegación">
            {navLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Contacto">
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Bogotá D.C., Colombia</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <FooterLink href="mailto:info@avesSOS.org">
                  info@avesSOS.org
                </FooterLink>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <FooterLink href="tel:+573001234567">
                  +57 300 123 4567
                </FooterLink>
              </div>
            </div>
          </FooterSection>

          {/* Legal & CTA */}
          <FooterSection title="Legal">
            <FooterLink href="/privacidad">Política de privacidad</FooterLink>
            <a
              href="/donar"
              className={cn(
                'block text-center px-4 py-2 rounded mt-4',
                'bg-primary text-primary-foreground hover:bg-primary/90',
                'transition-colors text-sm font-medium'
              )}
            >
              Apoya nuestra misión
            </a>
          </FooterSection>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Fundación Aves S.O.S Bogotá. Todos los
            derechos reservados.
          </p>
          <p>ONG sin ánimo de lucro · Fundada en 2019</p>
        </div>
      </div>
    </footer>
  );
}
