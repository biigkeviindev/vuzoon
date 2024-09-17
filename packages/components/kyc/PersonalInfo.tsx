import { api_kyc_post } from "@/config/api-links";
import useCustomer from "@/packages/hooks/useCustomer";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const PersonalInfo = ({ handler }: any) => {
  const { customer } = useCustomer();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("name", customer?.kyc.personal?.name);
    setValue("lastname", customer?.kyc.personal.lastname);
    setValue("identity", customer?.kyc.personal.identity);
    setValue("bornDate", customer?.kyc.personal.bornDate);
    setValue("phone", customer?.kyc.personal.phone);
    setValue("country", customer?.kyc.personal.country);
    setValue("city", customer?.kyc.personal.city);
  }, [customer]);

  const submitPersonalInfo = async (values: any) => {
    try {
      const savePersonalInfo = await axios.post(api_kyc_post, {
        id: customer?.id,
        ...values,
      });
      console.log(savePersonalInfo);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center text-white  bg-white]">
      <section className="w-[700px]">
        <div>
          <h1 className="text-[#E0D39C] font-bold text-[30px]">
            Información personal
          </h1>
          <h2 className="font-bold text-white text-[20px]">
            Registro personal
          </h2>
          <p className="text-white text-[14px]">
            Completa tu información personal básica, incluido el domicilio donde
            resides.
          </p>
        </div>
        <div className="pt-9">
          <form
            onSubmit={handleSubmit(submitPersonalInfo)}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col w-full">
              <label className="mb-2">Nombre</label>
              <input
                className="w-full bg-[#17212e] border-solid border-2 border-white"
                type=""
                placeholder=""
                {...register("name")}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">Apellidos</label>
              <input
                className="w-full bg-[#17212e] border-solid border-2 border-white"
                type=""
                placeholder=""
                {...register("lastname")}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">Documento de identidad</label>
              <input
                className="w-full bg-[#17212e] border-solid border-2 border-white"
                type=""
                placeholder=""
                {...register("identity")}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">Fecha de nacimiento</label>
              <input
                className="w-full bg-[#17212e] border-solid border-2 border-white"
                type=""
                placeholder=""
                {...register("bornDate")}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">Teléfono</label>
              <input
                className="w-full bg-[#17212e] border-solid border-2 border-white"
                type=""
                placeholder=""
                {...register("phone")}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">País de residencia</label>
              <input
                className="w-full bg-[#17212e] border-solid border-2 border-white"
                type=""
                placeholder=""
                {...register("country")}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-2">Ciudad</label>
              <input
                className="w-full bg-[#17212e] border-solid border-2 border-white"
                type=""
                placeholder=""
                {...register("city")}
              />
            </div>
            <div className="py-10 flex justify-center">
              <button className="w-1/2 px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold">
                Continuar
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PersonalInfo;
