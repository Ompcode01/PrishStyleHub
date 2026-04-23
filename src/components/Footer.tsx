import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-paper pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="font-serif text-3xl tracking-[0.1em] font-semibold">PRISH</span>
              <span className="text-[10px] uppercase tracking-[0.4em] -mt-1 opacity-60">Style Hub</span>
            </div>
            <p className="text-sm opacity-60 leading-relaxed mb-8 max-w-xs font-light">
              Designing the future of fashion by honoring the elegance of the past. Sustainable, ethical, and eternally stylish.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-brand-accent transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Twitter size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10 opacity-40">The Boutique</h4>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li><a href="#" className="hover:pl-2 transition-all hover:text-brand-accent">New Arrivals</a></li>
              <li><a href="#" className="hover:pl-2 transition-all hover:text-brand-accent">Best Sellers</a></li>
              <li><a href="#" className="hover:pl-2 transition-all hover:text-brand-accent">Men's Edit</a></li>
              <li><a href="#" className="hover:pl-2 transition-all hover:text-brand-accent">Women's Edit</a></li>
              <li><a href="#" className="hover:pl-2 transition-all hover:text-brand-accent">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10 opacity-40">Client Service</h4>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li><a href="#" className="hover:pl-2 transition-all hover:text-brand-accent">Contact Us</a></li>
              <li><a href="#" className="hover:pl-2 transition-all hover:text-brand-accent">Shipping Policy</a></li>
              <li><a href="#" className="hover:pl-2 transition-all hover:text-brand-accent">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:pl-2 transition-all hover:text-brand-accent">Size Guide</a></li>
              <li><a href="#" className="hover:pl-2 transition-all hover:text-brand-accent">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10 opacity-40">Newsletter</h4>
            <p className="text-sm font-light opacity-60 mb-6">Join our style inner circle for exclusive previews and offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-brand-paper/20 py-4 text-xs font-medium focus:outline-none focus:border-brand-accent transition-colors pr-10 uppercase tracking-widest placeholder:text-brand-paper/20"
              />
              <button className="absolute right-0 bottom-4 hover:text-brand-accent transition-colors">
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-paper/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest opacity-40 font-medium">
            © 2026 PRISHSTYLEHUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-40 font-medium">
            <a href="#" className="hover:text-brand-accent">Terms</a>
            <a href="#" className="hover:text-brand-accent">Privacy</a>
            <a href="#" className="hover:text-brand-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
