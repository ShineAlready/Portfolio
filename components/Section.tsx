"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 px-6 md:px-10",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-mono tracking-widest uppercase text-emerald-500 dark:text-emerald-400">
        {children}
      </span>
      <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}
