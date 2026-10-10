import React, { useState } from 'react';

const templates = [
  { number: '01', name: 'Studio & Agency', category: 'Business', style: 'studio', detail: 'A polished home for your services, work and story.' },
  { number: '02', name: 'Portfolio', category: 'Creative', style: 'portfolio', detail: 'A clean, visual portfolio made to put your work first.' },
  { number: '03', name: 'Online Store', category: 'Commerce', style: 'store', detail: 'A considered storefront for products and new launches.' },
  { number: '04', name: 'SaaS Launch', category: 'Technology', style: 'saas', detail: 'A clear product page for features, plans and signups.' },
];

function Brand() {
  return (
    <a className="brand" href="/#home" aria-label="Experibyte home">
      <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M8 8h47v12H20v24h35v12H8V8Z" fill="currentColor" />
        <path d="M26 26h12v12H26V26Z" fill="#2B4BFF" />
      </svg>
      <span>exper<span className="brand-i">ı</span>byte</span>
    </a>
  );
}

function TemplatePreview({ style }) {
  return (
    <div className={`template-preview template-preview--${style}`} aria-hidden="true">
      <div className="template-preview__browser"><i /><i /><i /><span>yourbrand.com</span></div>
      <div className="template-preview__canvas">
        <div className="template-preview__nav"><b /><span /><span /><span /></div>
        <div className="template-preview__hero">
          <i /><i /><i />
          <div className="template-preview__visual"><b /><span /><span /></div>
        </div>
        <div className="template-preview__foot"><i /><i /><i /></div>
      </div>
    </div>
  );
}

export default function TemplatesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header templates-header">
        <Brand />
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation" id="templates-navigation">
          <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/templates/" aria-current="page" onClick={() => setMenuOpen(false)}>Templates</a>
          <a href="/#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="/#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>
        <a className="nav-cta" href="/#contact">Get a quote <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" /></svg></a>
        <button className="templates-menu" type="button" aria-expanded={menuOpen} aria-controls="templates-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </header>

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
              <article className="template-card" key={template.number}>
                <TemplatePreview style={template.style} />
                <div className="template-card__meta">
                  <span className="micro">{template.category} / {template.number}</span>
                  <span className="template-card__status">Coming soon</span>
                </div>
                <h3>{template.name}</h3>
                <p>{template.detail}</p>
                <button className="template-card__button" type="button" disabled>Coming soon <span aria-hidden="true">↗</span></button>
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

      <footer className="site-footer templates-footer">
        <Brand />
        <span>Experibyte. All rights reserved.</span>
        <span>Websites · Templates · Web Apps · AI</span>
        <a href="#main" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}