import { useState } from 'react';
import Button from '../../../shared/Button';
import WalletSelection from '../CashierTabContent/WalletSelection';
import CheckBox from './Checkbox';
import AmountInput from '../../../shared/AmountInput';
import UsernameInput from '../../../shared/UsernameInput';

const TipTabContent = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSendTip = () => {
    setUsername('');
    setAmount(0);
    setIsPrivate(false);
    alert('Success!');
  };

  return (
    <div className="flex flex-col gap-4 mx-4 items-center justify-center">
      <WalletSelection type="diamondIcon" />
      <UsernameInput 
        value={username} 
        onChange={setUsername} 
        label="Username" // Add this line
      />
      <AmountInput value={amount} onChange={setAmount} maxValue={1000.00} />
      <div className="flex flex-row gap-2 w-full items-center">
        <button
          onClick={() => setIsPrivate(true)}
          className={`${isPrivate ? 'text-white' : 'text-gray-400'}`}
        >
          Private
        </button>
        <CheckBox
          className={`md:scale-100 scale-75 ${isPrivate ? 'bg-white' : 'bg-[#f8bf60]'}`}
          isLeft={isPrivate}
          setIsLeft={setIsPrivate}
        />
        <button
          onClick={() => setIsPrivate(false)}
          className={`${isPrivate ? 'text-gray-400' : 'text-white'}`}
        >
          Public
        </button>
      </div>
      <p className="w-full text-left text-[0.75rem] text-gray-400">
        {isPrivate ? "Your tip will be kept private and won't appear in the global chat." : 'Your tip will be broadcasted in the global chat.'}
      </p>
      <Button
        className="bg-[#f8bf60] text-black w-full h-12 border rounded-md text-base border-[#f8bf60]"
        onClick={handleSendTip}
      >
        SEND TIP
      </Button>
    </div>
  );
};

export default TipTabContent;
