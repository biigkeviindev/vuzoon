import { NavigationItems } from "@/constants/navigation";
import React from "react";

const SideMenu = () => {
  return (
    <aside className="hidden md:flex md:flex-col px-8 bg-[#1a2543] text-white h-[100vh]">
      <img className="h-[200px]" src="/logo.svg" alt="Logo Vuzoon" />
      <div className="flex bg-[#ffffff20] rounded-2xl py-2 px-1 cursor-pointer">
        <div className="flex items-center justify-center rounded-full mr-3 border border-white bg-blue-600 w-10 h-10">
          KR
        </div>
        <div>
          <h3 className="font-bold">Kevin rivera ramirez</h3>
          <p className="text-[12px]">Admin/Role</p>
        </div>
      </div>
      <div className="py-8">
        <nav>
          {NavigationItems.map((entry: any, index: number) => (
            <div className="py-2 cursor-pointer">
              <p className="flex items-center font-bold">
                <span className="mr-3">{entry.icon}</span>
                {entry.title}
              </p>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SideMenu;
