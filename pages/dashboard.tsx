import AssetList from "@/packages/components/AssetList";
import DashboardTable from "@/packages/components/dashboard/DashboardTable";
import Layout from "@/packages/components/Layout";
import { checkCustomerSessionStorage } from "@/utils/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Dashboard = () => {
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
      <Layout page="Dashboard" content={<DashboardTable />}></Layout>
    </div>
  );
};

export default Dashboard;
