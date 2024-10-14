import React, { useEffect } from 'react';
import NumberProcess from '../../NumberProcess';
import PistolImg from '../../../assets/images/Layer1.png';
import HammerImg from '../../../assets/images/Layer3.png';
import TriggerImg from '../../../assets/images/Layer4.png';

interface VideoCounterProps {
  counter: number;
  isShowVideo: boolean;
  playVideo: () => Promise<void>;
}

const VideoCounter: React.FC<VideoCounterProps> = ({ counter, isShowVideo, playVideo }) => {
  // const vidRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (counter <= 0 && !isShowVideo) {
      playVideo();
    }
  }, [counter, isShowVideo, playVideo]);

  return (
    <div
      className="!max-h-[100%] flex overflow-hidden
      md:h-[calc(100vh-332px)] xxl:h-[calc(100vh-409px)]
      h-[200px]
      w-full bg-[#2c3137] justify-center items-center
      relative">
      <div
        className={`flex w-full h-full
          absolute top-0 left-0
          transition-opacity duration-300 ease-in-out
          bg-[#2c3137]
          justify-center items-center
          text-white z-[3] xxl:text-[240px]
          xl:text-[160px] md:text-[96px] text-[80px] ${counter > 0.3 ? 'opacity-1' : 'opacity-0'}`}>
        {<NumberProcess number={counter >= 0 ? counter : 0} shouldRemoveFloat={false} />}
      </div>
      <div className="absolute">
        <img
          src={PistolImg}
          alt="pistol"
          className="relative 
          xl:w-[400px] lg:w-[320px] w-[240px] h-auto xxl:w-[700px]
          z-[1]"
        />
        <img
          src={HammerImg}
          alt="HammerImg"
          className={`absolute top_liver
          xl:w-[70px] lg:w-[56px] w-[42px] xxl:w-[100px]
          xl:top-[18px] lg:top-[14.4px] top-[10.8px] xxl:top-[35px]
          xl:right-[80px] lg:right-[64px] right-[48px] xxl:right-[156px]
          ${counter <= 0 && !isShowVideo ? 'rotator1' : ''}`}
        />
        <img
          src={TriggerImg}
          alt="TriggerImg"
          className={`absolute liver
            xl:w-[40px] lg:w-[32px] w-[24px] xxl:w-[76px]
            xl:top-[88px] lg:top-[70.4px] top-[52.8px] xxl:top-[147px]
            xl:right-[155px] lg:right-[124px] right-[93px] xxl:right-[270px]
            ${counter <= 0 && !isShowVideo ? 'rotator2' : ''}`}
        />
        <div
          className={`absolute
          xl:w-[65px] lg:w-[55px] w-[39px] xxl:w-[117px]
          xl:top-[15px] lg:top-[12px] top-[9px] xxl:top-[30px]
          xl:right-[164px] lg:right-[131.2px] right-[98.4px] xxl:right-[286px]
          xl:h-[65px] lg:h-[52px] h-[39px] xxl:h-[130px]
          Rotator ${counter <= 0 && !isShowVideo ? 'rotator3' : ''}`}
        />
      </div>
    </div>
  );
};

export default VideoCounter;
