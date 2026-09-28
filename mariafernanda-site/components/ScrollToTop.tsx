'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
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
      <button className="btn bg-primary p-2 round-52 rounded-circle hstack justify-content-center flex-shrink-0"
        id="scrollToTopBtn" type="button" aria-label="Voltar ao topo" onClick={scrollToTop}
        style={{ display: visible ? 'flex' : 'none' }}>
        <iconify-icon icon="lucide:arrow-up" className="fs-7 text-dark"></iconify-icon>
      </button>
    </div>
  );
}
