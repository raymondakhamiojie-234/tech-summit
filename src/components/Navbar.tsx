import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Experience', href: '#experience' },
  { name: 'Partners', href: '#partners' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 relative z-[100]">
        <div className={cn(
          "flex items-center justify-between rounded-2xl transition-all duration-500",
          isScrolled ? "glass px-6 py-3 shadow-[0_0_20px_rgba(59,130,246,0.15)] bg-[#030305]/80" : "px-2 py-2"
        )}>
          <a href="#" className="flex flex-col text-sm font-bold leading-tight tracking-wider relative z-20">
            <span className="text-white">THE NEXT ECONOMY</span>
            <span className="text-electric">SUMMIT 2026</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-electric hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="md:hidden text-white relative z-20 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 px-4 z-[90]"
          >
            <div className="glass rounded-2xl overflow-hidden shadow-2xl bg-[#030305]/95 border border-white/10 p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/90 py-3 border-b border-white/10"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full py-4 rounded-xl bg-electric text-white text-center font-bold text-lg"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
