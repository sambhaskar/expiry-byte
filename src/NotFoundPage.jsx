import React from 'react';

export default function NotFoundPage() {
  return (
    <main className="notfound" id="main">
      <a className="brand" href="/" aria-label="Experibyte home"><img src="/logo.png" alt="Experibyte" /></a>
      <div className="notfound__body">
        <span className="micro">ERROR 404</span>
        <h1>Page <em>not found.</em></h1>
        <p>The page you are looking for doesn't exist or may have moved. Let's get you back to where the good stuff is.</p>
        <a className="button button-dark" href="/">Back to home <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.7" /></svg></a>
      </div>
      <span className="notfound__ghost" aria-hidden="true">404</span>
    </main>
  );
}
