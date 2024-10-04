import React from 'react';
import Icon from '../../../shared/Icon';

interface ScrollToBottomButtonProps {
  onClick: () => void;
}

const ScrollToBottomButton: React.FC<ScrollToBottomButtonProps> = React.memo(({ onClick }) => (
  <div 
    className="absolute bottom-0 left-0 right-0 flex justify-center items-end cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-gradient-to-t from-[#2C3137] to-transparent h-8 w-full absolute bottom-0"></div>
    <button 
      className="text-base flex flex-col justify-center items-center relative z-10 mb-2 p-2 rounded-full transition-colors duration-200"
      aria-label="Scroll to bottom"
    >
      <Icon name="iosArrowDown" color="white" raw />
    </button>
  </div>
));

ScrollToBottomButton.displayName = 'ScrollToBottomButton';

export default ScrollToBottomButton;