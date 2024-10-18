import React, { useState, useRef, useEffect } from 'react';
import BetImg from '../../assets/images/bet.svg';
import LogoImg from '../../assets/images/logo.svg';
import Icon from '../../shared/Icon';
import HeaderWallet from './HeaderWallet';
import LevelBar from './LevelBar';
import CurrentXpBar from './CurrentXpBar';
import UserDropdown from '../UserDropdown';
import WalletModal from '../WalletModal/WalletModal';
import AffiliateModal from '../AffiliateModal/AffiliateModal';
import AccountModal from '../AccountModal/AccountModal';
import UserStatsModal from '../../components/UserStatsPage/UserStatsModal';
import StakesModal from '../StakesModal';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isAffiliateModalOpen, setIsAffiliateModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isUserStatsModalOpen, setIsUserStatsModalOpen] = useState(false);
  const [isYieldTabOpen, setIsYieldTabOpen] = useState(false);
  const [isVisibleStakesModal, setIsVisibleStakesModal] = useState(false);
  const [isVisibleWalletModal, setIsVisibleWalletModal] = useState(false);
  const address = 'e60351d7c15799b6126eeeda3bced558d7d165ff7d3c11d071a5413719dcd4c1'; // Replace with the actual address
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [cryptoList] = useState([{ amount: 1000, type: "gems" }, { amount: 2343, type: "btc" }, { amount: 23242, type: "eth" }, { amount: 2123, type: "dai" }]);
  const [isClicked, setIsClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const level = 74;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openWalletModal = () => {
    setIsWalletModalOpen(true);
    setIsYieldTabOpen(false);
  };

  const openYieldTab = () => {
    setIsWalletModalOpen(true);
    setIsYieldTabOpen(true);
  };

  const openAffiliateModal = () => {
    setIsAffiliateModalOpen(true);
  };

  const openAccountModal = () => {
    setIsAccountModalOpen(true);
  };

  const openUserStatsModal = () => {
    setIsUserStatsModalOpen(true);
  };

  return (
    <div className="w-full flex flex-col xl:text-[14px] lg:text-[11.2px] md:text-[8.4px] text-[8px]">
      <StakesModal isVisible={isVisibleStakesModal} setIsVisible={setIsVisibleStakesModal} />
      <WalletModal
        isVisible={isVisibleWalletModal}
        setIsVisible={setIsVisibleWalletModal}
        address={address}
      />
      <div
        className="w-full z-[1]
      h-[60px] 
      bg-[#1c2127] flex flex-row
      shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)]">
        <div className="flex-1 flex pl-[15px] items-center">
          <img
            src={LogoImg}
            alt="logo"
            className="xl:h-[46px] lg:h-[36.8px] md:h-[27.6px] cursor-pointer md:flex hidden"
          />
          <img src={BetImg} alt="logo" className="h-[25px] cursor-pointer md:hidden flex" />
        </div>
        <HeaderWallet
          cryptoList={cryptoList}
          isClicked={isClicked}
          setCurrentIndex={setCurrentIndex}
          setIsClicked={setIsClicked}
          currentIndex={currentIndex}
          setIsVisibleStakesModal={setIsVisibleStakesModal}
          isVisibleStakesModal={isVisibleStakesModal}
          setIsVisibleWalletModal={setIsVisibleWalletModal}
        />

        <div
          className="flex-1 flex flex-row gap-[20px] justify-end pr-[20px] items-center"
          ref={dropdownRef}>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="relative cursor-pointer"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}>
            <Icon name="user" className="text-white h-[20px] w-[20px]" raw />
            {isDropdownOpen && (
              <UserDropdown
                openWalletModal={openWalletModal}
                openYieldTab={openYieldTab}
                openAffiliateModal={openAffiliateModal}
                openAccountModal={openAccountModal}
                openUserStatsModal={openUserStatsModal} // Pass the function here
              />
            )}
          </div>
          <div
            className="relative cursor-pointer"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}>
            <Icon name="notification" className="text-white h-[18px] w-[18px]" raw />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-[#1c2127] h-[75px] pt-[11px]">
        <LevelBar level={level} />
        <CurrentXpBar />
      </div>
      {isWalletModalOpen && (
        <WalletModal
          isVisible={isWalletModalOpen}
          setIsVisible={setIsWalletModalOpen}
          address="your_address_here"
          initialTab={isYieldTabOpen ? 2 : 0}
        />
      )}
      {isUserStatsModalOpen && (
        <UserStatsModal isVisible={isUserStatsModalOpen} setIsVisible={setIsUserStatsModalOpen} />
      )}
      {isAffiliateModalOpen && (
        <AffiliateModal isVisible={isAffiliateModalOpen} setIsVisible={setIsAffiliateModalOpen} />
      )}
      {isAccountModalOpen && (
        <AccountModal isVisible={isAccountModalOpen} setIsVisible={setIsAccountModalOpen} />
      )}
    </div>
  );
};

export default Header;
