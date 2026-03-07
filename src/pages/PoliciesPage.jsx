const secciones = [
  {
    titulo: '1. Responsable del tratamiento',
    contenido: null,
    infoBox: [
      { label: 'Razón social', value: 'Fundación Aves S.O.S Bogotá' },
      { label: 'NIT', value: '901.234.567-8' },
      { label: 'Domicilio', value: 'Bogotá D.C., Colombia' },
      {
        label: 'Correo',
        value: 'datos@avesSOS.org',
        href: 'mailto:datos@avesSOS.org',
      },
      { label: 'Teléfono', value: '+57 300 123 4567' },
    ],
  },
  {
    titulo: '2. Finalidades del tratamiento',
    intro:
      'La Fundación Aves S.O.S Bogotá recopila y trata datos personales para las siguientes finalidades:',
    lista: [
      'Atender reportes de emergencia de aves en situación vulnerable.',
      'Gestionar solicitudes de contacto, voluntariado y alianzas institucionales.',
      'Procesar y certificar donaciones.',
      'Enviar comunicaciones informativas sobre la actividad de la fundación (previa autorización).',
      'Cumplir obligaciones legales y contables.',
      'Mejorar los servicios ofrecidos a través del sitio web.',
    ],
  },
  {
    titulo: '3. Datos recopilados',
    contenido:
      'Según el formulario utilizado, podemos recopilar: nombre completo, número de teléfono, correo electrónico, dirección o ubicación (para reportes de emergencia), y el contenido del mensaje o descripción del caso reportado. No recopilamos datos sensibles (salud, biometría, filiación política o religiosa) salvo requerimiento legal.',
  },
  {
    titulo: '4. Derechos del titular',
    intro:
      'De conformidad con la Ley 1581 de 2012, los titulares de datos personales tienen los siguientes derechos:',
    lista: [
      'Conocer, actualizar y rectificar sus datos personales.',
      'Solicitar prueba de la autorización otorgada.',
      'Ser informado sobre el uso que se da a sus datos.',
      'Revocar la autorización y/o solicitar la supresión de sus datos.',
      'Acceder gratuitamente a sus datos personales.',
      'Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).',
    ],
    footer: (
      <p
        style={{
          color: 'var(--muted-foreground, #6b7280)',
          lineHeight: 1.7,
          marginTop: 16,
          fontSize: 14,
        }}
      >
        Para ejercer estos derechos, escríbenos a{' '}
        <a
          href="mailto:datos@avesSOS.org"
          style={{ color: 'var(--primary, #16a34a)', textDecoration: 'none' }}
        >
          datos@avesSOS.org
        </a>
        . Responderemos en un plazo máximo de 15 días hábiles.
      </p>
    ),
  },
  {
    titulo: '5. Transferencia y transmisión de datos',
    contenido:
      'La Fundación Aves S.O.S Bogotá no vende, alquila ni comparte datos personales con terceros con fines comerciales. Los datos podrán ser transmitidos únicamente a aliados institucionales directamente involucrados en la atención de un caso de emergencia animal, o cuando sea requerido por autoridades competentes.',
  },
  {
    titulo: '6. Seguridad de la información',
    contenido:
      'Implementamos medidas técnicas y organizativas para proteger los datos personales contra acceso no autorizado, pérdida, alteración o divulgación. Sin embargo, ningún sistema de transmisión de datos por internet es 100% seguro.',
  },
  {
    titulo: '7. Uso de cookies',
    contenido:
      'Este sitio web puede utilizar cookies de analítica anónimas para comprender el comportamiento general de los visitantes y mejorar la experiencia de uso. No utilizamos cookies de rastreo publicitario ni compartimos información de analítica con terceros con fines comerciales.',
  },
  {
    titulo: '8. Vigencia de la política',
    contenido:
      'Esta política es efectiva a partir del 1 de enero de 2025. La Fundación se reserva el derecho de actualizarla en cualquier momento. Los cambios se publicarán en esta página con su respectiva fecha de actualización.',
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

export default function PoliciesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Hero */}
      <section
        style={{
          background: 'var(--secondary, #f3f4f6)',
          padding: '80px 16px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 896, margin: '0 auto' }}>
          <Badge>Legal</Badge>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              color: 'var(--secondary-foreground, #111)',
              marginBottom: 16,
              lineHeight: 1.3,
            }}
          >
            Política de Tratamiento de Datos Personales
          </h1>
          <p
            style={{
              color: 'var(--muted-foreground, #6b7280)',
              lineHeight: 1.7,
              margin: '0 0 8px',
            }}
          >
            Conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 (Colombia)
          </p>
          <p
            style={{
              fontSize: 12,
              color: 'var(--muted-foreground, #6b7280)',
              margin: 0,
            }}
          >
            Última actualización: enero de 2026
          </p>
        </div>
      </section>

      <article style={{ padding: '64px 16px' }}>
        <div
          style={{
            maxWidth: 768,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}
        >
          {secciones.map((sec, i) => (
            <div key={sec.titulo}>
              <section>
                <h2
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--foreground, #111)',
                    marginBottom: 16,
                    marginTop: 0,
                  }}
                >
                  {sec.titulo}
                </h2>

                {sec.infoBox && (
                  <div
                    style={{
                      background: 'var(--muted, #f9fafb)',
                      borderRadius: 8,
                      padding: 20,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                      fontSize: 14,
                      color: 'var(--muted-foreground, #6b7280)',
                    }}
                  >
                    {sec.infoBox.map((row) => (
                      <p key={row.label} style={{ margin: 0 }}>
                        <strong style={{ color: 'var(--foreground, #111)' }}>
                          {row.label}:
                        </strong>{' '}
                        {row.href ? (
                          <a
                            href={row.href}
                            style={{
                              color: 'var(--primary, #16a34a)',
                              textDecoration: 'none',
                            }}
                          >
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )}
                      </p>
                    ))}
                  </div>
                )}

                {sec.intro && (
                  <p
                    style={{
                      color: 'var(--muted-foreground, #6b7280)',
                      lineHeight: 1.7,
                      marginBottom: 12,
                      fontSize: 15,
                    }}
                  >
                    {sec.intro}
                  </p>
                )}
                {sec.lista && (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                    }}
                  >
                    {sec.lista.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 8,
                          fontSize: 14,
                          color: 'var(--muted-foreground, #6b7280)',
                        }}
                      >
                        <span
                          style={{
                            color: 'var(--primary, #16a34a)',
                            marginTop: 2,
                            lineHeight: 1,
                          }}
                        >
                          ·
                        </span>
                        <span style={{ lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {sec.footer}

                {sec.contenido && (
                  <p
                    style={{
                      color: 'var(--muted-foreground, #6b7280)',
                      lineHeight: 1.7,
                      margin: 0,
                      fontSize: 15,
                    }}
                  >
                    {sec.contenido}
                  </p>
                )}
              </section>

              {i < secciones.length - 1 && (
                <hr
                  style={{
                    border: 'none',
                    borderTop: '1px solid var(--border, #e5e7eb)',
                    marginTop: 40,
                    marginBottom: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
