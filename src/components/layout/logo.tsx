import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  href = "/learn",
  className,
  size = "md",
}: {
  href?: string;
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-bold tracking-tight",
        size === "sm" ? "text-lg" : "text-xl",
        className,
      )}
    >
      <span aria-hidden className="text-2xl">🦉</span>
      <span>Grammar Hero</span>
    </Link>
  );
}
