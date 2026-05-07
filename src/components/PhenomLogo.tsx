export const PhenomLogo = ({ className = "w-8 h-8", color = "#7c3aed" }: { className?: string; color?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Human-designed geometric "P" logo */}
      {/* A modern, architectural interpretation of P and L (Phenom Labs) */}
      <path 
        d="M30 20V80M30 20H60C75 20 75 45 60 45H30" 
        stroke={color} 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M45 45L75 80" 
        stroke={color} 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.6"
      />
      {/* Subtle geometric accent */}
      <circle cx="30" cy="20" r="6" fill="white" />
    </svg>
  );
};

export const PhenomIcon = ({ className = "w-6 h-6", color = "#7c3aed" }: { className?: string; color?: string }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M7 4V20M7 4H14C17.5 4 17.5 10 14 10H7" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M10 10L17 20" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        opacity="0.5"
      />
    </svg>
  );
};
