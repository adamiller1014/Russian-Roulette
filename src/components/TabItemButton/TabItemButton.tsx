import Button from '../../shared/Button';

const TabItemButton = ({
  title,
  tab,
  setTab,
  index,
  isFirst = false,
  isLast = false,
  className = ''
}) => {
  return (
    <Button
      onClick={() => {
        setTab(index);
      }}
      className={`flex-1
    xl:text-md lg:text-sm md:text-sm 
    font-montserrat font-bold
    ${isFirst ? 'rounded-l-[0.25rem]' : ''}
    ${isLast ? 'rounded-r-[0.25rem]' : ''}
    ${tab === index ? '!bg-[#f8bf60] text-black' : '!bg-[#1c2127]'}
    ${className || ''}`}
    >
      {title}
    </Button>
  );
};

export default TabItemButton;
