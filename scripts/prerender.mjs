import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { home, templates, structuredData, templatesStructuredData, llmsTxt } from './seo.mjs';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Swaps title/description (and their og/twitter twins) in the base index.html.
const withMeta = (doc, { title, description }) => doc
  .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
  .replace(/(<meta name="description" content=")[^"]*(" \/>)/, `$1${esc(description)}$2`)
  .replace(/(<meta property="og:title" content=")[^"]*(" \/>)/, `$1${esc(title)}$2`)
  .replace(/(<meta property="og:description" content=")[^"]*(" \/>)/, `$1${esc(description)}$2`)
  .replace(/(<meta name="twitter:title" content=")[^"]*(" \/>)/, `$1${esc(title)}$2`)
  .replace(/(<meta name="twitter:description" content=")[^"]*(" \/>)/, `$1${esc(description)}$2`);

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

try {
  const { render, renderTemplates, renderLegal, renderV2, renderNotFound } = await vite.ssrLoadModule('/src/entry-server.jsx');
  const html = await readFile('dist/index.html', 'utf8');
  const root = '<div id="root"></div>';
  if (!html.includes(root)) throw new Error('Could not find the root element in dist/index.html');

  const siteUrl = process.env.SITE_URL || 'https://experibyte.com/';
  const url = new URL(siteUrl);
  if (url.protocol !== 'https:') throw new Error('SITE_URL must use HTTPS');
  const canonical = url.href.endsWith('/') ? url.href : `${url.href}/`;
  const pageUrl = (path) => new URL(`${path}/`, canonical).href;

  const legalPages = [
    { path: 'privacy-policy', type: 'privacy', title: 'Privacy Policy | Experibyte', description: 'Learn how Experibyte handles information submitted through its website enquiry form.' },
    { path: 'terms', type: 'terms', title: 'Terms & Conditions | Experibyte', description: 'General terms for Experibyte website and application projects.' },
  ];

  // Head additions shared by every indexable page.
  const head = (href, extra = '') =>
    `<link rel="canonical" href="${href}" />\n  <meta property="og:url" content="${href}" />${extra}`;
  const ldJson = (data) => `\n  <script type="application/ld+json">${JSON.stringify(data)}</script>`;
  const insertHead = (doc, markup) => doc.replace('</head>', `  ${markup}\n</head>`);

  const homeDoc = withMeta(html, home)
    .replace('<meta name="robots" content="index, follow" />',
      `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />\n  <meta name="keywords" content="${esc(home.keywords.join(', '))}" />\n  <meta name="author" content="Experibyte" />`)
    .replace(root, `<div id="root">${render()}</div>`);
  const templatesDoc = withMeta(html, templates).replace(root, `<div id="root">${renderTemplates()}</div>`);
  const legalDocs = legalPages.map(({ path, type, title, description }) => ({
    path,
    html: insertHead(withMeta(html, { title, description }).replace(root, `<div id="root">${renderLegal(type)}</div>`), head(pageUrl(path))),
  }));

  await writeFile('dist/index.html', insertHead(homeDoc, head(canonical, ldJson(structuredData(canonical)))));
  await mkdir('dist/templates', { recursive: true });
  await writeFile('dist/templates/index.html', insertHead(templatesDoc, head(pageUrl('templates'), ldJson(templatesStructuredData(canonical)))));
  for (const doc of legalDocs) {
    await mkdir(`dist/${doc.path}`, { recursive: true });
    await writeFile(`dist/${doc.path}/index.html`, doc.html);
  }

  const today = new Date().toISOString().slice(0, 10);
  const entries = [
    { loc: canonical, priority: '1.0', changefreq: 'weekly' },
    { loc: pageUrl('templates'), priority: '0.9', changefreq: 'weekly' },
    ...legalPages.map(({ path }) => ({ loc: pageUrl(path), priority: '0.3', changefreq: 'yearly' })),
  ];
  const urls = entries.map((e) => `<url><loc>${e.loc}</loc><lastmod>${today}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`).join('');
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\n# AI search and answer crawlers are welcome\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ChatGPT-User\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Claude-SearchBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: Applebot\nAllow: /\nUser-agent: Bingbot\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', canonical).href}\n`);
  await writeFile('dist/llms.txt', llmsTxt(canonical));

  // Branded 404 page (Cloudflare serves it for unknown URLs). Not indexed.
  const notFoundHtml = withMeta(html, { title: 'Page not found | Experibyte', description: 'This page could not be found. Head back to the Experibyte home page.' })
    .replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex, nofollow" />')
    .replace(root, `<div id="root" data-not-found="true">${renderNotFound()}</div>`);
  await writeFile('dist/404.html', notFoundHtml);

  // Draft route for the new copy. noindex and kept out of sitemap until approved.
  const v2Title = 'Experibyte — Animated Websites, Web Apps & Templates | India';
  const v2Description = 'Custom websites, scroll-animated experiences, web apps and product videos for growing businesses, plus premium React, Next.js & HTML animation templates. Free quote in 24 hrs.';
  const v2Html = withMeta(html, { title: v2Title, description: v2Description })
    .replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex, nofollow" />')
    .replace(root, `<div id="root">${renderV2()}</div>`);
  await mkdir('dist/v2', { recursive: true });
  await writeFile('dist/v2/index.html', v2Html);
} finally {
  await vite.close();
}
