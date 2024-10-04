import { useState } from 'react';

const UsernameInput = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex flex-row w-full items-center bg-[#1c2127] rounded-md relative ${isFocused ? 'border border-[#f8bf60]' : ''}`}>
      <label
        className={`absolute transition-all duration-300 transform px-1 cursor-text ${isFocused || value ? 'text-white left-4 top-1/2 -translate-y-1/2' : 'text-gray-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'}`}
        htmlFor="Username"
      >
        Username
      </label>
      <input
        id="Username"
        type="text"
        name="Username"
        className="whsOnd zHQkBf border-none outline-none bg-transparent text-center w-full rounded-md px-4 h-12 text-base"
        placeholder=""
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoComplete="username"
        spellCheck="false"
        tabIndex={0}
        aria-label="Username"
        aria-disabled="false"
        autoCapitalize="none"
        dir="ltr"
        style={{ cursor: 'text' }}
      />
    </div>
  );
};

export default UsernameInput;