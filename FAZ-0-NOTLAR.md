# Grammar Hero - Faz 0 Notları (Next.js 16.2.4)

**Proje:** Grammar Hero - Duolingo-vari İngilizce Dilbilgisi Öğrenim Uygulaması  
**Stack:** Next.js 16.2.4 (App Router) | React 19.2.4 | NextAuth v5 (Credentials) | Prisma v7 | Tailwind v4 | shadcn/ui canary  
**Tarih:** 2026-04-18  
**Referans:** `/home/polat/grammar-hero/node_modules/next/dist/docs/01-app/`

---

## BREAKING CHANGES - Next.js 14/15 Alışkanlıklarından Kırılan Kurallar

### 1. ASYNC PARAMS ve SEARCHPARAMS (Next.js 15+, ZORUNLU v16)
**@docs: 01-getting-started/03-layouts-and-pages.md, 02-guides/upgrading/version-15.md**

**ESKI (v14):**
```tsx
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
}
```

**YENİ (v15+, v16 ZORUNLU):**
```tsx
export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
}
```

**ÖNEMLİ:** Next.js 16'da `params` ve `searchParams` artık **SADECE asynchronous** erişilebilir. Hiçbir sync fallback kalmadı.  
Senkron component'te kullanmak zorunlu ise React'ın `use()` hook'u gerekli:

```tsx
import { use } from 'react'

export default function Layout(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params)
  const slug = params.slug
}
```

**Etkilenen API'lar:**
- `params` → `Promise<Params>`
- `searchParams` → `Promise<SearchParams>` (pages sadece)
- `cookies()` → `await cookies()`
- `headers()` → `await headers()`
- `draftMode()` → `await draftMode()`

---

### 2. GLOBAL TYPE HELPERS: PageProps<'/path'> ve LayoutProps<'/path'>
**@docs: 01-getting-started/03-layouts-and-pages.md**

Next.js 16 otomatik type generator (`next typegen`) genel helper type'lar üretir:

```tsx
// ESKI (TypeScript inline type tanımı)
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { slug } = await params
}

// YENİ (Global Helper)
export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const query = await props.searchParams
}
```

**Üretilen Tipler:**
- `PageProps<'/path'>` - page component'leri için
- `LayoutProps<'/path'>` - layout component'leri için  
- `RouteContext` - API route'ları için

**Setup:** `npx next typegen` komutu çalıştırılırsa otomatik oluşturulur.

---

### 3. MIDDLEWARE → PROXY (İsim Değişikliği, Önemli)
**@docs: 01-getting-started/16-proxy.md, 02-guides/upgrading/version-16.md**

**Breaking Change:** `middleware.ts` DEPRECATED. Yeni adı: `proxy.ts`

**Dosya İsmini Değiştir:**
```bash
mv middleware.ts proxy.ts
```

**Function İsmini Değiştir:**
```tsx
// ESKI
export function middleware(request: NextRequest) {}

// YENİ
export function proxy(request: NextRequest) {}
```

**Next.config Flags Güncelle:**
- `skipMiddlewareUrlNormalize` → `skipProxyUrlNormalize`
- `experimental.middlewarePrefetch` → `experimental.proxyPrefetch`
- `experimental.middlewareClientMaxBodySize` → `experimental.proxyClientMaxBodySize`

**Not:** Proxy **Edge Runtime desteklemez**. Node.js runtime kullanır. Edge istiyorsan v15 canary'de kal.

---

### 4. REACT 19.2 + VIEW TRANSITIONS
**@docs: 02-guides/view-transitions.md, 02-guides/upgrading/version-16.md**

Next.js 16 React 19.2 ile gelir ve **View Transitions API** entegrasyonunu sunar.

**next.config.ts'te aktifleştir:**
```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,  // PLAN 1'de bahsedilen flag
  },
}

export default nextConfig
```

**React'ten import et ve kullan:**
```tsx
import { ViewTransition } from 'react'

// Shared element morphing
<ViewTransition name={`photo-${id}`}>
  <img src={photo} />
</ViewTransition>
```

View Transitions otomatik **route navigation**'ları sırasında aktive olur.

---

### 5. REVALIDATETAG SIGNATURE DEĞİŞTİKLİĞİ
**@docs: 02-guides/upgrading/version-16.md**

**ESKI:**
```ts
revalidateTag('posts')
```

**YENİ (v16 ZORUNLU):**
```ts
// İkinci argument (cacheLife profili) zorunlu
revalidateTag('posts', 'max')
```

**cacheLife Profilleri:** `'max'`, `'minutes=1'`, `'hours=24'` vs.

Eğer immediate expiration istiyorsan `updateTag()` kullan (Server Actions içinde):
```ts
'use server'
import { updateTag } from 'next/cache'

export async function updateArticle(id: string) {
  updateTag(`article-${id}`)  // read-your-writes semantics
}
```

---

### 6. IMAGE METADATA VE SITEMAP: ASYNC ID / PARAMS
**@docs: 02-guides/upgrading/version-16.md**

**opengraph-image.tsx / twitter-image.tsx:**
```tsx
// ESKI (v15)
export default function Image({ params, id }) {
  const slug = params.slug // sync
}

// YENİ (v16)
export default async function Image({ params, id }) {
  const slug = (await params).slug  // async
  const imageId = await id           // async
}
```

**sitemap.ts:**
```ts
// ESKI
export default async function sitemap({ id }) {
  const start = id * 50000  // id: number
}

// YENİ (v16)
export default async function sitemap({ id }) {
  const resolvedId = await id  // id: Promise<string>
  const start = Number(resolvedId) * 50000
}
```

---

### 7. TURBOPACK ARTIK DEFAULT (v16)
**@docs: 02-guides/upgrading/version-16.md**

`next dev` ve `next build` artık **varsayılan olarak Turbopack** kullanır.

```json
// ESKI (v15)
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack"
  }
}

// YENİ (v16)
{
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}
```

Webpack config varsa build fail edecek. Çözümler:
1. Turbopack'e geç: `npx @next/codemod upgrade latest`
2. Webpack koru: `next build --webpack`
3. Turbopack config migrate et

**Turbopack Config Yeri:** `experimental.turbopack` → `turbopack` (top-level)

---

### 8. LOCAL IMAGES + QUERY STRINGS GÜVENLIK
**@docs: 02-guides/upgrading/version-16.md**

```tsx
// PROBLEM (v16)
<Image src="/assets/photo?v=1" alt="..." />  // Enumeration saldırısı riski

// ÇÖZÜM: next.config.ts
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '?v=1',
      },
    ],
  },
}
```

---

### 9. PPR (Partial Prerendering) DEĞIŞTI
**@docs: 02-guides/upgrading/version-16.md**

v15'teki `experimental.ppr: true` v16'da **DEPRECATED**. Yeni sistem: `cacheComponents`

```ts
// ESKI (v15)
experimental: {
  ppr: true,
}

// YENİ (v16)
cacheComponents: true,
```

`export const experimental_ppr = true` route segment config'i otomatik silinecek (codemod ile).

---

## Plan 1'de Bahsedilen Varsayımları Doğrulama

### ✓ VERIFIED: `params` ve `searchParams` → Promise
**Durum:** DOĞRU ve ZORUNLU (v16)

v15'teki optional sync compatibility tamamen kaldırılmış. Tüm page, layout, route handler'lar için `await params`, `await searchParams` şarttır.

```tsx
// Bu çalışmaz (build error)
const slug = params.slug

// Bu gerekli
const slug = (await params).slug
```

---

### ✓ VERIFIED: PageProps<'/path'> Global Type
**Durum:** DOĞRU ve DESTEKLENİYOR

`next typegen` çalıştırırsa otomatik oluşturulur. TypeScript fully type-safe.

```tsx
// app/blog/[slug]/page.tsx
export default async function Page(props: PageProps<'/blog/[slug]'>) {
  // TS knows slug exists in params automatically
  const { slug } = await props.params
}
```

---

### ✓ VERIFIED: experimental.viewTransition Config Flag
**Durum:** DOĞRU

next.config.ts'te `experimental: { viewTransition: true }` eklenirse React 19.2 View Transitions entegre olur.

---

### ✓ VERIFIED: Middleware → Proxy Rename
**Durum:** DOĞRU ve ZORUNLU (v16)

- Dosya: `middleware.ts` → `proxy.ts`
- Function: `export function middleware` → `export function proxy`
- Config: `skipMiddlewareUrlNormalize` → `skipProxyUrlNormalize`

`npx @next/codemod@canary middleware-to-proxy .` komutu otomatik migrate edebilir.

---

### ✓ VERIFIED: React 19.2.4 + View Transitions Integration
**Durum:** DOĞRU

Package.json'da `react@19.2.4` ve `react-dom@19.2.4` zaten var. ViewTransition component React'ten import edilir.

---

## TAILWIND v4 Setup

**@docs: 01-getting-started/11-css.md**

```json
// package.json (zaten var)
{
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4"
}
```

**postcss.config.mjs:**
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

**app/globals.css:**
```css
@import 'tailwindcss';
```

---

## NEXAUTH v5 CREDENTIALS - Proje Context

Next.js 16'da NextAuth v5 (Beta) **Server Actions** ile entegre:

```tsx
// app/actions/auth.ts
'use server'

import { signIn, signOut } from '@/auth'
import { AuthError } from 'next-auth'

export async function login(email: string, password: string) {
  try {
    await signIn('credentials', { email, password, redirect: false })
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message }
    }
  }
}
```

**Proxy ile Auth Checks (Optional):**
```ts
// proxy.ts
import { auth } from '@/auth'

export async function proxy(request: NextRequest) {
  const session = await auth()
  
  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}
```

---

## PRISMA v7 - Database Setup

@prisma/client v7.7.0 zaten yapılandırılmış.

**prisma/schema.prisma:**
- Credentials table (email, hashed password)
- User accounts & sessions (NextAuth Adapter)
- Grammar lessons, exercises, user progress

Typical setup:
```
npx prisma migrate dev --name init
npx prisma generate
```

---

## SHADCN/UI CANARY

Mevcut Next.js 16 + React 19.2 ortamında uyumlu.

```bash
npx shadcn-ui@latest add  # Components'i ekle
```

---

## ENV VARIABLES - Checklist

**.env.local (GIT'E EKLEME):**
```
# Database
DATABASE_URL=...

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=...

# OAuth/Third-party (ihtiyaç varsa)
GITHUB_ID=...
GITHUB_SECRET=...
```

**.env.production (SECRET MANAGEMENT):**
Vercel/Hosting'e via secrets veya vault ekle.

**NEXT_PUBLIC_ prefix:** Client'ta görünen değerler sadece burada.

---

## FORM HANDLING + SERVER ACTIONS

@docs: 02-guides/forms.md, 01-getting-started/07-mutating-data.md

```tsx
// app/ui/login-form.tsx
'use client'

import { login } from '@/app/actions/auth'
import { useActionState } from 'react'

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined)

  return (
    <form action={action}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      {state?.error && <p>{state.error}</p>}
      <button disabled={pending}>
        {pending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}
```

**Not:** `useFormStatus` (v19) içinde `pending`, `data`, `method`, `action` keys var.

---

## ERROR HANDLING

@docs: 01-getting-started/10-error-handling.md

**app/error.tsx:**
```tsx
'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

**app/not-found.tsx:**
```tsx
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>
}
```

---

## API ROUTES (ROUTE HANDLERS)

@docs: 01-getting-started/15-route-handlers.md

```tsx
// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  
  // Authenticate
  // Return response
  
  return NextResponse.json({ success: true }, { status: 200 })
}
```

---

## CODEMOD MIGRATION TOOLS

@docs: 02-guides/upgrading/codemods.md

**Otomatik Upgrade (önerilen):**
```bash
npx @next/codemod upgrade latest
```

Bu otomatik yapar:
- `params` ve `searchParams`'ı async hale getirir
- `middleware.ts` → `proxy.ts` migrate eder
- `experimental_ppr` config'ini kaldırır
- `unstable_` prefix'i siler
- Turbopack config'ini update eder

**Spesifik Codemods:**
```bash
# Middleware → Proxy
npx @next/codemod@latest middleware-to-proxy .

# Async APIs
npx @next/codemod@latest migrate-to-async-dynamic-apis .

# unstable_ prefix
npx @next/codemod@latest remove-unstable-prefix .

# experimental_ppr
npx @next/codemod@latest remove-experimental-ppr .
```

---

## DEPLOYMENT CHECKLIST

### Vercel (Recommended)
```bash
vercel deploy
```

Otomatik Next.js 16, React 19, Node.js LTS optimizasyonları.

### Self-hosted (Node.js)
```bash
npm install
npm run build
npm start
```

Node.js 20.9+ gerekli (v16.2.4).

---

## BROWSER SUPPORT

Next.js 16.2.4 minimum:
- Chrome 111+
- Edge 111+
- Firefox 111+
- Safari 16.4+

View Transitions API tüm modern browser'larda destek var (Safari'de animation farklı olabilir).

---

## FAZ 1'E GEÇMEDEN ÖNCE YAPILACAKLAR

### ✓ Environment Setup
- [x] Node.js 20.9+ yüklü mü? (`node -v`)
- [x] `npm install` veya `pnpm install` çalıştı mı?
- [x] `.env.local` dosyası oluşturuldu ve gerekli vars dolduruldu?
- [x] DATABASE_URL set edildi (PostgreSQL, SQLite, vs)?
- [x] NEXTAUTH_SECRET generate edildi?

### ✓ Type Generation
- [x] `npx next typegen` çalıştırıldı mı? (PageProps, LayoutProps tiplemeleri)
- [x] tsconfig.json TypeScript 5+ için yapılandırılmış?
- [x] `next-env.d.ts` auto-generated mi?

### ✓ Prisma Setup
- [x] `npx prisma migrate dev --name init` çalıştırıldı?
- [x] `npx prisma generate` (Prisma Client oluşturuldu)?
- [x] Database connection test edildi?

### ✓ Tailwind v4 Setup
- [x] `postcss.config.mjs` var ve `@tailwindcss/postcss` plugin'i var mı?
- [x] `app/globals.css` dosyasında `@import 'tailwindcss'` var mı?
- [x] Root layout'ta globals.css import edildi?

### ✓ NextAuth v5 Setup
- [x] `auth.ts` (auth config) oluşturuldu?
- [x] Credentials provider configured mi?
- [x] Prisma Adapter ([auth/prisma-adapter](https://authjs.dev/reference/adapters/prisma)) setup edildi?
- [x] Callback functions (signIn, jwt, etc) tanımlandı?
- [x] `NEXTAUTH_SECRET` env var'da random string? (`openssl rand -base64 32`)

### ✓ Codemod Runs
- [x] `npx @next/codemod upgrade latest` çalıştırıldı ve template'te changes review edildi?
- [x] Middleware varsa `npx @next/codemod middleware-to-proxy .` çalıştırıldı?

### ✓ Development Server
- [x] `npm run dev` çalıştırıldı?
- [x] http://localhost:3000 erişilebiliyor?
- [x] Console'da error yok?
- [x] Turbopack default çalışıyor (webpack değil)?

### ✓ Version Verification
- [x] `next version` → 16.2.4?
- [x] `cat package.json` → react 19.2.4, next-auth 5.0.0-beta.31?
- [x] `cat package.json` → tailwindcss 4, prisma 7.7.0?

### ✓ Initial Build
- [x] `npm run build` başarılı mu?
- [x] `.next` folder oluştu ve file'lar var mı?
- [x] Build warnings'leri check (deprecated API usage vs)?

---

## COMMON GOTCHAS & TIPS

### Async Params Unutma
En sık hata: `params.slug` (async olmadan), build pass eder ama runtime error. Her zaman `await params` yap.

### Server vs Client Components
Şunu unutma:
- Server Components: `async`, db query, secrets, **default**
- Client Components: `'use client'` lazım, useState, useEffect, hooks için
- Params: Server Component + async → OK. Client Component → React `use()` hook gerekli

### Form Actions
Form submit'i Server Action'a gönder (default Next.js + React 19 pattern). XSS/CSRF protection built-in.

### Caching Strategy
- `revalidateTag` + `cacheLife` profili: Stale-while-revalidate (CDN-friendly)
- `updateTag`: Read-your-writes (instant UI update)
- `refresh()`: Manual router refresh from Server Action

### View Transitions
Safari'de animation'lar different olabilir ama functionality fall back without errors. Safe to use.

---

## SONRAKI ADIMLAR (FAZ 1) — Plan 1 ile Hizalı

> ⚠ Genel proje yapısı / pages / DB şeması Plan 1'in **Faz 3+** kapsamı.
> **Faz 1 = SADECE design system core**. Pages/auth/DB sonra gelecek.

Plan 1'in Faz 1 çıktısı: "Token'lar canlı". Yapılacaklar:

1. **`src/app/globals.css`** — Plan 1 §1 design token'ları
   - Ham renkler: `--brand-50…950` (yeşil), `--accent-50…950` (mor), `--neutral-0…950`
   - Semantik token'lar: `--background`, `--foreground`, `--primary`, `--card`, `--border`, `--ring`, `--destructive`, `--muted`
   - Gamification token'ları: `--xp`, `--hearts`, `--streak`, `--gem`, `--correct`, `--incorrect`, `--button-shadow`
   - Tipografi (`--text-display` … `--text-sm`)
   - Spacing · Radius · Shadow (özellikle chunky 3D `--shadow-button`) · Motion (`--ease-bounce`)
   - Tailwind v4 `@theme inline` syntax + `.dark` override

2. **`src/lib/utils.ts`** — `cn()` helper (clsx + tailwind-merge)

3. **`src/lib/use-theme.ts`** — minimal theme hook (~30 satır, `next-themes` YERINE)
   - localStorage + `html.dark` class toggle + system preference fallback

4. **`src/app/layout.tsx`** — anti-FOUC inline script + `<Toaster>` + tema

5. **`src/app/page.tsx` (geçici)** — token showcase
   - Tüm renk/spacing/shadow'u gözle kontrol için (light + dark)

**Faz 1 çıkışı:** Tarayıcıda token'lar görünür, dark mode FOUC yok.
Sonra Faz 2 (shadcn init + chunky button) → Faz 3 (AppShell layout) → ... → Faz 7 (auth/onboarding).

---

## KAYNAKLAR & REFERANSLAR

- **Upgrading:** `/home/polat/grammar-hero/node_modules/next/dist/docs/01-app/02-guides/upgrading/`
- **App Router Guides:** `/home/polat/grammar-hero/node_modules/next/dist/docs/01-app/01-getting-started/`
- **Authentication:** `/home/polat/grammar-hero/node_modules/next/dist/docs/01-app/02-guides/authentication.md`
- **View Transitions:** `/home/polat/grammar-hero/node_modules/next/dist/docs/01-app/02-guides/view-transitions.md`
- **Official Docs:** https://nextjs.org/docs/app
- **NextAuth v5:** https://authjs.dev
- **Prisma:** https://www.prisma.io/docs

---

**Hazırlayan:** Claude Opus 4.7 (1M context)  
**Status:** Faz 0 Tamamlandı - Faz 1'e Geçiş Hazır
