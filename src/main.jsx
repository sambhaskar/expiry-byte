import React, { useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import PageContent from './PageContent.jsx';
import TemplatesPage from './TemplatesPage.jsx';
import LegalPage from './LegalPage.jsx';
import V2Page from './V2Page.jsx';
import './styles.css';

const isTemplatesPage = window.location.pathname.replace(/\/+$/, '') === '/templates';
const isV2Page = window.location.pathname.replace(/\/+$/, '') === '/v2';
const legalPath = window.location.pathname.replace(/\/+$/, '');

function App() {
  useEffect(() => {
    if (isTemplatesPage) return undefined;
    const script = document.createElement('script');
    script.src = '/legacy.js';
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  if (isTemplatesPage) return <TemplatesPage />;
  if (isV2Page) return <V2Page />;
  if (legalPath === '/privacy-policy') return <LegalPage type="privacy" />;
  if (legalPath === '/terms') return <LegalPage type="terms" />;
  return <PageContent />;
}

const root = document.getElementById('root');
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
