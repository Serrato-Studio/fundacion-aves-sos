import {
  AlertTriangle,
  Heart,
  Bird,
  Users,
  BookOpen,
  Leaf,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const stats = [
  { value: '500+', label: 'Aves rescatadas', icon: Bird },
  { value: '2019', label: 'Año de fundación', icon: Leaf },
  { value: '100%', label: 'Sin ánimo de lucro', icon: Heart },
  {
    value: '1°',
    label: 'En manejo de palomas urbanas en Colombia',
    icon: Users,
  },
];

const whatWeDo = [
  {
    title: 'Rescate de emergencia',
    description:
      'Atendemos reportes ciudadanos de aves heridas o en peligro. Nuestro equipo responde rápidamente para intervenir y estabilizar el animal.',
    icon: AlertTriangle,
    href: '/emergencia',
    cta: 'Reportar un ave',
  },
  {
    title: 'Rehabilitación',
    description:
      'Brindamos atención veterinaria, crianza a mano y rehabilitación conductual para preparar a las aves para su retorno a la vida silvestre.',
    icon: Heart,
    href: '/nosotros',
    cta: 'Conoce más',
  },
  {
    title: 'Educación ambiental',
    description:
      'Trabajamos con la comunidad bogotana para fomentar el respeto y la coexistencia con la fauna silvestre, especialmente las aves urbanas.',
    icon: BookOpen,
    href: '/nosotros#objetivos',
    cta: 'Nuestra filosofía',
  },
  {
    title: 'Palomas urbanas',
    description:
      'Somos pioneros en Colombia en el manejo humanitario y científico de palomas urbanas, aplicando metodologías internacionales.',
    icon: Bird,
    href: '/aves',
    cta: 'Ver aves',
  },
];

function Badge({ children, variant = 'outline' }) {
  const isSecondary = variant === 'secondary';
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: 9999,
        border: isSecondary ? 'none' : '1px solid var(--border, #e5e7eb)',
        background: isSecondary ? 'var(--secondary, #f3f4f6)' : 'transparent',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.05em',
        color: isSecondary
          ? 'var(--secondary-foreground, #111)'
          : 'var(--foreground, #111)',
        marginBottom: 16,
      }}
    >
      {children}
    </span>
  );
}

function Btn({ href, children, variant = 'default', size = 'md' }) {
  const styles = {
    default: {
      background: 'var(--primary, #16a34a)',
      color: '#fff',
      border: 'none',
    },
    destructive: {
      background: 'var(--destructive, #dc2626)',
      color: '#fff',
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: 'var(--foreground, #111)',
      border: '1px solid var(--border, #e5e7eb)',
    },
  };
  const padding = size === 'lg' ? '12px 24px' : '9px 18px';
  const fontSize = size === 'lg' ? 15 : 14;

  return (
    <a
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding,
        borderRadius: 6,
        fontWeight: 500,
        fontSize,
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.15s',
        ...styles[variant],
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/images/hero-bird.jpg"
            alt="Ave silvestre en Bogotá"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 16px',
            maxWidth: 896,
            margin: '0 auto',
          }}
        >
          <Badge variant="secondary">Bogotá · Colombia · Desde 2019</Badge>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Cada ave merece una{' '}
            <span style={{ color: 'var(--primary, #16a34a)' }}>
              segunda oportunidad
            </span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 640,
              margin: '0 auto 40px',
            }}
          >
            Somos una ONG bogotana dedicada al rescate, crianza y rehabilitación
            de aves silvestres, exóticas y domésticas. Pioneros en Colombia en
            el manejo humanitario de palomas urbanas.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              justifyContent: 'center',
            }}
          >
            <Btn href="/donar" size="lg">
              <Heart size={18} />
              Apoya la causa
            </Btn>
            <Btn href="/emergencia" variant="destructive" size="lg">
              <AlertTriangle size={18} />
              Reportar emergencia
            </Btn>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
          }}
        >
          <div
            style={{
              width: 24,
              height: 40,
              border: '2px solid rgba(255,255,255,0.5)',
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 8,
            }}
          >
            <div
              style={{
                width: 4,
                height: 8,
                background: 'rgba(255,255,255,0.7)',
                borderRadius: 2,
              }}
            />
          </div>
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-8px); }
          }
        `}</style>
      </section>

      <section
        style={{
          background: 'var(--primary, #16a34a)',
          color: '#fff',
          padding: '48px 16px',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: 24,
              textAlign: 'center',
            }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Icon size={22} style={{ opacity: 0.8 }} />
                  <span
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '2rem',
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ fontSize: 13, opacity: 0.8, lineHeight: 1.4 }}>
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '80px 16px',
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Badge>Nuestra labor</Badge>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              color: 'var(--foreground, #111)',
              marginBottom: 16,
              lineHeight: 1.3,
            }}
          >
            Lo que hacemos
          </h2>
          <p
            style={{
              color: 'var(--muted-foreground, #6b7280)',
              maxWidth: 640,
              margin: '0 auto',
              lineHeight: 1.7,
              fontSize: 15,
            }}
          >
            Desde el rescate de emergencia hasta la liberación de aves
            rehabilitadas, nuestra fundación opera con rigor científico y
            profundo amor por la fauna bogotana.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
          }}
        >
          {whatWeDo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  background: 'var(--card, #fff)',
                  border: '1px solid var(--border, #e5e7eb)',
                  borderRadius: 12,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    '0 8px 24px rgba(0,0,0,0.1)')
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: 'var(--accent, #f3f4f6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: 'var(--accent-foreground, #111)' }}
                  />
                </div>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: 15,
                    color: 'var(--foreground, #111)',
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--muted-foreground, #6b7280)',
                    lineHeight: 1.6,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {item.description}
                </p>
                <a
                  href={item.href}
                  style={{
                    fontSize: 13,
                    color: 'var(--primary, #16a34a)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  {item.cta}
                  <ChevronRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section
        style={{
          background: 'var(--secondary, #f3f4f6)',
          padding: '80px 16px',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                aspectRatio: '4/3',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              }}
            >
              <img
                src="/images/rescate.jpg"
                alt="Voluntario rescatando un ave"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <Badge>Quiénes somos</Badge>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                  fontWeight: 700,
                  color: 'var(--secondary-foreground, #111)',
                  marginBottom: 24,
                  lineHeight: 1.3,
                }}
              >
                Pasión científica por las aves de Bogotá
              </h2>
              <p
                style={{
                  color: 'var(--muted-foreground, #6b7280)',
                  lineHeight: 1.7,
                  marginBottom: 16,
                  fontSize: 15,
                }}
              >
                Nacimos en 2019 con la convicción de que la ciudadanía y la
                fauna silvestre pueden convivir. Hoy somos un equipo de
                biólogos, veterinarios y voluntarios comprometidos con cada caso
                que llega a nuestras manos.
              </p>
              <p
                style={{
                  color: 'var(--muted-foreground, #6b7280)',
                  lineHeight: 1.7,
                  marginBottom: 32,
                  fontSize: 15,
                }}
              >
                Trabajamos directamente con la comunidad bogotana, capacitando a
                ciudadanos para reconocer y reportar aves en situación
                vulnerable, y formando las nuevas generaciones de defensores de
                la fauna.
              </p>
              <Btn href="/nosotros">
                Conoce nuestra historia
                <ArrowRight size={16} />
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '80px 16px',
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            <Badge>Pioneros en Colombia</Badge>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: 700,
                color: 'var(--foreground, #111)',
                marginBottom: 24,
                lineHeight: 1.3,
              }}
            >
              Manejo humanitario de palomas urbanas
            </h2>
            <p
              style={{
                color: 'var(--muted-foreground, #6b7280)',
                lineHeight: 1.7,
                marginBottom: 16,
                fontSize: 15,
              }}
            >
              Fundación Aves S.O.S Bogotá es la primera organización en Colombia
              en aplicar metodologías internacionales de manejo humanitario de
              palomas urbanas, promoviendo la coexistencia entre las aves y la
              ciudadanía.
            </p>
            <p
              style={{
                color: 'var(--muted-foreground, #6b7280)',
                lineHeight: 1.7,
                marginBottom: 32,
                fontSize: 15,
              }}
            >
              Nuestro enfoque científico reemplaza métodos letales por
              estrategias de control poblacional ético, salud pública y
              educación ciudadana.
            </p>
            <Btn href="/aves#cotidianas" variant="outline">
              Ver aves de Bogotá
              <ArrowRight size={16} />
            </Btn>
          </div>
          <div
            style={{
              aspectRatio: '4/3',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            <img
              src="/images/palomas.jpg"
              alt="Palomas en Bogotá"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section
        style={{ background: 'var(--muted, #f9fafb)', padding: '80px 16px' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                aspectRatio: '4/3',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              }}
            >
              <img
                src="/images/humedal-bird.jpg"
                alt="Ave en humedal de Bogotá"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <Badge>Biodiversidad bogotana</Badge>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                  fontWeight: 700,
                  color: 'var(--foreground, #111)',
                  marginBottom: 24,
                  lineHeight: 1.3,
                }}
              >
                Aves de los humedales bogotanos
              </h2>
              <p
                style={{
                  color: 'var(--muted-foreground, #6b7280)',
                  lineHeight: 1.7,
                  marginBottom: 32,
                  fontSize: 15,
                }}
              >
                Los humedales de Bogotá son ecosistemas únicos que albergan
                decenas de especies de aves residentes y migratorias. Trabajamos
                activamente por su protección y la divulgación de su importancia
                ecológica.
              </p>
              <Btn href="/aves#humedales" variant="outline">
                Explorar aves de humedales
                <ArrowRight size={16} />
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '80px 16px',
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Badge>Únete a la causa</Badge>
        <h2
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: 'var(--foreground, #111)',
            marginBottom: 24,
            lineHeight: 1.3,
            maxWidth: 640,
            margin: '0 auto 24px',
          }}
        >
          Tu apoyo hace posible cada rescate
        </h2>
        <p
          style={{
            color: 'var(--muted-foreground, #6b7280)',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 480,
            margin: '0 auto 40px',
            fontSize: 15,
          }}
        >
          Como ONG sin ánimo de lucro, dependemos de la solidaridad de la
          comunidad. Con tu donación financiamos atención veterinaria,
          alimentos, equipos y capacitación.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'center',
          }}
        >
          <Btn href="/donar" size="lg">
            <Heart size={18} />
            Quiero donar
          </Btn>
          <Btn href="/contacto" variant="outline" size="lg">
            Contáctanos
          </Btn>
        </div>
      </section>
    </div>
  );
}
