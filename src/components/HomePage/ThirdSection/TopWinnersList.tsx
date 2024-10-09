import React, { useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTopWinners } from '../../../hooks/useTopWinners';
import TopWinner from '../TopWinner/TopWinner';
import ScrollToBottomButton from './ScrollToBottomButton';
import { useScrollDetection } from '../../../hooks/useScrollDetection';
// import ScrollableComponent from '../../../shared/ScrollbarComponent';

const TopWinnersList: React.FC = () => {
  const topWinners = useTopWinners();
  const { parentRef, lastItemRef, isOverflowing, isLastItemVisible, scrollToBottom } = useScrollDetection();

  const containerClassName = useMemo(() => "flex flex-col gap-1 px-2 py-2 bg-[#2C3137]", []);

  const getItemClassName = useCallback((index: number) => {
    if (index === 0) return 'rounded-t-lg';
    if (index === topWinners.length - 1) return 'rounded-b-lg';
    return '';
  }, [topWinners.length]);

  return (
    <div className="relative h-[calc(100vh-350px)]">
      <div
        ref={parentRef}
        className={`h-full overflow-auto ${containerClassName}`}
      >
        {topWinners.map((winner, index) => (
          <motion.div
            key={winner.number}
            className={`w-full ${getItemClassName(index)}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            ref={index === topWinners.length - 1 ? lastItemRef : null}
          >
            <TopWinner {...winner} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isOverflowing && !isLastItemVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <ScrollToBottomButton onClick={scrollToBottom} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(TopWinnersList);