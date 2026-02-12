"use client";

import Link from "next/link";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLinks } from "@/components/NavLinks";
import { METADATA } from "@/constants/metadata";
import { Dictionary } from "@/dictionaries";

function MenuIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header({ dict }: { dict: Dictionary }) {
  const mobileLinks = [
    [dict.labels.features, `${dict.urls.home}#features`],
    [dict.labels.reviews, `${dict.urls.home}#reviews`],
    [dict.labels.pricing, `${dict.urls.home}#pricing`],
    [dict.labels.faq, `${dict.urls.home}#faqs`],
    [dict.labels.blog, dict.urls.blog],
    [dict.labels.userTerms, dict.urls.terms],
    [dict.labels.privacyPolicy, dict.urls.privacy],
  ];

  return (
    <header className="sticky top-0 z-50 pt-4 md:pt-6">
      <nav>
        <Container className="relative">
          <div className="glass-panel flex items-center justify-between gap-3 rounded-2xl px-4 py-3 md:px-5 md:-mx-5">
            <div className="flex min-w-0 items-center gap-3 lg:gap-10">
              <Link
                href={dict.urls.home}
                aria-label="Home"
                className="shrink-0"
              >
                <Logo
                  className="h-10 w-auto text-white"
                  label={dict.websiteName}
                />
              </Link>
              <div className="hidden lg:flex lg:flex-wrap lg:items-center lg:gap-2">
                <NavLinks type="header" dict={dict} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                href={METADATA.appStoreLink}
                target="_blank"
                className="hidden md:inline-flex"
              >
                {dict.labels.download}
              </Button>
              <Popover className="lg:hidden">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200/30 bg-ink-900/70 text-ink-100 ui-not-focus-visible:outline-none"
                      aria-label="Toggle site navigation"
                    >
                      {open ? (
                        <ChevronUpIcon className="h-5 w-5 stroke-current" />
                      ) : (
                        <MenuIcon className="h-5 w-5 stroke-current" />
                      )}
                    </Popover.Button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Overlay
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-[#03050a]/55 backdrop-blur-sm"
                          />
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -18 }}
                            className="glass-panel absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-2xl p-4"
                          >
                            <div className="grid gap-2">
                              {mobileLinks.map(([label, href]) => (
                                <Popover.Button
                                  as={Link}
                                  href={href}
                                  key={href}
                                  className="rounded-xl border border-transparent px-3 py-2 text-left text-sm text-ink-50 hover:border-ink-200/30 hover:bg-ink-200/10"
                                >
                                  {label}
                                </Popover.Button>
                              ))}
                            </div>
                            <Button
                              href={METADATA.appStoreLink}
                              target="_blank"
                              className="mt-4 w-full"
                            >
                              {dict.labels.downloadTheApp}
                            </Button>
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
