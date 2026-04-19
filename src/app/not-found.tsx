import Link from "next/link";
import { ArrowLeft, MapPinOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Sayfa bulunamadı" };

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 py-12 text-center">
      <div className="mb-6 text-8xl" aria-hidden>
        🦉
      </div>
      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        <MapPinOff className="size-4" /> 404
      </p>
      <h1 className="mt-2 text-4xl font-bold">Bu yol skill tree&apos;de yok</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        Aradığın sayfa kaybolmuş olabilir ya da hiç olmamıştır. Aşağıdan navigasyonu
        kullanarak devam edebilirsin.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft /> Anasayfa
          </Link>
        </Button>
        <Button asChild>
          <Link href="/learn">Öğrenmeye devam et</Link>
        </Button>
      </div>
    </div>
  );
}
