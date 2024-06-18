import { useMemo } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const AreaCard = ({
  className = "",
  cityName,
  propBackgroundImage,
  propPadding,
}) => {
  const card1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      padding: propPadding,
    };
  }, [propBackgroundImage, propPadding]);

  return (
    <Link
      className={`cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-gray-white font-body-large-400 md:flex-[unset] md:self-stretch ${className}`}
      href="/properties-grid-view"
      style={card1Style}
    >
      <div className="!m-[0] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
        <div className="relative leading-[32px] font-semibold">{cityName}</div>
        <div className="relative text-base leading-[24px] text-center">
          25 listings
        </div>
      </div>
    </Link>
  );
};

AreaCard.propTypes = {
  className: PropTypes.string,
  cityName: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propPadding: PropTypes.any,
};

export default AreaCard;
