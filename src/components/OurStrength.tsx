import React from 'react';
import hww3 from '../assets/HWW 3.png';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';

const SCRIPT = "'Great Vibes', 'Sacramento', cursive";
const HAND = "'Patrick Hand', 'Caveat', cursive";
const YELLOW = '#FFDA44';

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
        /* ─ MOBILE: layout matching screenshot ─ */
        <div style={{ padding: '0 16px 20px', position: 'relative' }}>
          <div style={{ position: 'relative', height: '100px', width: '100%' }}>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: SCRIPT, fontSize: '42px', fontWeight: 400,
                color: '#000', lineHeight: '1', position: 'absolute', top: 0, width: '100%', textAlign: 'center', margin: 0
              }}
            >
              Built on
            </motion.h3>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: SCRIPT, fontSize: '42px', fontWeight: 400,
                color: '#000', lineHeight: '1', position: 'absolute', top: '42px', width: '100%', textAlign: 'center', margin: 0
              }}
            >
              Reality
            </motion.h3>
          </div>

          <div style={{ position: 'relative', width: '100%', minHeight: '240px' }}>
            {/* Left side: Image (Absolute to bottom left, independently scaled) */}
            <motion.img
              src={hww3}
              alt="Farmers and team"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: '-30px',
                width: '70%',
                maxWidth: 'none',
                height: 'auto',
                zIndex: 1,
                cursor: 'pointer'
              }}
            />

            {/* Right side: Text and Pills (Absolute to right, vertically centered) */}
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              width: '55%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 2
            }}>
              <p style={{ fontFamily: HAND, fontSize: '9.5px', color: '#000', lineHeight: '1.3', textAlign: 'center', margin: '0 0 10px 0', whiteSpace: 'nowrap' }}>
                We are directly connected with multiple farmers, enabling:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', alignItems: 'center' }}>
                {[
                  { label: 'Better pricing control', bg: '#FFFDE0', color: '#000' },
                  { label: 'Quality consistency', bg: '#8A8A8A', color: '#fff' },
                  { label: 'Reliable sourcing', bg: '#FFFDE0', color: '#000' },
                ].map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ scale: 1.08 }}
                    style={{ backgroundColor: p.bg, borderRadius: '50px', padding: '6px 10px', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 700, color: p.color, width: 'max-content', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', cursor: 'pointer' }}
                  >
                    {p.label}
                  </motion.div>
                ))}
              </div>

              <p style={{ fontFamily: HAND, fontSize: '11px', color: '#000', lineHeight: '1.3', textAlign: 'center', margin: '14px 0 0 0' }}>
                We don't depend on middle layers,<br />we work close to the source.
              </p>
            </div>
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
              whileHover={{ scale: 1.03 }}
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
                whileHover={{ scale: 1.05, x: 10 }}
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
