import React, { useState, useEffect } from 'react'
import Particles from './components/particles'
import TextType from './components/text-type';
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import ClickSpark from './components/ClickSpark';
import ProfilePhoto from './assets/Photo here.svg';
import ScrambledText from "@/components/ui/shadcn-io/scrambled-text/index.jsx";
import Navbar from './components/Navbar';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Screen size listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      
      minHeight: '300vh', // Extended to 2 pages (200vh)
      backgroundColor: '#000', 
      overflowX: 'hidden' // Allows vertical scroll but hides horizontal
    }}>
      
      {/* ClickSpark must wrap the interactive elements for the effect to trigger on them */}
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Navbar placed here allows it to receive clicks and trigger sparks */}
        <div style={{ position: 'relative', zIndex: 9999, pointerEvents: 'auto' }}>
           <Navbar isMobile={isMobile} />
        </div>
        
        <SmoothCursor />

        {/* BACKGROUND LAYER - Fixed to viewport so it stays while scrolling */}
        {/* pointerEvents: 'none' ensures clicks pass through to the ClickSpark listener */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'auto' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={isMobile ? 80 : 200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={isMobile ? 60 : 100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* PAGE 1: HERO SECTION */}
        <div style={{ 
          position: 'relative', 
          zIndex: 2, 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: isMobile ? 'center' : 'flex-start', 
          alignItems: isMobile ? 'center' : 'flex-start', 
          paddingTop: isMobile ? '0' : '25vh', 
          paddingLeft: isMobile ? '0' : '6vw',
          textAlign: isMobile ? 'center' : 'left',
          pointerEvents: 'none' // Important: allows clicks to fall through to ClickSpark
        }}>
          <TextType 
            as="h1"
            text={["Hey I'm Harsh Gupta", "Welcome to my Portfolio", "I love coding !"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="main-heading"
            style={{ 
              pointerEvents: 'auto', // Re-enables interaction for the text itself
              fontSize: isMobile ? '1.8rem' : '3.5rem'
            }} 
          />
          <ScrambledText
            radius={isMobile ? 60 : 100}
            duration={1.2}
            speed={0.5}
            scrambleChars="01ABC#$!?"
            className="description-text"
            style={{ 
              pointerEvents: 'auto', // Re-enables interaction for the description
              margin: '10px 0 0 0',
              maxWidth: isMobile ? '90%' : '800px',
              color: 'white',
              fontSize: isMobile ? '13px' : '20px', 
              letterSpacing: '0.5px'
            }}
          >
            I am a motivated software developer with a strong passion for problem-solving and building impactful applications, specializing in backend development using Java and Spring Boot with a focus on microservices architecture, Kafka, SQL, MongoDB, and API development, along with working knowledge of React.js, and I am driven to build scalable solutions that contribute to meaningful projects..
          </ScrambledText>
        </div>

        {/* PHOTO LAYER - ATTACHED TO HERO */}
        <div style={{ 
          position: 'absolute', 
          top: isMobile ? '75vh' : '25vh', 
          right: isMobile ? '50%' : '8vw', 
          transform: isMobile ? 'translateX(50%)' : 'none', 
          zIndex: 3,
          pointerEvents: 'auto'
        }}>
          <img 
            src={ProfilePhoto} 
            alt="Harsh Gupta Profile" 
            style={{ 
              width: isMobile ? '180px' : '320px', 
              height: isMobile ? '180px' : '320px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '1px solid #333',
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))',
              userSelect: 'none',
              WebkitUserDrag: 'none',
              transition: 'transform 0.3s ease'
            }} 
            onMouseOver={(e) => e.currentTarget.style.transform = isMobile ? 'translateX(0%) scale(1.05)' : 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = isMobile ? 'translateX(0%) scale(1)' : 'scale(1)'}
          />
        </div>
      </ClickSpark>
    </div>
  )
}

export default App