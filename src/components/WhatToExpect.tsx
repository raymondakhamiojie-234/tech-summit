
import { motion } from 'framer-motion';
import { Shield, Brain, Code2, Cpu, Smartphone, TrendingUp } from 'lucide-react';

const topics = [
  {
    title: "CYBERSECURITY",
    desc: "Protect yourself in an increasingly AI-powered world.",
    icon: <Shield className="w-8 h-8 text-electric" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "ARTIFICIAL INTELLIGENCE",
    desc: "Understand how AI is transforming work and technology.",
    icon: <Brain className="w-8 h-8 text-purple" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "WEB DEVELOPMENT",
    desc: "Learn how digital products are built from scratch and scaled.",
    icon: <Code2 className="w-8 h-8 text-electric" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "WEB3",
    desc: "Explore emerging opportunities within the Web3 economy.",
    icon: <Cpu className="w-8 h-8 text-purple" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "SOCIAL MEDIA",
    desc: "Learn how to build influence and digital brands.",
    icon: <Smartphone className="w-8 h-8 text-electric" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "FOREX & MARKETS",
    desc: "Understand the role of financial markets in today's economy.",
    icon: <TrendingUp className="w-8 h-8 text-purple" />,
    colSpan: "md:col-span-3",
  }
];

const WhatToExpect = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">WHAT TO EXPECT</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-purple" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bento-card p-8 flex flex-col items-start ${topic.colSpan} group hover:-translate-y-2 transition-transform duration-500`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {topic.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{topic.title}</h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">{topic.desc}</p>
              
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
