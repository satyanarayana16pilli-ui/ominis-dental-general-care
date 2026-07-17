import { useState, useEffect } from 'react';
import { Star, Quote, Send, Loader2, MessageSquarePlus } from 'lucide-react';
import { supabase, Review } from '../lib/supabase';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    setLoading(true);
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !feedback.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setSubmitting(true);
    setError('');

    const { error } = await supabase.from('reviews').insert({
      name: name.trim(),
      rating,
      feedback: feedback.trim(),
    });

    if (error) {
      setError('Could not submit your review. Please try again.');
    } else {
      setName('');
      setRating(5);
      setFeedback('');
      setShowForm(false);
      await loadReviews();
    }
    setSubmitting(false);
  }

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : '—';

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-slate-50 to-teal-50/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Patient Reviews
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">
            What Our Patients Say
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i <= Math.round(Number(avgRating))
                      ? 'text-amber-400 fill-amber-400'
                      : 'text-slate-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-slate-700 font-semibold">
              {avgRating} <span className="text-slate-400 font-normal">({reviews.length} reviews)</span>
            </span>
          </div>
        </div>

        {/* Write a review button */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors shadow-md"
          >
            <MessageSquarePlus className="w-5 h-5" />
            {showForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>

        {/* Review form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-slate-100 mb-12"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-5">Share Your Experience</h3>

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setRating(i)}
                    className="p-1"
                    aria-label={`${i} stars`}
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        i <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Feedback</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                placeholder="Tell us about your experience..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors disabled:opacity-60"
            >
              {submitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        )}

        {/* Reviews list */}
        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 text-teal-500 animate-spin" />
          </div>
        ) : reviews.length === 0 ? (
          <p className="text-center text-slate-500 py-12">
            No reviews yet. Be the first to share your experience!
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <Quote className="w-8 h-8 text-teal-100 mb-3" />
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i <= r.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">"{r.feedback}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-700">
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{r.name}</div>
                    <div className="text-xs text-slate-400">
                      {new Date(r.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
