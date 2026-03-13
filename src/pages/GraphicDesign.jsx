import React from 'react';
import { Link } from 'react-router-dom';

export default function GraphicDesign() {
  const portfolios = [
    { title: "Brand Identity", desc: "Logos, typography, color palettes, and comprehensive brand guidelines that define your market presence." },
    { title: "UI / UX Design", desc: "User-centric SaaS interfaces and breathtaking website designs built for conversion and engagement." },
    { title: "Marketing Creatives", desc: "High-end social media assets, ad creatives, and digital collateral designed to stand out." },
    { title: "Motion & 3D", desc: "Premium animations, product renders, and kinetic typography for modern digital campaigns." }
  ];

  return (
    <div className="w-full pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-none tracking-tighter mb-8 text-gradient uppercase">
            Graphic Design
          </h1>
          <p className="text-xl text-gray-400 font-light tracking-wide leading-relaxed">
            Aesthetics are not an afterthought. We craft visually stunning, premium brand experiences that leave an unforgettable first impression.
          </p>
        </div>

        {/* Visual Showcase Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          <div className="aspect-[4/3] bg-surface/50 border border-white/5 rounded-2xl overflow-hidden relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-kinetic/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
             <div className="absolute inset-0 flex items-center justify-center p-12">
               <h3 className="font-display text-4xl text-white/20 uppercase font-bold tracking-widest group-hover:text-kinetic transition-colors duration-700 mix-blend-overlay">BRANDING</h3>
             </div>
          </div>
          <div className="aspect-[4/3] bg-surface/30 border border-white/5 rounded-2xl overflow-hidden relative group">
             <div className="absolute inset-0 bg-gradient-to-bl from-kinetic/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
             <div className="absolute inset-0 flex items-center justify-center p-12">
               <h3 className="font-display text-4xl text-white/20 uppercase font-bold tracking-widest group-hover:text-kinetic transition-colors duration-700 mix-blend-overlay">INTERFACE</h3>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {portfolios.map((item, idx) => (
            <div key={idx} className="border-t border-white/10 pt-6">
              <span className="text-kinetic font-display text-lg mb-2 block">0{idx + 1}.</span>
              <h3 className="font-bold text-lg mb-4 text-white uppercase tracking-widest">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-32">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase mb-8">Elevate Your Visuals</h2>
          <Link to="/contact" className="inline-block px-10 py-4 border border-kinetic text-kinetic uppercase tracking-[0.2em] text-xs font-bold hover:bg-kinetic hover:text-dark transition-all duration-500 rounded-full">
            Start a Design Project
          </Link>
        </div>
      </div>
    </div>
  );
}

// @trigger-coderabbit
