import React, { useEffect, useState } from 'react';

// Navigation, footer columns and footer copy follow the content document's "Shared Website Copy".
const mainNav = [
  { key: 'services', href: '/services/', label: 'Services' },
  { key: 'solutions', href: '/solutions/', label: 'Solutions' },
  // Work is hidden until real projects are ready. To show it again, uncomment this line and the one in footerCompany.
  // { key: 'work', href: '/work/', label: 'Work' },
  { key: 'templates', href: '/templates/', label: 'Templates' },
  { key: 'about', href: '/about/', label: 'About' },
  { key: 'insights', href: '/insights/', label: 'Insights' },
  { key: 'contact', href: '/contact/', label: 'Contact' },
];

const footerServices = [
  ['website-development', 'Website Development'],
  ['animated-websites', 'Animated Websites'],
  ['web-applications', 'Web Applications'],
  ['ai-integration', 'AI Integration'],
  ['ui-ux-design', 'UI/UX Design'],
  ['seo', 'SEO'],
];

// Pricing is not in the document's footer list; it is added so the page is reachable.
const footerCompany = [
  ['/about/', 'About'], ['/process/', 'Our Process'], ['/technologies/', 'Technologies'], // ['/work/', 'Work'],
  ['/insights/', 'Insights'], ['/pricing/', 'Pricing'], ['/contact/', 'Contact'],
];

export function SiteHeader({ activePage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const homeRoute = activePage === 'home' || activePage === 'v2';
  const homeHref = (section) => homeRoute ? `#${section}` : `/#${section}`;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  if (activePage === 'v2') {
    return (
      <header className="site-header">
        <a className="brand" href="/" aria-label="Experibyte home">
          <img src="/logo.png" alt="Experibyte" />
        </a>
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation" id="navigation">
          <a href={homeHref('services')} onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/templates/" onClick={() => setMenuOpen(false)}>Templates <span className="v2-tag">NEW</span></a>
          <a href={homeHref('work')} onClick={() => setMenuOpen(false)}>Work</a>
          <a href={homeHref('pricing')} onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href={homeHref('community')} onClick={() => setMenuOpen(false)}>Community</a>
          <a href={homeHref('faq')} onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href={homeHref('contact')} onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="nav-cta" href={homeHref('contact')} onClick={() => setMenuOpen(false)}>Book a free call <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" /></svg></a>
        <button id="menu" type="button" aria-expanded={menuOpen} aria-controls="navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
      </header>
    );
  }

  return (
    <header className={`site-header site-header--full${activePage === 'legal' ? ' legal-header' : ''}`}>
      <a className="brand" href="/" aria-label="Experibyte home">
        <img src="/logo.png" alt="Experibyte" />
      </a>
      <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation" id="navigation">
        {mainNav.map(({ key, href, label }) => (
          <a key={key} href={href} aria-current={activePage === key ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="nav-cta" href="/contact/" onClick={() => setMenuOpen(false)}>Start a Project <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" /></svg></a>
      <button id="menu" type="button" aria-expanded={menuOpen} aria-controls="navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
        <span /><span /><span />
      </button>
    </header>
  );
}

export function SiteFooter({ activePage = 'home' }) {
  const isV2 = activePage === 'v2';
  const topHref = isV2 ? '/' : '#main';

  return (
    <footer className={`site-footer${isV2 ? '' : ' site-footer--full'}`}>
      <a className="brand" href="/" aria-label="Experibyte home"><img src="/logo.png" alt="Experibyte" /></a>
      <div className="footer-content">
        {!isV2 && <p className="footer-about">Experibyte builds websites, interactive digital experiences, web applications and practical AI integrations for businesses ready to move forward.</p>}
        <div className={`footer-links${isV2 ? '' : ' footer-links--full'}`}>
          {isV2
            ? <div><b>Quick Links</b><a href="#services">Services</a><a href="/templates/">Templates</a><a href="#pricing">Pricing</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
            : (
              <>
                <div><b>Services</b>{footerServices.map(([slug, label]) => <a key={slug} href={`/services/${slug}/`}>{label}</a>)}</div>
                <div><b>Company</b>{footerCompany.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</div>
              </>
            )}
          <div><b>Legal</b><a href="/privacy-policy/">Privacy Policy</a><a href="/terms/">Terms &amp; Conditions</a></div>
          <div data-nosnippet><b>Contact</b><a href="mailto:hello@experibyte.com">hello@experibyte.com</a><span>Working with clients across India and worldwide.</span></div>
        </div>
      </div>
      <a href={topHref} className="back-top">BACK TO TOP ↑</a>
      <p className="footer-legal">© {new Date().getFullYear()} Experibyte. All rights reserved.</p>
    </footer>
  );
}
