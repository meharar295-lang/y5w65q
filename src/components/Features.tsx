import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Cpu, Waves } from 'lucide-react';

const features = [
  {
    icon: Waves,
    title: "Spatial Audio",
    description: "Immerse yourself in a 360-degree soundstage that reacts to your every movement."
  },
  {
    icon: Cpu,
    title: "H1 Chipset",
    description: "Next-gen processing power delivering ultra-low latency and crystal clear resolution."
  },
  {
    icon: Zap,
    title: "40h Battery",
    description: "Go further with industry-leading battery life and rapid charging capabilities."
  },
  {
    icon: Shield,
    title: "Titanium Build",
    description: "Aerospace-grade materials for a lightweight yet indestructible frame."
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-6 group"
            >
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <feature.icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-display font-medium">{feature.title}</h3>
                <p className="text-muted font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
