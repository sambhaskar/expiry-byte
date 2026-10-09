import React from 'react';
import { renderToString } from 'react-dom/server';
import PageContent from './PageContent.jsx';

export function render() {
  return renderToString(<PageContent />);
}
