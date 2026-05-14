import React from 'react';
import hww3 from '../assets/HWW 3.png';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';

const FONT_HEADING = "'Autography', cursive";
const FONT_SUBHEADING = "'Bouncy', sans-serif";
const FONT_CONTENT = "'TypoSlab Irregular Demo', serif";
const YELLOW_ACCENT = '#FFDA44';
const BACKGROUND = '#FFFFFF';

const OurStrength: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: BACKGROUND, padding: '0', overflow: 'hidden', marginTop: isMobile ? '-30px' : '-120px' }}>

      <h2 style={{
        fontFamily: FONT_SUBHEADING,
        fontSize: isMobile ? '32px' : '52px',
        fontWeight: 400,
        textAlign: 'center',
        color: '#000',
        padding: isMobile ? '32px 0 24px' : '60px 0 50px',
        letterSpacing: '1px',
      }}>
        OUR STRENGTH
      </h2>

      {isMobile ? (
        /* ─ MOBILE LAYOUT ─ */
        <div style={{ padding: '0 16px 60px', position: 'relative', backgroundColor: BACKGROUND }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            <h3 style={{
              fontFamily: FONT_HEADING,
              fontSize: '42px',
              fontWeight: 400,
              color: '#000',
              lineHeight: '0.9',
              margin: 0
            }}>
              Built on Ground <br /> Reality
            </h3>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ width: '85%', display: 'flex', justifyContent: 'center' }}
            >
              <img src={hww3} alt="Farmers" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </motion.div>

            {/* Quote directly below image (Mobile) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: FONT_CONTENT,
                fontSize: '15px',
                color: YELLOW_ACCENT,
                fontStyle: 'italic',
                lineHeight: '1.3',
                textAlign: 'center',
                margin: '10px 0 0 0',
                maxWidth: '95%',
                whiteSpace: 'nowrap'
              }}
            >
              "We don't depend on middle layers, we work close to the source."
            </motion.p>

            {/* Subtext */}
            <p style={{ fontFamily: FONT_CONTENT, fontSize: '16px', color: '#333', lineHeight: '1.4', textAlign: 'center', margin: '10px 0 0 0', maxWidth: '90%' }}>
              We are directly connected with multiple farmers, enabling:
            </p>

            {/* Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
              {[
                { label: 'Better pricing control', bg: '#FFFDE0', color: '#000', align: 'flex-start' },
                { label: 'Quality consistency', bg: '#8A8A8A', color: '#fff', align: 'flex-end' },
                { label: 'Reliable sourcing', bg: '#FFFDE0', color: '#000', align: 'flex-start' },
              ].map((p, i) => (
                <div key={p.label} style={{ width: '100%', display: 'flex', justifyContent: p.align }}>
                  <motion.div
                    initial={{ opacity: 0, x: p.align === 'flex-start' ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    style={{
                      backgroundColor: p.bg,
                      borderRadius: '50px',
                      padding: '10px 24px',
                      fontFamily: FONT_CONTENT,
                      fontSize: '14px',
                      fontWeight: 600,
                      color: p.color,
                      cursor: 'pointer'
                    }}
                  >
                    {p.label}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* ─ DESKTOP LAYOUT ─ */
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px 80px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '80px', width: '100%', maxWidth: '1200px', marginBottom: '60px' }}>
            {/* Left side: Heading and Image */}
            <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column' }}>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: FONT_HEADING,
                  fontSize: '80px',
                  fontWeight: 400,
                  color: '#000',
                  lineHeight: '0.8',
                  marginBottom: '30px'
                }}
              >
                Built on Ground <br /> Reality
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                  width: '100%',
                  height: '500px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={hww3}
                  alt="Farmers and team"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>
              {/* Quote directly below image (Desktop) */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: FONT_CONTENT,
                  fontSize: '24px',
                  fontWeight: 500,
                  color: YELLOW_ACCENT,
                  fontStyle: 'italic',
                  lineHeight: '1.3',
                  textAlign: 'left',
                  marginTop: '25px',
                  whiteSpace: 'nowrap',
                  width: 'max-content'
                }}
              >
                "We don't depend on middle layers, we work close to the source"
              </motion.p>
            </div>

            {/* Right side: Pills and Subtext */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '100px' }}>
              <p style={{
                fontFamily: FONT_CONTENT,
                fontSize: '28px',
                fontWeight: 400,
                color: '#333',
                lineHeight: '1.4',
                marginBottom: '40px'
              }}>
                We are directly connected with multiple farmers, enabling:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { label: 'Better pricing control', bg: '#FFFDE0', color: '#000' },
                  { label: 'Quality consistency', bg: '#8A8A8A', color: '#fff' },
                  { label: 'Reliable sourcing', bg: '#FFFDE0', color: '#000' },
                ].map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    style={{
                      backgroundColor: p.bg,
                      borderRadius: '20px',
                      padding: '16px 40px',
                      fontFamily: FONT_CONTENT,
                      fontSize: '22px',
                      fontWeight: 600,
                      color: p.color,
                      width: 'fit-content',
                      cursor: 'pointer',
                    }}
                  >
                    {p.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurStrength;
