import type { Archetype } from "@/lib/types";

const archetypeEmojiById: Record<Archetype["id"], string> = {
  "front-row-hype": "📣",
  "quiet-oracle": "🔮",
  "table-captain": "🧭",
  "lucky-chaos": "🎲",
  "meme-jockey": "😂",
  "fanclub-flag": "🚩",
  "snack-sponsor": "🍿",
  "receipt-keeper": "🧾",
};

export function getArchetypeEmoji(archetype: Archetype) {
  return archetypeEmojiById[archetype.id] ?? "🐎";
}
