import React, { useState } from 'react';
import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import WalletSelection from '../CashierTabContent/WalletSelection';
import Results from './Results';
import AmountInput from '../../../shared/AmountInput';

const BondTabContent = () => {
  const [amount, setAmount] = useState(1000.00);
  const maxValue = 1000.00; // Static max value for now

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <WalletSelection type="bitcoin" />
      <AmountInput
        value={amount}
        onChange={setAmount}
        maxValue={maxValue}
        label="BTC"
        icon={<Icon name="bitcoin" raw color="#f8bf60" size={14} />}
      />
      <Results mt-1/>
      <Button className="bg-[#f8bf60] text-black w-full h-[3rem] border rounded-[0.25rem] !border-[#f8bf60]">
        BOND (+5.65%)
      </Button>
    </div>
  );
};

export default BondTabContent;
