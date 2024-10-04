import React, { useState } from 'react';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import UnstakeInputTag from './UnstackInputTag';
import SliderComponent from '../../shared/Slider';

const ConfrimUnstakeModal = ({ isVisible, setIsVisible }) => {
  const [unstake, setUnstake] = useState('281500');
  const [sliderValue, setSliderValue] = useState(0);
  const maxValue = 1000.00; // Static max value for now

  return (
    <Modal
      classNames="!gap-0
      md::w-[542px]
			text-white"
      onClose={() => {
        setIsVisible(false);
      }}
      showCloseButton
      title="Reset Win Chance"
      isVisible={isVisible}
    >
      <div
        className="flex flex-col
          gap-[10px] mx-[15px] py-[15px]
          xl:text-[12px] lg:text-[9.6px] md:text-[7.2px]"
      >
        <UnstakeInputTag unstake={unstake} setUnstake={setUnstake} />
        <SliderComponent sliderValue={sliderValue} setSliderValue={setSliderValue} maxValue={maxValue} />
        <div
          className="flex flex-row gap-[3px] mt-[5px]
				xl:text-[16px] md:text-[12.8px] md:text-[9.6px] "
        >
          <Button
            className="bg-[#1c2127] flex-1
					h-[48px] rounded-l-[5px]"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            CANCEL
          </Button>
          <Button
            className="bg-[#1c2127] flex-1
					h-[48px] rounded-r-[5px]"
          >
            CONFIRM
          </Button>
        </div>
        <div className="mt-[10px] text-center text-[#f8bf60]">
          Amount: {(sliderValue / 100 * maxValue).toFixed(2)}
        </div>
      </div>
    </Modal>
  );
};

export default ConfrimUnstakeModal;
