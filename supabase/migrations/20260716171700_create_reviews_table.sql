
/*
# Create reviews table for Omini's Dental & General Care

1. New Tables
   - `reviews`
     - `id` (uuid, primary key)
     - `name` (text, not null) — patient name
     - `rating` (integer, 1-5, not null) — star rating
     - `feedback` (text, not null) — review text
     - `created_at` (timestamp)

2. Security
   - Enable RLS on `reviews`.
   - Allow anon + authenticated to SELECT (public reviews).
   - Allow anon + authenticated to INSERT (anyone can post a review).
   - No UPDATE/DELETE from the client side.
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  feedback text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reviews" ON reviews;
CREATE POLICY "anon_select_reviews" ON reviews FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reviews" ON reviews;
CREATE POLICY "anon_insert_reviews" ON reviews FOR INSERT
  TO anon, authenticated WITH CHECK (true);
