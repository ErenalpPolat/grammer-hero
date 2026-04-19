import Link from "next/link";
import {
  Lock,
  BookOpen,
  Sun,
  Clock,
  Rocket,
  Zap,
  Sparkles,
  Trophy,
  MessageCircle,
  Star,
  Award,
  Puzzle,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { CircularProgress } from "@/components/gamification/circular-progress";
import type { LessonIcon, LessonStatus } from "@/lib/learn/types";
import { cn } from "@/lib/utils";

const ICONS: Record<LessonIcon, LucideIcon> = {
  book: BookOpen,
  sun: Sun,
  clock: Clock,
  rocket: Rocket,
  zap: Zap,
  sparkles: Sparkles,
  trophy: Trophy,
  messageCircle: MessageCircle,
  star: Star,
  award: Award,
  puzzle: Puzzle,
  layers: Layers,
};

export interface LessonCardProps {
  lessonId: string;
  title: string;
  status: LessonStatus;
  icon?: LessonIcon;
  bestScore?: number;
  progress?: number;
  isUnitExam?: boolean;
  /** Custom tooltip text shown on hover when locked */
  lockReason?: string;
}

export function LessonCard({
  lessonId,
  title,
  status,
  icon = "book",
  bestScore,
  progress,
  isUnitExam,
  lockReason,
}: LessonCardProps) {
  const Icon = status === "locked" ? Lock : ICONS[icon];
  const ringValue = status === "completed" ? 100 : progress ?? 0;

  const ariaLabel =
    status === "locked"
      ? `${title} · Kilitli`
      : status === "completed"
        ? `${title} · Tamamlandı${bestScore != null ? ` · En iyi skor ${bestScore}%` : ""}`
        : `${title} · Hadi başla`;

  const card = (
    <div className="relative">
      <CircularProgress
        value={ringValue}
        strokeWidth={7}
        progressClassName={status === "completed" ? "stroke-xp" : "stroke-primary"}
        trackClassName="stroke-border"
        label={title}
        className="size-16 lg:size-[88px]"
      >
        <div
          className={cn(
            "flex size-[80%] items-center justify-center rounded-full transition-all",
            status === "locked" && "bg-muted text-muted-foreground/70",
            status === "available" &&
              "bg-primary text-primary-foreground shadow-button [--button-shadow:var(--brand-800)] dark:[--button-shadow:var(--brand-700)]",
            status === "completed" &&
              "bg-primary text-primary-foreground shadow-button [--button-shadow:var(--brand-800)] dark:[--button-shadow:var(--brand-700)]",
            isUnitExam && status !== "locked" && "bg-xp text-white [--button-shadow:#a16207]",
          )}
        >
          <Icon className="size-6 lg:size-8" strokeWidth={2.5} />
        </div>
      </CircularProgress>

      {status === "completed" && bestScore != null && bestScore >= 95 && (
        <span
          aria-hidden
          className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-xp text-white shadow-sm ring-2 ring-background"
        >
          <Star className="size-3.5 fill-current" />
        </span>
      )}
    </div>
  );

  if (status === "locked") {
    const tooltipMessage = lockReason ?? "Önceki dersi tamamla";
    return (
      <div
        className="group/locked relative flex cursor-help flex-col items-center gap-2"
        title={`🔒 ${tooltipMessage}`}
        aria-label={`${ariaLabel} · ${tooltipMessage}`}
      >
        {card}
        <p className="max-w-[9rem] text-center text-xs font-medium text-muted-foreground">
          {title}
        </p>
        {/* Custom hover tooltip — CSS-only, no JS, no hydration issues */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground opacity-0 shadow-md transition-opacity duration-150 group-hover/locked:opacity-100 group-focus-within/locked:opacity-100 motion-reduce:transition-none"
        >
          🔒 {tooltipMessage}
        </span>
      </div>
    );
  }

  return (
    <Link
      href={`/lesson/${lessonId}`}
      aria-label={ariaLabel}
      className={cn(
        "group flex flex-col items-center gap-2 transition-transform duration-150 ease-bounce",
        "hover:-translate-y-0.5",
        "focus-visible:outline-none",
      )}
    >
      <span className="rounded-full group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-background">
        {card}
      </span>
      <p
        className={cn(
          "max-w-[9rem] text-center text-xs font-medium",
          status === "completed" ? "text-foreground" : "text-foreground",
        )}
      >
        {title}
      </p>
    </Link>
  );
}
