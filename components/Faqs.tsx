import { Container } from "@/components/Container";
import { Dictionary } from "@/dictionaries";

export function Faqs({ dict }: { dict: Dictionary }) {
  return (
    <section id="faqs" className="py-12 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-ink-200/40 bg-ink-200/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-ink-100 uppercase">
            {dict.labels.faq}
          </p>
          <h2 className="text-display mt-4 text-balance text-3xl text-white sm:text-4xl">
            {dict.homeSections.faq.title}
          </h2>
          <p className="mt-3 text-lg text-ink-100">{dict.homeSections.faq.description}</p>
        </div>

        <ul className="mt-8 grid gap-4 lg:grid-cols-3">
          {dict.homeSections.faq.items.map((column, columnIndex) => (
            <li key={columnIndex} className="space-y-4">
              {column.map((faq, faqIndex) => (
                <article key={faqIndex} className="panel-stroke rounded-2xl bg-ink-900/55 p-5">
                  <h3 className="text-base font-semibold text-white sm:text-lg">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-100 sm:text-base">{faq.answer}</p>
                </article>
              ))}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
