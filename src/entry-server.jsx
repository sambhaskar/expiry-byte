import React from 'react';
import { renderToString } from 'react-dom/server';
import PageContent from './PageContent.jsx';
import TemplatesPage from './TemplatesPage.jsx';
import LegalPage from './LegalPage.jsx';

export function render() {
  return renderToString(<PageContent />);
}

export function renderTemplates() {
  return renderToString(<TemplatesPage />);
}

export function renderLegal(type) {
  return renderToString(<LegalPage type={type} />);
}
