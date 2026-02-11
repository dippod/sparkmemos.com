import { AppStoreLink } from "@/components/AppStoreLink";
import { Container } from "@/components/Container";
import { Dictionary } from "@/dictionaries";

export function CallToAction({ dict }: { dict: Dictionary }) {
  return (
    <section id="get-free-shares-today" className="py-10 sm:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-ember-300/40 bg-gradient-to-br from-ember-500/28 via-amber-300/18 to-ember-300/16 px-6 py-10 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -left-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-ember-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-200/18 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-display text-balance text-3xl text-white sm:text-5xl">
              {dict.homeSections.callToAction.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-50">
              {dict.homeSections.callToAction.description}
            </p>
            <div className="mt-8 flex justify-center">
              <AppStoreLink color="white" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
