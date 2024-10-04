import { FC, ReactNode } from 'react';

interface IShadowButtonProps {
  id?: string;
  children?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: any) => void;
  disabled?: boolean;
  topColor?: string;
  bottomColor?: string;
}

const ShadowButton: FC<IShadowButtonProps> = ({
  id,
  children,
  className,
  onClick,
  type,
  disabled,
  topColor,
  bottomColor,
  ...rest
}) => {
  const buttonStyle = topColor && bottomColor
    ? {
        backgroundColor: topColor,
        boxShadow: `0 6px 0 ${bottomColor}`,
      }
    : {};

  return (
    <button
      id={id}
      type={`${type ? type : 'button'}`}
      className={`relative
            overflow-hidden
            transition-all duration-100 ease-in-out
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
            ${disabled ? '' : 'active:translate-y-[6px] active:shadow-none'}
            ${className || ''}`}
      style={buttonStyle}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ShadowButton;