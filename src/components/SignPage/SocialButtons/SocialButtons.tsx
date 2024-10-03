import Button from '../../../shared/Button';
import Icon from '../../../shared/Icon';

const SocialButtons = ({ className = '' }) => (
  <div
    className={`flex gap-x-[10px] samsungS8:gap-x-[20px] items-center
    justify-center ${className}`}
  >
    <Button
      className="bg-white text-black
    rounded-[4px] justify-center flex items-center
    flex-1 h-[40px]"
    >
      <Icon size={24} raw name="google" />
    </Button>

    <Button
      className="bg-white text-black
    rounded-[4px]
    flex-1 h-[40px]"
    >
      CONNECT WALLET
    </Button>
    <Button
      className="bg-white text-black
    rounded-[4px] justify-center flex items-center
    flex-1 h-[40px]"
    >
      <Icon size={24} raw name="facebookF" />
    </Button>
  </div>
);

export default SocialButtons;
