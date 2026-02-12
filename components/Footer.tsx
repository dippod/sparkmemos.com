import Link from "next/link";

import { Container } from "@/components/Container";
import { Logomark } from "@/components/Logo";
import { NavLinks } from "@/components/NavLinks";
import { METADATA } from "@/constants/metadata";
import { Dictionary, Language } from "@/dictionaries";
import { AppStoreQRCode } from "./QRCode";
import { LanguageSwitcher } from "./LanguageSwitcher";

function QrCodeBorder(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="mt-20 pb-10 sm:pb-14">
      <Container>
        <div className="glass-panel rounded-[2.5rem] px-8 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-lg">
              <div className="flex items-center gap-4 text-white">
                <Logomark className="h-12 w-12 flex-none rounded-2xl" />
                <div>
                  <p className="text-lg font-semibold">{dict.appName}</p>
                  <p className="mt-1 text-sm text-ink-100">{dict.appSummary}</p>
                </div>
              </div>
              <nav className="mt-7 flex flex-wrap gap-x-4 gap-y-3">
                <NavLinks type="footer" dict={dict} />
              </nav>
            </div>
            <div className="panel-stroke relative flex items-center gap-6 rounded-[1.75rem] bg-ink-900/55 p-5 sm:p-7">
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center text-white">
                <QrCodeBorder className="absolute inset-0 h-full w-full stroke-ink-200/45" />
                <AppStoreQRCode />
              </div>
              <div className="max-w-xs">
                <p className="text-sm font-semibold text-white sm:text-base">
                  <Link href={METADATA.appStoreLink} target="_blank">
                    <span className="absolute inset-0 rounded-[1.75rem]" />
                    {dict.labels.downloadTheApp}
                  </Link>
                </p>
                <p className="mt-1 text-sm text-ink-100">{dict.labels.scanTheQrCode}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-ink-200/25 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="order-2 md:order-1">
              <LanguageSwitcher currentLang={dict.urls.home.split("/")[1] as Language} />
            </div>
            <p className="order-1 text-sm text-ink-200/90 md:order-2">
              &copy; Copyright {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
