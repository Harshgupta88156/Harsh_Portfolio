import React from 'react';

const Navbar = ({ isMobile }) => {
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '0 5vw' : '0 6vw',
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
    zIndex: 50, // Higher than everything
    fontFamily: '"Courier New", Courier, monospace',
    pointerEvents: 'auto', // Force cursor interaction




  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: isMobile ? '14px' : '18px',
    margin: isMobile ? '0 10px' : '0 50px',
    opacity: 0.7,
    transition: 'all 0.3s ease',
    cursor: 'pointer', // Force pointer hand
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  };

  const resumeButtonStyle = {
    ...linkStyle,
    padding: isMobile ? '8px 12px' : '10px 25px',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '4px',
    opacity: 1,
    marginLeft: isMobile ? '10px' : '20px',
    display: 'inline-block'
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: 'flex', alignItems: 'center', pointerEvents: 'auto' }}>
        {['home', 'projects', 'skills', 'contact'].map((item) => (
          <a 
            key={item}
            href={`#${item}`} 
            style={linkStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.textShadow = '0 0 10px #fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '0.7';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            {item}
          </a>
        ))}

        <a 
          href="src\assets\HARSH_GUPTA_INTERN.pdf" 
          download 
          style={resumeButtonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.3)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;