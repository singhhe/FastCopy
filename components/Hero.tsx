import { Fragment } from "react";
import { ArrowRight, Pause, HardDrive, Shield, Download, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOWNLOAD_URL, PAYPAL_DONATE_URL } from "@/lib/donate";

const HEADLINE_WORDS = ["Copy", "files", "the", "smart", "way."];

const PROOF_POINTS = [
  { icon: HardDrive, label: "Media-aware parallelism" },
  { icon: Pause, label: "Pause, resume, cancel — instantly" },
  { icon: Shield, label: "Optional post-copy verification" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 lg:pt-48 lg:pb-36">
      <div className="pointer-events-none absolute inset-0 bg-streaks" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-lime/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 left-[-10%] h-[24rem] w-[24rem] rounded-full bg-cyan/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            New — takes over Ctrl+V in File Explorer
          </span>

          <h1 className="mt-8 text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {HEADLINE_WORDS.map((word, i) => (
              // The separating space is a sibling of the word, not a child of it: trailing
              // whitespace inside an inline-block is stripped by CSS white-space processing,
              // which rendered the headline as "Copyfilesthe". A margin would fix the pixels
              // but not the text — the h1 would still read as one run-together word to a
              // screen reader and to anyone copying the line.
              <Fragment key={word}>
                <span
                  className="inline-block animate-fade-up"
                  style={{ animationDelay: `${120 + i * 90}ms` }}
                >
                  {word === "smart" ? (
                    <span className="relative inline-block text-lime">
                      {word}
                      <svg
                        className="absolute -bottom-2 left-0 w-full"
                        viewBox="0 0 200 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 9.5C40 2 160 2 198 9.5"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <>{word}</>
                  )}
                </span>
                {i < HEADLINE_WORDS.length - 1 && " "}
              </Fragment>
            ))}
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground animate-fade-up sm:text-xl"
            style={{ animationDelay: "620ms" }}
          >
            FastCopy is a Windows app that detects whether you&apos;re copying to an SSD or a
            spinning disk and tunes itself accordingly — instead of thrashing your HDD with
            dumb parallelism like most copy tools.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "760ms" }}
          >
            <Button
              render={<a href={DOWNLOAD_URL} />}
              nativeButton={false}
              size="lg"
              className="group h-14 animate-pulse-glow rounded-full bg-lime px-8 text-base font-semibold text-lime-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:bg-lime/90"
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
              className="group/donate h-14 rounded-full border-border bg-secondary/40 px-8 text-base font-semibold text-foreground hover:bg-secondary"
            >
              <Heart className="h-4 w-4 text-muted-foreground transition-colors group-hover/donate:text-lime" />
              Donate via PayPal
            </Button>
          </div>

          <p
            className="mt-5 animate-fade-up text-sm text-muted-foreground"
            style={{ animationDelay: "820ms" }}
          >
            Free to use — every feature, no licence key, no trial.{" "}
            <a href="#media" className="text-foreground underline underline-offset-4 hover:text-lime">
              See it in action
            </a>
          </p>

          <div
            className="mx-auto mt-16 flex max-w-2xl animate-fade-up flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8"
            style={{ animationDelay: "940ms" }}
          >
            {PROOF_POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-lime" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
