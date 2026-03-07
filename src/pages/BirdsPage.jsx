import { AlertTriangle } from 'lucide-react';

const avesCotidianas = [
  {
    nombre: 'Paloma doméstica',
    nombreCientifico: 'Columba livia',
    descripcion:
      'La paloma más común de Bogotá. Introducida en Colombia hace siglos, hoy vive en toda la ciudad. Somos pioneros en Colombia en su manejo humanitario.',
    estado: 'Abundante',
  },
  {
    nombre: 'Copetón / Gorrión andino',
    nombreCientifico: 'Zonotrichia capensis',
    descripcion:
      'El ave más emblemática de Bogotá. Reconocible por su cresta pequeña y canto melodioso al amanecer. Habita en parques, jardines y zonas verdes.',
    estado: 'Común',
  },
  {
    nombre: 'Colibrí chillón',
    nombreCientifico: 'Colibri coruscans',
    descripcion:
      'Uno de los colibríes más grandes de Bogotá, con destellos violeta y verde intenso. Frecuente en jardines con flores y zonas verdes urbanas.',
    estado: 'Común',
  },
  {
    nombre: 'Bichofué gritón',
    nombreCientifico: 'Pitangus sulphuratus',
    descripcion:
      "Con su llamativo plumaje amarillo y café y su voz característica 'bich-o-fué', es uno de los tiranos más reconocibles de la ciudad.",
    estado: 'Común',
  },
  {
    nombre: 'Mirla común',
    nombreCientifico: 'Turdus fuscater',
    descripcion:
      'El zorzal de montaña más grande de Bogotá. Canta con melodías complejas especialmente al amanecer. Habitual en parques y zonas arborizadas.',
    estado: 'Muy común',
  },
  {
    nombre: 'Cotorra andina',
    nombreCientifico: 'Bolborhynchus lineola',
    descripcion:
      'Pequeño loro de los Andes bogotanos, con plumaje verde rayado. Forma bandadas ruidosas que sobrevuelan zonas arborizadas de la ciudad.',
    estado: 'Poco común',
  },
  {
    nombre: 'Gallinazo de cabeza roja',
    nombreCientifico: 'Cathartes aura',
    descripcion:
      'Buitre de gran envergadura, fundamental para el ecosistema como limpiador natural. Frecuente sobrevolando toda la ciudad.',
    estado: 'Común',
  },
  {
    nombre: 'Torcaza naguiblanca',
    nombreCientifico: 'Patagioenas fasciata',
    descripcion:
      'Paloma silvestre nativa andina, considerablemente más grande que la paloma doméstica. Se encuentra en zonas arborizadas de la ciudad.',
    estado: 'Poco común',
  },
];

const avesHumedales = [
  {
    nombre: 'Garza del ganado',
    nombreCientifico: 'Bubulcus ibis',
    descripcion:
      'Garza blanca pequeña, frecuente en los humedales y zonas verdes de Bogotá. Forma colonias de anidación y se alimenta de insectos y pequeños vertebrados.',
    estado: 'Abundante',
    humedal: 'Todos los humedales',
  },
  {
    nombre: 'Pato canadiense',
    nombreCientifico: 'Anas discors',
    descripcion:
      'Pato migratorio proveniente de Norteamérica, visitante invernal de los humedales bogotanos. Reconocible por su pico azul-grisáceo.',
    estado: 'Migratorio',
    humedal: 'Jaboque, La Florida',
  },
  {
    nombre: 'Tingua de pico rojo',
    nombreCientifico: 'Gallinula galeata',
    descripcion:
      'Gallineta acuática con característico escudo frontal rojo. Habitual en los humedales bogotanos, donde se desplaza entre la vegetación acuática.',
    estado: 'Residente',
    humedal: 'La Conejera, Jaboque',
  },
  {
    nombre: 'Polla de agua',
    nombreCientifico: 'Fulica americana',
    descripcion:
      'Especie muy visible en los humedales urbanos de Bogotá. Sus patas lobuladas y su coloración negra la hacen inconfundible entre las plantas acuáticas.',
    estado: 'Residente',
    humedal: 'Todos los humedales',
  },
  {
    nombre: 'Garza tricolor',
    nombreCientifico: 'Egretta tricolor',
    descripcion:
      'Garza de tamaño mediano con plumaje tricolor (azul, blanco y castaño). Visitante poco frecuente en los humedales bogotanos durante la temporada de lluvias.',
    estado: 'Visitante',
    humedal: 'Jaboque, Tibabuyes',
  },
  {
    nombre: 'Monjita careta',
    nombreCientifico: 'Chrysomus icterocephalus',
    descripcion:
      'Pequeño icterido de cabeza amarilla brillante. Habita en los espartillales y juncos de los humedales bogotanos y emite un canto metálico característico.',
    estado: 'Residente',
    humedal: 'La Conejera, El Burro',
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
        letterSpacing: '0.04em',
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

function AveCard({ ave, showHumedal = false }) {
  return (
    <div
      style={{
        background: 'var(--card, #fff)',
        border: '1px solid var(--border, #e5e7eb)',
        borderRadius: 12,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        height: '100%',
        transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)')
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        <h3
          style={{
            fontWeight: 600,
            fontSize: 14,
            color: 'var(--foreground, #111)',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {ave.nombre}
        </h3>
        <Badge variant="secondary">{ave.estado}</Badge>
      </div>
      <p
        style={{
          fontSize: 12,
          color: 'var(--muted-foreground, #6b7280)',
          fontStyle: 'italic',
          fontFamily: 'Georgia, serif',
          margin: 0,
        }}
      >
        {ave.nombreCientifico}
      </p>
      <p
        style={{
          fontSize: 13,
          color: 'var(--muted-foreground, #6b7280)',
          lineHeight: 1.6,
          margin: 0,
          flex: 1,
        }}
      >
        {ave.descripcion}
      </p>
      {showHumedal && (
        <p
          style={{
            fontSize: 12,
            color: 'var(--primary, #16a34a)',
            fontWeight: 500,
            margin: 0,
          }}
        >
          Humedal: {ave.humedal}
        </p>
      )}
    </div>
  );
}

export default function BirdsPage() {
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
            src="/images/aves-cotidianas.jpg"
            alt="Aves de Bogotá"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.65)',
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
          <div style={{ marginBottom: 16 }}>
            <Badge variant="secondary">Biodiversidad bogotana</Badge>
          </div>
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
            Aves de Bogotá
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
            Bogotá es hogar de más de 170 especies de aves. Conoce las más
            frecuentes en la ciudad y en sus preciados humedales.
          </p>
        </div>
      </section>

      <section
        id="cotidianas"
        style={{ padding: '80px 0', scrollMarginTop: 80 }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ marginBottom: 16 }}>
              <Badge>Aves urbanas</Badge>
            </div>
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
              Aves cotidianas de Bogotá
            </h2>
            <p
              style={{
                color: 'var(--muted-foreground, #6b7280)',
                maxWidth: 640,
                lineHeight: 1.7,
                fontSize: 15,
                margin: 0,
              }}
            >
              Estas especies conviven a diario con los bogotanos, desde los
              parques del centro hasta los barrios residenciales en los cerros.
              Aprende a reconocerlas y a valorarlas.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 24,
            }}
          >
            {avesCotidianas.map((ave) => (
              <AveCard key={ave.nombre} ave={ave} />
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
        id="humedales"
        style={{
          padding: '80px 0',
          scrollMarginTop: 80,
          background: 'var(--muted, #f9fafb)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 48,
              alignItems: 'start',
            }}
          >
            <div style={{ position: 'sticky', top: 96 }}>
              <div style={{ marginBottom: 16 }}>
                <Badge>Ecosistemas acuáticos</Badge>
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.875rem',
                  fontWeight: 700,
                  color: 'var(--foreground, #111)',
                  marginBottom: 16,
                  lineHeight: 1.3,
                }}
              >
                Aves de los humedales bogotanos
              </h2>
              <p
                style={{
                  color: 'var(--muted-foreground, #6b7280)',
                  lineHeight: 1.7,
                  marginBottom: 24,
                  fontSize: 15,
                }}
              >
                Los 15 humedales de Bogotá son refugios únicos para decenas de
                especies de aves residentes y migratorias. Son ecosistemas
                prioritarios de conservación en la sabana bogotana.
              </p>
              <div
                style={{
                  aspectRatio: '4/3',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  marginBottom: 24,
                }}
              >
                <img
                  src="/images/humedal-bird.jpg"
                  alt="Ave en humedal de Bogotá"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: 'var(--muted-foreground, #6b7280)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Principales humedales: La Conejera, Jaboque, Tibabuyes, La
                Florida, El Burro, Torca-Guaymaral.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: 24,
              }}
            >
              {avesHumedales.map((ave) => (
                <AveCard key={ave.nombre} ave={ave} showHumedal />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
              fontWeight: 700,
              color: 'var(--foreground, #111)',
              marginBottom: 16,
              lineHeight: 1.3,
            }}
          >
            ¿Encontraste un ave que necesita ayuda?
          </h2>
          <p
            style={{
              color: 'var(--muted-foreground, #6b7280)',
              lineHeight: 1.7,
              marginBottom: 32,
              fontSize: 15,
            }}
          >
            Si encuentras un ave herida, huérfana o en peligro, no la manipules.
            Repórtanos el caso y nuestro equipo te guiará.
          </p>
          <a
            href="/emergencia"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              borderRadius: 6,
              background: 'var(--destructive, #dc2626)',
              color: '#fff',
              fontWeight: 500,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <AlertTriangle size={18} />
            Reportar un ave
          </a>
        </div>
      </section>
    </div>
  );
}
