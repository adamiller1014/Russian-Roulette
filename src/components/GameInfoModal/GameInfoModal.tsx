import { useEffect, useState } from 'react';
import Modal from '../../shared/Modal';
import DividerDiv from '../DividerDiv';
import ShortGameInfo from './ShortGameInfo';
import DetailedGameInfo from './DetailedGameInfo';

const GameInfoModal = ({ isVisible, setIsVisible }) => {
  const [isDropped, setIsDropped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    if (!isDropped) {
      setIsExpanded(false);
    }
  }, [isDropped]);
  return (
    <Modal
      classNames={`!gap-0 text-white
      !absolute
      !top-[10px]
      w-[95%]
      ${
        isExpanded
          ? 'xl:w-[800px] lg:w-[640px] md:w-[480px]'
          : 'xl:w-[700px] lg:w-[560px] md:w-[400px]'
      }`}
      onClose={() => {
        setIsVisible(false);
      }}
      showCloseButton
      title="GAME INFORMATION"
      isVisible={isVisible}
    >
      <div
        className="flex flex-col
            md:gap-[10px] mx-[5px] pb-[15px] gap-[5px] text-[8px]
            xl:text-[12px] lg:text-[9.6px] md:text-[7.2px]"
      >
        <ShortGameInfo />
        <DividerDiv className="!bg-[#1c2127]" />
        <DetailedGameInfo
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          isDropped={isDropped}
          setIsDropped={setIsDropped}
        />
      </div>
    </Modal>
  );
};

export default GameInfoModal;
