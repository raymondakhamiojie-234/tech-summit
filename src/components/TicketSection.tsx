import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket as TicketIcon } from 'lucide-react';
import CheckoutModal from './CheckoutModal';

const TicketSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="tickets" className="py-24 relative overflow-hidden bg-electric/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-electric/20 flex items-center justify-center mb-6">
            <TicketIcon className="w-8 h-8 text-electric" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 uppercase">
            SECURE YOUR SPOT
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl">
            Join the brightest minds shaping the digital economy. Get your Day 2 Entry Pass now and gain full access to all sessions, workshops, and networking events.
          </p>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bento-card p-1 flex flex-col md:flex-row items-center gap-6 max-w-xl mx-auto bg-white/5 border border-white/20"
          >
            <div className="flex-1 py-4 px-6 md:px-8 text-left">
              <div className="text-sm font-bold text-electric tracking-[0.2em] mb-1 uppercase">DAY 2 PASS</div>
              <div className="text-3xl font-bold tracking-tight">₦5,000</div>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto m-2 py-4 px-8 rounded-2xl bg-electric text-white font-bold tracking-wider uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              Get Ticket
            </button>
          </motion.div>
        </motion.div>
      </div>

      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default TicketSection;
