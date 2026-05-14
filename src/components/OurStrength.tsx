import React from 'react';
import hww3 from '../assets/HWW 3.png';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';

const FONT_HEADING = "'Autography', cursive";
const FONT_CONTENT = "'TypoSlab Irregular Demo', serif";
const YELLOW_ACCENT = '#FFDA44';
const BACKGROUND = '#FFFFFF';

const OurStrength: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: BACKGROUND, padding: '0', overflow: 'hidden', marginTop: isMobile ? '-30px' : '-120px' }}>

      <h2 style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: isMobile ? '32px' : '52px',
        fontWeight: 900,
        textAlign: 'center',
        color: '#000',
        padding: isMobile ? '32px 0 24px' : '60px 0 50px',
        letterSpacing: '1px',
      }}>
        OUR STRENGTH
      </h2>

      {isMobile ? (
        <div style={{ padding: '0 16px 60px', position: 'relative', backgroundColor: BACKGROUND }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            <h3 style={{
              fontFamily: FONT_HEADING,
              fontSize: '32px',
              fontWeight: 400,
              color: '#000',
              lineHeight: '1.1',
              margin: 0
            }}>
              Built on Ground Reality
            </h3>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ width: '85%', display: 'flex', justifyContent: 'center' }}
            >
              <img src={hww3} alt="Farmers" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </motion.div>

            <p style={{ fontFamily: FONT_CONTENT, fontSize: '16px', color: '#333', lineHeight: '1.4', textAlign: 'center', margin: '0', maxWidth: '90%' }}>
              We are directly connected with multiple farmers, enabling:
            </p>

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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: FONT_CONTENT,
                fontSize: '16px',
                color: YELLOW_ACCENT,
                lineHeight: '1.3',
                textAlign: 'center',
                margin: '40px 0 0 0',
                maxWidth: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              "We don't depend on middle layers, we work close to the source"
            </motion.p>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px 80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '80px', width: '100%', maxWidth: '1200px', marginBottom: '60px' }}>
            <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column' }}>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: FONT_HEADING,
                  fontSize: '56px',
                  fontWeight: 400,
                  color: '#000',
                  lineHeight: '1',
                  marginBottom: '20px',
                  whiteSpace: 'nowrap'
                }}
              >
                Built on Ground Reality
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
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '100px', paddingLeft: '100px' }}>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
                {/* Card 1 */}
                <div style={{ position: 'relative' }}>
                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <ProcessCard bg="#FFFDE0" color="#000" title="Better pricing control" />
                  </motion.div>
                  <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: 'calc(100% + 20px)', top: '45px', overflow: 'visible', zIndex: 1 }}>
                    <circle cx="0" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                    <path d="M 5 0 L 40 0 C 80 0, 80 122, 40 122 L 0 122" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 15 107 L 0 122 L 15 137" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>

                {/* Card 2 */}
                <div style={{ position: 'relative' }}>
                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                    <ProcessCard bg="#808080" color="#fff" title="Quality consistency" />
                  </motion.div>
                  <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: 'calc(100% + 20px)', top: '45px', overflow: 'visible', zIndex: 1 }}>
                    <circle cx="150" cy="0" r="5" fill="none" stroke="#000" strokeWidth="2" />
                    <path d="M 145 0 L 110 0 C 70 0, 70 122, 110 122 L 150 122" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 135 107 L 150 122 L 135 137" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>

                {/* Card 3 */}
                <div style={{ position: 'relative' }}>
                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    <ProcessCard bg="#FFFDE0" color="#000" title="Reliable sourcing" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: FONT_CONTENT,
              fontSize: '32px',
              fontWeight: 500,
              color: YELLOW_ACCENT,
              lineHeight: '1.3',
              textAlign: 'center',
              marginTop: '20px',
              maxWidth: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            "We don't depend on middle layers, we work close to the source"
          </motion.p>
        </div>
      )}
    </section>
  );
};

const ProcessCard: React.FC<{ bg: string; color: string; title: string }> = ({ bg, color, title }) => (
  <motion.div
    transition={{ duration: 0.4, ease: "easeOut" }}
    style={{
      backgroundColor: bg,
      borderRadius: '24px',
      width: '420px',
      height: '90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      border: '1px solid rgba(0,0,0,0.05)',
      position: 'relative',
      zIndex: 2
    }}
  >
    <span style={{ fontFamily: FONT_CONTENT, fontSize: '24px', fontWeight: 700, color, textAlign: 'center' }}>{title}</span>
  </motion.div>
);

export default OurStrength;
