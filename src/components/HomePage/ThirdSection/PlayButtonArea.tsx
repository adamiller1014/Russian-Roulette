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
    <div className="bg-[#2C3137] flex w-full justify-center items-center p-2 sm:p-3 md:p-4 relative flex-1">
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
          <div className="absolute right-0 z-10 bottom-full">
            <AutoPlayBar className="p-2 rounded-md" />
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