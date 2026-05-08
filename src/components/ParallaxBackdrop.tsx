import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import './ParallaxBackdrop.scss';

interface ParallaxBackdropProps {
  image: string;
  alt?: string;
  tint?: 'dark' | 'mid';
  range?: number;
  objectPosition?: string;
}

const ParallaxBackdrop = ({
  image,
  alt = '',
  tint = 'dark',
  range = 80,
  objectPosition = 'center',
}: ParallaxBackdropProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div ref={ref} className="parallax-backdrop" aria-hidden="true">
      <motion.div className="parallax-backdrop__image-wrap" style={{ y }}>
        <img
          src={image}
          alt={alt}
          className="parallax-backdrop__image"
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
        />
      </motion.div>
      <div className={`parallax-backdrop__tint parallax-backdrop__tint--${tint}`} />
    </div>
  );
};

export default ParallaxBackdrop;
