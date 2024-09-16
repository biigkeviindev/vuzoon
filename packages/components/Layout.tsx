import React from "react";
import AssetCard from "./AssetCard";
import SideMenu from "./SideMenu";
import { MdOutlineMenu } from "react-icons/md";
import AssetDashboard from "./AssetDashboard";

const Layout = ({ content, page }: any) => {
  return (
    <div className="flex">
      <div className="md:w-1/6 bg-[#131a25]">
        <SideMenu />
      </div>
      <div className="w-full md:w-5/6 h-[100vh] bg-[#131a25] overflow-y-scroll no-scrollbar">
        <div className=" flex justify-between pl-4 items-center fixed w-[95vw] h-[10vh] text-white bg-[#131a25]">
          <div className="flex w-1/3">
            <MdOutlineMenu size={30} className="mr-3" />
            <h1 className="text-xl font-bold">{page}</h1>
          </div>
          <div className="flex justify-end w-2/3 pr-[13rem]">
            <AssetDashboard />
          </div>
        </div>
        <div className="px-4">
          <div className="flex flex-col flex-wrap md:flex-row pt-24">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
