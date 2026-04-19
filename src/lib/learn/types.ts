export type LessonStatus = "locked" | "available" | "completed";

export type LessonIcon =
  | "book"
  | "sun"
  | "clock"
  | "rocket"
  | "zap"
  | "sparkles"
  | "trophy"
  | "messageCircle"
  | "star"
  | "award"
  | "puzzle"
  | "layers";

export type Difficulty = "Başlangıç" | "Orta" | "İleri";

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  status: LessonStatus;
  /** Best score 0-100 for completed lessons */
  bestScore?: number;
  /** Progress ring 0-100 (completed always 100) */
  progress?: number;
  icon?: LessonIcon;
  /** Marks the last lesson in a unit as the "sınav" (displayed differently) */
  isUnitExam?: boolean;
}

export interface Unit {
  slug: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  status: LessonStatus;
  lessons: Lesson[];
}
