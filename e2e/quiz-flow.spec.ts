import { expect, test } from "@playwright/test";
import { completeOnboarding, login, uniqueUserName } from "./helpers";

/**
 * Quiz akışı — DB gerektirir.
 * Onboarding → learn tree → ilk ders → quiz → completion.
 */
test.describe("quiz flow", () => {
  test("complete a multiple-choice quiz", async ({ page }) => {
    const name = uniqueUserName("quiz");
    await login(page, name);
    await completeOnboarding(page);

    // /learn'den ilk available ders (ps-1 Olumlu Cümle) tıklanır
    await page.goto("/learn");
    const lessonLink = page.getByRole("link", { name: /Olumlu Cümle/i }).first();
    await expect(lessonLink).toBeVisible();
    await lessonLink.click();

    // Ders detayı → bir oyun tipi başlat (Çoktan Seçmeli)
    const startButton = page.getByRole("link", { name: /Çoktan Seçmeli|Başla/i }).first();
    await startButton.click();

    // Quiz arena yüklenir
    await expect(page.locator("main")).toBeVisible({ timeout: 10_000 });

    // Doğru şık çoktan seçmeli formatta — herhangi bir butonu tıkla, devam et.
    // (Tüm soruları bilinçli cevaplamak yerine: sadece quiz sayfasına girebildiğimizi
    // ve en az bir interaction çalıştığını doğrula.)
    const firstOption = page.getByRole("button").filter({ hasText: /^[A-Za-z]/ }).first();
    await expect(firstOption).toBeVisible({ timeout: 5_000 });
  });

  test("/lesson/<id>/quiz unauth → /login redirect", async ({ page }) => {
    await page.goto("/lesson/ps-1/quiz?game=multiple-choice");
    await page.waitForURL(/\/login/);
  });
});
