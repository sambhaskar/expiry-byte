import React, { useEffect, useId, useRef, useState } from 'react';
import { Arrow, CheckList } from '../PageShell.jsx';
import { Actions } from './Heroes.jsx';
import ServiceArt from '../ServiceArt.jsx';
import { gsap, useGSAP, ANY_MOTION, FULL_MOTION } from '../motion/gsap.js';

const sentence = (t) => t.charAt(0).toUpperCase() + t.slice(1);

function Head({ block, className = '' }) {
  return (
    <div className={`sec-head ${className}`} data-reveal="parts">
      <span className="micro">{block.eyebrow}</span>
      <h2>{block.title}</h2>
      {block.text && <p>{block.text}</p>}
    </div>
  );
}

// Each item is a tall full-width band of colour, name on the left and description on the right.
const bandColours = ['blue', 'ink', 'lime', 'pale', 'blue', 'ink'];
export function Bands({ block, id }) {
  return (
    <section className="switch-bands" id={id}>
      <Head block={block} className="sec-head--wide" />
      <div className="switch-bands__list">
        {block.items.map((item, i) => (
          <div key={item.t} className={`band band--${bandColours[i % bandColours.length]}`} data-reveal="parts">
            <p className="band__name">{item.t}</p>
            <p className="band__more">{sentence(item.d)}</p>
          </div>
        ))}
      </div>
      <div className="switch-bands__foot"><Actions ctas={block.ctas} /></div>
    </section>
  );
}

// A heading across the width; the list pushed into the right-hand columns.
export function PushedTable({ block, id, links = {}, tint }) {
  return (
    <section className={`pushed${tint ? ' pushed--tint' : ''}`} id={id}>
      <Head block={block} className="pushed__head" />
      <div className="pushed__body">
        <ul className="pushed__rows" data-reveal="parts">
          {block.items.map((item) => {
            const body = <>{item.t && <b>{item.t}</b>}<span>{sentence(item.d)}</span>{links[item.t] && <Arrow />}</>;
            return <li key={item.t || item.d}>{links[item.t] ? <a href={links[item.t]}>{body}</a> : <div>{body}</div>}</li>;
          })}
        </ul>
        <Actions ctas={block.ctas} />
      </div>
    </section>
  );
}

// Lines that step across the page, one stage per line.
export function Staircase({ block, id, tone = 'white' }) {
  const ref = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(FULL_MOTION, () => {
      gsap.utils.toArray('.stair__line').forEach((line) => {
        gsap.from(line, { x: 60, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: line, start: 'top 95%', end: 'top 72%', scrub: 0.6 } });
      });
    });
  }, { scope: ref });
  return (
    <section className={`stair stair--${tone}`} id={id} ref={ref}>
      <Head block={block} />
      <ol className="stair__lines">
        {block.items.map((item, i) => (
          <li key={item.t || item.d} className="stair__line" style={{ '--step': i }}>
            {item.t ? <><p className="stair__big">{item.t}</p><p>{sentence(item.d)}</p></> : <p className="stair__big">{item.d}</p>}
          </li>
        ))}
      </ol>
      <Actions ctas={block.ctas} />
    </section>
  );
}

// The stages drawn as one project progress bar that fills, segment by segment, as it scrolls into view.
export function StageBar({ block, stages, id }) {
  const ref = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(ANY_MOTION, () => {
      gsap.from('.stage-bar__fill', {
        scaleX: 0, ease: 'none', stagger: 1,
        scrollTrigger: { trigger: '.stage-bar', start: 'top 80%', end: 'bottom 45%', scrub: 0.8 },
      });
    });
  }, { scope: ref });
  return (
    <section className="stage-sec" id={id} ref={ref}>
      <Head block={block} className="sec-head--wide" />
      <ol className="stage-bar" data-ui>
        {stages.map((stage) => (
          <li key={stage}>
            <span className="stage-bar__fill" aria-hidden="true" />
            <span className="stage-bar__name">{stage}</span>
          </li>
        ))}
      </ol>
      <Actions ctas={block.ctas} />
    </section>
  );
}

// Tinted panels side by side; the chosen one widens and shows its description.
const accordionTints = ['blue', 'pale', 'ink', 'lime'];
export function Accordion({ block, id }) {
  const [open, setOpen] = useState(0);
  const base = useId();
  const hover = useRef(null);
  // Open only after the pointer rests briefly, so sweeping across panels does not flick them open.
  const intend = (i) => { clearTimeout(hover.current); hover.current = setTimeout(() => setOpen(i), 140); };
  useEffect(() => () => clearTimeout(hover.current), []);
  return (
    <section className="accordion-sec" id={id}>
      <Head block={block} className="sec-head--wide" />
      <div className="accordion" onMouseLeave={() => clearTimeout(hover.current)}>
        {block.items.map((item, i) => (
          <article key={item.t} className={`accordion__panel accordion__panel--${accordionTints[i % 4]}${i === open ? ' is-open' : ''}`}
            onMouseEnter={() => intend(i)} onClick={() => setOpen(i)}>
            <span className="accordion__vlabel" aria-hidden="true">{item.t}</span>
            <h3>
              <button type="button" aria-expanded={i === open} aria-controls={`${base}-${i}`} onClick={() => setOpen(i)} onFocus={() => setOpen(i)}>
                {item.t}
              </button>
            </h3>
            <p id={`${base}-${i}`} className="accordion__text">{sentence(item.d)}</p>
          </article>
        ))}
      </div>
      <div className="accordion-sec__foot"><Actions ctas={block.ctas} /></div>
    </section>
  );
}

// The next steps printed on an enquiry slip, like a receipt, beside the heading.
export function EnquirySlip({ block, steps, footer, id }) {
  return (
    <section className="slip-sec" id={id}>
      <div className="slip-sec__copy" data-reveal="parts">
        <span className="micro">{block.eyebrow}</span>
        <h2>{block.title}</h2>
        <p>{block.text}</p>
      </div>
      <div className="slip" data-reveal="parts">
        <div className="slip__head"><b>Enquiry received</b><span>Experibyte</span></div>
        <ol className="slip__steps">
          {steps.map((s, i) => (
            <li key={s}><span>{s}</span><i aria-hidden="true">{i === 0 ? '✓' : ''}</i></li>
          ))}
        </ol>
        <div className="slip__foot"><span>{footer[0]}</span><b>{footer[1]}</b></div>
      </div>
    </section>
  );
}

// Each item is a field of colour, floor to ceiling, butted against the next.
const fieldColours = ['blue', 'pale', 'ink', 'lime', 'blue'];
export function ColourFields({ block, id }) {
  return (
    <section className="fields" id={id}>
      <Head block={block} className="sec-head--wide" />
      <div className={`fields__grid fields__grid--${block.items.length}`}>
        {block.items.map((item, i) => (
          <article key={item.t} className={`cfield cfield--${fieldColours[i % fieldColours.length]}`} data-reveal="parts">
            <h3>{item.t}</h3>
            <p>{sentence(item.d)}</p>
          </article>
        ))}
      </div>
      <div className="fields__foot"><Actions ctas={block.ctas} /></div>
    </section>
  );
}

// A large statement whose words light up as it scrolls into view.
export function Statement({ block, id, tone = 'pale', aside }) {
  const ref = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(ANY_MOTION, () => {
      gsap.fromTo('.statement__word', { opacity: 0.25 }, { opacity: 1, stagger: 0.05, ease: 'none', scrollTrigger: { trigger: '.statement-sec__text', start: 'top 88%', end: 'bottom 70%', scrub: 0.5 } });
    });
  }, { scope: ref });
  return (
    <section className={`statement-sec statement-sec--${tone}${aside ? ' statement-sec--aside' : ''}`} id={id} ref={ref}>
      <div className="statement-sec__copy">
        <span className="micro">{block.eyebrow}</span>
        <h2>{block.title}</h2>
        <p className="statement-sec__text">
          {block.text.split(' ').map((w, i) => <span className="statement__word" key={i}>{w} </span>)}
        </p>
        <Actions ctas={block.ctas} light={tone === 'blue' || tone === 'ink'} />
      </div>
      {aside && <div className="statement-sec__aside">{aside}</div>}
    </section>
  );
}

// A dark field with the list set large in two columns.
export function InkList({ block, id }) {
  return (
    <section className="ink-list" id={id}>
      <Head block={block} />
      <ul className="ink-list__items" data-reveal="parts">
        {block.items.map((item) => (
          <li key={item.t || item.d}>{item.t ? <><b>{item.t}</b> {sentence(item.d)}</> : item.d}</li>
        ))}
      </ul>
      <Actions ctas={block.ctas} light />
    </section>
  );
}

// Panels that travel sideways while the section is held in place.
export function PinnedPanels({ block, id }) {
  const ref = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(FULL_MOTION, () => {
      const track = ref.current.querySelector('.pinned__track');
      const distance = () => track.scrollWidth - window.innerWidth + 80;
      gsap.to(track, {
        x: () => -distance(), ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: () => `+=${distance()}`, scrub: 0.6, pin: true, invalidateOnRefresh: true },
      });
    });
  }, { scope: ref });
  return (
    <section className="pinned" id={id} ref={ref}>
      <div className="pinned__track">
        <div className="pinned__intro">
          <span className="micro">{block.eyebrow}</span>
          <h2>{block.title}</h2>
          {block.text && <p>{block.text}</p>}
        </div>
        {block.items.map((item, i) => (
          <article className={`pinned__panel pinned__panel--${i % 4}`} key={item.t || item.d}>
            {item.t ? <><h3>{item.t}</h3><p>{sentence(item.d)}</p></> : <h3>{item.d}</h3>}
          </article>
        ))}
      </div>
    </section>
  );
}

// A list on the left; the matching panel holds still on the right while you move through it.
export function StickyIndex({ entries, id, renderPanel, label }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  useEffect(() => {
    const io = new IntersectionObserver((list) => {
      list.forEach((e) => { if (e.isIntersecting) setActive(Number(e.target.dataset.index)); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section className="sticky-index" id={id} aria-label={label}>
      <ol className="sticky-index__list">
        {entries.map((entry, i) => (
          <li key={entry.key} ref={(el) => { refs.current[i] = el; }} data-index={i} className={i === active ? 'is-active' : ''}>
            <a href={entry.href} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
              <span className="sticky-index__name">{entry.name}</span>
              <Arrow />
            </a>
            <div className="sticky-index__inline">{renderPanel(entry)}</div>
          </li>
        ))}
      </ol>
      <div className="sticky-index__stage" aria-hidden="true">
        {entries.map((entry, i) => (
          <div key={entry.key} className={`sticky-index__panel${i === active ? ' is-active' : ''}`}>{renderPanel(entry)}</div>
        ))}
      </div>
    </section>
  );
}

export function ServicePanel({ block, art }) {
  return (
    <div className="service-panel">
      <ServiceArt index={art} />
      <span className="micro">{block.eyebrow}</span>
      <p>{block.text}</p>
    </div>
  );
}

// Tabs that swap content in place. Without script every panel shows in order.
export function Picker({ blocks, id, label }) {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const base = useId();
  const tabs = useRef([]);
  useEffect(() => setReady(true), []);
  const onKey = (e, i) => {
    const n = blocks.length;
    const next = { ArrowRight: (i + 1) % n, ArrowDown: (i + 1) % n, ArrowLeft: (i - 1 + n) % n, ArrowUp: (i - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault(); setActive(next); tabs.current[next]?.focus();
  };
  return (
    <section className="picker" id={id}>
      <div className="picker__tabs" role="tablist" aria-label={label} aria-orientation="vertical">
        {blocks.map((b, i) => (
          <button key={b.name} ref={(el) => { tabs.current[i] = el; }} type="button" role="tab" id={`${base}-t${i}`} aria-controls={`${base}-p${i}`}
            aria-selected={i === active} tabIndex={i === active ? 0 : -1} onClick={() => setActive(i)} onKeyDown={(e) => onKey(e, i)}>
            {b.name}
          </button>
        ))}
      </div>
      <div className="picker__panels">
        {blocks.map((b, i) => (
          <div key={b.name} role="tabpanel" id={`${base}-p${i}`} aria-labelledby={`${base}-t${i}`} hidden={ready && i !== active} className="picker__panel">
            <span className="micro">{b.eyebrow}</span>
            <h2>{b.title}</h2>
            <p>{b.text}</p>
            <CheckList items={b.items.map((it) => it.d)} />
            <Actions ctas={b.ctas} />
          </div>
        ))}
      </div>
    </section>
  );
}
