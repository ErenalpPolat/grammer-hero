import Link from "next/link";
import { WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Çevrimdışı",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 py-12 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-muted">
        <WifiOff className="size-8 text-muted-foreground" aria-hidden />
      </div>
      <h1 className="mt-4 text-3xl font-bold">Çevrimdışı</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        İnternet bağlantın koptu. Bağlantı geri gelince bu sayfayı yenileyebilirsin.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Anasayfaya dön</Link>
      </Button>
    </div>
  );
}
