"use server";

import webpush from "web-push";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

let vapidConfigured = false;

/**
 * Lazily configure web-push with VAPID credentials from env.
 * Returns true if configuration succeeded.
 */
function ensureVapidConfigured(): boolean {
  if (vapidConfigured) return true;
  const publicKey = process.env.VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT ?? "mailto:admin@example.com";
  if (!publicKey || !privateKey) {
    console.warn("[push] VAPID keys missing — push disabled");
    return false;
  }
  webpush.setVapidDetails(subject, publicKey, privateKey);
  vapidConfigured = true;
  return true;
}

export interface PushActionResult {
  ok?: true;
  error?: string;
}

export interface BrowserSubscription {
  endpoint: string;
  keys: { p256dh: string; auth: string };
}

/** Save a browser push subscription to the DB (upsert by endpoint). */
export async function subscribeToPushAction(
  subscription: BrowserSubscription,
): Promise<PushActionResult> {
  const session = await auth();
  if (!session?.user?.id) return { error: "Oturum yok" };

  if (!subscription.endpoint || !subscription.keys?.p256dh || !subscription.keys?.auth) {
    return { error: "Geçersiz abonelik" };
  }

  await prisma.pushSubscription.upsert({
    where: { endpoint: subscription.endpoint },
    create: {
      userId: session.user.id,
      endpoint: subscription.endpoint,
      p256dh: subscription.keys.p256dh,
      auth: subscription.keys.auth,
    },
    update: {
      userId: session.user.id,
      p256dh: subscription.keys.p256dh,
      auth: subscription.keys.auth,
    },
  });

  return { ok: true };
}

/** Remove a subscription by endpoint (idempotent). */
export async function unsubscribeFromPushAction(
  endpoint: string,
): Promise<PushActionResult> {
  const session = await auth();
  if (!session?.user?.id) return { error: "Oturum yok" };

  await prisma.pushSubscription.deleteMany({
    where: { endpoint, userId: session.user.id },
  });

  return { ok: true };
}

export interface PushPayload {
  title: string;
  body: string;
  /** Path inside the app to open on click. Default: "/" */
  url?: string;
}

/**
 * Send a push notification to all of the current user's subscribed devices.
 * 410/404 responses clean up stale subscriptions automatically.
 */
export async function sendTestPushAction(): Promise<PushActionResult> {
  const session = await auth();
  if (!session?.user?.id) return { error: "Oturum yok" };

  if (!ensureVapidConfigured()) {
    return { error: "VAPID anahtarları ayarlı değil. .env.local'i kontrol et." };
  }

  const subs = await prisma.pushSubscription.findMany({
    where: { userId: session.user.id },
    select: { id: true, endpoint: true, p256dh: true, auth: true },
  });

  if (subs.length === 0) {
    return { error: "Kayıtlı cihaz yok. Önce bildirimleri aç." };
  }

  const payload: PushPayload = {
    title: "Grammar Hero",
    body: "Test bildirimi — her şey çalışıyor! 🎉",
    url: "/learn",
  };

  await Promise.allSettled(
    subs.map(async (s) => {
      try {
        await webpush.sendNotification(
          {
            endpoint: s.endpoint,
            keys: { p256dh: s.p256dh, auth: s.auth },
          },
          JSON.stringify(payload),
        );
      } catch (err: unknown) {
        // 410 Gone / 404 Not Found → subscription is stale, delete it
        const statusCode =
          typeof err === "object" && err !== null && "statusCode" in err
            ? (err as { statusCode: number }).statusCode
            : 0;
        if (statusCode === 404 || statusCode === 410) {
          await prisma.pushSubscription.delete({ where: { id: s.id } }).catch(() => {});
        } else {
          console.warn("[push] send failed:", err);
        }
      }
    }),
  );

  return { ok: true };
}

/**
 * Broadcast a push to a specific user (server-side helper, e.g., for scheduled reminders).
 * Not exposed as a public action — call from trusted server code.
 */
export async function sendPushToUser(
  userId: string,
  payload: PushPayload,
): Promise<{ sent: number; pruned: number }> {
  if (!ensureVapidConfigured()) return { sent: 0, pruned: 0 };

  const subs = await prisma.pushSubscription.findMany({
    where: { userId },
    select: { id: true, endpoint: true, p256dh: true, auth: true },
  });

  let sent = 0;
  let pruned = 0;
  await Promise.allSettled(
    subs.map(async (s) => {
      try {
        await webpush.sendNotification(
          { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
          JSON.stringify(payload),
        );
        sent += 1;
      } catch (err: unknown) {
        const statusCode =
          typeof err === "object" && err !== null && "statusCode" in err
            ? (err as { statusCode: number }).statusCode
            : 0;
        if (statusCode === 404 || statusCode === 410) {
          await prisma.pushSubscription.delete({ where: { id: s.id } }).catch(() => {});
          pruned += 1;
        }
      }
    }),
  );

  return { sent, pruned };
}
