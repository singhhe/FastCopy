import { ImageResponse } from "next/og";

// These images are generated once at build time, never per request. `output: "export"`
// requires that to be stated explicitly rather than inferred.
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090b",
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#d7ff3e",
            borderRadius: 34,
          }}
        >
          <svg width="84" height="84" viewBox="0 0 24 24" fill="none">
            <path
              d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"
              fill="#0a0b0d"
            />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
