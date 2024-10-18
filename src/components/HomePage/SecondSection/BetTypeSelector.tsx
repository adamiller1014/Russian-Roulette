import React from 'react';
import ShadowButton from '../../../shared/ShadowButton';

interface BetTypeSelectorProps {
  selectedType: 'GROUP' | 'SOLO';
  onTypeSelect: (type: 'GROUP' | 'SOLO') => void;
  onBuyBonusClick: () => void;
}

const BetTypeSelector: React.FC<BetTypeSelectorProps> = ({ selectedType, onTypeSelect, onBuyBonusClick }) => {
  const buttonClasses = {
    base: 'flex-1 flex justify-center items-center text-center transition-all duration-200',
    active: 'bg-[#f8bf60] text-black shadow-[0_5px_0_0_rgba(153,122,73,1)] hover:brightness-110',
    inactive: 'bg-[#1c2127] text-white shadow-[0_5px_0_0_rgba(33,38,44,1)] hover:bg-[#21262c] hover:shadow-[0_5px_0_0_rgba(29,32,34,1)]'
  };

  return (
    <div className="flex w-full gap-1 text-sm rounded-bl-lg md:h-16 h-14 md:text-base ">
      <div className="flex flex-1 h-full p-4 bg-[#2c3137]">
        {(['GROUP', 'SOLO'] as const).map((type) => (
          <ShadowButton
            key={type}
            onClick={() => onTypeSelect(type)}
            className={`
              ${buttonClasses.base}
              ${selectedType === type ? buttonClasses.active : buttonClasses.inactive}
              ${type === 'GROUP' ? 'rounded-tl-md rounded-bl-md' : 'rounded-tr-md rounded-br-md'}
            `}
          >
            {type}
          </ShadowButton>
        ))}
      </div>
      <div className="flex flex-1 h-full gap-3 p-4 bg-[#2c3137]">
        <ShadowButton
          onClick={onBuyBonusClick}
          className={`
            ${buttonClasses.base}
            bg-[#f8bf60] text-black shadow-[0_5px_0_0_rgba(153,122,73,1)] hover:brightness-110
            rounded-md xl:hidden block basis-2/5
          `}
        >
          BONUS
        </ShadowButton>
      </div>
    </div>
  );
};

export default React.memo(BetTypeSelector);