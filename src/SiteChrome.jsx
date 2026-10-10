import React, { useEffect, useState } from 'react';

export function SiteHeader({ activePage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const homeRoute = activePage === 'home';
  const homeHref = (section) => homeRoute ? `#${section}` : `/#${section}`;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className={`site-header${activePage === 'templates' ? ' templates-header' : ''}${activePage === 'legal' ? ' legal-header' : ''}`}>
      <a className="brand" href="/" aria-label="Experibyte home">
        <img src="/logo.png" alt="Experibyte" />
      </a>
      <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation" id="navigation">
        <a href={homeHref('services')} onClick={() => setMenuOpen(false)}>Services</a>
        <a href="/templates/" aria-current={activePage === 'templates' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Templates</a>
        <a href={homeHref('pricing')} onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href={homeHref('process')} onClick={() => setMenuOpen(false)}>Process</a>
        <a href={homeHref('faq')} onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href={homeHref('contact')} onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <a className="nav-cta" href={homeHref('contact')} onClick={() => setMenuOpen(false)}>Get a quote <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" /></svg></a>
      <button id="menu" type="button" aria-expanded={menuOpen} aria-controls="navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
        <span /><span />
      </button>
    </header>
  );
}

export function SiteFooter({ activePage = 'home' }) {
  const homeRoute = activePage === 'home';
  const homeHref = (section) => homeRoute ? `#${section}` : `/#${section}`;
  const topHref = '/';

  return (
    <footer className={`site-footer${activePage === 'templates' ? ' templates-footer' : ''}`}>
      <a className="brand" href="/" aria-label="Experibyte home"><img src="/logo.png" alt="Experibyte" /></a>
      <div className="footer-content">
        <div className="footer-links">
          <div><b>Quick Links</b><a href={homeHref('services')}>Services</a><a href="/templates/">Templates</a><a href={homeHref('pricing')}>Pricing</a><a href={homeHref('process')}>Process</a><a href={homeHref('contact')}>Contact</a></div>
          <div><b>Legal</b><a href="/privacy-policy/">Privacy Policy</a><a href="/terms/">Terms &amp; Conditions</a></div>
          <div><b>Business Enquiries</b><a href="mailto:experibytetechnologies@gmail.com">experibytetechnologies@gmail.com</a><span>Working with clients across India and worldwide.</span></div>
        </div>
        <p className="footer-legal">© {new Date().getFullYear()} Experibyte. All rights reserved.</p>
      </div>
      <a href={topHref} className="back-top">BACK TO TOP ↑</a>
    </footer>
  );
}
