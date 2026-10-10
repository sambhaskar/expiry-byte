import React from 'react';
import { SiteFooter, SiteHeader } from './SiteChrome.jsx';

const sections = {
  privacy: {
    title: 'Privacy Policy',
    updated: '10 October 2026',
    intro: 'This policy explains how Experibyte handles information you submit through the website enquiry form.',
    body: [
      ['Information you provide', 'The enquiry form may ask for your name, email address, phone number, service of interest, budget and project message.'],
      ['How it is used', 'We use these details to respond to your enquiry, discuss your project and communicate about services you requested. The form sends your submission to Experibyte via FormSubmit, the form delivery service configured on this website.'],
      ['Sharing and retention', 'We do not sell enquiry information. It is available to Experibyte and the service providers needed to deliver and protect the enquiry form and email. Messages may be retained in our business email for follow-up and record keeping.'],
      ['Your choices', 'You can contact us to ask about, correct or request deletion of information you submitted, subject to records we must retain. You may also contact us at experibytetechnologies@gmail.com with privacy questions.'],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    updated: '10 October 2026',
    intro: 'These general terms describe how Experibyte website and application projects are scoped. The written proposal and agreement for a specific project set its binding details.',
    body: [
      ['Project scope and pricing', 'Features, deliverables, milestones, timeline, support and fees are confirmed in a written proposal before work begins. Prices are in Indian Rupees unless otherwise stated. Hosting, domains, paid software, third-party services, gateway charges and applicable taxes are excluded unless the proposal includes them.'],
      ['Changes and approvals', 'The proposal states the included review or revision rounds. New features or substantial scope changes may affect fees and timeline and will be agreed before that work begins.'],
      ['Payments and cancellation', 'Payment stages are those stated in the proposal. If a project is cancelled, payment for completed work, agreed milestones and non-recoverable third-party costs is handled under the accepted proposal or agreement and applicable law.'],
      ['Ownership and third-party materials', 'After full payment, ownership of original custom deliverables transfers as stated in the project agreement. Third-party fonts, images, plugins, frameworks, software and other licensed materials remain subject to their respective licences.'],
      ['Support and outcomes', 'Post-launch support is limited to the duration and deliverables stated in the proposal. Search rankings, traffic, leads and sales depend on external factors and are not guaranteed.'],
      ['Contact', 'For questions about these terms, contact experibytetechnologies@gmail.com.'],
    ],
  },
};

export default function LegalPage({ type }) {
  const page = sections[type];
  return (
    <>
      <SiteHeader activePage="legal" />
      <main id="main" className="legal-page section-pad">
        <span className="micro">EXPERIBYTE / LEGAL</span>
        <h1>{page.title}</h1>
        <p className="legal-updated">Last updated {page.updated}</p>
        <p className="legal-intro">{page.intro}</p>
        {page.body.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}
      </main>
      <SiteFooter activePage="legal" />
    </>
  );
}
