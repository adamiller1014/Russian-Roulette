import { lazy } from 'react';
import BetActionPart from './BetActionPart';
import PayoutActionPart from './PayoutActionPart';

const PlayButtonArea = lazy(() => import('../../../HomePage/ThirdSection/PlayButtonArea'));
const MiddleBottomBar = () => {
  return (
    <div className="flex w-full h-auto gap-1">
      <BetActionPart />
      <PlayButtonArea />
      <PayoutActionPart />
    </div>
  );
};

export default MiddleBottomBar;
