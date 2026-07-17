import { useState, useEffect } from 'react';
import { Menu, X, Stethoscope, Phone } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div className="leading-tight">
            <span className={`block font-bold text-lg ${scrolled ? 'text-slate-800' : 'text-white'}`}>
              Omini's Dental
            </span>
            <span className={`block text-xs font-medium ${scrolled ? 'text-teal-600' : 'text-teal-200'}`}>
              & General Care
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-teal-500 ${
                  scrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+917799249997"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
            scrolled
              ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-md'
              : 'bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 border border-white/30'
          }`}
        >
          <Phone className="w-4 h-4" />
          Book Appointment
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-800' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-slate-700 font-medium hover:text-teal-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+917799249997"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 text-white font-semibold"
              >
                <Phone className="w-4 h-4" /> Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
