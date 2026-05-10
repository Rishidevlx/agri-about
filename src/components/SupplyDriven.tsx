import React from 'react';
import hww2 from '../assets/HWW 2.png';
import { useIsMobile } from '../hooks/useIsMobile';

const SCRIPT = "'Great Vibes', 'Sacramento', cursive";
const PILL_FNT = "'Patrick Hand', 'Caveat', cursive";
const YELLOW = '#FFDA44';

const SupplyDriven: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* ══ TOP BLOCK ══ */}
      {isMobile ? (
        /* ─ MOBILE: layout matching screenshot style ─ */
        <div style={{ backgroundColor: '#fff', paddingBottom: '32px', position: 'relative' }}>

          <h3 style={{
            fontFamily: SCRIPT, fontSize: '52px', fontWeight: 400,
            color: '#000', lineHeight: '1',
            position: 'absolute', top: '0px', left: '12px',
            zIndex: 10,
          }}>
            Supply Driven
          </h3>

          <div style={{
            backgroundColor: YELLOW, borderRadius: '24px 0 0 24px',
            margin: '40px 0 24px 32px',
            padding: '80px 20px 40px',
            minHeight: '260px',
            display: 'flex', alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg width="40" height="50" viewBox="0 0 60 80" fill="none" style={{ flexShrink: 0, marginTop: '4px' }}>
                <path d="M 16 5 L 16 58 Q 16 68 26 68 L 55 68"
                  stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 44 56 L 56 68 L 44 80"
                  stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <p style={{ fontFamily: PILL_FNT, fontSize: '20px', color: '#000', lineHeight: '1.4', margin: 0, paddingRight: '12px' }}>
                We leverage our wide farmer network to provide:
              </p>
            </div>
          </div>

          <img src={hww2} alt="Farmer" style={{ width: '100%', maxWidth: '340px', height: 'auto', margin: '0 auto', display: 'block', transform: 'translateY(-20px)' }} />
        </div>
      ) : (
        /* ─ DESKTOP: flex split row ─ */
        <section style={{ display: 'flex', height: '580px', position: 'relative', overflow: 'hidden', padding: 0 }}>
          <div style={{ flex: '0 0 40%', backgroundColor: '#fff', position: 'relative' }}>
            <img src={hww2} alt="Farmer" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '80%', objectFit: 'cover', objectPosition: 'center bottom' }} />
          </div>
          <div style={{ flex: '0 0 60%', backgroundColor: YELLOW }} />
          <p style={{ fontFamily: PILL_FNT, fontSize: '34px', fontWeight: 400, color: '#000', textAlign: 'center', lineHeight: '1.6', position: 'absolute', top: '310px', left: '40%', right: '40px', zIndex: 4, margin: 0 }}>
            We leverage our wide farmer network<br />to provide:
          </p>
          <h3 style={{ fontFamily: SCRIPT, fontSize: '88px', fontWeight: 400, color: '#000', lineHeight: '1', position: 'absolute', top: '5px', left: '50px', zIndex: 5, whiteSpace: 'nowrap', margin: 0 }}>
            Supply Driven
          </h3>
          <svg width="130" height="220" viewBox="0 0 130 220" style={{ position: 'absolute', top: '92px', left: '38%', zIndex: 5, pointerEvents: 'none', overflow: 'visible' }}>
            <path d="M 0 0 L 80 0 Q 100 0 100 22 L 100 188" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 80 168 Q 100 193 120 168" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </section>
      )}

      {/* ══ STEPS BLOCK ══ */}
      {isMobile ? (
        /* ─ MOBILE: exact layout with staggered pills and precise arrows ─ */
        <div style={{ 
          background: `linear-gradient(to right, ${YELLOW} 50%, #ffffff 50%)`, 
          padding: '20px 0 64px',
          position: 'relative',
          overflowX: 'hidden'
        }}>
          {/* Down arrow smaller and pushed to the left inside yellow layer */}
          <svg width="24" height="80" viewBox="0 0 30 100" style={{ position: 'absolute', top: '20px', left: '6%', zIndex: 5 }}>
            <line x1="15" y1="0" x2="15" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
            <path d="M 0 70 L 15 90 L 30 70" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', padding: '0 16px', marginTop: '250px' }}>
            
            {/* Pill 1 - shifted left */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', marginRight: '40px', display: 'inline-block' }}>
                <MobilePill bg="#FFFDE0" color="#000">Export Quality Products</MobilePill>
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
                <MobilePill bg="#8A8A8A" color="#fff">Competitive pricing</MobilePill>
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
                <MobilePill bg="#FFFDE0" color="#000">Faster turnaround</MobilePill>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* ─ DESKTOP: split layout with arrows ─ */
        <div style={{ display: 'flex', minHeight: '850px', position: 'relative' }}>
          <div style={{ flex: '0 0 42%', backgroundColor: YELLOW, position: 'relative' }}>
            <svg width="60" height="190" viewBox="0 0 60 190" style={{ position: 'absolute', top: '22px', left: '80px' }}>
              <line x1="30" y1="8" x2="30" y2="158" stroke="#000" strokeWidth="5" strokeLinecap="round" />
              <path d="M 8 137 L 30 163 L 52 137" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <div style={{ flex: '0 0 58%', backgroundColor: '#fff' }} />
          <div style={{ position: 'absolute', top: '380px', left: '10%', width: '54%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', marginBottom: '46px' }}>
              <Pill bg="#FFFDE0" color="#000">Export Quality Products</Pill>
              <svg width="200" height="180" viewBox="0 0 200 180" style={{ position: 'absolute', right: '100%', top: '-10px', overflow: 'visible' }}>
                <path d="M 185 35 C 100 35, 30 60, 30 100 C 30 142, 70 162, 110 162" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 92 143 L 112 163 L 92 183" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div style={{ position: 'relative', marginBottom: '46px' }}>
              <Pill bg="#8A8A8A" color="#fff">Competitive pricing</Pill>
              <svg width="200" height="170" viewBox="0 0 200 170" style={{ position: 'absolute', left: '100%', top: '0px', overflow: 'visible' }}>
                <path d="M 15 35 C 100 35, 170 60, 170 100 C 170 140, 130 160, 90 160" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 108 140 L 88 160 L 108 180" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <Pill bg="#FFFDE0" color="#000">Faster turnaround</Pill>
          </div>
        </div>
      )}
    </>
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

export default SupplyDriven;
