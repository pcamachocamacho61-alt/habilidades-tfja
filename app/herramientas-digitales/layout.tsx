import type { ReactNode } from "react";
import { DigitalToolsShell } from "@/components/digital-tools-shell";

export default function DigitalToolsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DigitalToolsShell>{children}</DigitalToolsShell>;
}