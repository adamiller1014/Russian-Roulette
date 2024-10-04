import React from 'react';
import MiddleTopBar from './MiddleTopBar';
import BottomColorBoxList from './BottomColorBoxList';
import MiddleBottomBar from './MiddleBottomBar/MiddleBottomBar';
import VideoCounter from './VideoCounter';
import { useVideoCounter } from '../../../hooks/useVideoCounter';

const SecondSection: React.FC = () => {
  const { counter, isShowVideo, playVideo } = useVideoCounter();

  return (
    <div className="md:col-span-9 flex flex-col gap-1 md:order-2 order-1">
      <MiddleTopBar />
      <VideoCounter counter={counter} isShowVideo={isShowVideo} playVideo={playVideo} />
      <BottomColorBoxList />
      <MiddleBottomBar />
    </div>
  );
};

export default SecondSection;