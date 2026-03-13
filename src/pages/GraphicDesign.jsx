import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    num: '01',
    title: 'Brand Identity',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    desc: 'We build brands from the ground up — custom logos, curated color systems, typography hierarchies, and full brand guidelines that speak your vision with precision and power.',
    bullets: ['Logo Design', 'Color & Typography Systems', 'Brand Guidelines']
  },
  {
    num: '02',
    title: 'UI / UX Design',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    desc: 'Interfaces that are not only beautiful but convert. We craft end-to-end digital experiences — from wireframe to pixel-perfect UI — ensuring every interaction delights your users.',
    bullets: ['Web & App Interfaces', 'Wireframing & Prototyping', 'Conversion-Focused UX']
  },
  {
    num: '03',
    title: 'Marketing Creatives',
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
    desc: 'High-impact social media graphics, digital ad campaigns, flyers, and branded collateral designed to capture attention and drive measurable results across every channel.',
    bullets: ['Social Media Assets', 'Ad Creatives & Banners', 'Print & Digital Collateral']
  },
  {
    num: '04',
    title: 'Motion & 3D',
    icon: 'M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
    desc: 'Premium motion graphics, animated logos, 3D product renders, and kinetic typography that bring your brand to life across modern digital platforms and video campaigns.',
    bullets: ['Animated Logos & Intros', '3D Product Renders', 'Kinetic Typography']
  }
];

export default function GraphicDesign() {
  return (
    <div className="w-full pt-24 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-none tracking-tighter mb-8 text-gradient uppercase">
            Graphic Design
          </h1>
          <p className="text-xl text-gray-400 font-light tracking-wide leading-relaxed">
            Aesthetics are not an afterthought. We craft visually stunning, premium brand experiences that leave an unforgettable first impression.
          </p>
        </div>

        {/* 4 Consistent Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((svc) => (
            <div key={svc.num} className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface group hover:border-kinetic/50 transition-colors duration-700">
              <div className="absolute inset-0 bg-gradient-to-tr from-kinetic/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-kinetic/10 border border-kinetic/20 flex items-center justify-center mb-6 group-hover:bg-kinetic/20 transition-colors">
                  <svg className="w-7 h-7 text-kinetic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={svc.icon} />
                  </svg>
                </div>
                <span className="text-xs uppercase tracking-widest text-kinetic font-bold mb-3">{svc.num} / Service</span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white uppercase mb-4">{svc.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm mb-6">{svc.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {svc.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 bg-kinetic rounded-full inline-block flex-shrink-0"></span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase mb-8">Elevate Your Visuals</h2>
          <Link to="/contact" className="inline-block px-10 py-4 border border-kinetic text-kinetic uppercase tracking-[0.2em] text-xs font-bold hover:bg-kinetic hover:text-dark transition-all duration-500 rounded-full">
            Start a Design Project
          </Link>
        </div>
      </div>
    </div>
  );
}

