"use client";

import { mailchimp } from "@/app/resources";
import { Button, Flex, Heading, Input, Text, Background, Column } from "@/once-ui/components";
import { opacity, SpacingToken } from "@/once-ui/types";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      e.preventDefault();
      return;
    }
    setError("");
    setSubmitted(true);
    // Let the form submit to Mailchimp
  };

  return (
    <div style={{ background: '#f9fafb', borderRadius: '1rem', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', padding: '2rem', margin: '2rem auto', maxWidth: 400 }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#22223b', marginBottom: '1rem' }}>Subscribe to Matthew's Newsletter</h2>
      {submitted ? (
        <div style={{ color: '#38b000', fontWeight: 600, fontSize: '1.1rem', textAlign: 'center' }}>Thank you for subscribing!</div>
      ) : (
        <form
          action="https://us20.list-manage.com/contact-form?u=cb398a49b20c7906f23664856&form_id=4a9cb3ab8f2b184fda684edce5d8227c"
          method="POST"
          target="_blank"
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <label htmlFor="newsletter-email" style={{ fontWeight: 500, color: '#22223b' }}>
            Email Address
            <span style={{ color: '#e63946', marginLeft: 4 }}>*</span>
          </label>
          <input
            id="newsletter-email"
            name="EMAIL"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ borderRadius: '0.5rem', border: '1px solid #cbd5e1', padding: '0.75rem', fontSize: '1rem', width: '100%' }}
            placeholder="you@email.com"
          />
          {error && <div style={{ color: '#e63946', fontSize: '0.95rem' }}>{error}</div>}
          <button
            type="submit"
            style={{ background: '#22223b', color: '#fff', borderRadius: '0.5rem', padding: '0.75rem 1.5rem', fontWeight: 600, border: 'none', marginTop: '0.5rem', cursor: 'pointer', fontSize: '1rem', transition: 'background 0.2s' }}
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};
