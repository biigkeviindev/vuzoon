import { kycSteps } from "@/constants/kyc";
import React from "react";
import ProfileNavBar from "../ProfileNavBar";

const Resume = ({ handler }: any) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[700px]">
        <div className="mb-8">
          <h1 className="text-[#E0D39C] font-bold text-[30px]">
            Regístrate en 4 sencillos pasos:
          </h1>
          <h3 className="font-bold text-white text-[20px]">
            Registro personal
          </h3>
          <p className="text-white text-[14px]">
            Por seguridad necesitamos validar tu identidad (KYC) e información
            financiera (AML). Te llevará solo unos pocos minutos.
          </p>
        </div>
        <div className="pl-10">
          {kycSteps.map((entry: any) => {
            return (
              <div className="mb-5">
                <h3 className="font-bold text-white text-[18px]">
                  {entry.paso}
                </h3>
                <h2 className="text-[#E0D39C]">{entry.titulo}</h2>
                <p className="text-white">{entry.descripcion}</p>
              </div>
            );
          })}
        </div>
        <div className="py-10 flex justify-center">
          <button
            onClick={() => handler(1)}
            className="w-1/2 px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
