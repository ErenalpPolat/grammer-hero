/** Lig sistemi sabitleri. 10 tier, 15 kişilik haftalık gruplar. */

export const LEAGUE_GROUP_SIZE = 15;
export const LEAGUE_PROMOTE_COUNT = 3;
export const LEAGUE_DEMOTE_COUNT = 3;

/** 1. → 50 gem, 2. → 30 gem, 3. → 20 gem. Diğer sıralar → 0. */
export const LEAGUE_PODIUM_GEMS: Record<number, number> = {
  1: 50,
  2: 30,
  3: 20,
};

export interface LeagueTier {
  /** 0=Bronz … 9=Elmas */
  index: number;
  name: string;
  emoji: string;
  /** Tailwind class — tier rengi (arkaplan / vurgu için). */
  accentClass: string;
}

export const LEAGUE_TIERS: readonly LeagueTier[] = [
  { index: 0, name: "Bronz Lig", emoji: "🥉", accentClass: "bg-amber-900/20 text-amber-700 dark:text-amber-400" },
  { index: 1, name: "Gümüş Lig", emoji: "🥈", accentClass: "bg-zinc-300/30 text-zinc-700 dark:text-zinc-300" },
  { index: 2, name: "Altın Lig", emoji: "🥇", accentClass: "bg-yellow-300/30 text-yellow-700 dark:text-yellow-300" },
  { index: 3, name: "Safir Lig", emoji: "💙", accentClass: "bg-blue-400/20 text-blue-700 dark:text-blue-300" },
  { index: 4, name: "Yakut Lig", emoji: "❤️", accentClass: "bg-red-400/20 text-red-700 dark:text-red-300" },
  { index: 5, name: "Zümrüt Lig", emoji: "💚", accentClass: "bg-emerald-400/20 text-emerald-700 dark:text-emerald-300" },
  { index: 6, name: "Ametist Lig", emoji: "💜", accentClass: "bg-purple-400/20 text-purple-700 dark:text-purple-300" },
  { index: 7, name: "İnci Lig", emoji: "🤍", accentClass: "bg-slate-200/40 text-slate-700 dark:text-slate-300" },
  { index: 8, name: "Obsidyen Lig", emoji: "🖤", accentClass: "bg-neutral-800/30 text-neutral-800 dark:text-neutral-200" },
  { index: 9, name: "Elmas Lig", emoji: "💎", accentClass: "bg-cyan-400/20 text-cyan-700 dark:text-cyan-300" },
] as const;

export const LEAGUE_MAX_TIER = LEAGUE_TIERS.length - 1;

export function getTier(index: number): LeagueTier {
  const clamped = Math.max(0, Math.min(LEAGUE_MAX_TIER, index));
  return LEAGUE_TIERS[clamped];
}
