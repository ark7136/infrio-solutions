import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark pointer-events-none"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-8xl lg:text-[7.5rem] font-bold leading-none tracking-tighter mb-8 text-gradient uppercase">
            Infrio<br/>Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light tracking-wide leading-relaxed">
            Empowering businesses with modern IT services, high-performance software development, and visually striking graphic design.
          </p>
          <div className="mt-12">
            <a href="#vision" className="inline-block px-10 py-4 border border-kinetic text-kinetic uppercase tracking-[0.2em] text-xs font-bold hover:bg-kinetic hover:text-dark transition-all duration-500 rounded-full">
              Explore the Ecosystem
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
          <span className="text-[10px] uppercase tracking-[0.3em] mb-2 pointer-events-none">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-kinetic to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="relative py-32 md:py-64 overflow-hidden bg-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="parallax-sculpt">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 uppercase leading-tight">
                Innovation <span className="text-kinetic">Delivered</span>.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                We bridge the gap between technical infrastructure and premium aesthetics. Providing comprehensive IT solutions and software engineering for modern enterprises.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-kinetic font-display text-xl">01</span>
                  <p className="text-gray-400 uppercase tracking-widest text-sm pt-1">IT Services & Support</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-kinetic font-display text-xl">02</span>
                  <p className="text-gray-400 uppercase tracking-widest text-sm pt-1">Software System Integration</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-kinetic font-display text-xl">03</span>
                  <p className="text-gray-400 uppercase tracking-widest text-sm pt-1">Premium Graphic Design</p>
                </li>
              </ul>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-kinetic/20 rounded-xl blur-2xl group-hover:bg-kinetic/30 transition duration-1000 pointer-events-none"></div>
              <div className="relative glass-morphism rounded-2xl p-4 overflow-hidden aspect-square flex items-center justify-center">
                <div className="w-full h-full border border-white/10 rounded-lg flex items-center justify-center bg-black/50 overflow-hidden pointer-events-none">
                  <div className="relative w-48 h-48 border-[2px] border-kinetic/50 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-kinetic rounded-full shadow-[0_0_15px_#f97316]"></div>
                  </div>
                  <div className="absolute font-display text-7xl md:text-8xl opacity-10">INFRIO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-surface border-y border-white/5" id="services">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.5em] text-kinetic mb-4">Our Expertise</h3>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">End-to-End<br/>Solutions</h2>
            </div>
            <div className="max-w-md text-gray-500 text-sm leading-relaxed uppercase tracking-widest">
              Comprehensive services spanning infrastructure, software development, and brand identity.
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-1">
            <Link to="/it-software" className="glass-morphism p-12 hover:bg-kinetic group transition-all duration-700 cursor-pointer block">
              <div className="h-12 w-12 border border-white/20 mb-8 flex items-center justify-center group-hover:border-dark transition-colors">
                <svg className="w-6 h-6 group-hover:text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h4 className="font-display text-xl font-bold mb-4 uppercase group-hover:text-dark">IT Services</h4>
              <p className="text-gray-400 text-sm group-hover:text-dark/80 transition-colors">Robust network infrastructure, system security, and reliable operational support.</p>
            </Link>

            <Link to="/it-software" className="glass-morphism p-12 hover:bg-kinetic group transition-all duration-700 cursor-pointer block">
              <div className="h-12 w-12 border border-white/20 mb-8 flex items-center justify-center group-hover:border-dark transition-colors">
                <svg className="w-6 h-6 group-hover:text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path></svg>
              </div>
              <h4 className="font-display text-xl font-bold mb-4 uppercase group-hover:text-dark">Software Dev</h4>
              <p className="text-gray-400 text-sm group-hover:text-dark/80 transition-colors">Custom applications, scalable web platforms, and tailored enterprise software solutions.</p>
            </Link>

            <Link to="/graphic-design" className="glass-morphism p-12 hover:bg-kinetic group transition-all duration-700 cursor-pointer block">
              <div className="h-12 w-12 border border-white/20 mb-8 flex items-center justify-center group-hover:border-dark transition-colors">
                <svg className="w-6 h-6 group-hover:text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="font-display text-xl font-bold mb-4 uppercase group-hover:text-dark">Graphic Design</h4>
              <p className="text-gray-400 text-sm group-hover:text-dark/80 transition-colors">Striking brand identities, beautiful UI/UX, and marketing creatives that leave a lasting impact.</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-48 relative overflow-hidden" id="contact-cta">
        <div className="absolute inset-0 bg-kinetic/5 opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mb-12 tracking-tighter">
            Get In <br/> <span className="text-kinetic italic">Touch</span>
          </h2>
          <div className="mt-12">
            <Link to="/contact" className="inline-block px-10 py-4 border border-kinetic text-kinetic uppercase tracking-[0.2em] text-xs font-bold hover:bg-kinetic hover:text-dark transition-all duration-500 rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



