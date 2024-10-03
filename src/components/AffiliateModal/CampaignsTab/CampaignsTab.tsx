import Button from '../../../shared/Button';
import DividerDiv from '../../DividerDiv';
import CampaignInfo from '../CampaignInfo';
import CampaignsTable from '../CampaignsTable/CampaignsTable';
import CreateCampaignForm from '../CreateCampaignForm';
import InviteFriendGuide from '../InviteFriendGuide';

const CampaignsTab = () => {
  const headers = [
    'CAMPAIGN',
    'REFERREALS',
    'DEPOSITORS',
    'DEPOSTIS',
    'COMMISSION',
    'TOTAL',
    'AVAILABLE',
    'LINK'
  ];
  const list = [
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777],
    ['LoremIp', 777777, 777777, 777777, 10, 777777, 777777]
  ];
  return (
    <>
      <InviteFriendGuide />
      <DividerDiv className="!bg-[#1c2127]" />
      <CampaignInfo />
      <DividerDiv className="!bg-[#1c2127]" />
      <CreateCampaignForm />
      <DividerDiv className="!bg-[#1c2127]" />
      <CampaignsTable headers={headers} list={list} />
      <Button
        className="h-[40px] rounded-[6px] bg-[#f8bf60] text-black"
      >
        STAKE COMMISSION
      </Button>
    </>
  );
};

export default CampaignsTab;
