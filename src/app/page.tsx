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
import { DojosSection } from "@/features/home/components/dojos-section";
import { dojosContent } from "@/config/dojos";
import { TeamSection } from "@/features/home/components/team-section";
import { teamContent } from "@/config/team";
import { AlliancesSection } from "@/features/home/components/alliances-section";
import { alliancesContent } from "@/config/alliances";
import { TransparencySection } from "@/features/home/components/transparency-section";
import { transparencyContent } from "@/config/transparency";
import { ContactSection } from "@/features/home/components/contact-section";
import { contactContent } from "@/config/contact";
import { PrivacySection } from "@/features/home/components/privacy-section";
import { privacyContent } from "@/config/privacy";
import { Footer } from "@/components/layout/footer";
import { footerContent } from "@/config/footer";

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

        <DojosSection content={dojosContent} />

        <TeamSection content={teamContent} />

        <AlliancesSection content={alliancesContent} />

        <TransparencySection content={transparencyContent} />

        <EventsSection content={eventsContent} />

        <TournamentRegistrationSection
          content={tournamentRegistrationContent}
        />
        <ContactSection content={contactContent} />
        <PrivacySection content={privacyContent} />
      </main>
      <Footer content={footerContent} />
    </>
  );
}
