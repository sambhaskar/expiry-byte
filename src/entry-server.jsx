import React from 'react';
import { renderToString } from 'react-dom/server';
import PageContent from './PageContent.jsx';
import TemplatesPage from './TemplatesPage.jsx';

export function render() {
  return renderToString(<PageContent />);
}

export function renderTemplates() {
  return renderToString(<TemplatesPage />);
}