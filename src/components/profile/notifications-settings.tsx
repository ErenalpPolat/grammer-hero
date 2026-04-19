"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const STORAGE_KEY = "grammar-hero-notifications";

interface NotificationsState {
  dailyReminder: boolean;
  reminderTime: string;
  streakAlert: boolean;
}

const DEFAULT: NotificationsState = {
  dailyReminder: true,
  reminderTime: "19:00",
  streakAlert: true,
};

function readState(): NotificationsState {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT;
    return { ...DEFAULT, ...JSON.parse(raw) };
  } catch {
    return DEFAULT;
  }
}

export function NotificationsSettings() {
  const [state, setState] = useState<NotificationsState>(DEFAULT);
  const [hydrated, setHydrated] = useState(false);

  // Sync from localStorage on mount (avoid SSR mismatch)
  if (!hydrated && typeof window !== "undefined") {
    setHydrated(true);
    setState(readState());
  }

  const update = (next: Partial<NotificationsState>) => {
    const merged = { ...state, ...next };
    setState(merged);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {
      // ignore storage errors
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <Label htmlFor="daily-reminder" className="text-sm font-medium">
            Günlük hatırlatıcı
          </Label>
          <p className="text-xs text-muted-foreground">
            Belirlediğin saatte ders yapmazsan bildirim al
          </p>
        </div>
        <Switch
          id="daily-reminder"
          checked={state.dailyReminder}
          onCheckedChange={(v) => {
            update({ dailyReminder: v });
            toast.success(v ? "Hatırlatıcı açık" : "Hatırlatıcı kapalı");
          }}
        />
      </div>

      {state.dailyReminder && (
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="reminder-time" className="text-sm font-medium">
            Saat
          </Label>
          <input
            id="reminder-time"
            type="time"
            value={state.reminderTime}
            onChange={(e) => update({ reminderTime: e.target.value })}
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      )}

      <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
        <div className="min-w-0">
          <Label htmlFor="streak-alert" className="text-sm font-medium">
            Streak uyarısı
          </Label>
          <p className="text-xs text-muted-foreground">
            Streak&apos;ini kaybetmek üzereysen uyar
          </p>
        </div>
        <Switch
          id="streak-alert"
          checked={state.streakAlert}
          onCheckedChange={(v) => update({ streakAlert: v })}
        />
      </div>

      <p className="text-xs text-muted-foreground">
        ⚠ Tarayıcı bildirimleri için Service Worker kurulumu gerekli — şu an sadece
        tercihler kaydediliyor.
      </p>
    </div>
  );
}
