import React, { useState, useCallback } from 'react';
import { useMain } from '../../../providers/MainProvider';
import AutoPlayBar from '../SecondSection/MiddleBottomBar/AutoPlayBar';
import BetListModal from '../SecondSection/BetListModal';
import BetListButton from './BetListButton';
import PlayButton from './PlayButton';
import AutoPlayButton from './AutoPlayButton';

const PlayButtonArea: React.FC = () => {
  const { isPlaying, setIsPlaying } = useMain();
  const [isOpenAutoPlaySetting, setIsOpenAutoPlaySetting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBetList, setSelectedBetList] = useState(5);
  const betList = [5, 10];

  const toggleAutoPlaySetting = useCallback(() => setIsOpenAutoPlaySetting(prev => !prev), []);
  const toggleBetListVisibility = useCallback(() => setIsVisible(prev => !prev), []);

  return (
    <div className="bg-[#2C3137] flex justify-center items-center p-2 sm:p-3 md:p-4 relative h-32 sm:h-36 md:h-32">
      <div className="flex w-full gap-0.5 h-full">
        <BetListButton
          isPlaying={isPlaying}
          isVisible={isVisible}
          setIsVisible={toggleBetListVisibility}
        />
        <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <AutoPlayButton 
          isPlaying={isPlaying} 
          isOpenAutoPlaySetting={isOpenAutoPlaySetting} 
          setIsOpenAutoPlaySetting={toggleAutoPlaySetting}
        />

        {isOpenAutoPlaySetting && (
          <div className="absolute bottom-full right-0 z-10">
            <AutoPlayBar className="rounded-md p-2" />
          </div>
        )}
      </div>

      <BetListModal
        betList={betList}
        isVisible={isVisible}
        setIsVisible={toggleBetListVisibility}
        selectedBetList={selectedBetList}
        setSelectedBetList={setSelectedBetList}
      />
    </div>
  );
};

export default React.memo(PlayButtonArea);