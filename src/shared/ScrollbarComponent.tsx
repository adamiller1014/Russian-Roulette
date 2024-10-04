import React, { ReactNode, FC, useEffect, RefObject, useState } from 'react';
import SimpleBar from 'simplebar-react';

interface IScrollableComponent {
  children: ReactNode;
  className?: string;
  height?: string;
  onOverflowChange?: (isOverflowing: boolean) => void;
  scrollableRef?: RefObject<HTMLElement>;
}

const ScrollableComponent: FC<IScrollableComponent> = ({ 
  children, 
  className, 
  height, 
  onOverflowChange,
  scrollableRef
}) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (scrollableRef?.current) {
      const checkOverflow = () => {
        const element = scrollableRef.current!;
        const hasOverflow = element.scrollHeight > element.clientHeight;
        const isScrolledToBottom = element.scrollHeight <= element.clientHeight + element.scrollTop + 1;
        setIsOverflowing(hasOverflow && !isScrolledToBottom);
      };

      checkOverflow();
      scrollableRef.current.addEventListener('scroll', checkOverflow);
      window.addEventListener('resize', checkOverflow);

      return () => {
        scrollableRef.current?.removeEventListener('scroll', checkOverflow);
        window.removeEventListener('resize', checkOverflow);
      };
    }
  }, [scrollableRef]);

  useEffect(() => {
    if (onOverflowChange) {
      onOverflowChange(isOverflowing);
    }
  }, [isOverflowing, onOverflowChange]);

  return (
    <SimpleBar 
      style={{ height: height || '' }} 
      className={className} 
      scrollableNodeProps={{ ref: scrollableRef }}
    >
      {children}
    </SimpleBar>
  );
};

export default ScrollableComponent;
