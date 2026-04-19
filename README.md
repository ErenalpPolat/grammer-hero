# 🦉 Grammar Hero

İngilizce dilbilgisini Duolingo tarzı oyunlaştırılmış bir deneyime dönüştüren tam stack
web uygulaması. Next.js 16 + React 19 + Tailwind v4 + Prisma 7 + NextAuth v5 ile
inşa edildi.

**Live demo:** _deploy edildiğinde burası dolar_

---

## Teknolojiler

- **Framework:** Next.js 16.2 (App Router · Turbopack · View Transitions)
- **UI:** React 19.2 · Tailwind v4 · shadcn/ui canary · lucide-react
- **Auth:** NextAuth v5 (Credentials, mock magic link · deterministic ID)
- **DB / ORM:** PostgreSQL · Prisma 7 (driver adapter pattern)
- **Test:** Vitest (unit testler · `pnpm test`)
- **Diğer:** Sonner (toast) · Zod (validation)

---

## Hızlı kurulum (local)

### 1. Bağımlılıklar

```bash
pnpm install
```

### 2. PostgreSQL hazırla

Herhangi bir PostgreSQL instance — local Docker, Postgres.app, Linux native ya da
Vercel Postgres. Boş bir veritabanı oluştur (`grammar_hero` gibi).

### 3. Env vars

```bash
cp .env.example .env.local
# .env.local içindeki DATABASE_URL ve AUTH_SECRET'i doldur
openssl rand -base64 32  # AUTH_SECRET için
```

### 4. Migration + client generate

```bash
pnpm db:migrate          # şema → DB + Prisma client'i üretir
pnpm db:generate         # şema değişmediyse sadece client (gerekirse)
```

### 5. Dev server

```bash
pnpm dev
# → http://localhost:3000
```

İlk kullanıcı: `/login` → adını yaz → "Magic Link Gönder" → "Giriş Yap" →
`/onboarding/language` → 3 adım → `/learn` skill tree.

---

## Komutlar

| Komut | Ne yapar |
|---|---|
| `pnpm dev` | Turbopack dev server |
| `pnpm build` | Production build |
| `pnpm start` | Production server (build sonrası) |
| `pnpm lint` | ESLint check |
| `pnpm test` | Vitest unit testleri (50 test) |
| `pnpm test:watch` | Vitest watch mode |
| `pnpm db:migrate` | Prisma migration apply (dev) |
| `pnpm db:generate` | Prisma client generate |
| `pnpm db:studio` | Prisma Studio (DB GUI) |
| `pnpm db:push` | Schema'yı migration olmadan DB'ye push |

---

## Mimari

```
src/
├─ app/
│  ├─ (marketing)/           Landing · features · pricing · about
│  ├─ (auth)/                /login (mock magic link)
│  ├─ (onboarding)/          3 adım: dil → seviye → günlük hedef
│  ├─ (app)/                 AppShell altı: learn · practice · review · leaderboard · profile · settings
│  ├─ lesson/[id]/quiz/      Distraction-free quiz arena (AppShell DIŞI)
│  ├─ api/auth/[...nextauth] NextAuth handlers
│  ├─ tokens/                Dev showcase (noindex)
│  ├─ sitemap.ts robots.ts manifest.ts
│  └─ layout.tsx · page.tsx · not-found.tsx · error.tsx
│
├─ components/
│  ├─ ui/                    shadcn primitives
│  ├─ layout/                AppShell · Sidebar · Topbar · MobileBottomNav · Logo
│  ├─ gamification/          HeartsIndicator · StreakFlame · GemCounter · XPRing · DailyGoalProgress · CircularProgress
│  ├─ learn/                 SkillTree · LessonCard · UnitBanner
│  ├─ quiz/                  QuizFrame · QuizFooter · FeedbackPanel · GameHost + 8 oyun
│  ├─ feedback/              LevelUpModal · StreakBrokenModal · GoalReachedModal · ConfettiBurst
│  ├─ profile/ leaderboard/ review/ onboarding/  Sayfa-spesifik bileşenler
│
├─ lib/
│  ├─ auth.ts auth.config.ts auth-actions.ts  NextAuth + edge-safe split
│  ├─ prisma.ts                                PrismaPg adapter singleton
│  ├─ session.ts                               requireSessionUser() helper
│  ├─ progress.ts                              recordQuizCompletionAction
│  ├─ leaderboard.ts                           Window query (week/month/all)
│  ├─ activity.ts                              DailyActivity heatmap helpers
│  ├─ exercise/                                types · grader · xp + tests
│  ├─ learn/                                   types · mock-data · progress
│  └─ streak.ts slugify.ts rate-limit.ts       + tests
│
├─ data/questions/                             18 ders × 8 oyun = 460+ mock soru
├─ hooks/                                      use-lesson-state · use-hearts · use-media-query
├─ types/next-auth.d.ts                        Session augmentation
└─ generated/prisma/                           Prisma client (gitignored)

prisma/
├─ schema.prisma                               User · LessonProgress · GameAttempt · DailyActivity
└─ migrations/

src/proxy.ts                                   Auth-gated routing (Next.js 16'da middleware → proxy)
```

---

## 8 Oyun Tipi

Her ders 8 farklı oyun tipi ile çalışılabilir:

| Tip | Mekanik |
|---|---|
| **Multiple Choice** | 4 şıktan doğru olanı seç (klavye 1-4) |
| **Fill in the Blank** | Cümle boşluğuna 4 kelimeden doğru olanı yerleştir |
| **True / False** | Cümle gramer olarak doğru mu (klavye ←/→) |
| **Cümle Kur** | Karışık parçaları doğru sıraya diz |
| **Kelime Bul** | Karışık harflerden kelime oluştur |
| **Hatayı Bul** | Cümledeki yanlış kelimeyi tıkla |
| **Sürükle-Bırak** | Kelimeyi boşluğa sürükle (HTML5 native + tap fallback) |
| **Eşleştir** | 4-pair Memory Match (CSS 3D flip) |

---

## Deployment

### Vercel (önerilen)

1. **DB:** Vercel Postgres oluştur veya external PostgreSQL kullan
2. **Repo:** GitHub'a push, Vercel'e import
3. **Env vars** (Settings → Environment Variables):
   - `DATABASE_URL` — Postgres connection string (pooled)
   - `AUTH_SECRET` — `openssl rand -base64 32`
   - `NEXT_PUBLIC_SITE_URL` — production URL (örn. `https://grammar-hero.vercel.app`)
4. **Build command:** Default (`pnpm build`) yeterli
5. **Migration:** İlk deploy öncesi local'den `pnpm prisma migrate deploy` çalıştır
   (production DB'ye), veya post-build hook olarak ekle

### Self-hosted (Node.js)

```bash
pnpm install --prod
pnpm build
pnpm db:generate
NODE_ENV=production pnpm start
```

PostgreSQL'in erişilebilir olduğundan ve env vars'ın set edildiğinden emin ol.
Reverse proxy (nginx / caddy) ile HTTPS sağla — NextAuth cookies HTTPS olmadan
production'da çalışmaz.

---

## Production checklist

- [ ] `AUTH_SECRET` 32+ karakter random
- [ ] `AUTH_TRUST_HOST` production'da kaldır (Vercel auto-handle)
- [ ] `NEXT_PUBLIC_SITE_URL` doğru production domain
- [ ] DB pooled connection (serverless için kritik)
- [ ] `pnpm build` clean (warning yok)
- [ ] `pnpm test` 50/50 passing
- [ ] `pnpm lint` 0 error
- [ ] HTTPS enabled
- [ ] Lighthouse audit (Perf ≥ 90, A11y ≥ 95, SEO 100)

---

## Yol haritası

- [x] 3 ünite (Şimdiki Zaman · Geçmiş Zaman · Şimdiki Sürekli) — 18 ders
- [x] 8 oyun tipi (MC · Fill · TF · WordBank · WordScramble · FindMistake · DragDrop · MemoryMatch)
- [x] Auth · Onboarding · Profile · Leaderboard · Practice · Review
- [x] LevelUp + StreakBroken + GoalReached modallar
- [x] Karanlık mod · skip link · sitemap/robots · manifest · JSON-LD
- [ ] Service Worker (offline + push)
- [ ] Gerçek SM-2 spaced repetition
- [ ] Lig sistemi (Bronze → Diamond)
- [ ] 5+ ek ünite (Future · Perfect · Modal · Conditional · Passive)
- [ ] E2E tests (Playwright)

---

## İletişim

[polaere06@gmail.com](mailto:polaere06@gmail.com)
