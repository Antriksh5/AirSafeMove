import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
  return (
    <main style={{ background: '#F5EFE0' }}>
      <Navbar />
      <Hero />
      <HowItWorks />

      {/* Footer */}
      <footer style={{
        background: '#2D2010',
        color: 'rgba(245,239,224,0.6)',
        padding: '32px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, background: '#5C4A2A', borderRadius: 7,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
          }}>
            🌬️
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#F5EFE0' }}>AirSafe Move</span>
        </div>
        <p style={{ fontSize: 13, margin: 0 }}>
          AI-powered migration advisory for healthier living
        </p>
        <p style={{ fontSize: 12, margin: 0 }}>© {new Date().getFullYear()} AirSafe Move</p>
      </footer>
    </main>
  );
}
