import { FC } from 'react';

interface ITextAndBet {
  text: string;
  bet: number;
  className?: string;
  containerClassName?: string;
}

const TextAndBet: FC<ITextAndBet> = ({ text, bet, className, containerClassName }) => {
  return (
    <div className="bg-[#2c3137] w-full ">
      <div
        className={`${containerClassName || ''} bg-[#171C21] flex justify-between px-[1rem] py-[0.5rem]
        text-[1rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] flex-wrap rounded-t-md text-center`}>
        <span className={`flex flex-row items-center ${className || ''}`}>{text}</span>
        <div className={`gap-[2px] flex flex-row items-center ${className || ''}`}>
          <span className="text-[#f8bf60]">$</span>
          {bet < 1000000
            ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(bet)
                .replace('$', '')
            : bet / 1000000 + 'M'}
        </div>
      </div>
    </div>
  );
};

export default TextAndBet;
