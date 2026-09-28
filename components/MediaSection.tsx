import { CheckCircle2, ShieldCheck, Wifi } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export function MediaSection() {
  return (
    <section id="media" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Wifi className="h-3.5 w-3.5 text-lime" />
              Live transfer view
            </span>
            <h2 className="mt-6 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Windows copies one file at a time.
              <span className="text-lime"> FastCopy doesn&apos;t.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              Explorer&apos;s copy dialog always runs one file at a time, no matter what drive
              you&apos;re on. FastCopy checks the drive first: several files at once on an SSD,
              where the extra parallelism is free speed — and back to one at a time on a
              spinning disk, where parallel copies would thrash the heads and run slower than
              Windows, not faster.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-4">
                <ShieldCheck className="h-5 w-5 text-lime" />
                <p className="mt-2 font-mono text-xl font-semibold">Optional</p>
                <p className="text-xs text-muted-foreground">hash-verify after copy</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 text-cyan" />
                <p className="mt-2 font-mono text-xl font-semibold">0 bytes</p>
                <p className="text-xs text-muted-foreground">left behind on cancel</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg rotate-1 rounded-2xl border border-border bg-card shadow-2xl shadow-black/40 transition-transform duration-500 hover:rotate-0">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-lime/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  FastCopy — sample transfer
                </span>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>project_archive.zip</span>
                    <span className="font-mono text-lime">92%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-lime/70 to-lime" />
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/60 p-4">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                    Throughput (sample)
                  </p>
                  <Counter
                    value={412}
                    suffix=" MB/s"
                    className="mt-1 block font-mono text-3xl font-semibold text-foreground"
                  />
                  <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                    <div className="rounded-lg border border-border bg-secondary/40 py-2">
                      <p className="text-[11px] text-muted-foreground">Detected media</p>
                      <p className="mt-0.5 text-xs font-medium text-foreground">NVMe SSD</p>
                    </div>
                    <div className="rounded-lg border border-border bg-secondary/40 py-2">
                      <p className="text-[11px] text-muted-foreground">Parallelism</p>
                      <p className="mt-0.5 text-xs font-medium text-foreground">4 files</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 rounded-xl border border-border bg-secondary/30 p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-24 shrink-0 text-[11px] text-muted-foreground">
                      FastCopy — SSD
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <span key={i} className="h-2.5 w-6 rounded-full bg-lime" />
                      ))}
                    </div>
                    <span className="text-[11px] text-muted-foreground">4 files at once</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-24 shrink-0 text-[11px] text-muted-foreground">
                      Windows Explorer
                    </span>
                    <div className="flex gap-1">
                      <span className="h-2.5 w-6 rounded-full bg-muted-foreground/50" />
                    </div>
                    <span className="text-[11px] text-muted-foreground">1 file at a time</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 top-10 hidden -rotate-6 rounded-xl border border-border bg-card px-4 py-3 shadow-xl md:block">
              <p className="flex items-center gap-2 text-xs font-medium">
                <CheckCircle2 className="h-4 w-4 text-lime" />
                Paused — bytes frozen
              </p>
            </div>
            <div className="absolute -right-4 bottom-6 hidden rotate-3 rounded-xl border border-border bg-card px-4 py-3 shadow-xl md:block">
              <p className="flex items-center gap-2 text-xs font-medium">
                <ShieldCheck className="h-4 w-4 text-cyan" />
                Free space checked
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
