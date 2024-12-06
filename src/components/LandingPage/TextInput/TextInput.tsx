import { FC } from 'react';
import Input from '../../../shared/Input';
import TextArea from '../../../shared/TextArea';

interface TextInputProps {
  label: string;
  id: string;
  value: any;
  onChange: any;
  name: string;
  placeholder: string;
  type: 'text' | 'password' | 'url' | 'number';
  classNameError?: string;
  variant?: 'single' | 'multiple';
  infoText?: string;
  labelFloating?: string;
  labelNormal?: string;
  className?: string;
  isBorder?: boolean;
  textAlign?: 'left' | 'center' | 'right'; // Add this line
}

const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChange,
  id,
  name,
  placeholder,
  type = 'text',
  classNameError = '',
  variant = 'single',
  infoText = '',
  labelFloating,
  labelNormal,
  isBorder = false,
  className = '',
  textAlign = 'left' // Add this line
}) => (
  <div className="w-full">
    {variant === 'single' ? (
      <Input
        id={id}
        labelFloating={labelFloating}
        labelNormal={labelNormal}
        name={name}
        value={value}
        type={type}
        label={label}
        isBorder={isBorder}
        onChange={(e) => onChange(e.target.value)}
        containerClassName={`w-full h-[40px] rounded-[4px]
        bg-[#1c2127] ${className || ''}`}
        className={`outline-none text-[white] focus:border-none focus:ring-0 px-[15px] text-${textAlign}`} // Update this line
        placeholder={placeholder}
        classNameError={`text-[#ed2a1d]
      text-[10px] ${classNameError}`}
        infoText={infoText}
        hookToForm
      />
    ) : (
      <TextArea
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        containerClassName="border-l-[1px] border-l-[#d2d2d20f]
        border-r-[1px] border-r-[#d2d2d20f]
        border-b-[2px] border-b-[#d2d2d20f]
        !bg-[#d2d2d20f]"
        placeholder="Describe your project. What are you planning on using the studio for? Do you need any specific equipment? Let us know..."
        classNameError={`text-[#F3436D]
        text-[10px] ${classNameError}`}
        hookToForm
      />
    )}
  </div>
);

export default TextInput;
