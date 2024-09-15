import React from "react";
import useAssets from "../hooks/useAssets";
import AssetCard from "./AssetCard";
import { RealStateAsset } from "@/types/assets";

const AssetList = () => {
  const { assets = [] } = useAssets();

  return (
    <div>
      <div className="flex flex-col flex-wrap md:flex-row">
        {assets.map((entry: RealStateAsset, index: number) => {
          return <AssetCard asset={entry} />;
        })}
      </div>
    </div>
  );
};

export default AssetList;
