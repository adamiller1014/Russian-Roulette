import ClipSpan from '../ClipSpan';

const Divider = ({ className = '' }) => (
  <div
    className={`w-full flex items-center justify-between 
        ${className}`}
  >
    <div
      className="w-full h-[1px]
      bg-[#1c2127]"
    />
    <ClipSpan className="px-[20px] text-[white]">OR</ClipSpan>
    <div
      className="w-full h-[1px]
      bg-[#1c2127]"
    />
  </div>
);

export default Divider;
