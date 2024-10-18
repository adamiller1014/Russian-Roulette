import React from 'react';
import ShadowButton from '../../../shared/ShadowButton';
import Icon from '../../../shared/Icon';

interface AutoPlayButtonProps {
  isPlaying: boolean;
  isOpenAutoPlaySetting: boolean;
  setIsOpenAutoPlaySetting: (isOpen: boolean) => void;
}

const AutoPlayButton: React.FC<AutoPlayButtonProps> = React.memo(({
  isPlaying,
  isOpenAutoPlaySetting,
  setIsOpenAutoPlaySetting
}) => (
  <ShadowButton
    disabled={isPlaying}
    onClick={() => setIsOpenAutoPlaySetting(!isOpenAutoPlaySetting)}
    className={`
      basis-[20%] rounded-r-[5px]
      flex items-center justify-center w-full
      px-2
      ${isPlaying
        ? 'bg-[#767676] shadow-[0px_6px_0px_0px_rgba(82,86,89,1)] !transform-none'
        : 'bg-[#f8bf60] hover:mix-blend-difference shadow-[0px_6px_0px_0px_rgba(153,122,73,1)]'
      }
    `}
    aria-label={isOpenAutoPlaySetting ? "Close auto play settings" : "Open auto play settings"}
  >
    <Icon
      name={isOpenAutoPlaySetting ? "Close" : "SyncIcon"}
      color="black"
      className="4xl:h-[2.5rem] 4xl:w-[2.5rem] 
                 3xl:h-[3rem] 3xl:w-[3rem] 
                 xl:h-[2rem] xl:w-[2rem] 
                 lg:h-[17.6px] lg:w-[17.6px] 
                 md:h-[13.2px] md:w-[13.2px]"
      raw
    />
  </ShadowButton>
));

AutoPlayButton.displayName = 'AutoPlayButton';

export default AutoPlayButton;