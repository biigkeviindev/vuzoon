import React from "react";

const AssetCard = ({ asset }: any) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3  p-2">
      <div className="m-h-[280px] shadow-md  rounded-lg bg-[#fff] text-black">
        <div>
          <img
            src="https://d23t4e7dm0xzj0.cloudfront.net/MLG-8/images/1720098967004_2024_07_02_dormitorio_nalon_3_3_mlg_8_ml_1.png"
            className="rounded-tl-lg rounded-tr-lg"
            alt=""
          />
        </div>
        <div className="px-5 py-14 flex flex-col gap-3 pb-10">
          <div className="flex justify-between border-1">
            <h3 className=" text-xl">{asset.name}</h3>
            <span className="font-bold text-xl">{asset.salePrice} €</span>
          </div>
          <div className="flex gap-6 ">
            <span className="text-xs font-bold px-4 py-1 bg-[#f1f2f3] rounded-full">
              {asset.tokenCode}
            </span>
            <span className="text-xs px-4 py-1 bg-[#fff7e3] text-[#f79b0c] rounded-full">
              {asset.status}
            </span>
          </div>
          <div className="flex justify-between  ">
            <div>
              <p className="text-xs">Financiado</p>
              <span className="text-base font-bold">{asset.financed} €</span>
            </div>
            <div>
              <p className="text-xs">Objetivo</p>
              <span className="text-base font-bold">{asset.salePrice} €</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between ">
              <p className="text-base">Precio del token</p>
              <span className="font-bold">{asset.tokenPrice} €</span>
            </div>
            <div className="text-base flex justify-between  ">
              <p className="text-base">Rentabilidad total estimada</p>
              <span className="font-bold">
                {asset.rentability.totalInversion}%
              </span>
            </div>
            <div className="flex justify-between ">
              <p className="text-base">Rentabilidad anual alquiler</p>
              <span className="font-bold">{asset.rentability.yearRent}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
