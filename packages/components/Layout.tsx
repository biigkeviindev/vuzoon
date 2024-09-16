import React from "react";
import AssetCard from "./AssetCard";
import SideMenu from "./SideMenu";
import { MdOutlineMenu } from "react-icons/md";

const Layout = ({ content, page }: any) => {
  return (
    <div className="flex">
      <div className="md:w-1/6 bg-[#17212e]">
        <SideMenu />
      </div>
      <div className="w-full md:w-5/6 h-[100vh] overflow-y-scroll no-scrollbar">
        <div className=" flex shadow- items-center fixed w-full h-[10vh] text-white bg-[#1a2543]">
          <MdOutlineMenu size={30} className="mr-3" />
          <h1 className="text-xl font-bold">{page}</h1>
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
