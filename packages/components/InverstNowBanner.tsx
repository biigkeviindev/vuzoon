import React from "react";

const InvestNowBanner = () => {
  return (
    <div className="flex w-full justify-between items-center px-2 py-4 rounded-md text-white bg-[#6d6896] h-32">
      <div className="flex w-full px-2">
        <div>
          <h3 className="font-bold text-[16px] mb-5">
            Comienza a invertir hoy ¡Tenemos inmuebles disponibles ahora!
          </h3>
          <button className="px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold">
            Ver inmuebles
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestNowBanner;
