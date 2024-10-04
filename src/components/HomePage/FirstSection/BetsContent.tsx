import React, { useState, useRef, useCallback, useMemo } from 'react';
import Icon from '../../../shared/Icon';
import ScrollableComponent from '../../../shared/ScrollbarComponent';
import TextAndBet from './Text_And_Bet';
import YourBets from './YourBets';
import AllBets from './AllBets';

const CURRENCY_FORMAT = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const BetsContent: React.FC = () => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const scrollableRef = useRef<HTMLElement | null>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, []);

  const formatCurrency = useCallback((amount: number) => {
    return CURRENCY_FORMAT.format(amount).replace('$', '').replace(/\..*/g, '');
  }, []);

  const myBetsText = useMemo(() => `My Bets ${formatCurrency(777777)}`, [formatCurrency]);
  const totalBetsText = useMemo(() => `${formatCurrency(777777)} Bets`, [formatCurrency]);

  return (
    <div className="relative">
      <ScrollableComponent 
        height="calc(100vh - 24rem)" 
        onOverflowChange={setIsOverflowing} 
        scrollableRef={scrollableRef}
        className="bg-[#2C3137]"
      >
        <div className="flex flex-col gap-1 px-2 py-2">
          <TextAndBet text={myBetsText} bet={500000} />
          <YourBets />
          <TextAndBet text={totalBetsText} bet={1250000} className="text-base" />
          <AllBets />
        </div>
      </ScrollableComponent>

      {isOverflowing && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
          <div className="bg-gradient-to-t from-[#2C3137] to-transparent h-16 w-full absolute bottom-0"></div>
          <button onClick={scrollToBottom} className="text-[1rem] flex flex-col justify-center items-center pointer-events-auto relative z-10 mb-2">
            <Icon name="iosArrowDown" color="white" raw />
          </button>
        </div>
      )}
    </div>
  );
};

export default BetsContent;