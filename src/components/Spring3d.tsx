

/**
 * Spring3D
 * A React component that renders an SVG stylized 3D coil/spring with a matte pink-indigo gradient.
 * Props:
 *  - width, height: control size (defaults to 320x320)
 *  - className: optional className applied to the <svg>
 */
export default function Spring3D({ width = 320, height = 320, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 320"
      role="img"
      aria-label="Matte pink-indigo 3D coil spring"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        {/* Soft radial background to suggest diffused lighting */}
        <radialGradient id="bg" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#f7f6fb" />
          <stop offset="100%" stopColor="#efedf6" />
        </radialGradient>

        {/* Stroke gradient along the coil */}
        <linearGradient id="coilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7ab6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#5b21b6" />
        </linearGradient>

        {/* Slight darker gradient for underside/shadow */}
        <linearGradient id="coilShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cc5a9a" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3b165f" stopOpacity="0.9" />
        </linearGradient>

        {/* Soft outer shadow */}
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
          <feOffset in="blur" dx="0" dy="6" result="offset" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner subtle bevel effect to mimic matte shading */}
        <filter id="innerBevel" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur2" />
          <feSpecularLighting in="blur2" surfaceScale="2" specularConstant="0.3" specularExponent="10" result="spec">
            <fePointLight x="-200" y="-200" z="400" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Stroke that will be used to create a secondary thin highlight */}
        <linearGradient id="highlight" x1="0%" y1="0%" x2="100%" y2="40%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="100%" height="100%" fill="url(#bg)" />

      {/* Group center */}
      <g transform="translate(40,20)" filter="url(#softShadow)">
        {/* We'll draw multiple stroked paths layered to suggest depth of a coil.
            The paths are handcrafted approximations of a 3D coil viewed at an angle.
        */}

        {/* Dark thicker base stroke (underside) */}
        <path
          d="M20,250
             C60,200 100,180 140,180
             C180,180 220,200 260,250
             M20,220
             C60,170 100,150 140,150
             C180,150 220,170 260,220
             M20,190
             C60,140 100,120 140,120
             C180,120 220,140 260,190
             M20,160
             C60,110 100,90 140,90
             C180,90 220,110 260,160"
          fill="none"
          stroke="url(#coilShadow)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
          strokeLinejoin="round"
        />

        {/* Main colored coil stroke (matte) */}
        <path
          d="M20,250
             C60,200 100,180 140,180
             C180,180 220,200 260,250
             M20,220
             C60,170 100,150 140,150
             C180,150 220,170 260,220
             M20,190
             C60,140 100,120 140,120
             C180,120 220,140 260,190
             M20,160
             C60,110 100,90 140,90
             C180,90 220,110 260,160"
          fill="none"
          stroke="url(#coilGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#innerBevel)"
        />

        {/* Thin highlight to give a subtle 3D contour */}
        <path
          d="M20,250
             C60,200 100,180 140,180
             C180,180 220,200 260,250
             M20,220
             C60,170 100,150 140,150
             C180,150 220,170 260,220
             M20,190
             C60,140 100,120 140,120
             C180,120 220,140 260,190
             M20,160
             C60,110 100,90 140,90
             C180,90 220,110 260,160"
          fill="none"
          stroke="url(#highlight)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* Soft subtle shadow under the coil to ground it */}
        <ellipse cx="140" cy="270" rx="95" ry="10" fill="#000" opacity="0.08" />
      </g>

      {/* Small caption-friendly drop shadow outside SVG (keeps composition modern) */}
      <rect x="0" y="0" width="100%" height="100%" fill="none" />
    </svg>
  );
}
