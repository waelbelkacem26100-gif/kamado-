"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  fallback: string;
  label?: string;
  variant?: "default" | "light";
}

export default function BackButton({ fallback, label = "Retour", variant = "default" }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  if (variant === "light") {
    return (
      <button
        onClick={handleBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 group"
      >
        <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-200">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </span>
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200 group"
    >
      <span className="w-7 h-7 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)]/50 group-hover:bg-[var(--surface-hover)] transition-all duration-200">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </span>
      {label}
    </button>
  );
}
