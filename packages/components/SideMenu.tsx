import { NavigationItems } from "@/constants/navigation";
import { signOut } from "next-auth/react";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import useCustomer from "../hooks/useCustomer";
import { getFirstLetter } from "@/utils/strings";
import { deleteItemStorage, STORAGE_CUSTOMER_SESSION } from "@/utils/storage";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "@/config/redux/slices/userSlice";

const SideMenu = () => {
  const router = useRouter();
  const user = useSelector((state: any) => state.user.userData);

  console.log("Kevin:", user);
  const closeSession = () => {
    deleteItemStorage(STORAGE_CUSTOMER_SESSION);
    signOut({ callbackUrl: "/sessions/signin" });
  };

  return (
    <aside className="hidden md:flex md:flex-col pt-20 px-3 bg-[#17212e] text-white h-[100vh]">
      <div className="flex justify-center">
        <img
          className=" w-[130px] mb-12"
          src="/logo-web.svg"
          alt="Logo Vuzoon"
        />
      </div>
      <div className="flex rounded-2xl py-2 px-1 cursor-pointer pl-10">
        <div className="flex items-center justify-center text-[14px] rounded-full mr-3 border border-white font-bold text-black bg-[#E0D39C] w-10 h-10">
          {getFirstLetter(user?.name)}
          {getFirstLetter(user?.lastname)}
        </div>
        <div>
          <h3 className="font-bold text-[14px]">
            {user?.name} {user?.lastname}
          </h3>
          <p className="text-[12px] text-gray-300">Admin/Role</p>
        </div>
      </div>
      <div className="py-8">
        <nav>
          {NavigationItems.map((entry: any, index: number) => (
            <div
              className="py-2 cursor-pointer pl-10"
              key={index}
              onClick={() => router.push(entry.link)}
            >
              <p className="flex items-center font-bold text-[14px]">
                <span className="mr-3">{entry.icon}</span>
                {entry.title}
              </p>
            </div>
          ))}
          <div className="py-2 cursor-pointer pl-10">
            <p
              onClick={() => closeSession()}
              className="flex items-center font-bold text-[12px]"
            >
              <FaSignOutAlt className="mr-3" size={20} />
              Cerrar Sesión
            </p>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SideMenu;
