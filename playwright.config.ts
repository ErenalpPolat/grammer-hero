import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright E2E config.
 *
 * Gereksinim:
 * - DATABASE_URL ve AUTH_SECRET `.env.local`'de ayarlı
 * - prisma migrations uygulanmış (`pnpm db:migrate`)
 *
 * Config, `pnpm dev` üzerinden Turbopack dev server başlatır.
 * Smoke testleri DB'siz çalışabilir, auth/quiz testleri DB gerektirir.
 */
export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  expect: { timeout: 5_000 },

  // DB shared state'i var — race avoid etmek için serial çalıştır.
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,

  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },

  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],

  webServer: {
    command: "pnpm dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
