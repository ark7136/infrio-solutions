import { Link } from 'react-router-dom';

export default function CTAButton({ to, href, children, className = '', ...props }) {
  const baseClasses =
    'inline-block px-10 py-4 border border-kinetic text-kinetic uppercase tracking-[0.2em] text-xs font-bold hover:bg-kinetic hover:text-dark transition-all duration-500 rounded-full';

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href || '#vision'} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </a>
  );
}
