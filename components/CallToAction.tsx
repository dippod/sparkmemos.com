import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { METADATA } from "@/constants/metadata";
import { Dictionary } from "@/dictionaries";

export function CallToAction({ dict }: { dict: Dictionary }) {
  return (
    <section id="get-free-shares-today" className="py-14 sm:py-20">
      <Container>
        <div className="cta-shell relative overflow-hidden rounded-[2.25rem] px-6 py-12 sm:px-12 sm:py-16">
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full border border-ink-200/35 bg-ink-100/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-ink-200 uppercase">
              {dict.labels.download}
            </p>
            <h2 className="text-display mt-6 text-balance text-4xl text-white sm:text-6xl">
              {dict.homeSections.callToAction.title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-ink-100">
              {dict.homeSections.callToAction.description}
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                href={METADATA.appStoreLink}
                target="_blank"
                className="cta-download-btn theme-keep-white px-8 py-3 text-lg"
              >
                {dict.labels.downloadTheApp}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
