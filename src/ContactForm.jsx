import React, { useRef, useState } from 'react';
import './form-status.css';

const recipient = 'experibytetechnologies@gmail.com';
const endpoint = `https://formsubmit.co/ajax/${recipient}`;

export function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = formRef.current;
    if (!form?.reportValidity() || sending) return;

    setSending(true);
    setStatus({ type: 'sending', message: 'Sending your enquiry…' });
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error('Unable to send');
      const result = await response.json();
      if (result.success !== true && result.success !== 'true') {
        throw new Error('Unable to send');
      }
      form.reset();
      setStatus({ type: 'success', message: 'Thanks! Your enquiry has been sent. We will get back to you within 24 hours.' });
    } catch {
      setStatus({ type: 'error', message: `Your enquiry could not be sent. Please email ${recipient} or try again.` });
    } finally {
      setSending(false);
    }
  }

  return (
    <form ref={formRef} id="form" className="enquiry-form" action={endpoint} method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New enquiry from Experibyte website" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="row">
        <input name="name" placeholder="Your name" aria-label="Your name" autoComplete="name" required />
        <input type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email" required />
      </div>
      <div className="row">
        <input type="tel" name="phone" placeholder="Phone / WhatsApp" aria-label="Phone or WhatsApp" autoComplete="tel" />
        <select name="service" aria-label="Service you are interested in">
          <option>Website – Basic</option>
          <option>Website – Advance</option>
          <option>Website – Premium</option>
          <option>Motion Landing Page</option>
          <option>Immersive Animated Website</option>
          <option>3D / WebGL Experience</option>
          <option>Web App – MVP</option>
          <option>Web App – Business Platform / SaaS</option>
          <option>AI Integration</option>
          <option>Local SEO</option>
          <option>Growth SEO / Website Care</option>
          <option>Design to Code (Figma / XD / PSD)</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <select name="budget" aria-label="Project budget">
        <option>Budget: under ₹50,000</option>
        <option>₹50,000 – ₹1,50,000</option>
        <option>₹1,50,000 – ₹5,00,000</option>
        <option>₹5,00,000+</option>
        <option>Not sure yet</option>
      </select>
      <textarea name="message" rows="5" placeholder="Tell us about your project" aria-label="Tell us about your project" required />
      <button className="btn btn-p" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send enquiry'}</button>
      <p className="privacy">🔒 Your details are used only to reply to your enquiry. No spam, ever.</p>
      <div id="msg" className={`form-status${status.type === 'success' ? ' form-status--success' : ''}`} role="status" aria-live="polite">
        {status.type === 'success' && (
          <span className="form-status__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        )}
        <span>{status.message}</span>
      </div>
    </form>
  );
}
