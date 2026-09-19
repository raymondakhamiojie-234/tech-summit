export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization?: string;
  topic: string;
  date: string;
  image: string;
  socials: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export const speakers: Speaker[] = [
  {
    id: "01",
    name: "Isaac Igba",
    role: "Digital Security & Technology Lead",
    organization: "Founder, Ancientech Groups",
    topic: "CYBERSECURITY & AI: PROTECTING YOURSELF IN AN AI-POWERED WORLD.",
    date: "3rd–4th December 2026",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600",
    socials: { twitter: "#", linkedin: "#", instagram: "#", facebook: "#" }
  },
  {
    id: "02",
    name: "Mountzion Uzu",
    role: "Social Media Manager & Brand Strategist",
    topic: "FROM CONTENT TO INFLUENCE: BUILDING YOUR DIGITAL BRAND.",
    date: "3rd–4th December 2026",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    socials: { twitter: "#", linkedin: "#", instagram: "#", facebook: "#" }
  },
  {
    id: "03",
    name: "Wesley Irabor",
    role: "Web3 Entrepreneur & Digital Economy Strategist",
    topic: "BEYOND CRYPTO: EXPLORING OPPORTUNITIES IN THE WEB3 ECONOMY",
    date: "3rd–4th December 2026",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
    socials: { twitter: "#", linkedin: "#", instagram: "#", facebook: "#" }
  },
  {
    id: "04",
    name: "Rahamon Osazele",
    role: "Software Developer & Web Engineer",
    topic: "FROM SCRATCH TO SCALE: HOW TO BUILD ON THE WEB.",
    date: "3rd–4th December 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    socials: { twitter: "#", linkedin: "#", instagram: "#", facebook: "#" }
  },
  {
    id: "05",
    name: "Frank Precious",
    role: "Financial Trader & Forex Market Expert",
    organization: "Founder, Styrex Trading Universe",
    topic: "THE SIGNIFICANCE OF FOREX TRADING IN TODAY'S ECONOMY.",
    date: "3rd–4th December 2026",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    socials: { twitter: "#", linkedin: "#", instagram: "#", facebook: "#" }
  }
];
