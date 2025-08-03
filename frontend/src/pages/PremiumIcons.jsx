// components/PremiumIcons.js
import React from 'react';

export function HotelIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 3v3m8-3v3M3 10h18M3 21h18M5 21V10m14 11V10M3 10V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
      <path d="M7 14h.01M7 17h.01" />
    </svg>
  );
}

export function MedalIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="6" />
      <path d="M7.8 14.5 6 21l6-3 6 3-1.8-6.5" />
    </svg>
  );
}

export function ShieldIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function GlobeIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function QuoteIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M3 12c0-3.314 2.686-6 6-6 1.657 0 3 .672 4 1.76A5.996 5.996 0 0 1 15 6c3.314 0 6 2.686 6 6 0 3.314-2.686 6-6 6-1.657 0-3-.672-4-1.76A5.996 5.996 0 0 1 9 18c-3.314 0-6-2.686-6-6z" />
      <path d="M6 12h3M15 12h3" />
    </svg>
  );
}