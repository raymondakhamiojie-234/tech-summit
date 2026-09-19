import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { speakers } from '../data/speakers';

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
        >
          THE SUMMIT EXPERIENCE
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-electric to-purple" />
      </div>

      <div className="h-[400px] md:h-[500px] flex items-center relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />
        
        <motion.div 
          style={{ x }}
          className="flex gap-6 md:gap-12 px-8 z-10 w-max"
        >
          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="w-[300px] md:w-[450px] bento-card p-6 md:p-8 shrink-0 relative group"
            >
              <div className="text-sm tracking-[0.2em] font-medium text-electric mb-6 uppercase">
                03 DECEMBER
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase leading-tight">
                {speaker.topic.split(':')[0]}
              </h3>
              
              {speaker.topic.split(':')[1] && (
                <p className="text-white/60 mb-8 italic">
                  {speaker.topic.split(':')[1].trim()}
                </p>
              )}
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <div className="font-bold uppercase text-sm">{speaker.name}</div>
                  <div className="text-xs text-white/50">{speaker.role}</div>
                </div>
              </div>
              
              {/* Dot on timeline */}
              <div className="absolute top-1/2 -left-6 md:-left-12 w-4 h-4 rounded-full bg-electric -translate-y-1/2 z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-150 transition-transform duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
