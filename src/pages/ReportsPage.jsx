import { ExternalLink, FileText, BarChart3, Shield } from 'lucide-react';

const informesVeeduria = [
  {
    titulo: 'Informe de Veeduría 2024',
    descripcion:
      'Seguimiento a políticas de bienestar animal y fauna silvestre en Bogotá D.C. durante 2024.',
    fecha: 'Diciembre 2024',
    href: 'https://drive.google.com',
  },
  {
    titulo: 'Informe de Veeduría 2023',
    descripcion:
      'Veeduría ciudadana sobre el manejo de fauna silvestre y palomas urbanas en Bogotá.',
    fecha: 'Diciembre 2023',
    href: 'https://drive.google.com',
  },
  {
    titulo: 'Informe de Veeduría 2022',
    descripcion:
      'Análisis y seguimiento a las políticas municipales de fauna silvestre. Primer informe anual de veeduría.',
    fecha: 'Diciembre 2022',
    href: 'https://drive.google.com',
  },
];

const informesGestion = [
  {
    titulo: 'Informe de Gestión 2024',
    descripcion:
      'Resumen de actividades, aves atendidas, liberaciones, programas de educación y ejecución presupuestal del año 2024.',
    fecha: 'Enero 2025',
    href: 'https://drive.google.com',
  },
  {
    titulo: 'Informe de Gestión 2023',
    descripcion:
      'Resultados de la fundación durante 2023: 180 aves rehabilitadas, 12 campañas educativas y 3 nuevas alianzas institucionales.',
    fecha: 'Enero 2024',
    href: 'https://drive.google.com',
  },
  {
    titulo: 'Informe de Gestión 2022',
    descripcion:
      'Primer informe anual de gestión completo. 90 aves atendidas, lanzamiento del programa de palomas urbanas y formación de red de voluntarios.',
    fecha: 'Enero 2023',
    href: 'https://drive.google.com',
  },
  {
    titulo: 'Informe de Gestión 2021',
    descripcion:
      'Balance del segundo año de operación. Consolidación del equipo fundador y primeras alianzas con clínicas veterinarias.',
    fecha: 'Enero 2022',
    href: 'https://drive.google.com',
  },
  {
    titulo: 'Informe de Gestión 2020',
    descripcion:
      'Primer año completo de operaciones. Rescate de 35 aves y lanzamiento de los primeros programas comunitarios.',
    fecha: 'Enero 2021',
    href: 'https://drive.google.com',
  },
];

function Badge({ children, variant = 'outline' }) {
  const isSecondary = variant === 'secondary';
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        borderRadius: 9999,
        border: isSecondary ? 'none' : '1px solid var(--border, #e5e7eb)',
        background: isSecondary ? 'var(--secondary, #f3f4f6)' : 'transparent',
        fontSize: 11,
        fontWeight: 600,
        color: isSecondary
          ? 'var(--secondary-foreground, #111)'
          : 'var(--foreground, #111)',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
}

function InformeCard({ informe, icon: Icon }) {
  return (
    <div
      style={{
        background: 'var(--card, #fff)',
        border: '1px solid var(--border, #e5e7eb)',
        borderRadius: 12,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)')
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      <div style={{ padding: '20px 20px 12px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 8,
            marginBottom: 10,
          }}
        >
          <Icon
            size={18}
            style={{
              color: 'var(--primary, #16a34a)',
              marginTop: 2,
              flexShrink: 0,
            }}
          />
          <Badge variant="secondary">{informe.fecha}</Badge>
        </div>
        <h3
          style={{
            fontWeight: 600,
            fontSize: 15,
            color: 'var(--foreground, #111)',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {informe.titulo}
        </h3>
      </div>

      <div
        style={{
          padding: '0 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          flex: 1,
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: 'var(--muted-foreground, #6b7280)',
            lineHeight: 1.6,
            margin: 0,
            flex: 1,
          }}
        >
          {informe.descripcion}
        </p>
        <a
          href={informe.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '7px 14px',
            borderRadius: 6,
            border: '1px solid var(--border, #e5e7eb)',
            background: 'transparent',
            color: 'var(--foreground, #111)',
            fontSize: 13,
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'background 0.15s',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'var(--accent, #f3f4f6)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'transparent')
          }
        >
          <ExternalLink size={14} />
          Descargar en Drive
        </a>
      </div>
    </div>
  );
}

// ─── Componente principal ────────────────────────────────────────────────────

export default function ReportsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          background: 'var(--secondary, #f3f4f6)',
          padding: '96px 16px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 896, margin: '0 auto' }}>
          <div style={{ marginBottom: 16 }}>
            <Badge>Transparencia</Badge>
          </div>
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
            Informes de gestión y veeduría
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
            La transparencia es un pilar de nuestra organización. Compartimos
            públicamente nuestros informes de gestión y las veedurías ciudadanas
            que realizamos.
          </p>
        </div>
      </section>

      <div
        style={{
          background: 'var(--accent, #f3f4f6)',
          color: 'var(--accent-foreground, #111)',
          padding: '14px 16px',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 14,
          }}
        >
          <Shield size={18} style={{ flexShrink: 0 }} />
          <p style={{ margin: 0 }}>
            Todos nuestros informes son públicos y se pueden descargar
            gratuitamente en Google Drive. La transparencia es parte de nuestro
            ADN institucional.
          </p>
        </div>
      </div>

      <section id="veeduria" style={{ padding: '80px 0', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: 'var(--primary, #16a34a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Shield size={18} style={{ color: '#fff' }} />
            </div>
            <div>
              <div style={{ marginBottom: 4 }}>
                <Badge>Veeduría ciudadana</Badge>
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--foreground, #111)',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Informes de Veeduría
              </h2>
            </div>
          </div>
          <p
            style={{
              color: 'var(--muted-foreground, #6b7280)',
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 640,
              fontSize: 15,
            }}
          >
            Como organización de la sociedad civil, ejercemos veeduría ciudadana
            sobre las políticas públicas de bienestar animal y manejo de fauna
            silvestre en Bogotá. Estos informes documentan nuestros hallazgos y
            recomendaciones.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {informesVeeduria.map((informe) => (
              <InformeCard
                key={informe.titulo}
                informe={informe}
                icon={FileText}
              />
            ))}
          </div>
        </div>
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
        id="gestion"
        style={{
          padding: '80px 0',
          scrollMarginTop: 80,
          background: 'var(--muted, #f9fafb)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: 'var(--primary, #16a34a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <BarChart3 size={18} style={{ color: '#fff' }} />
            </div>
            <div>
              <div style={{ marginBottom: 4 }}>
                <Badge>Gestión anual</Badge>
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--foreground, #111)',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Informes de Gestión
              </h2>
            </div>
          </div>
          <p
            style={{
              color: 'var(--muted-foreground, #6b7280)',
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 640,
              fontSize: 15,
            }}
          >
            Cada año publicamos un informe detallado sobre nuestras actividades,
            aves atendidas, programas ejecutados y situación financiera. Desde
            2020, sin excepción.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {informesGestion.map((informe) => (
              <InformeCard
                key={informe.titulo}
                informe={informe}
                icon={BarChart3}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
