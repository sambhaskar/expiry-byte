import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
  const html = await readFile('dist/index.html', 'utf8');
  let rendered = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
  if (rendered === html) throw new Error('Could not find the root element in dist/index.html');

  const siteUrl = process.env.SITE_URL;
  if (siteUrl) {
    const url = new URL(siteUrl);
    if (url.protocol !== 'https:') throw new Error('SITE_URL must use HTTPS');
    const canonical = url.href.endsWith('/') ? url.href : `${url.href}/`;
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebSite', name: 'Experibyte', url: canonical },
        {
          '@type': 'Organization', name: 'Experibyte', url: canonical, email: 'experibytetechnologies@gmail.com', logo: new URL('logo.png', canonical).href },
      ],
    };
    const head = `<link rel="canonical" href="${canonical}" />\n  <meta property="og:url" content="${canonical}" />\n  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
    rendered = rendered.replace('</head>', `  ${head}\n</head>`);
    await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonical}</loc></url></urlset>\n`);
    await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', canonical).href}\n`);
  }
  await writeFile('dist/index.html', rendered);
} finally {
  await vite.close();
}
