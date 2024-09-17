import useCustomer from "@/packages/hooks/useCustomer";
import { useRouter } from "next/router";
import React from "react";
import { PiWarningBold } from "react-icons/pi";

const KycBanner = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-[#7d3bd3] flex items-center rounded-lg px-9">
      <div className="flex py-5 justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <PiWarningBold size={40} color="#e0d39c" />
          <div className="flex flex-col ">
            <h3 className="font-bold text-white">Completar Registro KYC</h3>
            <p className="text-white">
              Para empezar a invertir debes completar el registro KYC y estar
              validado
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={() => router.push("/dashboard/config/kyc")}
            className="px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold"
          >
            Completar
          </button>
        </div>
      </div>
    </div>
  );
};

export default KycBanner;
