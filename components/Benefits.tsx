import {
  HardDrive,
  PauseCircle,
  ShieldCheck,
  Clipboard,
  BellRing,
  GitBranchPlus,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const FEATURES = [
  {
    icon: HardDrive,
    title: "Media-aware parallelism",
    description:
      "Detects whether a drive is an HDD or SSD via a real seek-penalty probe, then serializes on spinning disks to avoid head-thrash and parallelizes on SSDs — instead of guessing.",
    span: "lg:col-span-2",
  },
  {
    icon: PauseCircle,
    title: "Pause, resume, cancel",
    description: "Pause genuinely freezes the transfer mid-copy. Cancel leaves zero partial bytes at the destination.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Optional integrity check",
    description: "Turn on \"verify after copy\" to hash-check source and destination and flag any mismatch.",
    span: "",
  },
  {
    icon: Clipboard,
    title: "Replaces Ctrl+V in File Explorer",
    description:
      "Copy files anywhere in Windows, then paste into any Explorer folder as usual — FastCopy takes the transfer instead of the built-in copy dialog. No shell extension, no admin, and Ctrl+X still moves the way it always did.",
    span: "lg:col-span-2",
  },
  {
    icon: BellRing,
    title: "Lives in the tray",
    description: "Starts with Windows and stays out of the way. Closing the window keeps it running so paste is always handled.",
    span: "",
  },
  {
    icon: GitBranchPlus,
    title: "Conflict handling, up front",
    description: "Overwrite, Skip, Overwrite-if-newer, or Keep-both — chosen once, not decided file-by-file mid-copy.",
    span: "",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-lime">
            Built for real transfers
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything a serious file-mover needs.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No bloat, no licence to babysit, no paid tier — just a copy engine engineered for
            one job.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description, span }, i) => (
            <Reveal key={title} delay={i * 90} className={span}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-lime/0 blur-2xl transition-colors duration-300 group-hover:bg-lime/15" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-lime transition-colors duration-300 group-hover:bg-lime group-hover:text-lime-foreground">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
