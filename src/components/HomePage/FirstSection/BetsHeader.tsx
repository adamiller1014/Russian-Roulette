import React from 'react';

interface BetsHeaderProps {
  className?: string;
}

const BetsHeader: React.FC<BetsHeaderProps> = React.memo(({ className = '' }) => (
  <header 
    className={`
      bg-[#2c3137] w-full flex justify-center items-center
      h-24 sm:h-[6.15rem] md:h-32 lg:h-[6.15rem] xl:h-[6.15rem]
      text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
      font-bold text-white rounded-tl-lg py-4
      transition-all duration-300 ease-in-out
      ${className}
    `}
  >
    BETS
  </header>
));

BetsHeader.displayName = 'BetsHeader';

export default BetsHeader;