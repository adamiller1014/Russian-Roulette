import React, { useMemo } from 'react';
import DiamondComponent from '../../../shared/Diamond';

interface BetData {
  xValue: number;
  dValue: number;
}

const betData: BetData[] = [
  { xValue: 10, dValue: 10000000 },
  { xValue: 1000, dValue: 9000 },
  { xValue: 100, dValue: 500 },
  { xValue: 10, dValue: 10000 },
  { xValue: 1000, dValue: 9000 },
  { xValue: 100, dValue: 500 },
  { xValue: 4, dValue: 100 },
  { xValue: 3, dValue: 100 },
  { xValue: 2, dValue: 100 },
  { xValue: 6, dValue: 500 },
  { xValue: 20, dValue: 100 },
  { xValue: 12, dValue: 100 },
  { xValue: 6, dValue: 100 },
  { xValue: 5, dValue: 10 },
  { xValue: 2, dValue: 10 },
];

const getMinWidth = (dValue: number): number => {
  const length = dValue.toString().length;
  return Math.max(80, length * 10);
};

const YourBets: React.FC = () => {
  const memoizedBets = useMemo(() => betData.map((bet, index) => (
    <DiamondComponent
      key={`bet-${index}-${bet.xValue}-${bet.dValue}`}
      position="center"
      containerClassName={`flex-grow basis-[${getMinWidth(bet.dValue)}px] p-2 flex items-center justify-centerl`}
      xValue={bet.xValue}
      dValue={bet.dValue}
      className="text-base md:text-lg lg:text-base"
    />
  )), []);

  return (
    <div className="bg-[#2c3137] flex flex-wrap gap-1  rounded-md shadow-lg">
      {memoizedBets}
    </div>
  );
};

export default React.memo(YourBets);
