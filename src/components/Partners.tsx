
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-[#030305]/50 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">OUR PARTNERS & SPONSORS</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric to-purple mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16 items-center justify-items-center opacity-60">
          <div className="text-xl md:text-2xl font-bold uppercase tracking-widest hover:text-white transition-colors duration-300">Ancientech<br/><span className="text-sm">Groups</span></div>
          <div className="text-xl md:text-2xl font-bold uppercase tracking-widest hover:text-white transition-colors duration-300">Webnics</div>
          <div className="text-lg md:text-xl font-bold uppercase tracking-wider text-center hover:text-white transition-colors duration-300">The Ministry of<br/>God's General</div>
          <div className="text-lg md:text-xl font-bold uppercase tracking-wider text-center hover:text-white transition-colors duration-300">Styrex Trading<br/>Universe</div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bento-card p-8 md:p-12 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Interested in partnering with us?</h3>
          <div className="text-electric tracking-[0.2em] font-medium text-sm mb-8 uppercase">PARTNERSHIP & SPONSORSHIP</div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-white/80">
            <a href="mailto:info@ancientechacademy.org" className="hover:text-white transition-colors">
              info@ancientechacademy.org
            </a>
            <span className="hidden md:block w-px h-6 bg-white/20" />
            <a href="tel:+2340000000000" className="hover:text-white transition-colors">
              +234 (0) 000 000 0000
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
