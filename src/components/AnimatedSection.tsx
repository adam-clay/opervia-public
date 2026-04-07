import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  distance?: number;
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 50,
}: AnimatedSectionProps) => {
  const { ref, isInView } = useScrollAnimation();

  const initialPosition = {
    up: { y: distance, x: 0 },
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initialPosition }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialPosition }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
