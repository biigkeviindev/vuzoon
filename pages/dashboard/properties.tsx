import AssetCard from "@/packages/components/AssetCard";
import AssetList from "@/packages/components/AssetList";
import Layout from "@/packages/components/Layout";
import React from "react";

const Properties = () => {
  return (
    <div>
      <Layout page="Inmuebles" content={<AssetList />}></Layout>
    </div>
  );
};

export default Properties;
