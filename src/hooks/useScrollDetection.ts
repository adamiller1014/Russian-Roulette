import { useState, useCallback, useRef, useEffect } from 'react';

export const useScrollDetection = () => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isLastItemVisible, setIsLastItemVisible] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    parentRef.current?.scrollTo({ top: parentRef.current.scrollHeight, behavior: 'smooth' });
  }, []);

  const handleScroll = useCallback(() => {
    const element = parentRef.current;
    if (element) {
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsLastItemVisible(entry.isIntersecting),
      { threshold: 0.5, root: parentRef.current }
    );

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { parentRef, lastItemRef, isOverflowing, isLastItemVisible, scrollToBottom };
};