import React from 'react'

interface LauCamLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function LauCamLogo({ className = '', size = 'md' }: LauCamLogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-24',
    md: 'h-12 w-36',
    lg: 'h-16 w-48',
    xl: 'h-20 w-60'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 320 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Yellow background */}
        <rect x="0" y="0" width="320" height="100" fill="#FFD700" />
        
        {/* Street lamp post - vertical white rectangle, thicker at bottom */}
        <rect x="30" y="40" width="4" height="35" fill="white" />
        <rect x="28" y="70" width="8" height="5" fill="white" />
        
        {/* Lamp arm - horizontal then angled down */}
        <rect x="30" y="40" width="20" height="4" fill="white" />
        <rect x="48" y="40" width="4" height="12" fill="white" transform="rotate(45 50 46)" />
        
        {/* Lamp fixture - white oval */}
        <ellipse cx="52" cy="48" rx="10" ry="5" fill="white" />
        
        {/* Light beam - conical beam from fixture */}
        <defs>
          <radialGradient id="lightBeam" cx="0.5" cy="0.8" r="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FFD700" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.4" />
          </radialGradient>
        </defs>
        <path d="M 42 48 Q 52 38 62 48 Q 52 65 42 48" fill="url(#lightBeam)" />
        
        {/* LAU-CAM text - positioned under the light beam */}
        <text
          x="75"
          y="55"
          fontSize="32"
          fontWeight="bold"
          fill="#1E3A8A"
          fontFamily="Arial, sans-serif"
        >
          LAU-CAM
        </text>
        
        {/* Tecnología en iluminación text */}
        <text
          x="75"
          y="75"
          fontSize="16"
          fill="#1E3A8A"
          fontFamily="Arial, sans-serif"
        >
          Tecnología en iluminación
        </text>
        
        {/* Decorative dotted pattern in bottom right - 10x10 grid */}
        <g transform="translate(270, 60)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#1E3A8A" strokeWidth="1" />
          {/* 10x10 grid of dots */}
          <circle cx="4" cy="4" r="1" fill="#1E3A8A" />
          <circle cx="8" cy="4" r="1" fill="#1E3A8A" />
          <circle cx="12" cy="4" r="1" fill="#1E3A8A" />
          <circle cx="16" cy="4" r="1" fill="#1E3A8A" />
          <circle cx="20" cy="4" r="1" fill="#1E3A8A" />
          <circle cx="24" cy="4" r="1" fill="#1E3A8A" />
          <circle cx="28" cy="4" r="1" fill="#1E3A8A" />
          <circle cx="32" cy="4" r="1" fill="#1E3A8A" />
          <circle cx="36" cy="4" r="1" fill="#1E3A8A" />
          <circle cx="4" cy="8" r="1" fill="#1E3A8A" />
          <circle cx="8" cy="8" r="1" fill="#1E3A8A" />
          <circle cx="12" cy="8" r="1" fill="#1E3A8A" />
          <circle cx="16" cy="8" r="1" fill="#1E3A8A" />
          <circle cx="20" cy="8" r="1" fill="#1E3A8A" />
          <circle cx="24" cy="8" r="1" fill="#1E3A8A" />
          <circle cx="28" cy="8" r="1" fill="#1E3A8A" />
          <circle cx="32" cy="8" r="1" fill="#1E3A8A" />
          <circle cx="36" cy="8" r="1" fill="#1E3A8A" />
          <circle cx="4" cy="12" r="1" fill="#1E3A8A" />
          <circle cx="8" cy="12" r="1" fill="#1E3A8A" />
          <circle cx="12" cy="12" r="1" fill="#1E3A8A" />
          <circle cx="16" cy="12" r="1" fill="#1E3A8A" />
          <circle cx="20" cy="12" r="1" fill="#1E3A8A" />
          <circle cx="24" cy="12" r="1" fill="#1E3A8A" />
          <circle cx="28" cy="12" r="1" fill="#1E3A8A" />
          <circle cx="32" cy="12" r="1" fill="#1E3A8A" />
          <circle cx="36" cy="12" r="1" fill="#1E3A8A" />
          <circle cx="4" cy="16" r="1" fill="#1E3A8A" />
          <circle cx="8" cy="16" r="1" fill="#1E3A8A" />
          <circle cx="12" cy="16" r="1" fill="#1E3A8A" />
          <circle cx="16" cy="16" r="1" fill="#1E3A8A" />
          <circle cx="20" cy="16" r="1" fill="#1E3A8A" />
          <circle cx="24" cy="16" r="1" fill="#1E3A8A" />
          <circle cx="28" cy="16" r="1" fill="#1E3A8A" />
          <circle cx="32" cy="16" r="1" fill="#1E3A8A" />
          <circle cx="36" cy="16" r="1" fill="#1E3A8A" />
          <circle cx="4" cy="20" r="1" fill="#1E3A8A" />
          <circle cx="8" cy="20" r="1" fill="#1E3A8A" />
          <circle cx="12" cy="20" r="1" fill="#1E3A8A" />
          <circle cx="16" cy="20" r="1" fill="#1E3A8A" />
          <circle cx="20" cy="20" r="1" fill="#1E3A8A" />
          <circle cx="24" cy="20" r="1" fill="#1E3A8A" />
          <circle cx="28" cy="20" r="1" fill="#1E3A8A" />
          <circle cx="32" cy="20" r="1" fill="#1E3A8A" />
          <circle cx="36" cy="20" r="1" fill="#1E3A8A" />
          <circle cx="4" cy="24" r="1" fill="#1E3A8A" />
          <circle cx="8" cy="24" r="1" fill="#1E3A8A" />
          <circle cx="12" cy="24" r="1" fill="#1E3A8A" />
          <circle cx="16" cy="24" r="1" fill="#1E3A8A" />
          <circle cx="20" cy="24" r="1" fill="#1E3A8A" />
          <circle cx="24" cy="24" r="1" fill="#1E3A8A" />
          <circle cx="28" cy="24" r="1" fill="#1E3A8A" />
          <circle cx="32" cy="24" r="1" fill="#1E3A8A" />
          <circle cx="36" cy="24" r="1" fill="#1E3A8A" />
          <circle cx="4" cy="28" r="1" fill="#1E3A8A" />
          <circle cx="8" cy="28" r="1" fill="#1E3A8A" />
          <circle cx="12" cy="28" r="1" fill="#1E3A8A" />
          <circle cx="16" cy="28" r="1" fill="#1E3A8A" />
          <circle cx="20" cy="28" r="1" fill="#1E3A8A" />
          <circle cx="24" cy="28" r="1" fill="#1E3A8A" />
          <circle cx="28" cy="28" r="1" fill="#1E3A8A" />
          <circle cx="32" cy="28" r="1" fill="#1E3A8A" />
          <circle cx="36" cy="28" r="1" fill="#1E3A8A" />
          <circle cx="4" cy="32" r="1" fill="#1E3A8A" />
          <circle cx="8" cy="32" r="1" fill="#1E3A8A" />
          <circle cx="12" cy="32" r="1" fill="#1E3A8A" />
          <circle cx="16" cy="32" r="1" fill="#1E3A8A" />
          <circle cx="20" cy="32" r="1" fill="#1E3A8A" />
          <circle cx="24" cy="32" r="1" fill="#1E3A8A" />
          <circle cx="28" cy="32" r="1" fill="#1E3A8A" />
          <circle cx="32" cy="32" r="1" fill="#1E3A8A" />
          <circle cx="36" cy="32" r="1" fill="#1E3A8A" />
          <circle cx="4" cy="36" r="1" fill="#1E3A8A" />
          <circle cx="8" cy="36" r="1" fill="#1E3A8A" />
          <circle cx="12" cy="36" r="1" fill="#1E3A8A" />
          <circle cx="16" cy="36" r="1" fill="#1E3A8A" />
          <circle cx="20" cy="36" r="1" fill="#1E3A8A" />
          <circle cx="24" cy="36" r="1" fill="#1E3A8A" />
          <circle cx="28" cy="36" r="1" fill="#1E3A8A" />
          <circle cx="32" cy="36" r="1" fill="#1E3A8A" />
          <circle cx="36" cy="36" r="1" fill="#1E3A8A" />
        </g>
      </svg>
    </div>
  )
}
