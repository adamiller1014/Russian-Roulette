import ShadowButton from '../../../../shared/ShadowButton';

const TotalWinDisplay = () => {

  return (
    // Main container for the play action part
    <div className="bg-[#2c3137] md:col-span-4 md:order-2 order-3 flex flex-col justify-center px-2 py-2 h-full">
      {/* Container for the play buttons */}
      <div className="flex gap-[2px] h-full relative">

        {/* Main PLAY button */}
        <ShadowButton
          className={`
            text-xl xs:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] xxl:text-[5rem] w-full
            leading-none font-montserrat font-bold text-[#F8BF60] bg-[#20252B] hover:mix-blend-difference shadow-[0px_6px_0px_0px_#171B20]
            rounded-lg p-4`}
        >
          $82,523.12
        </ShadowButton>
      </div>
    </div>
  );
};

export default TotalWinDisplay;
