import ShadowButton from '../../../../shared/ShadowButton';

const TotalWinDisplay = () => {
  return (
    <ShadowButton
      className={`
            text-2xl w-full leading-none font-montserrat font-bold text-[#F8BF60] bg-[#20252B] hover:mix-blend-difference shadow-[0px_6px_0px_0px_#171B20]
            rounded-lg px-4 py-1 mb-2`}>
      $82,523.12
    </ShadowButton>
  );
};

export default TotalWinDisplay;
