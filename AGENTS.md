# AGENTS.md

## Product intent
This project is a Thai-first entertainment quiz website for community archetypes at a horse race track. It is not a scientific personality test. Optimize for fun, coherence, shareability, mobile UX, and maintainability.

## Product principles
- Thai-first experience
- Mobile-first layout
- Playful but polished
- Community-specific flavor
- Results should feel coherent, not random
- Avoid pseudo-scientific framing

## Engineering rules
- Use Next.js + TypeScript + Tailwind
- Keep architecture simple
- Prefer local data files over backend unless truly needed
- Avoid unnecessary dependencies
- Avoid premature abstraction
- Keep components readable and reusable
- Verify build after meaningful changes
- Fix broken types immediately

## UX rules
- Large tap targets
- One-question-at-a-time quiz flow
- Clear progress indicator
- Shareable result page
- Strong visual hierarchy
- Avoid clutter
- Avoid generic placeholder copy

## Content rules
- Situational Thai questions
- 4 answer options per question
- Each option should map to distinct behavioral traits
- Archetypes should be memorable and socially shareable
- Include compatible friend-group matches

## Done criteria
- App runs locally
- Quiz works end-to-end
- Results are deterministic and understandable
- README is updated
- No obvious placeholder sections remain