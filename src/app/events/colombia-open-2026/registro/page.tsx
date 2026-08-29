import { TournamentRegistrationFlow } from "@/features/tournament-registration/components/tournament-registration-flow";
import { COLOMBIA_OPEN_SLUG } from "@/features/tournament-registration/constants/tournament.constants";

export default function ColombiaOpenRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <TournamentRegistrationFlow slug={COLOMBIA_OPEN_SLUG} />
      </section>
    </main>
  );
}
