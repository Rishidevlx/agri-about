import React from 'react';
import hww1 from '../assets/HWW 1.png';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';
const FONT_HEADING = "'Autography', cursive";
const FONT_SUBHEADING = "'Bouncy', sans-serif";
const FONT_CONTENT = "'TypoSlab Irregular Demo', serif";
const YELLOW = '#FFDA44';

const HowWeWork: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: '#fff', padding: '0', overflow: 'hidden' }}>
      <svg width="1" height="1" style={{ position: 'absolute', pointerEvents: 'none', opacity: 0 }}>
        <defs>
          <marker id="arrowhead-mobile" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
          </marker>
          <marker id="arrowhead-desktop" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
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
        <div style={{ position: 'relative' }}>
          <div style={{
            padding: '20px 16px 60px',
            backgroundColor: '#fff',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div style={{ flex: '0 0 55%', zIndex: 10, paddingTop: '120px' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ lineHeight: '0.8', marginBottom: '12px' }}
              >
                <h3 style={{ fontFamily: FONT_HEADING, fontSize: '36px', fontWeight: 400, color: '#000', margin: 0 }}>Demand</h3>
                <h4 style={{ fontFamily: FONT_SUBHEADING, fontSize: '22px', fontWeight: 400, color: '#000', margin: 0 }}>Driven</h4>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{ fontFamily: FONT_CONTENT, fontSize: '12px', color: '#333', lineHeight: '1.4', margin: 0 }}
              >
                We cultivate and source products based on buyer requirements:
              </motion.p>
            </div>

            <div style={{ flex: '0 0 45%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                  backgroundColor: 'transparent',
                  borderRadius: '40px 0 40px 0',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  padding: '2px',
                  zIndex: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: `3px solid #3b3c36`,
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                  borderRadius: '35px 0 35px 0',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img src={hww1} alt="Farmers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </motion.div>

              {/* Mobile Vertical Arrow (Longer) */}
              <svg width="40" height="110" viewBox="0 0 60 110" style={{ position: 'absolute', bottom: '-110px', left: '50%', transform: 'translateX(-50%)', zIndex: 1, overflow: 'visible' }}>
                {/* Decorative Circles */}
                <circle cx="30" cy="80" r="22" stroke="#f0f0f0" strokeWidth="1" fill="none" />
                <circle cx="30" cy="80" r="32" stroke="#f8f8f8" strokeWidth="1" fill="none" />

                <line x1="30" y1="0" x2="30" y2="80" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 15 65 L 30 80 L 45 65" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* Mobile Steps Block (Mirrors Desktop Side-by-Side) */}
          <div style={{
            padding: '40px 16px',
            backgroundColor: '#FDFDFD',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            width: '100%',
            boxSizing: 'border-box',
            alignItems: 'center'
          }}>
            {/* Mobile Pills: Centered Column (Restored) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', alignItems: 'center' }}>

              {/* Mobile Pill 1 */}
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <MobilePill bg="#FFFDE0" color="#000">Specific soil selection</MobilePill>
                </motion.div>
                {/* Structured Right Curve (Mobile) */}
                <svg width="50" height="70" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 5px)', top: '12px', overflow: 'visible', zIndex: 1 }}>
                  <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="3" />
                  <path d="M 5 0 L 30 0 C 60 0, 60 100, 30 100 L 0 100" stroke="#000" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 15 85 L 0 100 L 15 115" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Mobile Pill 2 */}
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <MobilePill bg="#FFDA44" color="#fff">Organic / Conventional farming</MobilePill>
                </motion.div>
                {/* Structured Left Curve (Mobile) */}
                <svg width="50" height="80" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 5px)', top: '20px', overflow: 'visible', zIndex: 1 }}>
                  <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="3" />
                  <path d="M 145 0 L 120 0 C 90 0, 90 100, 120 100 L 150 100" stroke="#000" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 135 85 L 150 100 L 135 115" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Mobile Pill 3 */}
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <MobilePill bg="#FFFDE0" color="#000">Custom quality standards</MobilePill>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* ─ DESKTOP DEMAND DRIVEN (NEW LAYOUT) ─ */}
          <div style={{
            position: 'relative',
            height: '650px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 5% 0 8%',
            backgroundColor: '#fff'
          }}>
            {/* Left side: Heading and Subtext */}
            <div style={{ flex: '0 0 55%', zIndex: 10, paddingTop: '100px' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ lineHeight: '0.7', marginBottom: '40px' }}
              >
                <h3 style={{ fontFamily: FONT_HEADING, fontSize: '130px', fontWeight: 400, color: '#000', margin: 0 }}>Demand</h3>
                <h4 style={{ fontFamily: FONT_SUBHEADING, fontSize: '64px', fontWeight: 400, color: '#000', margin: 0 }}>Driven</h4>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  fontFamily: FONT_CONTENT,
                  fontSize: '24px',
                  fontWeight: 400,
                  color: '#333',
                  lineHeight: '1.4',
                  maxWidth: '550px'
                }}
              >
                We cultivate and source products based on buyer requirements:
              </motion.p>
            </div>

            {/* Right side: Image with unique shape */}
            <div style={{ flex: '0 0 45%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: 'relative',
                  width: '480px',
                  height: '480px',
                  backgroundColor: 'transparent',
                  borderRadius: '200px 0 200px 0',
                  border: `6px solid #333`,
                  boxShadow: '0 40px 100px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  zIndex: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                  borderRadius: '180px 0 180px 0',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img src={hww1} alt="Farmers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </motion.div>

              <div style={{
                position: 'absolute',
                right: '-10%',
                top: '60%',
                width: '120px',
                height: '4px',
                backgroundColor: YELLOW,
                zIndex: 1
              }}>
                <div style={{
                  position: 'absolute',
                  right: 0,
                  top: '-6px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  border: `3px solid ${YELLOW}`,
                  backgroundColor: '#fff'
                }} />
              </div>

              {/* Desktop Vertical Arrow (Longer) */}
              <svg width="100" height="200" style={{ position: 'absolute', bottom: '-200px', left: '46%', zIndex: 1, overflow: 'visible' }}>
                {/* Decorative Circles */}
                <circle cx="50" cy="130" r="40" stroke="#eee" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="130" r="60" stroke="#f5f5f5" strokeWidth="1.5" fill="none" />

                <line x1="50" y1="0" x2="50" y2="130" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                <path d="M 35 110 L 50 130 L 65 110" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* ─ DESKTOP STEPS BLOCK (Restored Layout) ─ */}
          <div style={{
            display: 'flex',
            minHeight: '700px',
            padding: '80px 8%',
            backgroundColor: '#fff',
            gap: '10%',
            alignItems: 'center'
          }}>
            {/* Left: Empty (Maintains original position) */}
            <div style={{ flex: '1' }} />

            {/* Right: Process Pills */}
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '46px', alignItems: 'center', zIndex: 10 }}>
              {/* Pill 1 */}
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <Pill bg="#FFFDE0" color="#000">Specific soil selection</Pill>
                </motion.div>
                <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 60px)', top: '24px', overflow: 'visible', zIndex: 1 }}>
                  <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                  <path d="M 5 0 L 40 0 C 80 0, 80 100, 40 100 L 0 100" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 15 85 L 0 100 L 15 115" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Pill 2 */}
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <Pill bg="#FFDA44" color="#fff">Organic / Conventional farming</Pill>
                </motion.div>
                <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 15px)', top: '24px', overflow: 'visible', zIndex: 1 }}>
                  <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                  <path d="M 145 0 L 110 0 C 70 0, 70 100, 110 100 L 150 100" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 135 85 L 150 100 L 135 115" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Pill 3 */}
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <Pill bg="#FFFDE0" color="#000">Custom quality standards</Pill>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Pill: React.FC<{ bg: string; color: string; children: React.ReactNode }> = ({ bg, color, children }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    style={{
      backgroundColor: bg,
      borderRadius: '16px',
      padding: '16px 42px',
      fontFamily: FONT_CONTENT,
      fontSize: '24px',
      fontWeight: 600,
      color,
      whiteSpace: 'nowrap',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      border: bg === '#FFDA44' ? 'none' : '1px solid #eee'
    }}
  >
    {children}
  </motion.div>
);

const MobilePill: React.FC<{ bg: string; color: string; children: React.ReactNode }> = ({ bg, color, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    style={{
      position: 'relative',
      zIndex: 2,
      backgroundColor: bg,
      borderRadius: '8px',
      padding: '8px 14px',
      fontFamily: FONT_CONTENT,
      fontSize: '10px',
      fontWeight: 700,
      color,
      textAlign: 'center',
      width: 'max-content',
      maxWidth: '140px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      border: bg === '#FFDA44' ? 'none' : '1px solid #eee'
    }}>
    {children}
  </motion.div>
);

export default HowWeWork;
