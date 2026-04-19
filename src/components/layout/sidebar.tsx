"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Dumbbell,
  Brain,
  Trophy,
  User,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "./logo";
import type { SessionUser } from "@/lib/session";
import { cn } from "@/lib/utils";

const MAIN_NAV: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/learn", label: "Öğren", icon: BookOpen },
  { href: "/practice", label: "Pratik", icon: Dumbbell },
  { href: "/review", label: "Tekrar", icon: Brain },
  { href: "/leaderboard", label: "Liderlik", icon: Trophy },
];

const SECONDARY_NAV: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/profile", label: "Profil", icon: User },
  { href: "/profile/settings", label: "Ayarlar", icon: Settings },
];

const ALL_HREFS = [...MAIN_NAV, ...SECONDARY_NAV].map((n) => n.href);

/**
 * En uzun eşleşen href'i seç — sibling route'lar arasında karışıklığı önler.
 * Örn. pathname=/profile/settings için /profile değil /profile/settings döner.
 */
function findActiveHref(pathname: string): string | null {
  const sorted = [...ALL_HREFS].sort((a, b) => b.length - a.length);
  for (const href of sorted) {
    if (pathname === href || pathname.startsWith(`${href}/`)) return href;
  }
  return null;
}

function NavItem({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "bg-primary/10 text-primary before:absolute before:inset-y-1.5 before:left-0 before:w-0.5 before:rounded-full before:bg-primary"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      <Icon className="size-5 shrink-0" />
      <span>{label}</span>
    </Link>
  );
}

export function Sidebar({ user, className }: { user: SessionUser; className?: string }) {
  const pathname = usePathname();
  const activeHref = findActiveHref(pathname);
  const isActive = (href: string) => activeHref === href;

  return (
    <aside
      className={cn(
        "sticky top-0 flex h-svh w-60 shrink-0 flex-col border-r border-border bg-card",
        className,
      )}
    >
      <div className="flex h-16 items-center px-5">
        <Logo />
      </div>

      <nav className="flex-1 space-y-6 px-3 py-2" aria-label="Ana navigasyon">
        <ul className="space-y-1">
          {MAIN_NAV.map((item) => (
            <li key={item.href}>
              <NavItem {...item} active={isActive(item.href)} />
            </li>
          ))}
        </ul>
        <ul className="space-y-1 border-t border-border pt-4">
          {SECONDARY_NAV.map((item) => (
            <li key={item.href}>
              <NavItem {...item} active={isActive(item.href)} />
            </li>
          ))}
        </ul>
      </nav>

      <UserChip user={user} />
    </aside>
  );
}

function UserChip({ user }: { user: SessionUser }) {
  const initial = user.name.charAt(0).toUpperCase();
  return (
    <div className="m-3 flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
        {initial}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{user.name}</p>
        <p className="text-xs text-muted-foreground">
          Lv.{user.currentLevel} · {user.totalXp.toLocaleString("tr")} XP
        </p>
      </div>
    </div>
  );
}
