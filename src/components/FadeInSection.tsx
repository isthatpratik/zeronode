import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FadeInSection = ({ 
  children, 
  className = "", 
  delay = 0 
}: FadeInSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '100px'
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip animation if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || !sectionRef.current) {
      if (sectionRef.current) {
        sectionRef.current.style.opacity = '1';
        sectionRef.current.style.transform = 'translateY(0)';
      }
      return;
    }
    
    if (inView && sectionRef.current) {
      sectionRef.current.style.transitionDelay = `${delay}ms`;
      sectionRef.current.classList.add('animate-fade-up');
    }
  }, [inView, delay]);

  return (
    <div
      ref={(node) => {
        // Use both refs
        if (node) {
          ref(node);
          sectionRef.current = node;
        }
      }}
      className={`opacity-0 ${className}`}
      style={{
        willChange: 'opacity, transform',
        transform: 'translateY(20px)',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
