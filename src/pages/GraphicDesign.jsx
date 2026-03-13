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
    <div className="w-full pt-28 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-none tracking-tighter mb-8 text-gradient uppercase">
            Graphic Design
          </h1>
          <p className="text-xl text-gray-400 font-light tracking-wide leading-relaxed">
            Aesthetics are not an afterthought. We craft visually stunning, premium brand experiences that leave an unforgettable first impression.
          </p>
        </div>

        {/* Visual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {/* Branding Card */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface group hover:border-kinetic/50 transition-colors duration-700">
            <div className="absolute inset-0 bg-gradient-to-tr from-kinetic/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="p-8 md:p-12 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-kinetic/10 border border-kinetic/20 flex items-center justify-center mb-6 group-hover:bg-kinetic/20 transition-colors">
                <svg className="w-8 h-8 text-kinetic" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <span className="text-xs uppercase tracking-widest text-kinetic font-bold mb-3">01 / Service</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">Brand Identity</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">We build brands from the ground up — custom logos, curated color systems, typography hierarchies, and full brand guidelines that speak your vision with precision and power.</p>
              <ul className="space-y-2 mt-auto">
                {['Logo Design', 'Color & Typography Systems', 'Brand Guidelines'].map(i => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-kinetic rounded-full inline-block"></span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interface Card */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface/50 group hover:border-kinetic/50 transition-colors duration-700">
            <div className="absolute inset-0 bg-gradient-to-bl from-kinetic/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="p-8 md:p-12 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-kinetic/10 border border-kinetic/20 flex items-center justify-center mb-6 group-hover:bg-kinetic/20 transition-colors">
                <svg className="w-8 h-8 text-kinetic" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <span className="text-xs uppercase tracking-widest text-kinetic font-bold mb-3">02 / Service</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white uppercase mb-4">UI / UX Design</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">Interfaces that are not only beautiful but convert. We craft end-to-end digital experiences — from wireframe to pixel-perfect UI — ensuring every interaction delights your users.</p>
              <ul className="space-y-2 mt-auto">
                {['Web & App Interfaces', 'Wireframing & Prototyping', 'Conversion-Focused UX'].map(i => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-kinetic rounded-full inline-block"></span>{i}
                  </li>
                ))}
              </ul>
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



