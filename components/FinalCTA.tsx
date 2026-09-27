import { ArrowRight, Download, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { DOWNLOAD_URL, PAYPAL_DONATE_URL } from "@/lib/donate";

export function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-secondary p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0 bg-streaks opacity-60" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/15 blur-[140px]" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Stop waiting on file transfers.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
                Free to download and free to keep — no licence key, no trial, nothing held
                back for a paid tier.
              </p>

              <div className="mx-auto mt-9 flex max-w-md flex-col items-center gap-3">
                <Button
                  render={<a href={DOWNLOAD_URL} />}
                  nativeButton={false}
                  size="lg"
                  className="group h-14 w-full shrink-0 rounded-full bg-lime px-7 font-semibold text-lime-foreground hover:bg-lime/90"
                >
                  <Download className="h-4 w-4" />
                  Download for Windows
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  render={
                    <a href={PAYPAL_DONATE_URL} target="_blank" rel="noopener noreferrer" />
                  }
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="group/donate h-14 w-full shrink-0 rounded-full border-border bg-background/40 px-7 font-semibold hover:bg-secondary"
                >
                  <Heart className="h-4 w-4 text-muted-foreground transition-colors group-hover/donate:text-lime" />
                  Donate via PayPal
                </Button>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Donating is optional and unlocks nothing — it just keeps a one-person
                  project going. Any amount, whenever you like.
                </p>
              </div>

              <p className="mt-5 text-xs text-muted-foreground">Windows 10 &amp; 11 (64-bit)</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
