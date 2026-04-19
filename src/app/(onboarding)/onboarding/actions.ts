"use server";

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { seedReviewCardsIfEmpty } from "@/lib/review";
import {
  OnboardingGoalSchema,
  OnboardingLanguageSchema,
  OnboardingLevelSchema,
} from "@/lib/validations";

async function requireUser() {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Not authenticated");
  return session.user.id;
}

export async function setLanguageAction(formData: FormData) {
  const userId = await requireUser();
  const parsed = OnboardingLanguageSchema.safeParse({
    language: formData.get("language"),
  });
  if (!parsed.success) return;

  await prisma.user.update({
    where: { id: userId },
    data: { targetLanguage: parsed.data.language },
  });
  redirect("/onboarding/level");
}

export async function setLevelAction(formData: FormData) {
  const userId = await requireUser();
  const parsed = OnboardingLevelSchema.safeParse({
    level: formData.get("level"),
  });
  if (!parsed.success) return;

  await prisma.user.update({
    where: { id: userId },
    data: { level: parsed.data.level },
  });
  redirect("/onboarding/goal");
}

export async function setGoalAction(formData: FormData) {
  const userId = await requireUser();
  const parsed = OnboardingGoalSchema.safeParse({
    dailyGoalMinutes: formData.get("dailyGoalMinutes"),
  });
  if (!parsed.success) return;

  await prisma.user.update({
    where: { id: userId },
    data: {
      dailyGoalMinutes: parsed.data.dailyGoalMinutes,
      onboardingCompleted: true,
    },
  });
  await seedReviewCardsIfEmpty(userId);
  redirect("/learn");
}
