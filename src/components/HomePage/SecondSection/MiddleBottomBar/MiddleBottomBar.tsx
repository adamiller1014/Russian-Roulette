import { lazy } from 'react';
import BetActionPart from './BetActionPart';
import PayoutActionPart from './PayoutActionPart';

const PlayButtonArea = lazy(() => import('../../../HomePage/ThirdSection/PlayButtonArea'));
const MiddleBottomBar = () => {
  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex flex-wrap w-full h-auto gap-1">
        <BetActionPart />
        <div className="hidden lg:flex w-[30%]">
          <PlayButtonArea />
        </div>
        <PayoutActionPart />
      </div>
      <div className="flex w-full md:h-20 h-16 lg:hidden">
        <PlayButtonArea />
      </div>
    </div>
  );
};

export default MiddleBottomBar;
