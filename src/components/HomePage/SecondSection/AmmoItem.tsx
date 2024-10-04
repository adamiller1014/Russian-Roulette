const AmmoItem = ({ isFull = false }) => {
  return (
    <div
      className={`rounded-t-[6px] w-[0.75rem] h-full py-4 ${isFull ? 'bg-[#F8BF60]' : 'bg-[#1C2127]'}`}
    />
  );
};

export default AmmoItem;