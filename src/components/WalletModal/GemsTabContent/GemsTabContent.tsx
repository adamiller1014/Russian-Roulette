import { useState } from 'react';
import TabItemButton from '../../TabItemButton';
import DividerDiv from '../../DividerDiv';
import BondTabContent from './BondTabContent';
import SwapTabContent from './SwapTabContent';

interface GemsTabContentProps {
  tab: 0 | 1; // Restrict tab to 0 or 1
  address: string;
}

const GemsTabContent: React.FC<GemsTabContentProps> = ({ }) => {
  const [subTab, setSubTab] = useState<0 | 1>(0); // Set initial subTab to BOND (0)
  const tabs = ['BOND', 'SWAP'];
  return (
    <div className="flex flex-col gap-4 mx-4">
      <div className="flex flex-row h-[3rem]">
        {tabs.map((t, i) => (
          <TabItemButton
            key={i}
            isFirst={i === 0}
            isLast={i === tabs.length - 1}
            tab={subTab}
            setTab={setSubTab}
            title={t}
            index={i}
          />
        ))}
      </div>
      <DividerDiv className="!bg-[#1c2127]" />
      {subTab === 0 ? <BondTabContent /> : <SwapTabContent />}
    </div>
  );
};

export default GemsTabContent;
