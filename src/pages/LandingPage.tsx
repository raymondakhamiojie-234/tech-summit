import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SpeakersSection from '../components/SpeakersSection';
import TimelineSection from '../components/TimelineSection';
import WhatToExpect from '../components/WhatToExpect';
import EventInfo from '../components/EventInfo';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import TicketSection from '../components/TicketSection';

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric transform origin-left z-[60]"
        style={{ scaleX }}
      />
      <div 
        className="fixed inset-0 pointer-events-none z-50 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.05), transparent 40%)`
        }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <EventInfo />
        <TicketSection />
        <SpeakersSection />
        <TimelineSection />
        <WhatToExpect />
        <Partners />
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
