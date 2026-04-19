import { Award, Flame, Medal, Sparkles, Target, Trophy, Zap } from "lucide-react";
import type { Badge } from "@/components/profile/badge-grid";

export function mockBadges(opts: { lessonsCompleted: number; longestStreak: number }): Badge[] {
  const earned = (cond: boolean) => cond;
  return [
    { id: "first-lesson", label: "İlk Ders", description: "İlk dersini tamamla", icon: Sparkles, earned: earned(opts.lessonsCompleted >= 1) },
    { id: "streak-7", label: "7 Gün Streak", description: "7 gün üst üste pratik yap", icon: Flame, earned: earned(opts.longestStreak >= 7) },
    { id: "perfect", label: "Mükemmel", description: "Bir oyunu tam skorla bitir", icon: Medal, earned: false },
    { id: "daily-5", label: "5 Gün Hedef", description: "5 gün üst üste günlük hedefi tamamla", icon: Target, earned: false },
    { id: "streak-30", label: "30 Gün", description: "30 gün streak", icon: Flame, earned: earned(opts.longestStreak >= 30) },
    { id: "all-basics", label: "Tüm Başlangıç", description: "Başlangıç ünitesinin tamamını bitir", icon: Award, earned: false },
    { id: "lightning", label: "Şimşek", description: "Bir dersi 60 saniyede bitir", icon: Zap, earned: false },
    { id: "champion", label: "Şampiyon", description: "Liderlikte ilk 3", icon: Trophy, earned: false },
  ];
}
