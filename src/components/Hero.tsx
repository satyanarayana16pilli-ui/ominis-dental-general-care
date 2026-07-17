import { ChevronDown, Star, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/dental_chair.png"
          alt="Modern dental clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 backdrop-blur-sm mb-6 animate-fade-in">
          <Star className="w-4 h-4 text-teal-300 fill-teal-300" />
          <span className="text-teal-100 text-sm font-medium">Trusted Dental Care in Vizianagaram</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Your Smile Deserves
          <span className="block bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent">
            Gentle Expert Care
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Comprehensive dental and general healthcare services under one roof. Modern equipment,
          experienced professionals, and a warm, welcoming environment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-teal-500 text-white font-semibold text-lg hover:bg-teal-400 shadow-xl shadow-teal-500/30 transition-all hover:scale-105"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
          >
            Explore Services
          </a>
        </div>

        {/* Quick info badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-200">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-teal-300" />
            <span className="text-sm">Kamakshi Nagar, Vizianagaram 535003</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-teal-300" />
            <span className="text-sm">Mon–Sat: 10:00 AM – 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}
