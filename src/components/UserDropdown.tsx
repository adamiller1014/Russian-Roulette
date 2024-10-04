import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faChartLine, faUsers, faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
    <div className="absolute top-full right-0 mt-4 bg-[#2C3137] rounded-md shadow-[0px_0px_0.75rem_0px_rgba(0,0,0,1)] z-50">
      <button onClick={openWalletModal} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326]">
        <FontAwesomeIcon icon={faWallet} className="mr-2" /> Wallet
      </button>
      <button onClick={openYieldTab} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326]">
        <FontAwesomeIcon icon={faChartLine} className="mr-2" /> Yield
      </button>
      <button onClick={openUserStatsModal} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326] whitespace-nowrap">
        <FontAwesomeIcon icon={faChartLine} className="mr-2" /> User Stats
      </button>
      <button onClick={openAffiliateModal} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326]">
        <FontAwesomeIcon icon={faUsers} className="mr-2" /> Affiliate
      </button>
      <button onClick={openAccountModal} className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326]">
        <FontAwesomeIcon icon={faUserCog} className="mr-2" /> Account
      </button>
      <button className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#1f2326]">
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Sign Out
      </button>
    </div>
  );
};

export default UserDropdown;
