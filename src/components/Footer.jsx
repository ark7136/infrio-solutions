import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 bg-dark text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="block transition-all cursor-pointer transform hover:scale-105 hover:opacity-100 opacity-80">
          <img alt="Infrio Solutions Small Logo" className="h-[105px] w-auto object-contain" src="/logo.png" />
        </Link>
        <div className="text-[11px] uppercase tracking-[0.4em] text-gray-600">
          © {new Date().getFullYear()} Infrio Solutions. Precision Built.
        </div>
        <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a href="https://www.fiverr.com/minalali" className="hover:text-white transition-colors">Fiverr</a>
          <a href="https://www.linkedin.com/in/kashifalinaqvi/" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/kashif_ali_naqvi/" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}


