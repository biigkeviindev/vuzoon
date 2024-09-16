import { kycSteps, uploadFiles } from "@/constants/kyc";
import React from "react";
import ProfileNavBar from "../ProfileNavBar";

const Documents = ({ handler }: any) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[700px]">
        <div className="mb-8">
          <h1 className="text-[#E0D39C] font-bold text-[30px]">
            Sube tu DNI y selfie
          </h1>
          <h3 className="font-bold text-white text-[20px]">
            Registro personal
          </h3>
          <p className="text-white text-[14px]">
            Sube tu DNI o Pasaporte (anverso y reverso) y selfie, para que
            comprobemos tu identidad.
          </p>
        </div>
        <div className="pl-10">
          <div className="flex text-white pt-5">
            <div className="w-1/3 mb-12">
              <h3 className="font-semibold">Anverso</h3>
              <button>Subir archivo</button>
            </div>
            <div className="w-1/3">
              <h3 className="font-semibold">Reverso</h3>
              <button>Subir archivo</button>
            </div>
            <div className="w-1/3">
              <h3 className="font-semibold">Selfie</h3>
              <button>Subir archivo</button>
            </div>
          </div>
          <div>
            <p className="text-[#778491]">{uploadFiles}</p>
          </div>
        </div>
        <div className="py-10 flex justify-center">
          <button className="w-1/2 px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Documents;
