import AboutUs from './components/AboutUs';
import WhomWeWorkWith from './components/WhomWeWorkWith';
import HowWeWork from './components/HowWeWork';
import SupplyDriven from './components/SupplyDriven';
import OurStrength from './components/OurStrength';
import OurTeam from './components/OurTeam';
import { useIsMobile } from './hooks/useIsMobile';

import { motion } from 'framer-motion';

const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const isMobile = useIsMobile();
  const sideMargin = isMobile ? '0 12px' : '0 100px';
  const strengthMargin = isMobile ? '0 4px' : '0 20px';

  return (
    <>
      <div style={{ margin: sideMargin }}>
        <ScrollReveal><AboutUs /></ScrollReveal>
        <ScrollReveal><WhomWeWorkWith /></ScrollReveal>
      </div>
      <ScrollReveal><HowWeWork /></ScrollReveal>
      <ScrollReveal><SupplyDriven /></ScrollReveal>
      <div style={{ margin: strengthMargin }}>
        <ScrollReveal><OurStrength /></ScrollReveal>
      </div>
      <div style={{ margin: sideMargin }}>
        <ScrollReveal><OurTeam /></ScrollReveal>
      </div>
    </>
  );
}

export default App;
