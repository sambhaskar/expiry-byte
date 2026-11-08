import React, { useEffect, useRef } from 'react';
import { SiteFooter, SiteHeader } from './SiteChrome.jsx';
import { pageByKey } from './content/site.js';
import { gsap, ScrollTrigger, useGSAP, FULL_MOTION, ANY_MOTION } from './motion/gsap.js';
import { Arrow } from './PageShell.jsx';
import { Reel } from './ui/Visuals.jsx';
import { ColourFields, PushedTable, Staircase, Bands } from './ui/Sections.jsx';
import { QuestionEdges } from './ui/Closings.jsx';

const serviceLinks = {
  'Website Development': '/services/website-development/', 'Animated Websites': '/services/animated-websites/',
  'Web Applications': '/services/web-applications/', 'AI Integration': '/services/ai-integration/',
};

// The scroll-driven 3D hero: the scene loads after the page, and the story only scrubs on desktop.
function HeroStory({ hero }) {
  const ref = useRef(null);
  useEffect(() => {
    let scene = null; let cancelled = false;
    const mm = gsap.matchMedia();
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const host = ref.current.querySelector('#three-stage');
    const stage = ref.current.querySelector('.story-stage');
    const state = { p: 0 };
    import('three').then((THREE) => {
      if (cancelled) return;
      import('./home/heroScene.js').then(({ createHeroScene }) => {
        if (cancelled) return;
        try { scene = createHeroScene(THREE, host, stage, reduce); } catch (error) { console.warn('3D fallback enabled:', error.message); }
        scene?.setProgress(state.p);
      });
    });
    mm.add(FULL_MOTION, () => {
      const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom bottom', scrub: 0.7 } });
      tl.to(state, { p: 1, duration: 1, onUpdate: () => scene?.setProgress(state.p) }, 0)
        .to('.hero-panel', { autoAlpha: 0, y: -75, duration: 0.11 }, 0.3)
        .fromTo('.story-promise', { autoAlpha: 0, y: 55 }, { autoAlpha: 1, y: 0, duration: 0.12 }, 0.52);
      return () => { state.p = 0; scene?.setProgress(0); };
    });
    ScrollTrigger.refresh();
    return () => { cancelled = true; mm.revert(); scene?.destroy(); };
  }, []);
  const [explore, start] = hero.ctas;
  return (
    <section className="story" id="home" ref={ref}>
      <div className="story-stage">
        <div id="three-stage" aria-hidden="true">
          <div className="scene-fallback">
            <b>EXPERIBYTE</b>
            <span>Move people. Move business.</span>
            <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M8 8h47v12H20v24h35v12H8V8Z" fill="currentColor" />
              <path d="M26 26h12v12H26V26Z" fill="#2B4BFF" />
            </svg>
          </div>
        </div>
        <div className="story-panel hero-panel">
          <h1>
            <span className="hero-small">Websites that</span> <span>move people.</span> <span className="blue">Technology</span> <span className="hero-end">that moves businesses.</span>
          </h1>
          <div className="hero-bottom"><p>{hero.text}</p></div>
          <span className="object-label micro">{hero.eyebrow}</span>
        </div>
        <div className="story-panel story-promise">
          <h2>Built for every screen.<br /><em>Ready for growth.</em></h2>
          <div className="hero-stats">
            <div><strong>100%</strong><p>pixel-perfect, mobile-first &amp; responsive</p></div>
            <div><strong>Free</strong><p>basic SEO setup with every website</p></div>
            <div><strong>₹0</strong><p>hidden costs: price agreed before we start</p></div>
          </div>
        </div>
        <div className="story-footer">
          <span className="micro"><span className="down-arrow">↓</span></span>
          <div className="hero-actions">
            <a className="button button-dark" href={explore.href}>{explore.label} <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" /></svg></a>
            <a className="text-link" href={start.href}>{start.label} <span>↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Alternative hero (draft, hidden for now). Set SHOW_NEW_HERO to true to show it above the 3D story.
const SHOW_NEW_HERO = false;
function HeroNow({ hero }) {
  const ref = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(ANY_MOTION, () => {
      gsap.from('.hero-now .rise', { yPercent: 60, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.1 });
      gsap.fromTo('.hero-now .reel', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'expo.inOut', delay: 0.35 });
    });
  }, { scope: ref });
  const [explore, start] = hero.ctas;
  return (
    <section className="hero-now page" ref={ref} aria-labelledby="hero-now-title">
      <p className="hero-now__tag rise">{hero.eyebrow}</p>
      <h1 id="hero-now-title" className="hero-now__title">
        <span className="hero-now__line rise">Websites that <Reel /></span>{' '}
        <span className="hero-now__line rise">move people.</span>
      </h1>
      <p className="hero-now__second rise">Technology that moves businesses.</p>
      <div className="hero-now__foot rise">
        <p>{hero.text}</p>
        <div className="actions">
          <a className="button button-dark" href={explore.href}>{explore.label} <Arrow /></a>
          <a className="text-link" href={start.href}>{start.label} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

export default function PageContent() {
  const [hero, whatWeDo, featured, approach, who, final] = pageByKey('').blocks;
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="progress" aria-hidden="true" />
      <SiteHeader />
      <main id="main">
        {SHOW_NEW_HERO && <HeroNow hero={hero} />}
        <HeroStory hero={hero} />
        <div className="page">
          <Bands block={whatWeDo} id="what-we-do" />
          <PushedTable block={featured} id="featured-services" links={serviceLinks} tint />
          <Staircase block={approach} id="approach" />
          <ColourFields block={who} id="who-we-work-with" />
          <QuestionEdges block={final} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
