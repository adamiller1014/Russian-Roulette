import { useState } from 'react';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import DropDownButton from '../../UserStatsPage/DropDownButton';
import Icon from '../../../shared/Icon';
import NumberProcess from '../../NumberProcess';

const SwapSelection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const wallets = [103262, 50000, 75000, 100000];

  return (
    <div className="flex flex-col relative">
      <DropDownButton
        isRevertIcon={false}
        className="!bg-[#1c2127] !px-4 !justify-between gap-4 rounded-md h-14"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Icon name="bitcoin" size={20} color="#f8bf60" raw />
            <NumberProcess number={wallets[currentIndex]} shouldRemoveFloat={false} />
          </div>
          <span className="text-gray-400 mx-4">|</span>
          <div className="flex items-center gap-2">
            <Icon name="diamondIcon" size={20} color="#f8bf60" raw />
            <NumberProcess number={10854.49} shouldRemoveFloat={false} />
          </div>
        </div>
      </DropDownButton>
      <div
        className={`${
          isVisible ? '' : 'hidden'
        } rounded-lg z-50 absolute top-full bg-[#2c3137] w-full shadow-2xl`}
      >
        <ScrollableComponent className="max-h-40vh">
          {wallets.map((wallet, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsVisible(false);
              }}
              className="h-10 hover:bg-[#171c22] border-[#171c22] w-full flex items-center justify-between px-4 text-1rem"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Icon name="bitcoin" size={20} color="#f8bf60" raw />
                  <NumberProcess number={wallet} shouldRemoveFloat={false} />
                </div>
                <span className="text-gray-400 mx-4">|</span>
                <div className="flex items-center gap-2">
                  <Icon name="diamondIcon" size={20} color="#f8bf60" raw />
                  <NumberProcess number={wallet * 0.105} shouldRemoveFloat={false} />
                </div>
              </div>
            </button>
          ))}
        </ScrollableComponent>
      </div>
    </div>
  );
};

export default SwapSelection;
