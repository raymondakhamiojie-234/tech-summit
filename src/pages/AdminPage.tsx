import { useState } from 'react';
import { ShieldAlert, Search, CheckCircle, XCircle } from 'lucide-react';
import { db } from '../lib/db';
import type { Ticket } from '../lib/db';

const AdminPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [ticketResult, setTicketResult] = useState<Ticket | null>(null);
  const [searchError, setSearchError] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');
    setTicketResult(null);
    
    if (!searchInput.trim()) return;
    
    // Add prefix if user forgets to type NXT-
    let code = searchInput.trim().toUpperCase();
    if (!code.startsWith('NXT-') && code.length === 6) {
      code = 'NXT-' + code;
    }
    
    const ticket = db.getTicketByCode(code);
    if (ticket) {
      setTicketResult(ticket);
    } else {
      setSearchError('Ticket not found. Please check the code and try again.');
    }
  };

  const handleAdmit = () => {
    if (ticketResult && ticketResult.status === 'valid') {
      const success = db.markTicketAsUsed(ticketResult.code);
      if (success) {
        // Update local state to reflect change instantly
        setTicketResult({ ...ticketResult, status: 'used' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#030305] text-white p-4 md:p-8 font-sans">
      <div className="max-w-2xl mx-auto pt-12 md:pt-20">
        
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-purple/20 flex items-center justify-center mb-6 text-purple">
            <ShieldAlert size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-2">Security Portal</h1>
          <p className="text-white/50 text-sm tracking-wider uppercase">Event Personnel Ticket Verification</p>
        </div>

        <div className="bento-card p-6 md:p-8 mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
              <input 
                type="text" 
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Enter 6-digit ticket code (e.g., NXT-8F2A)"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-electric transition-colors uppercase font-mono"
              />
            </div>
            <button 
              type="submit"
              className="px-8 py-4 rounded-xl bg-white text-black font-bold tracking-wider uppercase hover:bg-electric hover:text-white transition-colors duration-300"
            >
              Verify
            </button>
          </form>
          
          {searchError && (
            <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center gap-3">
              <XCircle size={20} />
              <span className="text-sm font-medium">{searchError}</span>
            </div>
          )}
        </div>

        {ticketResult && (
          <div className="bento-card p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-xs text-white/40 tracking-[0.2em] uppercase mb-1">Ticket Code</div>
                <div className="text-2xl font-bold font-mono tracking-wider">{ticketResult.code}</div>
              </div>
              
              {ticketResult.status === 'valid' ? (
                <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-500 text-sm font-bold tracking-wider uppercase flex items-center gap-2 border border-green-500/20">
                  <CheckCircle size={16} /> Valid
                </div>
              ) : (
                <div className="px-4 py-2 rounded-full bg-red-500/20 text-red-500 text-sm font-bold tracking-wider uppercase flex items-center gap-2 border border-red-500/20">
                  <XCircle size={16} /> Already Used
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-xs text-white/40 tracking-[0.2em] uppercase mb-1">Attendee Name</div>
                <div className="text-lg font-medium">{ticketResult.name}</div>
              </div>
              <div>
                <div className="text-xs text-white/40 tracking-[0.2em] uppercase mb-1">Email Address</div>
                <div className="text-lg font-medium text-white/80">{ticketResult.email}</div>
              </div>
              <div className="col-span-2">
                <div className="text-xs text-white/40 tracking-[0.2em] uppercase mb-1">Payment Ref</div>
                <div className="text-sm font-mono text-white/60">{ticketResult.reference}</div>
              </div>
            </div>

            {ticketResult.status === 'valid' && (
              <button 
                onClick={handleAdmit}
                className="w-full py-4 rounded-xl bg-electric text-white font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                Admit User
              </button>
            )}
            
            {ticketResult.status === 'used' && (
              <div className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white/50 text-center font-bold tracking-widest uppercase">
                Cannot Admit Again
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
