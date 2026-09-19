import React from 'react';

import { motion } from 'framer-motion';
const Twitter = (props: React.SVGProps<SVGSVGElement>) => <svg className='w-5 h-5 fill-current' {...props} viewBox='0 0 24 24'><path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'/></svg>;
const Facebook = (props: React.SVGProps<SVGSVGElement>) => <svg className='w-5 h-5 fill-current' {...props} viewBox='0 0 24 24'><path d='M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z'/></svg>;
const Instagram = (props: React.SVGProps<SVGSVGElement>) => <svg className='w-5 h-5 fill-current' {...props} viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'/></svg>;
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => <svg className='w-5 h-5 fill-current' {...props} viewBox='0 0 24 24'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>;
const Youtube = (props: React.SVGProps<SVGSVGElement>) => <svg className='w-5 h-5 fill-current' {...props} viewBox='0 0 24 24'><path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/></svg>;

import { cn } from '../lib/utils';

// Replace TikTok with custom icon or lucide equivalent (not available by default, using generic for now)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={cn("w-5 h-5 fill-current", className)} viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socials = [
  { icon: <Twitter className="w-5 h-5" />, href: "#" },
  { icon: <Facebook className="w-5 h-5" />, href: "#" },
  { icon: <Instagram className="w-5 h-5" />, href: "#" },
  { icon: <TikTokIcon />, href: "#" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  { icon: <Youtube className="w-5 h-5" />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative bg-black pt-32 pb-8 overflow-hidden z-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-sm tracking-[0.3em] font-medium text-white/50 mb-4 uppercase">Follow The Conversation</h2>
            <div className="flex gap-4 justify-center">
              {socials.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              THE NEXT ECONOMY<br/>SUMMIT 2026
            </h2>
            <div className="text-electric font-medium tracking-wider mb-2">YOUR DIGITAL WORLD PLAYBOOK</div>
            <div className="text-white/50 text-sm tracking-wide">START WHERE YOU'RE. BUILD WHAT'S NEXT.</div>
          </div>
          
          <div>
            <h4 className="text-sm tracking-[0.2em] font-bold text-white mb-6 uppercase">Navigation</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#speakers" className="hover:text-electric transition-colors">Speakers</a></li>
              <li><a href="#experience" className="hover:text-electric transition-colors">Sessions</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Event Information</a></li>
              <li><a href="#partners" className="hover:text-electric transition-colors">Partnership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] font-bold text-white mb-6 uppercase">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="mailto:info@ancientechacademy.org" className="hover:text-electric transition-colors">info@ancientechacademy.org</a></li>
              <li><a href="tel:+2340000000000" className="hover:text-electric transition-colors">+234 000 000 0000</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 tracking-wider">
          <div>© 2026 The Next Economy Summit. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
