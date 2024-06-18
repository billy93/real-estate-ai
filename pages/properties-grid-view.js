import Head from "next/head";
import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";

const PropertiesGridView = () => {
  return (
    <div className="w-full relative bg-gray-white flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-4001">
      <Header />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold">
            Properties
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-16 px-0 pb-2 gap-[95px] text-left text-base text-gray-black font-body-large-400 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="w-6 relative h-6" alt="" src="/listbullets.svg" />
              <img className="w-6 relative h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {[
                    { value: "Popular properties" },
                    { value: "Latest properties" },
                    { value: "Recommended properties" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <PropertiesGridContainer />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <div className="rounded bg-primary-50 flex flex-row items-start justify-start p-2.5">
            <img className="w-6 relative h-6" alt="" src="/arrowleft.svg" />
          </div>
          <div className="rounded-10xs bg-primary-500 flex flex-col items-start justify-start py-2.5 px-[9px] text-gray-white">
            <div className="w-[26px] relative leading-[24px] font-semibold flex items-end justify-center">
              1
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="w-[26px] relative leading-[24px] font-semibold flex items-end justify-center">
              2
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="w-[26px] relative leading-[24px] font-semibold flex items-end justify-center">
              3
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="w-[26px] relative leading-[24px] font-semibold flex items-end justify-center">
              ...
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="w-[26px] relative leading-[24px] font-semibold flex items-end justify-center">
              54
            </div>
          </div>
          <div className="rounded bg-primary-500 flex flex-row items-start justify-start p-2.5">
            <img className="w-6 relative h-6" alt="" src="/arrowright.svg" />
          </div>
        </div>
      </div>
      <Footer propOverflow="hidden" />
    </div>
  );
};

export default PropertiesGridView;
