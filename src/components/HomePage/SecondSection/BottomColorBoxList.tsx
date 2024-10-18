import ColorBoxSmall from './ColorBoxSmall';

const BottomColorBoxList = () => {
  return (
    <div className="bg-[#2c3137] w-full px-2 py-2 flex font-montserrat font-bold text-[1rem]">
      <div className="flex justify-start w-full gap-1 overflow-x-auto flex-nowrap ">
        <ColorBoxSmall isBonus={false} text={'x' + 2.75} color="white" />
        <ColorBoxSmall isBonus={false} text={'x' + 26.62} color="#2995BD" />
        <ColorBoxSmall isBonus={true} text={'x' + 500.25} color="#F8BF60" />
        <ColorBoxSmall isBonus={false} text={'x' + 18.42} color="#2995BD" />
        <ColorBoxSmall isBonus={false} text={'x' + 5.76} color="white" />
        <ColorBoxSmall isBonus={false} text={'x' + 9.77} color="white" />
        <ColorBoxSmall isBonus={false} text={'x' + 60.25} color="#9747FF" />
        <ColorBoxSmall isBonus={false} text={'x' + 4.98} color="white" />
        <ColorBoxSmall isBonus={false} text={'x' + 25.25} color="#2995BD" />
        <ColorBoxSmall isBonus={false} text={'x' + 1.71} color="white" />
        <ColorBoxSmall isBonus={false} text={'x' + 60.62} color="#9747FF" />
        <ColorBoxSmall isBonus={true} text={'x' + 500.25} color="#F8BF60" />
      </div>
    </div>
  );
};

export default BottomColorBoxList;
