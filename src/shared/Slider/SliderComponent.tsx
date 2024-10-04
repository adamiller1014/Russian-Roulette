import PropTypes from 'prop-types';

const SliderComponent = ({ sliderValue, setSliderValue, maxValue = 1000.00 }) => {
  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    setSliderValue(value);
  };

  const handleMilestoneClick = (value) => {
    setSliderValue(value);
  };

  const getMilestoneColor = (milestone) => {
    return sliderValue >= milestone ? '#f8bf60' : '#1c2127';
  };

  return (
    <div className="w-full mt-4 relative">
      <input
        type="range"
        min="0"
        max={maxValue}
        step="0.01"
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer relative"
        style={{
          background: `linear-gradient(to right, #f8bf60 ${(sliderValue / maxValue) * 100}%, #1c2127 ${(sliderValue / maxValue) * 100}%)`
        }}
      />
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 3.2rem;
          height: 1.4rem;
          background: #f8bf60;
          border-radius: 2px;
          cursor: grab;
          position: relative;
          z-index: 30;
        }
        input[type='range']::-moz-range-thumb {
          width: 3.2rem;
          height: 1.4rem;
          background: #f8bf60;
          border-radius: 2px;
          cursor: grab;
          position: relative;
          z-index: 30;
        }
        input[type='range']::-ms-thumb {
          width: 3.2rem;
          height: 1.4rem;
          background: #f8bf60;
          border-radius: 2px;
          cursor: grab;
          position: relative;
          z-index: 30;
        }
        input[type='range']::-webkit-slider-thumb:active {
          cursor: grabbing;
        }
        input[type='range']::-moz-range-thumb:active {
          cursor: grabbing;
        }
        input[type='range']::-ms-thumb:active {
          cursor: grabbing;
        }
      `}</style>
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none">
        {[0, 250, 500, 750, 1000].map((milestone) => (
          <span
            key={milestone}
            onClick={() => handleMilestoneClick(milestone)}
            className="cursor-pointer pointer-events-auto w-10 h-4 rounded-1 border-2 border-[#2C3137]"
            style={{ backgroundColor: getMilestoneColor(milestone) }}
          ></span>
        ))}
      </div>
    </div>
  );
};

SliderComponent.propTypes = {
  sliderValue: PropTypes.number.isRequired,
  setSliderValue: PropTypes.func.isRequired,
  maxValue: PropTypes.number,
};

export default SliderComponent;