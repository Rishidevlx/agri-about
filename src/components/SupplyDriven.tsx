import React from 'react';
import hww2 from '../assets/HWW 2.png';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';

const FONT_HEADING = "'Autography', cursive";
const FONT_SUBHEADING = "'Bouncy', sans-serif";
const FONT_CONTENT = "'TypoSlab Irregular Demo', serif";

const SupplyDriven: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: '#fff', padding: '0' }}>
      {/* Global SVG Markers for clean arrowheads across SupplyDriven layout */}
      <svg width="1" height="1" style={{ position: 'absolute', pointerEvents: 'none', opacity: 0 }}>
        <defs>
          <marker id="arrowhead-supply" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
          </marker>
        </defs>
      </svg>

      {/* ══ TOP BLOCK ══ */}
      {isMobile ? (
        <div style={{ position: 'relative' }}>
          {/* Mobile Header: Side-by-Side (Full Width Fix) */}
          <div style={{
            position: 'relative',
            padding: '20px 16px 60px',
            backgroundColor: '#FAFAFA',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'flex-start',
            gap: '10px',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <div style={{ flex: '0 0 55%', zIndex: 10, paddingTop: '120px' }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ lineHeight: '0.8', marginBottom: '12px' }}
              >
                <h3 style={{ fontFamily: FONT_HEADING, fontSize: '36px', fontWeight: 400, color: '#000', margin: 0 }}>Supply</h3>
                <h4 style={{ fontFamily: FONT_SUBHEADING, fontSize: '22px', fontWeight: 400, color: '#000', margin: 0 }}>Driven</h4>
              </motion.div>
              <p style={{ fontFamily: FONT_CONTENT, fontSize: '11px', color: '#333', lineHeight: '1.3', margin: 0 }}>
                Leveraging our wide farmer network to provide:
              </p>
            </div>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1' }}>
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
                }}>
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
                  <img src={hww2} alt="Farmer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </motion.div>
              {/* Mobile Vertical Arrow (Sharp Style) */}
              <svg width="40" height="110" viewBox="0 0 60 110" style={{ position: 'absolute', bottom: '-110px', left: '50%', transform: 'translateX(-50%)', zIndex: 1, overflow: 'visible' }}>
                {/* Decorative Circles */}
                <circle cx="30" cy="80" r="22" stroke="#f0f0f0" strokeWidth="1" fill="none" />
                <circle cx="30" cy="80" r="32" stroke="#f8f8f8" strokeWidth="1" fill="none" />

                <line x1="30" y1="0" x2="30" y2="80" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 15 65 L 30 80 L 45 65" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        /* ─ DESKTOP: Side-by-Side row (Full Width Fix) ─ */
        <div style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '650px',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          padding: '0 8% 0 12%',
          backgroundColor: '#FAFAFA'
        }}>
          {/* Right side: Heading and Subtext (Now Right) */}
          <div style={{ flex: '0 0 55%', zIndex: 10, paddingLeft: '15%', paddingTop: '700px' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: '20px' }}
            >
              <h3 style={{ fontFamily: FONT_HEADING, fontSize: '110px', fontWeight: 400, color: '#000', margin: 0, lineHeight: 0.9 }}>Supply</h3>
              <h4 style={{ fontFamily: FONT_SUBHEADING, fontSize: '68px', fontWeight: 400, color: '#000', margin: 0 }}>Driven</h4>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: FONT_CONTENT,
                fontSize: '22px',
                color: '#333',
                lineHeight: '1.6',
                maxWidth: '540px',
                margin: 0
              }}
            >
              We leverage our wide farmer network to provide:
            </motion.p>
          </div>

          {/* Left Image with Premium Container (Now Left) */}
          <div style={{ flex: '0 0 45%', position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                position: 'relative',
                width: '550px',
                height: '550px',
                backgroundColor: 'transparent',
                borderRadius: '200px 0 200px 0',
                border: `10px solid #3b3c36`,
                boxShadow: '0 25px 60px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
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
                <img src={hww2} alt="Farmer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>

            {/* Desktop Vertical Arrow (Sharp HowWeWork Style) */}
            <svg width="100" height="200" viewBox="0 0 100 200" style={{ position: 'absolute', bottom: '-200px', left: '50%', transform: 'translateX(-50%)', zIndex: 1, overflow: 'visible' }}>
              {/* Decorative Circles */}
              <circle cx="50" cy="130" r="40" stroke="#eee" strokeWidth="1.5" fill="none" />
              <circle cx="50" cy="130" r="60" stroke="#f5f5f5" strokeWidth="1.5" fill="none" />

              <line x1="50" y1="0" x2="50" y2="130" stroke="#000" strokeWidth="2" strokeLinecap="round" />
              <path d="M 35 110 L 50 130 L 65 110" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      )}

      {/* ══ STEPS BLOCK ══ */}
      {isMobile ? (
        /* ─ MOBILE: Mirrored Side-by-Side ─ */
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
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <MobilePill bg="#FFFDE0" color="#000">Export Quality Products</MobilePill>
              </motion.div>
              {/* Structured Left Curve (Mobile) */}
              <svg width="50" height="70" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 5px)', top: '12px', overflow: 'visible', zIndex: 1 }}>
                <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="3" />
                <path d="M 145 0 L 120 0 C 90 0, 90 100, 120 100 L 150 100" stroke="#000" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 135 85 L 150 100 L 135 115" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* Mobile Pill 2 */}
            <div style={{ position: 'relative' }}>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <MobilePill bg="#FFDA44" color="#fff">Competitive pricing</MobilePill>
              </motion.div>
              {/* Structured Right Curve (Mobile) */}
              <svg width="50" height="70" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 5px)', top: '12px', overflow: 'visible', zIndex: 1 }}>
                <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="3" />
                <path d="M 5 0 L 30 0 C 60 0, 60 100, 30 100 L 0 100" stroke="#000" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 15 85 L 0 100 L 15 115" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* Mobile Pill 3 */}
            <div style={{ position: 'relative' }}>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <MobilePill bg="#FFFDE0" color="#000">Faster turnaround</MobilePill>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        /* ─ DESKTOP: Restored side-by-side Layout ─ */
        <div style={{
          display: 'flex',
          minHeight: '700px',
          padding: '80px 8%',
          backgroundColor: '#fff',
          gap: '10%',
          alignItems: 'center'
        }}>
          {/* Left: Process Pills */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '46px', alignItems: 'center', zIndex: 10 }}>
            {/* Pill 1 */}
            <div style={{ position: 'relative' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Pill bg="#FFFDE0" color="#000">Export Quality Products</Pill>
              </motion.div>
              <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 15px)', top: '24px', overflow: 'visible', zIndex: 1 }}>
                <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                <path d="M 145 0 L 110 0 C 70 0, 70 100, 110 100 L 150 100" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 135 85 L 150 100 L 135 115" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* Pill 2 */}
            <div style={{ position: 'relative' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Pill bg="#FFDA44" color="#fff">Competitive pricing</Pill>
              </motion.div>
              <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 15px)', top: '24px', overflow: 'visible', zIndex: 1 }}>
                <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                <path d="M 5 0 L 40 0 C 80 0, 80 100, 40 100 L 0 100" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 20 85 L 0 100 L 20 115" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* Pill 3 */}
            <div style={{ position: 'relative' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Pill bg="#FFFDE0" color="#000">Faster turnaround</Pill>
              </motion.div>
            </div>
          </div>

          {/* Right: Empty (Maintains original position) */}
          <div style={{ flex: '1' }} />
        </div>
      )}
    </section>
  );
};

// ══ STYLED COMPONENTS ══
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
      cursor: 'pointer',
      border: bg === '#FFDA44' ? 'none' : '1px solid #eee'
    }}
  >
    {children}
  </motion.div>
);

export default SupplyDriven;
