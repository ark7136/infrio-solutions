import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full pt-24 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-none tracking-tighter mb-8 text-gradient uppercase">
            About Us
          </h1>
          <p className="text-xl text-gray-400 font-light tracking-wide leading-relaxed">
            We are Infrio Solutions, a digital agency dedicated to transforming businesses through robust IT infrastructure, cutting-edge software development, and award-winning graphic design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="glass-morphism p-8 md:p-12 rounded-2xl relative overflow-hidden">
             <div className="absolute -inset-4 bg-kinetic/10 rounded-xl blur-2xl"></div>
             <h2 className="relative z-10 font-display text-3xl font-bold uppercase mb-6 text-white">Our Mission</h2>
             <p className="relative z-10 text-gray-300 leading-relaxed">
               Our mission is to empower enterprises with technology that scales and design that captivates. We believe that true digital transformation requires a seamless blend of engineering precision and creative vision.
             </p>
          </div>
          <div className="glass-morphism p-8 md:p-12 rounded-2xl relative overflow-hidden">
             <div className="absolute -inset-4 bg-kinetic/10 rounded-xl blur-2xl"></div>
             <h2 className="relative z-10 font-display text-3xl font-bold uppercase mb-6 text-white">Our Vision</h2>
             <p className="relative z-10 text-gray-300 leading-relaxed">
               To be the premier partner for modern businesses seeking excellence across all facets of their digital presence—from the secure servers powering their operations to the striking visual identities representing their brand.
             </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <h3 className="text-xs uppercase tracking-[0.5em] text-kinetic mb-8 text-center">Why Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-white/10 p-8 rounded-xl bg-surface/50 hover:bg-surface transition-colors cursor-default">
              <span className="text-kinetic font-display text-4xl mb-4 block">01.</span>
              <h4 className="font-bold text-xl mb-2 text-white uppercase tracking-widest">End-to-End</h4>
              <p className="text-gray-400 text-sm leading-relaxed">We handle everything from your internal IT networks to your public-facing marketing materials, ensuring complete brand and technical cohesion.</p>
            </div>
            <div className="border border-white/10 p-8 rounded-xl bg-surface/50 hover:bg-surface transition-colors cursor-default">
              <span className="text-kinetic font-display text-4xl mb-4 block">02.</span>
              <h4 className="font-bold text-xl mb-2 text-white uppercase tracking-widest">Premium Aesthetics</h4>
              <p className="text-gray-400 text-sm leading-relaxed">We refuse to build mundane experiences. Our design philosophy centers around high-end, premium visuals that make your business stand out globally.</p>
            </div>
            <div className="border border-white/10 p-8 rounded-xl bg-surface/50 hover:bg-surface transition-colors cursor-default">
              <span className="text-kinetic font-display text-4xl mb-4 block">03.</span>
              <h4 className="font-bold text-xl mb-2 text-white uppercase tracking-widest">Scalable Tech</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Our software solutions are built on modern, cloud-native architectures designed to grow securely alongside your business needs.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-32">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase mb-8">Ready to Transform?</h2>
          <Link to="/contact" className="inline-block px-10 py-4 border border-kinetic text-kinetic uppercase tracking-[0.2em] text-xs font-bold hover:bg-kinetic hover:text-dark transition-all duration-500 rounded-full">
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  );
}




