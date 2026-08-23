import { Container } from "@/components/ui/container";

import type { TrustStripProps } from "@/utils/types";

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <section className="border-y border-white/10 bg-black text-white">
      <Container className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.index}
            className="group border-white/10 px-0 py-6 sm:border-l sm:px-6 lg:py-8"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-[family-name:var(--font-barlow-condensed)] text-xl font-black text-[var(--kfa-red)]">
                {item.index}
              </span>

              <h2 className="text-sm font-bold uppercase tracking-[0.1em]">
                {item.title}
              </h2>
            </div>

            <p className="mt-2 pl-10 text-xs uppercase tracking-[0.08em] text-white/50">
              {item.description}
            </p>
          </article>
        ))}
      </Container>
    </section>
  );
}
