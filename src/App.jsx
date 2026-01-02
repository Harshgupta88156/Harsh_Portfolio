import React from 'react'
import Particles from './components/particles'
import TextType from './components/text-type';
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import ClickSpark from './components/ClickSpark';

const App = () => {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      backgroundColor: '#000', // Provides contrast for white particles
      overflow: 'hidden' 
    }}>
      
    <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>

      <SmoothCursor />

      {/* BACKGROUND LAYER */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 1 
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* FOREGROUND LAYER */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        display: 'flex', 
        // Changed from center to flex-start to move it 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        height: '100%',
        // Adjust these values to move the text exactly where you want
        paddingTop: '25vh',   /* Increase this to move further down, decrease to move up */
        paddingLeft: '6vw',  /* Increase this to move further right, decrease to move left */
        pointerEvents: 'none'
      }}>
        <TextType 
          as="h1"
          text={["HARSH GUPTA", "BACKEND DEVELOPER...", "PROBLEM SOLVING!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="main-heading"
          style={{ pointerEvents: 'auto' }} // Re-enables interaction on the text itself
        />
      </div>

      </ClickSpark>

    

    </div>
  )
}

export default App