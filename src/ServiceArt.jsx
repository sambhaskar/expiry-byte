import React from 'react';

const Star = () => (
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M20 1v38M1 20h38M6.6 6.6l26.8 26.8M6.6 33.4L33.4 6.6" stroke="currentColor" strokeWidth="7" />
  </svg>
);
const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const scenes = [
  <>
    <div className="mini-browser">
      <div className="mini-bar"><i /><i /><i /></div>
      <div className="mini-layout"><b>Look sharp.<br />Load fast.</b><div className="mini-orb" /><span>Website Development</span></div>
    </div>
    <div className="floating-label">Fully responsive ↗</div>
  </>,
  <>
    <div className="motion-type"><span>Scroll</span><span>Animations</span></div>
    <div className="motion-cursor"><Arrow /></div>
  </>,
  <div className="app-stack">
    <div className="app-tile"><i /><b>Web Applications</b><span className="chart-bars"><em /><em /><em /><em /><em /></span></div>
    <div className="app-tile back" />
  </div>,
  <>
    <div className="ai-spark"><Star /></div>
    <div className="ai-message"><i /> AI Integration</div>
  </>,
  <>
    <div className="design-swatch one" />
    <div className="design-swatch two" />
    <div className="design-swatch three"><span>Aa</span><small>UI / UX Design</small></div>
  </>,
  <>
    <div className="search-ui"><span>your business</span><Arrow /></div>
    <div className="ranking"><span>01</span><b>Local<br />SEO</b></div>
  </>,
];

const templates = (
  <div className="template-stack"><span>Next.js</span><span>React</span><span>HTML</span></div>
);

// The brand's service illustrations. index 0-5 match content/services.js; 7 is templates.
export default function ServiceArt({ index }) {
  return (
    <div className={`service-card service-${index} art-frame`} aria-hidden="true">
      <div className="service-art">{index === 7 ? templates : scenes[index]}</div>
    </div>
  );
}
