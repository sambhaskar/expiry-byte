import React from 'react';
import { Arrow } from '../PageShell.jsx';
import { Actions } from './Heroes.jsx';

// Splits a title into two halves at a sentence break, or else near the middle.
function halves(title) {
  const parts = title.match(/[^.?!]+[.?!]/g);
  if (parts && parts.length > 1) return [parts[0].trim(), title.slice(parts[0].length).trim()];
  return [title, ''];
}

// The question at the top and bottom edges of a dark field, the answer held between.
export function QuestionEdges({ block }) {
  const [top, bottom] = halves(block.title);
  const live = block.ctas.filter((c) => c.href);
  return (
    <section className={`edges${bottom ? '' : ' edges--single'}`} aria-labelledby="closing-title">
      <h2 id="closing-title"><span className="edges__top">{top}</span>{bottom && <> <span className="edges__bottom">{bottom}</span></>}</h2>
      <div className="edges__middle" data-reveal="parts">
        <div className="edges__buttons">
          {live.map((c, i) => (
            <React.Fragment key={c.label}>
              {i > 0 && <span className="edges__or">or</span>}
              <a className={`button ${i === 0 ? 'button-light' : 'button-outline'}`} href={c.href}>{c.label} <Arrow /></a>
            </React.Fragment>
          ))}
        </div>
        {block.text && <p>{block.text}</p>}
      </div>
    </section>
  );
}

// A blue field: the sentence on the left, what happens next on the right.
export function BlueClose({ block }) {
  return (
    <section className="blue-close">
      <div data-reveal="parts">
        <span className="micro">{block.eyebrow}</span>
        <h2>{block.title}</h2>
      </div>
      <div className="blue-close__side" data-reveal="parts">
        {block.text && <p>{block.text}</p>}
        <Actions ctas={block.ctas} light />
      </div>
    </section>
  );
}

// A moving line of the eyebrow over a lime field, with the title and action beneath.
export function MarqueeClose({ block }) {
  const run = Array.from({ length: 6 }, () => block.eyebrow).join('  ·  ');
  return (
    <section className="marquee-close">
      <div className="marquee" aria-hidden="true"><div className="marquee__run"><span>{run}  ·  </span><span>{run}  ·  </span></div></div>
      <div className="marquee-close__body" data-reveal="parts">
        <h2>{block.title}</h2>
        <div>
          {block.text && <p>{block.text}</p>}
          <Actions ctas={block.ctas} />
        </div>
      </div>
    </section>
  );
}
