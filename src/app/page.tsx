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
        background: '#1E293B',
        color: 'white',
        padding: '40px 32px',
        textAlign: 'center'
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
              background: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16
            }}>
              🌬️
            </div>
            <span style={{ fontWeight: 600, fontSize: 18 }}>AirSafe Move</span>
          </div>
          <p style={{ color: '#94A3B8', fontSize: 14, marginBottom: 8 }}>
            AI-powered migration advisory for healthier living
          </p>
          <p style={{ color: '#64748B', fontSize: 12 }}>
            © 2026 AirSafe Move. Built with ML & ❤️ for cleaner air.
          </p>
        </div>
      </footer>
    </main>
  );
}
