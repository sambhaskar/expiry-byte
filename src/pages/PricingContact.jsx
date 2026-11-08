import React, { useEffect, useId, useRef, useState } from 'react';
import { PageShell } from '../PageShell.jsx';
import { ContactForm } from '../ContactForm.jsx';
import { pageByKey } from '../content/site.js';
import { Actions, HeroType } from '../ui/Heroes.jsx';
import { EnquirySlip, Statement } from '../ui/Sections.jsx';
import { BlueClose } from '../ui/Closings.jsx';

const sentence = (t) => t.charAt(0).toUpperCase() + t.slice(1);
const tabNames = { 'Website packages': 'Websites', 'Web application packages': 'Web apps', 'SEO packages': 'SEO' };

// One tab per kind of work; each opens with its starting price set into a sentence.
function PricingTabs({ groups }) {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const base = useId();
  const tabs = useRef([]);
  useEffect(() => setReady(true), []);
  const onKey = (e, i) => {
    const n = groups.length;
    const next = { ArrowRight: (i + 1) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault(); setActive(next); tabs.current[next]?.focus();
  };
  return (
    <section className="price-tabs" id="packages">
      <div className="price-tabs__bar" role="tablist" aria-label="Kind of work">
        {groups.map((g, i) => (
          <button key={g.name} ref={(el) => { tabs.current[i] = el; }} type="button" role="tab" id={`${base}-t${i}`} aria-controls={`${base}-p${i}`}
            aria-selected={i === active} tabIndex={i === active ? 0 : -1} onClick={() => setActive(i)} onKeyDown={(e) => onKey(e, i)}>
            {tabNames[g.name]}
          </button>
        ))}
      </div>
      {groups.map((g, i) => {
        const rows = g.items.map((it) => { const [, price, rest] = it.d.match(/^([^:]+):\s*(.*)$/); return { name: it.t, price: sentence(price), rest: sentence(rest) }; });
        const from = rows[0].price.replace(/^Starting at /, '');
        return (
          <div key={g.name} role="tabpanel" id={`${base}-p${i}`} aria-labelledby={`${base}-t${i}`} hidden={ready && i !== active} className="price-tabs__panel">
            <p className="price-sentence">{tabNames[g.name]} from <span className="price-sentence__figure">{from}</span></p>
            <div className="price-tabs__intro">
              <div>
                <span className="micro">{g.eyebrow}</span>
                <h2>{g.title}</h2>
              </div>
              <p>{g.text}</p>
            </div>
            <ul className="price-rows">
              {rows.map((r) => (
                <li key={r.name}>
                  <b>{r.name}</b>
                  <span className="price-rows__price">{r.price}</span>
                  <span>{r.rest}</span>
                </li>
              ))}
            </ul>
            <Actions ctas={g.ctas} />
          </div>
        );
      })}
    </section>
  );
}

export function PricingPage() {
  const [hero, web, apps, seo, before, closing] = pageByKey('pricing').blocks;
  return (
    <PageShell active="pricing">
      <HeroType trail={[{ label: 'Pricing' }]} block={hero} />
      <PricingTabs groups={[web, apps, seo]} />
      <Statement block={before} id="before-you-begin" tone="ink" />
      <BlueClose block={closing} />
    </PageShell>
  );
}

export function ContactPage() {
  const [hero, details, form, next, reassurance, final] = pageByKey('contact').blocks;
  const [intro, ...fields] = form.items;
  const [, formHeading, formIntro] = intro.match(/^Form heading: (.+?) Intro: (.+)$/);
  const email = 'experibytetechnologies@gmail.com';
  const where = details.text.split(`${email}.`)[1].trim();
  return (
    <PageShell active="contact">
      <header className="contact-hero">
        <div className="contact-hero__copy">
          <span className="micro">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p className="contact-hero__lede">{hero.text}</p>
          <dl className="contact-hero__details">
            <div><dt>{details.title}</dt><dd><a href={`mailto:${email}`}>{email}</a></dd></div>
            <div><dt>Where we work</dt><dd>{where}</dd></div>
            <div><dt>{reassurance.title}</dt><dd>{reassurance.text}</dd></div>
          </dl>
        </div>
        <div className="contact-hero__form" id="enquiry">
          <span className="micro">{form.eyebrow}</span>
          <h2>{formHeading}</h2>
          <p>{formIntro}</p>
          <ContactForm fields={fields} submitLabel={form.ctas[0]?.label} />
        </div>
      </header>
      <EnquirySlip block={next} id="after-you-submit" steps={['Enquiry received', 'We review the details you share', 'We follow up to clarify requirements', 'A call, where appropriate', 'A written scope and quote']} footer={['Our reply', 'Within 24 hours']} />
      <BlueClose block={final} />
    </PageShell>
  );
}
