import AssetList from "@/packages/components/AssetList";
import Layout from "@/packages/components/Layout";
import Propertie from "@/packages/components/properties/Propertie";
import React from "react";

const PropertieItem = () => {
  return (
    <div>
      <Layout page="Inmuebles" content={<Propertie />}></Layout>
    </div>
  );
};

export default PropertieItem;
