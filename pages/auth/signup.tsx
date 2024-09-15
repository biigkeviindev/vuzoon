import React from "react";

const signup = () => {
  return (
    <div className="flex  min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200">
      <div className="w-1/2 min-h-screen bg-[#30d59b]"></div>
      <div className="w-1/2 px-24 rounded-md flex justify-center items-center">
        <div className="w-full py-8 px-4 bg-white">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-[#30d59b] font-extrabold text-[24px]">
              ¡Hola! Te estábamos esperando
            </h2>
            <p className="font-bold">Empieza a invertir en pocos pasos</p>
          </div>
          <div>
            <form>
              <div className="flex flex-col mb-4">
                <label className="text-[#55565d]">Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-[#55565d]">Nombre</label>
                <input type="text" placeholder="" />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-[#55565d]">Apellidos</label>
                <input type="text" placeholder="" />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-[#55565d]">
                  Código de referido (Opcional)
                </label>
                <input type="text" placeholder="" />
              </div>
              <div className="flex mb-4">
                <input type="checkbox" className="mr-3" placeholder="" />
                <label>Acepto los Términos y Condiciones</label>
              </div>
              <div className="flex py-6">
                <button className="w-1/2">Cancelar</button>
                <button className="w-1/2 bg-[#30d59b] py-2 rounded-md text-white">
                  Registrarme
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
