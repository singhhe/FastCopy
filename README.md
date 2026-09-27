# FastCopy — landing page

Marketing site for [FastCopy](https://github.com/singhhe/FastCopy), a free file copier for Windows.
Next.js 16 (App Router) + Tailwind CSS v4 + shadcn/ui, built as a fully static site.

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build   # static export to out/
npm run lint
```

## Deploying to AWS Amplify

1. In the Amplify console choose **Host web app** → **GitHub** → this repository, branch `main`.
2. Amplify picks up `amplify.yml` automatically. Leave the build settings as detected.
3. **Set the platform to a static web app, not "Next.js - SSR".** The site is a static export, so
   there is no server bundle for the SSR runtime to find. Amplify sometimes auto-selects SSR purely
   because it sees `next` in `package.json`.
4. Build output directory is `out/` (already set in `amplify.yml`).

Nothing here needs environment variables or secrets.

### Why a static export

Every route prerenders to static content, so there is nothing for a Node server to do at request
time. Exporting plain files removes any dependency on Amplify's Next.js SSR support, which lags new
Next releases and is the usual reason a current Next app fails to deploy there.

If server-rendered routes, route handlers or ISR are ever needed, drop `output: "export"` from
`next.config.ts`, remove the `dynamic = "force-static"` lines from the metadata image routes in
`app/`, and switch the Amplify app over to the Next.js SSR platform.

## Things that still need filling in

- `DOWNLOAD_URL` in [`lib/donate.ts`](lib/donate.ts) is a placeholder. There is no published build
  yet, so every "Download" button points at it. Every download CTA reads that one constant.
- Several footer links (About, Blog, Docs, Privacy policy, …) have no destination yet and render as
  muted, non-clickable text rather than dead `#` links. Give them an `href` in
  [`components/Footer.tsx`](components/Footer.tsx) as those pages appear.

## Licence and donations

FastCopy is free — no licence key, no trial, no paid tier. The only money path is an optional
PayPal donation; the link lives in [`lib/donate.ts`](lib/donate.ts).
