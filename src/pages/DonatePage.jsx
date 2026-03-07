import {
  Heart,
  Banknote,
  QrCode,
  Share2,
  Bird,
  Stethoscope,
  Leaf,
  Users,
} from 'lucide-react';

const donacionImpacto = [
  {
    monto: '$20.000',
    descripcion: 'Cubre la alimentación de un polluelo por una semana.',
    icon: Bird,
  },
  {
    monto: '$50.000',
    descripcion: 'Financia una consulta veterinaria de urgencia.',
    icon: Stethoscope,
  },
  {
    monto: '$100.000',
    descripcion: 'Paga los medicamentos para la recuperación de un ave.',
    icon: Leaf,
  },
  {
    monto: '$300.000',
    descripcion: 'Cubre los gastos de rehabilitación completa y liberación.',
    icon: Users,
  },
];

const formasDonacion = [
  {
    titulo: 'Transferencia bancaria',
    descripcion: 'Realiza una transferencia directa a nuestra cuenta.',
    detalles: [
      'Banco: Bancolombia',
      'Tipo: Ahorros',
      'No. cuenta: 123-456789-01',
      'NIT: 901.234.567-8',
      'Nombre: Fundación Aves S.O.S Bogotá',
    ],
    icon: Banknote,
  },
  {
    titulo: 'PSE / Nequi / Daviplata',
    descripcion: 'Dona fácil y rápido desde tu celular o banca en línea.',
    detalles: [
      'Nequi: 300 123 4567',
      'Daviplata: 300 123 4567',
      'Escríbenos para PSE: info@avesSOS.org',
    ],
    icon: QrCode,
  },
  {
    titulo: 'Dona en especie',
    descripcion: 'También aceptamos donaciones de insumos y alimentos.',
    detalles: [
      'Alimentos para aves (semillas, frutas)',
      'Materiales veterinarios',
      'Jaulas y transportadoras',
      'Equipos de bienestar animal',
    ],
    icon: Heart,
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
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.04em',
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

export default function DonatePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          position: 'relative',
          padding: '96px 16px',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/images/donar.jpg"
            alt="Ave liberada en naturaleza"
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
            maxWidth: 896,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <Badge variant="secondary">Apoya nuestra misión</Badge>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Tu donación salva vidas
          </h1>
          <p
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.7,
              maxWidth: 640,
              margin: '0 auto',
            }}
          >
            Cada peso que donamos a la Fundación Aves S.O.S se convierte
            directamente en atención veterinaria, alimento y cuidado para las
            aves de Bogotá.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <Badge>¿Qué logra tu donación?</Badge>
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
              Cada peso cuenta
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
              Queremos que sepas exactamente qué hace tu dinero. Aquí te
              mostramos el impacto real de diferentes montos de donación.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 24,
              marginBottom: 48,
            }}
          >
            {donacionImpacto.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.monto}
                  style={{
                    background: 'var(--card, #fff)',
                    border: '1px solid var(--border, #e5e7eb)',
                    borderRadius: 12,
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 16,
                    textAlign: 'center',
                    transition: 'box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      '0 4px 16px rgba(0,0,0,0.08)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = 'none')
                  }
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'var(--primary, #16a34a)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={22} style={{ color: '#fff' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--primary, #16a34a)',
                    }}
                  >
                    {item.monto}
                  </span>
                  <p
                    style={{
                      fontSize: 13,
                      color: 'var(--muted-foreground, #6b7280)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.descripcion}
                  </p>
                </div>
              );
            })}
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
        style={{ padding: '80px 0', background: 'var(--muted, #f9fafb)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <Badge>Métodos de pago</Badge>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                fontWeight: 700,
                color: 'var(--foreground, #111)',
                lineHeight: 1.3,
              }}
            >
              ¿Cómo donar?
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 32,
            }}
          >
            {formasDonacion.map((forma) => {
              const Icon = forma.icon;
              return (
                <div
                  key={forma.titulo}
                  style={{
                    background: 'var(--card, #fff)',
                    border: '1px solid var(--border, #e5e7eb)',
                    borderRadius: 12,
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ padding: '24px 24px 16px' }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                        background: 'var(--accent, #f3f4f6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 12,
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
                        fontSize: 17,
                        color: 'var(--foreground, #111)',
                        margin: '0 0 6px',
                      }}
                    >
                      {forma.titulo}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: 'var(--muted-foreground, #6b7280)',
                        margin: 0,
                      }}
                    >
                      {forma.descripcion}
                    </p>
                  </div>
                  <div style={{ padding: '0 24px 24px' }}>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                      }}
                    >
                      {forma.detalles.map((detalle) => (
                        <li
                          key={detalle}
                          style={{
                            fontSize: 13,
                            color: 'var(--foreground, #111)',
                          }}
                        >
                          {detalle}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: 768, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              background: 'var(--card, #fff)',
              border: '1px solid var(--border, #e5e7eb)',
              borderRadius: 16,
              padding: 48,
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            }}
          >
            <Share2
              size={30}
              style={{ color: 'var(--primary, #16a34a)', marginBottom: 16 }}
            />
            <h3
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--foreground, #111)',
                marginBottom: 12,
                marginTop: 0,
              }}
            >
              ¿Necesitas comprobante de donación?
            </h3>
            <p
              style={{
                color: 'var(--muted-foreground, #6b7280)',
                lineHeight: 1.7,
                marginBottom: 24,
                fontSize: 15,
              }}
            >
              Una vez realizada tu donación, envíanos el comprobante a{' '}
              <a
                href="mailto:donaciones@avesSOS.org"
                style={{
                  color: 'var(--primary, #16a34a)',
                  textDecoration: 'none',
                }}
              >
                donaciones@avesSOS.org
              </a>{' '}
              con tu nombre y datos de contacto. Te enviaremos el certificado de
              donación en máximo 3 días hábiles.
            </p>
            <a
              href="mailto:donaciones@avesSOS.org"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 6,
                background: 'var(--primary, #16a34a)',
                color: '#fff',
                fontWeight: 500,
                fontSize: 14,
                textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <Heart size={15} />
              Enviar comprobante
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--primary, #16a34a)',
          color: '#fff',
          padding: '64px 16px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Heart size={30} style={{ opacity: 0.8, marginBottom: 16 }} />
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 700,
              marginBottom: 16,
              lineHeight: 1.3,
            }}
          >
            ¡Gracias por querer ayudar!
          </h2>
          <p style={{ opacity: 0.9, lineHeight: 1.7, margin: 0, fontSize: 15 }}>
            Cada donación, por pequeña que sea, se traduce en una oportunidad de
            vida para las aves de Bogotá. En nombre de cada ave que rescatamos y
            liberamos, ¡gracias!
          </p>
        </div>
      </section>
    </div>
  );
}
