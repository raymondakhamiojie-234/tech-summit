import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const TARGET_DATE = new Date("2026-12-03T00:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = TARGET_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setIsLive(true);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLive) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric to-purple tracking-tighter"
      >
        THE SUMMIT IS LIVE
      </motion.div>
    );
  }

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto z-10 relative">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="bento-card group flex flex-col items-center justify-center p-6 md:p-8 aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <AnimatePresence mode="popLayout">
            <motion.div
              key={unit.value}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-2 font-sans"
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.div>
          </AnimatePresence>
          <div className="text-xs md:text-sm tracking-[0.2em] text-white/50 font-medium group-hover:text-electric transition-colors duration-300">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
