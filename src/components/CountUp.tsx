import { useEffect, useState, useRef, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUp = ({ end, duration = 1200, prefix = '', suffix = '' }: CountUpProps) => {
  const [value, setValue] = useState(0);
  const { ref, isInView } = useScrollAnimation();
  const hasAnimated = useRef(false);

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animate = useCallback(() => {
    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setValue(Math.round(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, prefersReducedMotion]);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      animate();
    }
  }, [isInView, animate]);

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  );
};

export default CountUp;
