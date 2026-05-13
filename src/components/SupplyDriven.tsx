import React from 'react';
import hww2 from '../assets/HWW 2.png';
import { useIsMobile } from '../hooks/useIsMobile';
import { motion } from 'framer-motion';

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
        <div style={{ position: 'relative' }}>
          {/* Mobile Header: Side-by-Side */}
          <div style={{ 
            padding: '20px 16px 60px', 
            backgroundColor: '#FAFAFA', 
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{ flex: '0 0 55%', zIndex: 10 }}>
              <h3 style={{
                fontFamily: 'Montserrat, sans-serif', fontSize: '32px', fontWeight: 800,
                color: '#000', lineHeight: '0.9', marginBottom: '16px', letterSpacing: '-1.5px'
              }}>
                Supply<br/>Driven
              </h3>
              <p style={{ fontFamily: PILL_FNT, fontSize: '13px', fontWeight: 500, color: '#333', lineHeight: '1.3', margin: 0 }}>
                Leveraging our wide farmer network to provide export quality products.
              </p>
            </div>

            <div style={{ flex: '0 0 45%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1/1',
                backgroundColor: '#fff',
                borderRadius: '40px 0 40px 40px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                padding: '8px',
                zIndex: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: YELLOW,
                  borderRadius: '35px 0 35px 35px',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img src={hww2} alt="Farmer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              {/* Mobile Vertical Arrow */}
              <svg width="24" height="60" viewBox="0 0 30 100" style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
                <line x1="15" y1="0" x2="15" y2="85" stroke="#000" strokeWidth="4" strokeLinecap="round" />
                <path d="M 0 70 L 15 90 L 30 70" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        /* ─ DESKTOP: Side-by-Side row ─ */
        <div style={{
          position: 'relative',
          height: '650px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 5% 0 8%',
          backgroundColor: '#FAFAFA'
        }}>
          {/* Left Content */}
          <div style={{ flex: '0 0 55%', zIndex: 10 }}>
             <h3 style={{ 
               fontFamily: 'Montserrat, sans-serif', 
               fontSize: '84px', 
               fontWeight: 900, 
               color: '#000', 
               lineHeight: '0.85', 
               letterSpacing: '-4px',
               marginBottom: '24px'
             }}>
               Supply<br /><span style={{ color: '#000' }}>Driven</span>
             </h3>
             <p style={{ 
               fontFamily: 'Montserrat, sans-serif', 
               fontSize: '22px', 
               fontWeight: 500, 
               color: '#444', 
               maxWidth: '450px',
               lineHeight: '1.4'
             }}>
               We leverage our wide farmer network to provide export quality products, competitive pricing, and faster turnaround.
             </p>
          </div>

          {/* Right Image with Premium Container */}
          <div style={{ flex: '0 0 45%', position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
             <div style={{
               position: 'relative',
               width: '500px',
               height: '500px',
               backgroundColor: '#fff',
               borderRadius: '60px 0 60px 60px',
               border: '14px solid #fff',
               boxShadow: '0 25px 60px rgba(0,0,0,0.12)',
               overflow: 'hidden',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               zIndex: 2
             }}>
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: YELLOW, 
                  borderRadius: '45px 0 45px 45px',
                  overflow: 'hidden'
                }}>
                  <img src={hww2} alt="Farmer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
             </div>

             {/* Down Arrow from Image Container */}
             <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%) translateY(20px)', zIndex: 10 }}>
               <svg width="40" height="120" viewBox="0 0 40 120">
                 <line x1="20" y1="0" x2="20" y2="100" stroke="#000" strokeWidth="6" strokeLinecap="round" />
                 <path d="M 5 80 L 20 105 L 35 80" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
               </svg>
             </div>
          </div>
        </div>
      )}

      {/* ══ STEPS BLOCK ══ */}
      {isMobile ? (
        /* ─ MOBILE: Mirrored Side-by-Side ─ */
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
                  <MobilePill bg="#FFFDE0" color="#000">Export Quality Products</MobilePill>
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
                  <MobilePill bg="#8A8A8A" color="#fff">Competitive pricing</MobilePill>
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
                  <MobilePill bg="#FFFDE0" color="#000">Faster turnaround</MobilePill>
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
               Our Scalable <br /><span style={{ color: YELLOW }}>Supply</span>
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
               Building robust networks to ensure consistent, high-volume product availability.
             </motion.p>
          </div>
        </div>
      ) : (
        /* ─ DESKTOP: Side-by-Side row ─ */
        <div style={{ 
          display: 'flex', 
          minHeight: '700px', 
          padding: '80px 8%',
          backgroundColor: '#fff',
          gap: '10%',
          alignItems: 'center'
        }}>
          {/* Left: Simple Pills with Connecting Arrows */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '46px', alignItems: 'center', zIndex: 10 }}>
             
             {/* Pill 1 */}
             <div style={{ position: 'relative' }}>
               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <Pill bg="#FFFDE0" color="#000">Export Quality Products</Pill>
               </motion.div>
               <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', right: '100%', top: '20px', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 140 0 C 40 0, 40 100, 100 100" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 85 85 L 100 100 L 85 115" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
               </svg>
             </div>

             {/* Pill 2 */}
             <div style={{ position: 'relative' }}>
               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <Pill bg="#8A8A8A" color="#fff">Competitive pricing</Pill>
               </motion.div>
               <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', left: '100%', top: '20px', overflow: 'visible', zIndex: 1 }}>
                  <path d="M 10 0 C 110 0, 110 100, 10 100" stroke="#000" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 30 80 L 10 100 L 30 120" stroke="#000" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
               </svg>
             </div>

             {/* Pill 3 */}
             <div style={{ position: 'relative' }}>
               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <Pill bg="#FFFDE0" color="#000">Faster turnaround</Pill>
               </motion.div>
             </div>
          </div>

          {/* Right: The Heading/Text */}
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
               Our Scalable <br /><span style={{ color: YELLOW }}>Supply</span>
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
               We leverage our wide farmer network to provide a consistent supply of premium agricultural products. Our model ensures scalability, reliability, and the highest quality standards for global markets.
             </motion.p>
          </div>
        </div>
      )}
    </section>
  );
};

// ══ STYLED COMPONENTS ══
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

export default SupplyDriven;
