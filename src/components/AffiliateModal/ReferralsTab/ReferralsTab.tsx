import Button from '../../../shared/Button';
import CampaignSelection from '../CampaignSelection';
import ReferralsTable from '../ReferralsTable';

const ReferralsTab = () => {
  const headers = [
    'USERNAME',
    'REGISTERED',
    'DEPOSITS',
    'LAST DEPOSIT',
    'LAST SEEN',
    'WAGERED',
    'COMMISSION'
  ];

  const list = [
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100],
    ['ipsumLorem', '02/01/2028', 26703, '10 Minustes Ago', '2 Minutes Ago', 725000, 100]
  ];

  return (
    <>
      <CampaignSelection />
      <ReferralsTable headers={headers} list={list} />
      <Button
        className="bg-[#f8bf60] text-black rounded-[6px]
                h-[40px]"
      >
        STAKE COMMISSION
      </Button>
    </>
  );
};

export default ReferralsTab;
