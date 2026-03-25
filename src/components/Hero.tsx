import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Play, ArrowRight } from 'lucide-react';
import ThreeScene from './ThreeScene';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <ThreeScene />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-muted font-medium">
              Introducing SonicAura Pro
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter leading-none text-gradient">
              SOUND IN <br /> 3D SPACE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl text-lg text-muted font-light leading-relaxed"
          >
            Experience audio like never before. Our advanced spatial mapping technology 
            redefines the boundaries of high-fidelity sound.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <button className="px-8 py-4 bg-white text-black rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all group">
              Pre-order Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-all">
              <Play className="w-4 h-4 fill-current" />
              Watch Film
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Image Placeholder - Simulating the Headphone */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 relative w-full max-w-4xl aspect-[16/9] pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2070" 
          alt="SonicAura Headphones"
          className="w-full h-full object-contain mix-blend-lighten opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      </motion.div>
    </section>
  );
}
