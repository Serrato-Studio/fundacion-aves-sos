import { useState } from 'react';
import { AlertTriangle, MapPin, Phone, Bird, Info, Camera } from 'lucide-react';

const tiposAve = [
  'No sé identificarla',
  'Paloma',
  'Loro / cotorra / guacamaya',
  'Colibríes',
  'Rapaz (búho, halcón, águila)',
  'Garza o ave acuática',
  'Ave pequeña (gorrión, mirla, etc.)',
  'Ave doméstica (gallina, pavo, pato)',
  'Otra',
];

const situaciones = [
  'Herida / fractura',
  'Huérfana / polluelo caído',
  'Aturdida o inconsciente',
  'Atrapada (en red, vidrio, etc.)',
  'Enferma o debilitada',
  'Cautiverio ilegal',
  'Otra situación de riesgo',
];

const pasos = [
  {
    numero: '1',
    titulo: 'No la manipules',
    descripcion:
      'A menos que el ave esté en peligro inmediato (vía, depredador). El estrés del contacto humano puede empeorar su estado.',
    icon: Info,
  },
  {
    numero: '2',
    titulo: 'Documenta la situación',
    descripcion:
      'Toma fotos o video si puedes hacerlo sin acercarte demasiado. Anota la dirección exacta.',
    icon: Camera,
  },
  {
    numero: '3',
    titulo: 'Reporta el caso',
    descripcion:
      'Llena el formulario abajo o llámanos directamente. Nuestro equipo te guiará en los siguientes pasos.',
    icon: Phone,
  },
];

function validate(v) {
  const e = {};
  if (!v.nombre || v.nombre.trim().length < 2)
    e.nombre = 'Ingresa tu nombre completo';
  if (!v.telefono || v.telefono.trim().length < 7)
    e.telefono = 'Ingresa un número de teléfono válido';
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    e.email = 'Ingresa un correo válido';
  if (!v.localidad || v.localidad.trim().length < 2)
    e.localidad = 'Indica la localidad';
  if (!v.direccion || v.direccion.trim().length < 5)
    e.direccion = 'Indica la dirección o punto de referencia';
  if (!v.tipoAve) e.tipoAve = 'Selecciona el tipo de ave';
  if (!v.situacion) e.situacion = 'Selecciona la situación del ave';
  if (!v.descripcion || v.descripcion.trim().length < 10)
    e.descripcion = 'Describe la situación con más detalle';
  return e;
}

function Badge({ children, variant = 'outline' }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: 9999,
        border:
          variant === 'outline'
            ? '1px solid var(--border, #e5e7eb)'
            : '1px solid rgba(255,255,255,0.3)',
        background:
          variant === 'outline' ? 'transparent' : 'rgba(255,255,255,0.15)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.06em',
        color: variant === 'outline' ? 'var(--foreground, #111)' : '#fff',
        marginBottom: 16,
      }}
    >
      {children}
    </span>
  );
}

function SectionCard({ icon: Icon, title, children }) {
  return (
    <div
      style={{
        background: 'var(--card, #fff)',
        border: '1px solid var(--border, #e5e7eb)',
        borderRadius: 12,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <h3
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontWeight: 600,
          fontSize: 15,
          color: 'var(--foreground, #111)',
          margin: 0,
        }}
      >
        <Icon size={16} style={{ color: 'var(--primary, #16a34a)' }} />
        {title}
      </h3>
      {children}
    </div>
  );
}

function Field({ label, description, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
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
      {description && !error && (
        <span
          style={{ fontSize: 12, color: 'var(--muted-foreground, #6b7280)' }}
        >
          {description}
        </span>
      )}
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
};

function StyledInput({
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        ...inputStyle,
        borderColor: error
          ? 'var(--destructive, #dc2626)'
          : 'var(--border, #e5e7eb)',
      }}
    />
  );
}

function StyledSelect({ name, value, onChange, options, placeholder, error }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      style={{
        ...inputStyle,
        borderColor: error
          ? 'var(--destructive, #dc2626)'
          : 'var(--border, #e5e7eb)',
        cursor: 'pointer',
      }}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export default function EmergencyPage() {
  const [values, setValues] = useState({
    nombre: '',
    telefono: '',
    email: '',
    localidad: '',
    direccion: '',
    tipoAve: '',
    situacion: '',
    descripcion: '',
    foto: '',
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    console.log('[Emergencia] submitted:', values);
    window.location.href = '/gracias?tipo=emergencia';
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          background: 'var(--destructive, #dc2626)',
          color: '#fff',
          padding: '64px 16px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 896, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AlertTriangle size={26} />
            </div>
          </div>
          <Badge variant="emergency">Emergencia · Ayuda inmediata</Badge>
          <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Reportar un ave en situación vulnerable
          </h1>
          <p
            style={{
              fontSize: 18,
              opacity: 0.9,
              lineHeight: 1.7,
              maxWidth: 640,
              margin: '0 auto 16px',
            }}
          >
            ¿Encontraste un ave herida, caída o en peligro? Reporta el caso
            aquí. Nuestro equipo revisará tu reporte y te contactará lo antes
            posible.
          </p>
          <p style={{ fontSize: 14, opacity: 0.75, margin: 0 }}>
            También puedes llamarnos directamente al{' '}
            <a
              href="tel:+573001234567"
              style={{ color: '#fff', fontWeight: 600 }}
            >
              +57 300 123 4567
            </a>
          </p>
        </div>
      </section>

      <section
        style={{ padding: '48px 16px', background: 'var(--muted, #f9fafb)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--foreground, #111)',
              textAlign: 'center',
              marginBottom: 32,
              marginTop: 0,
            }}
          >
            Antes de reportar: ¿qué hacer?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 24,
            }}
          >
            {pasos.map((paso) => (
              <div
                key={paso.numero}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: 'var(--primary, #16a34a)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  {paso.numero}
                </div>
                <div>
                  <h3
                    style={{
                      fontWeight: 600,
                      fontSize: 15,
                      color: 'var(--foreground, #111)',
                      margin: '0 0 4px',
                    }}
                  >
                    {paso.titulo}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: 'var(--muted-foreground, #6b7280)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: 672, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ marginBottom: 16 }}>
              <Badge>Formulario de reporte</Badge>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
                fontWeight: 700,
                color: 'var(--foreground, #111)',
                marginBottom: 8,
                lineHeight: 1.3,
              }}
            >
              Datos del reporte
            </h2>
            <p
              style={{
                fontSize: 13,
                color: 'var(--muted-foreground, #6b7280)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Completa la información lo mejor que puedas. Los campos con * son
              obligatorios.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <SectionCard icon={Phone} title="Tu información de contacto">
              <Field label="Nombre completo *" error={errors.nombre}>
                <StyledInput
                  name="nombre"
                  value={values.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  error={errors.nombre}
                />
              </Field>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: 16,
                }}
              >
                <Field label="Teléfono / WhatsApp *" error={errors.telefono}>
                  <StyledInput
                    name="telefono"
                    value={values.telefono}
                    onChange={handleChange}
                    placeholder="300 000 0000"
                    error={errors.telefono}
                  />
                </Field>
                <Field label="Correo electrónico" error={errors.email}>
                  <StyledInput
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    error={errors.email}
                  />
                </Field>
              </div>
            </SectionCard>

            <SectionCard icon={MapPin} title="Ubicación del ave">
              <Field label="Localidad *" error={errors.localidad}>
                <StyledInput
                  name="localidad"
                  value={values.localidad}
                  onChange={handleChange}
                  placeholder="Ej: Usaquén, Chapinero, Suba..."
                  error={errors.localidad}
                />
              </Field>
              <Field
                label="Dirección o punto de referencia *"
                description="Entre más preciso mejor. Incluye referencias si no tienes la dirección exacta."
                error={errors.direccion}
              >
                <StyledInput
                  name="direccion"
                  value={values.direccion}
                  onChange={handleChange}
                  placeholder="Ej: Calle 100 con Carrera 15, frente al parque..."
                  error={errors.direccion}
                />
              </Field>
            </SectionCard>

            <SectionCard icon={Bird} title="Información del ave">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: 16,
                }}
              >
                <Field label="Tipo de ave *" error={errors.tipoAve}>
                  <StyledSelect
                    name="tipoAve"
                    value={values.tipoAve}
                    onChange={handleChange}
                    options={tiposAve}
                    placeholder="Selecciona el tipo"
                    error={errors.tipoAve}
                  />
                </Field>
                <Field label="Situación del ave *" error={errors.situacion}>
                  <StyledSelect
                    name="situacion"
                    value={values.situacion}
                    onChange={handleChange}
                    options={situaciones}
                    placeholder="¿Qué le pasa?"
                    error={errors.situacion}
                  />
                </Field>
              </div>
              <Field label="Descripción del caso *" error={errors.descripcion}>
                <textarea
                  name="descripcion"
                  value={values.descripcion}
                  onChange={handleChange}
                  placeholder="Describe lo que observas: cómo está el ave, si puede volar, si hay peligros cercanos, desde cuándo está ahí..."
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: 'none',
                    borderColor: errors.descripcion
                      ? 'var(--destructive, #dc2626)'
                      : 'var(--border, #e5e7eb)',
                  }}
                />
                {errors.descripcion && (
                  <span
                    style={{
                      fontSize: 12,
                      color: 'var(--destructive, #dc2626)',
                    }}
                  >
                    {errors.descripcion}
                  </span>
                )}
              </Field>
              <Field
                label="Enlace a foto o video"
                description="Opcional pero muy útil. Comparte un enlace a Google Drive, Google Photos o similar."
                error={errors.foto}
              >
                <StyledInput
                  name="foto"
                  value={values.foto}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/..."
                />
              </Field>
            </SectionCard>

            <button
              type="submit"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '14px 24px',
                borderRadius: 6,
                border: 'none',
                background: 'var(--destructive, #dc2626)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
                transition: 'opacity 0.15s',
                width: '100%',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.87')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <AlertTriangle size={18} />
              Enviar reporte de emergencia
            </button>

            <p
              style={{
                fontSize: 12,
                color: 'var(--muted-foreground, #6b7280)',
                textAlign: 'center',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Al enviar este formulario autorizas el tratamiento de tus datos
              según nuestra{' '}
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
      </section>
    </div>
  );
}
