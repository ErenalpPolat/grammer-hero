import { addDays, isoDayOfWeek, startOfDay, toIsoDate } from "@/lib/date";
import { cn } from "@/lib/utils";

export interface ActivityHeatmapProps {
  /** Map of ISO date (YYYY-MM-DD) → lesson count */
  activity: Record<string, number>;
  /** Number of months to show. Default 6. */
  months?: number;
  /** End date (inclusive). Defaults to today. */
  endDate?: Date;
}

const MONTH_LABELS = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
const DAY_LABELS = ["Pzt", "", "Çar", "", "Cum", "", "Paz"]; // show every other

function bucketTone(count: number): string {
  if (count <= 0) return "bg-border/60";
  if (count === 1) return "bg-brand-200 dark:bg-brand-900/80";
  if (count === 2) return "bg-brand-400 dark:bg-brand-700";
  return "bg-brand-600 dark:bg-brand-500";
}

export function ActivityHeatmap({ activity, months = 6, endDate }: ActivityHeatmapProps) {
  const end = startOfDay(endDate ?? new Date());
  // Total weeks: ~ months * 4.34
  const totalWeeks = Math.round((months * 30.4) / 7);
  const startSunday = addDays(end, -(totalWeeks * 7) + 1);
  // Align start to Monday (week begins Pzt)
  const startDow = isoDayOfWeek(startSunday);
  const gridStart = addDays(startSunday, -startDow);

  // Build grid: 7 rows × totalWeeks+1 cols
  const cols: { date: Date; count: number; inRange: boolean }[][] = [];
  for (let w = 0; w <= totalWeeks; w++) {
    const col: { date: Date; count: number; inRange: boolean }[] = [];
    for (let d = 0; d < 7; d++) {
      const date = addDays(gridStart, w * 7 + d);
      const iso = toIsoDate(date);
      const count = activity[iso] ?? 0;
      const inRange = date >= startSunday && date <= end;
      col.push({ date, count, inRange });
    }
    cols.push(col);
  }

  // Month labels: show only on first column of each new month
  const monthColumns: { colIdx: number; month: number }[] = [];
  let lastMonth = -1;
  cols.forEach((col, idx) => {
    const m = col[0].date.getMonth();
    if (m !== lastMonth) {
      monthColumns.push({ colIdx: idx, month: m });
      lastMonth = m;
    }
  });

  return (
    <div className="overflow-x-auto">
      <div className="inline-grid" style={{ gridTemplateColumns: `auto repeat(${cols.length}, minmax(0, 1fr))`, gap: "3px" }}>
        {/* Month header row */}
        <span />
        {cols.map((_, i) => {
          const label = monthColumns.find((mc) => mc.colIdx === i);
          return (
            <span key={`m-${i}`} className="text-[10px] text-muted-foreground">
              {label && label.colIdx < cols.length - 1 ? MONTH_LABELS[label.month] : ""}
            </span>
          );
        })}

        {/* Day rows */}
        {Array.from({ length: 7 }).map((_, dayIdx) => (
          <DayRow
            key={dayIdx}
            dayIdx={dayIdx}
            cols={cols}
          />
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        <span>Az</span>
        {[0, 1, 2, 3].map((n) => (
          <span key={n} className={cn("size-3 rounded-sm", bucketTone(n))} aria-hidden />
        ))}
        <span>Çok</span>
      </div>
    </div>
  );
}

function DayRow({
  dayIdx,
  cols,
}: {
  dayIdx: number;
  cols: { date: Date; count: number; inRange: boolean }[][];
}) {
  return (
    <>
      <span className="pr-2 text-[10px] text-muted-foreground">{DAY_LABELS[dayIdx]}</span>
      {cols.map((col, colIdx) => {
        const cell = col[dayIdx];
        if (!cell.inRange) {
          return <span key={colIdx} aria-hidden />;
        }
        const iso = toIsoDate(cell.date);
        return (
          <span
            key={colIdx}
            className={cn(
              "size-3 rounded-sm transition-colors",
              bucketTone(cell.count),
            )}
            title={`${iso} — ${cell.count} ders`}
            aria-label={`${iso} ${cell.count} ders`}
          />
        );
      })}
    </>
  );
}
