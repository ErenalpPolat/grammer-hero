"use client";

import { useMemo } from "react";

const PIECES = ["🎉", "✨", "🎊", "⭐", "💫", "🌟"] as const;

/** Lightweight CSS-only emoji burst — no canvas. Respects prefers-reduced-motion. */
export function ConfettiBurst({ count = 12 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        emoji: PIECES[i % PIECES.length],
        // Deterministic spread (looks random, doesn't hydration-mismatch)
        left: ((i * 137.5) % 100) - 5,
        delay: (i % 6) * 80,
        rotate: ((i * 47) % 90) - 45,
        scale: 0.7 + ((i * 13) % 7) / 10,
      })),
    [count],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
    >
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute -top-6 select-none text-2xl will-change-transform animate-[confetti-fall_2.4s_ease-out_forwards]"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}ms`,
            transform: `scale(${item.scale}) rotate(${item.rotate}deg)`,
          }}
        >
          {item.emoji}
        </span>
      ))}
      <style>{`
        @keyframes confetti-fall {
          from { transform: translateY(-20%) rotate(0deg); opacity: 1; }
          to { transform: translateY(120%) rotate(540deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
