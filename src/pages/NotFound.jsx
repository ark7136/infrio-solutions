import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-6">
        <span className="text-kinetic font-display text-9xl md:text-[12rem] font-bold leading-none">404</span>
        <h1 className="font-display text-3xl md:text-5xl font-bold uppercase mt-4 mb-6">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-10 py-4 border border-kinetic text-kinetic uppercase tracking-[0.2em] text-xs font-bold hover:bg-kinetic hover:text-dark transition-all duration-500 rounded-full"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
