import './CircuitPattern.scss';

interface CircuitPatternProps {
  variant?: 'light' | 'dark';
}

const CircuitPattern = ({ variant = 'dark' }: CircuitPatternProps) => {
  const strokeColor = variant === 'dark'
    ? 'rgba(46, 204, 64, 0.07)'
    : 'rgba(30, 58, 95, 0.045)';
  const glowColor = variant === 'dark'
    ? 'rgba(46, 204, 64, 0.2)'
    : 'rgba(22, 175, 0, 0.15)';
  const nodeColor = variant === 'dark'
    ? 'rgba(46, 204, 64, 0.12)'
    : 'rgba(22, 175, 0, 0.08)';

  return (
    <div className={`circuit-pattern circuit-pattern--${variant}`} aria-hidden="true">
      {/* Top-left corner cluster */}
      <svg className="circuit-corner circuit-corner--tl" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={`glow-tl-${variant}`}>
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path d="M-20,350 L80,250 L80,150 L160,70" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <path d="M-20,280 L50,210 L50,120 L120,50 L120,-20" stroke={strokeColor} strokeWidth="1" fill="none" />
        <path d="M30,400 L130,300 L130,180 L200,110" stroke={strokeColor} strokeWidth="1" fill="none" />
        <path d="M80,150 L130,150" stroke={strokeColor} strokeWidth="1" fill="none" />
        <g filter={`url(#glow-tl-${variant})`}>
          <circle cx="80" cy="150" r="3" fill={glowColor} />
          <circle cx="160" cy="70" r="2.5" fill={glowColor} />
          <circle cx="50" cy="120" r="2" fill={glowColor} />
          <circle cx="130" cy="300" r="2" fill={glowColor} />
        </g>
        <circle cx="80" cy="150" r="5" fill="none" stroke={nodeColor} strokeWidth="1" />
        <circle r="2" fill={glowColor}>
          <animateMotion dur="5s" repeatCount="indefinite" path="M-20,350 L80,250 L80,150 L160,70" />
        </circle>
      </svg>

      {/* Bottom-right corner cluster */}
      <svg className="circuit-corner circuit-corner--br" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={`glow-br-${variant}`}>
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path d="M420,350 L320,250 L320,150 L240,70" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <path d="M420,280 L350,210 L350,130 L280,60 L280,-20" stroke={strokeColor} strokeWidth="1" fill="none" />
        <path d="M370,400 L270,300 L270,200 L200,130" stroke={strokeColor} strokeWidth="1" fill="none" />
        <path d="M320,150 L270,150" stroke={strokeColor} strokeWidth="1" fill="none" />
        <g filter={`url(#glow-br-${variant})`}>
          <circle cx="320" cy="150" r="3" fill={glowColor} />
          <circle cx="240" cy="70" r="2.5" fill={glowColor} />
          <circle cx="350" cy="130" r="2" fill={glowColor} />
          <circle cx="270" cy="300" r="2" fill={glowColor} />
        </g>
        <circle cx="320" cy="150" r="5" fill="none" stroke={nodeColor} strokeWidth="1" />
        <circle r="2" fill={glowColor}>
          <animateMotion dur="6s" repeatCount="indefinite" path="M420,350 L320,250 L320,150 L240,70" />
        </circle>
      </svg>
    </div>
  );
};

export default CircuitPattern;
