import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <div className="text-xl font-display font-bold tracking-tighter">SONICAURA</div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
          <a href="#" className="hover:opacity-50 transition-opacity">Design</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Technology</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Specs</a>
        </div>
        <button className="text-xs uppercase tracking-widest font-bold border-b border-white pb-1 hover:opacity-50 transition-opacity">
          Shop
        </button>
      </nav>

      <Hero />
      
      <section className="py-32 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight">
              CRAFTED FOR <br /> THE DISCERNING.
            </h2>
            <p className="text-xl text-muted font-light leading-relaxed">
              Every curve, every material, and every component has been meticulously 
              engineered to provide the ultimate acoustic experience.
            </p>
            <div className="pt-4">
              <div className="h-px w-20 bg-white" />
            </div>
          </div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-square glass rounded-full flex items-center justify-center p-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000" 
                alt="Detail"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Features />

      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-4xl font-display font-bold tracking-tighter">SONICAURA</div>
          <div className="flex gap-12 text-muted text-sm font-light">
            <div className="space-y-4">
              <p className="text-white font-medium">Product</p>
              <p>Overview</p>
              <p>Design</p>
              <p>Audio</p>
            </div>
            <div className="space-y-4">
              <p className="text-white font-medium">Support</p>
              <p>Manuals</p>
              <p>Warranty</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="text-muted text-xs tracking-widest uppercase">
            © 2026 SonicAura Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
