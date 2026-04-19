"use client";

import { useState, useTransition } from "react";
import { ArrowRight } from "lucide-react";
import { ChoiceCard } from "@/components/onboarding/choice-card";
import { StepIndicator } from "@/components/onboarding/step-indicator";
import { Button } from "@/components/ui/button";
import { setLanguageAction } from "../actions";

const LANGUAGES = [
  { value: "en", label: "İngilizce", flag: "🇬🇧" },
  { value: "de", label: "Almanca", flag: "🇩🇪" },
  { value: "es", label: "İspanyolca", flag: "🇪🇸" },
  { value: "fr", label: "Fransızca", flag: "🇫🇷" },
  { value: "it", label: "İtalyanca", flag: "🇮🇹" },
  { value: "ja", label: "Japonca", flag: "🇯🇵" },
];

export default function OnboardingLanguagePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit() {
    if (!selected) return;
    startTransition(async () => {
      const fd = new FormData();
      fd.set("language", selected);
      await setLanguageAction(fd);
    });
  }

  return (
    <div>
      <StepIndicator current={1} total={3} />
      <h1 className="mb-6 text-center text-3xl font-bold">
        Hangi dili öğrenmek istiyorsun?
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {LANGUAGES.map((lang) => (
          <ChoiceCard
            key={lang.value}
            value={lang.value}
            label={lang.label}
            leading={lang.flag}
            selected={selected === lang.value}
            onSelect={setSelected}
            disabled={pending}
          />
        ))}
      </div>
      <Button
        type="button"
        size="xl"
        className="mt-8 w-full"
        onClick={handleSubmit}
        disabled={!selected}
        loading={pending}
      >
        Devam <ArrowRight />
      </Button>
    </div>
  );
}
