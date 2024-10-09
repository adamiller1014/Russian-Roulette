import React, { useState } from 'react'; // Ensure React is imported
import Icon from '../../../../shared/Icon';
import ShadowButton from '../../../../shared/ShadowButton';
import SliderComponent from '../../../../shared/Slider';

const BetActionPart = () => {
  const [bet, setBet] = useState(2.00);
  const [sliderValue, setSliderValue] = useState(bet);
  const maxValue = 1000.00; // Maximum bet value

  const formatBet = (value: number) => {
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handleBetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value.replace(/,/g, ''));
    if (!isNaN(value)) {
      const cappedValue = Math.min(value, maxValue);
      setBet(cappedValue);
      setSliderValue(cappedValue);
    }
  };

  const handleHalfBet = () => {
    const newBet = bet / 2;
    setBet(newBet);
    setSliderValue(newBet);
  };

  const handleDoubleBet = () => {
    const newBet = Math.min(bet * 2, maxValue);
    setBet(newBet);
    setSliderValue(newBet);
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    setBet(value);
  };

  return (
    <div className="flex flex-col px-2 py-2 w-[30%] bg-[#2c3137] md:text-[4.8px] lg:text-[6.4px] xl:text-[8px] flex-1">
      <ShadowButton
        className="flex justify-center items-center w-full py-2 md:py-2 bg-[#1c2127] rounded-[0.25rem]
                   text-[#f8bf60] font-montserrat font-bold text-xs leading-none whitespace-nowrap
                   hover:bg-[#21262c] hover:shadow-[0px_4px_0px_0px_rgba(29,32,34,1)]
                   shadow-[0px_4px_0px_0px_rgba(33,38,44,1)]"
      >
        $100,000.00 ON WIN
      </ShadowButton>

      <div className="flex flex-row gap-0.5 mt-2 text-white overflow-x-auto">
        <div className="flex items-center justify-center px-4 py-4 bg-[#1c2127] rounded-l-[0.25rem] text-xs relative">
          <button className="flex flex-row items-center gap-[0.25rem] whitespace-nowrap">
            BET
            <Icon name="sortArrowDown" color="white" size={12} raw />
          </button>
        </div>
        <div className="flex items-center justify-center gap-1 px-4 bg-[#1c2127] text-base relative flex-grow">
          <input
            type="text"
            value={formatBet(bet)}
            onChange={handleBetChange}
            className="w-20 text-center bg-transparent outline-none"
          />
          <Icon name="diamondIcon" color="#f8bf60" size={12} raw />
        </div>
        <button
          onClick={handleHalfBet}
          className="flex items-center justify-center px-4 bg-[#1c2127] text-xs whitespace-nowrap
                     transition-transform transform active:scale-90"
        >
          ÷2
        </button>
        <button
          onClick={handleDoubleBet}
          className="flex items-center justify-center px-4 bg-[#1c2127] text-xs whitespace-nowrap rounded-r-[5px]
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

export default BetActionPart;