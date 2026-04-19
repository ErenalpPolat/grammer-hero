"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app error]", error);
  }, [error]);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 py-12 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="size-8 text-destructive" aria-hidden />
      </div>
      <h1 className="mt-4 text-3xl font-bold">Bir şey ters gitti</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        Beklenmedik bir hata oluştu. Sayfayı yenilemeyi deneyebilirsin.
      </p>
      {error.digest && (
        <p className="mt-2 font-mono text-xs text-muted-foreground">digest: {error.digest}</p>
      )}
      <Button onClick={reset} className="mt-6">
        <RefreshCw /> Tekrar dene
      </Button>
    </div>
  );
}
