import React, { useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import PageContent from './PageContent.jsx';
import TemplatesPage from './TemplatesPage.jsx';
import LegalPage from './LegalPage.jsx';
import V2Page from './V2Page.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import './styles.css';

const knownPaths = ['', '/index.html', '/templates', '/v2', '/privacy-policy', '/terms'];
const isNotFound = document.getElementById('root').dataset.notFound === 'true' || !knownPaths.includes(window.location.pathname.replace(/\/+$/, ''));
const isTemplatesPage = window.location.pathname.replace(/\/+$/, '') === '/templates';
const isV2Page = window.location.pathname.replace(/\/+$/, '') === '/v2';
const legalPath = window.location.pathname.replace(/\/+$/, '');

function App() {
  useEffect(() => {
    if (isTemplatesPage || isNotFound) return undefined;
    const script = document.createElement('script');
    script.src = '/legacy.js';
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  if (isNotFound) return <NotFoundPage />;
  if (isTemplatesPage) return <TemplatesPage />;
  if (isV2Page) return <V2Page />;
  if (legalPath === '/privacy-policy') return <LegalPage type="privacy" />;
  if (legalPath === '/terms') return <LegalPage type="terms" />;
  return <PageContent />;
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
