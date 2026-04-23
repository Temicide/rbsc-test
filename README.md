# Thai Horse Track Archetype Quiz

A Thai-first entertainment quiz that tells users what kind of person they are in a horse race track community setting. It is built for fun, friend-group sharing, and local community flavor. It is not a scientific, clinical, or psychological assessment.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Local TypeScript data files
- Framer Motion for small page/quiz transitions
- No database, no auth, no backend service

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## App Structure

- `app/page.tsx` - minimal Thai landing page, animated quiz preview, archetype preview, and entertainment disclaimer
- `app/quiz/page.tsx` - one-question-at-a-time quiz route
- `app/result/page.tsx` - deterministic result route
- `components/quiz-client.tsx` - client-side quiz state and navigation
- `components/result-client.tsx` - result decoding and display
- `data/quiz.ts` - Thai situational questions and answer weights
- `data/archetypes.ts` - result archetypes, compatible matches, and target profiles
- `lib/scoring.ts` - pure scoring, result mapping, answer encoding, and match selection

## Scoring Logic

Each answer contributes weighted points to hidden community traits:

- social boldness
- friend-group loyalty
- chaos energy
- humor style
- fan/idol energy
- observer vs initiator energy

When the quiz is completed, the app sums the selected answer weights into a trait profile. It then compares that profile with each archetype target profile using a deterministic distance calculation. The closest archetype wins. Ties are resolved consistently by Thai name sorting, so the same answers always produce the same result.

Compatible friend-group matches are computed from the same trait profile plus each archetype's curated compatible archetype IDs. This keeps matches explainable and stable without making results feel random.

## Content Notes

All user-facing content is Thai-first and intentionally playful. Questions are situational rather than abstract self-ratings, and each question has exactly four answer choices representing distinct behavior styles.

The quiz should stay entertainment-focused. Avoid adding pseudo-scientific claims or clinical framing when editing copy or results.

## Design Direction

The current UI is a quick, minimal race-day quiz: warm white surfaces, chestnut-brown actions, soft track-tan lines, small green accents, and gentle Framer Motion transitions. Keep future changes short, cute, mobile-first, and focused on getting users into the quiz quickly.
