import { ArrowRight, Clock3, Share2, Sparkles } from "lucide-react";
import Link from "next/link";
import { archetypes } from "@/data/archetypes";
import { quizQuestions } from "@/data/quiz";

export default function Home() {
  const previewArchetypes = archetypes.slice(0, 5);
  const quickFacts = [
    { Icon: Clock3, title: `${quizQuestions.length} ข้อ`, label: "อ่านไว" },
    { Icon: Sparkles, title: "ผลลัพธ์", label: "อาจจะตรงหรือไม่ตรง" },
    { Icon: Share2, title: "แชร์ได้", label: "แต่แคปหน้าจอเหอะ 555" },
  ];

  return (
    <main className="min-h-screen overflow-hidden px-4 py-5 sm:px-6 lg:px-8">
      <section className="relative mx-auto flex min-h-[calc(100svh-2.5rem)] w-full max-w-5xl flex-col">
        <nav className="relative z-10 flex items-center justify-between">
          <Link aria-label="สนามนี้คุณเป็นใคร" className="text-sm font-black text-[#2a1530]" href="/">
            🐴
          </Link>
          <Link
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-gradient-to-r from-[#ffe347] via-[#ff8a00] to-[#ff5fa2] px-4 text-sm font-black text-[#12020f] shadow-[0_12px_32px_rgba(255,95,162,0.24)] transition hover:-translate-y-0.5 hover:brightness-110"
            href="/quiz"
          >
            เริ่มเล่น
          </Link>
        </nav>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-10 text-center">
          <div className="motion-rise mx-auto max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff97be]/34 bg-white/78 px-4 py-2 text-sm font-black text-[#ff5fa2] shadow-[0_12px_30px_rgba(255,95,162,0.12)]">
              <Sparkles size={16} />
              Quiz จากงานสาวม้าต่างๆ
            </p>
            <h1 className="text-5xl font-black leading-[1.02] text-[#2a1530] sm:text-7xl lg:text-8xl">
              คุณเป็นสายไหน
              <span className="block bg-gradient-to-r from-[#ffe347] via-[#ff8a00] to-[#ff5fa2] bg-clip-text text-transparent">ในสนามม้า?</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#6f4a73]">
              ตอบ {quizQuestions.length} ข้อสั้น ๆ แล้วทราบลักษณะนิสัยคุณ
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffe347] via-[#ff8a00] to-[#ff5fa2] px-8 py-4 text-base font-black text-[#12020f] shadow-[0_18px_48px_rgba(255,95,162,0.3)] transition duration-300 hover:-translate-y-1 hover:brightness-110 sm:w-auto"
                href="/quiz"
              >
                เริ่มเล่นเลย
                <ArrowRight size={20} />
              </Link>
              <p className="text-sm font-bold text-[#7f5f92]">ใช้เวลาไม่นาน แชร์ผลให้เพื่อนได้</p>
            </div>
          </div>

          <div className="motion-rise-delay mt-10 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
            {quickFacts.map(({ Icon, title, label }) => (
              <div
                className="rounded-3xl border border-[#ff97be]/26 bg-white/76 px-4 py-4 text-left shadow-[0_16px_42px_rgba(255,95,162,0.1)] backdrop-blur"
                key={title}
              >
                <div className="flex items-center gap-2">
                  <Icon className="text-[#c9a7ff]" size={19} />
                </div>
                <p className="mt-3 text-base font-black text-[#2a1530]">{title}</p>
                <p className="text-sm font-bold text-[#7f5f92]">{label}</p>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-9 flex max-w-3xl flex-wrap justify-center gap-2">
            {previewArchetypes.map((archetype) => (
              <span
                className="rounded-full border border-[#ff97be]/28 bg-white/70 px-3 py-2 text-xs font-black text-[#5f2a63] shadow-[0_10px_24px_rgba(255,95,162,0.08)]"
                key={archetype.id}
              >
                {archetype.name}
              </span>
            ))}
          </div>

          <p className="relative z-10 mt-8 text-xs font-bold text-[#8b6ca0]">
            เล่นเพื่อความสนุก ไม่ใช่แบบประเมินบุคลิกภาพจริง
          </p>
        </div>
      </section>
    </main>
  );
}
