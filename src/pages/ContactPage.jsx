import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const asuntos = [
  'Información general',
  'Voluntariado',
  'Alianzas institucionales',
  'Medios de comunicación',
  'Educación ambiental',
  'Donaciones en especie',
  'Otro',
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: 'info@avesSOS.org',
    href: 'mailto:info@avesSOS.org',
  },
  {
    icon: Phone,
    label: 'Teléfono / WhatsApp',
    value: '+57 300 123 4567',
    href: 'tel:+573001234567',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Bogotá D.C., Colombia',
    href: null,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@avesSosBogota',
    href: 'https://instagram.com',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'Fundación Aves S.O.S Bogotá',
    href: 'https://facebook.com',
  },
];

function validate(values) {
  const errors = {};
  if (!values.nombre || values.nombre.trim().length < 2)
    errors.nombre = 'Ingresa tu nombre';
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Ingresa un correo válido';
  if (!values.asunto) errors.asunto = 'Selecciona un asunto';
  if (!values.mensaje || values.mensaje.trim().length < 10)
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
  return errors;
}

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

function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--foreground, #111)',
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <span style={{ fontSize: 12, color: 'var(--destructive, #dc2626)' }}>
          {error}
        </span>
      )}
    </div>
  );
}

const inputStyle = {
  padding: '9px 12px',
  borderRadius: 6,
  border: '1px solid var(--border, #e5e7eb)',
  fontSize: 14,
  color: 'var(--foreground, #111)',
  background: 'var(--background, #fff)',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.15s',
};

export default function ContactPage() {
  const [values, setValues] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // Limpiar error del campo al escribir
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    console.log('[Contacto] form submitted:', values);
    // Redirigir — en React puro sin router usa window.location
    window.location.href = '/gracias?tipo=contacto';
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          background: 'var(--secondary, #f3f4f6)',
          padding: '80px 16px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 896, margin: '0 auto' }}>
          <Badge>Contáctanos</Badge>
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
            Hablemos
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
            ¿Tienes una pregunta, quieres ser voluntario o proponer una alianza?
            Escríbenos. Respondemos todos los mensajes.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 48,
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--foreground, #111)',
                  marginBottom: 24,
                  marginTop: 0,
                }}
              >
                Información de contacto
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  marginBottom: 32,
                }}
              >
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          flexShrink: 0,
                          background: 'var(--accent, #f3f4f6)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon
                          size={16}
                          style={{ color: 'var(--accent-foreground, #111)' }}
                        />
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: 11,
                            color: 'var(--muted-foreground, #6b7280)',
                            margin: '0 0 2px',
                          }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              item.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            style={{
                              fontSize: 13,
                              fontWeight: 500,
                              color: 'var(--foreground, #111)',
                              textDecoration: 'none',
                              transition: 'color 0.15s',
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color =
                                'var(--primary, #16a34a)')
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color =
                                'var(--foreground, #111)')
                            }
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            style={{
                              fontSize: 13,
                              fontWeight: 500,
                              color: 'var(--foreground, #111)',
                              margin: 0,
                            }}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                style={{
                  background: 'var(--muted, #f9fafb)',
                  border: '1px solid var(--border, #e5e7eb)',
                  borderRadius: 10,
                  padding: 20,
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--foreground, #111)',
                    margin: '0 0 8px',
                  }}
                >
                  Tiempo de respuesta
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--muted-foreground, #6b7280)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Respondemos correos y mensajes en un plazo máximo de 48 horas
                  hábiles. Para emergencias de aves, usa el{' '}
                  <a
                    href="/emergencia"
                    style={{
                      color: 'var(--destructive, #dc2626)',
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                  >
                    formulario de emergencia
                  </a>
                  .
                </p>
              </div>
            </div>

            <div style={{ gridColumn: 'span 2' }}>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--foreground, #111)',
                  marginBottom: 24,
                  marginTop: 0,
                }}
              >
                Envíanos un mensaje
              </h2>
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 16,
                  }}
                >
                  <Field label="Nombre completo *" error={errors.nombre}>
                    <input
                      name="nombre"
                      value={values.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      style={{
                        ...inputStyle,
                        borderColor: errors.nombre
                          ? 'var(--destructive, #dc2626)'
                          : 'var(--border, #e5e7eb)',
                      }}
                    />
                  </Field>
                  <Field label="Correo electrónico *" error={errors.email}>
                    <input
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      style={{
                        ...inputStyle,
                        borderColor: errors.email
                          ? 'var(--destructive, #dc2626)'
                          : 'var(--border, #e5e7eb)',
                      }}
                    />
                  </Field>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 16,
                  }}
                >
                  <Field label="Teléfono" error={errors.telefono}>
                    <input
                      name="telefono"
                      value={values.telefono}
                      onChange={handleChange}
                      placeholder="Opcional"
                      style={inputStyle}
                    />
                  </Field>
                  <Field label="Asunto *" error={errors.asunto}>
                    <select
                      name="asunto"
                      value={values.asunto}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        borderColor: errors.asunto
                          ? 'var(--destructive, #dc2626)'
                          : 'var(--border, #e5e7eb)',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Selecciona un asunto</option>
                      {asuntos.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Mensaje *" error={errors.mensaje}>
                  <textarea
                    name="mensaje"
                    value={values.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    style={{
                      ...inputStyle,
                      resize: 'none',
                      borderColor: errors.mensaje
                        ? 'var(--destructive, #dc2626)'
                        : 'var(--border, #e5e7eb)',
                    }}
                  />
                </Field>

                <div>
                  <button
                    type="submit"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '12px 24px',
                      borderRadius: 6,
                      background: 'var(--primary, #16a34a)',
                      color: '#fff',
                      fontWeight: 500,
                      fontSize: 15,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'opacity 0.15s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = '0.85')
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    <Send size={16} />
                    Enviar mensaje
                  </button>
                </div>

                <p
                  style={{
                    fontSize: 12,
                    color: 'var(--muted-foreground, #6b7280)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Al enviar autorizas el tratamiento de tus datos según nuestra{' '}
                  <a
                    href="/privacidad"
                    style={{
                      color: 'var(--primary, #16a34a)',
                      textDecoration: 'none',
                    }}
                  >
                    política de privacidad
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
