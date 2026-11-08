import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, ANY_MOTION, FULL_MOTION } from './gsap.js';

// Site-wide motion: smooth scrolling, anchor links, the progress bar and section entrances.
// Content is fully visible in the prerendered HTML; motion only runs after hydration.
export default function MotionRoot() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    let lenis = null;

    mm.add(FULL_MOTION, () => {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true, syncTouch: false, lerp: 0.095, wheelMultiplier: 0.85 });
      lenis.on('scroll', ScrollTrigger.update);
      const tick = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      return () => { gsap.ticker.remove(tick); lenis.destroy(); lenis = null; };
    });

    mm.add(ANY_MOTION, () => {
      // Entrances: the parts of each section rise in turn, once, as the section arrives.
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        const parts = el.matches('[data-reveal="parts"]') ? el.children : el;
        gsap.from(parts, {
          y: 26, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });
      const progress = document.getElementById('progress');
      if (progress) gsap.to(progress, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });
    });

    // In-page links scroll smoothly and land below the fixed header.
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      document.getElementById('navigation')?.classList.remove('open');
      if (lenis) lenis.scrollTo(target, { offset: -84, duration: 1.2 });
      else target.scrollIntoView({ behavior: 'auto' });
      history.replaceState(null, '', link.getAttribute('href'));
      if (target.id === 'main' || target.tabIndex >= 0) target.focus?.({ preventScroll: true });
    };
    document.addEventListener('click', onClick);

    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => { document.removeEventListener('click', onClick); mm.revert(); };
  }, []);

  return null;
}
