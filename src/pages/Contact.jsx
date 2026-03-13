import React from 'react';

export default function Contact() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-none tracking-tighter mb-8 uppercase text-white">
              Let's <span className="text-kinetic text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-gray-400 font-light tracking-wide leading-relaxed mb-12">
              Ready to upgrade your tech infrastructure or elevate your brand aesthetics? Reach out to schedule a discovery call with our experts.
            </p>

            <div className="space-y-8">
              <div className="glass-morphism p-6 rounded-xl border border-white/5 flex flex-col items-start">
                <span className="text-kinetic uppercase text-xs tracking-widest font-bold mb-2">Location</span>
                <p className="text-xl text-white font-light">65 Mustafa Town, Lahore</p>
              </div>
              
              <div className="glass-morphism p-6 rounded-xl border border-white/5 flex flex-col items-start">
                <span className="text-kinetic uppercase text-xs tracking-widest font-bold mb-2">Phone</span>
                <a href="tel:+923367326412" className="text-xl text-white font-light hover:text-kinetic transition-colors">+92 3367326412</a>
              </div>
              
              <div className="glass-morphism p-6 rounded-xl border border-white/5 flex flex-col items-start">
                <span className="text-kinetic uppercase text-xs tracking-widest font-bold mb-2">Email</span>
                <a href="mailto:Kashifalidesigns@gmail.com" className="text-xl text-white font-light hover:text-kinetic transition-colors">Kashifalidesigns@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="glass-morphism p-10 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-kinetic/10 rounded-full blur-[100px] pointer-events-none"></div>
             
             <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
               <div className="flex flex-col gap-2">
                 <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Your Name</label>
                 <input type="text" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-kinetic focus:bg-white/10 transition-all" placeholder="John Doe" />
               </div>
               
               <div className="flex flex-col gap-2">
                 <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                 <input type="email" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-kinetic focus:bg-white/10 transition-all" placeholder="name@company.com" />
               </div>

               <div className="flex flex-col gap-2">
                 <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Service Required</label>
                 <select className="bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-kinetic focus:bg-dark transition-all appearance-none cursor-pointer">
                   <option>IT &amp; Software Infrastructure</option>
                   <option>Graphic Design &amp; Branding</option>
                   <option>Full Digital Transformation</option>
                 </select>
               </div>
               
               <div className="flex flex-col gap-2">
                 <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Project Details</label>
                 <textarea rows="4" className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-kinetic focus:bg-white/10 transition-all resize-none" placeholder="Tell us about your next project..."></textarea>
               </div>
               
               <button className="mt-4 px-10 py-5 bg-kinetic text-dark uppercase tracking-[0.2em] text-sm font-bold hover:bg-white hover:text-dark transition-all duration-300 rounded-lg w-full">
                 Send Inquiry
               </button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
}





