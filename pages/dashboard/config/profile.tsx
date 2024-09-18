import ConfigProfile from "@/packages/components/ConfigProfile";
import Layout from "@/packages/components/Layout";
import { checkCustomerSessionStorage } from "@/utils/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Profile = () => {
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
      <Layout page="Configuración" content={<ConfigProfile />}></Layout>
    </div>
  );
};

export default Profile;
