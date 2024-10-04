import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UserAndMark from './UserAndMark';

interface Bet {
  mark: number;
  type: string;
  name: string;
  dValue: number;
  xValue: number;
}

const betData: Bet[] = [
  { mark: 758, type: 'yellow', name: 'LuckyAl1ce', dValue: 1234.56, xValue: 2.5 },
  { mark: 63, type: 'blue', name: 'BobG4mbler', dValue: 5678.90, xValue: 3.2 },
  { mark: 68, type: 'blue', name: 'Charlie_Bets', dValue: 9876.54, xValue: 1.8 },
  { mark: 22, type: 'green', name: 'DavidL22', dValue: 4321.00, xValue: 4.7 },
  { mark: 97, type: 'purple', name: 'Eva_Winner', dValue: 7890.12, xValue: 2.1 },
  { mark: 105, type: 'blue', name: 'Frank99', dValue: 3456.78, xValue: 5.3 },
  { mark: 42, type: 'yellow', name: 'GraceG', dValue: 6543.21, xValue: 1.5 },
  { mark: 89, type: 'purple', name: 'HighRoller_H', dValue: 8765.43, xValue: 3.8 },
  { mark: 31, type: 'yellow', name: 'IreneIron88', dValue: 2345.67, xValue: 2.9 },
  { mark: 76, type: 'blue', name: 'Jackpot_Joe', dValue: 9012.34, xValue: 4.2 },
  { mark: 124, type: 'green', name: 'Kelly_K1ng', dValue: 1543.87, xValue: 6.1 },
  { mark: 55, type: 'purple', name: 'LuckyLuke77', dValue: 7654.32, xValue: 1.9 },
  { mark: 83, type: 'yellow', name: 'Max_Bet', dValue: 3210.98, xValue: 3.5 },
  { mark: 17, type: 'blue', name: 'Nancy1985', dValue: 8901.23, xValue: 2.7 },
  { mark: 101, type: 'green', name: 'Oscar_Odds', dValue: 4567.89, xValue: 5.8 },
];

const AllBets: React.FC = () => {
  const bets = useMemo(() => betData, []);

  return (
    <div className="bg-[#2c3137] flex flex-col w-full gap-y-0.5 pb-2 font-montserrat font-bold">
      <AnimatePresence>
        {bets.map((bet) => (
          <motion.div
            key={`${bet.name}-${bet.mark}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <UserAndMark {...bet} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(AllBets);
