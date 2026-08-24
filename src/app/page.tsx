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
import { ProgramsSection } from "@/features/home/components/programs-section";
import { programsContent } from "@/config/programs";
import { ImpactSection } from "@/features/home/components/impact-section";
import { impactContent } from "@/config/impact";
import { NetworkSection } from "@/features/home/components/network-section";
import { networkContent } from "@/config/network";
import { EventsSection } from "@/features/home/components/events-section";
import { eventsContent } from "@/config/events";
import { TournamentRegistrationSection } from "@/features/home/components/tournament-registration-section";
import { tournamentRegistrationContent } from "@/config/tournament-registration";

export default function HomePage() {
  return (
    <>
      <Header items={mainNavigation} />

      <main>
        <Hero content={heroContent} />

        <TrustStrip items={trustItems} />

        <UpcomingEvents events={upcomingEvents} />

        <AboutSection content={aboutContent} />

        <ProgramsSection content={programsContent} />

        <ImpactSection content={impactContent} />

        <NetworkSection content={networkContent} />

        <EventsSection content={eventsContent} />

        <TournamentRegistrationSection
          content={tournamentRegistrationContent}
        />
      </main>
    </>
  );
}
