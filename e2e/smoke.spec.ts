import { expect, test } from "@playwright/test";

/**
 * Smoke tests — DB gerektirmez. Sadece sayfaların yüklendiğini doğrular.
 * Login formu ve public sayfalar.
 */
test.describe("smoke", () => {
  test("landing page loads", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Grammar Hero|Dilbilgisi/i);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("login page renders form", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByLabel("Adın")).toBeVisible();
    await expect(page.getByRole("button", { name: /Magic Link/i })).toBeVisible();
  });

  test("features page loads", async ({ page }) => {
    await page.goto("/features");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("about page loads", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("404 page for unknown route", async ({ page }) => {
    const response = await page.goto("/kesinlikle-olmayan-sayfa");
    expect(response?.status()).toBe(404);
  });
});
