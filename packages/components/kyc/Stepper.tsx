import React from "react";

const Stepper = ({ handler }: any) => {
  return (
    <div className="navigation-bar flex gap-20 justify-center items-center w-[900px] text-[#778491]">
      <div
        onClick={() => handler(0)}
        className="pb-3 flex justify-center text-center cursor-pointer relative"
      >
        <div className="font-extrabold absolute top-9 w-5 h-5 bg-[#E0D39C] rounded-full">
          1
        </div>
        <p>Resumen</p>
      </div>
      <div
        onClick={() => handler(1)}
        className="pb-3 flex justify-center text-center cursor-pointer relative"
      >
        <div className="font-extrabold absolute top-9 w-5 h-5 bg-[#E0D39C] rounded-full">
          2
        </div>
        <p>Información personal</p>
      </div>
      <div
        onClick={() => handler(2)}
        className="pb-3 flex justify-center text-center cursor-pointer relative"
      >
        <div className="font-extrabold absolute top-9 w-5 h-5 bg-[#E0D39C] rounded-full">
          3
        </div>
        <p>Información financiera</p>
      </div>
      <div
        onClick={() => handler(3)}
        className="pb-3 flex justify-center text-center cursor-pointer relative"
      >
        <div className="font-extrabold absolute top-9 w-5 h-5 bg-[#E0D39C] rounded-full">
          4
        </div>
        <p>Documentos</p>
      </div>
      <div></div>
    </div>
  );
};

export default Stepper;
