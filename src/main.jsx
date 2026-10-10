import React, { useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import PageContent from './PageContent.jsx';
import TemplatesPage from './TemplatesPage.jsx';
import './styles.css';

const isTemplatesPage = window.location.pathname.replace(/\/+$/, '') === '/templates';

function App() {
  useEffect(() => {
    if (isTemplatesPage) return undefined;
    const script = document.createElement('script');
    script.src = '/legacy.js';
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return isTemplatesPage ? <TemplatesPage /> : <PageContent />;
}

const root = document.getElementById('root');
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}