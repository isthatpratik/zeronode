import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const CountUp = ({
  end,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) => {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.5,
    rootMargin: '50px'
  });
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  // Format the number with commas and decimals
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  };

  useEffect(() => {
    // Don't animate if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setValue(end);
      return;
    }
    
    if (inView) {
      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }
        
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = progress * end;
        
        setValue(currentValue);
        
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };
      
      frameRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {prefix}{formatNumber(value)}{suffix}
    </span>
  );
};

export default CountUp;
