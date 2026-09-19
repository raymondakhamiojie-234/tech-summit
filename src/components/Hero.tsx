import { useState, useEffect } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const getIndicatorMessage = () => {
  const targetDate = new Date("2026-12-03T00:00:00").getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days <= 0) return "THE NEXT ECONOMY STARTS NOW.";
  if (days <= 7) return "ALMOST TIME";
  if (days <= 30) return "WE'RE GETTING CLOSER";
  return "THE SUMMIT IS APPROACHING";
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(getIndicatorMessage());
    const interval = setInterval(() => {
      setMessage(getIndicatorMessage());
    }, 1000 * 60 * 60); // update hourly
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden px-4 md:px-8">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-electric/20 rounded-full blur-[120px] -top-40 -left-40 animate-blob" />
        <div className="absolute w-[500px] h-[500px] bg-purple/20 rounded-full blur-[100px] top-1/2 right-0 transform -translate-y-1/2 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] -bottom-40 left-1/4 animate-blob" style={{ animationDelay: '4s' }} />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="z-10 flex flex-col items-center text-center w-full max-w-6xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 md:mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs md:text-sm font-medium tracking-wider text-white/80">{message}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-bold leading-none tracking-tighter mb-6"
        >
          <span className="block text-white">THE NEXT ECONOMY</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric via-purple to-electric bg-[length:200%_auto] animate-gradient">SUMMIT 2026</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-3 tracking-tight">YOUR DIGITAL WORLD PLAYBOOK</h2>
          <p className="text-lg md:text-xl text-white/60 tracking-wide font-light">Start Where You're. Build What's Next.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full"
        >
          <CountdownTimer />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
