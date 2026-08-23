import { Header } from "@/components/layout/header";

import { AboutSection } from "@/features/home/components/about-section";
import { Hero } from "@/features/home/components/hero";
import { TrustStrip } from "@/features/home/components/trust-strip";
import { UpcomingEvents } from "@/features/home/components/upcoming-events";

import { aboutContent } from "@/config/about";
import { heroContent } from "@/config/hero";
import { mainNavigation } from "@/config/navigation";
import { trustItems } from "@/config/trust";
import { upcomingEvents } from "@/config/events";

export default function HomePage() {
  return (
    <>
      <Header items={mainNavigation} />

      <main>
        <Hero content={heroContent} />

        <TrustStrip items={trustItems} />

        <UpcomingEvents events={upcomingEvents} />

        <AboutSection content={aboutContent} />
      </main>
    </>
  );
}
