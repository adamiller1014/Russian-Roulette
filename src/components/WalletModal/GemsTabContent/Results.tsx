import NumberProcess from '../../NumberProcess';
import Resultitem from './Resultitem';

const Results = ({ className = '' }) => {
  return (
    <div className={`flex flex-col w-full gap-2 ${className}`}>
      <Resultitem text="You Will Receive" value={<NumberProcess number={25000} />} unit="GEMS" />
      <Resultitem text="Max You Can Buy" value={<NumberProcess number={50000} />} unit="GEMS" />
      <Resultitem
        text="ROI"
        value={<NumberProcess shouldRemoveFloat={false} number={8.25} />}
        unit="%"
      />
      <Resultitem
        text="Debt Ratio"
        value={<NumberProcess shouldRemoveFloat={false} number={74.05} />}
        unit="%"
      />
      <Resultitem text="Vesting Term" value={5} unit="DAYS" />
    </div>
  );
};

export default Results;
