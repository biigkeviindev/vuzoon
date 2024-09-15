import React from "react";
import AssetCard from "./AssetCard";
import SideMenu from "./SideMenu";

const Layout = ({ content, page }: any) => {
  return (
    <div className="flex">
      <div className="md:w-1/5 bg-[#17212e]">
        <SideMenu />
      </div>
      <div className="w-full md:w-4/5 h-[100vh] overflow-y-scroll no-scrollbar">
        <div className="px-5 flex shadow- items-center fixed w-full h-[10vh] text-white bg-[#1a2543]">
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

{
  /* <h1>Listado de propiedades:</h1>
        <div className="flex flex-col flex-wrap md:flex-row">
          {assets.map((entry: RealStateAsset, index: number) => {
            return <AssetCard asset={entry} />;
          })}
        </div> */
}
export default Layout;
