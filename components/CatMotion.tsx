export default function CatMotion({ size = 56 }: { size?: number }) {
  return (
    <svg
      className="cat-motion flex-shrink-0"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Gatinho olhando ao redor"
    >
      <g className="cat-head">
        {/* ears */}
        <path className="cat-ear cat-ear-left" d="M12 30 L14 8 L30 20 Z" fill="var(--bs-primary)" />
        <path className="cat-ear cat-ear-right" d="M52 30 L50 8 L34 20 Z" fill="var(--bs-primary)" />
        <path d="M16 27 L17 14 L27 21 Z" fill="#1F2A2E" opacity="0.35" />
        <path d="M48 27 L47 14 L37 21 Z" fill="#1F2A2E" opacity="0.35" />
        {/* head */}
        <ellipse cx="32" cy="38" rx="22" ry="20" fill="var(--bs-primary)" />
        {/* eyes */}
        <g className="cat-eyes">
          <g className="cat-eye">
            <ellipse cx="23" cy="36" rx="6" ry="6.5" fill="#FFFFFF" />
            <g className="cat-pupil">
              <ellipse cx="23" cy="36" rx="2.6" ry="4.6" fill="#1F2A2E" />
              <circle cx="24" cy="34" r="1" fill="#FFFFFF" />
            </g>
          </g>
          <g className="cat-eye">
            <ellipse cx="41" cy="36" rx="6" ry="6.5" fill="#FFFFFF" />
            <g className="cat-pupil">
              <ellipse cx="41" cy="36" rx="2.6" ry="4.6" fill="#1F2A2E" />
              <circle cx="42" cy="34" r="1" fill="#FFFFFF" />
            </g>
          </g>
        </g>
        {/* nose and mouth */}
        <path d="M30 44 L34 44 L32 47 Z" fill="#1F2A2E" />
        <path d="M32 47 Q29 50 26.5 48" stroke="#1F2A2E" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M32 47 Q35 50 37.5 48" stroke="#1F2A2E" strokeWidth="1.4" strokeLinecap="round" />
        {/* whiskers */}
        <g stroke="#1F2A2E" strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
          <path d="M8 42 L19 44" />
          <path d="M8 48 L19 47" />
          <path d="M56 42 L45 44" />
          <path d="M56 48 L45 47" />
        </g>
      </g>
    </svg>
  );
}
