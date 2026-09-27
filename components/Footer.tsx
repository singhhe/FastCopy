import { MessageCircle, Rss, Mail, Zap, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { DOWNLOAD_URL, PAYPAL_DONATE_URL } from "@/lib/donate";

// Links with an `href` point at a real section on this page, or at an off-site
// URL when `external` is set. Links without one don't have a destination yet —
// they render as muted, non-clickable text instead of a dead "#" link. Add the
// real URL once that page exists.
type FooterLink = { label: string; href?: string; external?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Download", href: DOWNLOAD_URL },
      { label: "How it works", href: "#media" },
      { label: "Donate", href: PAYPAL_DONATE_URL, external: true },
      { label: "Changelog" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "About" }, { label: "Blog" }, { label: "Careers" }, { label: "Contact" }],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation" },
      { label: "API reference" },
      { label: "Status" },
      { label: "Community" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Privacy policy" }, { label: "Terms of service" }, { label: "Security" }],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime text-lime-foreground">
                <Zap className="h-4 w-4" strokeWidth={2.5} fill="currentColor" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Fast<span className="text-lime">Copy</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A smarter file copier for Windows — media-aware parallelism, instant pause/resume,
              and a background tray mode that copies for you. Free to use.
            </p>
            <a
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/donate mt-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-lime/40 hover:text-foreground"
            >
              <Heart className="h-3.5 w-3.5 transition-colors group-hover/donate:text-lime" />
              Support FastCopy
            </a>
            {/* TODO: swap in your real Discord/community, RSS, and support-email links. */}
            <div className="mt-6 flex gap-3">
              {[
                { Icon: MessageCircle, label: "Community" },
                { Icon: Rss, label: "Blog RSS feed" },
                { Icon: Mail, label: "Email support" },
              ].map(({ Icon, label }) => (
                <span
                  key={label}
                  aria-label={`${label} (coming soon)`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground/40"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground/40" aria-disabled="true">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} FastCopy. All rights reserved.</p>
          <p>Free for everyone. Built for people who hate waiting on file transfers.</p>
        </div>
      </div>
    </footer>
  );
}
