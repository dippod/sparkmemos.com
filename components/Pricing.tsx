"use client";

import { useState } from "react";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logomark } from "@/components/Logo";
import { Dictionary } from "@/dictionaries";

function CheckIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M20 7.5 10 17.5l-6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  activePeriod,
  featured = false,
  logomarkClassName,
}: {
  name: string;
  price: {
    Monthly: string;
    Annually: string;
  };
  description: string;
  button: {
    label: string;
    href: string;
  };
  features: Array<string>;
  activePeriod: "Monthly" | "Annually";
  logomarkClassName?: string;
  featured?: boolean;
}) {
  const currentPrice = activePeriod === "Monthly" ? price.Monthly : price.Annually;
  const showPeriodTag = featured;

  return (
    <article
      className={clsx(
        "relative z-10 rounded-3xl p-6 sm:p-7",
        featured
          ? "border border-ember-300/55 bg-gradient-to-br from-ember-500/18 to-ink-900/70 shadow-[0_20px_48px_rgba(241,79,16,0.3)]"
          : "glass-panel"
      )}
    >
      <div className="flex items-center gap-3">
        <Logomark className={clsx("h-9 w-9 rounded-lg", logomarkClassName)} />
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>

      <div className="mt-5 flex items-end gap-2">
        <p className="text-display text-4xl text-white">{currentPrice}</p>
        {showPeriodTag ? (
          <p className="text-sm text-ink-100">/{activePeriod === "Monthly" ? "mo" : "yr"}</p>
        ) : null}
      </div>

      <p className="mt-3 text-sm leading-6 text-ink-100">{description}</p>

      <ul className="mt-6 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink-50">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ember-300" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={button.href}
        color={featured ? "orange" : "gray"}
        className="mt-6 w-full"
        aria-label={`Get started with the ${name} plan for ${currentPrice}`}
      >
        {button.label}
      </Button>
    </article>
  );
}

export function Pricing({ dict }: { dict: Dictionary }) {
  const [activePeriod, setActivePeriod] = useState<"Monthly" | "Annually">("Monthly");

  return (
    <section id="pricing" className="relative isolate py-12 sm:py-20">
      <Container>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-ink-200/40 bg-ink-200/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-ink-100 uppercase">
            {dict.labels.pricing}
          </p>
          <h2 className="text-display mt-4 text-balance text-3xl text-white sm:text-4xl">
            {dict.homeSections.pricing.title}
          </h2>
          <p className="mt-3 text-lg text-ink-100">{dict.homeSections.pricing.description}</p>
        </div>

        <div className="relative z-10 mt-8 flex justify-center">
          <div className="glass-panel inline-flex rounded-full p-1">
            {(["Monthly", "Annually"] as const).map((period) => {
              const active = period === activePeriod;
              return (
                <button
                  key={period}
                  type="button"
                  onClick={() => setActivePeriod(period)}
                  className={clsx(
                    "rounded-full px-5 py-2 text-sm font-semibold transition",
                    active
                      ? "bg-ember-500 text-white shadow-[0_8px_24px_rgba(241,79,16,0.45)]"
                      : "text-ink-100 hover:text-white"
                  )}
                >
                  {period === "Monthly"
                    ? dict.homeSections.pricing.monthlyLabel
                    : dict.homeSections.pricing.annuallyLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 lg:grid-cols-3">
          {dict.homeSections.pricing.plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
      </Container>
    </section>
  );
}
