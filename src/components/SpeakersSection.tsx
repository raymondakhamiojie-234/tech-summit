import { useState } from 'react';
import { motion } from 'framer-motion';
import { speakers } from '../data/speakers';
import type { Speaker } from '../data/speakers';
import SpeakerModal from './SpeakerModal';

const SpeakersSection = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="speakers" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">MEET THE SPEAKERS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-purple" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-min">
          {speakers.map((speaker, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => setSelectedSpeaker(speaker)}
                className={`bento-card group cursor-pointer h-full min-h-[400px] flex flex-col justify-end p-6 md:p-8 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 min-h-[500px]' : ''
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <div className="self-end w-12 h-12 rounded-full glass flex items-center justify-center font-bold text-lg group-hover:bg-electric group-hover:text-white transition-colors duration-300">
                    {speaker.id}
                  </div>
                  
                  <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className={`font-bold tracking-tight uppercase mb-1 ${isFeatured ? 'text-4xl' : 'text-2xl'}`}>
                      {speaker.name}
                    </h3>
                    <div className="text-electric font-medium text-sm md:text-base uppercase tracking-wider mb-3 opacity-90">
                      {speaker.role}
                    </div>
                    
                    <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white/80 text-sm md:text-base italic mb-4 line-clamp-2">
                        "{speaker.topic}"
                      </p>
                      <span className="text-xs tracking-[0.2em] font-semibold text-white/50 group-hover:text-white/90">
                        CLICK TO VIEW PROFILE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/40 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <SpeakerModal 
        speaker={selectedSpeaker} 
        isOpen={!!selectedSpeaker} 
        onClose={() => setSelectedSpeaker(null)} 
      />
    </section>
  );
};

export default SpeakersSection;
