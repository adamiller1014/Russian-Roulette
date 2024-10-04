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
      text-xs md:text-[2rem] xl:text-[2.75rem] 2xl:text-[3rem] 3xl:text-[4rem]  4xl:text-[5rem] 
      basis-[60%] h-full
      leading-none font-montserrat font-bold text-black flex items-center justify-center
      px-2
      ${isPlaying 
        ? 'bg-[#767676] shadow-[0px_6px_0px_0px_rgba(82,86,89,1)] !transform-none'
        : 'bg-[#f8bf60] hover:mix-blend-difference shadow-[0px_6px_0px_0px_rgba(153,122,73,1)]'}`}
  >
    PLAY
  </ShadowButton>
));

PlayButton.displayName = 'PlayButton';

export default PlayButton;