import { expect, test } from "@playwright/test";
import { completeOnboarding, login, uniqueUserName } from "./helpers";

/**
 * Proxy auth-gated routes — DB gerektirir.
 */
test.describe("protected routes", () => {
  test("/learn unauth → /login redirect with callbackUrl", async ({ page }) => {
    await page.goto("/learn");
    await page.waitForURL(/\/login/);
    expect(page.url()).toContain("callbackUrl=%2Flearn");
  });

  test("/leaderboard unauth → /login redirect", async ({ page }) => {
    await page.goto("/leaderboard");
    await page.waitForURL(/\/login/);
    expect(page.url()).toContain("callbackUrl=%2Fleaderboard");
  });

  test("/profile unauth → /login redirect", async ({ page }) => {
    await page.goto("/profile");
    await page.waitForURL(/\/login/);
  });

  test("logged-in + onboarded user can reach /learn", async ({ page }) => {
    const name = uniqueUserName("onboarded");
    await login(page, name);
    await completeOnboarding(page);
    await expect(page).toHaveURL(/\/learn/);
    await expect(page.getByRole("heading", { name: /Öğren|Ünite|Learn/i }).first()).toBeVisible();
  });

  test("logged-in user can navigate to /leaderboard", async ({ page }) => {
    const name = uniqueUserName("lb");
    await login(page, name);
    await completeOnboarding(page);
    await page.goto("/leaderboard");
    await expect(page).toHaveURL(/\/leaderboard/);
    await expect(page.getByRole("heading", { name: /Liderlik|Lig/i }).first()).toBeVisible();
  });
});
