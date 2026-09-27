"use client";

import { useEffect, useState } from "react";
import { Zap, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOWNLOAD_URL, PAYPAL_DONATE_URL } from "@/lib/donate";

const NAV_LINKS = [
  { label: "How it works", href: "#media" },
  { label: "Benefits", href: "#benefits" },
  { label: "Proof", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-lime text-lime-foreground transition-transform duration-300 group-hover:rotate-[-8deg]">
            <Zap className="h-4 w-4" strokeWidth={2.5} fill="currentColor" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Fast<span className="text-lime">Copy</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            render={
              <a href={PAYPAL_DONATE_URL} target="_blank" rel="noopener noreferrer" />
            }
            nativeButton={false}
            size="sm"
            variant="ghost"
            className="group/donate rounded-full px-4 font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <Heart className="h-3.5 w-3.5 transition-colors group-hover/donate:text-lime" />
            Donate
          </Button>
          <Button
            render={<a href={DOWNLOAD_URL} />}
            nativeButton={false}
            size="sm"
            className="rounded-full bg-lime px-5 font-semibold text-lime-foreground shadow-[0_0_0_1px_rgba(215,255,62,0.4)] hover:bg-lime/90"
          >
            Download — free
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 rounded-full bg-lime px-4 py-2.5 text-center text-sm font-semibold text-lime-foreground"
              href={DOWNLOAD_URL}
              onClick={() => setOpen(false)}
            >
              Download — free
            </a>
            <a
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium text-muted-foreground"
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <Heart className="h-3.5 w-3.5" />
              Donate via PayPal
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
