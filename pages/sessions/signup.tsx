import { api_customer_post } from "@/config/api-links";
import { validatePassword } from "@/utils/strings";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signup = () => {
  const [condition, setConditions] = useState(false);

  const { register, handleSubmit } = useForm();

  const submit = async (values: any) => {
    if (validatePassword(values.password) !== true) {
      toast.error(validatePassword(values.password));
      return;
    }

    try {
      const createCustomer = await axios.post(api_customer_post, values);
      if (createCustomer.status === 200) {
        await signIn("credentials", {
          username: values.email,
          password: values.password,
          callbackUrl: "/dashboard/properties",
        });
      }
    } catch (error: any) {
      if (error.status === 409) {
        toast.error("El Email ya se encuentra registrado");
      }
    }
  };

  return (
    <div className="flex  min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200">
      <div className="md:w-1/2 min-h-screen bg-[#30d59b]"></div>
      <div className="w-full md:w-1/2 px-3  md:px-24 rounded-md flex justify-center items-center">
        <div className="w-full py-8 px-4 bg-white rounded-md">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-[#30d59b] font-extrabold text-[24px]">
              Regístrate
            </h2>
            <Link href="/sessions/signin">
              ¿Ya tienes una cuenta?{" "}
              <span className="font-bold cursor-pointer">Inicia sesión</span>
            </Link>
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
                <label className="text-[#55565d]">Contraseña</label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder=""
                />
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
                  className="w-1/2 bg-[#30d59b] font-bold py-2 rounded-md text-white cursor-pointer"
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

export default Signup;
