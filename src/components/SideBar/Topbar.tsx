import Icon from '../../shared/Icon';
import DiagonalArrow from '../../assets/images/diagonal-arrow.svg';

const Topbar = ({ open, setOpen }) => {
  return (
    <div className="flex items-center justify-between h-[60px] bg-[#20252B] text-white shadow-[0px_8px_8px_0px_rgba(0,0,0,0.25)] px-4">
      <Icon
        name="arrowRight"
        className="text-white cursor-pointer"
        size={20}
        onClick={() => setOpen(!open)}
      />
      <span className="text-sm">English Chat Room</span>
      <button>
        <img className="h-full" src={DiagonalArrow} alt="Diagonal Arrow" />
      </button>
    </div>
  );
};

export default Topbar;
