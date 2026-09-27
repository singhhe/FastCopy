import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = "https://fastcopy.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FastCopy — A Smarter File Copier for Windows",
  description:
    "FastCopy is a free Windows desktop app that copies files smarter: media-aware parallelism that avoids hard-drive thrash, instant pause/resume/cancel, paste- and drag-to-start, and a background tray mode that copies for you. Free to use — donations welcome.",
  keywords: [
    "fast file copy windows",
    "windows file copy utility",
    "teracopy alternative",
    "bulk file copy software",
    "pause resume file copy",
    "background file copy tray app",
    "free file copy software windows",
  ],
  openGraph: {
    title: "FastCopy — A Smarter File Copier for Windows",
    description:
      "Media-aware parallelism, instant pause/resume/cancel, and a background tray mode that copies for you. Free to use — donations welcome.",
    url: siteUrl,
    siteName: "FastCopy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastCopy — A Smarter File Copier for Windows",
    description:
      "Media-aware parallelism, instant pause/resume/cancel, and a background tray mode that copies for you.",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
