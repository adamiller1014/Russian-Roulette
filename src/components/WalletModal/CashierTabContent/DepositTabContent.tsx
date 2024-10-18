import QRCode from 'react-qr-code';
import CoinSelection from './CoinSelection';
import Icon from '../../../shared/Icon';

const DepositTabContent = ({ address }) => {
  const coins = ['BTC', 'ETH', 'DAI'];
  return (
    <div
      className="flex flex-col items-center justify-center gap-4"
    >
      <CoinSelection classNames="px-[8rem] !bg-[#1c2127]" coins={coins} />
      <div
        className="relative flex flex-row items-center w-full"
      >
        <input
          type="text"
          name="address"
          className="border border-none w-full flex-auto rounded-[0.25rem]
                    bg-[#1c2127] text-center
                    px-[0.75rem] h-[3rem]
                    text-xs
                    "
          disabled
          value={address}
        />
        <Icon name="copy" size={14} className="absolute right-[1rem] " />
      </div>
      <div className="p-1 bg-white fit-centent">
        <QRCode
          // title="GeeksForGeeks"
          value={address}
          bgColor="white"
          fgColor="black"
          size={200}
        />
      </div>
      <span className="text-[#96989b] text-sm font-montserrat font-bold">
        Only send Bitcoin to this address, credits after one confirmation.
      </span>
    </div>
  );
};

export default DepositTabContent;
