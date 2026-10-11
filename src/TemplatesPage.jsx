import React from 'react';
import { SiteFooter, SiteHeader } from './SiteChrome.jsx';

const templates = [
  '01', '02', '03',
];

function TemplatePreview() {
  return (
    <div className="template-preview" aria-hidden="true">
      <span>Template preview</span>
    </div>
  );
}

export default function TemplatesPage() {
  return (
    <>
      <SiteHeader activePage="templates" />

      <main className="templates-page" id="main">
        <section className="templates-hero section-pad">
          <div className="templates-hero__copy">
            <span className="micro">EXPERIBYTE / TEMPLATE SHOP</span>
            <h1 data-reveal>Good design.<br /><em>Ready to make yours.</em></h1>
            <p>Explore a growing collection of thoughtfully designed website templates. Choose a starting point, make it your own, and launch with confidence.</p>
            <span className="templates-coming"><i /> Templates coming soon</span>
          </div>
          <div className="templates-hero__mark" aria-hidden="true"><span>T</span><i /></div>
        </section>

        <section className="templates-catalog section-pad" aria-labelledby="templates-heading">
          <div className="section-heading">
            <div>
              <span className="micro">THE COLLECTION / 001</span>
              <h2 id="templates-heading">Find your next<br /><em>starting point.</em></h2>
            </div>
            <p>Each template is being crafted to feel distinctive, work beautifully on every screen and give you room to grow.</p>
          </div>
          <div className="template-grid">
            {templates.map((template) => (
              <article className="template-card" key={template}>
                <TemplatePreview />
              </article>
            ))}
          </div>
        </section>

        <section className="templates-cta section-pad">
          <span className="micro">CAN'T WAIT FOR A TEMPLATE?</span>
          <h2>Let's build something<br /><em>just for you.</em></h2>
          <a className="btn btn-p" href="/#contact">Start a custom project <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <SiteFooter activePage="templates" />
    </>
  );
}
