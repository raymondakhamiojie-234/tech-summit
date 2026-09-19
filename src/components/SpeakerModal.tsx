import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
const Twitter = (props: React.SVGProps<SVGSVGElement>) => <svg className='w-5 h-5 fill-current' {...props} viewBox='0 0 24 24'><path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'/></svg>;
const Facebook = (props: React.SVGProps<SVGSVGElement>) => <svg className='w-5 h-5 fill-current' {...props} viewBox='0 0 24 24'><path d='M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z'/></svg>;
const Instagram = (props: React.SVGProps<SVGSVGElement>) => <svg className='w-5 h-5 fill-current' {...props} viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'/></svg>;
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => <svg className='w-5 h-5 fill-current' {...props} viewBox='0 0 24 24'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>;

import type { Speaker } from '../data/speakers';

interface SpeakerModalProps {
  speaker: Speaker | null;
  isOpen: boolean;
  onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, isOpen, onClose }) => {
  if (!speaker) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl pointer-events-auto relative flex flex-col md:flex-row"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-white/20 transition-all"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/5 h-[300px] md:h-auto relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent md:bg-gradient-to-r z-10" />
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple/10 rounded-full blur-[80px] pointer-events-none" />
                
                <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight uppercase">{speaker.name}</h2>
                <div className="text-electric font-medium tracking-wide mb-1 uppercase text-sm md:text-base">{speaker.role}</div>
                {speaker.organization && (
                  <div className="text-white/60 text-sm mb-8">{speaker.organization}</div>
                )}

                <div className="h-px w-full bg-white/10 mb-8" />

                <div className="mb-8">
                  <div className="text-xs text-white/40 tracking-[0.2em] mb-3 uppercase">Session Topic</div>
                  <h3 className="text-xl md:text-2xl font-semibold italic text-white/90 leading-tight">
                    {speaker.topic}
                  </h3>
                </div>

                <div className="mb-8">
                  <div className="text-xs text-white/40 tracking-[0.2em] mb-2 uppercase">Session Date</div>
                  <div className="text-lg font-medium">{speaker.date}</div>
                </div>

                <div className="flex gap-4 mt-auto pt-4">
                  {speaker.socials.twitter && (
                    <a href={speaker.socials.twitter} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-electric transition-colors">
                      <Twitter className='w-5 h-5' />
                    </a>
                  )}
                  {speaker.socials.linkedin && (
                    <a href={speaker.socials.linkedin} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-electric transition-colors">
                      <Linkedin className='w-5 h-5' />
                    </a>
                  )}
                  {speaker.socials.instagram && (
                    <a href={speaker.socials.instagram} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-electric transition-colors">
                      <Instagram className='w-5 h-5' />
                    </a>
                  )}
                  {speaker.socials.facebook && (
                    <a href={speaker.socials.facebook} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-electric transition-colors">
                      <Facebook className='w-5 h-5' />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SpeakerModal;
