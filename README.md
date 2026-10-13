# simwidgets.com

Public site for **SimWidgets, LLC**. Vite + React, static build, deployed to Cloudflare Pages via `wrangler`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to build/
```

## Deploy

GitHub Actions auto-deploys on every push to `main`:

```
npx wrangler pages deploy build --project-name simwidgets-com
```

Requires the `CLOUDFLARE_API_TOKEN` repo secret (and the `CLOUDFLARE_ACCOUNT_ID` is set in `.github/workflows/deploy.yml`).
