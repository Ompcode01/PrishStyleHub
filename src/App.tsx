import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import FeaturedProducts from './components/FeaturedProducts';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden">
      {/* Page Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Animated Marquee - Branding */}
        <div className="bg-brand-primary py-8 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex whitespace-nowrap gap-20 items-center opacity-80"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-brand-paper text-[10px] uppercase font-bold tracking-[1em]">
                PRISH STYLE HUB • DESIGNER KURTIS • CHIC WESTERN WEAR • FUSION FASHION • ARTISAN CRAFTED
              </span>
            ))}
          </motion.div>
        </div>

        <Collections />
        <FeaturedProducts />
        <BrandStory />
        
        {/* Instagram/Social Grid Teaser */}
        <section className="py-24 border-t border-brand-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] uppercase tracking-[0.5em] mb-12 opacity-50">Join our world @prishstylehub</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1">
              {[
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1529133039943-085248165b3d?q=80&w=1024&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1024&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1024&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1024&auto=format&fit=crop"
              ].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden bg-brand-paper">
                  <img 
                    src={src} 
                    alt={`Social ${i}`} 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:opacity-80 grayscale hover:grayscale-0 cursor-crosshair"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
