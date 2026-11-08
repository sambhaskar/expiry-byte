import React from 'react';
import { CheckList, PageShell } from '../PageShell.jsx';
import { pageByKey } from '../content/site.js';
import { articles, readingMinutes } from '../content/articles.js';
import ImageSlot from '../ui/ImageSlot.jsx';
import { Arrow } from '../PageShell.jsx';
import { Actions, HeroField, HeroSentence, HeroSplit, HeroType } from '../ui/Heroes.jsx';
import { DesignToCode, NameSplit, StackLayers, TemplateFan } from '../ui/Visuals.jsx';
import { Accordion, Picker, PushedTable, StageBar, Statement, Bands } from '../ui/Sections.jsx';
import { BlueClose, MarqueeClose, QuestionEdges } from '../ui/Closings.jsx';

export function SolutionsPage() {
  const [hero, ...rest] = pageByKey('solutions').blocks;
  const other = rest[rest.length - 1];
  return (
    <PageShell active="solutions">
      <HeroType trail={[{ label: 'Solutions' }]} block={hero} />
      <Picker blocks={rest.slice(0, -1)} id="industries" label="Choose a business type" />
      <BlueClose block={other} />
    </PageShell>
  );
}

export function WorkPage() {
  const [hero, intro, categories, caseStudy, closing] = pageByKey('work').blocks;
  return (
    <PageShell active="work">
      <HeroType trail={[{ label: 'Work' }]} block={hero} centred />
      <Statement block={intro} id="approach" tone="white" />
      <Accordion block={categories} id="categories" />
      <Statement block={caseStudy} id="case-studies" tone="pale" />
      <QuestionEdges block={closing} />
    </PageShell>
  );
}

export function TemplatesPage() {
  const [hero, useCases, expect, help, closing] = pageByKey('templates').blocks;
  return (
    <PageShell active="templates">
      <HeroSplit trail={[{ label: 'Templates' }]} block={hero} visual={<TemplateFan />} />
      <PushedTable block={useCases} id="find-the-right-starting-point" tint />
      <Statement block={expect} id="what-to-expect" tone="ink" />
      <Statement block={help} id="template-help" tone="white" />
      <QuestionEdges block={closing} />
    </PageShell>
  );
}

export function AboutPage() {
  const [hero, perspective, values, how, expect, closing] = pageByKey('about').blocks;
  const stages = ['Discovery', 'Design', 'Development', 'Testing', 'Handover'];
  return (
    <PageShell active="about">
      <HeroField trail={[{ label: 'About' }]} block={hero} visual={<NameSplit />} />
      <Statement block={perspective} id="perspective" tone="white" />
      <Bands block={values} id="principles" />
      <StageBar block={how} stages={stages} id="how-we-work" />
      <Statement block={expect} id="what-to-expect" tone="ink" />
      <BlueClose block={closing} />
    </PageShell>
  );
}

const stageTone = ['white', 'pale', 'ink', 'blue'];
export function ProcessPage() {
  const [hero, ...rest] = pageByKey('process').blocks;
  const stages = rest.slice(0, 4);
  const closing = rest[4];
  return (
    <PageShell active="process">
      <HeroSentence trail={[{ label: 'Our Process' }]} block={hero} slot="dot" at={3} />
      <div className="process-stages">
        {stages.map((b, i) => (
          <section className={`process-stage process-stage--${stageTone[i]}`} key={b.name} id={b.name.slice(3).toLowerCase().replace(/[^a-z]+/g, '-')}>
            <div className="process-stage__word" aria-hidden="true">{b.name.slice(3)}</div>
            <div className="process-stage__body" data-reveal="parts">
              <span className="micro">{b.eyebrow}</span>
              <h2>{b.title}</h2>
              <p>{b.text}</p>
              <CheckList items={b.items.map((it) => it.d)} />
            </div>
          </section>
        ))}
      </div>
      <QuestionEdges block={closing} />
    </PageShell>
  );
}

export function TechnologiesPage() {
  const [hero, frontEnd, motion, apps, collab, closing] = pageByKey('technologies').blocks;
  return (
    <PageShell active="technologies">
      <HeroSplit trail={[{ label: 'Technologies' }]} block={hero} visual={<StackLayers />} />
      <PushedTable block={frontEnd} id="front-end" />
      <Statement block={motion} id="motion" tone="pale" />
      <Statement block={apps} id="integrations" tone="ink" />
      <Statement block={collab} id="design-to-code" tone="white" aside={<DesignToCode />} />
      <MarqueeClose block={closing} />
    </PageShell>
  );
}

export function InsightsPage() {
  const [hero, ...rest] = pageByKey('insights').blocks;
  const topics = rest.filter((b) => b.name === 'Featured topic');
  const categories = rest.find((b) => b.name === 'Categories');
  const closing = rest[rest.length - 1];
  const [lead, ...others] = topics;
  const find = (t) => articles.find((a) => a.title === t.title);
  const href = (t) => `/insights/${find(t).slug}/`;
  const chips = categories.text.replace(/^Browse by /, '').replace(/\.$/, '').split(/, | and /);
  return (
    <PageShell active="insights">
      <HeroType trail={[{ label: 'Insights' }]} block={hero} />
      <section className="magazine" id="featured-topics" aria-label="Featured topics">
        <a className="magazine__lead" href={href(lead)} data-reveal="parts">
          <ImageSlot image={find(lead).cover} />
          <span className="micro">{lead.eyebrow}</span>
          <h2>{lead.title}</h2>
          <p>{lead.text}</p>
          <span className="read-card__go">Read the article · {readingMinutes(find(lead))} min <Arrow /></span>
        </a>
        <div className="magazine__list">
          {others.map((t) => (
            <a key={t.title} className="magazine__item" href={href(t)} data-reveal="parts">
              <ImageSlot image={find(t).cover} />
              <div>
                <span className="micro">{t.eyebrow}</span>
                <h2>{t.title}</h2>
                <p>{t.text}</p>
                <span className="read-card__go">Read the article · {readingMinutes(find(t))} min <Arrow /></span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="chips-sec" aria-labelledby="library-title">
        <div>
          <span className="micro">{categories.eyebrow}</span>
          <h2 id="library-title">{categories.title}</h2>
        </div>
        <ul className="chips" data-reveal="parts">{chips.map((c) => <li key={c}>{c}</li>)}</ul>
      </section>
      <QuestionEdges block={closing} />
    </PageShell>
  );
}

export { Actions };
