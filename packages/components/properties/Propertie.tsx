import { RealStateAsset } from "@/types/assets";
import { formatCurrency } from "@/utils/strings";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const Propertie = () => {
  const { id } = useParams();
  const assets = useSelector((state: any) => state.assets.assets);
  const assetSelected = assets.find(
    (asset: RealStateAsset) => asset._id === id
  );
  console.log(assetSelected);
  return (
    <div className="text-white">
      <section className="flex">
        <div className="w-1/2 p-20">
          <img
            src="https://d23t4e7dm0xzj0.cloudfront.net/RDO-6/images/1712173864004_rdo_6_1.png"
            alt=""
            className="rounded-md w-full"
          />
          <div className="flex gap-1 py-5">
            <img
              src="https://d23t4e7dm0xzj0.cloudfront.net/RDO-6/images/1712173864004_rdo_6_1.png"
              alt=""
              className="rounded-md w-1/3"
            />
            <img
              src="https://d23t4e7dm0xzj0.cloudfront.net/RDO-6/images/1712173864004_rdo_6_1.png"
              alt=""
              className="rounded-md w-1/3"
            />
            <img
              src="https://d23t4e7dm0xzj0.cloudfront.net/RDO-6/images/1712173864004_rdo_6_1.png"
              alt=""
              className="rounded-md w-1/3"
            />
          </div>
        </div>
        <div className="w-1/2 px-24 py-20 bg-[#17212e] rounded-lg h-fit mt-20">
          <div className="flex items-center gap-5">
            <h1 className="text-[25px] font-bold">{assetSelected.name}</h1>
            <span className="text-xs font-bold px-4 py-2 bg-[#d3d3e0] rounded-full">
              {assetSelected.tokenCode}
            </span>
            <span className="text-xs px-4 py-2 bg-[#fff7e3] text-[#f79b0c] rounded-full">
              {assetSelected.status}
            </span>
          </div>
          <h3 className="text-[22px] font-light">
            {formatCurrency(assetSelected.salePrice)}
          </h3>
          <div className="w-full  text-[18px] pt-8">
            <div className="flex justify-between">
              <p>Precio del token</p>
              <p>{formatCurrency(assetSelected.tokenPrice)}</p>
            </div>
            <div className="flex justify-between">
              <p>Período de inversión</p>
              <p>
                {assetSelected.period.start} - {assetSelected.period.ends}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Rentabilidad anual alquiler</p>
              <p>{assetSelected.rentability.yearRent} %</p>
            </div>
            <div className="flex justify-between">
              <p>Rentabilidad total estimada</p>
              <p>{assetSelected.rentability.totalInversion} %</p>
            </div>
            <div className="flex justify-between">
              <p>Inicio renta</p>
              <p>{assetSelected.initRentDate}</p>
            </div>
          </div>
          <div className="flex justify-center w-full py-7">
            <button className="w-1/2 px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold">
              Invertir
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Propertie;
