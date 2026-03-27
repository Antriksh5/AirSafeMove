'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import { useTranslation } from '../hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main style={{ background: '#F5EFE0' }}>
      <Navbar />
      <Hero />
      <HowItWorks />

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
          <img
            src="/Logo.png"
            alt={t('app.logo_alt')}
            style={{
              height: 28,
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
        <p style={{ fontSize: 13, margin: 0 }}>
          {t('footer.advisory')}
        </p>
        <p style={{ fontSize: 12, margin: 0 }}>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </footer>
    </main>
  );
}
