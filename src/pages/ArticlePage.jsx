import React from 'react';
import { Arrow, CheckList, PageShell } from '../PageShell.jsx';
import ImageSlot from '../ui/ImageSlot.jsx';
import { articles, readingMinutes } from '../content/articles.js';

const anchor = (h) => h.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export default function ArticlePage({ article }) {
  const others = articles.filter((a) => a.slug !== article.slug);
  return (
    <PageShell active="insights">
      <article className="article">
        <header className="article__head">
          <a className="article__back" href="/insights/"><span aria-hidden="true">←</span> All insights</a>
          <span className="micro">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="article__dek">{article.intro}</p>
          <p className="article__meta">{readingMinutes(article)} min read · Experibyte</p>
        </header>

        <ImageSlot image={article.cover} eager className="article__cover" />

        <div className="article__layout">
          <nav className="article__toc" aria-label="In this article">
            <b>In this article</b>
            <ol>{article.sections.map((s) => <li key={s.h}><a href={`#${anchor(s.h)}`}>{s.h}</a></li>)}</ol>
          </nav>

          <div className="article__body">
            {article.sections.map((s) => (
              <section key={s.h} id={anchor(s.h)}>
                <h2>{s.h}</h2>
                {s.p.map((p) => <p key={p}>{p}</p>)}
                {s.list && <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
                {s.image && (
                  <figure>
                    <ImageSlot image={s.image} ratio="16 / 10" />
                    <figcaption>{s.image.alt}</figcaption>
                  </figure>
                )}
              </section>
            ))}

            <aside className="article__takeaway" aria-labelledby="takeaway-title">
              <h2 id="takeaway-title">{article.takeaway.title}</h2>
              <CheckList items={article.takeaway.list} />
            </aside>

            <div className="article__cta">
              <p>Thinking about this for your own business?</p>
              <div className="actions">
                <a className="button button-dark" href="/contact/">Talk to us <Arrow /></a>
                <a className="text-link" href={article.service.href}>See {article.service.label} <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="more-reads" aria-labelledby="more-reads-title">
        <h2 id="more-reads-title">Keep reading</h2>
        <div className="more-reads__grid">
          {others.map((a) => (
            <a key={a.slug} className="read-card" href={`/insights/${a.slug}/`}>
              <ImageSlot image={a.cover} />
              <span className="micro">{a.category}</span>
              <h3>{a.title}</h3>
              <span className="read-card__go">Read the article <Arrow /></span>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
