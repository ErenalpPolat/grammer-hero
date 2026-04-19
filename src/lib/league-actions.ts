"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { markLeagueResultNotified } from "@/lib/league";

export async function markLeagueResultNotifiedAction(
  membershipId: string,
): Promise<{ ok: true } | { error: string }> {
  const session = await auth();
  if (!session?.user?.id) return { error: "Oturum yok" };

  await markLeagueResultNotified(membershipId, session.user.id);
  revalidatePath("/leaderboard");
  return { ok: true };
}
