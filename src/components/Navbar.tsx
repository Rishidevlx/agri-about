import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      zIndex: 1000,
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'Montserrat' }}>
        PACT<span style={{ color: '#F3CD00' }}> VENTURES</span>
      </div>
      
      <div style={{ display: 'flex', gap: '3rem' }}>
        <NavLink href="#about">About Us</NavLink>
        <NavLink href="#whom-we-work-with">Network</NavLink>
        <NavLink href="#how-we-work">Process</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>

      <button style={{ 
        backgroundColor: '#000', 
        color: '#fff', 
        padding: '0.8rem 2rem', 
        borderRadius: '50px',
        fontWeight: 600
      }}>
        Enquire Now
      </button>
    </nav>
  );
};

const NavLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} style={{ 
    textDecoration: 'none', 
    color: '#000', 
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'color 0.3s ease'
  }}>
    {children}
  </a>
);

export default Navbar;
