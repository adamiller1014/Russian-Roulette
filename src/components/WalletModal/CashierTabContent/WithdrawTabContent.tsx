import React, { useState } from 'react';
import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';
import AmountInput from '../../../shared/AmountInput';
import UsernameInput from '../../../shared/UsernameInput';

const WithdrawTabContent = () => {
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState('');
  const maxValue = 1000.00; // Static max value for now

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <UsernameInput
        value={address}
        onChange={setAddress}
        label="Address" // Add this prop to change the label
      />
      <AmountInput
        value={amount}
        onChange={setAmount}
        maxValue={maxValue}
        label="BTC"
        icon={<Icon name="bitcoin" raw color="#f8bf60" size={14} />}
      />
      <Button className="bg-[#1c2127] w-full h-[48px] border rounded-[5px] !border-[#f8bf60]">
        WITHDRAW
      </Button>
      <span className="text-[#96989b] text-center text-[0.625rem]">
        Minimum withdrawal is 0.00050000. Your withdrawal will have 0.00007000
        <br />
        subtracted from your remaining balance to cover the fee required to <br />
        process the transaction.
      </span>
    </div>
  );
};

export default WithdrawTabContent;
