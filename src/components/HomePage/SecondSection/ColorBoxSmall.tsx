import { FC } from 'react';

interface IColorBox {
  isBonus: boolean;
  text: string;
  color: string;
  containterClass?: string;
  className?: string;
}

const ColorBoxSmall: FC<IColorBox> = ({ isBonus, color, containterClass, className, text }) => {
  return (
    <div
      className={`relative ${containterClass || ''} rounded-[0.25rem] w-fit leading-none flex px-4 py-1 ${
        isBonus
          ? 'flex-col leading-none justify-center items-center'
          : 'flex-row leading-none justify-center items-center'
      }`}
      style={{ backgroundColor: color }}
    >
      {isBonus && (
        <div className="justify-center flex leading-none text-[8px] xmd:text-[6px] lg:text-[8px] xl:text-xs">
          BONUS
        </div>
      )}
      <span
        className={`leading-none text-center
        xl:text-lg lg:text-[12.8px] md:text-[9.6px] text-[8px] xs:text-[12px] 
        ${className || ''}`}
      >
        {text}
      </span>
    </div>
  );
};

export default ColorBoxSmall;
