import React from 'react';
import Icon from '../../../shared/Icon';

interface TopWinnersHeaderProps {
  onSort?: () => void;
}

const TopWinnersHeader: React.FC<TopWinnersHeaderProps> = React.memo(({ onSort }) => (
  <button
    onClick={onSort}
    className="
      bg-[#2C3137] w-full rounded-tr-lg
      flex justify-center items-center
      text-white text-base sm:text-lg md:text-xl
      h-[6.15rem] sm:h-[6.15rem] md:h-[6.15rem]
      py-2 sm:py-3 md:py-4
      transition-colors duration-200 ease-in-out
      hover:bg-[#3A4149] focus:outline-none focus:ring-2 focus:ring-yellow-400
    "
  >
    <span className="mr-2">TOP WINNERS (24 HR)</span>
    <Icon
      name="sortArrowDown"
      color="white"
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
      aria-hidden="true"
    />
  </button>
));

TopWinnersHeader.displayName = 'TopWinnersHeader';

export default TopWinnersHeader;