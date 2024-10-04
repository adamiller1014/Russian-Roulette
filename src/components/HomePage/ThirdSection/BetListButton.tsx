import React from 'react';
import ShadowButton from '../../../shared/ShadowButton';
import Icon from '../../../shared/Icon';

interface BetListButtonProps {
  isPlaying: boolean;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const BetListButton: React.FC<BetListButtonProps> = React.memo(({ isPlaying, isVisible, setIsVisible }) => (
  <ShadowButton
    disabled={isPlaying}
    onClick={() => setIsVisible(!isVisible)}
    className={`basis-[20%] rounded-l-[5px] flex justify-center items-center px-2 ${isPlaying ? 'bg-[#767676] shadow-[0px_6px_0px_0px_rgba(82,86,89,1)] !transform-none' : 'bg-[#f8bf60] hover:mix-blend-difference shadow-[0px_6px_0px_0px_rgba(153,122,73,1)]'}`}
  >
    <Icon
      name={isVisible ? "Close" : "layerGroup"}
      color="black"
      className="4xl:h-[3rem] 4xl:w-[3rem] xl:h-[2rem] xl:w-[2rem] lg:h-[17.6px] lg:w-[17.6px] md:h-[13.2px] md:w-[13.2px]"
      raw
    />
  </ShadowButton>
));

BetListButton.displayName = 'BetListButton';

export default BetListButton;