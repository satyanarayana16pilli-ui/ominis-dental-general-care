import { Stethoscope, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-white">Omini's Dental</span>
                <span className="block text-xs text-teal-400">& General Care</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Trusted dental and general healthcare in Vizianagaram. Caring for your smile and
              wellbeing since 2017.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4 text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span>Main Road, Kamakshi Nagar, Vizianagaram Cantonment, Andhra Pradesh 535003</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+91 77992 49997</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>care@ominisdental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Omini's Dental &amp; General Care, Vizianagaram Cantonment. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
