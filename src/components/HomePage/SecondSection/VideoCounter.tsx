import React, { useRef, useEffect } from 'react';
import PistolImg from '../../../assets/images/pistol.svg';
import NumberProcess from '../../NumberProcess';

interface VideoCounterProps {
  counter: number;
  isShowVideo: boolean;
  playVideo: () => Promise<void>;
}

const VideoCounter: React.FC<VideoCounterProps> = ({ counter, isShowVideo, playVideo }) => {
  const vidRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (counter <= 0 && !isShowVideo) {
      playVideo();
    }
  }, [counter, isShowVideo, playVideo]);

  return (
    <div className="!max-h-[100%] flex overflow-hidden md:h-[calc(100vh-28.5rem)] w-[full] bg-[#2c3137] justify-center items-center relative">
      <div
        className={`flex w-full h-full absolute top-0 left-0 transition-opacity duration-300 ease-in-out bg-[#2c3137] justify-center items-center text-white xl:text-[12.5rem] md:text-[10rem] text-[80px] ${
          counter > 0.3 ? 'opacity-1' : 'opacity-0'
        }`}
      >
        <NumberProcess number={counter} shouldRemoveFloat={false} />
      </div>
      <img src={PistolImg} alt="pistol" className={`w-[60%] ${isShowVideo ? '' : 'hidden'}`} />
      <video ref={vidRef} className={`w-full ${isShowVideo ? 'hidden' : ''}`} style={{ visibility: 'hidden' }}>
        {/* Source will be set dynamically */}
      </video>
    </div>
  );
};

export default VideoCounter;
