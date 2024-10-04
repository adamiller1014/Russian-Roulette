import { useState } from 'react';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import DropDownButton from '../../UserStatsPage/DropDownButton';
import Icon from '../../../shared/Icon';

const CoinSelection = ({ classNames = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const coins = ['BTC', 'ETH', 'DAI'];

  const getIconName = (): "bitcoin" => {
    // Always return "bitcoin" regardless of the coin
    return "bitcoin";
  };

  return (
    <div className="flex flex-col relative">
      <DropDownButton
        isRevertIcon={false}
        className={`!bg-[#1c2127] !px-4 !justify-between gap-2 rounded-md h-14 ${classNames}`}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        <div className="flex items-center gap-2">
          <Icon name={getIconName()} size={20} color="#f8bf60" raw />
          <span>{coins[currentIndex]}</span>
        </div>
      </DropDownButton>
      <div
        className={`${
          isVisible ? '' : 'hidden'
        } rounded-lg z-50 absolute top-full mt-2 bg-[#2c3137] w-full shadow-2xl`}
      >
        <ScrollableComponent className="max-h-40vh">
          {coins.length > 0
            ? coins.map((coin, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsVisible(false);
                  }}
                  className="h-10 hover:bg-[#171c22] border-[#171c22] w-full flex items-center justify-start px-4 text-1rem"
                >
                  <Icon name={getIconName()} size={20} color="#f8bf60" raw />
                  <span className="ml-2">{coin}</span>
                </button>
              ))
            : null}
        </ScrollableComponent>
      </div>
    </div>
  );
};

export default CoinSelection;
