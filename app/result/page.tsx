import { Suspense } from "react";
import { ResultClient } from "@/components/result-client";

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex min-h-screen w-full max-w-2xl items-center px-4 py-8">
          <section className="glass w-full rounded-[2rem] p-6 text-center">
            <p className="text-lg font-bold text-[#2b2118]">กำลังเปิดผลลัพธ์...</p>
          </section>
        </main>
      }
    >
      <ResultClient />
    </Suspense>
  );
}
