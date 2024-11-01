import React, { useState, useEffect } from 'react';
import Icon from '../../../shared/Icon';
import ConfrimUnstakeModal from '../../ConfrimUnstakeModal';
import DividerDiv from '../../DividerDiv';
import SliderComponent from '../../../shared/Slider';
import InfoButton from '../../WalletModal/YieldTabContent/StakeSubTabContent/InfoButton';
import RiskStake from '../../WalletModal/YieldTabContent/StakeSubTabContent/RiskStake';
import StakeInfoButtons from '../../WalletModal/YieldTabContent/StakeSubTabContent/StakeInfoButtons';
import StakeStatusBar from '../../WalletModal/YieldTabContent/StakeSubTabContent/StakeStatusBar';
import ActiveStakesTable from '../ActiveStakesTable';
import ResetWinChanceModal from '../../ResetWinChanceModal';
import AddOrEditingButtons from '../AddOrEditingButtons';

const ActiveStakesTabContent = () => {
  const headers = ['POOL', 'STAKE', 'REWARD', 'CHANCE', 'MULTIPLIER', 'MODIFY'];
  const list = [
    ['STAKE', { value: 100, percent: null }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: null }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: null }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: null }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0],
    ['STAKE', { value: 100, percent: 77.77 }, 20000, 0.5, 200, 0]
  ];
  
  const [isVisibleConfrimUnstakeModal, setIsVisibleConfrimUnstakeModal] = useState(false);
  const [isVisibleResetWinChance, setIsVisibleResetWinChance] = useState(false);
  const [currentIndex, setCurrenIndex] = useState<{ type: null | string; id: null }>({
    type: null,
    id: null
  });
  const [sliderValue, setSliderValue] = useState(0);
  const [stakeAmount, setStakeAmount] = useState(100);
  const [isRiskStakeChecked, setIsRiskStakeChecked] = useState(false);

  useEffect(() => {
    if (currentIndex.type === 'reset') {
      setIsVisibleResetWinChance(true);
    } else if (currentIndex.type === 'unstake') {
      setIsVisibleConfrimUnstakeModal(true);
    }
  }, [currentIndex]);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    setStakeAmount(value); // This uses setStakeAmount
  };

  return (
    <div className="flex flex-col gap-[10px] mx-[15px]">
      <div className="text-center">ADD NEW STAKE</div>
      <InfoButton
        label="STAKE"
        value={
          <span className="flex items-center gap-[3px]">
            17,500
            <Icon name="diamondIcon" color="f8bf60" size={12} raw />
          </span>
        }
      />
      <StakeStatusBar />
      <StakeInfoButtons stakeAmount={stakeAmount} isRiskStakeChecked={isRiskStakeChecked} />
      <SliderComponent 
        sliderValue={sliderValue} 
        setSliderValue={handleSliderChange} 
        maxValue={1000} // Assuming max stake is 1000
      />
      <RiskStake isChecked={isRiskStakeChecked} setIsChecked={setIsRiskStakeChecked} />
      <AddOrEditingButtons
        setCurrenIndex={setCurrenIndex}
        currentIndex={currentIndex}
        addTitle="ADD NEW STAKE"
      />
      <DividerDiv className="!bg-[#1c2127]" />
      <div>Active Stakes</div>
      <ActiveStakesTable
        headers={headers}
        list={list}
        currentId={currentIndex}
        setCurrenId={setCurrenIndex}
      />
      <ConfrimUnstakeModal
        isVisible={isVisibleConfrimUnstakeModal}
        setIsVisible={setIsVisibleConfrimUnstakeModal}
      />
      <ResetWinChanceModal
        isVisible={isVisibleResetWinChance}
        setIsVisible={setIsVisibleResetWinChance}
      />
    </div>
  );
};

export default ActiveStakesTabContent;
