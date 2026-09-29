export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization?: string;
  topic: string;
  date: string;
  image: string;
  position?: string;
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
    date: "3rd-4th December 2026",
    image: "/isaac.png",
    position: "center top",
    socials: { twitter: "#", linkedin: "#", instagram: "#", facebook: "#" }
  },
  {
    id: "02",
    name: "Mountzion Uzu",
    role: "Social Media Manager & Brand Strategist",
    topic: "FROM CONTENT TO INFLUENCE: BUILDING YOUR DIGITAL BRAND.",
    date: "3rd-4th December 2026",
    image: "/mountzion.jpeg",
    position: "center top",
    socials: { twitter: "#", linkedin: "#", instagram: "#", facebook: "#" }
  },
  {
    id: "03",
    name: "Wesley Irabor",
    role: "Web3 Entrepreneur & Digital Economy Strategist",
    topic: "BEYOND CRYPTO: EXPLORING OPPORTUNITIES IN THE WEB3 ECONOMY",
    date: "3rd-4th December 2026",
    image: "/wesley.jpeg",
    position: "center top",
    socials: { twitter: "#", linkedin: "#", instagram: "#", facebook: "#" }
  },
  {
    id: "04",
    name: "Rahamon Osazele",
    role: "Software Developer & Web Engineer",
    topic: "FROM SCRATCH TO SCALE: HOW TO BUILD ON THE WEB.",
    date: "3rd-4th December 2026",
    image: "/rahamon.jpeg",
    position: "center center",
    socials: { twitter: "#", linkedin: "#", instagram: "#", facebook: "#" }
  },
  {
    id: "05",
    name: "Frank Precious",
    role: "Financial Trader & Forex Market Expert",
    organization: "Founder, Styrex Trading Universe",
    topic: "THE SIGNIFICANCE OF FOREX TRADING IN TODAY'S ECONOMY.",
    date: "3rd-4th December 2026",
    image: "/frank.jpeg",
    position: "center top",
    socials: { twitter: "#", linkedin: "#", instagram: "#", facebook: "#" }
  }
];
