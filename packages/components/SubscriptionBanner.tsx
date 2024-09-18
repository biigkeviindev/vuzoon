import React from "react";

const SubscriptionBanner = () => {
  return (
    <div className="flex w-1/2 justify-between items-center px-2 py-4 rounded-md text-white bg-[#6d6896] h-32">
      <div className="flex flex-col w-full px-2">
        <div>
          <h3 className="font-bold text-[16px] mb-5">
            Obtén mayores rentabilidades mejorando tu estatus
          </h3>
          <button className="px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold">
            Subir mi categoría
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
