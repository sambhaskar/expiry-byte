// Single source of truth for SEO copy: meta tags, JSON-LD, llms.txt.

export const EMAIL = 'experibytetechnologies@gmail.com';

export const home = {
  title: 'Experibyte – Animated Websites, React Templates & Web Apps',
  description:
    'Experibyte builds creative animation websites, scroll-animated and mouse-interactive websites, web apps and premium React, Next.js & HTML animation templates. Free quote in 24 hrs.',
  keywords: [
    'animation website template', 'animated website templates', 'React template', 'React website template',
    'Next.js template', 'HTML animation template', 'mouse cursor website', 'mouse interaction website',
    'scrolling website', 'scroll animation website', 'fully animated website', 'creative website',
    'creative animation website', 'parallax website',
    'website animation agency', 'web design agency India', 'Experibyte',
  ],
};

export const templates = {
  title: 'Animation Website Templates – React, Next.js & HTML | Experibyte',
  description:
    'Premium animated website templates in React, Next.js and HTML/CSS/JS, with scroll animation, mouse-follow effects and creative layouts. Coming soon from Experibyte.',
};

export const faqs = [
  {
    q: 'Can my team update the website without a developer?',
    a: 'Yes. Add a content dashboard to any website, including WordPress, React, Next.js and fully animated sites. Your team can edit text, images, blogs and offers with their own logins, while the animations and layout stay protected.',
  },
  {
    q: 'Why do some packages show "Custom quote"?',
    a: "Bigger websites, animated experiences, web apps and ongoing SEO depend on your pages, features and goals, so one fixed price wouldn't be fair to you. After a free call, we send a fixed written quote. It changes only if you ask for more and approve it.",
  },
  {
    q: 'Will animations slow down my website?',
    a: 'No. We optimise every animation for performance, keep it lighter on mobile and respect users who prefer reduced motion.',
  },
  {
    q: 'How does payment work?',
    a: "For websites, pay 50% to start and the remaining 50% after you've seen and approved your website. For web applications, the project is split into stages and you pay after each stage is completed.",
  },
  {
    q: 'Do we need to meet in person?',
    a: 'No. We work 100% online with video calls on Google Meet or Zoom, quick updates on WhatsApp and email, and a live preview link while your website is being built.',
  },
];

export function structuredData(siteUrl) {
  const abs = (p) => new URL(p, siteUrl).href;
  const orgId = `${siteUrl}#organization`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        name: 'Experibyte',
        url: siteUrl,
        description: home.description,
        inLanguage: 'en',
        publisher: { '@id': orgId },
      },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': orgId,
        name: 'Experibyte',
        alternateName: ['Experibyte Technologies', 'Experi Byte'],
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: abs('logo.png') },
        image: abs('share-image.jpg'),
        email: EMAIL,
        description:
          'Experibyte is a web studio that designs and builds creative animation websites, scroll-animated and mouse-interactive websites, web applications, AI integrations and premium React, Next.js and HTML website templates.',
        slogan: 'Websites. Experiences. Applications. Growth.',
        areaServed: [{ '@type': 'Country', name: 'India' }, 'Worldwide'],
        priceRange: '₹₹',
        contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: EMAIL, availableLanguage: ['English', 'Hindi'] }],
        knowsAbout: home.keywords,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Experibyte services',
          itemListElement: [
            'Website Development', 'Animated & Scroll Websites', 'Web Applications', 'AI Integration',
            'UI / UX Design', 'Websites with Content Dashboard (CMS)', 'SEO', 'React, Next.js & HTML Animation Templates',
          ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}#webpage`,
        url: siteUrl,
        name: home.title,
        description: home.description,
        isPartOf: { '@id': `${siteUrl}#website` },
        about: { '@id': orgId },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };
}

export function templatesStructuredData(siteUrl) {
  const url = new URL('templates/', siteUrl).href;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#webpage`,
        url,
        name: templates.title,
        description: templates.description,
        isPartOf: { '@id': `${siteUrl}#website` },
        about: { '@id': `${siteUrl}#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Templates', item: url },
        ],
      },
    ],
  };
}

export function llmsTxt(siteUrl) {
  return `# Experibyte

> Experibyte is a web studio that designs and builds creative animation websites, scroll-animated and mouse-interactive websites, web applications, AI integrations and premium React, Next.js and HTML animation templates for startups and growing businesses in India and worldwide.

Experibyte (also written "Experi Byte" or "Experibyte Technologies") works 100% online. Websites are priced with a fixed written quote agreed before work starts, with 50% paid to start and 50% after approval.

## Services
- Website development and fully animated, creative scrolling websites
- Web applications and AI integration (chatbots, automation)
- Websites with a content dashboard (CMS) so teams can update content without a developer, on WordPress, React or Next.js
- UI / UX design and SEO
- Ready-made animation website templates in React, Next.js and HTML/CSS/JS (coming soon)

## Pages
- [Home](${siteUrl}): services, packages, process and FAQ
- [Templates](${new URL('templates/', siteUrl).href}): animation website templates (coming soon)
- [Privacy Policy](${new URL('privacy-policy/', siteUrl).href})
- [Terms & Conditions](${new URL('terms/', siteUrl).href})

## Contact
- Email: ${EMAIL}
- Website: ${siteUrl}
`;
}
