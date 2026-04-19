"use client";

import { Heart, Flame, Gem, Star, Check, X, ArrowRight, Trash2 } from "lucide-react";
import { useState, type ComponentType } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DailyGoalProgress } from "@/components/gamification/daily-goal-progress";
import { GemCounter } from "@/components/gamification/gem-counter";
import { HeartsIndicator } from "@/components/gamification/hearts-indicator";
import { StreakFlame } from "@/components/gamification/streak-flame";
import { XPRing } from "@/components/gamification/xp-ring";
import { useTheme, type Theme } from "@/lib/use-theme";
import { cn } from "@/lib/utils";

const BRAND_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const SEMANTIC: Array<[string, string]> = [
  ["background", "bg-background"],
  ["foreground", "bg-foreground"],
  ["card", "bg-card"],
  ["primary", "bg-primary"],
  ["secondary", "bg-secondary"],
  ["muted", "bg-muted"],
  ["border", "bg-border"],
  ["destructive", "bg-destructive"],
];

type IconType = ComponentType<{ className?: string }>;
const GAMIFICATION: Array<[string, string, IconType]> = [
  ["xp", "bg-xp", Star],
  ["hearts", "bg-hearts", Heart],
  ["streak", "bg-streak", Flame],
  ["gem", "bg-gem", Gem],
  ["correct", "bg-correct", Check],
  ["incorrect", "bg-incorrect", X],
];

const RADII: Array<[string, string]> = [
  ["sm", "rounded-sm"],
  ["md", "rounded-md"],
  ["lg", "rounded-lg"],
  ["xl", "rounded-xl"],
  ["pill", "rounded-pill"],
];

const SHADOWS: Array<[string, string]> = [
  ["sm", "shadow-sm"],
  ["card", "shadow-card"],
  ["lg", "shadow-lg"],
];

export default function TokenShowcase() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-6 py-10">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">Grammar Hero · Token Showcase</h1>
          <p className="mt-2 text-muted-foreground">
            Faz 1 doğrulama sayfası — design system canlıda mı?
          </p>
        </div>
        <ThemeToggle theme={theme} onChange={setTheme} />
      </header>

      <Section title="Semantik Renkler">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SEMANTIC.map(([name, cls]) => (
            <Swatch key={name} name={name} className={cls} />
          ))}
        </div>
      </Section>

      <Section title="Brand Skala (yeşil)">
        <div className="grid grid-cols-6 gap-2 sm:grid-cols-11">
          {BRAND_SHADES.map((s) => (
            <RawSwatch key={s} name={String(s)} cssVar={`var(--brand-${s})`} />
          ))}
        </div>
      </Section>

      <Section title="Violet Skala (mor · Plan 1&apos;in &apos;accent&apos;i)">
        <div className="grid grid-cols-6 gap-2 sm:grid-cols-11">
          {BRAND_SHADES.map((s) => (
            <RawSwatch key={s} name={String(s)} cssVar={`var(--violet-${s})`} />
          ))}
        </div>
      </Section>

      <Section title="Gamification Renkleri">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {GAMIFICATION.map(([name, cls, Icon]) => (
            <div key={name} className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <div className={cn("mb-3 flex h-12 w-12 items-center justify-center rounded-md text-white", cls)}>
                <Icon className="size-6" />
              </div>
              <p className="font-mono text-sm">{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tipografi">
        <div className="space-y-3">
          <p className="text-display font-bold">Display · 3rem</p>
          <p className="text-4xl font-bold">Heading 4xl · 2.25rem</p>
          <p className="text-3xl font-bold">Heading 3xl · 1.875rem</p>
          <p className="text-2xl font-semibold">Heading 2xl · 1.5rem</p>
          <p className="text-xl font-medium">Body xl · 1.25rem</p>
          <p className="text-lg">Body lg · 1.125rem</p>
          <p className="text-base">Body base · 1rem</p>
          <p className="text-sm text-muted-foreground">Caption sm · 0.875rem</p>
        </div>
      </Section>

      <Section title="Radius">
        <div className="flex flex-wrap gap-4">
          {RADII.map(([name, cls]) => (
            <div key={name} className="space-y-2 text-center">
              <div className={cn("h-20 w-20 bg-primary", cls)} />
              <p className="font-mono text-sm">rounded-{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Gölge (Shadow)">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SHADOWS.map(([name, cls]) => (
            <div key={name} className={cn("rounded-lg bg-card p-6 text-center", cls)}>
              <p className="font-mono text-sm">shadow-{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Button bileşeni · Variants">
        <div className="flex flex-wrap items-end gap-3">
          <Button onClick={() => toast.success("Doğru cevap! +10 XP", { duration: 1500 })}>
            Primary <ArrowRight />
          </Button>
          <Button variant="secondary" onClick={() => toast("Sonraki ders", { duration: 1500 })}>
            Secondary
          </Button>
          <Button variant="success" onClick={() => toast.success("Tebrikler!", { duration: 1500 })}>
            <Check /> Doğru
          </Button>
          <Button variant="destructive" onClick={() => toast.error("Yanlış · -1 ❤", { duration: 1500 })}>
            <Trash2 /> Destructive
          </Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Section>

      <Section title="Button · Sizes & States">
        <div className="space-y-4">
          <div className="flex flex-wrap items-end gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium (default)</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
            <Button size="icon" aria-label="Star"><Star /></Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button disabled>Disabled</Button>
            <LoadingButton />
          </div>
          <p className="text-sm text-muted-foreground">
            Chunky 3D: tıkla → 4px aşağı + ease-bounce. Loading prop → Loader2 + aria-busy.
          </p>
        </div>
      </Section>

      <Section title="Gamification Bileşenleri · Faz 4">
        <div className="space-y-6">
          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">HeartsIndicator (0/1/2/3)</p>
            <div className="flex flex-wrap items-center gap-6">
              {[3, 2, 1, 0].map((h) => (
                <div key={h} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                  <HeartsIndicator hearts={h} size="lg" />
                  <span>hearts={h}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">StreakFlame (0 / 3 / 12 gün)</p>
            <div className="flex flex-wrap items-center gap-3">
              <StreakFlame count={0} />
              <StreakFlame count={3} />
              <StreakFlame count={12} />
              <StreakFlame count={100} />
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">GemCounter (farklı boyutlar)</p>
            <div className="flex flex-wrap items-center gap-3">
              <GemCounter count={0} />
              <GemCounter count={42} />
              <GemCounter count={250} />
              <GemCounter count={1250} />
              <GemCounter count={15000} />
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">DailyGoalProgress (boş/yarı/tam)</p>
            <div className="flex flex-wrap items-center gap-3">
              <DailyGoalProgress minutes={0} goal={10} />
              <DailyGoalProgress minutes={5} goal={10} />
              <DailyGoalProgress minutes={8} goal={10} />
              <DailyGoalProgress minutes={10} goal={10} />
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">XPRing (başlangıç/orta/tam)</p>
            <div className="flex flex-wrap items-center gap-6">
              <XPRing currentXp={0} xpToNext={1000} level={1} size={72} />
              <XPRing currentXp={450} xpToNext={1000} level={5} size={72} />
              <XPRing currentXp={1000} xpToNext={1000} level={5} size={72} />
              <XPRing currentXp={0} xpToNext={100} level={3} size={48} strokeWidth={3} compact />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Motion · ease-bounce">
        <div className="group relative h-24 overflow-hidden rounded-lg border border-border bg-card p-4">
          <div className="absolute left-4 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-correct transition-transform duration-500 ease-bounce group-hover:translate-x-[calc(100%+1rem)]" />
          <p className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            Hover et →
          </p>
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="space-y-1.5">
      <div className={cn("h-20 rounded-md border border-border", className)} />
      <p className="font-mono text-xs">{name}</p>
    </div>
  );
}

function RawSwatch({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="space-y-1.5">
      <div
        className="h-12 rounded-md border border-border"
        style={{ backgroundColor: cssVar }}
      />
      <p className="font-mono text-xs">{name}</p>
    </div>
  );
}

function LoadingButton() {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      loading={loading}
      onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
      }}
    >
      {loading ? "Kaydediliyor..." : "Loading test"}
    </Button>
  );
}

function ThemeToggle({ theme, onChange }: { theme: Theme; onChange: (t: Theme) => void }) {
  return (
    <div className="flex gap-1 rounded-pill border border-border bg-card p-1">
      {(["light", "dark", "system"] as const).map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => onChange(t)}
          className={cn(
            "rounded-pill px-3 py-1 text-sm capitalize transition-colors",
            theme === t
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
