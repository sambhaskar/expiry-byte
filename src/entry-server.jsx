import React from 'react';
import { renderToString } from 'react-dom/server';
import PageContent from './PageContent.jsx';
import LegalPage from './LegalPage.jsx';
import V2Page from './V2Page.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import { pageRoutes } from './routes.jsx';

import MotionRoot from './motion/MotionRoot.jsx';

// MotionRoot renders nothing, but is included so the server tree matches the client for hydration.
export function renderPage(key) {
  const Page = pageRoutes[key];
  return renderToString(<><Page /><MotionRoot /></>);
}

export function render() {
  return renderToString(<><PageContent /><MotionRoot /></>);
}

export function renderV2() {
  return renderToString(<V2Page />);
}

export function renderLegal(type) {
  return renderToString(<><LegalPage type={type} /><MotionRoot /></>);
}

export function renderNotFound() {
  return renderToString(<NotFoundPage />);
}
