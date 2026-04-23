"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import { quizQuestions } from "@/data/quiz";
import { encodeAnswers } from "@/lib/scoring";
import type { AnswerMap } from "@/lib/types";
import { cn } from "@/lib/utils";

export function QuizClient() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const currentQuestion = quizQuestions[currentIndex];
  const selectedOption = answers[currentQuestion.id];
  const progress = Math.round(((currentIndex + 1) / quizQuestions.length) * 100);
  const isLastQuestion = currentIndex === quizQuestions.length - 1;

  const answeredCount = useMemo(
    () => quizQuestions.filter((question) => answers[question.id]).length,
    [answers],
  );

  function selectAnswer(optionId: string) {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: optionId,
    }));
  }

  function goNext() {
    if (!selectedOption) {
      return;
    }

    if (isLastQuestion) {
      router.push(`/result?a=${encodeAnswers(answers)}`);
      return;
    }

    setCurrentIndex((value) => value + 1);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 py-5 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <Link className="text-sm font-black text-[#2a1530] transition hover:text-[#ff5fa2]" href="/">
          🐎 สนามนี้คุณเป็นใคร
        </Link>
        <span className="rounded-full border border-[#ff97be]/34 bg-white/78 px-3 py-1 text-xs font-bold text-[#6f4a73]">
          ข้อ {currentIndex + 1}/{quizQuestions.length}
        </span>
      </div>

      <section className="relative flex flex-1 flex-col overflow-hidden rounded-[2rem] border border-[#ff97be]/30 bg-white/82 p-5 shadow-[0_22px_70px_rgba(255,95,162,0.12)] backdrop-blur-xl sm:p-7 lg:p-8">
        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between text-sm font-bold text-[#7f5f92]">
            <span>🎟️ เลือกคำตอบที่ใช่สุด</span>
            <span>{answeredCount}/{quizQuestions.length}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#ffe347]/34">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#ffe347] via-[#ff8a00] to-[#ff5fa2]"
              initial={false}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              animate={{ width: `${progress}%` }}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative z-10 mt-10 flex flex-1 flex-col"
          >
            <div className="mx-auto w-full max-w-3xl">
              <div className="text-center">
                <p className="text-sm font-black text-[#ff5fa2]">{currentQuestion.scene}</p>
                <h1 className="mt-4 text-3xl font-black leading-tight text-[#2a1530] sm:text-4xl">
                  {currentQuestion.prompt}
                </h1>
              </div>

              <div className="mt-8 grid gap-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOption === option.id;

                  return (
                    <motion.button
                      key={option.id}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "group min-h-16 rounded-3xl border p-4 text-left transition duration-300",
                        "focus:outline-none focus:ring-2 focus:ring-[#ff5fa2]",
                        isSelected
                          ? "scale-[1.01] border-[#ff5fa2] bg-[#fff1fa] shadow-[0_14px_36px_rgba(255,95,162,0.16)]"
                          : "border-[#ff97be]/24 bg-white/86 hover:-translate-y-0.5 hover:border-[#ff97be]/46 hover:bg-[#fffafd]",
                      )}
                      initial={{ opacity: 0, y: 10 }}
                      onClick={() => selectAnswer(option.id)}
                      transition={{ delay: index * 0.035, duration: 0.22 }}
                      type="button"
                    >
                      <div className="flex gap-4">
                        <span
                          className={cn(
                            "flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-black transition",
                            isSelected
                              ? "border-[#ff5fa2] bg-[#ff5fa2] text-[#12020f]"
                              : "border-[#ff97be]/36 text-[#7f5f92] group-hover:border-[#ff5fa2] group-hover:text-[#ff5fa2]",
                          )}
                        >
                          {isSelected ? <CheckCircle2 size={18} /> : option.id.toUpperCase()}
                        </span>
                        <span>
                          <span className="block text-base font-black leading-7 text-[#2a1530]">
                            {option.label}
                          </span>
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 mt-8 flex items-center justify-between gap-3">
          <Button
            className="gap-2 px-4"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))}
            type="button"
            variant="secondary"
          >
            <ArrowLeft size={18} />
            ย้อนกลับ
          </Button>
          <Button className="gap-2 px-5" disabled={!selectedOption} onClick={goNext} type="button">
            {isLastQuestion ? "ดูผลลัพธ์ 🏆" : "ข้อต่อไป"}
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </main>
  );
}
