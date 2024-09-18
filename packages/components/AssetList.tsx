import React from "react";
import AssetCard from "./AssetCard";
import { RealStateAsset } from "@/types/assets";
import { useSelector } from "react-redux";

const AssetList = () => {
  const assets = useSelector((state: any) => state.assets.assets);

  return (
    <div>
      <div className="flex flex-col flex-wrap md:flex-row">
        <section className="flex justify-between w-full px-3 mb-5">
          <div className="flex items-center">
            <p className="text-[#D0D5DD]">
              Mostrando 10 de {assets?.length} inmuebles
            </p>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Buscar"
              className="bg-transparent border-2 border-solid border-white"
            />
            <select className="w-[200px] text-[#D0D5DD] rounded-md px-3">
              <option>Mostrar todos</option>
            </select>
            <select className="w-[200px] text-[#D0D5DD] rounded-md px-3">
              <option>Fecha</option>
            </select>
          </div>
        </section>
        <div className="flex flex-wrap">
          {assets.map((entry: RealStateAsset, index: number) => {
            return <AssetCard key={index} asset={entry} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AssetList;
