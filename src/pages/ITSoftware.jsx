import React from 'react';
import { Link } from 'react-router-dom';

export default function ITSoftware() {
  const services = [
    {
      title: "Network Infrastructure",
      description: "Design, deployment, and optimization of high-speed corporate networks ensuring 99.9% uptime and low latency.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Cyber Security",
      description: "Advanced threat detection, firewall configurations, and comprehensive security audits to protect your critical data.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    },
    {
      title: "Custom Software Development",
      description: "Tailored enterprise applications built on modern frameworks designed to solve specific operational bottlenecks.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud architectures (AWS/Azure) and continuous integration pipelines for rapid feature deployments.",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    }
  ];

  return (
    <div className="w-full pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-none tracking-tighter mb-8 text-gradient uppercase">
            IT &amp; Software
          </h1>
          <p className="text-xl text-gray-400 font-light tracking-wide leading-relaxed">
            Robust, secure, and scalable technology foundations for modern enterprises. From the hardware you run on to the custom software driving your core business logic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {services.map((svc, idx) => (
            <div key={idx} className="glass-morphism p-10 hover:border-kinetic/50 transition-colors group cursor-default">
              <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-kinetic" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={svc.icon}></path></svg>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase mb-4 text-white group-hover:text-kinetic transition-colors">{svc.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm tracking-wide">
                {svc.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative py-24 glass-morphism rounded-3xl text-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-kinetic/10 to-transparent pointer-events-none"></div>
          <h2 className="relative z-10 font-display text-3xl md:text-5xl font-bold uppercase mb-8">Discuss Your Tech Stack</h2>
          <Link to="/contact" className="relative z-10 inline-block px-10 py-4 border border-kinetic text-kinetic uppercase tracking-[0.2em] text-xs font-bold hover:bg-kinetic hover:text-dark transition-all duration-500 rounded-full bg-dark/50 hover:bg-kinetic">
             Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
