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
  const buttonVariant = featured ? ("solid" as const) : ("outline" as const);
  const buttonColor = featured ? ("orange" as const) : ("gray" as const);
  const numberPart = currentPrice.replace(/[^0-9.]/g, "");
  const symbolPart = currentPrice.replace(/[0-9.]/g, "") || "$";

  return (
    <article
      className={clsx(
        "pricing-card relative z-10 flex h-full flex-col overflow-hidden rounded-[2.5rem] p-7 sm:p-8",
        featured && "pricing-card-featured pricing-card-featured-boost"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Logomark className={clsx("pricing-plan-mark h-10 w-10 rounded-2xl", logomarkClassName)} />
          <h3 className="text-2xl font-semibold text-white">{name}</h3>
        </div>
        {featured ? (
          <span className="pricing-badge rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            Popular
          </span>
        ) : null}
      </div>

      <div className="mt-6 flex items-end gap-1.5">
        <p className="pb-1 text-xl font-semibold text-ink-300">{symbolPart}</p>
        <p className="text-display text-6xl leading-none text-white">{numberPart}</p>
        {showPeriodTag ? (
          <p className="pb-1 text-sm font-medium text-ink-200">
            /{activePeriod === "Monthly" ? "mo" : "yr"}
          </p>
        ) : null}
      </div>

      <p className="mt-4 text-base leading-7 text-ink-100">{description}</p>

      <ul className="mt-7 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-base text-ink-50">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ember-300/35 bg-ember-500/10">
              <CheckIcon className="h-3.5 w-3.5 text-ember-300" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button
          href={button.href}
          variant={buttonVariant}
          color={buttonColor}
          className={clsx(
            "w-full py-3 text-[1.05rem]",
            featured && "pricing-featured-cta theme-keep-white"
          )}
          aria-label={`Get started with the ${name} plan for ${currentPrice}`}
        >
          {button.label}
        </Button>
      </div>
    </article>
  );
}

export function Pricing({ dict }: { dict: Dictionary }) {
  const [activePeriod, setActivePeriod] = useState<"Monthly" | "Annually">("Monthly");

  return (
    <section id="pricing" className="relative isolate py-14 sm:py-24">
      <Container>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-ink-200/40 bg-ink-200/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-ink-100 uppercase">
            {dict.labels.pricing}
          </p>
          <h2 className="text-display mt-4 text-balance text-3xl text-white sm:text-5xl">
            {dict.homeSections.pricing.title}
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-ink-100">
            {dict.homeSections.pricing.description}
          </p>
        </div>

        <div className="relative z-10 mt-9 flex justify-center">
          <div className="pricing-toggle-shell inline-flex rounded-full p-1.5">
            {(["Monthly", "Annually"] as const).map((period) => {
              const active = period === activePeriod;
              return (
                <button
                  key={period}
                  type="button"
                  onClick={() => setActivePeriod(period)}
                  className={clsx(
                    "pricing-toggle-btn rounded-full px-6 py-2.5 text-base font-semibold transition",
                    active && "pricing-toggle-btn-active theme-keep-white"
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

        <div className="relative z-10 mt-10 grid gap-5 lg:grid-cols-3">
          {dict.homeSections.pricing.plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
      </Container>
    </section>
  );
}
