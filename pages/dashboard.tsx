import { setUserData } from "@/config/redux/slices/userSlice";
import AssetList from "@/packages/components/AssetList";
import DashboardTable from "@/packages/components/dashboard/DashboardTable";
import Layout from "@/packages/components/Layout";
import { checkCustomerSessionStorage, getUserData } from "@/utils/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!checkCustomerSessionStorage()) {
      router.push("/sessions/signin");
    } else {
      const user = getUserData() || "";
      dispatch(setUserData(JSON.parse(user)));
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
