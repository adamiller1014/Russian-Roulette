import React, { useState } from 'react';
import SliderComponent from './Slider';

interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
  maxValue: number;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

const AmountInput: React.FC<AmountInputProps> = ({ value, onChange, maxValue, label = "Amount", placeholder = "", icon }) => {
  const [isAmountFocused, setIsAmountFocused] = useState(false);
  const [error, setError] = useState('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    const finalValue = sanitizedValue.replace(/(\.\d{2})\d+/g, '$1');

    if (inputValue !== sanitizedValue && finalValue.length < 10 && !finalValue.match(/\.\d{2}$/)) {
      setError('Please only enter valid numbers.');
    } else {
      setError('');
    }
    const numericValue = finalValue === '' ? 0 : parseFloat(finalValue);
    onChange(numericValue);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className={`flex flex-row w-full items-center bg-[#1c2127] rounded-md relative ${isAmountFocused ? 'border border-[#f8bf60]' : ''}`}>
        <label
          className={`absolute transition-all duration-300 transform px-1 cursor-text ${isAmountFocused || value ? 'text-white left-4 top-1/2 -translate-y-1/2' : 'text-gray-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'}`}
          htmlFor={label}
        >
          {label}
        </label>
        <input
          id={label}
          type="text"
          name={label}
          className="border-none outline-none bg-transparent text-center w-full rounded-md px-4 h-12 text-base"
          placeholder={placeholder}
          value={value === 0 ? '' : value.toString()}
          onChange={handleAmountChange}
          onFocus={() => setIsAmountFocused(true)}
          onBlur={() => setIsAmountFocused(false)}
          style={{ cursor: 'text' }}
        />
        {icon && <div className="absolute right-4">{icon}</div>}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      <SliderComponent sliderValue={value} setSliderValue={onChange} maxValue={maxValue} />
    </div>
  );
};

export default AmountInput;