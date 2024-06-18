import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[98px] bg-gray-white flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border ${className}`}
    >
      <header className="flex-1 flex flex-row items-center justify-between text-center text-5xl text-primary-500 font-body-large-400">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <img className="w-11 relative h-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">REIS</div>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <div className="relative leading-[22px]">HOME</div>
            <div className="relative leading-[22px]">ABOUT US</div>
            <div className="relative leading-[22px]">OUR AGENTS</div>
            <div className="relative leading-[22px] font-semibold">
              PROPERTIES
            </div>
            <div className="relative leading-[22px]">GALLERY</div>
            <div className="relative leading-[22px]">BLOG</div>
            <div className="relative leading-[22px]">CONTACT US</div>
            <div className="relative leading-[22px]">SEARCH</div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </header>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
