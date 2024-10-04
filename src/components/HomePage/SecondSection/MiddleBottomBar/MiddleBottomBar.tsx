import BetActionPart from './BetActionPart';
import PayoutActionPart from './PayoutActionPart';
import TotalWinDisplay from './TotalWinDisplay';

const MiddleBottomBar = () => {
  return (
    <div className="md:grid flex flex-col md:grid-cols-10 gap-1 md:h-[100px]">
      <BetActionPart />
      <TotalWinDisplay />
      <PayoutActionPart />
    </div>
  );
};

export default MiddleBottomBar;
