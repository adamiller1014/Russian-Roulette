/* eslint-disable prettier/prettier */
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
      <div className="flex w-full lg:hidden">
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
      <div className='flex justify-between px-10 mt-8 text-white md:hidden'>
        <div className='flex flex-col items-center gap-1 cursor-pointer'>
          <div>
            <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.25C0 2.51562 2.22656 0.25 5 0.25V9H0V5.25ZM0 15.875V10.25H5V17.75H1.875C0.820312 17.75 0 16.9297 0 15.875ZM16.25 10.25V17.75H6.25V10.25H8.75V11.5C8.75 12.2031 9.29688 12.75 10 12.75H12.5C13.1641 12.75 13.75 12.2031 13.75 11.5V10.25H16.25ZM20.625 17.75H17.5V10.25H22.5V15.875C22.5 16.9297 21.6406 17.75 20.625 17.75ZM22.5 5.25V9H17.5V0.25C20.2344 0.25 22.5 2.51562 22.5 5.25ZM16.25 9H13.75V7.75C13.75 7.08594 13.1641 6.5 12.5 6.5H10C9.29688 6.5 8.75 7.08594 8.75 7.75V9H6.25V0.25H16.25V9ZM11.875 8.375V10.875C11.875 11.2266 11.5625 11.5 11.25 11.5C10.8984 11.5 10.625 11.2266 10.625 10.875V8.375C10.625 8.0625 10.8984 7.75 11.25 7.75C11.5625 7.75 11.875 8.0625 11.875 8.375Z" fill="white" />
            </svg>
          </div>
          <div>Mint</div>
        </div>
        <div className='flex flex-col items-center gap-1 cursor-pointer'>
          <div>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.85938 0.640625L10.6094 4.39062C11.1172 4.85938 11.1172 5.67969 10.6094 6.14844C10.1406 6.65625 9.32031 6.65625 8.85156 6.14844L7.25 4.54688V16.5C7.25 17.2031 6.66406 17.75 6 17.75C5.29688 17.75 4.75 17.2031 4.75 16.5V4.54688L3.10938 6.14844C2.64062 6.65625 1.82031 6.65625 1.35156 6.14844C0.84375 5.67969 0.84375 4.85938 1.35156 4.39062L5.10156 0.640625C5.57031 0.132812 6.39062 0.132812 6.85938 0.640625ZM20.6094 13.6484L16.8594 17.3984C16.3906 17.9062 15.5703 17.9062 15.1016 17.3984L11.3516 13.6484C10.8438 13.1797 10.8438 12.3594 11.3516 11.8906C11.8203 11.3828 12.6406 11.3828 13.1094 11.8906L14.75 13.4922V1.5C14.75 0.835938 15.2969 0.25 16 0.25C16.6641 0.25 17.25 0.835938 17.25 1.5V13.4922L18.8516 11.8906C19.3203 11.3828 20.1406 11.3828 20.6094 11.8906C21.1172 12.3594 21.1172 13.1797 20.6094 13.6484Z" fill="white" />
            </svg>
          </div>
          <div>Swap</div>
        </div>
        <div className='flex flex-col items-center gap-1 text-[#f8bf60] cursor-pointer'>
          <div>
            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.85156 0.523438L14.1016 7.39844C14.6484 7.75 15 8.375 15 9C15 9.66406 14.6484 10.2891 14.1016 10.6016L2.85156 17.4766C2.26562 17.8281 1.52344 17.8672 0.9375 17.5156C0.351562 17.2031 0 16.5781 0 15.875V2.125C0 1.46094 0.351562 0.835938 0.9375 0.523438C1.52344 0.171875 2.26562 0.171875 2.85156 0.523438Z" fill="#F6BF61" />
            </svg>
          </div>
          <div>Play</div>
        </div>
        <div className='flex flex-col items-center gap-1 cursor-pointer'>
          <div>
            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.875 3.75V3.78906C15.6406 3.78906 15.4453 3.75 15.25 3.75H10.25C9.58594 3.75 8.96094 3.86719 8.375 3.98438C8.375 3.90625 8.375 3.82812 8.375 3.75C8.375 1.67969 10.0547 0 12.125 0C14.1953 0 15.875 1.67969 15.875 3.75ZM15.25 5C15.3672 5 15.5234 5.03906 15.6406 5.03906C15.7969 5.03906 15.9531 5.03906 16.1484 5.07812C16.8125 4.29688 17.8281 3.75 19 3.75H19.4297C19.8203 3.75 20.1328 4.14062 20.0547 4.53125L19.5078 6.71875C20.1328 7.26562 20.6016 7.96875 20.9531 8.75H21.5C22.1641 8.75 22.75 9.33594 22.75 10V13.75C22.75 14.4531 22.1641 15 21.5 15H20.25C19.8594 15.5078 19.4688 15.8984 19 16.25V18.75C19 19.4531 18.4141 20 17.75 20H16.5C15.7969 20 15.25 19.4531 15.25 18.75V17.5H10.25V18.75C10.25 19.4531 9.66406 20 9 20H7.75C7.04688 20 6.5 19.4531 6.5 18.75V16.25C5.13281 15.2344 4.19531 13.6719 4 11.875H2.90625C1.42188 11.875 0.25 10.7031 0.25 9.21875C0.25 7.77344 1.42188 6.5625 2.90625 6.5625H3.0625C3.57031 6.5625 4 6.99219 4 7.5C4 8.04688 3.57031 8.4375 3.0625 8.4375H2.90625C2.47656 8.4375 2.125 8.78906 2.125 9.21875C2.125 9.64844 2.47656 10 2.90625 10H4.11719C4.58594 7.69531 6.34375 5.82031 8.64844 5.23438C9.15625 5.07812 9.70312 5 10.25 5H15.25ZM17.75 10.3125C17.75 9.80469 17.3203 9.375 16.8125 9.375C16.2656 9.375 15.875 9.80469 15.875 10.3125C15.875 10.8594 16.2656 11.25 16.8125 11.25C17.3203 11.25 17.75 10.8594 17.75 10.3125Z" fill="white" />
            </svg>
          </div>
          <div>Stake</div>
        </div>
        <div className='flex flex-col items-center gap-1 cursor-pointer'>
          <div>
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 8.375C21 12.8672 16.5078 16.5 11 16.5C9.51562 16.5 8.14844 16.2656 6.89844 15.8359C6.46875 16.1484 5.6875 16.6172 4.78906 17.0078C3.85156 17.4375 2.71875 17.75 1.625 17.75C1.35156 17.75 1.11719 17.6328 1.03906 17.3984C0.921875 17.1641 1 16.8906 1.15625 16.6953C1.19531 16.6953 1.19531 16.6562 1.23438 16.6172C1.27344 16.5781 1.35156 16.5 1.42969 16.4219C1.58594 16.2266 1.78125 15.9141 2.01562 15.5625C2.40625 14.9375 2.75781 14.0781 2.83594 13.1016C1.66406 11.7734 1 10.1719 1 8.375C1 3.92188 5.45312 0.25 11 0.25C16.5078 0.25 21 3.92188 21 8.375Z" fill="white" />
            </svg>
          </div>
          <div>Chat</div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
