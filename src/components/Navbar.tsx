import { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'New Arrivals', href: '#' },
    { name: 'Women', href: '#' },
    { name: 'Men', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'Heritage', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-paper/90 backdrop-blur-md py-4 border-b border-brand-primary/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-brand-primary"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Left Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 3).map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.1em] font-semibold">PRISH</span>
          <span className="text-[10px] uppercase tracking-[0.4em] -mt-1 opacity-60">Style Hub</span>
        </div>

        {/* Right Links - Desktop */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-8 mr-8">
            {navLinks.slice(3).map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <button className="hover:text-brand-accent transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden sm:block hover:text-brand-accent transition-colors">
            <Heart size={20} strokeWidth={1.5} />
          </button>
          <button className="relative hover:text-brand-accent transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-brand-primary text-brand-paper text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-paper z-[60] p-10 flex flex-col"
          >
            <button 
              className="self-end mb-12"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-serif text-4xl hover:italic hover:pl-4 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-10 border-t border-brand-primary/10">
              <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Support</p>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm">Contact Us</a>
                <a href="#" className="text-sm">Store Locator</a>
                <a href="#" className="text-sm">Shipping & Returns</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
