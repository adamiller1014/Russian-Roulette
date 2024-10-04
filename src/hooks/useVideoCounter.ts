import { useState, useRef, useCallback, useEffect } from 'react';
import { useMain } from '../providers/MainProvider';

export const useVideoCounter = () => {
  const { isPlaying } = useMain();
  const [counter, setCounter] = useState(0);
  const [isShowVideo, setIsShowVideo] = useState(true);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  const playVideo = useCallback(async () => {
    try {
      const video = document.querySelector('video');
      if (video) {
        video.setAttribute('src', '/video/shooting.mp4');
        video.load();
        video.style.visibility = 'visible';
        await video.play();
        setTimeout(() => setIsShowVideo(true), 2500);
      }
    } catch (error) {
      console.error('Failed to play video:', error);
    }
  }, []);

  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== null) {
      const deltaTime = time - previousTimeRef.current;
      setCounter(prev => Math.max(prev - deltaTime / 1000, 0));
    }
    previousTimeRef.current = time;
    if (counter > 0) {
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [counter]);

  useEffect(() => {
    if (isPlaying && counter <= 0) {
      setCounter(3);
      setIsShowVideo(false);
      previousTimeRef.current = null;
    }
  }, [isPlaying]);

  useEffect(() => {
    if (counter <= 0) {
      if (!isShowVideo) {
        playVideo();
      }
      return;
    }

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [counter, isShowVideo, playVideo, animate]);

  return { counter, isShowVideo, playVideo };
};