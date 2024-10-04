import Icon from '../../../../shared/Icon';
import CheckBox from '../../TipTabContent/Checkbox';

const RiskStake = ({ isChecked, setIsChecked }) => {
  return (
    <div className="flex items-center">
      <CheckBox isLeft={!isChecked} setIsLeft={(value) => setIsChecked(!value)} />
      <div className={`flex flex-col ml-2 ${isChecked ? 'text-[#f8bf60]' : 'text-[#8b8b8b]'}`}>
        <span className="flex items-center">
          <Icon name="dice" className="mr-[4px]" raw size={12} /> Risk Stake
        </span>
        <span className="text-xs">
          Stake is risked, but potential rewards are much greater.
        </span>
      </div>
    </div>
  );
};

export default RiskStake;
