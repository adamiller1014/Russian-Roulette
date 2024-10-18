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
    <div className="flex flex-col items-center w-full">
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
          className="w-full h-12 px-4 text-base text-center bg-transparent border-none rounded-md outline-none"
          placeholder={placeholder}
          value={value === 0 ? '' : value.toString()}
          onChange={handleAmountChange}
          onFocus={() => setIsAmountFocused(true)}
          onBlur={() => setIsAmountFocused(false)}
          style={{ cursor: 'text' }}
        />
        {icon && isAmountFocused && <div className="absolute right-4" >{icon}</div>}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      <SliderComponent sliderValue={value} setSliderValue={onChange} maxValue={maxValue} />
    </div>
  );
};

export default AmountInput;