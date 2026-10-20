import React from 'react';
import { renderToString } from 'react-dom/server';
import PageContent from './PageContent.jsx';
import TemplatesPage from './TemplatesPage.jsx';
import LegalPage from './LegalPage.jsx';
import V2Page from './V2Page.jsx';

export function render() {
  return renderToString(<PageContent />);
}

export function renderV2() {
  return renderToString(<V2Page />);
}

export function renderTemplates() {
  return renderToString(<TemplatesPage />);
}

export function renderLegal(type) {
  return renderToString(<LegalPage type={type} />);
}
