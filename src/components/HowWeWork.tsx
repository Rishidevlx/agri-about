import React from 'react';
import hww1 from '../assets/HWW 1.png';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';
const PILL_FNT = "'Patrick Hand', 'Caveat', cursive";
const YELLOW = '#FFDA44';

const HowWeWork: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: '#fff', padding: '0', overflow: 'hidden' }}>
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
        <div style={{ position: 'relative' }}>
          <div style={{
            padding: '20px 16px 60px',
            backgroundColor: '#fff',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{ flex: '0 0 55%', zIndex: 10 }}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: 'Montserrat, sans-serif', fontSize: '32px', fontWeight: 800,
                  color: '#000', lineHeight: '0.9', marginBottom: '16px', letterSpacing: '-1.5px'
                }}
              >
                Demand<br />Driven
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{ fontFamily: PILL_FNT, fontSize: '13px', fontWeight: 500, color: '#333', lineHeight: '1.3', margin: 0 }}
              >
                We cultivate and source products based on buyer requirements:
              </motion.p>
            </div>

            <div style={{ flex: '0 0 45%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                viewport={{ once: true }}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1/1',
                  backgroundColor: '#fff',
                  borderRadius: '0 40px 40px 40px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  padding: '8px',
                  zIndex: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: YELLOW,
                  borderRadius: '0 35px 35px 35px',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img src={hww1} alt="Farmers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </motion.div>

              {/* Mobile Vertical Arrow (Longer) */}
              <svg width="40" height="140" viewBox="0 0 60 140" style={{ position: 'absolute', bottom: '-140px', left: '50%', transform: 'translateX(-50%)', zIndex: 1, overflow: 'visible' }}>
                <line x1="30" y1="0" x2="30" y2="110" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                <path d="M 15 90 L 30 110 L 45 90" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* Mobile Steps Block (Mirrors Desktop Side-by-Side) */}
          <div style={{
            padding: '40px 12px',
            backgroundColor: '#FDFDFD',
            display: 'flex',
            gap: '20px',
            alignItems: 'center'
          }}>
            {/* Left: Mobile Pills with Connecting Arrows */}
            <div style={{ flex: '0 0 55%', display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>

              {/* Mobile Pill 1 */}
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <MobilePill bg="#FFFDE0" color="#000">Specific soil selection</MobilePill>
                </motion.div>
                {/* Scaled Arrow 1 (Left) */}
                <svg width="60" height="70" viewBox="0 0 150 150" style={{ position: 'absolute', right: '95%', top: '15px', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 140 0 C 40 0, 40 100, 100 100" stroke="#000" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 85 85 L 100 100 L 85 115" stroke="#000" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Mobile Pill 2 */}
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <MobilePill bg="#FFDA44" color="#fff">Organic / Conventional</MobilePill>
                </motion.div>
                {/* Scaled Arrow 2 (Right) */}
                <svg width="60" height="70" viewBox="0 0 150 150" style={{ position: 'absolute', left: '102%', top: '15px', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 10 0 C 110 0, 110 100, 10 100" stroke="#000" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 30 80 L 10 100 L 30 120" stroke="#000" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Mobile Pill 3 */}
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <MobilePill bg="#FFFDE0" color="#000">Custom quality standards</MobilePill>
                </motion.div>
              </div>
            </div>

            {/* Right: Mobile Heading/Text */}
            <div style={{ flex: '0 0 45%' }}>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#000',
                  lineHeight: '1.1',
                  marginBottom: '12px'
                }}
              >
                Our Precision <br /><span style={{ color: YELLOW }}>Process</span>
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '11px',
                  color: '#555',
                  lineHeight: '1.4'
                }}
              >
                Eliminating waste, ensuring guaranteed buyers through a demand-driven model.
              </motion.p>
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
            <div style={{ flex: '0 0 55%', zIndex: 10 }}>
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '96px',
                  fontWeight: 800,
                  color: '#000',
                  lineHeight: '0.85',
                  marginBottom: '40px',
                  letterSpacing: '-4px'
                }}
              >
                Demand<br />Driven
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  fontFamily: PILL_FNT,
                  fontSize: '32px',
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
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                  position: 'relative',
                  width: '480px',
                  height: '480px',
                  backgroundColor: '#fff',
                  borderRadius: '0 120px 120px 120px',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.12)',
                  padding: '24px',
                  zIndex: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '100%', height: '100%', backgroundColor: YELLOW, borderRadius: '0 100px 100px 100px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
              <svg width="100" height="300" style={{ position: 'absolute', bottom: '-300px', left: '46%', zIndex: 1, overflow: 'visible' }}>
                <line x1="50" y1="0" x2="50" y2="240" stroke="#000" strokeWidth="4" strokeLinecap="round" />
                <path d="M 35 215 L 50 245 L 65 215" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* ─ DESKTOP STEPS BLOCK ─ */}
          <div style={{
            display: 'flex',
            minHeight: '700px',
            padding: '80px 8%',
            backgroundColor: '#fff',
            gap: '10%',
            alignItems: 'center'
          }}>
            {/* Left: Simple Pills with Connecting Arrows */}
            {/* Left: Simple Pills with Connecting Arrows (Matching SupplyDriven Logic) */}
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '46px', alignItems: 'center', zIndex: 10 }}>

              {/* Pill 1 */}
              <div style={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <Pill bg="#FFFDE0" color="#000">Specific soil selection</Pill>
                </motion.div>

                {/* Compact Left Curve from SupplyDriven */}
                <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: '100%', top: '20px', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 140 0 C 40 0, 40 100, 100 100" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 85 85 L 100 100 L 85 115" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Pill 2 */}
              <div style={{ position: 'relative' }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Pill bg="#FFDA44" color="#fff">Organic / Conventional farming</Pill>
                </motion.div>

                {/* Compact Right Curve from SupplyDriven */}
                <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: '100%', top: '20px', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 10 0 C 110 0, 110 100, 10 100" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 30 80 L 10 100 L 30 120" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Pill 3 */}
              <div style={{ position: 'relative' }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Pill bg="#FFFDE0" color="#000">Custom quality standards</Pill>
                </motion.div>
              </div>
            </div>

            {/* Right: The Heading/Text (near where the arrow points) */}
            <div style={{ flex: '1', position: 'relative' }}>
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '64px',
                  fontWeight: 800,
                  color: '#000',
                  lineHeight: '1.1',
                  marginBottom: '32px'
                }}
              >
                Our Precision <br /><span style={{ color: YELLOW }}>Process</span>
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '20px',
                  color: '#555',
                  lineHeight: '1.7',
                  maxWidth: '500px'
                }}
              >
                By shifting the focus from "what we have" to "what you need," we eliminate waste and ensure that every harvest has a guaranteed buyer. Our demand-driven model is the future of sustainable, profitable agriculture.
              </motion.p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Pill: React.FC<{ bg: string; color: string; children: React.ReactNode }> = ({ bg, color, children }) => (
  <div style={{
    backgroundColor: bg,
    borderRadius: '50px',
    padding: '16px 52px',
    fontFamily: PILL_FNT,
    fontSize: '28px',
    fontWeight: 400,
    color,
    whiteSpace: 'nowrap',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
  }}>
    {children}
  </div>
);

const MobilePill: React.FC<{ bg: string; color: string; children: React.ReactNode }> = ({ bg, color, children }) => (
  <div style={{
    position: 'relative',
    zIndex: 2,
    backgroundColor: bg,
    borderRadius: '50px',
    padding: '6px 14px',
    fontFamily: PILL_FNT,
    fontSize: '11px',
    fontWeight: 600,
    color,
    textAlign: 'center',
    width: 'max-content',
    maxWidth: '160px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  }}>
    {children}
  </div>
);

export default HowWeWork;
