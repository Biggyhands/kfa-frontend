import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";

import { EventCard } from "./event-card";

import type { EventsSectionProps } from "@/utils/types";

export function EventsSection({ content }: EventsSectionProps) {
  return (
    <section
      id="eventos"
      className="scroll-mt-24 bg-[#f5f5f3] py-20 text-black sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            highlightedTitle={content.highlightedTitle}
          />

          <p className="max-w-xl text-sm leading-7 text-black/60 sm:text-base lg:justify-self-end">
            {content.description}
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 lg:mt-20">
          {content.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
