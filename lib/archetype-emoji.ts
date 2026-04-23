import type { Archetype } from "@/lib/types";

const archetypeEmojiById: Record<Archetype["id"], string> = {
  diplomat: "🤝",
  "center-star": "⭐",
  "rhythm-planner": "🧭",
  "color-spark": "🎲",
  "faithful-believer": "🚩",
  "fate-challenger": "🏁",
  "shadow-watcher": "🔎",
  "day-current": "🌊",
};

export function getArchetypeEmoji(archetype: Archetype) {
  return archetypeEmojiById[archetype.id] ?? "🐎";
}
