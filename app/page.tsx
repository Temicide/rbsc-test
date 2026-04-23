import { ArrowRight, Clock3, Share2, Sparkles } from "lucide-react";
import Link from "next/link";
import { archetypes } from "@/data/archetypes";
import { quizQuestions } from "@/data/quiz";

export default function Home() {
  const previewArchetypes = archetypes.slice(0, 5);
  const quickFacts = [
    { Icon: Clock3, emoji: "⏱️", title: `${quizQuestions.length} ข้อ`, label: "อ่านไว" },
    { Icon: Sparkles, emoji: "🏆", title: "ผลลัพธ์", label: "อาจจะตรงหรือไม่ตรง" },
    { Icon: Share2, emoji: "💬", title: "แชร์ได้", label: "แต่แคปหน้าจอเหอะ 555" },
  ];

  return (
    <main className="min-h-screen overflow-hidden px-4 py-5 sm:px-6 lg:px-8">
      <section className="relative mx-auto flex min-h-[calc(100svh-2.5rem)] w-full max-w-5xl flex-col">
        <nav className="relative z-10 flex items-center justify-between">
          <Link className="text-sm font-black text-[#3b2a1f]" href="/">
            🐎 สนามนี้คุณเป็นใคร
          </Link>
          <Link
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#9b5a2e] px-4 text-sm font-black text-white shadow-[0_12px_32px_rgba(155,90,46,0.16)] transition hover:-translate-y-0.5 hover:bg-[#7d4726]"
            href="/quiz"
          >
            เริ่มเล่น
          </Link>
        </nav>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-10 text-center">
          <div className="motion-rise mx-auto max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#9b5a2e]/15 bg-white/70 px-4 py-2 text-sm font-black text-[#9b5a2e] shadow-[0_12px_30px_rgba(116,78,43,0.08)]">
              <Sparkles size={16} />
              🏇 Quiz จากงานสาวม้าต่างๆ
            </p>
            <h1 className="text-5xl font-black leading-[1.02] text-[#2b2118] sm:text-7xl lg:text-8xl">
              คุณเป็นสายไหน
              <span className="block text-[#9b5a2e]">ในสนามม้า?</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#6f5f4f]">
              ตอบ {quizQuestions.length} ข้อสั้น ๆ แล้วทราบลักษณะนิสัยคุณ
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#9b5a2e] px-8 py-4 text-base font-black text-white shadow-[0_18px_48px_rgba(155,90,46,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#7d4726] sm:w-auto"
                href="/quiz"
              >
                เริ่มเล่นเลย 🏁
                <ArrowRight size={20} />
              </Link>
              <p className="text-sm font-bold text-[#7c6f61]">ใช้เวลาไม่นาน แชร์ผลให้เพื่อนได้</p>
            </div>
          </div>

          <div className="motion-rise-delay mt-10 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
            {quickFacts.map(({ Icon, emoji, title, label }) => (
              <div
                className="rounded-3xl border border-[#9b5a2e]/12 bg-white/72 px-4 py-4 text-left shadow-[0_16px_42px_rgba(116,78,43,0.08)] backdrop-blur"
                key={title}
              >
                <div className="flex items-center gap-2">
                  <Icon className="text-[#5f7f5f]" size={19} />
                  <span aria-hidden="true" className="text-base">
                    {emoji}
                  </span>
                </div>
                <p className="mt-3 text-base font-black text-[#2b2118]">{title}</p>
                <p className="text-sm font-bold text-[#7c6f61]">{label}</p>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-9 flex max-w-3xl flex-wrap justify-center gap-2">
            {previewArchetypes.map((archetype) => (
              <span
                className="rounded-full border border-[#9b5a2e]/12 bg-white/62 px-3 py-2 text-xs font-black text-[#5d3c25] shadow-[0_10px_24px_rgba(116,78,43,0.06)]"
                key={archetype.id}
              >
                {archetype.name}
              </span>
            ))}
          </div>

          <p className="relative z-10 mt-8 text-xs font-bold text-[#8d7c69]">
            เล่นเพื่อความสนุก ไม่ใช่แบบประเมินบุคลิกภาพจริง
          </p>
        </div>
      </section>
    </main>
  );
}
