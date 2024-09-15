import { api_customer_post } from "@/config/api-links";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const signup = () => {
  const [condition, setConditions] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = async (values: any) => {
    try {
      const createCustomer = await axios.post(api_customer_post, values);
      if (createCustomer.status === 200) {
        router.push("/dashboard/properties");
      }
    } catch (e) {
      console.error(e);
    }
  };

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
            <form onSubmit={handleSubmit(submit)}>
              <div className="flex flex-col mb-4">
                <label className="text-[#55565d]">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-[#55565d]">Nombre</label>
                <input {...register("name")} type="text" placeholder="" />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-[#55565d]">Apellidos</label>
                <input {...register("lastname")} type="text" placeholder="" />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-[#55565d]">
                  Código de referido (Opcional)
                </label>
                <input {...register("reffer")} type="text" placeholder="" />
              </div>
              <div className="flex mb-4">
                <input
                  onChange={() => setConditions(!condition)}
                  type="checkbox"
                  className="mr-3"
                  placeholder=""
                />
                <label>Acepto los Términos y Condiciones</label>
              </div>
              <div className="flex py-6">
                <button className="w-1/2">Cancelar</button>
                <button
                  type="submit"
                  disabled={!condition}
                  className="w-1/2 bg-[#30d59b] font-bold py-2 rounded-md text-white"
                >
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
