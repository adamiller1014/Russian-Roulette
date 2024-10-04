import { useState } from 'react';
import SliderComponent from '../../../../shared/Slider';
import NewBetItem from '../NewBetItem';

const AddNewBet = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div
      className="flex flex-col xl:gap-[15px] lg:gap-[12px] md:gap-[10px] gap-[6px]
      xl:px-[15px] lg:px-[12px] md:px-[9px] px-[6px]"
    >
      <div
        className="text-white
            flex flex-row justify-center items-center w-full rounded-[5px]"
      >
        Add New Bet
      </div>
      <NewBetItem value={0.1} type="$">
        Bet
      </NewBetItem>
      <SliderComponent sliderValue={sliderValue} setSliderValue={setSliderValue} />
      <NewBetItem value={0.1} type="$">
        Payout(<span className="text-[#f8bf60]">Bonus</span>)
      </NewBetItem>
      <SliderComponent sliderValue={sliderValue} setSliderValue={setSliderValue} />
      <NewBetItem value={0.1} type="$">
        Payout(Base)
      </NewBetItem>
      <SliderComponent sliderValue={sliderValue} setSliderValue={setSliderValue} />
    </div>
  );
};

export default AddNewBet;
