import { useMemo } from "react";
import PropTypes from "prop-types";

const InfoCard = ({ className = "", imageId, homeActionText, propWidth }) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] rounded bg-gray-white flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px] text-center text-5xl text-gray-700 font-body-large-400 ${className}`}
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="w-[78px] relative h-[78px] overflow-hidden shrink-0"
          alt=""
          src={imageId}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[32px] font-semibold">
            {homeActionText}
          </div>
          <div className="w-[268px] relative text-base leading-[24px] text-lightslategray text-left flex items-end">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-body-large-400 text-primary-500 text-left inline-block">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  className: PropTypes.string,
  imageId: PropTypes.string,
  homeActionText: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default InfoCard;
