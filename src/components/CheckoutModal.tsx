import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { usePaystackPayment } from 'react-paystack';
import { db } from '../lib/db';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// NOTE: Pulls from your .env file
const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_1234567890abcdef1234567890abcdef12345678';

const generateCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'NXT-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ticketCode, setTicketCode] = useState<string | null>(null);

  const amount = 5000 * 100; // 5000 NGN in kobo

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: amount,
    publicKey: PAYSTACK_PUBLIC_KEY,
    text: 'Pay Now',
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: any) => {
    // Generate a unique 6-character code
    const code = generateCode();
    
    // Save to our mock database
    db.saveTicket({
      code,
      name,
      email,
      reference: reference.reference,
      status: 'valid',
      createdAt: new Date().toISOString()
    });

    setTicketCode(code);
  };

  const onClosePayment = () => {
    console.log('Payment closed');
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    initializePayment({ onSuccess, onClose: onClosePayment });
  };

  const resetAndClose = () => {
    setName('');
    setEmail('');
    setTicketCode(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#0a0a0f] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            <button 
              onClick={resetAndClose}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {ticketCode ? (
              // Success Screen
              <div className="p-8 md:p-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-500">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Payment Successful!</h3>
                <p className="text-white/60 text-sm mb-8">
                  Your ticket has been confirmed. Please screenshot or save this code to present at the venue.
                </p>
                
                <div className="w-full p-4 rounded-xl border border-dashed border-white/20 bg-white/5 mb-8">
                  <div className="text-xs text-white/40 tracking-[0.2em] uppercase mb-2">ENTRY CODE</div>
                  <div className="text-4xl font-bold tracking-widest text-electric">{ticketCode}</div>
                </div>

                <button 
                  onClick={resetAndClose}
                  className="w-full py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              // Checkout Form
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Get Your Pass</h3>
                <p className="text-white/60 text-sm mb-8">
                  Day 2 Entry Pass • ₦5,000
                </p>

                <form onSubmit={handlePay} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-electric transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-electric transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-4 py-4 rounded-xl bg-electric text-white font-bold tracking-wider uppercase hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Pay ₦5,000
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
