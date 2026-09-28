"use client";

import { useEffect } from "react";
import { DOWNLOAD_URL } from "@/lib/donate";

declare global {
  interface Window {
    goatcounter?: {
      count: (opts: { path: string; title?: string; event?: boolean }) => void;
    };
  }
}

/**
 * There are five separate "Download" buttons/links across the page (Header, Hero, FinalCTA,
 * Footer), each rendering its own <a> via a headless-UI `render` prop. Rather than wiring an
 * onClick into every one of those call sites - and having to remember to do it again for the
 * next one - this listens once at the document level for a click on any link whose href is the
 * download URL, so tracking can't silently miss a button that gets added later.
 */
export function DownloadTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement)?.closest("a");
      if (link?.href !== DOWNLOAD_URL) return;

      window.goatcounter?.count({
        path: "download-click",
        title: "Download click",
        event: true,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
