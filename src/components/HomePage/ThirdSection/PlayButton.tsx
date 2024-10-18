import React from 'react';
import ShadowButton from '../../../shared/ShadowButton';

interface PlayButtonProps {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const PlayButton: React.FC<PlayButtonProps> = React.memo(({ isPlaying, setIsPlaying }) => (
  <ShadowButton
    disabled={isPlaying}
    onClick={() => setIsPlaying(true)}
    className={`
      text-[24px] lg:text-[36px] xl:text-[2rem] 
      xl:rounded-none
      lg:rounded-lg
      basis-[60%] 
      leading-none font-montserrat font-bold w-full text-black flex items-center justify-center
      px-2
      xl:h-full
      lg:h-[70%]
      h-full
      ${isPlaying
        ? 'bg-[#767676] shadow-[0px_6px_0px_0px_rgba(82,86,89,1)] !transform-none'
        : 'bg-[#f8bf60] hover:mix-blend-difference shadow-[0px_6px_0px_0px_rgba(153,122,73,1)]'
      }`}>
    PLAY
  </ShadowButton>
));

PlayButton.displayName = 'PlayButton';

export default PlayButton;
