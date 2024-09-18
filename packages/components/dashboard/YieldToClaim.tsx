import React from "react";

const YieldToClaim = () => {
  return (
    <div className="flex w-1/2 justify-between items-center px-2 py-4 rounded-md text-white bg-[#17212e]">
      <div className="flex">
        <img src="" alt="" className="mr-3 w-[50px] h-[50px] bg-black" />
        <div>
          <h3 className="font-bold text-[12px]">Rendimientos a reclamar</h3>
          <p className="font-bold text-[18px]">0,00 $</p>
        </div>
      </div>
      <div>
        <button className="px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold">
          Gestionar
        </button>
      </div>
    </div>
  );
};

export default YieldToClaim;
