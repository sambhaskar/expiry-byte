import React from 'react';
import { ContactForm } from './ContactForm.jsx';

export default function PageContent() {
  return (
    <>

<a className="skip-link" href="#main">Skip to content</a>
<div id="progress" aria-hidden="true">
</div>
<header className="site-header">
<a className="brand" href="#home" aria-label="Experibyte home">
<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<path d="M8 8h47v12H20v24h35v12H8V8Z" fill="currentColor"/>
<path d="M26 26h12v12H26V26Z" fill="#2B4BFF"/>
</svg>
<span>exper<span className="brand-i">ı</span>byte</span>
</a>
<nav aria-label="Main navigation" id="navigation">
<a href="#services">Services</a>
<a href="/templates/">Templates</a>
<a href="#pricing">Pricing</a>
<a href="#process">Process</a>
<a href="#faq">FAQ</a>
<a href="#contact">Contact</a>
</nav>
<a className="nav-cta" href="#contact">Get a quote <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
<path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7"/>
</svg>
</a>
<button id="menu" aria-expanded="false" aria-controls="navigation" aria-label="Open menu">
<span>
</span>
<span>
</span>
</button>
</header>
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
<p>Our entry packages have clear starting prices. Bigger and custom projects get a fixed written quote after a free call, so you only pay for what your business actually needs.</p>
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
<p className="for">For new businesses &amp; professionals</p>
    <ul>
<li>Up to 5 pages</li>
<li>Pixel-perfect, mobile-responsive design</li>
<li>Subtle hover &amp; fade animations</li>
<li>Contact form &amp; WhatsApp button</li>
<li>Basic Google SEO setup</li>
<li>2 rounds of revisions</li>
<li>2 weeks free support after launch</li>
</ul>
    <p className="more">Need more features? <a href="#contact">Get a custom quote →</a>
</p>
    <a href="#contact" className="btn btn-g">Choose Basic</a>
</div>
   <div className="card plan pop">
<span className="badge">Most popular</span>
<h3>Advance</h3>
<p className="from">Pricing</p>
<div className="price quote">Custom quote</div>
<p className="for">For growing businesses</p>
    <ul>
<li>Up to 15 pages</li>
<li>Custom design made for your business</li>
<li>Scroll-reveal animations</li>
<li>Easy admin panel to edit content yourself</li>
<li>Blog / news section</li>
<li>Google SEO &amp; Analytics setup</li>
<li>3 rounds of revisions</li>
<li>1 month free support after launch</li>
</ul>
    <a href="#contact" className="btn btn-p">Get a quote</a>
</div>
   <div className="card plan">
<h3>Premium</h3>
<p className="from">Pricing</p>
<div className="price quote">Custom quote</div>
<p className="for">For businesses that want to lead</p>
    <ul>
<li>Unlimited pages</li>
<li>Premium custom design</li>
<li>Advanced scroll &amp; page-transition animations</li>
<li>One special feature of your choice: online store, appointment booking, or a members login area (like paid courses or member videos)</li>
<li>Online payments (UPI, cards, net banking)</li>
<li>Website in up to 2 languages</li>
<li>Advanced Google SEO setup</li>
<li>3 months free priority support</li>
</ul>
    <a href="#contact" className="btn btn-g">Get a quote</a>
</div>
  </div>
<div className="grid g3 plans" id="app">
   <div className="card plan">
<h3>MVP</h3>
<p className="from">Starting at</p>
<div className="price">₹1,29,999</div>
<p className="for">Launch and test your idea</p>
    <ul>
<li>Up to 8 core screens</li>
<li>User login &amp; roles</li>
<li>Database &amp; admin panel</li>
<li>Responsive web app</li>
<li>Cloud deployment</li>
<li>Paid in stages, after each is done</li>
<li>1 month support</li>
</ul>
    <p className="more">Bigger scope? <a href="#contact">Get a custom quote →</a>
</p>
    <a href="#contact" className="btn btn-g">Discuss your idea</a>
</div>
   <div className="card plan pop">
<span className="badge">Best value</span>
<h3>Business Platform</h3>
<p className="from">Pricing</p>
<div className="price quote">Custom quote</div>
<p className="for">Portals, dashboards, booking &amp; e-learning</p>
    <ul>
<li>Multi-role portals (customer, staff, admin)</li>
<li>Custom UI/UX design</li>
<li>Payments &amp; subscriptions</li>
<li>KPI dashboard &amp; reports</li>
<li>Auto-generated PDF reports</li>
<li>3 months support</li>
</ul>
    <a href="#contact" className="btn btn-p">Discuss your idea</a>
</div>
   <div className="card plan">
<h3>Custom SaaS</h3>
<p className="from">Pricing</p>
<div className="price quote">Custom quote</div>
<p className="for">Complex products built to scale</p>
    <ul>
<li>Discovery &amp; technical planning</li>
<li>Scalable architecture</li>
<li>Real-time data features</li>
<li>Multi-tenant &amp; subscription billing</li>
<li>Monthly development retainer</li>
</ul>
    <a href="#contact" className="btn btn-g">Book a call</a>
</div>
  </div>
<div className="grid g3 plans" id="seo">
   <div className="card plan">
<h3>Local SEO</h3>
<p className="from">Starting at</p>
<div className="price">₹12,999<small>/mo</small>
</div>
<p className="for">Get found in your city</p>
    <ul>
<li>Google Business Profile optimisation</li>
<li>Local keyword targeting</li>
<li>Directory listings</li>
<li>Monthly ranking report</li>
</ul>
    <a href="#contact" className="btn btn-g">Get started</a>
</div>
   <div className="card plan pop">
<span className="badge">Recommended</span>
<h3>Growth SEO</h3>
<p className="from">Pricing</p>
<div className="price quote">Custom quote</div>
<p className="for">Grow organic traffic steadily</p>
    <ul>
<li>Technical SEO audit &amp; fixes</li>
<li>4 SEO blog posts per month</li>
<li>Core Web Vitals optimisation</li>
<li>Competitor &amp; keyword research</li>
<li>Detailed monthly report</li>
</ul>
    <a href="#contact" className="btn btn-p">Get a quote</a>
</div>
   <div className="card plan">
<h3>Website Care</h3>
<p className="from">Pricing</p>
<div className="price quote">Custom quote</div>
<p className="for">Peace of mind after launch</p>
    <ul>
<li>Updates &amp; security monitoring</li>
<li>Weekly backups</li>
<li>Content changes (up to 3 hrs)</li>
<li>Uptime &amp; speed checks</li>
</ul>
    <a href="#contact" className="btn btn-g">Get a quote</a>
</div>
  </div>
</div>
<p className="note">
<b>Note:</b> Prices don't include GST (if applicable), domain, hosting or paid plugins, which are billed at actual cost. 
    {/* Custom quotes are fixed and written, and sent after a free call. */}

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
<h3>Pay only for what you've seen</h3>
<p>Websites: 50% to start, the rest only after you approve your site. Web apps are paid stage by stage, after each stage is done.</p>
</article>
<article data-reveal>
<div className="trust-icon" aria-hidden="true">⌘</div>
<h3>You own everything</h3>
<p>Your domain is registered in your name, and the code, designs and content are 100% yours. You're free to take them anywhere, anytime.</p>
</article>
<article data-reveal>
<div className="trust-icon" aria-hidden="true">✳</div>
<h3>See progress every step</h3>
<p>A live preview link shows your website as it's built, with regular updates on WhatsApp and email. You talk directly to the people building it.</p>
</article>
<article data-reveal>
<div className="trust-icon" aria-hidden="true">◒</div>
<h3>Your ideas stay private</h3>
<p>Your business details and ideas stay confidential. We're happy to sign an NDA before you share anything.</p>
</article>
<article data-reveal>
<div className="trust-icon" aria-hidden="true">↗</div>
<h3>Proper invoice, real support</h3>
<p>You get a proper invoice for every payment, and free support after launch with every package, so you're never left on your own.</p>
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
</div>
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
<footer className="site-footer">
<a className="brand" href="#home">
<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<path d="M8 8h47v12H20v24h35v12H8V8Z" fill="currentColor"/>
<path d="M26 26h12v12H26V26Z" fill="#2B4BFF"/>
</svg>
<span>exper<span className="brand-i">ı</span>byte</span>
</a>
<span>Experibyte. All rights reserved.</span>
<span>Websites · Motion · Web Apps · AI · SEO</span>
<a href="#home" className="back-top">BACK TO TOP ↑</a>
</footer>

    </>
  );
}
