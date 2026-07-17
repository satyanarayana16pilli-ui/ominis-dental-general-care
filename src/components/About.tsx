import { Award, Users, CalendarCheck, HeartHandshake } from 'lucide-react';

const stats = [
  { icon: Users, value: '5,000+', label: 'Happy Patients' },
  { icon: CalendarCheck, value: '8+', label: 'Years Experience' },
  { icon: Award, value: '15+', label: 'Procedures Offered' },
  { icon: HeartHandshake, value: '100%', label: 'Patient Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Caring for Vizianagaram's Smiles & Health
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Omini's Dental &amp; General Care is a trusted healthcare clinic in Vizianagaram,
              Andhra Pradesh. We combine modern dental technology with compassionate, patient-first
              care to deliver outstanding outcomes for every person who walks through our doors.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our experienced team offers everything from routine cleanings and fillings to
              advanced root canals, implants, and general health consultations — all in a clean,
              comfortable, and welcoming environment.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex-1 min-w-[200px] bg-teal-50 rounded-xl p-4 border border-teal-100">
                <div className="font-bold text-slate-800">Dr. Kousalya Devi</div>
                <div className="text-sm text-teal-600 font-medium">Dental Surgeon</div>
              </div>
              <div className="flex-1 min-w-[200px] bg-teal-50 rounded-xl p-4 border border-teal-100">
                <div className="font-bold text-slate-800">Dr. O. Vinod Vamsi</div>
                <div className="text-sm text-teal-600 font-medium">General Medicine</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-800">{s.value}</div>
                      <div className="text-sm text-slate-500">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/dental_chair.png"
                alt="Omini's Dental clinic interior"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-teal-100 text-sm">Years of Trusted Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
