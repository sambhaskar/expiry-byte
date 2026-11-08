import { AboutPage, InsightsPage, ProcessPage, SolutionsPage, TechnologiesPage, TemplatesPage, WorkPage } from './pages/CompanyPages.jsx';
import { ContactPage, PricingPage } from './pages/PricingContact.jsx';
import {
  AiIntegrationPage, AnimatedWebsitesPage, SeoPage, ServicesPage, UiUxDesignPage, WebApplicationsPage, WebsiteDevelopmentPage,
} from './pages/ServicePages.jsx';
import React from 'react';
import ArticlePage from './pages/ArticlePage.jsx';
import { articles } from './content/articles.js';

// Every page except home, by URL path. Copy comes from content/site.js; titles and descriptions from scripts/seo.mjs.
export const pageRoutes = {
  services: ServicesPage,
  'services/website-development': WebsiteDevelopmentPage,
  'services/animated-websites': AnimatedWebsitesPage,
  'services/web-applications': WebApplicationsPage,
  'services/ai-integration': AiIntegrationPage,
  'services/ui-ux-design': UiUxDesignPage,
  'services/seo': SeoPage,
  solutions: SolutionsPage,
  work: WorkPage,
  templates: TemplatesPage,
  about: AboutPage,
  process: ProcessPage,
  technologies: TechnologiesPage,
  pricing: PricingPage,
  insights: InsightsPage,
  contact: ContactPage,
  ...Object.fromEntries(articles.map((a) => [`insights/${a.slug}`, () => <ArticlePage article={a} />])),
};
