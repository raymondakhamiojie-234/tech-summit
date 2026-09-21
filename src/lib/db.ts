export interface Ticket {
  code: string;
  name: string;
  email: string;
  reference: string;
  status: 'valid' | 'used';
  createdAt: string;
}

const STORAGE_KEY = 'nes_tickets';

export const db = {
  getTickets: (): Ticket[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },
  
  saveTicket: (ticket: Ticket) => {
    const tickets = db.getTickets();
    tickets.push(ticket);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  },
  
  getTicketByCode: (code: string): Ticket | undefined => {
    return db.getTickets().find(t => t.code.toUpperCase() === code.toUpperCase());
  },
  
  markTicketAsUsed: (code: string): boolean => {
    const tickets = db.getTickets();
    const index = tickets.findIndex(t => t.code.toUpperCase() === code.toUpperCase());
    
    if (index !== -1) {
      tickets[index].status = 'used';
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
      return true;
    }
    return false;
  }
};
