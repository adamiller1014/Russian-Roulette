import React, { FC, memo, useRef, useEffect } from 'react';

interface ColorBoxProps {
  isBonus: boolean;
  text: string;
  color: string;
  containerClass?: string;
  className?: string;
  onWidthChange?: (width: number) => void;
  isLandingMultiplier?: boolean;  // We'll keep this prop but won't use it for highlighting
}

const ColorBox: FC<ColorBoxProps> = memo(({
  isBonus,
  color,
  containerClass = '',
  className = '',
  text,
  onWidthChange,
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current && onWidthChange) {
      onWidthChange(boxRef.current.offsetWidth);
    }
  }, [onWidthChange]);

  const containerClasses = [
    'flex flex-col justify-center items-center md:h-[4.12rem] h-[25px] md:px-[0.5rem] px-[0.25rem] rounded-[0.25rem]',
    containerClass
  ].join(' ');

  return (
    <div
      ref={boxRef}
      className={containerClasses}
      style={{ 
        backgroundColor: color, 
        color: '#1C2127',
        width: 'auto',
        minWidth: 'min-content'
      }}
    >
      {isBonus && (
        <div className="justify-center flex text-[1rem] font-bold" style={{ fontFamily: 'Montserrat-bold' }}>
          BONUS
        </div>
      )}
      <span
        className={`text-center whitespace-nowrap text-[2.5rem] xs:text-base 4xl:text-4xl font-bold ${className}`}
        style={{
          fontFamily: 'Montserrat-bold',
          lineHeight: '1',
        }}
      >
        x{text}
      </span>
    </div>
  );
});

export default ColorBox;