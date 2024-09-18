import React from "react";

const TransfersBanner = () => {
  return (
    <div className="flex w-1/2 justify-between items-center px-2 py-4 rounded-md text-white bg-[#6c757d] h-32">
      <div className="flex flex-col w-full px-2">
        <div>
          <h3 className="font-bold text-[16px] mb-5">
            Invierte por transferencia
          </h3>
          <button className="px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransfersBanner;
