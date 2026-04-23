import { motion } from 'motion/react';

const collections = [
  {
    title: 'Designer Kurtis',
    subtitle: 'Heritage Reimagined',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop',
    size: 'large'
  },
  {
    title: 'Chic Western',
    subtitle: 'Modern Silhouettes',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1024&auto=format&fit=crop',
    size: 'small'
  },
  {
    title: 'Fusion Sets',
    subtitle: 'Best of Both Worlds',
    image: 'https://images.unsplash.com/photo-1617175548995-177bf0e6f51f?q=80&w=2070&auto=format&fit=crop',
    size: 'small'
  }
];

export default function Collections() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col, idx) => (
          <motion.div 
            key={col.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden cursor-pointer ${col.size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={col.image} 
                alt={col.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
            </div>
            <div className="absolute inset-0 bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/30" />
            
            <div className="absolute bottom-10 left-10 text-brand-paper">
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                {col.subtitle}
              </p>
              <h3 className="font-serif text-3xl group-hover:italic group-hover:pl-2 transition-all">
                {col.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
