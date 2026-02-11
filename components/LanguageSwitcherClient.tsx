"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function LanguageSwitcherClient({
  currentLang,
  languages,
  labels,
}: {
  currentLang: string;
  languages: string[];
  labels: Record<string, string>;
}) {
  const pathname = usePathname() || "/";
  const search = useSearchParams();
  const qs = search?.toString();

  const build = (target: string) => {
    const segs = pathname.split("/");
    if (segs.length > 1) segs[1] = target;
    const next = segs.join("/");
    return qs ? `${next}?${qs}` : next;
  };

  return (
    <nav className="flex flex-wrap gap-2 text-sm text-ink-100">
      {languages.map((lang) => (
        <Link
          key={lang}
          href={build(lang)}
          className={
            lang === currentLang
              ? "rounded-full border border-ink-200/40 bg-ink-200/15 px-3 py-1.5 font-semibold text-white"
              : "rounded-full border border-transparent px-3 py-1.5 text-ink-100 hover:border-ink-200/35 hover:bg-ink-200/10 hover:text-white"
          }
        >
          {labels[lang]}
        </Link>
      ))}
    </nav>
  );
}
