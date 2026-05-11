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
      {/* Global SVG Markers for clean arrowheads (Nips) across all layouts */}
      <svg width="1" height="1" style={{ position: 'absolute', pointerEvents: 'none', opacity: 0 }}>
        <defs>
          <marker id="arrowhead-mobile" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
          </marker>
          <marker id="arrowhead-desktop" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
          </marker>
        </defs>
      </svg>

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

      {/* ══ MOBILE LAYOUT ══ */}
      {isMobile ? (
        <div style={{ position: 'relative', overflowX: 'hidden' }}>

          <div style={{ padding: '0 16px', position: 'relative', zIndex: 10 }}>
            <h3 style={{
              fontFamily: SCRIPT, fontSize: '52px', fontWeight: 400,
              color: '#000', lineHeight: '1',
              position: 'absolute', top: '0px', left: '16px',
              zIndex: 10,
            }}>Demand Driven</h3>

            {/* Absolute Arrow starting under 'D' (left: 16px) and curving into yellow box - Pointing to content */}
            <svg width="200" height="250" viewBox="0 0 200 250" fill="none" style={{ position: 'absolute', left: '16px', top: '50px', zIndex: 15, overflow: 'visible' }}>
              <path d="M 5 0 L 5 80 Q 5 110 40 110 L 75 110"
                stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#arrowhead-mobile)" />
            </svg>

            {/* First Yellow Box - Sharp Bottom Corners to Connect Below */}
            <div style={{
              backgroundColor: YELLOW,
              borderRadius: '24px 0 0 0', // Sharp bottom
              marginLeft: '36px',
              marginTop: '45px',
              padding: '95px 16px 40px 45px',
              minHeight: '220px',
              display: 'flex', alignItems: 'center'
            }}>
              <p style={{ fontFamily: PILL_FNT, fontSize: '15px', fontWeight: 500, color: '#000', lineHeight: '1.4', margin: 0 }}>
                We cultivate and source products based<br />on buyer requirements:
              </p>
            </div>
          </div>

          {/* Connection Area - Yellow matches the 36px margin of the box above (16px padding + 36px margin = 52px) */}
          <div style={{ position: 'relative', background: isMobile ? `linear-gradient(to right, #ffffff 52px, ${YELLOW} 52px, ${YELLOW} 85%, #ffffff 85%)` : `linear-gradient(to right, #ffffff 52px, ${YELLOW} 52px)` }}>
            <img src={hww1} alt="Farmers" style={{ width: '100%', maxWidth: '340px', height: 'auto', margin: '0 auto', display: 'block', transform: 'translateY(-10px)', position: 'relative', zIndex: 10 }} />
          </div>

          {/* Steps Block */}
          <div style={{
            background: `linear-gradient(to right, #ffffff 52px, ${YELLOW} 52px)`,
            padding: '10px 0 64px',
            position: 'relative'
          }}>
            {/* Down arrow pushed to the far right edge to avoid overlap */}
            <svg width="24" height="80" viewBox="0 0 30 100" style={{ position: 'absolute', top: '10px', right: '4%', zIndex: 5 }}>
              <line x1="15" y1="0" x2="15" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
              <path d="M 0 70 L 15 90 L 30 70" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            {/* Pill 1 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
              <div style={{ position: 'relative', display: 'inline-block', zIndex: 10 }}>
                <MobilePill bg="#FFFDE0" color="#000">Specific soil selection</MobilePill>
                {/* Arrow 1: Compact Left curve - Pushed way left to avoid overlap */}
                <svg width="40" height="60" style={{ position: 'absolute', right: '130%', top: '40%', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 40 0 C 0 0, 0 60, 45 60" stroke="#000" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 35 54 L 45 60 L 35 66" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            </div>

            {/* Pill 2 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
              <div style={{ position: 'relative', display: 'inline-block', zIndex: 10 }}>
                <MobilePill bg="#8A8A8A" color="#fff">Organic / Conventional farming</MobilePill>
                {/* Arrow 2: Compact Right curve */}
                <svg width="40" height="60" style={{ position: 'absolute', left: '100%', top: '50%', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 0 0 C 40 0, 40 50, -5 50" stroke="#000" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 5 44 L -5 50 L 5 56" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            </div>

            {/* Pill 3 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', display: 'inline-block', zIndex: 10 }}>
                <MobilePill bg="#FFFDE0" color="#000">Custom quality standards</MobilePill>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* ─ DESKTOP DEMAND DRIVEN ─ */}
          <div style={{ position: 'relative', height: '520px', overflow: 'hidden', marginBottom: '0px' }}>
            {/* Connected Yellow Background (No bottom radius) - Extended width */}
            <div style={{ position: 'absolute', top: '20px', left: '5%', right: '20%', bottom: '-1px', backgroundColor: YELLOW, borderRadius: '30px 30px 0 0', zIndex: 1 }} />

            <h3 style={{ fontFamily: SCRIPT, fontSize: '78px', fontWeight: 400, color: '#000', lineHeight: '1', position: 'absolute', top: '32px', left: '0.5%', zIndex: 3, whiteSpace: 'nowrap', margin: 0 }}>Demand Driven</h3>

            {/* Desktop Absolute Arrow starting in white layer (left: 0.5%) pointing to text in yellow layer */}
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" style={{ position: 'absolute', left: '0.5%', top: '120px', zIndex: 5, overflow: 'visible' }}>
                <path d="M 15 0 L 15 170 Q 15 200 45 200 L 280 200"
                  stroke="#000" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#arrowhead-desktop)" />
            </svg>

            {/* Moved Text Block Higher */}
            <div style={{ position: 'absolute', top: '240px', left: '22%', zIndex: 3, display: 'flex', alignItems: 'center' }}>
              <p style={{ fontFamily: PILL_FNT, fontSize: '32px', fontWeight: 400, color: '#000', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                We cultivate and source products based<br />on buyer requirements:
              </p>
            </div>

            <div style={{ position: 'absolute', top: '0', right: '0', width: '40%', height: '100%', zIndex: 2, overflow: 'hidden' }}>
              <img src={hww1} alt="Farmers" style={{ position: 'absolute', bottom: 0, right: 0, height: '540px', width: 'auto', objectFit: 'contain', objectPosition: 'bottom right' }} />
            </div>
          </div>

          {/* ─ DESKTOP STEPS BLOCK ─ */}
          <div style={{ display: 'flex', minHeight: '850px', position: 'relative', overflow: 'hidden' }}>
            {/* 40% White, 55% Yellow, 5% White boundary setup */}
            <div style={{ flex: '0 0 40%', backgroundColor: '#fff' }} />
            <div style={{ flex: '0 0 55%', backgroundColor: YELLOW, position: 'relative' }}>
              {/* Desktop Down Arrow inside the Yellow Box */}
              <svg width="60" height="190" viewBox="0 0 60 190" style={{ position: 'absolute', top: '30px', right: '40px' }}>
                <line x1="30" y1="8" x2="30" y2="158" stroke="#000" strokeWidth="5" strokeLinecap="round" />
                <path d="M 8 137 L 30 163 L 52 137" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div style={{ flex: '0 0 5%', backgroundColor: '#fff' }} />

            {/* Cards centered EXACTLY on the 40/55 boundary with reduced gap */}
            <div style={{ position: 'absolute', top: '150px', left: '40%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', zIndex: 5, width: '100%' }}>

              {/* Card 1 */}
              <div style={{ position: 'relative', zIndex: 10 }}>
                <Pill bg="#FFFDE0" color="#000">Specific soil selection</Pill>
                {/* Arrow 1: Compact Desktop Left curve */}
                <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: '100%', top: '20px', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 140 0 C 40 0, 40 100, 100 100" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 85 85 L 100 100 L 85 115" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Card 2 */}
              <div style={{ position: 'relative', zIndex: 10 }}>
                <Pill bg="#8A8A8A" color="#fff">Organic / Conventional farming</Pill>
                {/* Arrow 2: Compact Desktop Right curve - Pointing exactly to card corner */}
                <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: '100%', top: '20px', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 5 0 C 120 0, 120 120, 5 120" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 25 105 L 5 120 L 25 135" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Card 3 */}
              <div style={{ position: 'relative', zIndex: 10 }}>
                <Pill bg="#FFFDE0" color="#000">Custom quality standards</Pill>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Pill: React.FC<{ bg: string; color: string; children: React.ReactNode; radius?: string }> = ({ bg, color, children, radius = '50px' }) => (
  <div style={{ backgroundColor: bg, borderRadius: radius, padding: '16px 52px', fontFamily: PILL_FNT, fontSize: '28px', fontWeight: 400, color, whiteSpace: 'nowrap', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
    {children}
  </div>
);

const MobilePill: React.FC<{ bg: string; color: string; children: React.ReactNode; radius?: string }> = ({ bg, color, children, radius = '50px' }) => (
  <div style={{ position: 'relative', zIndex: 2, backgroundColor: bg, borderRadius: radius, padding: '8px 14px', fontFamily: PILL_FNT, fontSize: '13px', fontWeight: 600, color, textAlign: 'center', width: 'max-content', maxWidth: '180px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
    {children}
  </div>
);

export default HowWeWork;
