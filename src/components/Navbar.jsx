import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'IT & Software', path: '/it-software' },
    { name: 'Graphic Design', path: '/graphic-design' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-2 flex justify-between items-center bg-dark/80 backdrop-blur-md border-b border-white/5 text-white">
      <Link to="/" className="block transform transition-transform hover:scale-105">
        <img alt="Infrio Solutions Logo" className="h-14 w-auto object-contain" src="/logo.png" />
      </Link>
      
      <div className="hidden md:flex space-x-12 text-sm font-medium tracking-widest uppercase">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`transition-colors hover:text-kinetic ${location.pathname === item.path ? 'text-kinetic border-b border-kinetic pb-1' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-md border-b border-white/10 flex flex-col items-center py-8 space-y-6 md:hidden">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => setIsOpen(false)}
              className={`text-lg uppercase tracking-widest ${location.pathname === item.path ? 'text-kinetic' : 'text-gray-300'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}


