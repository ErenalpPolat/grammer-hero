import type { Unit } from "./types";

export const MOCK_UNITS: Unit[] = [
  {
    slug: "present-simple",
    title: "Şimdiki Zaman",
    description: "Alışkanlıklar, genel doğrular, tarifeli olaylar — dilbilgisinin ilk taşı.",
    difficulty: "Başlangıç",
    status: "available",
    lessons: [
      {
        id: "ps-1",
        title: "Olumlu Cümle",
        description: '"I play football every day."',
        status: "completed",
        bestScore: 100,
        progress: 100,
        icon: "sun",
      },
      {
        id: "ps-2",
        title: "Olumsuz Cümle",
        description: '"I do not play football."',
        status: "completed",
        bestScore: 95,
        progress: 100,
        icon: "sparkles",
      },
      {
        id: "ps-3",
        title: "Soru Cümlesi",
        description: '"Do you play football?"',
        status: "completed",
        bestScore: 80,
        progress: 100,
        icon: "messageCircle",
      },
      {
        id: "ps-4",
        title: "3. Tekil Şahıs",
        description: '"She plays the piano."',
        status: "available",
        progress: 0,
        icon: "star",
      },
      {
        id: "ps-5",
        title: "Sık Kullanılan Fiiller",
        description: "have, do, go, come, make…",
        status: "locked",
        icon: "zap",
      },
      {
        id: "ps-6",
        title: "Ünite Sınavı",
        description: "Tüm konuların karışık soruları",
        status: "locked",
        icon: "trophy",
        isUnitExam: true,
      },
    ],
  },
  {
    slug: "past-simple",
    title: "Geçmiş Zaman",
    description: "Düzenli ve düzensiz fiiller, geçmişteki belirli olaylar.",
    difficulty: "Başlangıç",
    status: "locked",
    lessons: [
      { id: "past-1", title: "Düzenli Fiiller", status: "locked", icon: "clock" },
      { id: "past-2", title: "Düzensiz Fiiller", status: "locked", icon: "layers" },
      { id: "past-3", title: "Olumsuz Cümle", status: "locked", icon: "sparkles" },
      { id: "past-4", title: "Soru Cümlesi", status: "locked", icon: "messageCircle" },
      { id: "past-5", title: "Zaman Belirteçleri", status: "locked", icon: "zap" },
      { id: "past-6", title: "Ünite Sınavı", status: "locked", icon: "trophy", isUnitExam: true },
    ],
  },
  {
    slug: "present-continuous",
    title: "Şimdiki Sürekli Zaman",
    description: "Şu anda olmakta olan eylemler · am/is/are + V-ing yapısı.",
    difficulty: "Orta",
    status: "locked",
    lessons: [
      { id: "pc-1", title: "Olumlu Cümle", status: "locked", icon: "rocket" },
      { id: "pc-2", title: "Olumsuz Cümle", status: "locked", icon: "sparkles" },
      { id: "pc-3", title: "Soru Cümlesi", status: "locked", icon: "messageCircle" },
      { id: "pc-4", title: "-ing Yazım Kuralları", status: "locked", icon: "puzzle" },
      { id: "pc-5", title: "Şu An / Bu Sıralar", status: "locked", icon: "clock" },
      { id: "pc-6", title: "Ünite Sınavı", status: "locked", icon: "trophy", isUnitExam: true },
    ],
  },
];

export function findUnit(slug: string): Unit | undefined {
  return MOCK_UNITS.find((u) => u.slug === slug);
}

export function findLesson(lessonId: string): { unit: Unit; lesson: Unit["lessons"][number] } | undefined {
  for (const unit of MOCK_UNITS) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) return { unit, lesson };
  }
  return undefined;
}
