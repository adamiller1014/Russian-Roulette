import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faChartSimple, faMoneyBill1, faDoorClosed, faGear } from '@fortawesome/free-solid-svg-icons';
import Icon from '../shared/Icon';


interface UserDropdownProps {
  openUserStatsModal: () => void; // Add this line
  openWalletModal: () => void;
  openYieldTab: () => void;
  openAffiliateModal: () => void;
  openAccountModal: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  openUserStatsModal, // Add this line
  openWalletModal,
  openYieldTab,
  openAffiliateModal,
  openAccountModal,
}) => {
  return (
    <div className="absolute top-full -right-12 mt-4 bg-[#2C3137] rounded-md shadow-[0px_0px_0.75rem_0px_rgba(0,0,0,1)] z-50">
      <button onClick={openWalletModal} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326]">
        <FontAwesomeIcon icon={faWallet} className="mr-2" /> Wallet
      </button>
      <button onClick={openYieldTab} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326]">
        <Icon name={"YieldIcon"} className="mr-2" raw /> Yield
      </button>
      <button onClick={openUserStatsModal} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326] whitespace-nowrap">
        <FontAwesomeIcon icon={faChartSimple} className="mr-2" /> User Stats
      </button>
      <button onClick={openAffiliateModal} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326]">
        <FontAwesomeIcon icon={faMoneyBill1} className="mr-2" /> Affiliate
      </button>
      <button onClick={openAccountModal} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326]">
        <FontAwesomeIcon icon={faGear} className="mr-2" /> Account
      </button>
      <button className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326]">
        <FontAwesomeIcon icon={faDoorClosed} className="mr-2" /> Sign Out
      </button>
    </div>
  );
};

export default UserDropdown;
