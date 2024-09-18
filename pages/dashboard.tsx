import { fetchAssets } from "@/config/redux/slices/assetsSlice";
import { setUserData } from "@/config/redux/slices/userSlice";
import DashboardTable from "@/packages/components/dashboard/DashboardTable";
import Layout from "@/packages/components/Layout";
import { checkCustomerSessionStorage, getUserData } from "@/utils/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const user = useSelector((state: any) => state.user.userData);
  const assets = useSelector((state: any) => state.assets.assets);

  const setAssets = useCallback(async () => {
    if (assets === null) {
      dispatch(fetchAssets());
    }
  }, []);

  useEffect(() => {
    if (!checkCustomerSessionStorage()) {
      router.push("/sessions/signin");
    } else {
      setAssets();
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
