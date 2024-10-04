import React, { useState } from 'react';

interface UsernameInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
}

const UsernameInput: React.FC<UsernameInputProps> = ({ value, onChange, label, placeholder = "" }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^a-zA-Z0-9]/g, '');
    onChange(sanitizedValue);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className={`flex flex-row w-full items-center bg-[#1c2127] rounded-md relative ${isFocused ? 'border border-[#f8bf60]' : ''}`}>
        <label
          className={`absolute transition-all duration-300 transform px-1 cursor-text ${
            isFocused || value ? 'text-white left-4 top-1/2 -translate-y-1/2' : 'text-gray-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          }`}
          htmlFor={label}
        >
          {label}
        </label>
        <input
          id={label}
          type="text"
          value={value}
          onChange={handleUsernameChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="border-none outline-none bg-transparent text-center w-full rounded-md px-4 h-12 text-base text-white"
        />
      </div>
    </div>
  );
};

export default UsernameInput;