import React, { useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import PageContent from './PageContent.jsx';
import LegalPage from './LegalPage.jsx';
import V2Page from './V2Page.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import MotionRoot from './motion/MotionRoot.jsx';
import { pageRoutes } from './routes.jsx';
import './styles.css';
import './site.css';

const path = window.location.pathname.replace(/\/+$/, '');
const RoutedPage = Object.hasOwn(pageRoutes, path.slice(1)) ? pageRoutes[path.slice(1)] : null;
const knownPaths = ['', '/index.html', '/v2', '/privacy-policy', '/terms'];
const isNotFound = document.getElementById('root').dataset.notFound === 'true' || (!RoutedPage && !knownPaths.includes(path));
const isHome = path === '' || path === '/index.html';
const isV2Page = path === '/v2';
const legalPath = path;

// Links to sections of the old single-page site now go to their own pages.
const movedAnchors = {
  '#services': '/services/', '#pricing': '/pricing/', '#contact': '/contact/', '#process': '/process/',
  '#industries': '/solutions/', '#design-to-code': '/technologies/', '#trust': '/about/', '#faq': '/about/', '#motion': '/services/animated-websites/',
};
if (isHome && movedAnchors[window.location.hash]) window.location.replace(movedAnchors[window.location.hash]);

function App() {
  // The old draft at /v2 still runs on the previous animation script.
  useEffect(() => {
    if (!isV2Page) return undefined;
    const script = document.createElement('script');
    script.src = '/legacy.js';
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  if (isNotFound) return <NotFoundPage />;
  if (isV2Page) return <V2Page />;
  let page = <PageContent />;
  if (RoutedPage) page = <RoutedPage />;
  else if (legalPath === '/privacy-policy') page = <LegalPage type="privacy" />;
  else if (legalPath === '/terms') page = <LegalPage type="terms" />;
  return <>{page}<MotionRoot /></>;
}

const root = document.getElementById('root');
if (isNotFound && root.dataset.notFound !== 'true') {
  // Unknown address served the home shell (e.g. dev server): replace it with the 404 page.
  root.textContent = '';
  createRoot(root).render(<App />);
} else if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
