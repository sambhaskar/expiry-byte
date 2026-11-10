import React, { useRef, useState } from 'react';
import './form-status.css';

const recipient = 'hello@experibyte.com';
const endpoint = `https://formsubmit.co/ajax/${recipient}`;

const helpOptions = ['Website', 'Animated Website', 'Web Application', 'AI', 'UI/UX', 'SEO', 'Not Sure Yet'];
const budgetOptions = ['Under ₹50,000', '₹50,000 – ₹1,50,000', '₹1,50,000 – ₹5,00,000', '₹5,00,000+', 'Not sure yet'];
const timelineOptions = ['As soon as possible', 'Within 1 month', '1–3 months', '3+ months', 'Flexible'];

// Visible labels for every field, as listed in the content document.
export function ContactForm({ submitLabel = 'Send Project Enquiry' }) {
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
      if (result.success !== true && result.success !== 'true') throw new Error('Unable to send');
      form.reset();
      setStatus({ type: 'success', message: 'Thanks! Your enquiry has been sent. We will get back to you soon.' });
    } catch {
      setStatus({ type: 'error', message: `Your enquiry could not be sent. Please email ${recipient} or try again.` });
    } finally {
      setSending(false);
    }
  }

  return (
    <form ref={formRef} id="form" className="enquiry-form enquiry-form--labelled" action={endpoint} method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New enquiry from Experibyte website" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="row">
        <label className="field"><span>Your name*</span><input name="name" autoComplete="name" required /></label>
        <label className="field"><span>Business / organisation</span><input name="business" autoComplete="organization" /></label>
      </div>
      <div className="row">
        <label className="field"><span>Work email*</span><input type="email" name="email" autoComplete="email" required /></label>
        <label className="field"><span>Phone / WhatsApp</span><input type="tel" name="phone" autoComplete="tel" /></label>
      </div>
      <label className="field"><span>I need help with</span>
        <select name="service" defaultValue="Not Sure Yet">{helpOptions.map((o) => <option key={o}>{o}</option>)}</select>
      </label>
      <div className="row">
        <label className="field"><span>Approximate budget (optional)</span>
          <select name="budget" defaultValue=""><option value="">Select a range</option>{budgetOptions.map((o) => <option key={o}>{o}</option>)}</select>
        </label>
        <label className="field"><span>Preferred launch timeline (optional)</span>
          <select name="timeline" defaultValue=""><option value="">Select a timeline</option>{timelineOptions.map((o) => <option key={o}>{o}</option>)}</select>
        </label>
      </div>
      <label className="field"><span>Project description*</span><textarea name="message" rows="5" required /></label>
      <label className="privacy-consent">
        <input type="checkbox" name="privacyConsent" value="accepted" required />
        <span>I have read the <a href="/privacy-policy/">Privacy Policy</a> and understand how my enquiry information will be processed.*</span>
      </label>
      <button className="btn btn-p" type="submit" disabled={sending}>{sending ? 'Sending…' : submitLabel}</button>
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
