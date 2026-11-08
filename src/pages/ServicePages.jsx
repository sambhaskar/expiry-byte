import React from 'react';
import { PageShell } from '../PageShell.jsx';
import { pageByKey } from '../content/site.js';
import { HeroSentence, HeroSplit, HeroType } from '../ui/Heroes.jsx';
import { BrowserBuild, ChatDemo, FrameDistances, SearchMock, WireframeMorph } from '../ui/Visuals.jsx';
import { InkList, PinnedPanels, PushedTable, ServicePanel, Staircase, Statement, StickyIndex } from '../ui/Sections.jsx';
import { BlueClose, MarqueeClose, QuestionEdges } from '../ui/Closings.jsx';

const crumb = (name) => [{ href: '/services/', label: 'Services' }, { label: name }];
const artFor = { 'website-development': 0, 'animated-websites': 1, 'web-applications': 2, 'ai-integration': 3, 'ui-ux-design': 4, seo: 5 };

export function ServicesPage() {
  const [hero, ...rest] = pageByKey('services').blocks;
  const services = rest.filter((b) => b.name.startsWith('Service '));
  const closing = rest[rest.length - 1];
  const entries = services.map((b) => {
    const href = b.ctas[0].href; const slug = href.split('/')[2];
    return { key: slug, name: b.title, href, block: b, art: artFor[slug] };
  });
  return (
    <PageShell active="services">
      <HeroSentence trail={[{ label: 'Services' }]} block={hero} slot="cycle" at={2} />
      <StickyIndex id="all-services" label="Our services" entries={entries} renderPanel={(e) => <ServicePanel block={e.block} art={e.art} />} />
      <BlueClose block={closing} />
    </PageShell>
  );
}

export function WebsiteDevelopmentPage() {
  const [hero, build, capabilities, method, closing] = pageByKey('services/website-development').blocks;
  return (
    <PageShell active="services">
      <HeroSplit trail={crumb('Website Development')} block={hero} visual={<BrowserBuild />} />
      <PushedTable block={build} id="what-we-build" />
      <InkList block={capabilities} id="capabilities" />
      <Statement block={method} id="our-method" tone="pale" />
      <QuestionEdges block={closing} />
    </PageShell>
  );
}

export function AnimatedWebsitesPage() {
  const [hero, create, principles, concept, closing] = pageByKey('services/animated-websites').blocks;
  return (
    <PageShell active="services">
      <HeroType trail={crumb('Animated & Scroll Websites')} block={hero} />
      <FrameDistances block={create} />
      <PinnedPanels block={{ ...principles, items: principles.items }} id="principles" />
      <Statement block={concept} id="concept-to-build" tone="blue" />
      <MarqueeClose block={closing} />
    </PageShell>
  );
}

export function WebApplicationsPage() {
  const [hero, apps, core, thinking, closing] = pageByKey('services/web-applications').blocks;
  return (
    <PageShell active="services">
      <HeroSentence trail={crumb('Web Applications')} block={hero} slot="bars" at={1} />
      <PushedTable block={apps} id="applications" tint />
      <Staircase block={core} id="capabilities" />
      <Statement block={thinking} id="product-thinking" tone="ink" />
      <BlueClose block={closing} />
    </PageShell>
  );
}

export function AiIntegrationPage() {
  const [hero, build, implementation, responsible, closing] = pageByKey('services/ai-integration').blocks;
  return (
    <PageShell active="services">
      <HeroSplit trail={crumb('AI Integration & Automation')} block={hero} visual={<ChatDemo />} />
      <PinnedPanels block={build} id="what-we-build" />
      <Staircase block={implementation} id="implementation" tone="pale" />
      <Statement block={responsible} id="responsible-use" tone="ink" />
      <QuestionEdges block={closing} />
    </PageShell>
  );
}

export function UiUxDesignPage() {
  const [hero, design, approach, together, closing] = pageByKey('services/ui-ux-design').blocks;
  return (
    <PageShell active="services">
      <HeroSplit trail={crumb('UI/UX Design')} block={hero} visual={<WireframeMorph />} />
      <InkList block={design} id="what-we-design" />
      <Statement block={approach} id="approach" tone="white" />
      <Statement block={together} id="working-together" tone="blue" />
      <MarqueeClose block={closing} />
    </PageShell>
  );
}

export function SeoPage() {
  const [hero, cover, local, ongoing, expectations] = pageByKey('services/seo').blocks;
  return (
    <PageShell active="services">
      <HeroSplit trail={crumb('SEO & Website Growth')} block={hero} visual={<SearchMock />} />
      <PushedTable block={cover} id="what-we-cover" />
      <Statement block={local} id="local-seo" tone="pale" />
      <Statement block={ongoing} id="ongoing" tone="ink" />
      <QuestionEdges block={expectations} />
    </PageShell>
  );
}
