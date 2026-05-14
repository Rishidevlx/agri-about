import React from 'react';
import hww3 from '../assets/HWW 3.png';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';

const SCRIPT = "'Great Vibes', 'Sacramento', cursive";
const HAND = "'Patrick Hand', 'Caveat', cursive";
const YELLOW = '#FFFF';

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
        /* ─ MOBILE: Refined staggered layout ─ */
        <div style={{ padding: '0 16px 40px', position: 'relative', backgroundColor: YELLOW }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            <h3 style={{ fontFamily: SCRIPT, fontSize: '52px', fontWeight: 400, color: '#000', lineHeight: '1.1', margin: 0 }}>Built on Ground Reality</h3>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ width: '90%', display: 'flex', justifyContent: 'center' }}
            >
              <img src={hww3} alt="Farmers" style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </motion.div>

            {/* Subtext */}
            <p style={{ fontFamily: HAND, fontSize: '16px', color: '#000', lineHeight: '1.4', textAlign: 'center', margin: '0', maxWidth: '90%' }}>
              We are directly connected with multiple farmers, enabling:
            </p>

            {/* Staggered Pills */}
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
                      padding: '10px 20px',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: p.color,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                      cursor: 'pointer'
                    }}
                  >
                    {p.label}
                  </motion.div>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: HAND, fontSize: '18px', color: '#000', lineHeight: '1.3', textAlign: 'center', margin: '10px 0 0 0' }}>
              We don't depend on middle layers, we work close to the source.
            </p>
          </div>
        </div>
      ) : (
        /* ─ DESKTOP: two-column ─ */
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', padding: '0 60px 20px' }}>
          <div style={{ flex: '0 0 48%', display: 'flex', flexDirection: 'column' }}>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ fontFamily: SCRIPT, fontSize: '100px', fontWeight: 400, color: '#000', lineHeight: '1', marginBottom: '20px', whiteSpace: 'nowrap' }}
            >
              Built on Ground Reality
            </motion.h3>
            <motion.img
              src={hww3}
              alt="Farmers and team"

              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ width: '100%', height: '560px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '12px', cursor: 'pointer' }}
            />
          </div>
          <div style={{ flex: 1, paddingTop: '20px' }}>
            <p style={{ fontFamily: HAND, fontSize: '40px', fontWeight: 400, color: '#000', lineHeight: '1.4', marginBottom: '36px' }}>
              We are directly connected with multiple farmers, enabling:
            </p>
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

                style={{ backgroundColor: p.bg, borderRadius: '50px', padding: '16px 48px', marginBottom: '20px', fontFamily: HAND, fontSize: '28px', fontWeight: 400, color: p.color, width: 'fit-content', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
              >
                {p.label}
              </motion.div>
            ))}
            <p style={{ fontFamily: HAND, fontSize: '44px', fontWeight: 500, color: '#000', lineHeight: '1.3', marginTop: '40px' }}>
              We don't depend on middle layers,<br />we work close to the source.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurStrength;
