import React, { useState } from 'react';
import { ContactForm } from './ContactForm.jsx';
import { SiteFooter, SiteHeader } from './SiteChrome.jsx';
import './v2.css';

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const services = [
  { no: '01 / BUILD', title: 'Website Development', body: 'Landing pages, business websites, web publications and HTML email signatures. Fast, mobile-friendly and easy for your team to update.', art: 'Look sharp. Load fast.' },
  { no: '02 / MOVE', title: 'Animated & Scroll Websites', tag: 'TRENDING', body: 'Websites that come alive as visitors scroll, with smooth movement and eye-catching effects that make people stop and explore. Built with GSAP, Framer Motion and smooth scroll.', art: 'Scroll animations' },
  { no: '03 / CONNECT', title: 'Web Applications', body: 'Booking systems, customer portals, dashboards, online courses and custom software, built around how your business works.', art: 'Web applications' },
  { no: '04 / AUTOMATE', title: 'AI Integration', body: 'Smart chatbots that answer your customers 24/7, plus automation that saves your team hours of repetitive work.', art: 'AI integration' },
  { no: '05 / DESIGN', title: 'UI / UX Design', body: 'UI/UX design for websites, web apps and dashboards in Figma. You see and approve every screen before a line of code is written.', art: 'UI / UX design' },
  { no: '06 / GROW', title: 'SEO', body: 'Help customers find you on Google, with the right setup, local search visibility and steady improvements over time.', art: 'Local SEO' },
  { no: '07 / SHOW', title: 'Product & Promo Videos', body: 'Product demo videos, website walkthroughs, social reels and custom motion videos that explain what you sell in under 60 seconds.', art: 'Product videos' },
  { no: '08 / LAUNCH', title: 'Ready-made Templates', body: 'Premium React, Next.js and HTML/CSS/JS templates with scroll animations built in. Buy, customise, launch the same day.', art: 'Templates', href: '/templates/', linkLabel: 'Browse templates' },
];

const concepts = [
  { name: 'Clinic website', industry: 'Clinics & Healthcare', built: 'Doctor profiles, appointment booking and a WhatsApp enquiry button.' },
  { name: 'Café website', industry: 'Restaurants & Cafés', built: 'Animated menu, table reservations and Google Maps visibility.' },
  { name: 'SaaS launch page', industry: 'Startups & SaaS', built: 'Scroll-animated product story with a waitlist form and pricing section.' },
];

const templates = [
  { name: 'Next.js SaaS launch template', stack: 'Next.js · Tailwind · GSAP · Lenis', price: 'Personal licence from ₹2,999 / $39' },
  { name: 'React portfolio template', stack: 'React · Vite · Framer Motion', price: 'Personal licence from ₹1,999 / $29' },
  { name: 'HTML agency landing page', stack: 'HTML · CSS · JS · GSAP', price: 'Personal licence from ₹999 / $15' },
];

const industries = [
  ['Clinics & Healthcare', 'Appointment booking, doctor profiles, WhatsApp reminders and an AI assistant for patient FAQs.'],
  ['Restaurants & Cafés', 'Animated menus, table reservations, online ordering and Google Maps visibility.'],
  ['Real Estate', 'Property listings with filters, virtual tours, 3D showcases and lead capture.'],
  ['Education & Coaching', 'Course platforms, student portals, subscriptions and AI study tools.'],
  ['E-commerce & D2C', 'Fast online stores with scroll-animated product launches and payment integration.'],
  ['Startups & SaaS', 'The first version of your app (MVP) to test your idea fast, plus admin dashboards and product launch websites.'],
  ['Gyms & Fitness', 'Membership plans, class schedules, trainer profiles and online sign-ups.'],
  ['Salons, Spas & Beauty', 'Online appointment booking, service menus with prices and before-and-after galleries.'],
  ['Hotels, Resorts & Travel', 'Room booking, stunning photo galleries, tour packages and enquiry forms.'],
  ['Interior Design & Architecture', 'Beautiful project portfolios, animated showcases and lead capture for new projects.'],
  ['Manufacturing & Industrial', 'Product catalogues, company profiles, dealer enquiries and downloadable brochures.'],
  ['CAs, Lawyers & Consultants', 'Professional websites that build trust, with service pages, consultation booking and client portals.'],
  ['Events & Weddings', 'Event galleries, package listings, online enquiries and wedding invitation websites.'],
  ['Automobile & Services', 'Service booking, vehicle listings, inspection reports and customer tracking.'],
  ['NGOs & Communities', 'Donation pages with online payments, volunteer sign-ups and impact stories.'],
];

const faqs = [
  ['Can I buy a template instead of a custom website?', 'Yes. Our templates come in HTML/CSS/JS, React and Next.js, with scroll animations built in. Buy, download instantly and customise. Want us to customise it? We offer a setup service too.'],
  ['What licence do I get with a template?', "Personal licence: one website for yourself. Commercial licence: one client project. Reselling or redistributing the source code isn't allowed."],
  ['Do you make product videos?', 'Yes: product demos, reels, website walkthroughs and custom motion videos for launches and ads.'],
  ['Can you design an email signature?', 'Yes. We create HTML email signatures that work in Gmail, Outlook and Apple Mail.'],
];

export default function V2Page() {
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const visibleIndustries = showAllIndustries ? industries : industries.slice(0, 6);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="progress" aria-hidden="true" />
      <SiteHeader activePage="v2" />
      <main id="main">

        {/* 2.2 Hero */}
        <section className="v2-hero section-pad" id="home">
          <span className="micro">EXPERIBYTE — Look sharp. Load fast.</span>
          <h1 data-reveal>Websites that look sharp, load fast and <em>bring you customers.</em></h1>
          <p className="v2-lead" data-reveal>
            We design and build websites, animated scroll experiences, web apps and product videos for startups and growing businesses. Prefer to build it yourself? Grab one of our ready-made React, Next.js and HTML animation templates.
          </p>
          <span className="micro v2-tagline">Web · Motion · Video · Templates · SEO</span>
          <div className="v2-stats" data-reveal>
            <div><strong>24 hrs</strong><p>reply with a free written quote</p></div>
            <div><strong>Free</strong><p>basic SEO setup with every website</p></div>
            <div><strong>₹0</strong><p>hidden costs: price agreed before we start</p></div>
          </div>
          <div className="v2-actions">
            <a className="btn btn-p" href="#pricing">See packages {arrow}</a>
            <a className="btn btn-g" href="/templates/">Browse templates ↗</a>
          </div>
        </section>

        {/* 2.3 Services */}
        <section id="services" className="section-pad">
          <div className="section-heading">
            <div>
              <span className="micro">What we do</span>
              <h2 data-reveal>One studio. Everything your business needs <em>online.</em></h2>
            </div>
            <p data-reveal>Design, development, motion and growth under one roof, so your website looks and works great everywhere.</p>
          </div>
          <div className="v2-grid-2">
            {services.map((service) => (
              <article className="v2-card" key={service.no} data-reveal>
                <div className="v2-art" aria-hidden="true">{service.art}</div>
                <span className="micro">{service.no}</span>
                <h3>
                  {service.title}
                  {service.tag && <span className="v2-tag">{service.tag}</span>}
                </h3>
                <p>{service.body}</p>
                <a className="round-link" href={service.href || '#contact'} aria-label={`${service.linkLabel || 'Discuss'} ${service.title}`}>{arrow}</a>
              </article>
            ))}
          </div>
        </section>

        {/* 2.6 Selected work (concept projects until real work is added) */}
        <section id="work" className="section-pad">
          <div className="section-heading">
            <div>
              <span className="micro">Selected work</span>
              <h2 data-reveal>Real projects. <em>Real results.</em></h2>
            </div>
            <p>A few websites, apps and videos we've designed and built recently.</p>
          </div>
          <div className="v2-grid-3">
            {concepts.map((project) => (
              <article className="v2-card" key={project.name} data-reveal>
                <span className="v2-tag v2-tag--outline">Concept</span>
                <h3>{project.name}</h3>
                <p><b>Industry:</b> {project.industry}</p>
                <p>{project.built}</p>
                <p className="v2-muted">Result: [add real result when available]</p>
              </article>
            ))}
          </div>
        </section>

        {/* 3.1 Templates showcase */}
        <section id="templates" className="section-pad v2-templates">
          <div className="section-heading">
            <div>
              <span className="micro">Template shop</span>
              <h2 data-reveal>Skip the blank page. <em>Launch with motion.</em></h2>
            </div>
            <p>Premium animated website templates in React, Next.js and HTML/CSS/JS. Smooth scroll, GSAP animations and clean code, ready to customise and launch today.</p>
          </div>
          <div className="v2-grid-3">
            {templates.map((template) => (
              <article className="v2-card" key={template.name} data-reveal>
                <div className="v2-art" aria-hidden="true">Preview video / GIF</div>
                <h3>{template.name}</h3>
                <p className="v2-muted">{template.stack}</p>
                <p><b>{template.price}</b></p>
                <div className="v2-actions">
                  <a className="btn btn-g" href="/templates/">Live demo</a>
                  <a className="btn btn-p" href="/templates/">Buy</a>
                </div>
              </article>
            ))}
          </div>
          <div className="v2-actions">
            <a className="btn btn-g" href="/templates/">Browse all templates ↗</a>
          </div>
        </section>

        {/* 2.4 Why animation matters (copy unchanged; buttons updated) */}
        <section id="motion" className="motion-story">
          <div className="motion-stage">
            <span className="micro">Why animation matters</span>
            <div className="motion-heading" aria-label="Your business has a story. Let's tell it beautifully, so every visitor feels it and remembers you.">
              <div className="motion-line" aria-hidden="true"><span>Your business has a story.</span></div>{' '}
              <div className="motion-line" aria-hidden="true"><span>Let's tell it beautifully,</span></div>{' '}
              <div className="motion-line" aria-hidden="true"><span>so every visitor feels it</span></div>{' '}
              <div className="motion-line" aria-hidden="true"><span>and remembers you.</span></div>
            </div>
            <div className="motion-bottom">
              <p>Your website is often the first place a customer meets you. We make that first moment special, with smooth, thoughtful animations that guide visitors through your story, make your business feel premium and turn a quick visit into a real enquiry.</p>
              <div className="v2-actions">
                <a className="button button-light" href="/templates/">See animated templates {arrow}</a>
                <a className="button button-light" href="#contact">Want a website? Let's talk {arrow}</a>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 Design to code (copy unchanged) */}
        <section id="design-to-code" className="section-pad v2-split">
          <div className="design-copy">
            <span className="micro">Pixel-Perfect Design to Code</span>
            <h2 data-reveal>Have a design? We'll bring it to life, pixel by pixel.</h2>
            <p>Send us your Figma, Adobe XD or Photoshop file and we'll turn it into a live website that looks exactly like your design on every screen, from mobile to desktop.</p>
            <ul>
              <li>Pixel-perfect match to your design</li>
              <li>Fully responsive on mobile, tablet &amp; desktop</li>
              <li>Clean, fast-loading code</li>
              <li>Built as a custom website or on WordPress</li>
              <li>White-label friendly: designers &amp; agencies, we'll happily build it for you, and you deliver it proudly under your own name</li>
            </ul>
            <p className="design-price">Every design is different, so the price depends on your pages and how detailed they are. <b>Send your file and get a free quote within 24 hours.</b></p>
            <a className="button button-dark" href="#contact">Send us your design {arrow}</a>
          </div>
        </section>

        {/* Starting from zero (copy unchanged) */}
        <section className="startup section-pad">
          <div className="startup-head">
            <span className="micro">Starting from zero?</span>
            <h2 data-reveal>New business, no website yet? We'll guide you through everything.</h2>
            <p>Launching a brand-new business? We take care of your full online setup and guide you at every step.</p>
          </div>
          <div className="startup-steps">
            <article data-reveal><h3>1. Plan your website</h3><p>The pages, content and features that fit your business and customers.</p></article>
            <article data-reveal><h3>2. Domain &amp; email</h3><p>Your own web address and a professional business email.</p></article>
            <article data-reveal><h3>3. Website or app</h3><p>Designed around your business, mobile-first and SEO-ready.</p></article>
            <article data-reveal><h3>4. Launch &amp; grow</h3><p>Google Business Profile, SEO and AI tools to help customers find you.</p></article>
          </div>
        </section>

        {/* 2.5 Process (step 01 copy updated) */}
        <section id="process" className="section-pad">
          <div className="section-heading">
            <div>
              <span className="micro">How we work</span>
              <h2 data-reveal>From idea to launch <em>in 4 steps</em></h2>
            </div>
            <a href="#contact" className="text-link">Book a free call</a>
          </div>
          <div className="v2-grid-2">
            <article className="v2-card" data-reveal>
              <span className="micro">THE PROCESS / 01</span>
              <h3>Discover</h3>
              <p>A free 20-minute call to understand your business, goals and budget. You get a fixed written quote within 24 hours.</p>
            </article>
            <article className="v2-card" data-reveal>
              <span className="micro">THE PROCESS / 02</span>
              <h3>Design</h3>
              <p>We design your screens and animations, then refine them together with your feedback before we start building.</p>
            </article>
            <article className="v2-card" data-reveal>
              <span className="micro">THE PROCESS / 03</span>
              <h3>Build</h3>
              <p>We develop, test on every device and optimise for speed, SEO and accessibility.</p>
            </article>
            <article className="v2-card" data-reveal>
              <span className="micro">THE PROCESS / 04</span>
              <h3>Launch &amp; grow</h3>
              <p>We go live, show you how to manage your website and keep supporting you as your business grows.</p>
            </article>
          </div>
        </section>

        {/* 2.7 Industries: first 6 plus toggle */}
        <section className="industries section-pad" id="industries">
          <div className="section-heading">
            <div>
              <span className="micro">Built for every industry</span>
              <h2 data-reveal>What we can <em>build for you</em></h2>
            </div>
          </div>
          <div className="industry-grid">
            {visibleIndustries.map(([title, body], index) => (
              <details className="industry-item" key={title} data-reveal>
                <summary>
                  <span className="micro">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <span className="industry-plus">+</span>
                </summary>
                <p>{body}</p>
              </details>
            ))}
          </div>
          <button type="button" className="v2-more" aria-expanded={showAllIndustries} onClick={() => setShowAllIndustries((open) => !open)}>
            {showAllIndustries ? 'Show fewer industries −' : `View all ${industries.length} industries +`}
          </button>
          <p className="industry-note">Don't see your industry? We build for every kind of business. <a href="#contact" style={{ color: 'var(--acc2)', fontWeight: 600 }}>Tell us about yours →</a></p>
        </section>

        {/* 2.8 Pricing: tabs Websites / Web Apps / Video / SEO & Care */}
        <section id="pricing" className="pricing-section section-pad">
          <div className="section-heading">
            <div>
              <span className="micro">Packages</span>
              <h2 data-reveal>Clear packages. <em>No surprises.</em></h2>
            </div>
            <p><strong>Transparent pricing. Clearly defined deliverables.</strong><br />Every project begins with a discussion of your goals, features, budget and timeline. You will receive a written proposal outlining exactly what is included before development begins.<br /><br />Starting prices apply to standard project requirements. Additional features, integrations and custom functionality are quoted separately with your approval.</p>
          </div>
          <div className="tabs">
            <button className="on" data-t="web">Websites</button>
            <button data-t="app">Web Apps</button>
            <button data-t="video">Video</button>
            <button data-t="seo">SEO &amp; Care</button>
          </div>
          <div className="pricing-panels">
            <div className="grid g3 plans on" id="web">
              <div className="card plan">
                <h3>Basic</h3>
                <p className="from">Starting at</p>
                <div className="price">₹12,999</div>
                <p className="for">For new businesses and professionals who need a polished, dependable online presence.</p>
                <ul>
                  <li>Up to 5 standard pages</li>
                  <li>Pixel-perfect, mobile-responsive design</li>
                  <li>Subtle hover &amp; fade animations</li>
                  <li>Contact form setup (subject to the agreed hosting configuration) and WhatsApp button</li>
                  <li>Best suited for informational and business websites</li>
                  <li>Client-provided content and brand assets</li>
                  <li>Basic on-page SEO configuration</li>
                  <li>Two consolidated revision rounds</li>
                  <li>Two weeks of post-launch bug-fix support</li>
                </ul>
                <p className="more">Need more features? <a href="#contact">Get a custom quote →</a></p>
                <a href="#contact" className="btn btn-g">Choose Basic</a>
              </div>
              <div className="card plan pop">
                <span className="badge">Most popular</span>
                <h3>Advanced</h3>
                <p className="from">Starting at</p>
                <div className="price">₹29,999</div>
                <p className="for">For growing businesses requiring a more flexible website with additional pages, integrations and content management.</p>
                <ul>
                  <li>Custom design made for your business</li>
                  <li>Up to 15 pages within the agreed project scope</li>
                  <li>Content management functionality where specified</li>
                  <li>Scroll-reveal animations</li>
                  <li>Blog / news section</li>
                  <li>Google SEO &amp; Analytics setup</li>
                  <li>Three consolidated revision rounds</li>
                  <li>One month of post-launch bug-fix support</li>
                  <li>Integrations subject to technical feasibility and third-party availability</li>
                </ul>
                <a href="#contact" className="btn btn-p">Get a quote</a>
              </div>
              <div className="card plan">
                <h3>Premium</h3>
                <p className="from">Starting at</p>
                <div className="price">₹59,999</div>
                <p className="for">For ambitious brands seeking distinctive digital experiences and advanced functionality.</p>
                <ul>
                  <li>Custom page count based on the approved project scope</li>
                  <li>Premium custom design</li>
                  <li>One major custom feature defined in the proposal: for example, an online store, appointment booking or a members area</li>
                  <li>Online payments (UPI, cards, net banking)</li>
                  <li>Website in up to 2 languages</li>
                  <li>Advanced Google SEO setup</li>
                  <li>Three months of post-launch support for agreed deliverables</li>
                  <li>Advanced animation and interactive experiences as agreed</li>
                  <li>Performance optimisation suited to the chosen technology</li>
                  <li>Third-party integrations where feasible</li>
                </ul>
                <a href="#contact" className="btn btn-g">Get a quote</a>
              </div>
              <p className="v2-muted v2-span-all">Also available: landing pages from ₹[X] · HTML email signature from ₹[X].</p>
            </div>

            <div className="grid g3 plans" id="app">
              <div className="card plan">
                <h3>Starter</h3>
                <p className="from">Starting at</p>
                <div className="price">₹1,29,999</div>
                <p className="for">For startups and entrepreneurs ready to launch their first web application.</p>
                <ul>
                  <li>Up to 8 core application screens</li>
                  <li>Custom, mobile-responsive UI/UX</li>
                  <li>User login and role-based access</li>
                  <li>Database and admin dashboard</li>
                  <li>Essential business functionality</li>
                  <li>Cloud deployment</li>
                  <li>Milestone-based payments</li>
                  <li>1 month of post-launch bug-fix support</li>
                </ul>
                <a href="#contact" className="btn btn-g">Get Started</a>
              </div>
              <div className="card plan pop">
                <span className="badge">Most popular</span>
                <h3>Advanced</h3>
                <p className="from">Pricing</p>
                <div className="price quote">Custom quote</div>
                <p className="for">For growing businesses that need smarter workflows and connected digital platforms.</p>
                <ul>
                  <li>Custom business portals and dashboards</li>
                  <li>Multi-role access (customers, staff and admins)</li>
                  <li>Tailored UI/UX design</li>
                  <li>Workflow automation and integrations</li>
                  <li>Payment gateway and subscription integration</li>
                  <li>Analytics and business reports</li>
                  <li>Cloud deployment and optimisation</li>
                  <li>3 months of post-launch bug-fix support</li>
                </ul>
                <a href="#contact" className="btn btn-p">Get a Quote</a>
              </div>
              <div className="card plan">
                <h3>Premium</h3>
                <p className="from">Pricing</p>
                <div className="price quote">Custom quote</div>
                <p className="for">For ambitious businesses building scalable SaaS products and complex digital platforms.</p>
                <ul>
                  <li>Product discovery and technical planning</li>
                  <li>Scalable application architecture</li>
                  <li>Advanced UI/UX and interactive experiences</li>
                  <li>Multi-tenant architecture, where required</li>
                  <li>Subscription billing and payment integrations</li>
                  <li>Real-time functionality and API integrations</li>
                  <li>Advanced security and performance planning</li>
                  <li>Custom development and maintenance plans</li>
                </ul>
                <a href="#contact" className="btn btn-g">Discuss Your Project</a>
              </div>
            </div>

            <div className="grid g3 plans" id="video">
              <div className="card plan">
                <h3>Reel</h3>
                <p className="from">Starting at</p>
                <div className="price">₹[X]</div>
                <p className="for">Short social video for Instagram, YouTube Shorts and WhatsApp.</p>
                <ul>
                  <li>15–30s social reel</li>
                  <li>Music and captions</li>
                  <li>1 revision</li>
                </ul>
                <a href="#contact" className="btn btn-g">Get started</a>
              </div>
              <div className="card plan pop">
                <span className="badge">Popular</span>
                <h3>Product Demo</h3>
                <p className="from">Starting at</p>
                <div className="price">₹[X]</div>
                <p className="for">A clear walkthrough of your product or website in under 90 seconds.</p>
                <ul>
                  <li>45–90s screen or product walkthrough</li>
                  <li>Motion text</li>
                  <li>Voice-over option</li>
                  <li>2 revisions</li>
                </ul>
                <a href="#contact" className="btn btn-p">Get a quote</a>
              </div>
              <div className="card plan">
                <h3>Custom Motion</h3>
                <p className="from">Pricing</p>
                <div className="price quote">Custom quote</div>
                <p className="for">Scripted brand or explainer videos for launches and ads.</p>
                <ul>
                  <li>Scripted brand or explainer video</li>
                  <li>Storyboard</li>
                  <li>Custom animation</li>
                </ul>
                <a href="#contact" className="btn btn-g">Discuss your video</a>
              </div>
            </div>

            <div className="grid g3 plans" id="seo">
              <div className="card plan">
                <h3>Local SEO</h3>
                <p className="from">Starting at</p>
                <div className="price">₹12,999<small>/mo</small></div>
                <p className="for">For businesses seeking stronger visibility in their local market.</p>
                <ul>
                  <li>Monthly service with agreed deliverables</li>
                  <li>Initial website and Google Business Profile review</li>
                  <li>Keyword and local visibility monitoring</li>
                  <li>Monthly performance summary</li>
                  <li>Additional content production and development work quoted separately</li>
                </ul>
                <p className="more">Search rankings, traffic and enquiries cannot be guaranteed.</p>
                <a href="#contact" className="btn btn-g">Get started</a>
              </div>
              <div className="card plan pop">
                <span className="badge">Recommended</span>
                <h3>Growth SEO</h3>
                <p className="from">Pricing</p>
                <div className="price quote">Custom quote</div>
                <p className="for">A tailored plan to improve organic visibility steadily.</p>
                <p className="more">Monthly SEO activities, content deliverables, technical fixes, reporting and campaign duration are defined in the agreed plan.</p>
                <a href="#contact" className="btn btn-p">Get a quote</a>
              </div>
              <div className="card plan">
                <h3>Website Care</h3>
                <p className="from">Pricing</p>
                <div className="price quote">Custom quote</div>
                <p className="for">Maintenance based on the support your website needs.</p>
                <p className="more">Maintenance covers the specific updates, monitoring, backups and content support in your selected plan. Major redesigns, new functionality, hosting charges and external subscriptions are excluded unless agreed.</p>
                <a href="#contact" className="btn btn-g">Get a quote</a>
              </div>
            </div>
          </div>
          <p className="note"><b>Pricing &amp; billing information</b><br />All packages are subject to an agreed project scope, technical requirements and delivery timeline. Hosting, domains, third-party subscriptions and external service fees are charged separately unless included in the proposal. Applicable taxes, if any, are additional.</p>
        </section>

        {/* 2.9 Trust (six cards kept; founder line added) */}
        <section id="trust" className="trust-section section-pad">
          <div className="section-heading">
            <div>
              <span className="micro">Why businesses trust Experibyte</span>
              <h2 data-reveal>Beyond Projects.<br />Built on Relationships.</h2>
            </div>
            <div>
              <p>We believe great work begins with strong relationships. We go beyond individual projects to become a trusted creative partner, growing alongside our clients and building lasting value together.</p>
            </div>
          </div>
          <p className="v2-founder"><b>Hi, I'm [Your Name], founder of Experibyte.</b> You'll work directly with me from first call to launch.</p>
          <div className="trust-grid">
            <article data-reveal><div className="trust-icon" aria-hidden="true">◎</div><h3>Fixed written quote</h3><p>Scope, price, timeline and revision rounds are written down before we start. The price changes only if you ask for more and approve it.</p></article>
            <article data-reveal><div className="trust-icon" aria-hidden="true">↗</div><h3>Clear milestones. Transparent payments.</h3><p>For standard websites, payments are generally split into two stages: 50% to begin and 50% following final approval, before launch or handover. Web applications use milestones agreed in writing. Any different arrangement will be stated in your proposal.</p></article>
            <article data-reveal><div className="trust-icon" aria-hidden="true">⌘</div><h3>Built for you. Owned by you.</h3><p>Once the project is fully paid for, ownership of the original, custom-developed deliverables transfers to you as specified in our agreement. Third-party fonts, images, plugins, frameworks, software and licensed assets remain subject to their respective licences.</p></article>
            <article data-reveal><div className="trust-icon" aria-hidden="true">✳</div><h3>Direct communication. Real progress.</h3><p>Work directly with your developer, review progress through shared previews and receive clear updates at important milestones. No unnecessary layers between your ideas and the work being built.</p></article>
            <article data-reveal><div className="trust-icon" aria-hidden="true">◒</div><h3>Your ideas stay private</h3><p>Your business details and ideas stay confidential. We're happy to sign an NDA before you share anything.</p></article>
            <article data-reveal><div className="trust-icon" aria-hidden="true">↗</div><h3>Clear billing. Reliable support.</h3><p>Every project comes with transparent pricing, proper invoices, and dedicated support throughout development and after launch, as outlined in your project agreement.</p></article>
          </div>
          <div className="promise">
            {arrow}
            <p><b>Our promise:</b> no hidden costs, no pressure and no surprises. If something isn't clear, we explain it in plain words before you pay a single rupee.</p>
          </div>
        </section>

        {/* 2.11 Community (copy only; form and counter are the next build step) */}
        <section id="community" className="section-pad v2-community">
          <span className="micro">Community</span>
          <h2 data-reveal>Join the builders. <em>Unlock free templates together.</em></h2>
          <p className="v2-lead">Get a free scroll-animation template today. Every time our community hits a new milestone, we release another free template, plus behind-the-scenes scroll videos, code breakdowns and early-bird deals.</p>
          <p className="v2-muted">Founding members · Next free template unlocks at 100 members</p>
          <div className="v2-progress" aria-hidden="true"><span style={{ width: '0%' }} /></div>
          <div className="v2-actions">
            <a className="btn btn-p" href="#contact">Join free {arrow}</a>
          </div>
          <p className="v2-muted">No spam. One email a week, max. Unsubscribe any time.</p>
        </section>

        {/* 2.10 FAQ: 17 kept + 4 added */}
        <section id="faq" className="faq-section section-pad">
          <div className="faq-heading">
            <span className="micro">FAQ</span>
            <h2 data-reveal>Questions, <em>Answered</em></h2>
            <a className="text-link" href="#contact">Contact</a>
          </div>
          <div className="faq-list">
            <FaqItem n="01" q='Why do some packages show "Custom quote"?' a="Bigger websites, animated experiences, web apps and ongoing SEO depend on your pages, features and goals, so one fixed price wouldn't be fair to you. After a free call, we send a fixed written quote. It changes only if you ask for more and approve it." />
            <FaqItem n="02" q="Why do animated websites cost more?" a="Every scroll animation is designed, timed and tested by hand on phones, tablets and desktops so it stays smooth and fast. It also uses premium animation, 3D and AI tools. That extra craft and tooling is included in the price." />
            <FaqItem n="03" q="Will animations slow down my website?" a="No. We optimise every animation for performance, keep it lighter on mobile and respect users who prefer reduced motion." />
            <FaqItem n="04" q="What if I need more pages than my package includes?" a="Each package has a clear page limit. Extra pages are quoted per page and always agreed in writing before work starts." />
            <FaqItem n="05" q="What if I don't like the design?" a="You see and approve the design before we build anything. Your package includes revision rounds to refine it together, and you pay the final 50% only after you approve your website." />
            <FaqItem n="06" q="Will you keep my business idea confidential?" a="Yes. Everything you share with us stays private, and we're happy to sign a non-disclosure agreement (NDA) before you share your idea." />
            <FaqItem n="07" q="I'm starting a new business. Can you help me get online?" a="Yes: website, domain, business email, Google Business Profile and SEO setup. If you already have a logo, we'll design your website around it." />
            <FaqItem n="08" q='What does "AI integration" mean for my business?' a="Adding smart features to your website or business, like a chatbot that answers your customers 24/7, automatic replies to enquiries, or tools that save your team from repetitive work. We recommend AI only where it truly saves you time or money, and we build and set it up for you." />
            <FaqItem n="09" q="How does payment work?" a="For websites: pay 50% to start the project and the remaining 50% after you've seen and approved your website, just before it goes live. For web applications: the project is divided into stages (for example: design, development, testing and launch). You pay a part after each stage is completed, so you never pay for work you haven't seen." />
            <FaqItem n="10" q="Do we need to meet in person?" a="No. We work 100% online, so you can work with us from anywhere, without any office visits. Meetings: we schedule video calls on Google Meet or Zoom at a time that suits you. Daily updates: quick questions and updates on WhatsApp and email. Progress: you get a live preview link to see your website as it's being built. We guide you at every step, from the first discussion to launch." />
            <FaqItem n="11" q="Are hosting and domain charges included?" a="Unless specifically mentioned in your proposal, hosting, domain registration, renewals, premium plugins and third-party subscriptions are charged separately. We recommend registering your domain in your own name and keeping access to important accounts." />
            <FaqItem n="12" q="Can I request changes during development?" a="Yes. Your package includes the stated number of revision rounds. Changes within the agreed scope can be requested during those rounds. New features or substantial changes may require an additional quote." />
            <FaqItem n="13" q="Can I cancel my project?" a="You can request cancellation in writing. The amount payable or refundable depends on the agreed milestones, work completed, non-recoverable third-party costs and the terms accepted before the project begins. Any applicable statutory consumer rights remain unaffected." />
            <FaqItem n="14" q="Will I receive an invoice?" a="Yes. An invoice will be provided for payments received. Applicable registration and tax details will be shown according to our business status." />
            <FaqItem n="15" q="Do you guarantee Google rankings or sales?" a="No. We follow established design, technical SEO and performance practices, but search rankings, traffic, leads and sales depend on many factors outside any developer's control." />
            <FaqItem n="16" q="What happens after the free support period?" a="You can choose an ongoing Website Care plan or request support as needed. Any additional service charges will be agreed before work begins." />
            <FaqItem n="17" q="Can Experibyte become our long-term technology partner?" a="Absolutely. We support businesses beyond their initial website launch through improvements, maintenance, new features and ongoing technical collaboration. Our aim is to understand your business and remain a dependable development partner as your needs evolve." />
            {faqs.map(([q, a], index) => (
              <FaqItem key={q} n={String(18 + index).padStart(2, '0')} q={q} a={a} />
            ))}
          </div>
        </section>

        {/* 2.11 Contact (email still the existing address until hello@ exists) */}
        <section id="contact" className="contact-section section-pad">
          <div className="contact-top">
            <span className="micro">Contact</span>
            <h2 data-reveal>Let's build<br />something <em>great</em></h2>
          </div>
          <div className="contact-grid">
            <div className="contact-copy">
              <p>Tell us about your project and we'll reply within 24 hours with ideas and a quote.</p>
              <div className="contact-links">
                <p>📧 <a href="mailto:experibytetechnologies@gmail.com">experibytetechnologies@gmail.com</a></p>
                <p>💬 WhatsApp: +91 XXXXX XXXXX (Mon–Sat, 10am–7pm IST)</p>
                <p>📍 Working with clients across India and worldwide</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter activePage="v2" />
    </>
  );
}

function FaqItem({ n, q, a }) {
  return (
    <details>
      <summary>
        <span className="micro">{n}</span>{q}<span className="faq-plus">+</span>
      </summary>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </details>
  );
}
