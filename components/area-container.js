import AreaCard from "./AreaCard";
import PropTypes from "prop-types";

const AreaContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-21xl text-primary-800 font-body-large-400 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Properties by Area
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%] text-left text-5xl text-gray-white">
        <div className="self-stretch w-[1300px] flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <AreaCard cityName="Centerville" />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage="url('/card-2@3x.png')"
              propPadding="unset"
            />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage="url('/card-3@3x.png')"
              propPadding="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <AreaCard
              cityName="Arlington"
              propBackgroundImage="url('/card-4@3x.png')"
              propPadding="10px"
            />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage="url('/card-5@3x.png')"
              propPadding="10px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

AreaContainer.propTypes = {
  className: PropTypes.string,
};

export default AreaContainer;
