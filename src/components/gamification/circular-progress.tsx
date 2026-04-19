import * as React from "react";
import { cn } from "@/lib/utils";

export interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0-100 */
  value: number;
  /** Stroke width in viewBox units (0-50). Default 8 */
  strokeWidth?: number;
  /** Tailwind class for the track stroke. Default: stroke-border */
  trackClassName?: string;
  progressClassName?: string;
  /** Content rendered centered inside the ring */
  children?: React.ReactNode;
  /** ARIA label describing what the ring represents */
  label: string;
  /** Fixed pixel size. Omit to size via className (e.g. "size-16 lg:size-[88px]") */
  size?: number;
  /**
   * Size via className (e.g. "size-16 lg:size-[88px]").
   * Defaults to `size-10` (40px) if neither `size` nor a `size-*` class is passed.
   * SVG is viewBox-based so scales freely.
   */
  className?: string;
}

export function CircularProgress({
  value,
  strokeWidth = 8,
  trackClassName = "stroke-border",
  progressClassName = "stroke-primary",
  children,
  label,
  size,
  className,
  style,
  ...props
}: CircularProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const dashLength = (clamped / 100) * circumference;

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        !size && !className?.includes("size-") && "size-10",
        className,
      )}
      style={size ? { width: size, height: size, ...style } : style}
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      {...props}
    >
      <svg viewBox="0 0 100 100" className="size-full -rotate-90">
        <circle
          cx={50}
          cy={50}
          r={radius}
          className={cn("fill-none", trackClassName)}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={50}
          cy={50}
          r={radius}
          className={cn("fill-none transition-[stroke-dasharray] duration-500 ease-out", progressClassName)}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${dashLength} ${circumference}`}
        />
      </svg>
      {children != null && (
        <div className="absolute inset-0 flex items-center justify-center">{children}</div>
      )}
    </div>
  );
}
