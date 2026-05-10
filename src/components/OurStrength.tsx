import React from 'react';
import hww3 from '../assets/HWW 3.png';
import { useIsMobile } from '../hooks/useIsMobile';

const SCRIPT = "'Great Vibes', 'Sacramento', cursive";
const HAND = "'Patrick Hand', 'Caveat', cursive";
const YELLOW = '#FFDA44';

const OurStrength: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: YELLOW, padding: '0' }}>

      <h2 style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: isMobile ? '32px' : '52px',
        fontWeight: 900, textAlign: 'center', color: '#000',
        padding: isMobile ? '32px 0 24px' : '60px 0 50px',
        letterSpacing: '1px',
      }}>
        OUR STRENGTH
      </h2>

      {isMobile ? (
        /* ─ MOBILE: layout matching screenshot ─ */
        <div style={{ padding: '0 16px 20px', position: 'relative' }}>
          <div style={{ position: 'relative', height: '105px', width: '100%' }}>
            <h3 style={{
              fontFamily: SCRIPT, fontSize: '58px', fontWeight: 400,
              color: '#000', lineHeight: '1', position: 'absolute', top: 0, width: '100%', textAlign: 'center', margin: 0
            }}>
              Built on Ground
            </h3>
            <h3 style={{
              fontFamily: SCRIPT, fontSize: '58px', fontWeight: 400,
              color: '#000', lineHeight: '1', position: 'absolute', top: '45px', width: '100%', textAlign: 'center', margin: 0
            }}>
              Reality
            </h3>
          </div>

          <div style={{ position: 'relative', width: '100%', minHeight: '240px' }}>
            {/* Left side: Image (Absolute to bottom left, independently scaled) */}
            <img src={hww3} alt="Farmers and team" style={{
              position: 'absolute',
              bottom: '-5px',
              left: '-30px',
              width: '70%',
              maxWidth: 'none',
              height: 'auto',
              zIndex: 1
            }} />

            {/* Right side: Text and Pills (Absolute to right, vertically centered) */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              width: '55%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 2
            }}>
              <p style={{ fontFamily: HAND, fontSize: '9.5px', color: '#000', lineHeight: '1.3', textAlign: 'center', margin: '0 0 10px 0', whiteSpace: 'nowrap' }}>
                We are directly connected with multiple farmers, enabling:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', alignItems: 'center' }}>
                {[
                  { label: 'Better pricing control', bg: '#FFFDE0', color: '#000' },
                  { label: 'Quality consistency', bg: '#8A8A8A', color: '#fff' },
                  { label: 'Reliable sourcing', bg: '#FFFDE0', color: '#000' },
                ].map(p => (
                  <div key={p.label} style={{ backgroundColor: p.bg, borderRadius: '50px', padding: '6px 10px', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 700, color: p.color, width: 'max-content', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    {p.label}
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: HAND, fontSize: '11px', color: '#000', lineHeight: '1.3', textAlign: 'center', margin: '14px 0 0 0' }}>
                We don't depend on middle layers,<br />we work close to the source.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* ─ DESKTOP: two-column ─ */
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', padding: '0 60px 80px' }}>
          <div style={{ flex: '0 0 48%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: SCRIPT, fontSize: '86px', fontWeight: 400, color: '#000', lineHeight: '1', marginBottom: '20px', whiteSpace: 'nowrap' }}>
              Built on Ground Reality
            </h3>
            <img src={hww3} alt="Farmers and team" style={{ width: '100%', height: '560px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '12px' }} />
          </div>
          <div style={{ flex: 1, paddingTop: '20px' }}>
            <p style={{ fontFamily: HAND, fontSize: '32px', fontWeight: 400, color: '#000', lineHeight: '1.5', marginBottom: '36px' }}>
              We are directly connected with multiple farmers, enabling:
            </p>
            {[
              { label: 'Better pricing control', bg: '#FFFDE0', color: '#000' },
              { label: 'Quality consistency', bg: '#8A8A8A', color: '#fff' },
              { label: 'Reliable sourcing', bg: '#FFFDE0', color: '#000' },
            ].map(p => (
              <div key={p.label} style={{ backgroundColor: p.bg, borderRadius: '50px', padding: '16px 48px', marginBottom: '20px', fontFamily: HAND, fontSize: '28px', fontWeight: 400, color: p.color, width: 'fit-content' }}>
                {p.label}
              </div>
            ))}
            <p style={{ fontFamily: HAND, fontSize: '30px', fontWeight: 400, color: '#000', lineHeight: '1.5', marginTop: '40px' }}>
              We don't depend on middle layers,<br />we work close to the source.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurStrength;
