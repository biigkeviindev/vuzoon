import AssetCard from "@/packages/components/AssetCard";
import AssetList from "@/packages/components/AssetList";
import Layout from "@/packages/components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Properties = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div>
      <Layout page="Inmuebles" content={<AssetList />}></Layout>
    </div>
  );
};

export default Properties;
