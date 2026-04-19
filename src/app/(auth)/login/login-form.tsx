"use client";

import { ArrowLeft, Mail, Rocket } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction } from "./actions";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [sending, setSending] = useState(false);
  const [pending, startTransition] = useTransition();

  const trimmed = name.trim();
  const canProceed = trimmed.length >= 2;

  function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    if (!canProceed || sending) return;
    setSending(true);
    // Simulate sending magic link
    setTimeout(() => {
      setSending(false);
      setStep(2);
    }, 1200);
  }

  function handleStep2() {
    startTransition(async () => {
      const result = await loginAction({ name: trimmed, callbackUrl });
      if (result.error) {
        toast.error(result.error);
        setStep(1);
        return;
      }
      router.push(result.redirectTo ?? "/learn");
      router.refresh();
    });
  }

  if (step === 2) {
    return (
      <Card>
        <CardContent className="space-y-6 pt-8 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="size-8 text-primary" aria-hidden />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Link gönderildi!</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Demo modu — gerçek e-posta gitmez. Aşağıdaki butona basarak devam et.
            </p>
          </div>

          <Button
            size="xl"
            className="w-full"
            onClick={handleStep2}
            loading={pending}
            aria-label="Giriş yap"
          >
            {!pending && <Rocket />} Giriş Yap
          </Button>

          <button
            type="button"
            onClick={() => setStep(1)}
            disabled={pending}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
          >
            <ArrowLeft className="size-4" /> Başka ad dene
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <p className="mb-2 text-4xl" aria-hidden>
          👋
        </p>
        <CardTitle className="text-2xl">Hoş Geldin</CardTitle>
        <p className="text-sm text-muted-foreground">
          Başlamak için adını yaz — hesabın otomatik oluşur.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleStep1} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login-name">Adın</Label>
            <Input
              id="login-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Örn. Polat"
              autoComplete="given-name"
              autoFocus
              maxLength={40}
              aria-describedby="login-name-help"
            />
            <p id="login-name-help" className="text-xs text-muted-foreground">
              Aynı adı tekrar yazarsan eski hesabına giriş yaparsın.
            </p>
          </div>

          <Button
            type="submit"
            size="xl"
            className="w-full"
            loading={sending}
            disabled={!canProceed}
          >
            {!sending && <Mail />} Magic Link Gönder
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
