import './SectionDivider.scss';

interface SectionDividerProps {
  type: 'angle' | 'wave' | 'curve';
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}

const SectionDivider = ({ type, fromColor = '#ffffff', toColor = '#1e3a5f', flip = false }: SectionDividerProps) => {
  const style = flip ? { transform: 'rotate(180deg)' } : {};

  if (type === 'wave') {
    return (
      <div className="section-divider" style={style}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,120 720,0 1080,80 C1260,110 1380,60 1440,40 L1440,120 L0,120 Z"
            fill={toColor}
          />
          <path
            d="M0,0 L0,40 C360,120 720,0 1080,80 C1260,110 1380,60 1440,40 L1440,0 Z"
            fill={fromColor}
          />
        </svg>
      </div>
    );
  }

  if (type === 'curve') {
    return (
      <div className="section-divider" style={style}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z" fill={toColor} />
          <path d="M0,0 L0,80 Q720,0 1440,80 L1440,0 Z" fill={fromColor} />
        </svg>
      </div>
    );
  }

  // angle
  return (
    <div className="section-divider" style={style}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,0 1440,0 1440,40 0,80" fill={fromColor} />
        <polygon points="0,80 1440,40 1440,80 0,80" fill={toColor} />
      </svg>
    </div>
  );
};

export default SectionDivider;
