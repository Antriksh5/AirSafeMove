import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />

      {/* Footer */}
      <footer style={{
        background: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        color: 'white',
        padding: '40px 16px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 16
          }}>
            <div style={{
              width: 32,
              height: 32,
              background: '#7c3aed',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              flexShrink: 0
            }}>
              🌬️
            </div>
            <span style={{ fontWeight: 600, fontSize: 18 }}>AirSafe Move</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 8, padding: '0 16px' }}>
            AI-powered migration advisory for healthier living
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
            © AirSafe Move.
          </p>
        </div>
      </footer>
    </main>
  );
}
