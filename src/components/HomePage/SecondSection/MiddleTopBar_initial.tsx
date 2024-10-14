import React, { useEffect, useState, useRef, useCallback } from 'react';
import Media from '../../../shared/Media';
import ColorBox from './ColorBox';
import LogoImg from '../../../assets/images/logo.svg';
import { useMain } from '../../../providers/MainProvider';
import AmmoItem from './AmmoItem';

const MiddleTopBar: React.FC = () => {
  const { isPlaying, setIsPlaying } = useMain();
  const [animation, setAnimation] = useState('');
  const [ammoes, setAmmoes] = useState(0);
  const rollItemsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalMovement, setTotalMovement] = useState(0);
  const [colorBoxes, setColorBoxes] = useState<React.ReactNode[]>([]);
  const [uniqueKeyCounter, setUniqueKeyCounter] = useState(0);
  const isAnimatingRef = useRef(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const ROLL_ANIMATION_DURATION_MS = 4000;
  const NEW_ITEMS_TO_ADD = 25;
  const INITIAL_ITEMS_COUNT = NEW_ITEMS_TO_ADD;

  const generateRandomMultiplier = useCallback(() => {
    const randomUint32Value = crypto.getRandomValues(new Uint32Array(1))[0];
    const MIN_MULTIPLIER = 1.5;
    const BASE_MEDIAN_MULTIPLIER = 1.5;
    const MAX_32_BIT_UNSIGNED_INTEGER = 2 ** 32;
    const calculatedMultiplier = Math.max(MIN_MULTIPLIER, (MAX_32_BIT_UNSIGNED_INTEGER / (randomUint32Value + 1)) * BASE_MEDIAN_MULTIPLIER);
    return Number(calculatedMultiplier.toFixed(2));
  }, []);

  const getMultiplierColor = useCallback((multiplierValue: number) => {
    if (multiplierValue < 15) return '#FFFFFF'; // white
    if (multiplierValue < 50) return '#3498db'; // blue
    if (multiplierValue < 150) return '#9b59b6'; // purple
    return '#F8BF60'; // gold
  }, []);

  const initializeItems = useCallback(() => {
    const newItems = Array.from({ length: INITIAL_ITEMS_COUNT }, () => {
      const multiplier = generateRandomMultiplier();
      return {
        text: multiplier.toString(),
        color: getMultiplierColor(multiplier),
        isBonus: false,
      };
    });

    setColorBoxes(newItems.map((item, index) => (
      <ColorBox 
        key={`initial-${index}`}
        isBonus={item.isBonus}
        text={item.text}
        color={item.color}
        onWidthChange={(width) => {
          if (index === 0) setItemWidth(width);
        }}
      />
    )));
  }, [generateRandomMultiplier, getMultiplierColor]);

  const playRoll = useCallback(() => {
    if (isAnimatingRef.current) return;


    const newItems = Array.from({ length: NEW_ITEMS_TO_ADD }, (_, index) => {
      const multiplier = generateRandomMultiplier();
      return {
        text: multiplier.toString(),
        color: getMultiplierColor(multiplier),
        isBonus: index === 0,
      };
    });

    const landingIndex = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * NEW_ITEMS_TO_ADD);

    const existingItemsCount = rollItemsRef.current?.children.length || 0;
    const totalItems = existingItemsCount + NEW_ITEMS_TO_ADD;
    const centerOffset = containerWidth / 2;
    const itemsBeforeCenterLine = Math.floor(totalItems / 2);
    const targetPosition = (itemsBeforeCenterLine + landingIndex + 0.5) * itemWidth - centerOffset;

    if (rollItemsRef.current) {
      rollItemsRef.current.style.transition = `transform ${ROLL_ANIMATION_DURATION_MS}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
      rollItemsRef.current.style.transform = `translate3d(-${targetPosition}px, 0, 0)`;
    }

    const newColorBoxes = newItems.map((item, index) => (
      <ColorBox 
        key={`new-${uniqueKeyCounter + index}`}
        isBonus={item.isBonus}
        text={item.text}
        color={item.color}
        isLandingMultiplier={index === landingIndex}
        onWidthChange={(width) => {
          if (index === 0) setItemWidth(width);
        }}
      />
    ));
    isAnimatingRef.current = true;
    setAnimation('rolling');
    setAmmoes(0);

    setColorBoxes(prevBoxes => [...prevBoxes, ...newColorBoxes]);
    setUniqueKeyCounter(prevCounter => prevCounter + NEW_ITEMS_TO_ADD);

    setTimeout(() => {
      setAnimation('');
      setTotalMovement(targetPosition);
      setAmmoes(1);
      
      if (rollItemsRef.current) {
        const children = Array.from(rollItemsRef.current.children);
        const itemsToKeep = NEW_ITEMS_TO_ADD * 2;
        const itemsToRemove = children.slice(0, -itemsToKeep);
        itemsToRemove.forEach(item => item.remove());
        
        const newPosition = targetPosition - itemsToRemove.length * itemWidth;
        rollItemsRef.current.style.transition = 'none';
        rollItemsRef.current.style.transform = `translate3d(-${newPosition}px, 0, 0)`;
        setTotalMovement(newPosition);
        setColorBoxes(prevBoxes => prevBoxes.slice(-itemsToKeep));
      }

      setTimeout(() => {
        setIsPlaying(false);
        isAnimatingRef.current = false;
      }, 1000);
    }, ROLL_ANIMATION_DURATION_MS);
  }, [generateRandomMultiplier, getMultiplierColor, setIsPlaying, uniqueKeyCounter, itemWidth, containerWidth, NEW_ITEMS_TO_ADD]);

  useEffect(() => {
    initializeItems();
  }, [initializeItems]);

  useEffect(() => {
    if (isPlaying && animation === '') {
      playRoll();
    }
  }, [isPlaying, animation, playRoll]);

  useEffect(() => {
    if (ammoes > 0 && ammoes < 4) {
      setTimeout(() => {
        setAmmoes(prev => prev + 1);
      }, 50);
    }
  }, [ammoes]);

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          setContainerWidth(entry.contentRect.width);
        }
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <div className="bg-[#2c3137] flex items-center h-fit py-4">
      <Media
        type="image"
        link={LogoImg}
        className="h-auto !w-[100%] !static"
        containerClasses="flex-none h-auto w-[4rem] xl:w-[10rem] lg:w-[5rem] md:w-[4rem] justify-center md:flex items-center ml-4 mr-2"
      />
      <div 
        ref={containerRef} 
        className="md:p-0 py-[0.5rem] px-[0.5rem] overflow-hidden xl:w-[calc(100%-212px)] md:w-[calc(100%-127.2px)] lg:w-[calc(100%-169.6px)] w-full relative"
      >
        <div className="relative flex justify-center overflow-hidden">
          <div className="absolute top-0 bottom-0 left-1/2 w-[5px] bg-black opacity-30 z-10 transform -translate-x-1/2"></div>
          <div 
            ref={rollItemsRef} 
            className={`md:h-[4.12rem] h-[25px] flex ${animation === 'rolling' ? 'w-[200%]' : 'w-fit'} gap-1`}
            style={{
              transform: `translate3d(-${totalMovement}px, 0, 0)`,
              transition: animation === 'rolling' ? `transform ${ROLL_ANIMATION_DURATION_MS}ms cubic-bezier(0.25, 0.1, 0.25, 1)` : 'none',
              willChange: 'transform',
            }}
          >
            <ColorBox isBonus={false} text={'200.25'} color="#af60f8" onWidthChange={setItemWidth} />
            <ColorBox isBonus={false} text={'25.55'} color="#2cabd9" />
            <ColorBox isBonus={true} text={'7,777.77'} color="#f8bf60" />
            <ColorBox isBonus={false} text={'7.25'} color="white" />
            <ColorBox isBonus={false} text={'75.84'} color="#298854" />
            <ColorBox isBonus={false} text={'1.75'} color="white" />
            <ColorBox isBonus={false} text={'75.84'} color="#298854" />
            <ColorBox isBonus={false} text={'200.25'} color="#af60f8" />
            <ColorBox isBonus={false} text={'25.55'} color="#2cabd9" />
            <ColorBox isBonus={true} text={'7,777.77'} color="#f8bf60" />
            {colorBoxes}
          </div>
        </div>
      </div>
      <div className="flex-none h-[auto] md:h-[4rem] px-[0.5rem] gap-[0.5rem] py-[0.5rem] justify-center 
                   md:flex grid grid-cols-6 items-center mx-2 ">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <AmmoItem key={i} isFull={ammoes > i} />
        ))}
      </div>
    </div>
  );
};

export default MiddleTopBar;