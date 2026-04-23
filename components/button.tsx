import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#9b5a2e] disabled:cursor-not-allowed disabled:opacity-45",
        variant === "primary" &&
          "bg-[#9b5a2e] text-white shadow-[0_16px_42px_rgba(155,90,46,0.2)] hover:-translate-y-0.5 hover:bg-[#7d4726]",
        variant === "secondary" &&
          "border border-[#9b5a2e]/18 bg-white/70 text-[#5d3c25] hover:-translate-y-0.5 hover:bg-white",
        variant === "ghost" && "text-[#5d3c25] hover:bg-[#9b5a2e]/8",
        className,
      )}
      {...props}
    />
  );
}
