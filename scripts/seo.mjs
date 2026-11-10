// Single source of truth for SEO copy: meta tags, JSON-LD, llms.txt.
// Descriptions marked "doc" come from the content document's "SEO page metadata" section.
import { sitePages } from '../src/content/site.js';
import { articles } from '../src/content/articles.js';

export const EMAIL = 'hello@experibyte.com';

export const home = {
  title: 'Experibyte – Animated Websites, React Templates & Web Apps',
  // doc
  description: 'Experibyte designs and develops fast websites, animated digital experiences, custom web applications and practical AI integrations.',
  keywords: [
    'animation website template', 'animated website templates', 'React template', 'React website template',
    'Next.js template', 'HTML animation template', 'mouse cursor website', 'mouse interaction website',
    'scrolling website', 'scroll animation website', 'fully animated website', 'creative website',
    'creative animation website', 'parallax website',
    'website animation agency', 'web design agency India', 'Experibyte',
  ],
};

// One entry per page in src/content/site.js. noindex pages stay out of search and the sitemap.
export const pages = {
  services: { name: 'Services', priority: '0.9', title: 'Services – Websites, Web Apps, AI & SEO | Experibyte', description: 'Explore website development, interactive web design, custom applications, AI integration, UI/UX and SEO services from Experibyte.' },
  'services/website-development': { name: 'Website Development', priority: '0.8', title: 'Website Development | Experibyte', description: 'Custom, responsive website development for startups and growing businesses. Build a clear, fast and effective online presence.' },
  'services/animated-websites': { name: 'Animated & Scroll Websites', priority: '0.8', title: 'Animated & Scroll Websites | Experibyte', description: 'Interactive, scroll-driven websites and digital storytelling experiences designed for visual impact, usability and performance.' },
  'services/web-applications': { name: 'Web Applications', priority: '0.8', title: 'Custom Web Applications | Experibyte', description: 'Custom web applications, portals, dashboards and workflows designed around your business and users.' },
  'services/ai-integration': { name: 'AI Integration & Automation', priority: '0.8', title: 'AI Integration & Automation | Experibyte', description: 'Explore practical AI integration and business automation for customer support, information access and repetitive tasks.' },
  'services/ui-ux-design': { name: 'UI/UX Design', priority: '0.8', title: 'UI/UX Design | Experibyte', description: 'UI/UX design for websites, dashboards and web applications—from user flows and wireframes to responsive interfaces.' },
  'services/seo': { name: 'SEO & Website Growth', priority: '0.8', title: 'SEO & Website Growth | Experibyte', description: 'Technical, on-page and local SEO services to strengthen website foundations and support ongoing organic visibility.' },
  solutions: { name: 'Solutions', priority: '0.8', title: 'Solutions by Business Need | Experibyte', description: 'Digital solutions for startups, e-commerce, healthcare, real estate, education, agencies and other businesses.' },
  work: { name: 'Work', priority: '0.6', title: 'Our Work | Experibyte', description: 'Discover Experibyte’s approach to websites, interactive experiences and custom web application projects.' },
  templates: { name: 'Templates', priority: '0.8', title: 'Website Templates – React, Next.js & HTML | Experibyte', description: 'Explore React, Next.js and HTML website templates designed for customisation and faster launches.' },
  about: { name: 'About', priority: '0.7', title: 'About Experibyte – Design & Web Engineering', description: 'Learn about Experibyte’s approach to design, web engineering, motion and business-focused digital technology.' },
  process: { name: 'Our Process', priority: '0.6', title: 'Our Process | Experibyte', description: 'How Experibyte projects move from discovery and design to build, launch and ongoing improvement, with a written quote before work begins.' },
  technologies: { name: 'Technologies', priority: '0.6', title: 'Technologies | Experibyte', description: 'The technology approach behind Experibyte websites and applications: React, Next.js, HTML, CSS and JavaScript, motion, integrations and design-to-code.' },
  pricing: { name: 'Pricing', priority: '0.8', title: 'Pricing – Websites, Web Apps & SEO | Experibyte', description: 'Website packages from ₹12,999, web apps from ₹1,29,999 and Local SEO from ₹12,999 a month, with a written quote before work begins.' },
  insights: { name: 'Insights', priority: '0.6', title: 'Insights | Experibyte', description: 'Practical perspectives on website development, user experience, performance, animation, web applications and AI.' },
  ...Object.fromEntries(articles.map((a) => [`insights/${a.slug}`, { name: a.title, priority: '0.6', title: `${a.title} | Experibyte`, description: a.description, article: a }])),
  contact: { name: 'Contact', priority: '0.8', title: 'Contact Experibyte', description: 'Contact Experibyte to discuss a website, interactive experience, application or AI integration project.' },
};

const missing = sitePages.filter((p) => p.key && !pages[p.key]).map((p) => p.key);
if (missing.length) throw new Error(`No SEO entry for: ${missing.join(', ')}`);

export function structuredData(siteUrl) {
  const abs = (p) => new URL(p, siteUrl).href;
  const orgId = `${siteUrl}#organization`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${siteUrl}#website`, name: 'Experibyte', url: siteUrl, description: home.description, inLanguage: 'en', publisher: { '@id': orgId } },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': orgId,
        name: 'Experibyte',
        alternateName: ['Experibyte Technologies', 'Experi Byte'],
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: abs('logo.png') },
        image: abs('share-image.jpg'),
        email: EMAIL,
        description: 'Experibyte builds websites, interactive digital experiences, web applications and practical AI integrations for businesses ready to move forward.',
        slogan: 'Websites that move people. Technology that moves businesses.',
        areaServed: [{ '@type': 'Country', name: 'India' }, 'Worldwide'],
        priceRange: '₹₹',
        contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: EMAIL }],
        knowsAbout: home.keywords,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Experibyte services',
          itemListElement: Object.entries(pages).filter(([k]) => k.startsWith('services/')).map(([, p]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: p.name } })),
        },
      },
      { '@type': 'WebPage', '@id': `${siteUrl}#webpage`, url: siteUrl, name: home.title, description: home.description, isPartOf: { '@id': `${siteUrl}#website` }, about: { '@id': orgId } },
    ],
  };
}

export function pageStructuredData(key, siteUrl) {
  const page = pages[key];
  const url = new URL(`${key}/`, siteUrl).href;
  const types = { about: 'AboutPage', contact: 'ContactPage', templates: 'CollectionPage' };
  const isServiceDetail = key.startsWith('services/');
  const trail = [{ name: 'Home', item: siteUrl }];
  if (isServiceDetail) trail.push({ name: 'Services', item: new URL('services/', siteUrl).href });
  if (page.article) trail.push({ name: 'Insights', item: new URL('insights/', siteUrl).href });
  trail.push({ name: page.name, item: url });
  const graph = [
    { '@type': types[key] || 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, isPartOf: { '@id': `${siteUrl}#website` }, about: { '@id': `${siteUrl}#organization` } },
    { '@type': 'BreadcrumbList', itemListElement: trail.map((step, i) => ({ '@type': 'ListItem', position: i + 1, ...step })) },
  ];
  if (page.article) {
    const a = page.article;
    graph.push({
      '@type': 'Article', headline: a.title, description: a.description, url, articleSection: a.category, inLanguage: 'en',
      author: { '@id': `${siteUrl}#organization` }, publisher: { '@id': `${siteUrl}#organization` },
      ...(a.cover.ready ? { image: new URL(`images/insights/${a.cover.file}`, siteUrl).href } : {}),
    });
  }
  if (isServiceDetail) {
    graph.push({ '@type': 'Service', name: page.name, description: page.description, url, provider: { '@id': `${siteUrl}#organization` }, areaServed: [{ '@type': 'Country', name: 'India' }, 'Worldwide'] });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function llmsTxt(siteUrl) {
  const link = (key) => new URL(`${key}/`, siteUrl).href;
  return `# Experibyte

> Experibyte builds websites, interactive digital experiences, web applications and practical AI integrations for businesses ready to move forward, in India and worldwide.

Experibyte (also written "Experi Byte" or "Experibyte Technologies") works online with startups, growing businesses, e-commerce brands and agencies. Every project starts with a written quote based on the agreed scope.

## Pages
- [Home](${siteUrl})
${Object.entries(pages).filter(([, p]) => !p.noindex).map(([key, p]) => `- [${p.name}](${link(key)}): ${p.description}`).join('\n')}
- [Privacy Policy](${link('privacy-policy')})
- [Terms & Conditions](${link('terms')})

## Contact
- Email: ${EMAIL}
- Website: ${siteUrl}
`;
}
