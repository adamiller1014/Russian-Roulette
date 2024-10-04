import Button from '../../../../shared/Button';
import Icon from '../../../../shared/Icon';
import DividerDiv from '../../../DividerDiv';
import NextRewardTime from '../NextRewardTime';
import WagerResults from '../WagerSubTabContent/WagerResults';
import YieldInfo from '../YieldInfo';

const AffiliateSubTabContent = () => {
  return (
    <div className="flex flex-col gap-2">
      <NextRewardTime />
      <DividerDiv className="!bg-[#1c2127] mt-2" />
      <YieldInfo />
      <DividerDiv className="!bg-[#1c2127] mb-2" />
      <Button
        className="bg-[#f8bf60] text-black
      flex items-center
      px-4 mb-2
      rounded-[5px]
      h-[3rem] !justify-between w-full
      font-montserrat font-bold"
      >
        Your Stakes
        <Icon name="openInNew" size={14} />
      </Button>
      <DividerDiv className="!bg-[#1c2127] mb-2" />
      <WagerResults type="Affiliate" />
    </div>
  );
};

export default AffiliateSubTabContent;
