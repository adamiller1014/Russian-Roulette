/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import './ReelAnimation.css';
import Media from '../../../shared/Media';
import LogoImg from '../../../assets/images/logo.svg';
import { useMain } from '../../../providers/MainProvider';
import AmmoItem from './AmmoItem';

const ReelAnimation: React.FC = () => {
  const rollItemsRef = useRef<HTMLDivElement>(null);
  const rollContainerRef = useRef<HTMLDivElement>(null);
  const [isRolling, setIsRolling] = useState(false);

  const { isPlaying, setIsPlaying } = useMain();
  const [ammoes, setAmmoes] = useState(0);

  useEffect(() => {
    if (ammoes > 0 && ammoes < 4) {
      setTimeout(() => {
        setAmmoes((prev) => prev + 1);
      }, 50);
    }
  }, [ammoes]);

  const DURATION = 4000;
  const INITIAL_ITEMS = 50;
  const ITEMS_TO_ADD = 25;
  const BASE_MEDIAN_MULTIPLIER = 1.5;

  const generateMultiplier = (): number => {
    const roll = crypto.getRandomValues(new Uint32Array(1))[0];
    const result = Math.max(1.5, (2 ** 32 / (roll + 1)) * BASE_MEDIAN_MULTIPLIER);
    return Math.floor(result * 100) / 100;
  };

  const getMultiplierColor = (value: number): string => {
    if (value < 15) return 'multiplier-white';
    if (value < 50) return 'multiplier-blue';
    if (value < 150) return 'multiplier-purple';
    return 'multiplier-gold';
  };

  const formatMultiplier = (value: number): string => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const createItem = (isHighlight = false): HTMLElement => {
    const item = document.createElement('div');
    const multiplier = generateMultiplier();
    const colorClass = getMultiplierColor(multiplier);
    item.className = `item ${colorClass}${isHighlight ? ' highlight' : ''}`;
    item.textContent = 'x' + formatMultiplier(multiplier);
    item.setAttribute('aria-hidden', 'true');
    return item;
  };

  const initializeItems = () => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < INITIAL_ITEMS; i++) {
      fragment.appendChild(createItem());
    }
    rollItemsRef.current?.appendChild(fragment);
  };

  const addItems = () => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < ITEMS_TO_ADD; i++) {
      fragment.appendChild(createItem(i === 0));
    }
    rollItemsRef.current?.appendChild(fragment);
  };

  const animateRoll = () => {
    if (isRolling) return;
    setIsRolling(true);
    setIsPlaying(false);
    rollContainerRef.current?.setAttribute('aria-label', 'Roll in progress');

    addItems();
    const firstNewItem = rollItemsRef.current?.children[
      rollItemsRef.current.children.length - 3 - ITEMS_TO_ADD
    ] as HTMLElement;
    const itemOffset =
      firstNewItem.getBoundingClientRect().left - rollContainerRef.current!.getBoundingClientRect().left;

    rollItemsRef.current!.style.transform = `translate3d(${-itemOffset}px, 0, 0)`;

    setTimeout(() => {
      setIsRolling(false);
      setIsPlaying(false);
    }, DURATION);
  };

  const playRoll = () => {
    if (!isRolling) {
      animateRoll();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      console.log(isPlaying, 'isPlaying');
      playRoll();
      setAmmoes(0);
    }
  }, [isPlaying]);

  useEffect(() => {
    initializeItems();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isRolling) {
        e.preventDefault();
        playRoll();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRolling]);

  return (
    <div className="bg-[#2c3137] flex items-center h-fit md:py-4 py-1">
      <Media
        type="image"
        link={LogoImg}
        className="h-auto !w-[100%] !static"
        containerClasses="flex-none h-auto w-[4rem] xl:w-[10rem] lg:w-[5rem] md:w-[4rem] justify-center md:flex items-center ml-4 mr-2"
      />
    <section className="container" aria-labelledby="reel-title">
      <h2 id="reel-title" className="sr-only">
        Multiplier Reel
      </h2>
      <div
        className="roll-container"
        role="region"
        aria-live="polite"
        aria-atomic="true"
        ref={rollContainerRef}>
        <div className="center-line" aria-hidden="true"></div>
        <div className="roll-items" ref={rollItemsRef}></div>
      </div>
      
    </section>
    <div className="h-full px-[0.2rem] md:px-[0.5rem] md:gap-[0.5rem] gap-[0.2rem] py-[0.5rem] justify-center flex items-center mx-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <AmmoItem key={i} isFull={ammoes > i} />
          ))}
        </div>
    </div>
  );
};

export default ReelAnimation;
