import type { CSSProperties } from 'react';
import './ParallaxBackdrop.scss';

interface ParallaxBackdropProps {
  image: string;
  tint?: 'light' | 'mid' | 'dark';
  objectPosition?: string;
}

const ParallaxBackdrop = ({
  image,
  tint = 'mid',
  objectPosition = 'center',
}: ParallaxBackdropProps) => {
  const style = {
    '--backdrop-image': `url(${image})`,
    '--backdrop-position': objectPosition,
  } as CSSProperties;

  return (
    <div className="parallax-backdrop" aria-hidden="true" style={style}>
      <div className="parallax-backdrop__image" />
      <div className={`parallax-backdrop__tint parallax-backdrop__tint--${tint}`} />
    </div>
  );
};

export default ParallaxBackdrop;
