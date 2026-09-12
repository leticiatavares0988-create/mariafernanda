'use client';

import { useEffect, useRef } from 'react';

// Crop of the source video (720x720) that actually contains the cat.
const CROP = { sx: 80, sy: 60, sw: 580, sh: 590 };

export default function CatVideo({ size = 96, white = true }: { size?: number; white?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const height = Math.round(size * (CROP.sh / CROP.sw));

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(size * dpr);
    const h = Math.round(height * dpr);
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let raf = 0;
    let visible = true;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const draw = () => {
      if (video.readyState >= 2) {
        ctx.drawImage(video, CROP.sx, CROP.sy, CROP.sw, CROP.sh, 0, 0, w, h);
        const frame = ctx.getImageData(0, 0, w, h);
        const d = frame.data;
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2];
          const greenness = g - Math.max(r, b);
          if (greenness > 40) {
            // soft edge: fade out as the pixel gets greener
            const a = 255 - Math.min(255, (greenness - 40) * 5);
            d[i + 3] = a;
            // despill: remove the green cast on edge pixels
            d[i + 1] = Math.max(r, b);
          }
        }
        ctx.putImageData(frame, 0, 0);
      }
      if (!reduced && visible && !video.paused) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      video.muted = true;
      video.playbackRate = 1;
      if (reduced) {
        video.pause();
        draw();
        return;
      }
      video.play().then(() => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }).catch(() => {});
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else { video.pause(); cancelAnimationFrame(raf); }
    });
    io.observe(canvas);

    video.addEventListener('loadeddata', start);
    if (video.readyState >= 2) start();

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      video.removeEventListener('loadeddata', start);
    };
  }, [size, height]);

  return (
    <span className="cat-video flex-shrink-0 d-inline-block" style={{ width: size, height }} aria-hidden="true">
      <video ref={videoRef} src="/assets/images/backgrounds/cat-animation.mp4" muted loop playsInline preload="auto"
        className="d-none" />
      <canvas ref={canvasRef} style={{ width: size, height, display: 'block', filter: white ? 'invert(1)' : 'none', transform: 'scaleX(-1)' }} />
    </span>
  );
}
