import PropertyCard from "./PropertyCard";
import PropTypes from "prop-types";

const RentPropertiesContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px] text-center text-21xl text-primary-800 font-body-large-400 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px] text-left text-mini-5 text-gray-700">
          <PropertyCard
            propertyImage="/property-image7@2x.png"
            ellipse1="/ellipse-1@2x.png"
          />
          <PropertyCard
            propertyImage="/property-image8@2x.png"
            ellipse1="/ellipse-1@2x.png"
            propFlex="1"
            propMinWidth="355px"
            propWidth="unset"
          />
          <PropertyCard
            propertyImage="/property-image9@2x.png"
            ellipse1="/ellipse-1@2x.png"
            propFlex="1"
            propMinWidth="355px"
            propWidth="unset"
          />
          <PropertyCard
            propertyImage="/property-image10@2x.png"
            ellipse1="/ellipse-1@2x.png"
            propFlex="1"
            propMinWidth="355px"
            propWidth="unset"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
        <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

RentPropertiesContainer.propTypes = {
  className: PropTypes.string,
};

export default RentPropertiesContainer;
