import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';

const SocialButtons = ({ className = '' }) => (
  <div
    className={`flex gap-x-[0.75rem] samsungS8:gap-x-[1.25rem] items-center
    justify-center ${className}`}
  >
    <Button
      className="bg-white text-black
    rounded-[4px] justify-center flex items-center
    flex-1 h-[3rem]"
    >
      <Icon size={24} raw name="google" />
    </Button>

    <Button
      className="bg-white text-black
    rounded-[0.25rem]
    flex-1 h-[3rem] font-montserrat font-bold text-sm p-4 "
    >
      CONNECT WALLET
    </Button>
    <Button
      className="bg-white text-black
    rounded-[4px] justify-center flex items-center
    flex-1 h-[3rem]"
    >
      <Icon size={24} raw name="facebookF" />
    </Button>
  </div>
);

export default SocialButtons;
