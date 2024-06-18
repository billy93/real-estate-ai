import { useMemo } from "react";
import PropTypes from "prop-types";

const PropertyRentCard = ({ className = "", propBackgroundImage }) => {
  const card12Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className={`flex-1 rounded-md h-[426px] flex flex-col items-center justify-end p-6 box-border bg-[url('/card-11@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px] text-left text-base text-gray-white font-body-large-400 ${className}`}
      style={card12Style}
    >
      <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img className="w-6 relative h-6" alt="" src="/mappin.svg" />
          <div className="relative leading-[24px] font-medium">Washington</div>
        </div>
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img className="w-6 relative h-6" alt="" src="/arrowsout1.svg" />
          <div className="relative leading-[24px] font-medium">12000</div>
        </div>
      </div>
    </div>
  );
};

PropertyRentCard.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default PropertyRentCard;
