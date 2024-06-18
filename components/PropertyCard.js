import { useMemo } from "react";
import PropTypes from "prop-types";

const PropertyCard = ({
  className = "",
  propertyImage,
  ellipse1,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const card11Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={`h-[467px] flex-1 rounded-3xs bg-gray-white box-border flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] text-left text-mini-5 text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5 ${className}`}
      style={card11Style}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={propertyImage}
      />
      <div className="self-stretch flex flex-row items-start justify-start p-2.5">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          $ 590,693
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px] text-2xs-8 text-gray-500">
        <div className="flex flex-row items-center justify-start gap-[4.4px]">
          <img
            className="w-[17.4px] relative h-[17.4px]"
            alt=""
            src="/car.svg"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.4px]">
          <img
            className="w-[17.4px] relative h-[17.4px]"
            alt=""
            src="/bathtub.svg"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.4px]">
          <img
            className="w-[17.4px] relative h-[17.4px]"
            alt=""
            src="/arrowsout.svg"
          />
          <div className="relative leading-[16.27px] font-medium">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-xs-6">
        <div className="flex flex-row items-center justify-start gap-[5.8px]">
          <img
            className="w-[27.6px] relative rounded-[50%] h-[27.6px] object-cover"
            alt=""
            src={ellipse1}
          />
          <div className="relative leading-[17.42px] font-medium">
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.7px]">
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
            <img
              className="w-[14.5px] relative h-[14.5px]"
              alt=""
              src="/sharenetwork.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
            <img
              className="w-[14.5px] relative h-[14.5px]"
              alt=""
              src="/heart.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.9px]">
            <img
              className="w-[14.5px] relative h-[14.5px]"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  className: PropTypes.string,
  propertyImage: PropTypes.string,
  ellipse1: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default PropertyCard;
