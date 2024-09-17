import { useRouter } from "next/router";
import React from "react";
import { BsBank2 } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";

const ProfileNavBar = () => {
  const router = useRouter();

  return (
    <div className="flex w-full px-[250px] justify-around mb-10 navigation-bar">
      <nav className="w-full flex justify-around gap-20">
        <p
          onClick={() => router.push("/dashboard/config/kyc")}
          className="cursor-pointer font-semibold flex gap-2 items-center"
        >
          <VscVerifiedFilled size={24} />
          KYC
        </p>
        <p className="cursor-pointer font-semibold flex gap-2 items-center">
          <BsBank2 size={24} />
          Mis transferencias
        </p>
        <p
          onClick={() => router.push("/dashboard/config/profile")}
          className="cursor-pointer font-semibold flex gap-2 items-center"
        >
          <FaUserEdit size={24} />
          Perfil
        </p>
      </nav>
    </div>
  );
};

export default ProfileNavBar;
