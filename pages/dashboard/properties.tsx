import AssetCard from "@/packages/components/AssetCard";
import useAssets from "@/packages/hooks/useAssets";
import { RealStateAsset } from "@/types/assets";
import React from "react";

const Properties = () => {
  const { assets = [] } = useAssets();

  return (
    <div>
      <div className="px-6">
        <h1>Listado de propiedades:</h1>
        <div className="flex flex-col flex-wrap md:flex-row">
          {assets.map((entry: RealStateAsset, index: number) => {
            return <AssetCard asset={entry} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Properties;
