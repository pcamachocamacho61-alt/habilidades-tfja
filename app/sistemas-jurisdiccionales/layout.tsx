import type { ReactNode } from "react";
import { JurisdictionalShell } from "@/components/jurisdictional-shell";

export default function Layout({ children }: { children: ReactNode }) {
  return <JurisdictionalShell>{children}</JurisdictionalShell>;
}
