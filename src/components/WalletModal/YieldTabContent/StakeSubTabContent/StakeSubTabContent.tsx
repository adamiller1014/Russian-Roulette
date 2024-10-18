import React, { useState } from 'react';
import Button from '../../../../shared/Button';
import Icon from '../../../../shared/Icon';
import DividerDiv from '../../../DividerDiv';
import NextRewardTime from '../NextRewardTime';
import YieldInfo from '../YieldInfo';
import StakeInfoButtons from './StakeInfoButtons';
import WagerResults from '../WagerSubTabContent/WagerResults';
import RiskStake from './RiskStake';
import AmountInput from '../../../../shared/AmountInput';

const StakeSubTabContent = () => {
  const [stakeAmount, setStakeAmount] = useState(100);
  const [isRiskStakeChecked, setIsRiskStakeChecked] = useState(false);
  const maxValue = 1000.00; // Static max value for now

  return (
    <div className="max-h-[500px] overflow-auto">
      <div className="flex flex-col gap-4">
        <NextRewardTime />
        <DividerDiv className="!bg-[#1c2127]" />
        <YieldInfo />
        <DividerDiv className="!bg-[#1c2127]" />
        <AmountInput
          value={stakeAmount}
          onChange={setStakeAmount}
          maxValue={maxValue}
          label="STAKE"
          icon={<Icon name="diamondIcon" color="f8bf60" size={12} raw />}
        />
        <StakeInfoButtons stakeAmount={stakeAmount} isRiskStakeChecked={isRiskStakeChecked} />
        <RiskStake isChecked={isRiskStakeChecked} setIsChecked={setIsRiskStakeChecked} />
        <DividerDiv className="!bg-[#1c2127]" />
        <Button
          className="bg-[#f8bf60] text-black
            px-4 mb-2
            rounded-[5px]
            h-[3rem] !justify-between w-full
            font-montserrat font-bold text-[20px] text-center"
        >
          Stake
        </Button>
        <Button
          className="bg-[#f8bf60] text-black
            flex items-center
            px-4 mb-2
            rounded-[5px]
            h-[3rem] !justify-between w-full
            font-montserrat font-bold"
        >
          Your Stakes
          <Icon name="openInNew" size={14} />
        </Button>
        <div className="flex flex-col gap-1">
          <WagerResults type="Staked" />
        </div>
      </div>
    </div>
  );
};

export default StakeSubTabContent;
