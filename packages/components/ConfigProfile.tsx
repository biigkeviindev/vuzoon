import React, { useEffect } from "react";
import useCustomer from "../hooks/useCustomer";
import { useForm } from "react-hook-form";
import ProfileNavBar from "./ProfileNavBar";

const ConfigProfile = () => {
  const { customer } = useCustomer();
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    setValue("name", customer?.name);
    setValue("lastname", customer?.lastname);
    setValue("email", customer?.email);
  }, [customer]);

  return (
    <div className="w-full flex justify-center h-[70vh] bg- pt-9 text-white">
      <div className="flex flex-col items-center">
        <ProfileNavBar />
        <div className="w-[100px] h-[100px] border-x-blue-950 avatar rounded-full flex justify-center items-center  ">
          <p className="text-[28px] font-extrabold text-white">KR</p>
        </div>

        <section className="flex flex-col gap-3 pt-16">
          <form>
            <div className="flex gap-2 mb-3">
              <div className="flex flex-col w-1/2">
                <span className="mb-2">Nombre</span>
                <input
                  {...register("name")}
                  className="bg-[#17212e] border-solid border-2 border-white"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col w-1/2">
                <span className="mb-2">Apellidos</span>
                <input
                  className="bg-[#17212e] border-solid border-2 border-white"
                  {...register("lastname")}
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <span className="mb-2">Email</span>
              <input
                className=" border-solid border-2 border-white bg-[#344054]"
                {...register("email")}
                type="text"
                placeholder=""
                disabled
              />
            </div>
          </form>
          <div className="flex gap-3 pt-8">
            <button className="w-1/2 px-4 py-2 rounded-full bg-[#e10e0e] font-bold">
              Cerrar sesión
            </button>
            <button className="w-1/2 px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold">
              Guardar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConfigProfile;
