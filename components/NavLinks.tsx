"use client";

import Link from "next/link";
import { Dictionary } from "@/dictionaries";

export function NavLinks({
  type,
  dict,
}: {
  type: "header" | "footer";
  dict: Dictionary;
}) {
  const links =
    type === "header"
      ? [
          [dict.labels.features, `${dict.urls.home}#features`],
          [dict.labels.reviews, `${dict.urls.home}#reviews`],
          [dict.labels.pricing, `${dict.urls.home}#pricing`],
          [dict.labels.faq, `${dict.urls.home}#faqs`],
          [dict.labels.blog, dict.urls.blog],
        ]
      : [
          ["Echobell", "https://echobell.one"],
          ["CassetteOne", "https://cassette.one"],
          ["Weelone Ltd", "https://weelone.com"],
          [dict.labels.terms, dict.urls.terms],
          [dict.labels.privacy, dict.urls.privacy],
        ];

  return links.map(([label, href]) => (
    <Link
      key={label}
      href={href}
      className={
        type === "header"
          ? "rounded-full border border-transparent px-3 py-2 text-sm text-ink-100 hover:border-ink-200/35 hover:bg-ink-200/10 hover:text-white"
          : "text-sm text-ink-200 underline-offset-4 hover:text-white hover:underline"
      }
    >
      {label}
    </Link>
  ));
}
