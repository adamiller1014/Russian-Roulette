import { FC } from 'react';
import Icon from '../../../shared/Icon';

interface IUserAndMark {
  type: 'blue' | 'purple' | 'yellow' | 'green' | string;
  mark: number;
  name: string;
  className?: string;
  containerClassName?: string;
  dValue: number;
  xValue: number;
}

const UserAndMark: FC<IUserAndMark> = ({
  type = 'yellow',
  name,
  mark,
  dValue,
  xValue,
  className,
  containerClassName = ''
}) => {
  return (
    <div
      className={`bg-[#171c22] p-[3px] leading-none
      text-[0.75rem] md:text-[0.75rem] lg:text-[0.875rem] xl:text-[1rem] 2xl:gap-0 gap-3 flex 2xl:flex-row flex-col px-[1rem] py-[0.5rem] justify-between
      ${containerClassName || ''}`}
    >
      <div className="flex flex-wrap 2xl:w-[68%] w-full items-center text-black gap-[3px]">
        <div
          className={`flex flex-row gap-[2px] p-[3px] rounded-[4px] leading-0 justify-start items-center ${className || ''
            }`}
          style={{
            backgroundColor:
              type === 'blue'
                ? '#2cabd9'
                : type === 'yellow'
                  ? '#f8bf60'
                  : type === 'green'
                    ? '#298854'
                    : '#af60f8'
          }}
        >
          <Icon name="star" color="black" raw />
          {mark}
        </div>
        <div
          className="truncate leading-0 my-auto py-[3px]"
          style={{
            color:
              type === 'blue'
                ? '#2cabd9'
                : type === 'yellow'
                  ? '#f8bf60'
                  : type === 'green'
                    ? '#298854'
                    : '#af60f8'
          }}
        >
          {name}
        </div>
      </div>
      <div className="flex flex-col items-start text-right gap-[3px]">
        <div className="py-[3px]">
          <span className="text-[#f8bf60]">$</span>
          {dValue < 1000000
            ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(dValue)
              .replace('$', '')
            : dValue / 1000000 + 'M'}
        </div>
        <div className="py-[3px]">
          <span className="text-[#f8bf60]">x</span>
          {xValue < 1000000
            ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(xValue)
              .replace('$', '')
            : xValue / 1000000 + 'M'}
        </div>
      </div>
    </div>
  );
};

export default UserAndMark;
