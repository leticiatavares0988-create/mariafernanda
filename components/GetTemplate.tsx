'use client';

import { useEffect, useState } from 'react';

export default function GetTemplate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="get-template hstack gap-2">
      <a className="bg-primary px-3 py-2 rounded fs-3 fw-semibold text-dark" target="_blank" rel="noreferrer"
        href="https://www.wrappixel.com/templates/">Get This Template</a>
      <button className="btn bg-primary p-2 round-52 rounded-circle hstack justify-content-center flex-shrink-0"
        id="scrollToTopBtn" type="button" aria-label="Scroll to top" onClick={scrollToTop}
        style={{ display: visible ? 'flex' : 'none' }}>
        <iconify-icon icon="lucide:arrow-up" className="fs-7 text-dark"></iconify-icon>
      </button>
    </div>
  );
}
