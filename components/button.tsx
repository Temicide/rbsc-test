import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff5fa2] disabled:cursor-not-allowed disabled:opacity-45",
        variant === "primary" &&
          "bg-gradient-to-r from-[#ffe347] via-[#ff8a00] to-[#ff5fa2] text-[#12020f] shadow-[0_16px_42px_rgba(255,95,162,0.28)] hover:-translate-y-0.5 hover:brightness-110",
        variant === "secondary" &&
          "border border-[#ff97be]/34 bg-white/78 text-[#5f2a63] hover:-translate-y-0.5 hover:bg-[#fff1fa]",
        variant === "ghost" && "text-[#5f2a63] hover:bg-[#ff5fa2]/10",
        className,
      )}
      {...props}
    />
  );
}
