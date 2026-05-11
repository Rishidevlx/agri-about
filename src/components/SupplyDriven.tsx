import React from 'react';
import hww2 from '../assets/HWW 2.png';
import { useIsMobile } from '../hooks/useIsMobile';

const SCRIPT = "'Great Vibes', 'Sacramento', cursive";
const PILL_FNT = "'Patrick Hand', 'Caveat', cursive";
const YELLOW = '#FFDA44';

const SupplyDriven: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: '#fff', padding: '0' }}>
      {/* Global SVG Markers for clean arrowheads across SupplyDriven layout */}
      <svg width="1" height="1" style={{ position: 'absolute', pointerEvents: 'none', opacity: 0 }}>
        <defs>
          <marker id="arrowhead-supply" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
          </marker>
        </defs>
      </svg>
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
          
          <h3 style={{ 
            fontFamily: SCRIPT, 
            fontSize: '88px', 
            fontWeight: 400, 
            color: '#000', 
            lineHeight: '1', 
            position: 'absolute', 
            top: '40px', 
            left: '9%', 
            zIndex: 5, 
            whiteSpace: 'nowrap', 
            margin: 0 
          }}>
            Supply Driven
          </h3>

          {/* Precision Arrow: Sharp L-shape matching user's green mark */}
          <svg width="300" height="300" viewBox="0 0 300 300" style={{ position: 'absolute', top: '90px', left: '44.5%', zIndex: 5, pointerEvents: 'none', overflow: 'visible' }}>
            <path d="M 0 0 L 70 0 L 70 200" stroke="#000" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#arrowhead-supply)" />
          </svg>

          <div style={{ position: 'absolute', top: '330px', left: '43.5%', zIndex: 4 }}>
            <p style={{ fontFamily: PILL_FNT, fontSize: '38px', fontWeight: 400, color: '#000', lineHeight: '1.4', margin: 0 }}>
              We leverage our wide farmer network<br />to provide:
            </p>
          </div>
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
          <div style={{ flex: '0 0 60%', backgroundColor: YELLOW, position: 'relative' }}>
            <svg width="60" height="190" viewBox="0 0 60 190" style={{ position: 'absolute', top: '22px', left: '40px' }}>
              <line x1="30" y1="8" x2="30" y2="158" stroke="#000" strokeWidth="5" strokeLinecap="round" />
              <path d="M 8 137 L 30 163 L 52 137" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <div style={{ flex: '0 0 40%', backgroundColor: '#fff' }} />
          <div style={{ position: 'absolute', top: '380px', left: '60%', transform: 'translateX(-50%)', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', marginBottom: '46px' }}>
              <Pill bg="#FFFDE0" color="#000">Export Quality Products</Pill>
              {/* Arrow 1: Compact Left curve */}
              <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: '100%', top: '20px', overflow: 'visible', zIndex: 1 }}>
                <path d="M 140 0 C 40 0, 40 100, 100 100" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 85 85 L 100 100 L 85 115" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div style={{ position: 'relative', marginBottom: '46px' }}>
              <Pill bg="#8A8A8A" color="#fff">Competitive pricing</Pill>
              {/* Arrow 2: Compact Desktop Right curve - Pointing exactly to card corner */}
              <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: '100%', top: '20px', overflow: 'visible', zIndex: 1 }}>
                <path d="M 10 0 C 110 0, 110 100, 10 100" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 30 80 L 10 100 L 30 120" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <Pill bg="#FFFDE0" color="#000">Faster turnaround</Pill>
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

export default SupplyDriven;
