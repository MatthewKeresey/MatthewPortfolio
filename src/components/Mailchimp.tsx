"use client";

import React from "react";

export const Mailchimp = () => {
  return (
    <div style={{ background: '#f9fafb', borderRadius: '1rem', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', padding: '2rem', margin: '2rem auto', maxWidth: 400 }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#22223b', marginBottom: '1rem' }}>Subscribe to Matthew's Newsletter</h2>
      <button
        onClick={() => window.open('https://us20.list-manage.com/contact-form?u=cb398a49b20c7906f23664856&form_id=4a9cb3ab8f2b184fda684edce5d8227c', '_blank', 'noopener,noreferrer')}
        style={{ background: '#22223b', color: '#fff', borderRadius: '0.5rem', padding: '0.75rem 1.5rem', fontWeight: 600, border: 'none', marginTop: '0.5rem', cursor: 'pointer', fontSize: '1rem', transition: 'background 0.2s', width: '100%' }}
      >
        Send Matt a message
      </button>
    </div>
  );
};
