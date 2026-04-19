import { LessonCard } from "./lesson-card";
import { UnitBanner } from "./unit-banner";
import type { Unit } from "@/lib/learn/types";

/** Zigzag horizontal offset pattern (in multiples of card-size/2). */
const OFFSET_PATTERN = [0, 1, 0, -1, 0, 1];

export function SkillTree({ units }: { units: Unit[] }) {
  return (
    <div className="space-y-10">
      {units.map((unit, unitIdx) => {
        const previousUnit = unitIdx > 0 ? units[unitIdx - 1] : null;
        const previousUnitTitle = previousUnit?.title;

        return (
          <section key={unit.slug} aria-labelledby={`unit-${unit.slug}`}>
            <UnitBanner unit={unit} />
            {unit.status !== "locked" ? (
              <div className="mt-8 flex flex-col items-center gap-6">
                {unit.lessons.map((lesson, i) => {
                  const offset = OFFSET_PATTERN[i % OFFSET_PATTERN.length];
                  const previousLesson = i > 0 ? unit.lessons[i - 1] : null;
                  const lockReason =
                    lesson.status === "locked" && previousLesson
                      ? `Önce "${previousLesson.title}" dersini tamamla`
                      : undefined;
                  return (
                    <div
                      key={lesson.id}
                      className="transition-transform"
                      style={{ transform: `translateX(${offset * 3}rem)` }}
                    >
                      <LessonCard
                        lessonId={lesson.id}
                        title={lesson.title}
                        status={lesson.status}
                        icon={lesson.icon}
                        bestScore={lesson.bestScore}
                        progress={lesson.progress}
                        isUnitExam={lesson.isUnitExam}
                        lockReason={lockReason}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              previousUnitTitle && (
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  🔒 Önce <strong>{previousUnitTitle}</strong> ünitesinin tüm derslerini tamamla
                </p>
              )
            )}
          </section>
        );
      })}
    </div>
  );
}
