'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const LazyImage = ({
  src,
  alt,
  className = '',
  priority = false,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [isInView, setIsInView] = useState(priority);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '50px' }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-gray-200 ${className}`}>
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      )}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </div>
  );
};

export default LazyImage;
