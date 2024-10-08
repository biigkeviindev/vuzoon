import AssetList from "@/packages/components/AssetList";
import Layout from "@/packages/components/Layout";
import { checkCustomerSessionStorage } from "@/utils/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const P2p = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!checkCustomerSessionStorage()) {
      router.push("/sessions/signin");
    }
  }, []);

  if (!session) return null;

  return (
    <div>
      <Layout page="P2P" content={<p>kevin</p>}></Layout>
    </div>
  );
};

export default P2p;
