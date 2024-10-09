import React from 'react';
import Icon from '../../../shared/Icon';

interface ScrollToBottomButtonProps {
  onClick: () => void;
}

const ScrollToBottomButton: React.FC<ScrollToBottomButtonProps> = React.memo(({ onClick }) => (
  <div 
    className="absolute bottom-0 left-0 right-0 flex items-end justify-center cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-gradient-to-t from-[#2C3137] to-transparent h-8 w-full absolute bottom-0"></div>
    <button 
      className="absolute z-10 flex flex-col items-center justify-center p-2 mb-2 text-base transition-colors duration-200 rounded-full"
      aria-label="Scroll to bottom"
    >
      <Icon name="iosArrowDown" color="white" raw />
    </button>
  </div>
));

ScrollToBottomButton.displayName = 'ScrollToBottomButton';

export default ScrollToBottomButton;