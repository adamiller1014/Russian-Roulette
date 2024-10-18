import React, { useState, useEffect } from 'react';
import Icon from '../../../../shared/Icon';
import SliderComponent from '../../../../shared/Slider';

const StakeInfoButtons = ({ stakeAmount, isRiskStakeChecked }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [reward, setReward] = useState(0);
  const [rewardChance, setRewardChance] = useState(100);
  const [payout, setPayout] = useState(0);

  const minRewardPercent = 100.65;
  const maxRewardPercent = minRewardPercent * 3;
  // const APY = ((1 * (((minRewardPercent - 100) / 100) + 1)) ** 1095) * 100;
  // const maxAPY = APY * payout;

  useEffect(() => {
    let rewardPercent;
    if (isRiskStakeChecked) {
      rewardPercent = minRewardPercent + (maxRewardPercent - minRewardPercent) * (sliderValue / 100);
    } else {
      rewardPercent = minRewardPercent - 100 + (maxRewardPercent - minRewardPercent) * (sliderValue / 100);
    }
    const calculatedReward = (stakeAmount * rewardPercent) / 100;

    // Calculate payout (reward / stake)
    const calculatedPayout = calculatedReward / stakeAmount;

    // Calculate chance (101 / payout)
    const calculatedChance = 101 / calculatedPayout;

    setReward(calculatedReward);
    setRewardChance(calculatedChance);
    setPayout(calculatedPayout);
  }, [sliderValue, stakeAmount, isRiskStakeChecked]);

  const InfoBox = ({ label, value, unit }) => (
    <div className="flex justify-between items-center bg-[#1c2127] rounded-md px-3">
      <span className="text-white">{label}</span>
      <div className="flex text-[#f8bf60] items-center gap-[3px]">
        {value}
        {unit}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-[2px]">
        <InfoBox
          label="REWARD"
          value={reward.toFixed(2)}
          unit={<Icon name="diamondIcon" color="#f8bf60" size={12} raw />}
        />
        <div className='rounded-md'>
          <div className="flex justify-between bg-[#1c2127] rounded-t-md px-3 pt-1">
            <span className="text-white">Reward Chance</span>
            <div className="flex text-[#f8bf60] items-center gap-[3px]">
              {rewardChance.toFixed(2)}
              {"%"}
            </div>
          </div>
          <div className="flex justify-between bg-[#1c2127] rounded-b-md px-3 pb-1">
            <span className="text-white">PAYOUT</span>
            <div className="flex text-[#f8bf60] items-center gap-[3px]">
              {payout.toFixed(2)}
              {"x"}
            </div>
          </div>
        </div>
      </div>
      <SliderComponent
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        maxValue={1000}
      />
    </div>
  );
};

export default StakeInfoButtons;
