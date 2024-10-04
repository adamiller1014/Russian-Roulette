import React from 'react';
import DividerDiv from '../../../components/DividerDiv';
import DepositTabContent from './DepositTabContent';
import WithdrawTabContent from './WithdrawTabContent';
import TabItemButton from '../../TabItemButton';

interface CashierTabContentProps {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<0 | 1>>;
  address: string;
}

const CashierTabContent: React.FC<CashierTabContentProps> = ({ tab, setTab }) => {
  const tabs = ['DEPOSIT', 'WITHDRAW'];
  const address = 'aa8ecbaa804f147531154cfaf06fb066fd5cd57d87a1b3c4a16f0c34b8685f4a'; // Set address

  return (
    <div className="flex flex-col gap-4 mx-4">
      <div className="flex flex-row h-[3rem] ">
        {tabs.map((t, i) => (
          <TabItemButton
            key={i}
            isFirst={i === 0}
            isLast={i === tabs.length - 1}
            tab={tab}
            setTab={setTab}
            title={t}
            index={i}
          />
        ))}
      </div>
      <DividerDiv className="!bg-[#1c2127]" />
      {tab === 0 && <DepositTabContent address={address} />}
      {tab === 1 && <WithdrawTabContent />}
    </div>
  );
};

export default CashierTabContent;