import React, { useState } from 'react';
import Icon from '../../../../shared/Icon';
import ShadowButton from '../../../../shared/ShadowButton';
import SliderComponent from '../../../../shared/Slider';

const PayoutActionPart = () => {
  const [payout, setPayout] = useState(2.00);
  const [activeTab, setActiveTab] = useState('BASE');
  const [sliderValue, setSliderValue] = useState(2.00);
  const maxValue = 1000.00; // Maximum payout value

  const formatPayout = (value: number) => {
    return value.toFixed(2);
  };

  const handlePayoutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      const cappedValue = Math.min(value, maxValue);
      setPayout(cappedValue);
      setSliderValue(cappedValue);
    }
  };

  const handleHalfPayout = () => {
    const newPayout = payout / 2;
    setPayout(newPayout);
    setSliderValue(newPayout);
  };

  const handleDoublePayout = () => {
    const newPayout = Math.min(payout * 2, maxValue);
    setPayout(newPayout);
    setSliderValue(newPayout);
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    setPayout(value);
  };

  return (
    <div className="flex flex-col px-2 w-[30%] py-2 bg-[#2c3137] flex-1 text-[10px] md:text-[4.8px] lg:text-[6.4px] xl:text-[8px]">
      <div className="flex flex-row gap-0.5">
        <ShadowButton
          className={`flex justify-center items-center w-full basis-1/2 px-2 py-2 md:py-1
                      rounded-l-[0.25rem] font-montserrat font-bold text-xs leading-none
                      ${activeTab === 'BASE'
                        ? 'bg-[#f8bf60] text-black'
                        : 'bg-[#1c2127] text-white'}`}
          onClick={() => setActiveTab('BASE')}
        >
          BASE
        </ShadowButton>
        <ShadowButton
          className={`flex justify-center items-center w-full basis-1/2 px-2 py-2
                      rounded-r-[0.25rem] text-[0.75rem] leading-none
                      ${activeTab === 'BONUS'
                        ? 'bg-[#f8bf60] text-black'
                        : 'bg-[#1c2127] text-white'}`}
          onClick={() => setActiveTab('BONUS')}
        >
          BONUS
        </ShadowButton>
      </div>

      <div className="flex flex-row gap-0.5 mt-2 text-white  overflow-x-auto">
        <div className="flex items-center justify-center px-4 py-4
                        bg-[#1c2127] rounded-l-[0.25rem] text-xs relative">
          <button className="flex flex-row items-center gap-[0.25rem] whitespace-nowrap">
            PAYOUT
            <Icon name="sortArrowDown" color="white" size={12} raw />
          </button>
        </div>
        <div className="flex items-center justify-center gap-0.5 px-4 flex-grow
                        bg-[#1c2127] text-base">
          <input
            type="text"
            value={formatPayout(payout)}
            onChange={handlePayoutChange}
            className="w-20 text-center bg-transparent outline-none"
          />
          <span className="text-[#f8bf60] -mt-1 flex text-xs md:text-sm lg:text-base xl:text-lg leading-none">
            x
          </span>
        </div>
        <button
          onClick={handleHalfPayout}
          className="flex items-center justify-center px-4
                     bg-[#1c2127] text-xs whitespace-nowrap
                     transition-transform transform active:scale-90"
        >
          ÷2
        </button>
        <button
          onClick={handleDoublePayout}
          className="flex items-center justify-center px-4
                     bg-[#1c2127] text-xs whitespace-nowrap rounded-r-[5px]
                     transition-transform transform active:scale-90"
        >
          x2
        </button>
      </div>
      <SliderComponent 
        sliderValue={sliderValue} 
        setSliderValue={handleSliderChange} 
        maxValue={maxValue}
      />
    </div>
  );
};

export default PayoutActionPart;
