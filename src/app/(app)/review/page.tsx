import { Brain } from "lucide-react";
import {
  FlashcardSession,
  ReviewEmptyState,
} from "@/components/review/flashcard-session";
import { getNextDueCard, seedReviewCardsIfEmpty } from "@/lib/review";
import { requireSessionUser } from "@/lib/session";

export const metadata = { title: "Tekrar" };

export default async function ReviewPage() {
  const user = await requireSessionUser();

  // First-time visitors get starter cards seeded (idempotent — only if empty)
  await seedReviewCardsIfEmpty(user.id);

  const card = await getNextDueCard();

  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-8 sm:px-6">
      <header>
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          <Brain className="size-7 text-primary" /> Tekrar
        </h1>
        <p className="mt-1 text-muted-foreground">
          {card
            ? `Bugün hatırlaman gereken ${card.totalDue} kart. Spaced repetition ile her gün daha az tekrar edeceksin.`
            : "Spaced repetition (SM-2) ile akıllı tekrar."}
        </p>
      </header>

      {card ? <FlashcardSession card={card} /> : <ReviewEmptyState />}

      <p className="text-center text-xs text-muted-foreground">
        SM-2 algoritması: kolay derecelendirdiğin kartlar daha seyrek, zorladıkların daha
        sık çıkar.
      </p>
    </div>
  );
}
