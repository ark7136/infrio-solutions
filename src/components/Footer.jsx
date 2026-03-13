import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="h-10 opacity-70 grayscale hover:grayscale-0 transition-all cursor-pointer">
          <img alt="Infrio Solutions Small Logo" className="h-full w-auto object-contain" src="/logo.png" />
        </Link>
        <div className="text-[10px] uppercase tracking-[0.4em] text-gray-600">
          © {new Date().getFullYear()} Infrio Solutions. Precision Built.
        </div>
        <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
