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
    "Windows' copy dialog moves one file at a time, even on a fast SSD. FastCopy copies several files in parallel on an SSD, stays serial on an HDD to avoid head-thrash, and adds instant pause/resume/cancel, optional verification, and a background tray mode. Free to use — donations welcome.",
  keywords: [
    "faster than windows copy",
    "fast file copy windows",
    "windows file copy utility",
    "teracopy alternative",
    "parallel file copy ssd",
    "bulk file copy software",
    "pause resume file copy",
    "background file copy tray app",
    "free file copy software windows",
  ],
  openGraph: {
    title: "FastCopy — A Smarter File Copier for Windows",
    description:
      "Windows copies one file at a time, even on an SSD. FastCopy runs several in parallel instead — plus instant pause/resume/cancel and optional verification. Free to use.",
    url: siteUrl,
    siteName: "FastCopy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastCopy — A Smarter File Copier for Windows",
    description:
      "Windows copies one file at a time, even on an SSD. FastCopy runs several in parallel instead.",
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
