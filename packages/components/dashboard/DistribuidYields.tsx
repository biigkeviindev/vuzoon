import React from "react";

const DistribuidYields = () => {
  return (
    <div className="flex w-1/2 justify-between items-center px-2 py-4 rounded-md text-white bg-[#17212e]">
      <div className="flex flex-col w-full px-2">
        <div>
          <h3 className="font-bold text-[16px]">Rendimientos distribuidos</h3>
          <p className="font-bold text-[18px]">0</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-[14px] font-light">Rendimientos</p>
            <p className="text-[14px] font-light">-</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] font-light">Plusvalias</p>
            <p className="text-[14px] font-light">-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistribuidYields;
