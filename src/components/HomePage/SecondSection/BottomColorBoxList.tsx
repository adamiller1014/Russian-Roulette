import ColorBoxSmall from './ColorBoxSmall';

const BottomColorBoxList = () => {
  return (
    <div className="bg-[#2c3137] w-full px-2 py-2 flex font-montserrat font-bold text-[1rem] overflow-x-auto"> {/* Added overflow-x-auto */}
      <div className="flex flex-nowrap gap-1"> {/* Changed to flex-nowrap */}
        <ColorBoxSmall isBonus={false} text={'x' + 2.75} color="white" />
        <ColorBoxSmall isBonus={false} text={'x' + 2.62} color="white" />
        <ColorBoxSmall isBonus={true} text={'x' + 500.25} color="#f8bf60" />
        <ColorBoxSmall isBonus={false} text={'x' + 8.42} color="#298854" />
        <ColorBoxSmall isBonus={false} text={'x' + 5.76} color="#298854" />
        <ColorBoxSmall isBonus={false} text={'x' + 9.77} color="white" />
        <ColorBoxSmall isBonus={false} text={'x' + 3.25} color="white" />
        <ColorBoxSmall isBonus={false} text={'x' + 4.98} color="white" />
        <ColorBoxSmall isBonus={false} text={'x' + 25.25} color="#2cabd9" />
        <ColorBoxSmall isBonus={false} text={'x' + 1.71} color="white" />
        <ColorBoxSmall isBonus={false} text={'x' + 2.62} color="white" />
        <ColorBoxSmall isBonus={true} text={'x' + 500.25} color="#f8bf60" />
      </div>
    </div>
  );
};

export default BottomColorBoxList;
