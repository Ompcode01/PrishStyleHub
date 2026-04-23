import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
            alt="Main Fashion Hero" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-brand-primary/20 bg-gradient-to-t from-brand-paper/40 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-xl">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xs uppercase tracking-[0.5em] mb-6 font-medium"
          >
            Spring Summer 2026
          </motion.p>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="heading-display mb-10"
          >
            Western <br />
            <span className="italic">Meets Kurti</span>
          </motion.h1>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <button className="btn-luxury group flex items-center">
              <span>Explore Collection</span>
              <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-3 text-sm uppercase tracking-widest font-medium border-b border-brand-primary/20 hover:border-brand-primary transition-colors">
              Watch Film
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-40 [writing-mode:vertical-rl]">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary/40 to-transparent" />
      </motion.div>
    </section>
  );
}
