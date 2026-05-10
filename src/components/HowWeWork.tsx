import React from 'react';
import hww1 from '../assets/HWW 1.png';
import { useIsMobile } from '../hooks/useIsMobile';

const SCRIPT = "'Great Vibes', 'Sacramento', cursive";
const PILL_FNT = "'Patrick Hand', 'Caveat', cursive";
const YELLOW = '#FFDA44';

const HowWeWork: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: '#fff', padding: '0' }}>

      {/* ── TITLE ── */}
      <h2 style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: isMobile ? '36px' : '52px',
        fontWeight: 800,
        textAlign: 'center', color: '#000',
        padding: isMobile ? '40px 0 24px' : '60px 0 40px',
        letterSpacing: '-1px',
      }}>
        How we work
      </h2>

      {/* ══ DEMAND DRIVEN BLOCK ══ */}
      {isMobile ? (
        /* ─ MOBILE: layout matching screenshot ─ */
        <div style={{ padding: '0 16px', marginBottom: '40px', position: 'relative' }}>

          <h3 style={{
            fontFamily: SCRIPT, fontSize: '52px', fontWeight: 400,
            color: '#000', lineHeight: '1',
            position: 'absolute', top: '0px', left: '12px',
            zIndex: 10,
          }}>Demand Driven</h3>

          {/* Yellow card touches right edge */}
          <div style={{
            backgroundColor: YELLOW, borderRadius: '24px 0 0 24px',
            margin: '40px 0 24px 32px',
            padding: '80px 20px 40px',
            minHeight: '260px',
            display: 'flex', alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg width="40" height="50" viewBox="0 0 70 90" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M 20 5 L 20 68 Q 20 78 30 78 L 62 78"
                  stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 52 66 L 63 78 L 52 90"
                  stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <p style={{ fontFamily: PILL_FNT, fontSize: '20px', color: '#000', lineHeight: '1.4', margin: 0, paddingRight: '12px' }}>
                We cultivate and source products based on buyer requirements:
              </p>
            </div>
          </div>

          <img src={hww1} alt="Farmers" style={{ width: '100%', maxWidth: '340px', height: 'auto', margin: '0 auto', display: 'block', transform: 'translateY(-20px)' }} />
        </div>
      ) : (
        /* ─ DESKTOP: original absolute layout ─ */
        <div style={{ position: 'relative', height: '520px', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '20px', left: '10%', right: '35%', bottom: '0', backgroundColor: YELLOW, borderRadius: '30px', zIndex: 1 }} />
          <h3 style={{ fontFamily: SCRIPT, fontSize: '78px', fontWeight: 400, color: '#000', lineHeight: '1', position: 'absolute', top: '32px', left: '4%', zIndex: 3, whiteSpace: 'nowrap', margin: 0 }}>Demand Driven</h3>
          <div style={{ position: 'absolute', bottom: '50px', left: '18%', zIndex: 3, display: 'flex', alignItems: 'center', gap: '22px' }}>
            <svg width="150" height="175" viewBox="0 0 150 175" fill="none" style={{ flexShrink: 0 }}>
              <path d="M 42 5 L 42 138 Q 42 160 62 160 L 135 160" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 118 143 L 136 160 L 118 177" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <p style={{ fontFamily: PILL_FNT, fontSize: '32px', fontWeight: 400, color: '#000', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
              We cultivate and source products based<br />on buyer requirements:
            </p>
          </div>
          <div style={{ position: 'absolute', top: '0', right: '0', width: '40%', height: '100%', zIndex: 2, overflow: 'hidden' }}>
            <img src={hww1} alt="Farmers" style={{ position: 'absolute', bottom: 0, right: 0, height: '540px', width: 'auto', objectFit: 'contain', objectPosition: 'bottom right' }} />
          </div>
        </div>
      )}

      {/* ══ STEPS BLOCK ══ */}
      {isMobile ? (
        /* ─ MOBILE: exact layout with staggered pills and precise arrows ─ */
        <div style={{
          background: `linear-gradient(to right, #ffffff 50%, ${YELLOW} 50%)`,
          padding: '20px 0 64px',
          position: 'relative',
          overflowX: 'hidden'
        }}>
          {/* Down arrow smaller and pushed to the far right edge to avoid overlap */}
          <svg width="24" height="80" viewBox="0 0 30 100" style={{ position: 'absolute', top: '20px', right: '4%', zIndex: 5 }}>
            <line x1="15" y1="0" x2="15" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
            <path d="M 0 70 L 15 90 L 30 70" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', padding: '0 16px', marginTop: '250px' }}>
            
            {/* Pill 1 - shifted left */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', marginRight: '40px', display: 'inline-block' }}>
                <MobilePill bg="#FFFDE0" color="#000">Specific soil selection</MobilePill>
                {/* Left curved arrow connecting to Pill 2 */}
                <svg width="60" height="80" style={{ position: 'absolute', right: '100%', top: '50%', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 60 0 C 10 10, 10 50, 75 60" stroke="#000" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 63 52 L 75 60 L 63 68" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            </div>
            
            {/* Pill 2 - shifted right */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', marginLeft: '40px', display: 'inline-block' }}>
                <MobilePill bg="#8A8A8A" color="#fff">Organic / Conventional farming</MobilePill>
                {/* Right curved arrow connecting to Pill 3 */}
                <svg width="60" height="80" style={{ position: 'absolute', left: '100%', top: '50%', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 0 0 C 50 10, 50 50, -25 60" stroke="#000" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M -13 52 L -25 60 L -13 68" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            </div>

            {/* Pill 3 - shifted left */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', marginRight: '40px', display: 'inline-block' }}>
                <MobilePill bg="#FFFDE0" color="#000">Custom quality standards</MobilePill>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* ─ DESKTOP: split layout with arrows ─ */
        <div style={{ display: 'flex', minHeight: '850px', position: 'relative' }}>
          <div style={{ flex: '0 0 58%', backgroundColor: '#fff' }} />
          <div style={{ flex: '0 0 42%', backgroundColor: YELLOW, position: 'relative' }}>
            <svg width="60" height="190" viewBox="0 0 60 190" style={{ position: 'absolute', top: '22px', right: '80px' }}>
              <line x1="30" y1="8" x2="30" y2="158" stroke="#000" strokeWidth="5" strokeLinecap="round" />
              <path d="M 8 137 L 30 163 L 52 137" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <div style={{ position: 'absolute', top: '380px', right: '10%', width: '54%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', marginBottom: '46px' }}>
              <Pill bg="#FFFDE0" color="#000">Specific soil selection</Pill>
              <svg width="200" height="180" viewBox="0 0 200 180" style={{ position: 'absolute', right: '100%', top: '-10px', overflow: 'visible' }}>
                <path d="M 185 35 C 100 35, 30 60, 30 100 C 30 142, 70 162, 110 162" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 92 143 L 112 163 L 92 183" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div style={{ position: 'relative', marginBottom: '46px' }}>
              <Pill bg="#8A8A8A" color="#fff">Organic / Conventional farming</Pill>
              <svg width="200" height="170" viewBox="0 0 200 170" style={{ position: 'absolute', left: '100%', top: '0px', overflow: 'visible' }}>
                <path d="M 15 35 C 100 35, 170 60, 170 100 C 170 140, 130 160, 90 160" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 108 140 L 88 160 L 108 180" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <Pill bg="#FFFDE0" color="#000">Custom quality standards</Pill>
          </div>
        </div>
      )}
    </section>
  );
};

const Pill: React.FC<{ bg: string; color: string; children: React.ReactNode }> = ({ bg, color, children }) => (
  <div style={{ backgroundColor: bg, borderRadius: '50px', padding: '16px 52px', fontFamily: PILL_FNT, fontSize: '28px', fontWeight: 400, color, whiteSpace: 'nowrap' }}>
    {children}
  </div>
);

const MobilePill: React.FC<{ bg: string; color: string; children: React.ReactNode }> = ({ bg, color, children }) => (
  <div style={{ position: 'relative', zIndex: 2, backgroundColor: bg, borderRadius: '50px', padding: '8px 14px', fontFamily: PILL_FNT, fontSize: '13px', fontWeight: 600, color, textAlign: 'center', width: 'max-content', maxWidth: '180px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
    {children}
  </div>
);

export default HowWeWork;
