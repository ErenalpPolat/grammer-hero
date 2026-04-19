import { AppShell } from "@/components/layout/app-shell";
import { requireSessionUser } from "@/lib/session";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await requireSessionUser();
  return <AppShell user={user}>{children}</AppShell>;
}
