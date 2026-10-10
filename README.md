# Experibyte React site

Run `npm install` and `npm run dev` for local development. Run `npm run build` to create the production files in `dist/`.

For Cloudflare Workers Builds, use repository root `/`, build command `npm run build`, and deploy command `npx wrangler deploy`. The Worker configuration serves the generated `dist/` directory.

Page markup is in `src/PageContent.jsx`. The contact form is in `src/ContactForm.jsx`. Styles and animation libraries are in `src/styles.css` and `public/`.

Contact submissions go to `experibytetechnologies@gmail.com` through FormSubmit. The inbox owner must confirm FormSubmit's one-time activation email after the first submission before messages are delivered. A deployed site needs to be served over HTTP or HTTPS.

The production build pre-renders the page content into `dist/index.html` so crawlers can read it without JavaScript. Set `SITE_URL` to the final HTTPS home page URL when building to generate its canonical tag, sitemap, and structured data. For example, in PowerShell: `$env:SITE_URL = 'https://example.com/'; npm run build`.

Cloudflare currently has no build command configured, so the generated dist/ files are committed for deployment. Run npm run build and commit dist/ with each site update. Setting the Cloudflare build command to npm run build lets Cloudflare regenerate dist/ on every push instead.
