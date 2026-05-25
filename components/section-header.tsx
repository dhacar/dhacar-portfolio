import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto mb-12 max-w-3xl text-center"
          : "mb-12 max-w-3xl"
      }
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700/70 dark:text-blue-300/80">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
