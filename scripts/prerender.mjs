import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

try {
  const { render, renderTemplates, renderLegal } = await vite.ssrLoadModule('/src/entry-server.jsx');
  const html = await readFile('dist/index.html', 'utf8');
  const homeHtml = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
  if (homeHtml === html) throw new Error('Could not find the root element in dist/index.html');

  const templatesTitle = 'Website Templates Coming Soon | Experibyte';
  const templatesDescription = 'Explore upcoming website templates for businesses, creatives, online stores and SaaS products from Experibyte.';
  let templatesHtml = html
    .replace('<title>Experibyte | Websites, Experiences &amp; Applications</title>', `<title>${templatesTitle}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(" \/>)/, `$1${templatesDescription}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(" \/>)/, `$1${templatesTitle}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(" \/>)/, `$1${templatesDescription}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(" \/>)/, `$1${templatesTitle}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(" \/>)/, `$1${templatesDescription}$2`)
    .replace('<div id="root"></div>', `<div id="root">${renderTemplates()}</div>`);
  if (templatesHtml === html) throw new Error('Could not generate the Templates page HTML');

  const legalPages = [
    { path: 'privacy-policy', type: 'privacy', title: 'Privacy Policy | Experibyte', description: 'Learn how Experibyte handles information submitted through its website enquiry form.' },
    { path: 'terms', type: 'terms', title: 'Terms & Conditions | Experibyte', description: 'General terms for Experibyte website and application projects.' },
  ];
  const legalDocuments = legalPages.map(({ path, type, title, description }) => ({
    path,
    html: html
      .replace('<title>Experibyte | Websites, Experiences &amp; Applications</title>', `<title>${title}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(" \/>)/, `$1${description}$2`)
      .replace('<div id="root"></div>', `<div id="root">${renderLegal(type)}</div>`),
  }));

  const siteUrl = process.env.SITE_URL || 'https://experibyte.in/';
  if (siteUrl) {
    const url = new URL(siteUrl);
    if (url.protocol !== 'https:') throw new Error('SITE_URL must use HTTPS');
    const canonical = url.href.endsWith('/') ? url.href : `${url.href}/`;
    const templatesUrl = new URL('templates/', canonical).href;
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebSite', name: 'Experibyte', url: canonical },
        {
          '@type': 'Organization', name: 'Experibyte', url: canonical, email: 'experibytetechnologies@gmail.com', logo: new URL('logo.png', canonical).href },
      ],
    };
    const homeHead = `<link rel="canonical" href="${canonical}" />\n  <meta property="og:url" content="${canonical}" />\n  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
    const templatesHead = `<link rel="canonical" href="${templatesUrl}" />\n  <meta property="og:url" content="${templatesUrl}" />`;
    const insertHead = (document, head) => document.replace('</head>', `  ${head}\n</head>`);
    const sitemapLegalUrls = legalPages.map(({ path }) => `<url><loc>${new URL(`${path}/`, canonical).href}</loc></url>`).join('');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonical}</loc></url><url><loc>${templatesUrl}</loc></url>${sitemapLegalUrls}</urlset>\n`;
    await writeFile('dist/sitemap.xml', sitemap);
    await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', canonical).href}\n`);
    await writeFile('dist/index.html', insertHead(homeHtml, homeHead));
    await mkdir('dist/templates', { recursive: true });
    await writeFile('dist/templates/index.html', insertHead(templatesHtml, templatesHead));
    for (const document of legalDocuments) {
      await mkdir(`dist/${document.path}`, { recursive: true });
      await writeFile(`dist/${document.path}/index.html`, insertHead(document.html));
    }
  } else {
    await writeFile('dist/index.html', homeHtml);
    await mkdir('dist/templates', { recursive: true });
    await writeFile('dist/templates/index.html', templatesHtml);
    for (const document of legalDocuments) {
      await mkdir(`dist/${document.path}`, { recursive: true });
      await writeFile(`dist/${document.path}/index.html`, document.html);
    }
  }
} finally {
  await vite.close();
}
