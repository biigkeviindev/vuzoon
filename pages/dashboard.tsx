import { setUserData } from "@/config/redux/slices/userSlice";
import AssetList from "@/packages/components/AssetList";
import DashboardTable from "@/packages/components/dashboard/DashboardTable";
import Layout from "@/packages/components/Layout";
import { checkCustomerSessionStorage, getUserData } from "@/utils/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.userData);

  useEffect(() => {
    if (!checkCustomerSessionStorage()) {
      router.push("/sessions/signin");
    } else {
      if (user === null) {
        const user = getUserData() || "";
        dispatch(setUserData(JSON.parse(user)));
      }
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
