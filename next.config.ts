import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route on this site prerenders to static content, so there is nothing for a Node
  // server to do at request time. Exporting plain files means AWS Amplify only has to serve
  // a directory — no dependency on Amplify's Next.js SSR support, which trails new Next
  // releases and is the usual reason a fresh Next app fails to deploy there.
  output: "export",

  // The export target has no image optimizer behind it. Nothing here uses next/image today;
  // this keeps the build honest if something does later.
  images: { unoptimized: true },
};

export default nextConfig;
