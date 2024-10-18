import React, { useState, useEffect } from 'react';
import TabItemButton from '../../TabItemButton';
import DividerDiv from '../../DividerDiv';
import WagerSubTabContent from './WagerSubTabContent';
import YieldTabContentFooter from './YieldTabContentFooter';
import AffiliateSubTabContent from './AffiliateSubTabContent';
import StakeSubTabContent from './StakeSubTabContent';

interface YieldTabContentProps {
  tab: number;
}

const YieldTabContent: React.FC<YieldTabContentProps> = ({ tab }) => {
  const [subTab, setSubTab] = useState<0 | 1 | 2>(0); // Default to Stake (0)

  useEffect(() => {
    setSubTab(tab as 0 | 1 | 2);
  }, [tab]);

  const tabs = [
    ['WAGER POOL', '(+210.50K% APY)'],
    ['AFFILIATE POOL', '(+72.78K% APY)'],
    ['STAKE POOL', '(+72.78K% APY)']
  ];

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className="flex flex-row mx-4 h-[3rem]">
        {tabs.map((t, i) => (
          <TabItemButton
            key={i}
            isFirst={i === 0}
            isLast={i === tabs.length - 1}
            tab={subTab}
            setTab={setSubTab}
            className=""
            title={
              <div className="flex flex-col items-center justify-center">
                <span>{t[0]}</span>
                <span>{t[1]}</span>
              </div>
            }
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 mx-4">
        <DividerDiv className="!bg-[#1c2127]" />
        {subTab === 2 ? <StakeSubTabContent /> : ''}
        {subTab === 0 ? <WagerSubTabContent /> : ''}
        {subTab === 1 ? <AffiliateSubTabContent /> : ''}
      </div>

      <DividerDiv className="!bg-[#1c2127]" />
      <YieldTabContentFooter />
    </div>
  );
};

export default YieldTabContent;