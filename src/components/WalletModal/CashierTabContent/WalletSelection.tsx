import { useState } from 'react';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import DropDownButton from '../../UserStatsPage/DropDownButton';
import Icon from '../../../shared/Icon';
import NumberProcess from '../../NumberProcess';

const WalletSelection = ({ type = 'bitcoin' }: { type: 'bitcoin' | 'diamondIcon' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const wallets = [103262, 50000, 75000, 100000, 125000, 150000, 175000, 200000]; // Added more values

  return (
    <div className="flex flex-col relative">
      <DropDownButton
        isRevertIcon={false}
        className="!bg-[#1c2127] !px-4 !justify-between gap-4 rounded-md h-14"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        <Icon name={type} size={20} color="#f8bf60" raw />
        <NumberProcess number={wallets[currentIndex]} shouldRemoveFloat={false} />
      </DropDownButton>
      <div
        className={`${
          isVisible ? '' : 'hidden'
        } rounded-lg z-50 absolute top-full  bg-[#2c3137] w-full shadow-2xl`}
      >
        <ScrollableComponent className="max-h-40vh ">
          {wallets.length > 0
            ? wallets.map((wallet, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsVisible(false);
                  }}
                  className="h-10 hover:bg-[#171c22] border-[#171c22] w-full flex items-center justify-center text-1rem"
                >
                  <Icon name="bitcoin" size={20} color="#f8bf60" raw /> 
                  <NumberProcess number={wallet} shouldRemoveFloat={false} />
                </button>
              ))
            : null}
        </ScrollableComponent>
      </div>
    </div>
  );
};

export default WalletSelection;
