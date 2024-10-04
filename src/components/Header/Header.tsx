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

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isAffiliateModalOpen, setIsAffiliateModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isUserStatsModalOpen, setIsUserStatsModalOpen] = useState(false);
  const [isYieldTabOpen, setIsYieldTabOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [cryptoList] = useState([1000000, 23422323, 23242123]);
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
      <div
        className="w-full z-[1]
      h-[60px] 
      bg-[#1c2127] flex flex-row
      shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)]"
      >
        <div className="flex-1 flex pl-[15px] items-center">
          <img
            src={LogoImg}
            alt="logo"
            className="xl:h-[46px] lg:h-[36.8px] md:h-[27.6px] cursor-pointer md:flex hidden"
          />
          <img src={BetImg} alt="logo" className="h-[25px] cursor-pointer md:hidden flex" />
        </div>
        <div className="flex-2 flex items-center justify-center text-white">
          <HeaderWallet
            cryptoList={cryptoList}
            isClicked={isClicked}
            setCurrentIndex={setCurrentIndex}
            setIsClicked={setIsClicked}
            currentIndex={currentIndex}
          />
        </div>
        <div className="flex-1 flex flex-row gap-[5px] justify-end pr-[7px] items-center" ref={dropdownRef}>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer relative"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <Icon
              name="user"
              className="text-white
            xl:h-[20px] lg:h-[16px] md:h-[16px]
            xl:w-[20px] lg:w-[16px] md:w-[16px]"
              raw
            />
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
        <UserStatsModal
          isVisible={isUserStatsModalOpen}
          setIsVisible={setIsUserStatsModalOpen}
        />
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
