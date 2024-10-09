import React, { lazy, useCallback, useState } from 'react';
import MiddleTopBar from './MiddleTopBar';
import BottomColorBoxList from './BottomColorBoxList';
import MiddleBottomBar from './MiddleBottomBar/MiddleBottomBar';
import VideoCounter from './VideoCounter';
import { useVideoCounter } from '../../../hooks/useVideoCounter';

import TotalWinDisplay from './MiddleBottomBar/TotalWinDisplay';
import BonusModal from '../FirstSection/BonusModal';
const BetTypeSelector = lazy(() => import('./BetTypeSelector'));

type BetType = 'GROUP' | 'SOLO';

const SecondSection: React.FC = () => {
  const { counter, isShowVideo, playVideo } = useVideoCounter();
  const [selectedBetType, setSelectedBetType] = useState<BetType>('GROUP');
  const [isBonusModalOpen, setIsBonusModalOpen] = useState(false);

  const handleBetTypeSelect = useCallback((type: BetType) => {
    setSelectedBetType(type);
    // Add any additional logic here, e.g., fetching new data based on the selected type
  }, []);

  const handleBuyBonusClick = useCallback(() => {
    setIsBonusModalOpen(true);
  }, []);

  const handleCloseBonusModal = useCallback(() => {
    setIsBonusModalOpen(false);
  }, []);

  const handleSelectBonus = useCallback((bonusType: string) => {
    console.log(`Selected bonus: ${bonusType}`);
    // Add logic to handle the selected bonus
    setIsBonusModalOpen(false);
  }, []);

  return (
    <div className="flex flex-col gap-1 col-span-full xl:col-span-9 lg:col-span-12 h-[calc(100vh-150px)]">
      <MiddleTopBar />
      <VideoCounter counter={counter} isShowVideo={isShowVideo} playVideo={playVideo} />
      <BottomColorBoxList />
      <TotalWinDisplay />
      <MiddleBottomBar />
      <div className='flex w-full lg:hidden'>
      <BetTypeSelector
        selectedType={selectedBetType}
        onTypeSelect={handleBetTypeSelect}
        onBuyBonusClick={handleBuyBonusClick}
      />
      <BonusModal
        isOpen={isBonusModalOpen}
        onClose={handleCloseBonusModal}
        onSelectBonus={handleSelectBonus}
      />
      </div>
    </div>
  );
};

export default SecondSection;
