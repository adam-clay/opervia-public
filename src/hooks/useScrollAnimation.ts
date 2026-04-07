import { useInView, type UseInViewOptions } from 'motion/react';
import { useRef } from 'react';

export function useScrollAnimation(options?: { once?: boolean; margin?: UseInViewOptions['margin']; amount?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? '-80px',
    amount: options?.amount ?? 0.2,
  });

  return { ref, isInView };
}
