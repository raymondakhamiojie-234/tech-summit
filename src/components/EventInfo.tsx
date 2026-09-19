
import { motion } from 'framer-motion';

const EventInfo = () => {
  return (
    <section className="py-24 relative z-10 container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-8 md:col-span-2 group"
        >
          <div className="text-sm font-medium tracking-[0.2em] text-white/50 mb-2 uppercase">EVENT</div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            THE NEXT ECONOMY SUMMIT 2026
          </h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bento-card p-8 md:col-span-2 group bg-electric/10 border-electric/20"
        >
          <div className="text-sm font-medium tracking-[0.2em] text-electric mb-2 uppercase">THEME</div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase leading-snug">
            YOUR DIGITAL WORLD PLAYBOOK
          </h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bento-card p-8 group"
        >
          <div className="text-sm font-medium tracking-[0.2em] text-white/50 mb-4 uppercase">DATE</div>
          <div className="text-2xl font-bold uppercase text-accent">
            3RD–4TH<br/>DECEMBER<br/>2026
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bento-card p-8 md:col-span-2 group flex flex-col justify-center items-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-transparent pointer-events-none" />
          <div className="text-sm font-medium tracking-[0.2em] text-white/50 mb-2 uppercase z-10">TAGLINE</div>
          <div className="text-xl md:text-2xl font-medium italic text-white/90 z-10">
            "START WHERE YOU'RE. BUILD WHAT'S NEXT."
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bento-card p-8 group"
        >
          <div className="text-sm font-medium tracking-[0.2em] text-white/50 mb-4 uppercase">LOCATION</div>
          <div className="text-xl font-bold uppercase text-electric">
            EKPOMA,<br/>EDO STATE,<br/>NIGERIA
          </div>
        </motion.div>
      </div>

      {/* Brand Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-32 text-center relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] md:w-[600px] md:h-[200px] border border-white/20 rounded-[100%] animate-[spin_20s_linear_infinite] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[90px] md:w-[580px] md:h-[180px] border border-electric/30 rounded-[100%] animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />
        
        <div className="relative z-10 py-16">
          <div className="text-sm tracking-[0.3em] font-medium text-white/60 mb-6 uppercase">IS HAPPENING IN</div>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            EKPOMA
          </h2>
          <div className="text-sm tracking-[0.3em] font-medium text-electric uppercase">THIS DECEMBER</div>
        </div>
      </motion.div>
    </section>
  );
};

export default EventInfo;
