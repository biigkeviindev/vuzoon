import AssetList from "@/packages/components/AssetList";
import Layout from "@/packages/components/Layout";
import { checkCustomerSessionStorage } from "@/utils/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Properties = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div>
      <Layout page="Inmuebles" content={<AssetList />}></Layout>
    </div>
  );
};

export default Properties;
