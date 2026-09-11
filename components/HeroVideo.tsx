'use client';

import { useEffect, useRef } from 'react';

export default function HeroVideo({ speed = 0.6, className }: { speed?: number; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React does not render the muted attribute in SSR HTML, so autoplay can be blocked.
    video.muted = true;
    video.defaultMuted = true;
    video.playbackRate = speed;
    video.play().catch(() => {});
    const keep = () => { video.playbackRate = speed; };
    video.addEventListener('play', keep);
    video.addEventListener('loadedmetadata', keep);
    return () => {
      video.removeEventListener('play', keep);
      video.removeEventListener('loadedmetadata', keep);
    };
  }, [speed]);

  return (
    <video ref={ref} className={`position-absolute top-0 start-0 w-100 h-100 object-fit-cover ${className ?? ''}`} autoPlay muted loop playsInline>
      <source src="/assets/images/backgrounds/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
