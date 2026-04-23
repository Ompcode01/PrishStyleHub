import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] relative z-10 overflow-hidden rounded-tr-[100px] border-[12px] border-brand-paper shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
              alt="Artisan Craftsmanship" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent/10 -z-10 rounded-full blur-3xl" />
          <div className="absolute -top-10 -left-10 text-[180px] font-serif italic text-brand-primary/[0.03] select-none pointer-events-none">
            Est.
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.5em] mb-8 font-medium opacity-60">The Narrative</p>
          <h2 className="heading-display mb-10">
            Blending <br />
            <span className="italic">Chic & Tradition</span>
          </h2>
          <div className="space-y-6 text-brand-primary/80 leading-relaxed font-light">
            <p>
              PrishStyleHub is where the contemporary edge of Western silhouettes meets the timeless grace of traditional Kurtis. Our fusion philosophy celebrates the modern woman who values both her roots and her global outlook.
            </p>
            <p>
              From hand-block printed Kurtis to structured Western coords, each piece is designed to transit effortlessly from dawn to dusk. We curate styles that speak the language of modern elegance.
            </p>
            <p className="font-serif italic text-lg text-brand-primary">
              "Redefining the fusion of Western trends and artisan embroidery."
            </p>
          </div>
          <button className="mt-12 btn-luxury">
            Our Heritage
          </button>
        </motion.div>
      </div>
    </section>
  );
}
