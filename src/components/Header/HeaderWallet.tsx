import { useState } from 'react';
import Icon from '../../shared/Icon';
import ScrollableComponent from '../../shared/ScrollbarComponent';
import ShadowButton from '../../shared/ShadowButton';
import WalletModal from '../WalletModal/WalletModal';

const HeaderWallet = ({ isClicked, setIsClicked, cryptoList, currentIndex, setCurrentIndex }) => {
  const [isVisibleWalletModal, setIsVisibleWalletModal] = useState(false);
  const address = "e60351d7c15799b6126eeeda3bced558d7d165ff7d3c11d071a5413719dcd4c1"; // Replace with the actual address

  return (
    <>
      <div
        className="relative
        xl:text-base lg:text-xs md:text-[9.6px] text-[10px]"
      >
        <ShadowButton
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className="hover:mix-blend-exclusion gap-[5px]
          flex justify-center items-center bg-[#2c3137]
          xl:shadow-[0px_6px_0px_0px_rgba(23,28,34,1)] lg:shadow-[0px_5px_0px_0px_rgba(23,28,34,1)] 
          xl:w-[270px] xl:h-[38px] lg:w-[216px] md:h-[30.4px] md:w-[162px]
          rounded-l-[6px]  w-[120px] h-[30px]
          xl:rounded-l-[10px] lg:rounded-l-[8px] md:rounded-l-[6px]
          truncate"
        >
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(cryptoList[currentIndex])
            .replace('$', '')}
          <Icon
            name="diamondIcon"
            color="#f8bf60"
            className="xl:h-[17px] lg:h-[13.6px] md:h-[10.2px] h-[14px]"
            raw
          />
          {isClicked ? (
            <Icon
              name="sortArrowUp"
              color="white"
              className="absolute md:right-[20px] right-[5px]"
              size={10}
              raw
            />
          ) : (
            <Icon
              name="sortArrowDown"
              color="white"
              className="absolute md:right-[20px] right-[5px]"
              size={10}
              raw
            />
          )}
        </ShadowButton>
        <div
          className={`transition-all duration-300 ease-in-out ${isClicked ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
          xl:rounded-[10px] lg:rounded-[8px] md:rounded-[6px] z-[2] absolute top-[100%] mt-[5px] bg-[#2c3137] w-full shadow-lg`}
        >
          <ScrollableComponent className={`max-h-[200px] overflow-y-auto`}>
            {cryptoList &&
              cryptoList.length > 0 &&
              cryptoList.map((r: any, i: number) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setIsClicked(false);
                  }}
                  className="xl:h-[35px] md:h-[28px] hover:bg-[#171c22] border-[1px] border-[#171c22] w-full flex items-center justify-center transition-colors duration-200"
                >
                  {r}
                </button>
              ))}
          </ScrollableComponent>
        </div>
      </div>
      <ShadowButton
        className="hover:mix-blend-difference text-[black] flex justify-center items-center bg-[#f8bf60]
        shadow-[0px_6px_0px_0px_rgba(153,122,73,1)] w-[2.375rem] h-[2.375rem] rounded-r-[0.625rem]"
        onClick={() => setIsVisibleWalletModal(true)}
      >
        <Icon
          name="wallet"
          color="black"
          className="xl:h-[16px] lg:h-[11.2px] md:h-[9.6px] xl:w-[16px] lg:w-[11.2px] md:w-[9.6px] w-[10px] h-[10px]"
          raw
        />
      </ShadowButton>
      <WalletModal 
        isVisible={isVisibleWalletModal} 
        setIsVisible={setIsVisibleWalletModal} 
        address={address} // Pass the address prop here
      />
    </>
  );
};

export default HeaderWallet;
