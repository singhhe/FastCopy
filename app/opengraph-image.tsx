import { ImageResponse } from "next/og";

// These images are generated once at build time, never per request. `output: "export"`
// requires that to be stated explicitly rather than inferred.
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "FastCopy — A smarter file copier for Windows";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08090b",
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(215,255,62,0.14) 0px, rgba(215,255,62,0.14) 1px, transparent 1px, transparent 84px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#d7ff3e",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"
                fill="#0a0b0d"
              />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#f3f5f0" }}>
            Fast<span style={{ color: "#d7ff3e" }}>Copy</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.08,
            color: "#f3f5f0",
            maxWidth: 980,
          }}
        >
          Copy files the smart way.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#9aa1ab",
            maxWidth: 860,
          }}
        >
          Windows copies one file at a time. FastCopy runs several in parallel on an SSD.
        </div>
      </div>
    ),
    { ...size }
  );
}
