"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signOut } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import {
  DAILY_GOALS,
  LANGUAGES,
  LEVELS,
} from "@/lib/validations";

export interface SettingsActionResult {
  ok?: true;
  error?: string;
}

export async function updateLearningPrefsAction(formData: FormData): Promise<SettingsActionResult> {
  const user = await requireSessionUser({ allowIncompleteOnboarding: true });

  const language = String(formData.get("targetLanguage") ?? "");
  const level = String(formData.get("level") ?? "");
  const goalRaw = String(formData.get("dailyGoalMinutes") ?? "");
  const goal = Number.parseInt(goalRaw, 10);

  if (!(LANGUAGES as readonly string[]).includes(language)) return { error: "Geçersiz dil" };
  if (!(LEVELS as readonly string[]).includes(level)) return { error: "Geçersiz seviye" };
  if (!(DAILY_GOALS as readonly number[]).includes(goal)) return { error: "Geçersiz hedef" };

  await prisma.user.update({
    where: { id: user.id },
    data: { targetLanguage: language, level, dailyGoalMinutes: goal },
  });
  revalidatePath("/profile/settings");
  revalidatePath("/profile");
  return { ok: true };
}

export async function deleteAccountAction(): Promise<never> {
  const user = await requireSessionUser({ allowIncompleteOnboarding: true });
  await prisma.user.delete({ where: { id: user.id } });
  await signOut({ redirect: false });
  redirect("/");
}
