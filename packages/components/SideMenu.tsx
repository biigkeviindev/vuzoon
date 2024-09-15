import { NavigationItems } from "@/constants/navigation";
import { signOut } from "next-auth/react";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import useCustomer from "../hooks/useCustomer";
import { getFirstLetter } from "@/utils/strings";

const SideMenu = () => {
  const { customer }: any = useCustomer();

  return (
    <aside className="hidden md:flex md:flex-col px-8 bg-[#1a2543] text-white h-[100vh]">
      <img className="h-[200px]" src="/logo.svg" alt="Logo Vuzoon" />
      <div className="flex bg-[#ffffff20] rounded-2xl py-2 px-1 cursor-pointer">
        <div className="flex items-center justify-center rounded-full mr-3 border border-white bg-blue-600 w-10 h-10">
          {getFirstLetter(customer?.name)}
          {getFirstLetter(customer?.lastname)}
        </div>
        <div>
          <h3 className="font-bold">
            {customer?.name} {customer?.lastname}
          </h3>
          <p className="text-[12px]">Admin/Role</p>
        </div>
      </div>
      <div className="py-8">
        <nav>
          {NavigationItems.map((entry: any, index: number) => (
            <div className="py-2 cursor-pointer" key={index}>
              <p className="flex items-center font-bold">
                <span className="mr-3">{entry.icon}</span>
                {entry.title}
              </p>
            </div>
          ))}
          <div className="py-2 cursor-pointer">
            <p
              onClick={() => signOut({ callbackUrl: "/sessions/signin" })}
              className="flex items-center font-bold"
            >
              <FaSignOutAlt className="mr-3" />
              Cerrar Sesión
            </p>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SideMenu;
