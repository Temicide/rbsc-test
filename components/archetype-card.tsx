import type { Archetype } from "@/lib/types";
import { cn } from "@/lib/utils";

type ArchetypeCardProps = {
  archetype: Archetype;
  compact?: boolean;
};

export function ArchetypeCard({ archetype, compact = false }: ArchetypeCardProps) {
  return (
    <article
      className={cn(
        "group border-t border-[#ff97be]/22 pt-4 transition duration-300 hover:border-[#ffe347]",
        compact ? "space-y-3" : "space-y-4",
      )}
    >
      <div className="flex items-start gap-4">
        <span className={cn("mt-1 h-12 w-1 shrink-0 rounded-full bg-gradient-to-b", archetype.accent)} />
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5fa2]">
            {archetype.badge}
          </p>
          <h3 className="mt-2 text-xl font-black leading-tight text-[#2a1530] transition group-hover:translate-x-1">
            {archetype.name}
          </h3>
        </div>
      </div>
      <p className="text-sm leading-7 text-[#6f4a73]">{archetype.subtitle}</p>
      {!compact && <p className="text-sm leading-7 text-[#7f5f92]">{archetype.description}</p>}
    </article>
  );
}
