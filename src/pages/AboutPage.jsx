import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  CheckCircle2,
  Users,
  ArrowRight,
} from 'lucide-react';

const objetivos = [
  'Rescatar, rehabilitar y liberar aves silvestres nativas y exóticas en Bogotá.',
  'Ser pioneros en el manejo humanitario y científico de palomas urbanas en Colombia.',
  'Educar a la ciudadanía sobre la importancia de la fauna silvestre y su conservación.',
  'Crear redes de ciudadanos comprometidos con el reporte y cuidado de aves vulnerables.',
  'Desarrollar protocolos veterinarios especializados en avifauna urbana.',
  'Contribuir a la investigación y veeduría de políticas de bienestar animal en Bogotá.',
];

const fundadores = [
  {
    nombre: 'Laura Sandoval',
    rol: 'Directora Ejecutiva · Bióloga',
    descripcion:
      'Bióloga con especialización en ornitología. Lidera la dirección estratégica y la atención veterinaria de la fundación desde su fundación en 2019.',
  },
  {
    nombre: 'Camilo Rojas',
    rol: 'Director Científico · Ecólogo',
    descripcion:
      'Ecólogo urbano con énfasis en ecosistemas bogotanos. Responsable de los protocolos de rehabilitación y los programas de investigación.',
  },
  {
    nombre: 'Ana Mejía',
    rol: 'Directora de Comunidad · Educadora Ambiental',
    descripcion:
      'Educadora ambiental y gestora de redes de voluntarios. Lidera los programas de formación ciudadana y las campañas de sensibilización.',
  },
];

function Badge({ children }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: 9999,
        border: '1px solid var(--border, #e5e7eb)',
        fontSize: 12,
        fontWeight: 500,
        color: 'var(--foreground, #111)',
        marginBottom: 16,
      }}
    >
      {children}
    </span>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: 'var(--card, #fff)',
        border: '1px solid var(--border, #e5e7eb)',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

function SectionContainer({ children, style }) {
  return (
    <div
      style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px', ...style }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          position: 'relative',
          padding: '96px 16px',
          background: 'var(--secondary, #f3f4f6)',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 896, margin: '0 auto' }}>
          <Badge>Sobre nosotros</Badge>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: 'var(--secondary-foreground, #111)',
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            La fundación que protege a las aves de Bogotá
          </h1>
          <p
            style={{
              fontSize: 18,
              color: 'var(--muted-foreground, #6b7280)',
              lineHeight: 1.7,
              maxWidth: 640,
              margin: '0 auto',
            }}
          >
            Desde 2019, trabajamos con pasión científica y compromiso ciudadano
            por el bienestar de la avifauna bogotana.
          </p>
        </div>
      </section>

      <section
        id="quienes-somos"
        style={{ padding: '80px 0', scrollMarginTop: 80 }}
      >
        <SectionContainer>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div>
              <Badge>Quiénes somos</Badge>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  color: 'var(--foreground, #111)',
                  marginBottom: 24,
                  lineHeight: 1.3,
                }}
              >
                Una historia de amor por las aves
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  color: 'var(--muted-foreground, #6b7280)',
                  lineHeight: 1.7,
                  fontSize: 15,
                }}
              >
                <p style={{ margin: 0 }}>
                  La Fundación Aves S.O.S Bogotá es una organización sin ánimo
                  de lucro fundada en 2019 por un grupo de biólogos, ecólogos y
                  educadores ambientales bogotanos que compartían una profunda
                  preocupación por el bienestar de las aves de la ciudad.
                </p>
                <p style={{ margin: 0 }}>
                  Trabajamos con aves silvestres nativas, aves exóticas,
                  ornamentales y domésticas que llegan a nosotros por diversas
                  circunstancias: traumatismos, orfandad, cautiverio ilegal o
                  condiciones de estrés urbano.
                </p>
                <p style={{ margin: 0 }}>
                  Nuestro equipo interdisciplinario aplica metodologías
                  científicas actualizadas y protocolos de bienestar animal para
                  garantizar la mejor rehabilitación posible, siempre con el
                  objetivo de devolver a cada ave a su hábitat natural.
                </p>
              </div>
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
                src="/images/equipo.jpg"
                alt="Equipo de la fundación"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </SectionContainer>
      </section>

      <hr
        style={{
          border: 'none',
          borderTop: '1px solid var(--border, #e5e7eb)',
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
        }}
      />

      <section
        id="mision-vision"
        style={{
          padding: '80px 0',
          background: 'var(--muted, #f9fafb)',
          scrollMarginTop: 80,
        }}
      >
        <SectionContainer>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <Badge>Misión y visión</Badge>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
            }}
          >
            {[
              {
                icon: (
                  <Target
                    size={24}
                    style={{ color: 'var(--primary-foreground, #fff)' }}
                  />
                ),
                title: 'Misión',
                text: 'Rescatar, rehabilitar y reintroducir aves silvestres y domésticas en situación vulnerable en Bogotá, promoviendo la coexistencia entre la ciudadanía y la fauna silvestre a través de la educación ambiental, la ciencia y el compromiso comunitario.',
              },
              {
                icon: (
                  <Eye
                    size={24}
                    style={{ color: 'var(--primary-foreground, #fff)' }}
                  />
                ),
                title: 'Visión',
                text: 'Ser la organización de referencia en Colombia para el rescate y manejo de avifauna urbana, construyendo una Bogotá donde cada ciudadano sea guardián de la biodiversidad de su entorno y donde las aves coexistan dignamente en el paisaje urbano.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <div style={{ padding: 32 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 8,
                      background: 'var(--primary, #16a34a)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 24,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--foreground, #111)',
                      marginBottom: 16,
                      marginTop: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--muted-foreground, #6b7280)',
                      lineHeight: 1.7,
                      margin: 0,
                      fontSize: 15,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section
        id="filosofia"
        style={{ padding: '80px 0', scrollMarginTop: 80 }}
      >
        <SectionContainer>
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
                alt="Rehabilitación de aves"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <Badge>Filosofía</Badge>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 24,
                }}
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
                  <Lightbulb
                    size={20}
                    style={{ color: 'var(--accent-foreground, #111)' }}
                  />
                </div>
                <h2
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.875rem',
                    fontWeight: 700,
                    color: 'var(--foreground, #111)',
                    margin: 0,
                  }}
                >
                  Nuestra filosofía
                </h2>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  color: 'var(--muted-foreground, #6b7280)',
                  lineHeight: 1.7,
                  fontSize: 15,
                }}
              >
                <p style={{ margin: 0 }}>
                  Creemos que el bienestar animal y el bienestar humano son
                  inseparables. Una ciudad que cuida a sus animales silvestres
                  es una ciudad más sana, más consciente y más justa.
                </p>
                <p style={{ margin: 0 }}>
                  Nuestra aproximación combina el rigor de la ciencia con la
                  calidez del trato humano. Cada ave que llega a nuestras manos
                  recibe atención personalizada, protocolos veterinarios
                  especializados y el tiempo necesario para recuperarse sin
                  apuros.
                </p>
                <p style={{ margin: 0 }}>
                  Rechazamos los métodos letales y defendemos el manejo
                  humanitario como única alternativa ética frente a los
                  conflictos entre humanos y fauna urbana.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section
        id="objetivos"
        style={{
          padding: '80px 0',
          background: 'var(--secondary, #f3f4f6)',
          scrollMarginTop: 80,
        }}
      >
        <SectionContainer>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <Badge>Objetivos</Badge>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: 700,
                color: 'var(--secondary-foreground, #111)',
                margin: '0 auto',
                lineHeight: 1.3,
              }}
            >
              Lo que buscamos lograr
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {objetivos.map((objetivo, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  background: 'var(--card, #fff)',
                  padding: 20,
                  borderRadius: 8,
                  border: '1px solid var(--border, #e5e7eb)',
                }}
              >
                <CheckCircle2
                  size={18}
                  style={{
                    color: 'var(--primary, #16a34a)',
                    marginTop: 2,
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontSize: 14,
                    color: 'var(--card-foreground, #111)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {objetivo}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section
        id="fundadores"
        style={{ padding: '80px 0', scrollMarginTop: 80 }}
      >
        <SectionContainer>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <Badge>Equipo fundador</Badge>
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
              Las personas detrás de la fundación
            </h2>
            <p
              style={{
                color: 'var(--muted-foreground, #6b7280)',
                maxWidth: 480,
                margin: '0 auto',
                lineHeight: 1.7,
                fontSize: 15,
              }}
            >
              Un equipo apasionado, interdisciplinario y comprometido con las
              aves de Bogotá.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 32,
            }}
          >
            {fundadores.map((fundador) => (
              <Card key={fundador.nombre}>
                <div style={{ padding: 32, textAlign: 'center' }}>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'var(--accent, #f3f4f6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <Users
                      size={30}
                      style={{ color: 'var(--accent-foreground, #111)' }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--foreground, #111)',
                      marginBottom: 4,
                      marginTop: 0,
                    }}
                  >
                    {fundador.nombre}
                  </h3>
                  <p
                    style={{
                      fontSize: 11,
                      color: 'var(--primary, #16a34a)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: 16,
                      marginTop: 0,
                    }}
                  >
                    {fundador.rol}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'var(--muted-foreground, #6b7280)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {fundador.descripcion}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section
        style={{
          background: 'var(--primary, #16a34a)',
          color: 'var(--primary-foreground, #fff)',
          padding: '64px 16px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 700,
              marginBottom: 16,
              lineHeight: 1.3,
            }}
          >
            ¿Quieres ser parte de esta misión?
          </h2>
          <p
            style={{
              opacity: 0.9,
              lineHeight: 1.7,
              marginBottom: 32,
              fontSize: 15,
            }}
          >
            Puedes apoyar nuestro trabajo donando, siendo voluntario o
            simplemente reportando aves que necesiten ayuda.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              justifyContent: 'center',
            }}
          >
            <a
              href="/donar"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 6,
                background: 'var(--secondary, #f3f4f6)',
                color: 'var(--secondary-foreground, #111)',
                fontWeight: 500,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              <Heart size={16} />
              Donar
            </a>
            <a
              href="/contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 6,
                border: '1px solid #fff',
                background: 'transparent',
                color: '#fff',
                fontWeight: 500,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              Contactar
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
