import AssetList from "@/packages/components/AssetList";
import Layout from "@/packages/components/Layout";
import Wallet from "@/packages/components/wallet/Wallet";
import { checkCustomerSessionStorage } from "@/utils/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Wallets = () => {
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
      <Layout page="Wallets" content={<Wallet></Wallet>}></Layout>
    </div>
  );
};

export default Wallets;
