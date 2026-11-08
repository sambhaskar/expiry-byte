import React, { useRef } from 'react';
import { Arrow } from '../PageShell.jsx';
import { useShutter, Slot } from './Visuals.jsx';
import { gsap, useGSAP, ANY_MOTION } from '../motion/gsap.js';

export function Actions({ ctas, light }) {
  const live = ctas.filter((c) => c.href);
  if (!live.length) return null;
  return (
    <div className="actions">
      {live.map((c, i) => (i === 0
        ? <a key={c.label} className={`button ${light ? 'button-light' : 'button-dark'}`} href={c.href}>{c.label} <Arrow /></a>
        : <a key={c.label} className="text-link" href={c.href}>{c.label} <span aria-hidden="true">↗</span></a>))}
    </div>
  );
}

// A headline of several short sentences starts each sentence on its own line,
// so a word like "An" never hangs at the end of the line before its sentence.
export function Title({ text }) {
  const parts = text.match(/[^.?!]+[.?!]+/g);
  if (!parts || parts.length < 2) return text;
  return parts.map((s) => <span className="title-line" key={s}>{s.trim()}</span>);
}

// Headline lines rise in on load.
function useTitleRise(scope) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(ANY_MOTION, () => {
      gsap.from('.rise', { yPercent: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.09 });
    });
  }, { scope });
}

// A sentence with a live fragment of the work set inside it, where a word would be.
export function HeroSentence({ trail, block, slot, at = 2 }) {
  const ref = useRef(null);
  useTitleRise(ref);
  const words = block.title.split(' ');
  return (
    <header className="hero-sentence" ref={ref}>
      <span className="micro rise">{block.eyebrow}</span>
      <h1 className="hero-sentence__title rise">
        {words.slice(0, at).join(' ')} <Slot kind={slot} /> {words.slice(at).join(' ')}
      </h1>
      <div className="hero-sentence__foot rise">
        <p>{block.text}</p>
        <Actions ctas={block.ctas} />
      </div>
    </header>
  );
}

// Copy on the left, the page's signature visual on the right.
export function HeroSplit({ trail, block, visual }) {
  const ref = useRef(null);
  useTitleRise(ref);
  useShutter(ref);
  return (
    <header className="hero-split" ref={ref}>
      <div className="hero-split__copy">
          <span className="micro rise">{block.eyebrow}</span>
        <h1 className="rise"><Title text={block.title} /></h1>
        <p className="rise">{block.text}</p>
        <div className="rise"><Actions ctas={block.ctas} /></div>
      </div>
      <div className="hero-split__visual">{visual}</div>
    </header>
  );
}

// Words alone, set large, with the supporting line and action on one baseline at the foot.
export function HeroType({ trail, block, centred }) {
  const ref = useRef(null);
  useTitleRise(ref);
  return (
    <header className={`hero-type${centred ? ' hero-type--centred' : ''}`} ref={ref}>
      <span className="micro rise">{block.eyebrow}</span>
      <h1 className="rise"><Title text={block.title} /></h1>
      <div className="hero-type__foot rise">
        <p>{block.text}</p>
        <Actions ctas={block.ctas} />
      </div>
    </header>
  );
}

// A bold field of colour with the title and a visual beneath (used where the visual is the name itself).
export function HeroField({ trail, block, visual }) {
  const ref = useRef(null);
  useTitleRise(ref);
  useShutter(ref);
  return (
    <header className="hero-field" ref={ref}>
      {visual}
      <div className="hero-field__copy">
        <div>
          <span className="micro rise">{block.eyebrow}</span>
          <h1 className="rise"><Title text={block.title} /></h1>
        </div>
        <div className="rise">
          <p>{block.text}</p>
          <Actions ctas={block.ctas} light />
        </div>
      </div>
    </header>
  );
}
