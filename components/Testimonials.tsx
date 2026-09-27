import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const PROOF_POINTS = [
  {
    title: "Cancel leaves zero bytes behind",
    detail:
      "Verified live: canceling an in-flight 8GB copy left zero bytes at the destination — no partial files to clean up.",
  },
  {
    title: "Pause actually pauses",
    detail:
      "Confirmed during a live 8GB transfer: bytes-copied genuinely froze for over a second, then resumed exactly where it left off.",
  },
  {
    title: "One bad folder doesn't kill the job",
    detail:
      "The tree walk is resilient — a folder you don't have permission to read costs you that folder, not the whole scan.",
  },
  {
    title: "Skip means skip",
    detail:
      "The conflict-policy picker was verified end to end: re-copying with Skip correctly left 4 pre-existing files untouched.",
  },
  {
    title: "Free space, checked up front",
    detail: "A doomed copy fails immediately if the destination can't hold it — not halfway through a large job.",
  },
  {
    title: "Byte-for-byte, every time",
    detail:
      "The automated test suite checks copied content matches the source byte-for-byte and preserves directory structure, on every run.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-lime">
            Verified, not just claimed
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Every feature below was exercised in a real, running session.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Not just compiled and shipped — driven end to end and checked against what actually
            happened on disk.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROOF_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
                <CheckCircle2 className="h-5 w-5 text-lime" />
                <h3 className="mt-4 font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
