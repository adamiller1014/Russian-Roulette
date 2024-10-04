const NewBetItem = ({ children, type, value }) => {
  return (
    <div className="flex flex-row text-white h-[2.5rem] gap-[0.0625rem] mt-[0.25rem]">
      <div className="bg-[#1c2127] flex-auto flex flex-row items-center relative justify-center rounded-l-[0.3125rem]">
        <button className="flex flex-row items-center gap-[0.125rem] md:text-[0.625rem] absolute left-[0.625rem]">
          {children}
        </button>
        <span className="text-[#f8bf60] mr-[0.1875rem]">{type}</span>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(value)
          .replace('$', '')}
      </div>
      <div className="bg-[#1c2127] md:text-[0.5625rem] flex-none w-[2.5rem] flex items-center justify-center">
        1/2
      </div>
      <div className="bg-[#1c2127] md:text-[0.5625rem] flex-none w-[2.5rem] flex items-center justify-center rounded-r-[0.3125rem]">
        x2
      </div>
    </div>
  );
};

export default NewBetItem;
