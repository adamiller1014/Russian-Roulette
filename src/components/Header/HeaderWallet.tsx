import { useEffect, useState } from 'react';
import Icon from '../../shared/Icon';
import ScrollableComponent from '../../shared/ScrollbarComponent';
import ShadowButton from '../../shared/ShadowButton';

const HeaderWallet = ({ isClicked, setIsClicked, cryptoList, currentIndex, setCurrentIndex, isVisibleStakesModal, setIsVisibleStakesModal, setIsVisibleWalletModal }) => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };


  return (
    <div className="relative flex items-center justify-center text-white">
      <ShadowButton
        className="hover:mix-blend-difference text-[black] flex justify-center items-center bg-[#f8bf60]
        shadow-[0px_6px_0px_0px_rgba(153,122,73,1)] w-[2.375rem] px-10 h-[2.375rem] rounded-l-[0.3rem]"
        onClick={() => setIsVisibleStakesModal(!isVisibleStakesModal)}>
        <p>{formatTime(currentTime)}</p>
      </ShadowButton>
      <div className="relative h-[2.375rem] xl:text-base lg:text-xs md:text-[9.6px] text-[10px] ">
        <ShadowButton
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className="hover:mix-blend-exclusion gap-[5px]
          flex justify-center items-center bg-[#2c3137]
          xl:shadow-[0px_6px_0px_0px_rgba(23,28,34,1)] lg:shadow-[0px_5px_0px_0px_rgba(23,28,34,1)] 
          h-full px-10
          truncate">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
            .format(cryptoList[currentIndex].amount)
            .replace('$', '')}
          <Icon
            name={`${cryptoList[currentIndex].type == "gems" ? "diamondIcon" : cryptoList[currentIndex].type == "btc" ? "BtcIcon" : cryptoList[currentIndex].type == "eth" ? "EthIcon" : "dollarIcon"}`}
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

      </div>
      <ShadowButton
        className="hover:mix-blend-difference text-[black] flex justify-center items-center bg-[#f8bf60]
        shadow-[0px_6px_0px_0px_rgba(153,122,73,1)] w-[2.375rem] h-[2.375rem] rounded-r-[0.3rem]"
        onClick={() => setIsVisibleWalletModal(true)}>
        <Icon
          name="wallet"
          color="black"
          className="xl:h-[16px] lg:h-[11.2px] md:h-[9.6px] xl:w-[16px] lg:w-[11.2px] md:w-[9.6px] w-[10px] h-[10px]"
          raw
        />
      </ShadowButton>
      <div
        className={`absolute transition-all duration-300 ease-in-out ${isClicked ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
          xl:rounded-[10px] lg:rounded-[8px] md:rounded-[6px] z-[2] absolute top-[100%] mt-[5px] bg-[#2c3137] w-full shadow-lg`}>
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
                className="xl:h-[35px] md:h-[28px] hover:bg-[#171c22]  px-4 w-full flex items-center justify-between transition-colors duration-200">
                <p>{r.amount}</p>
                <div className='flex items-center justify-center'>
                  <Icon
                    name={`${r.type == "gems" ? "diamondIcon" : r.type == "btc" ? "BtcIcon" : r.type == "eth" ? "EthIcon" : "dollarIcon"}`}
                    color="#f8bf60"
                    className='mr-1'
                    raw
                  />
                  <p>{r.type.toUpperCase()}</p>
                </div>
              </button>
            ))}
        </ScrollableComponent>
      </div>

    </div>
  );
};

export default HeaderWallet;
