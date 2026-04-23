"use client";

import { Share2 } from "lucide-react";
import type { Archetype } from "@/lib/types";
import { Button } from "@/components/button";
import { getArchetypeEmoji } from "@/lib/archetype-emoji";
import { cn } from "@/lib/utils";

type ShareCardProps = {
  archetype: Archetype;
};

export function ShareCard({ archetype }: ShareCardProps) {
  const archetypeEmoji = getArchetypeEmoji(archetype);

  async function shareResult() {
    const shareData = {
      title: `สนามนี้ฉันคือ ${archetype.name}`,
      text: `${archetype.catchphrase} ลองเล่น quiz สนามม้าดูว่าคุณเป็นสายไหน`,
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
  }

  return (
    <section className="glass overflow-hidden rounded-[2rem]">
      <div className={cn("h-1 bg-gradient-to-r", archetype.accent)} />
      <div className="space-y-6 p-5 sm:p-6">
        <div>
          <div
            aria-hidden="true"
            className="mb-4 flex size-20 items-center justify-center rounded-[1.5rem] border border-[#9b5a2e]/12 bg-[#fff7e8] text-5xl"
          >
            {archetypeEmoji}
          </div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9b5a2e]">
            🏇 สนามนี้ฉันคือ
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-[#2b2118]">{archetype.name}</h2>
          <p className="mt-4 text-base leading-8 text-[#6f5f4f]">“{archetype.catchphrase}”</p>
        </div>
        <Button className="w-full gap-2" onClick={shareResult}>
          <Share2 size={18} />
          แชร์ผลให้เพื่อนดู 💬
        </Button>
      </div>
    </section>
  );
}
