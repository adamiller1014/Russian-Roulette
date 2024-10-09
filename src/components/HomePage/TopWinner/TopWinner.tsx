import { FC } from 'react';

interface ITopWinner {
  number: number;
  name: string;
  dValue: number;
  xValue: number;
  className?: string;
  containerClassName?: string;
}

const TopWinner: FC<ITopWinner> = ({
  number,
  name,
  dValue,
  xValue,
  className,
  containerClassName
}) => {
  return (
    <div
      className={`flex bg-[#1c2127] py-[0.5rem] text-xs md:text-xs lg:text-sm xl:text-[1rem]
      justify-between px-[1rem] text-[#F8BF60] 2xl:flex-row flex-col 2xl:gap-0 gap-3 items-center text-center ${containerClassName || ''}`}
    >
      <div className="flex flex-row gap-[5px] min-w-0 flex-grow">
        <div className={`xl:px-[5px] lg:px-[4px] md:px-[3px] flex-shrink-0 ${className || ''}`}>{number}</div>
        <div className={`flex items-center text-left truncate ${className || ''}`}>{name}</div>
      </div>
      <div className={`gap-[0.5rem] flex items-center leading-none flex-col text-center flex-shrink-0 ${className || ''}`}>
        <div className="w-full truncate">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dValue)}
        </div>
        <div className="w-full truncate">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(xValue)
            .replace('$', 'x')}
        </div>
      </div>
    </div>
  );
};

export default TopWinner;
