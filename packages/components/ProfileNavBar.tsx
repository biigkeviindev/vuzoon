import React from "react";
import { BsBank2 } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";

const ProfileNavBar = () => {
  return (
    <div className="flex w-full justify-around mb-20 navigation-bar">
      <nav className="w-full flex justify-around gap-20">
        <p className="font-semibold flex gap-2 items-center">
          <VscVerifiedFilled />
          KYC
        </p>
        <p className="font-semibold flex gap-2 items-center">
          <BsBank2 />
          Mis transferencias
        </p>
        <p className="font-semibold flex gap-2 items-center">
          <FaUserEdit />
          Perfil
        </p>
      </nav>
    </div>
  );
};

export default ProfileNavBar;
