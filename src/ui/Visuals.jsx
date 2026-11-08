import React, { useEffect, useRef, useState } from 'react';
import { gsap, useGSAP, ANY_MOTION } from '../motion/gsap.js';

// Drawn pieces of the work itself. Interface fragments carry data-ui; they are illustrations, not screenshots.

// Service names that roll upwards one at a time, like the date wheel of a watch.
const wheelWords = ['Web', 'Motion', 'Apps', 'AI', 'UX', 'SEO'];

// A larger rolling preview for the home headline: one mini screen per kind of work.
const reelScreens = [
  { kind: 'site', label: 'Websites' }, { kind: 'motion', label: 'Experiences' },
  { kind: 'app', label: 'Applications' }, { kind: 'ai', label: 'Intelligence' },
];
export function Reel() {
  return (
    <span className="reel" aria-hidden="true" data-ui>
      <span className="reel__track">
        {[...reelScreens, reelScreens[0]].map((s, i) => (
          <span key={i} className={`reel__screen reel__screen--${s.kind}`}>
            <span className="reel__marks"><i /><i /><i /></span>
            <span className="reel__label">{s.label}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

// A small live fragment set inside a headline, one line tall, sized in em.
export function Slot({ kind }) {
  return (
    <span className={`slot slot--${kind}`} aria-hidden="true" data-ui>
      {kind === 'browser' && <><i /><b /><b /><b /></>}
      {kind === 'bars' && <><i /><i /><i /><i /><i /></>}
      {kind === 'search' && <><em>your business</em><i /></>}
      {kind === 'dot' && <i />}
      {kind === 'cycle' && <span className="wheel">{[...wheelWords, wheelWords[0]].map((w, i) => <b key={i}><span>{w}</span></b>)}</span>}
    </span>
  );
}

// Website Development: a page that assembles itself.
export function BrowserBuild() {
  return (
    <div className="browser-build shutter" data-ui aria-hidden="true">
      <div className="browser-build__bar"><i /><i /><i /><span>yourbusiness.com</span></div>
      <div className="browser-build__page">
        <div className="bb bb--nav"><b>Your business</b><span>Services</span><span>About</span><span className="bb-pill">Contact</span></div>
        <div className="bb bb--hero"><strong>Clear. Fast.<br />Ready to act.</strong><span className="bb-btn">Book a call</span></div>
        <div className="bb bb--cards"><span>Service one</span><span>Service two</span><span>Service three</span></div>
      </div>
    </div>
  );
}

// AI Integration: an example assistant that answers, and hands over when unsure.
const chats = [
  { q: 'Do you build booking systems?', a: 'Yes. Booking and scheduling platforms are one of the web applications Experibyte builds.' },
  { q: 'What does a basic website cost?', a: 'Basic websites start at ₹12,999 for up to 5 standard pages. Larger projects get a written quote.' },
  { q: 'Can you promise I will rank first on Google?', a: null },
];
export function ChatDemo() {
  const [active, setActive] = useState(0);
  const [stage, setStage] = useState(3);
  const timers = useRef([]);
  const play = (i) => {
    timers.current.forEach(clearTimeout);
    setActive(i); setStage(1);
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setStage(3); return; }
    timers.current = [setTimeout(() => setStage(2), 450), setTimeout(() => setStage(3), 1400)];
  };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const chat = chats[active];
  return (
    <div className="chat-demo shutter" data-ui>
      <div className="chat-demo__head"><span className="chat-demo__dot" />Website assistant <small>Example</small></div>
      <div className="chat-demo__log" aria-live="polite">
        <p className="msg msg--user">{chat.q}</p>
        {stage === 2 && <p className="msg msg--typing" aria-label="Assistant is typing"><i /><i /><i /></p>}
        {stage === 3 && (chat.a
          ? <p className="msg msg--bot">{chat.a}</p>
          : <><p className="msg msg--bot">I can't answer that reliably, so I'm passing you to a person.</p><p className="msg msg--handoff">Connected to the Experibyte team</p></>)}
      </div>
      <div className="chat-demo__ask" role="group" aria-label="Try a question">
        {chats.map((c, i) => (
          <button key={c.q} type="button" aria-pressed={i === active} onClick={() => play(i)}>{c.q}</button>
        ))}
      </div>
    </div>
  );
}

// UI/UX: the same screen as a wireframe and as a finished interface.
export function WireframeMorph() {
  const [finished, setFinished] = useState(true);
  return (
    <div className="morph shutter">
      <div className={`morph__screen${finished ? ' is-finished' : ''}`} data-ui aria-hidden="true">
        <div className="mx mx--nav"><b /><span /><span /><span /></div>
        <div className="mx mx--hero"><strong>Book your first session</strong><p>Pick a time that suits you.</p><span className="mx-btn">Choose a time</span></div>
        <div className="mx mx--slots"><span>Mon 10:00</span><span>Tue 14:30</span><span>Thu 09:00</span></div>
      </div>
      <div className="morph__switch" role="group" aria-label="Show the screen as">
        <button type="button" aria-pressed={!finished} onClick={() => setFinished(false)}>Wireframe</button>
        <button type="button" aria-pressed={finished} onClick={() => setFinished(true)}>Interface</button>
      </div>
    </div>
  );
}

// SEO: a search with the business found.
export function SearchMock() {
  return (
    <div className="search-mock shutter" data-ui aria-hidden="true">
      <div className="search-mock__field"><span className="search-mock__typed">web designer near me</span><i /></div>
      <ul>
        <li className="is-you"><small>yourbusiness.com › services</small><b>Website Design &amp; Development | Your Business</b><span>Clear service pages, fast loading and an easy way to get in touch.</span></li>
        <li><small>Business profile</small><b>Your Business · Open today</b><span>Directions · Call · Website</span></li>
        <li><small>yourbusiness.com › contact</small><b>Contact Your Business</b><span>Tell us about your project.</span></li>
      </ul>
    </div>
  );
}

// Technologies: the layers of a product, interface on top.
const layers = [
  ['Interface', 'React, Next.js, HTML, CSS & JavaScript'],
  ['Motion', 'Scroll interactions and transitions'],
  ['Application', 'Authentication, databases and APIs'],
  ['Platform', 'Payments, content tools and cloud'],
];
export function StackLayers() {
  return (
    <div className="stack-layers shutter" aria-label="The layers of a product">
      {layers.map(([name, detail], i) => (
        <div className={`stack-layers__plane stack-layers__plane--${i}`} key={name} tabIndex={0}>
          <b>{name}</b><span>{detail}</span>
        </div>
      ))}
    </div>
  );
}

// Templates: three starting points, fanned out.
export function TemplateFan() {
  return (
    <div className="template-fan shutter" data-ui aria-hidden="true">
      <div className="tf tf--a"><b>Portfolio</b><span className="tf-big">Selected work</span><span className="tf-grid"><i /><i /><i /><i /></span></div>
      <div className="tf tf--b"><b>Product launch</b><span className="tf-big">Meet the new one.</span><span className="tf-btn">Pre-order</span></div>
      <div className="tf tf--c"><b>Startup &amp; SaaS</b><span className="tf-big">Work, simplified.</span><span className="tf-btn">Start free</span></div>
    </div>
  );
}

// Animated websites: one frame seen at three distances while the reader scrolls.
export function FrameDistances({ block }) {
  const { items, title } = block;
  const ref = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 901px)', () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=220%', scrub: 0.6, pin: '.frames__stage' } });
      tl.to('.frames__art', { scale: 1.8, transformOrigin: '30% 40%', ease: 'none' })
        .to('.frames__art', { scale: 3, transformOrigin: '72% 70%', ease: 'none' });
      gsap.utils.toArray('.frames__item').forEach((item, i) => {
        tl.fromTo(item, { opacity: 0.25 }, { opacity: 1, duration: 0.2 }, i * 0.38);
      });
    });
  }, { scope: ref });
  return (
    <section className="frames" ref={ref}>
      <div className="frames__stage">
        <div className="frames__head">
          <span className="micro">{block.eyebrow}</span>
          <h2>{title}</h2>
          <p>{block.text}</p>
        </div>
        <div className="frames__window" aria-hidden="true">
          <div className="frames__art"><span>Scroll</span><span>Story</span><i /></div>
        </div>
        <ul className="frames__list">{items.map((it) => <li className="frames__item" key={it.d}>{it.d}</li>)}</ul>
      </div>
    </section>
  );
}

// Technologies: an approved design becoming working code.
export function DesignToCode() {
  return (
    <div className="d2c" data-ui aria-hidden="true">
      <div className="d2c__sheet d2c__sheet--design"><small>Approved design</small><b>Hello.</b><span /><span /><i /></div>
      <div className="d2c__arrow">→</div>
      <div className="d2c__sheet d2c__sheet--code"><small>Responsive page</small><b>Hello.</b><span /><span /><i /></div>
    </div>
  );
}

// About: the name split into its two halves.
export function NameSplit() {
  return (
    <div className="name-split shutter" aria-hidden="true">
      <span className="name-split__experi">Experi</span>
      <span className="name-split__byte">byte<i /></span>
    </div>
  );
}

// Clip-path "shutter" opening on the page's one signature visual.
export function useShutter(scope) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(ANY_MOTION, () => {
      gsap.fromTo('.shutter', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'expo.out', delay: 0.15 });
      gsap.fromTo('.shutter > *', { scale: 1.08 }, { scale: 1, duration: 1.3, ease: 'expo.out', delay: 0.15 });
    });
  }, { scope });
}
