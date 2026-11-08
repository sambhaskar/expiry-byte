import React from 'react';
import { SiteFooter, SiteHeader } from './SiteChrome.jsx';

export function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

// Skip link, scroll progress, header and footer shared by every inner page.
export function PageShell({ active, children }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="progress" aria-hidden="true" />
      <SiteHeader activePage={active} />
      <main id="main" className="page">{children}</main>
      <SiteFooter activePage={active} />
    </>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
