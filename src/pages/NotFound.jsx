import { Bird, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 16px',
      }}
    >
      <div style={{ maxWidth: 512, width: '100%', textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: 'var(--muted, #f3f4f6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Bird
              size={48}
              style={{ color: 'var(--muted-foreground, #6b7280)' }}
            />
          </div>
        </div>

        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '4.5rem',
            fontWeight: 700,
            color: 'var(--primary, #16a34a)',
            margin: '0 0 16px',
            lineHeight: 1,
          }}
        >
          404
        </p>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
            fontWeight: 700,
            color: 'var(--foreground, #111)',
            marginBottom: 16,
            lineHeight: 1.3,
          }}
        >
          Parece que este ave voló lejos
        </h1>

        <p
          style={{
            color: 'var(--muted-foreground, #6b7280)',
            lineHeight: 1.7,
            marginBottom: 40,
            fontSize: 15,
          }}
        >
          La página que buscas no existe o fue movida. No te preocupes, tenemos
          muchas otras páginas donde encontrar lo que necesitas.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
          }}
        >
          <a
            href="/"
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
            <Home size={16} />
            Ir al inicio
          </a>
          <a
            href="/emergencia"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 20px',
              borderRadius: 6,
              background: 'transparent',
              color: 'var(--foreground, #111)',
              border: '1px solid var(--border, #e5e7eb)',
              fontWeight: 500,
              fontSize: 14,
              textDecoration: 'none',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Reportar un ave
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
