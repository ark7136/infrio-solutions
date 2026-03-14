import { useState, useEffect, useRef } from 'react';

const INITIAL_FORM = {
  name: '',
  email: '',
  service: 'it-software-infrastructure',
  details: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const timeoutsRef = useRef([]);

  // Cleanup pending timeouts on unmount
  useEffect(() => {
    const pendingTimeouts = timeoutsRef.current;
    return () => {
      pendingTimeouts.forEach(clearTimeout);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace the simulated block below with your actual API/email service call
    // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })

    // Simulate async submission (replace with real fetch/API call)
    const submitTimeout = setTimeout(() => {
      try {
        // Simulate success (replace this block with actual API response handling)
        const success = true;

        if (success) {
          setStatus('success');
          setForm(INITIAL_FORM);
          const resetTimeout = setTimeout(() => setStatus('idle'), 4000);
          timeoutsRef.current.push(resetTimeout);
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    }, 1000);
    timeoutsRef.current.push(submitTimeout);
  };

  return (
    <div className="w-full pt-48 pb-24 min-h-screen flex flex-col justify-center">
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
             
             <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
               <div className="flex flex-col gap-2">
                 <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-gray-400 font-bold">Your Name</label>
                 <input
                   id="contact-name"
                   name="name"
                   type="text"
                   required
                   value={form.name}
                   onChange={handleChange}
                   className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-kinetic focus:bg-white/10 transition-all"
                   placeholder="John Doe"
                 />
               </div>
               
               <div className="flex flex-col gap-2">
                 <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                 <input
                   id="contact-email"
                   name="email"
                   type="email"
                   required
                   value={form.email}
                   onChange={handleChange}
                   className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-kinetic focus:bg-white/10 transition-all"
                   placeholder="name@company.com"
                 />
               </div>

               <div className="flex flex-col gap-2">
                 <label htmlFor="contact-service" className="text-xs uppercase tracking-widest text-gray-400 font-bold">Service Required</label>
                 <select
                   id="contact-service"
                   name="service"
                   value={form.service}
                   onChange={handleChange}
                   className="bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-kinetic focus:bg-dark transition-all appearance-none cursor-pointer"
                 >
                   <option value="it-software-infrastructure">IT & Software Infrastructure</option>
                   <option value="graphic-design-branding">Graphic Design & Branding</option>
                   <option value="digital-transformation">Full Digital Transformation</option>
                 </select>
               </div>
               
               <div className="flex flex-col gap-2">
                 <label htmlFor="contact-details" className="text-xs uppercase tracking-widest text-gray-400 font-bold">Project Details</label>
                 <textarea
                   id="contact-details"
                   name="details"
                   rows="4"
                   required
                   value={form.details}
                   onChange={handleChange}
                   className="bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-kinetic focus:bg-white/10 transition-all resize-none"
                   placeholder="Tell us about your next project..."
                 ></textarea>
               </div>
               
               <button
                 type="submit"
                 disabled={status === 'sending'}
                 className="mt-4 px-10 py-5 bg-kinetic text-dark uppercase tracking-[0.2em] text-sm font-bold hover:bg-white hover:text-dark transition-all duration-300 rounded-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
               </button>

               {status === 'success' && (
                 <p className="text-center text-green-400 text-sm font-medium uppercase tracking-widest">
                   Message sent successfully!
                 </p>
               )}
               {status === 'error' && (
                 <p className="text-center text-red-400 text-sm font-medium uppercase tracking-widest">
                   Something went wrong. Please try again.
                 </p>
               )}
             </form>
          </div>

        </div>
      </div>
    </div>
  );
}
