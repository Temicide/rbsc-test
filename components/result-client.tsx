"use client";

import { motion } from "framer-motion";
import { ArrowLeft, RotateCcw, Trophy } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ShareCard } from "@/components/share-card";
import { getArchetypeEmoji } from "@/lib/archetype-emoji";
import { decodeAnswers, getScoredResult, normalizeTraitScore, traitKeys } from "@/lib/scoring";
import { cn } from "@/lib/utils";
import type { TraitKey } from "@/lib/types";

const traitLabels: Record<TraitKey, string> = {
  social: "ไมตรี",
  presence: "พลังเด่น",
  humor: "มุกไว",
  chaos: "สีสัน",
  passion: "ศรัทธา",
  drive: "แรงฮึด",
  observation: "สายตาอ่านเกม",
  influence: "คุมกระแส",
};

export function ResultClient() {
  const searchParams = useSearchParams();
  const answers = decodeAnswers(searchParams.get("a"));

  if (!answers) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-2xl items-center px-4 py-8">
        <section className="glass w-full rounded-[2rem] p-6 text-center">
          <p className="text-sm font-black text-[#9b5a2e]">ยังไม่มีผลลัพธ์ให้เปิด</p>
          <h1 className="mt-3 text-3xl font-black text-[#2b2118]">กลับไปตอบ quiz ก่อนนะ</h1>
          <p className="mt-3 text-base leading-8 text-[#6f5f4f]">
            ลิงก์ผลลัพธ์นี้ไม่มีคำตอบครบ หรือข้อมูลคำตอบไม่ตรงกับชุดคำถามปัจจุบัน
          </p>
          <Link
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#9b5a2e] px-5 py-3 text-sm font-black text-white"
            href="/quiz"
          >
            เริ่มใหม่
          </Link>
        </section>
      </main>
    );
  }

  const result = getScoredResult(answers);
  const { archetype, traitScores, matches } = result;
  const archetypeEmoji = getArchetypeEmoji(archetype);

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl overflow-hidden px-4 py-5 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between">
        <Link className="inline-flex items-center gap-2 text-sm font-bold text-[#6f5f4f] transition hover:text-[#9b5a2e]" href="/">
          <ArrowLeft size={16} />
          หน้าแรก
        </Link>
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-[#9b5a2e]/15 bg-white/70 px-4 py-2 text-sm font-bold text-[#5d3c25] transition hover:border-[#9b5a2e]"
          href="/quiz"
        >
          <RotateCcw size={16} />
          เล่นใหม่
        </Link>
      </nav>

      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto grid max-w-3xl gap-8 py-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.38, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#9b5a2e]/15 bg-white/70 px-4 py-2 text-sm font-black text-[#9b5a2e]">
            <Trophy size={16} />
            🏆 ผลลัพธ์ประจำสนาม
          </div>
          <div>
            <div
              aria-hidden="true"
              className="mx-auto mb-4 flex size-24 items-center justify-center rounded-[2rem] border border-[#9b5a2e]/12 bg-white/72 text-6xl shadow-[0_18px_48px_rgba(116,78,43,0.1)]"
            >
              {archetypeEmoji}
            </div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9b5a2e]">
              🐎 สนามนี้คุณคือ
            </p>
            <h1 className="mt-3 text-5xl font-black leading-[1.02] text-[#2b2118] sm:text-7xl">
              {archetype.name}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl font-black leading-9 text-[#5d3c25]">
              {archetype.subtitle}
            </p>
          </div>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#6f5f4f]">{archetype.description}</p>

          <section className={cn("rounded-[2rem] bg-gradient-to-r p-[1px]", archetype.accent)}>
            <div className="rounded-[2rem] bg-white/92 p-5">
              <p className="text-sm font-black text-[#9b5a2e]">💬 ประโยคประจำตัว</p>
              <p className="mt-2 text-2xl font-black leading-tight text-[#2b2118]">
                “{archetype.catchphrase}”
              </p>
            </div>
          </section>

          <div className="grid gap-6 border-y border-[#9b5a2e]/12 py-6 sm:grid-cols-2">
            <section>
              <h2 className="text-lg font-black text-[#2b2118]">✨ จุดเด่น</h2>
              <ul className="mt-4 space-y-3">
                {archetype.strengths.slice(0, 2).map((item) => (
                  <li className="flex justify-center gap-3 text-sm leading-7 text-[#6f5f4f]" key={item}>
                    <span className="mt-2 size-2 rounded-full bg-[#9b5a2e]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-black text-[#2b2118]">😄 เพื่อนอาจแซว</h2>
              <ul className="mt-4 space-y-3">
                {archetype.weakSpots.slice(0, 2).map((item) => (
                  <li className="flex justify-center gap-3 text-sm leading-7 text-[#6f5f4f]" key={item}>
                    <span className="mt-2 size-2 rounded-full bg-[#5f7f5f]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <details className="group rounded-3xl border border-[#9b5a2e]/12 bg-white/54 p-4">
            <summary className="cursor-pointer list-none text-sm font-black text-[#5d3c25] transition group-open:text-[#9b5a2e]">
              ดูคะแนนเบื้องหลัง
            </summary>
            <div className="mt-4 grid gap-3">
              {traitKeys.map((key) => {
                const value = normalizeTraitScore(key, traitScores[key]) * 10;

                return (
                  <div key={key}>
                    <div className="mb-2 flex justify-between gap-3 text-xs font-bold text-[#7c6f61]">
                      <span>{traitLabels[key]}</span>
                      <span>{Math.round(value)}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#e8d3af]/55">
                      <motion.div
                        className="h-full rounded-full bg-[#9b5a2e]"
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </details>
        </div>

        <aside className="relative z-10 mx-auto w-full max-w-xl space-y-6">
          <ShareCard archetype={archetype} />

          <section className="rounded-[2rem] border border-[#9b5a2e]/14 bg-white/78 p-5 shadow-[0_22px_70px_rgba(116,78,43,0.1)] backdrop-blur-xl sm:p-6">
            <h2 className="text-xl font-black text-[#2b2118]">🤝 เข้ากับใครในแก๊ง</h2>
            <p className="mt-2 text-sm leading-7 text-[#7c6f61]">
              คู่หูที่ทำให้สนามสนุกขึ้น
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {matches.map((match) => (
                <span
                  className="rounded-full border border-[#9b5a2e]/12 bg-[#fff7e8] px-3 py-2 text-sm font-black text-[#5d3c25]"
                  key={match.id}
                >
                  {match.name}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </motion.section>
    </main>
  );
}
