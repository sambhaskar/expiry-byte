import React from 'react';
import { ContactForm } from './ContactForm.jsx';
import { SiteFooter, SiteHeader } from './SiteChrome.jsx';

export default function PageContent() {
  return (
    <>

<a className="skip-link" href="#main">Skip to content</a>
<div id="progress" aria-hidden="true">
</div>
<SiteHeader />
<main id="main">
<section className="story" id="home">
<div className="story-stage">
 <div id="three-stage" aria-hidden="true">
<div className="scene-fallback">
<b>EXPERIBYTE</b>
<span>Look sharp. Load fast.</span>
<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<path d="M8 8h47v12H20v24h35v12H8V8Z" fill="currentColor"/>
<path d="M26 26h12v12H26V26Z" fill="#2B4BFF"/>
</svg>
</div>
</div>
 <div className="story-panel hero-panel">
<h1>
<span className="hero-small">Websites that</span> <span>look sharp,</span> <span className="blue">load fast</span> <span className="hero-end">and bring you customers.</span>
</h1>
<div className="hero-bottom">
<p>We design and build websites and web applications for small businesses, startups and growing companies. Basic Google SEO setup is included free with every website.</p>
</div>
<span className="object-label micro">Web · Motion · Apps · AI</span>
</div>
 <div className="story-panel story-promise">
<h2>Built for every screen.<br />
<em>Ready for growth.</em>
</h2>
<div className="hero-stats">
<div>
<strong>100%</strong>
<p>pixel-perfect, mobile-first &amp; responsive</p>
</div>
<div>
<strong>Free</strong>
<p>basic SEO setup with every website</p>
</div>
<div>
<strong>₹0</strong>
<p>hidden costs: price agreed before we start</p>
</div>
</div>
</div>
 <div className="story-footer">
<span className="micro">
<span className="down-arrow">↓</span>
</span>
<div className="hero-actions">
<a className="button button-dark" href="#pricing">See packages <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</a>
<a className="text-link" href="#contact">Book a free call <span>↗</span>
</a>
</div>
</div>
</div>
</section>
<section id="services" className="services section-pad">
<div className="section-heading">
<div>
<span className="micro">What we do</span>
<h2 data-reveal>One studio.<br/> Everything your business needs <em>online.</em>
</h2>
</div>
<p data-reveal>Design, development, motion and growth under one roof, so your website looks and works great everywhere.</p>
</div>
<div className="services-grid">
<article className="service-card service-0" data-reveal>
<div className="service-art" aria-hidden="true">
<div className="mini-browser">
<div className="mini-bar">
<i>
</i>
<i>
</i>
<i>
</i>
</div>
<div className="mini-layout">
<b>Look sharp.<br />Load fast.</b>
<div className="mini-orb">
</div>
<span>Website Development</span>
</div>
</div>
<div className="floating-label">Fully responsive ↗</div>
</div>
<div className="service-info">
<span className="micro">01 / BUILD</span>
<h3>Website Development</h3>
<p>Beautiful, fast and mobile-friendly websites that your team can easily update, built to make a great first impression.</p>
<a href="#contact" className="round-link" aria-label="Discuss Website Development">
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</a>
</div>
</article>
<article className="service-card service-1" data-reveal>
<div className="service-art" aria-hidden="true">
<div className="motion-type">
<span>Scroll</span>
<span>Animations</span>
</div>
<div className="motion-cursor">
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</div>
</div>
<div className="service-info">
<span className="micro">02 / MOVE</span>
<h3>Animated &amp; Scroll Websites <span className="service-trending">TRENDING</span>
</h3>
<p>Websites that come alive as visitors scroll, with smooth movement and eye-catching effects that make people stop and explore.</p>
<a href="#contact" className="round-link" aria-label="Discuss Animated &amp; Scroll Websites TRENDING">
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</a>
</div>
</article>
<article className="service-card service-2" data-reveal>
<div className="service-art" aria-hidden="true">
<div className="app-stack">
<div className="app-tile">
<i>
</i>
<b>Web Applications</b>
<span className="chart-bars">
<em>
</em>
<em>
</em>
<em>
</em>
<em>
</em>
<em>
</em>
</span>
</div>
<div className="app-tile back">
</div>
</div>
</div>
<div className="service-info">
<span className="micro">03 / CONNECT</span>
<h3>Web Applications</h3>
<p>Booking systems, customer portals, dashboards, online courses and custom software, built around how your business works.</p>
<a href="#contact" className="round-link" aria-label="Discuss Web Applications">
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</a>
</div>
</article>
<article className="service-card service-3" data-reveal>
<div className="service-art" aria-hidden="true">
<div className="ai-spark">
<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
<path d="M20 1v38M1 20h38M6.6 6.6l26.8 26.8M6.6 33.4L33.4 6.6" stroke="currentColor" strokeWidth="7"/>
</svg>
</div>
<div className="ai-message">
<i>
</i> AI Integration</div>
</div>
<div className="service-info">
<span className="micro">04 / AUTOMATE</span>
<h3>AI Integration</h3>
<p>Smart chatbots that answer your customers 24/7, plus automation that saves your team hours of repetitive work.</p>
<a href="#contact" className="round-link" aria-label="Discuss AI Integration">
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</a>
</div>
</article>
<article className="service-card service-4" data-reveal>
<div className="service-art" aria-hidden="true">
<div className="design-swatch one">
</div>
<div className="design-swatch two">
</div>
<div className="design-swatch three">
<span>Aa</span>
<small>UI / UX Design</small>
</div>
</div>
<div className="service-info">
<span className="micro">05 / DESIGN</span>
<h3>UI / UX Design</h3>
<p>Clean, easy-to-use designs that you see and approve before we build anything.</p>
<a href="#contact" className="round-link" aria-label="Discuss UI / UX Design">
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</a>
</div>
</article>
<article className="service-card service-5" data-reveal>
<div className="service-art" aria-hidden="true">
<div className="search-ui">
<span>your business</span>
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</div>
<div className="ranking">
<span>01</span>
<b>Local<br />SEO</b>
</div>
</div>
<div className="service-info">
<span className="micro">06 / GROW</span>
<h3>SEO</h3>
<p>Help customers find you on Google, with the right setup, local search visibility and steady improvements over time.</p>
<a href="#contact" className="round-link" aria-label="Discuss SEO">
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</a>
</div>
</article>
</div>
</section>
<section id="motion" className="motion-story">
<div className="motion-stage">
<span className="micro">Why animation matters</span>
<div className="motion-heading" aria-label="Your business has a story. Let's tell it beautifully, so every visitor feels it and remembers you.">
<div className="motion-line" aria-hidden="true">
<span>Your business has a story.</span>
</div>
<div className="motion-line" aria-hidden="true">
<span>Let's tell it beautifully,</span>
</div>
<div className="motion-line" aria-hidden="true">
<span>so every visitor feels it</span>
</div>
<div className="motion-line" aria-hidden="true">
<span>and remembers you.</span>
</div>
</div>
<div className="motion-bottom">
<p>Your website is often the first place a customer meets you. We make that first moment special, with smooth, thoughtful animations that guide visitors through your story, make your business feel premium and turn a quick visit into a real enquiry.</p>
<a className="button button-light" href="#contact">Want a website like this? Let's talk <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</a>
</div>
<div className="motion-flower" aria-hidden="true">
<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<path d="M8 8h47v12H20v24h35v12H8V8Z" fill="currentColor"/>
<path d="M26 26h12v12H26V26Z" fill="#2B4BFF"/>
</svg>
</div>
</div>
</section>
<section id="design-to-code" className="design-section section-pad">
<div className="design-visual" aria-hidden="true">
<div className="design-sheet">
<div className="sheet-toolbar">
<i>
</i>
<span>Your design</span>
<b>↗</b>
</div>
<div className="sheet-grid">
<span className="sheet-label">Figma · XD · PSD</span>
<b>Your<br />design</b>
<div className="sheet-spark">
<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
<path d="M20 1v38M1 20h38M6.6 6.6l26.8 26.8M6.6 33.4L33.4 6.6" stroke="currentColor" strokeWidth="7"/>
</svg>
</div>
<div className="sheet-palette">
<i>
</i>
<i>
</i>
<i>
</i>
<i>
</i>
</div>
</div>
<span className="sheet-selection">Your design</span>
</div>
<div className="code-sheet">
<span>
<i>
</i> Live website</span>
<code>Your design<br />→<br />Live website</code>
<div>Live website</div>
</div>
<span className="design-file">Figma · XD · PSD <b>→</b> Live website</span>
</div>
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
<p className="design-price">Every design is different, so the price depends on your pages and how detailed they are. <b>Send your file and get a free quote within 24 hours.</b>
</p>
<a className="button button-dark" href="#contact">Send us your design <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</a>
</div>
</section>
<section className="startup section-pad">
<div className="startup-head">
<span className="micro">Starting from zero?</span>
<h2 data-reveal>New business, no website yet? We'll guide you through everything.</h2>
<p>Launching a brand-new business? We take care of your full online setup and guide you at every step.</p>
</div>
<div className="startup-steps">
<article data-reveal>
<span>
<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
<path d="M20 1v38M1 20h38M6.6 6.6l26.8 26.8M6.6 33.4L33.4 6.6" stroke="currentColor" strokeWidth="7"/>
</svg>
</span>
<h3>1. Plan your website</h3>
<p>The pages, content and features that fit your business and customers.</p>
</article>
<article data-reveal>
<span>
<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
<path d="M20 1v38M1 20h38M6.6 6.6l26.8 26.8M6.6 33.4L33.4 6.6" stroke="currentColor" strokeWidth="7"/>
</svg>
</span>
<h3>2. Domain &amp; email</h3>
<p>Your own web address and a professional business email.</p>
</article>
<article data-reveal>
<span>
<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
<path d="M20 1v38M1 20h38M6.6 6.6l26.8 26.8M6.6 33.4L33.4 6.6" stroke="currentColor" strokeWidth="7"/>
</svg>
</span>
<h3>3. Website or app</h3>
<p>Designed around your business, mobile-first and SEO-ready.</p>
</article>
<article data-reveal>
<span>
<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
<path d="M20 1v38M1 20h38M6.6 6.6l26.8 26.8M6.6 33.4L33.4 6.6" stroke="currentColor" strokeWidth="7"/>
</svg>
</span>
<h3>4. Launch &amp; grow</h3>
<p>Google Business Profile, SEO and AI tools to help customers find you.</p>
</article>
</div>
</section>
<section id="process" className="process-section section-pad">
<div className="section-heading">
<div>
<span className="micro">How we work</span>
<h2 data-reveal>From idea to launch<br />
<em>in 4 steps</em>
</h2>
</div>
<a href="#contact" className="text-link">Book a free call</a>
</div>
<div className="process-stack">
<article className="process-card" data-step="0">
<span className="process-number">01</span>
<div className="process-copy">
<span className="micro">THE PROCESS / 01</span>
<h3>Discover</h3>
<p>A free call to understand your business, goals and budget. You get a fixed written quote.</p>
</div>
<div className="process-art process-art-0" aria-hidden="true">
<div className="orbit">
<i>
</i>
<i>
</i>
<i>
</i>
</div>
</div>
</article>
<article className="process-card" data-step="1">
<span className="process-number">02</span>
<div className="process-copy">
<span className="micro">THE PROCESS / 02</span>
<h3>Design</h3>
<p>We design your screens and animations, then refine them together with your feedback before we start building.</p>
</div>
<div className="process-art process-art-1" aria-hidden="true">
<div className="wire-square">
</div>
<div className="wire-square alt">
</div>
</div>
</article>
<article className="process-card" data-step="2">
<span className="process-number">03</span>
<div className="process-copy">
<span className="micro">THE PROCESS / 03</span>
<h3>Build</h3>
<p>We develop, test on every device and optimise for speed, SEO and accessibility.</p>
</div>
<div className="process-art process-art-2" aria-hidden="true">
<span className="code-mark">&lt;/&gt;</span>
</div>
</article>
<article className="process-card" data-step="3">
<span className="process-number">04</span>
<div className="process-copy">
<span className="micro">THE PROCESS / 04</span>
<h3>Launch &amp; grow</h3>
<p>We go live, show you how to manage your website and keep supporting you as your business grows.</p>
</div>
<div className="process-art process-art-3" aria-hidden="true">
<div className="launch-arrow">
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</div>
</div>
</article>
</div>
</section>
<section className="industries section-pad" id="industries">
<div className="section-heading">
<div>
<span className="micro">Built for every industry</span>
<h2 data-reveal>What we can<br />
<em>build for you</em>
</h2>
</div>
</div>
<div className="industry-grid">
<details className="industry-item" data-reveal>
<summary>
<span className="micro">01</span>
<h3>Clinics &amp; Healthcare</h3>
<span className="industry-plus">+</span>
</summary>
<p>Appointment booking, doctor profiles, WhatsApp reminders and an AI assistant for patient FAQs.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">02</span>
<h3>Restaurants &amp; Cafés</h3>
<span className="industry-plus">+</span>
</summary>
<p>Animated menus, table reservations, online ordering and Google Maps visibility.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">03</span>
<h3>Real Estate</h3>
<span className="industry-plus">+</span>
</summary>
<p>Property listings with filters, virtual tours, 3D showcases and lead capture.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">04</span>
<h3>Education &amp; Coaching</h3>
<span className="industry-plus">+</span>
</summary>
<p>Course platforms, student portals, subscriptions and AI study tools.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">05</span>
<h3>E-commerce &amp; D2C</h3>
<span className="industry-plus">+</span>
</summary>
<p>Fast online stores with scroll-animated product launches and payment integration.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">06</span>
<h3>Startups &amp; SaaS</h3>
<span className="industry-plus">+</span>
</summary>
<p>The first version of your app (MVP) to test your idea fast, plus admin dashboards and product launch websites.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">07</span>
<h3>Gyms &amp; Fitness</h3>
<span className="industry-plus">+</span>
</summary>
<p>Membership plans, class schedules, trainer profiles and online sign-ups.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">08</span>
<h3>Salons, Spas &amp; Beauty</h3>
<span className="industry-plus">+</span>
</summary>
<p>Online appointment booking, service menus with prices and before-and-after galleries.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">09</span>
<h3>Hotels, Resorts &amp; Travel</h3>
<span className="industry-plus">+</span>
</summary>
<p>Room booking, stunning photo galleries, tour packages and enquiry forms.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">10</span>
<h3>Interior Design &amp; Architecture</h3>
<span className="industry-plus">+</span>
</summary>
<p>Beautiful project portfolios, animated showcases and lead capture for new projects.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">11</span>
<h3>Manufacturing &amp; Industrial</h3>
<span className="industry-plus">+</span>
</summary>
<p>Product catalogues, company profiles, dealer enquiries and downloadable brochures.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">12</span>
<h3>CAs, Lawyers &amp; Consultants</h3>
<span className="industry-plus">+</span>
</summary>
<p>Professional websites that build trust, with service pages, consultation booking and client portals.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">13</span>
<h3>Events &amp; Weddings</h3>
<span className="industry-plus">+</span>
</summary>
<p>Event galleries, package listings, online enquiries and wedding invitation websites.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">14</span>
<h3>Automobile &amp; Services</h3>
<span className="industry-plus">+</span>
</summary>
<p>Service booking, vehicle listings, inspection reports and customer tracking.</p>
</details>
<details className="industry-item" data-reveal>
<summary>
<span className="micro">15</span>
<h3>NGOs &amp; Communities</h3>
<span className="industry-plus">+</span>
</summary>
<p>Donation pages with online payments, volunteer sign-ups and impact stories.</p>
</details>
</div>
<p className="industry-note">Don't see your industry? We build for every kind of business. <a href="#contact" style={{ color: "var(--acc2)", fontWeight: "600" }}>Tell us about yours →</a>
</p>
</section>
<section id="pricing" className="pricing-section section-pad">
<div className="section-heading">
<div>
<span className="micro">Packages</span>
<h2 data-reveal>Clear packages.<br />
<em>No surprises.</em>
</h2>
</div>
<p><strong>Transparent pricing. Clearly defined deliverables.</strong><br />Every project begins with a discussion of your goals, features, budget and timeline. You will receive a written proposal outlining exactly what is included before development begins.<br /><br />Starting prices apply to standard project requirements. Additional features, integrations and custom functionality are quoted separately with your approval.</p>
</div>
<div className="tabs">
   <button className="on" data-t="web">Websites</button>
   <button data-t="app">Web Apps</button>
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
    <p className="more">Need more features? <a href="#contact">Get a custom quote →</a>
</p>
    <p className="more"><b>Please note:</b> E-commerce, payment gateways, custom dashboards, premium animations, hosting, domain registration, paid plugins and ongoing maintenance are not included unless specified in the proposal.</p>
    <a href="#contact" className="btn btn-g">Choose Basic</a>
</div>
   <div className="card plan pop">
<span className="badge">Most popular</span>
<h3>Advanced</h3>
<p className="from">Pricing</p>
<div className="price quote">Custom quote</div>
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
    <p className="more"><b>Please note:</b> Ongoing content uploads, third-party subscription charges, paid APIs and new feature requests are quoted separately.</p>
    <a href="#contact" className="btn btn-p">Get a quote</a>
</div>
   <div className="card plan">
<h3>Premium</h3>
<p className="from">Pricing</p>
<div className="price quote">Custom quote</div>
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
    <p className="more"><b>Please note:</b> Additional features, maintenance, payment processing fees, API subscriptions and infrastructure costs may be billed separately.</p>
    <a href="#contact" className="btn btn-g">Get a quote</a>
</div>
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
<div className="grid g3 plans" id="seo">
   <div className="card plan">
<h3>Local SEO</h3>
<p className="from">Starting at</p>
<div className="price">₹12,999<small>/mo</small>
</div>
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
<p className="note">
<b>Pricing &amp; billing information</b><br />All packages are subject to an agreed project scope, technical requirements and delivery timeline. Hosting, domains, third-party subscriptions and external service fees are charged separately unless included in the proposal. Applicable taxes, if any, are additional.<br /><br />Experibyte is currently not registered under GST and does not charge GST. Applicable tax treatment will be updated if our registration status changes.
</p>
</section>
<section id="trust" className="trust-section section-pad">
<div className="section-heading">
<div>
<span className="micro">Why businesses trust Experibyte</span>
<h2 data-reveal>Beyond Projects.<br />Built on Relationships.</h2>
</div> <div>
<p>We believe great work begins with strong relationships. We go beyond individual projects to become a trusted creative partner, growing alongside our clients and building lasting value together.</p>
</div>
</div>
<div className="trust-grid">
<article data-reveal>
<div className="trust-icon" aria-hidden="true">◎</div>
<h3>Fixed written quote</h3>
<p>Scope, price, timeline and revision rounds are written down before we start. The price changes only if you ask for more and approve it.</p>
</article>
<article data-reveal>
<div className="trust-icon" aria-hidden="true">↗</div>
<h3>Clear milestones. Transparent payments.</h3>
<p>For standard websites, payments are generally split into two stages: 50% to begin and 50% following final approval, before launch or handover. Web applications use milestones agreed in writing. Any different arrangement will be stated in your proposal.</p>
</article>
<article data-reveal>
<div className="trust-icon" aria-hidden="true">⌘</div>
<h3>Built for you. Owned by you.</h3>
<p>Once the project is fully paid for, ownership of the original, custom-developed deliverables transfers to you as specified in our agreement. Third-party fonts, images, plugins, frameworks, software and licensed assets remain subject to their respective licences.</p>
</article>
<article data-reveal>
<div className="trust-icon" aria-hidden="true">✳</div>
<h3>Direct communication. Real progress.</h3>
<p>Work directly with your developer, review progress through shared previews and receive clear updates at important milestones. No unnecessary layers between your ideas and the work being built.</p>
</article>
<article data-reveal>
<div className="trust-icon" aria-hidden="true">◒</div>
<h3>Your ideas stay private</h3>
<p>Your business details and ideas stay confidential. We're happy to sign an NDA before you share anything.</p>
</article>
<article data-reveal>
<div className="trust-icon" aria-hidden="true">↗</div>
<h3>Clear billing. Reliable support.</h3>
<p>Every project comes with transparent pricing, proper invoices, and dedicated support throughout development and after launch, as outlined in your project agreement.</p>
</article>
</div>
<div className="promise">
<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
<path d="M20 1v38M1 20h38M6.6 6.6l26.8 26.8M6.6 33.4L33.4 6.6" stroke="currentColor" strokeWidth="7"/>
</svg>
<p>
<b>Our promise:</b> no hidden costs, no pressure and no surprises. If something isn't clear, we explain it in plain words before you pay a single rupee.</p>
</div>
</section>
<section id="faq" className="faq-section section-pad">
<div className="faq-heading">
<span className="micro">FAQ</span>
<h2 data-reveal>Questions,<br />
<em>Answered</em>
</h2>
<a className="text-link" href="#contact">Contact</a>
</div>
<div className="faq-list">
<details>
<summary>
<span className="micro">01</span>Why do some packages show &quot;Custom quote&quot;?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>Bigger websites, animated experiences, web apps and ongoing SEO depend on your pages, features and goals, so one fixed price wouldn't be fair to you. After a free call, we send a fixed written quote. It changes only if you ask for more and approve it.</p>
</div>
</details>
<details>
<summary>
<span className="micro">02</span>Why do animated websites cost more?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>Every scroll animation is designed, timed and tested by hand on phones, tablets and desktops so it stays smooth and fast. It also uses premium animation, 3D and AI tools. That extra craft and tooling is included in the price.</p>
</div>
</details>
<details>
<summary>
<span className="micro">03</span>Will animations slow down my website?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>No. We optimise every animation for performance, keep it lighter on mobile and respect users who prefer reduced motion.</p>
</div>
</details>
<details>
<summary>
<span className="micro">04</span>What if I need more pages than my package includes?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>Each package has a clear page limit. Extra pages are quoted per page and always agreed in writing before work starts.</p>
</div>
</details>
<details>
<summary>
<span className="micro">05</span>What if I don't like the design?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>You see and approve the design before we build anything. Your package includes revision rounds to refine it together, and you pay the final 50% only after you approve your website.</p>
</div>
</details>
<details>
<summary>
<span className="micro">06</span>Will you keep my business idea confidential?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>Yes. Everything you share with us stays private, and we're happy to sign a non-disclosure agreement (NDA) before you share your idea.</p>
</div>
</details>
<details>
<summary>
<span className="micro">07</span>I'm starting a new business. Can you help me get online?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>Yes: website, domain, business email, Google Business Profile and SEO setup. If you already have a logo, we'll design your website around it.</p>
</div>
</details>
<details>
<summary>
<span className="micro">08</span>What does &quot;AI integration&quot; mean for my business?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>Adding smart features to your website or business, like a chatbot that answers your customers 24/7, automatic replies to enquiries, or tools that save your team from repetitive work. We recommend AI only where it truly saves you time or money, and we build and set it up for you.</p>
</div>
</details>
<details>
<summary>
<span className="micro">09</span>How does payment work?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>
<b style={{ color: "var(--txt)" }}>For websites:</b> pay 50% to start the project and the remaining 50% after you've seen and approved your website, just before it goes live.<br />
<br />
<b style={{ color: "var(--txt)" }}>For web applications:</b> the project is divided into stages (for example: design, development, testing and launch). You pay a part after each stage is completed, so you never pay for work you haven't seen.</p>
</div>
</details>
<details>
<summary>
<span className="micro">10</span>Do we need to meet in person?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>No. We work 100% online, so you can work with us from anywhere, without any office visits.<br />
<br />
<b style={{ color: "var(--txt)" }}>Meetings:</b> we schedule video calls on Google Meet or Zoom at a time that suits you.<br />
<br />
<b style={{ color: "var(--txt)" }}>Daily updates:</b> quick questions and updates on WhatsApp and email.<br />
<br />
<b style={{ color: "var(--txt)" }}>Progress:</b> you get a live preview link to see your website as it's being built.<br />
<br />We guide you at every step, from the first discussion to launch.</p>
</div>
</details>
<details>
<summary>
<span className="micro">11</span>Are hosting and domain charges included?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>Unless specifically mentioned in your proposal, hosting, domain registration, renewals, premium plugins and third-party subscriptions are charged separately. We recommend registering your domain in your own name and keeping access to important accounts.</p>
</div>
</details>
<details>
<summary>
<span className="micro">12</span>Can I request changes during development?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>Yes. Your package includes the stated number of revision rounds. Changes within the agreed scope can be requested during those rounds. New features or substantial changes may require an additional quote.</p>
</div>
</details>
<details>
<summary>
<span className="micro">13</span>Can I cancel my project?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>You can request cancellation in writing. The amount payable or refundable depends on the agreed milestones, work completed, non-recoverable third-party costs and the terms accepted before the project begins. Any applicable statutory consumer rights remain unaffected.</p>
</div>
</details>
<details>
<summary>
<span className="micro">14</span>Will I receive an invoice?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>Yes. An invoice will be provided for payments received. Applicable registration and tax details will be shown according to our business status.</p>
</div>
</details>
<details>
<summary>
<span className="micro">15</span>Do you guarantee Google rankings or sales?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>No. We follow established design, technical SEO and performance practices, but search rankings, traffic, leads and sales depend on many factors outside any developer's control.</p>
</div>
</details>
<details>
<summary>
<span className="micro">16</span>What happens after the free support period?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>You can choose an ongoing Website Care plan or request support as needed. Any additional service charges will be agreed before work begins.</p>
</div>
</details>
<details>
<summary>
<span className="micro">17</span>Can Experibyte become our long-term technology partner?<span className="faq-plus">+</span>
</summary>
<div className="faq-answer">
<p>Absolutely. We support businesses beyond their initial website launch through improvements, maintenance, new features and ongoing technical collaboration. Our aim is to understand your business and remain a dependable development partner as your needs evolve.</p>
</div>
</details></div>
</section>
<section id="contact" className="contact-section section-pad">
<div className="contact-top">
<span className="micro">Contact</span>
<h2 data-reveal>Let's build<br />something <em>great</em>
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</h2>
</div>
<div className="contact-grid">
<div className="contact-copy">
<p>Tell us about your project and we'll reply within 24 hours with ideas and a quote.</p>
<div className="contact-links">
<p>📧 <a href="mailto:experibytetechnologies@gmail.com">experibytetechnologies@gmail.com</a>
</p>
{/* <p>💬 <a href="https://wa.me/910000000000">WhatsApp us</a>
</p> */}
<p>📍 Working with clients across India and worldwide</p>
</div>
<span className="contact-spark" aria-hidden="true">
<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
<path d="M20 1v38M1 20h38M6.6 6.6l26.8 26.8M6.6 33.4L33.4 6.6" stroke="currentColor" strokeWidth="7"/>
</svg>
</span>
</div>
<ContactForm />
</div>
</section>
</main>
<SiteFooter />

    </>
  );
}
