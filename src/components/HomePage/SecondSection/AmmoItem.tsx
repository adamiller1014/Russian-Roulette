const AmmoItem = ({ isFull = false }) => {
  return (
    <div
      className={`rounded-t-[6px] h-[80%] w-[1vw] ${isFull ? 'bg-[#F8BF60]' : 'bg-[#1C2127]'}`}
    />
  );
};

export default AmmoItem;