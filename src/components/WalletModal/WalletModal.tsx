import React, { useState, useEffect } from 'react'; // Import useEffect
import Modal from '../../shared/Modal';
import DividerDiv from '../DividerDiv';
import WalletTabItems from './WalletTabItems';
import CashierTabContent from './CashierTabContent';
import GemsTabContent from './GemsTabContent';
import TipTabContent from './TipTabContent';
import YieldTabContent from './YieldTabContent';

interface WalletModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  address: string;
  initialTab?: 0 | 1 | 2 | 3; // Optional prop to set the initial tab
}

const WalletModal: React.FC<WalletModalProps> = ({ isVisible, setIsVisible, address, initialTab = 0 }) => {
  const [mainTab, setMainTab] = useState<0 | 1 | 2 | 3>(initialTab);
  const [cashierSubTab, setCashierSubTab] = useState<0 | 1>(0);

  useEffect(() => {
    if (isVisible) {
      setMainTab(initialTab); // Ensure this is set correctly
    }
  }, [isVisible, initialTab]);

  return (
    <Modal
      classNames="!gap-0 text-white md:w-[34rem] w-[90%]"
      onClose={() => setIsVisible(false)}
      showCloseButton
      title="WALLET"
      isVisible={isVisible}
    >
      <div className="flex flex-col md:gap-4 gap-1.25 pb-6 pt-2.5 text-xs md:text-sm">
        <WalletTabItems tab={mainTab} setTab={setMainTab} />
        <div className="md:mx-3.75 mx-2.5">
          <DividerDiv className="!bg-[#1c2127]" />
        </div>
        {mainTab === 0 && (
          <CashierTabContent 
            tab={cashierSubTab} 
            setTab={setCashierSubTab} 
            address={address} 
          />
        )}
        {mainTab === 1 && <GemsTabContent tab={mainTab} address={address} />}
        {mainTab === 2 && <YieldTabContent tab={0} />} {/* Set to 0 for Stake */}
        {mainTab === 3 && <TipTabContent />}
      </div>
    </Modal>
  );
};

export default WalletModal;
