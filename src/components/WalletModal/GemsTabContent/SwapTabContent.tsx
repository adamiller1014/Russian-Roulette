import { useState } from 'react';
import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import AmountInput from '../../../shared/AmountInput';
import SwapSelection from './SwapSelection';
import Resultitem from './Resultitem';

const SwapTabContent = () => {
  const [btcAmount, setBtcAmount] = useState(0);
  const [gemsAmount, setGemsAmount] = useState(0);

  return (
    <div className="flex flex-col gap-[10px] items-center justify-center">
      <SwapSelection />
      <AmountInput
        value={btcAmount}
        onChange={setBtcAmount}
        maxValue={1000.00}
        label="BTC"
        icon={<Icon name="bitcoin" raw color="#f8bf60" size={14} />}
      />
      <Icon name="updown" size={16} className="bg-[#1c2127] !h-[40px] px-[25px] rounded-[25px]" />
      <AmountInput
        value={gemsAmount}
        onChange={setGemsAmount}
        maxValue={1000.00}
        label="GEMS"
        icon={<Icon name="diamondIcon" raw color="#f8bf60" size={14} />}
      />

      <Resultitem
        text={
          <div className="flex gap-[3px] items-center">
            <Icon name="diamondIcon" raw size={12} color="#f8bf60" /> 1 =
            <Icon name="bitcoin" size={12} color="#f8bf60" /> 147.05 (
            <span className="text-[#f8bf60">$</span>4,443,851,16)
          </div>
        }
        value={
          <span className="flex items-center gap-[3px]">
            Price Impact<span className="text-[#ba4024]">-26.52%</span>
          </span>
        }
        unit={<></>}
      />
      <Button
        className="bg-[#f8bf60] text-black
      w-full h-[48px] border
      rounded-[5px]
      lg:text-[12.8px] md:text-[8.4px] xl:text-[14px]
      !border-[#f8bf60]"
      >
        SWAP
      </Button>
    </div>
  );
};

export default SwapTabContent;
