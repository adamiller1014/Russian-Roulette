import React, { lazy } from 'react';
import MiddleTopBar from './MiddleTopBar';
import BottomColorBoxList from './BottomColorBoxList';
import MiddleBottomBar from './MiddleBottomBar/MiddleBottomBar';
import VideoCounter from './VideoCounter';
import { useVideoCounter } from '../../../hooks/useVideoCounter';

const PlayButtonArea = lazy(() => import('../../HomePage/ThirdSection/PlayButtonArea'));

const SecondSection: React.FC = () => {
  const { counter, isShowVideo, playVideo } = useVideoCounter();

  return (
    <div className="flex flex-col order-1 gap-1 col-span-full xl:col-span-9 lg:col-span-12 xl:order-2">
      <MiddleTopBar />
      <VideoCounter counter={counter} isShowVideo={isShowVideo} playVideo={playVideo} />
      <BottomColorBoxList />
      <div className='block md:hidden'>
        <PlayButtonArea />
      </div>
      <MiddleBottomBar />
    </div>
  );
};

export default SecondSection;