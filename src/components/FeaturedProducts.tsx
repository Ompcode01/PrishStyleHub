import { motion } from 'motion/react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Floral Anarkali Kurti',
    price: 89.00,
    category: 'Kurtis',
    image: 'https://images.unsplash.com/photo-1609357940147-a73EF789de23?q=80&w=1974&auto=format&fit=crop',
    tag: 'Trending'
  },
  {
    id: '2',
    name: 'Satin Wrap Dress',
    price: 120.00,
    category: 'Western',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2040&auto=format&fit=crop',
    tag: 'New'
  },
  {
    id: '3',
    name: 'Straight Slit Kurti',
    price: 65.00,
    category: 'Kurtis',
    image: 'https://images.unsplash.com/photo-1617175548995-177bf0e6f51f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Linen Co-ord Set',
    price: 150.00,
    category: 'Western',
    image: 'https://images.unsplash.com/photo-1539109132314-d49c02d82267?q=80&w=2040&auto=format&fit=crop',
    tag: 'Exclusive'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-6 bg-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] mb-4 opacity-50">Curated Choice</p>
            <h2 className="font-serif text-4xl md:text-5xl">Our Featured Edit</h2>
          </div>
          <button className="text-xs uppercase tracking-widest border-b border-brand-primary/20 pb-1 hover:border-brand-primary transition-colors">
            View All Series
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-brand-paper">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-card-image"
                />
                
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-brand-primary text-brand-paper text-[9px] px-3 py-1 uppercase tracking-widest font-medium">
                    {product.tag}
                  </span>
                )}

                {/* Actions Overlay */}
                <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 gap-2 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="w-full bg-brand-paper text-brand-primary py-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-accent hover:text-brand-paper transition-colors shadow-2xl">
                    <ShoppingBag size={14} />
                    Add to Suitcase
                  </button>
                  <button className="w-full bg-brand-paper/80 backdrop-blur-md text-brand-primary py-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-paper transition-colors">
                    Quick View
                  </button>
                </div>
                
                <button className="absolute top-4 right-4 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 scale-75 group-hover:scale-100 transition-all">
                  <Heart size={20} />
                </button>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-40 mb-1">{product.category}</p>
                <h4 className="text-sm font-medium tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                  {product.name}
                </h4>
                <p className="text-sm font-light opacity-80">
                  ${product.price ? product.price.toFixed(2) : "0.00"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
