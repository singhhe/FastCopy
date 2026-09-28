import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

const FAQS = [
  {
    q: "Is FastCopy actually faster than Windows' built-in copy?",
    a: "Yes, on an SSD — Windows' copy dialog always moves one file at a time, whatever drive you're on. FastCopy detects an SSD and runs several files in parallel instead, so the drive is never sitting idle between files. On a spinning disk, FastCopy also copies one at a time — parallel copies on an HDD just thrash the heads and end up slower, so that's the one case where matching Windows is the right call, not beating it.",
  },
  {
    q: "Can I pause and resume a copy?",
    a: "Yes — pause instantly freezes an in-flight copy (verified live: bytes-copied genuinely stopped moving), and resume picks up right where it left off in the same session. If you need to stop for good, Cancel leaves zero partial bytes at the destination.",
  },
  {
    q: "What happens if a file is locked or a folder can't be read?",
    a: "Transient errors — a file briefly locked by another process, a short network hiccup — are retried automatically with correct byte accounting. A folder you don't have permission to read costs you just that folder; the rest of the job keeps going.",
  },
  {
    q: "How does the integrity check work?",
    a: "It's optional — turn on \"verify after copy\" and FastCopy hashes both the source and destination after the transfer and flags any mismatch. It's off by default so everyday copies stay fast; switch it on for anything you can't afford to get wrong.",
  },
  {
    q: "Does it really replace Windows' copy and paste?",
    a: "For pasting, yes. Copy files anywhere in Windows, then press Ctrl+V in any Explorer folder and FastCopy runs the transfer instead of the built-in copy dialog. It only steps in for an actual file copy into a real folder — Ctrl+X still moves the normal way, text pastes are untouched, and anything FastCopy can't handle falls back to Windows. It does this with a scoped keyboard shortcut rather than by patching Explorer itself, so there's no admin install and nothing to break when Windows updates.",
  },
  {
    q: "So it has to be running all the time?",
    a: "It has to be running to catch the paste — Windows has no way to start a stopped program when you copy something. So FastCopy starts with Windows and sits in the tray using almost nothing, and closing its window leaves it there rather than quitting. You can turn both the startup entry and the Ctrl+V handling off from the tray menu whenever you like.",
  },
  {
    q: "Is it really free? What's the catch?",
    a: "There's no catch. FastCopy is free the way WinRAR is free — no licence key, no trial period, no feature held back for a paid tier, no ads, and no account to create. Every version does everything described on this page.",
  },
  {
    q: "So how does donating work, and what do I get?",
    a: "Donating is entirely optional and you get nothing extra for it — that's the point. There's no \"pro\" build, no unlock code, no priority anything. FastCopy is made and maintained by one person in their spare time; a donation of whatever amount you think it's worth is what keeps that going. The app asks once when you launch it, and there's a \"Don't show this again\" tick box right there.",
  },
];

export function FAQ() {
  const [left, right] = [FAQS.slice(0, 3), FAQS.slice(3)];

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-lime">
            Questions
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 lg:grid-cols-2">
          {[left, right].map((group, groupIdx) => (
            <Reveal key={groupIdx} delay={groupIdx * 120}>
              <Accordion className="w-full">
                {group.map((item, i) => (
                  <AccordionItem
                    key={item.q}
                    value={`${groupIdx}-${i}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left font-display text-base font-medium hover:text-lime">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
