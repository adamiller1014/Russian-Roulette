import React, { lazy, Suspense, useState, useCallback } from 'react';
import { sharedStyles } from '../../../styles/sharedStyles';

const BetsHeader = lazy(() => import('./BetsHeader'));
const BetsContent = lazy(() => import('./BetsContent'));
const BetTypeSelector = lazy(() => import('./BetTypeSelector'));
const BonusModal = lazy(() => import('./BonusModal'));

type BetType = 'GROUP' | 'SOLO';

const FirstSection: React.FC = () => {
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
    <section className={`
      ${sharedStyles.flexCol}
      ${sharedStyles.textPrimary}
      md:col-span-3 gap-1 md:order-1 order-2
    `}>
      <Suspense fallback={<div className={sharedStyles.skeleton}>Loading...</div>}>
        <BetsHeader />
        <BetsContent />
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
      </Suspense>
    </section>
  );
};

export default React.memo(FirstSection);