import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    // Simulate submission — in production this would POST to an edge function
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  }

  const info = [
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Beside Sri Chaitanya Techno School, Kamakshi Nagar, Vizianagaram Cantonment, Andhra Pradesh 535003',
    },
    { icon: Phone, label: 'Call Us', value: '+91 77992 49997' },
    { icon: Mail, label: 'Email Us', value: 'care@ominisdental.com' },
    { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 10:00 AM – 8:00 PM' },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Book Your Appointment
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Have a question or want to schedule a visit? Reach out and our team will get back to you
            shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className="space-y-5">
            {info.map((i) => {
              const Icon = i.icon;
              return (
                <div
                  key={i.label}
                  className="flex items-start gap-4 bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50 hover:border-teal-500/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-teal-300 text-sm font-medium mb-1">{i.label}</div>
                    <div className="text-slate-200">{i.value}</div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-2xl overflow-hidden h-64 border border-slate-700/50">
              <iframe
                title="Clinic location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=83.395%2C18.085%2C83.435%2C18.125&layer=mapnik&marker=18.105%2C83.415"
                className="w-full h-full grayscale-[0.3]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Phone *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  placeholder="+91 77992 49997"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="mt-4 text-teal-300 text-sm text-center">
                Thank you! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-400 text-sm text-center">
                Please fill in all required fields.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
