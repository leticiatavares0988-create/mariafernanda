'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function ClientInit() {
  useEffect(() => {
    // Bootstrap JS (dropdown, tabs, accordion)
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    AOS.init({ once: true });

    // Header scroll
    const header = document.querySelector('header');
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY >= 60) header.classList.add('fixed-header');
      else header.classList.remove('fixed-header');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Counters
    const duration = 1000;
    document.querySelectorAll<HTMLElement>('.count').forEach((el) => {
      const target = parseInt(el.dataset.target || el.textContent || '0', 10);
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 0.5 - Math.cos(t * Math.PI) / 2;
        el.textContent = String(Math.ceil(target * eased));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
