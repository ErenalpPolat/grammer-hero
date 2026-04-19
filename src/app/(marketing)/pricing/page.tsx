import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Fiyatlandırma" };

const PLANS = [
  {
    id: "free",
    name: "Ücretsiz",
    price: "₺0",
    cadence: "her zaman",
    description: "Tüm temel özelliklere sınırsız erişim. Reklam yok.",
    cta: { label: "Hemen başla", href: "/login" },
    highlight: true,
    features: [
      { included: true, text: "Tüm üniteler · 8 oyun tipi" },
      { included: true, text: "Sınırsız ders + tekrar" },
      { included: true, text: "Streak, XP, rozet sistemi" },
      { included: true, text: "Heatmap + leaderboard" },
      { included: true, text: "Karanlık mod" },
      { included: false, text: "Detaylı kişisel istatistikler (yakında)" },
      { included: false, text: "Profesyonel sertifika (yakında)" },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "Yakında",
    cadence: "",
    description: "Daha fazla özellik için yol haritamızda. Şimdilik bekleme.",
    cta: { label: "Bana haber ver", href: "/login" },
    highlight: false,
    features: [
      { included: true, text: "Ücretsiz plandaki her şey" },
      { included: true, text: "Sertifika programı" },
      { included: true, text: "AI ile özel pratik önerileri" },
      { included: true, text: "Yapay zeka konuşma asistanı" },
      { included: true, text: "İleri seviye ünite paketleri" },
      { included: true, text: "Önceliklendirilmiş destek" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Fiyatlandırma</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Şimdilik tam ücretsiz. Premium plan ileride gelecek — istersen bildirim al.
        </p>
      </header>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-xl border-2 bg-card p-6 ${plan.highlight ? "border-primary shadow-card" : "border-border opacity-90"}`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              {plan.highlight && (
                <span className="rounded-pill bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  Önerilen
                </span>
              )}
            </div>
            <p className="text-3xl font-bold tabular-nums">
              {plan.price}{" "}
              {plan.cadence && <span className="text-base font-normal text-muted-foreground">/ {plan.cadence}</span>}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

            <ul className="mt-6 space-y-2 text-sm">
              {plan.features.map((f) => (
                <li key={f.text} className="flex items-start gap-2">
                  {f.included ? (
                    <Check className="mt-0.5 size-4 shrink-0 text-correct" aria-hidden />
                  ) : (
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" aria-hidden />
                  )}
                  <span className={f.included ? "" : "text-muted-foreground line-through"}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button asChild className="mt-6 w-full" variant={plan.highlight ? "primary" : "outline"} size="lg">
              <Link href={plan.cta.href}>
                {plan.cta.label} <ArrowRight />
              </Link>
            </Button>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">
        Ücretsiz plan kalıcı — ileride premium özellikler eklenirse de mevcut
        özellikler ücretsiz kalmaya devam edecek.
      </p>
    </div>
  );
}
