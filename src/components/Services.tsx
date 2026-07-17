import {
  Smile,
  Stethoscope,
  Syringe,
  Microscope,
  HeartPulse,
  Bone,
  ShieldPlus,
  Activity,
} from 'lucide-react';

const services = [
  {
    icon: Smile,
    title: 'Teeth Cleaning & Polishing',
    desc: 'Professional scaling and polishing to keep your teeth healthy and bright.',
  },
  {
    icon: Syringe,
    title: 'Root Canal Treatment',
    desc: 'Painless root canal therapy using modern rotary endodontic technology.',
  },
  {
    icon: Bone,
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement solutions that look and feel natural.',
  },
  {
    icon: ShieldPlus,
    title: 'Braces & Aligners',
    desc: 'Orthodontic treatments including traditional braces and clear aligners.',
  },
  {
    icon: Microscope,
    title: 'Oral Surgery',
    desc: 'Safe surgical procedures including extractions and wisdom tooth removal.',
  },
  {
    icon: HeartPulse,
    title: 'General Consultation',
    desc: 'Comprehensive health check-ups and general medical consultations.',
  },
  {
    icon: Activity,
    title: 'Cosmetic Dentistry',
    desc: 'Veneers, teeth whitening, and smile makeovers tailored to you.',
  },
  {
    icon: Stethoscope,
    title: "Children's Dentistry",
    desc: 'Gentle dental care designed especially for our youngest patients.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">
            Complete Care Under One Roof
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            From routine check-ups to advanced dental procedures, we offer a full range of
            services to keep you and your family healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-slate-100 hover:border-teal-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-50 group-hover:bg-teal-500 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
