import React, { useEffect } from "react";
import useCustomer from "../hooks/useCustomer";
import { useForm } from "react-hook-form";
import ProfileNavBar from "./ProfileNavBar";
import axios from "axios";
import { api_customer_put } from "@/config/api-links";
import { toast } from "react-toastify";
import { signOut } from "next-auth/react";
import { PiWarningBold } from "react-icons/pi";
import { useRouter } from "next/router";
import KycBanner from "./kyc/KycBanner";
import { useSelector } from "react-redux";
import { deleteItemStorage, STORAGE_CUSTOMER_SESSION } from "@/utils/storage";

const ConfigProfile = () => {
  const { customer, getCustomer } = useCustomer();
  const user = useSelector((state: any) => state.user.userData);
  const { register, setValue, handleSubmit } = useForm();
  const router = useRouter();

  const updateInfo = async (values: any) => {
    try {
      const update = await axios.post(api_customer_put, {
        id: customer?.id,
        name: values.name,
        lastname: values.lastname,
      });
      if (update.status === 200) {
        toast.success("Tus datos se han actualizado.");
        getCustomer();
      } else {
        toast.warning("Ha habido un problema, intentalo más tarde.");
      }
    } catch (e) {
      console.error(e);
    }
  };
  console.log(user);
  useEffect(() => {
    setValue("name", user?.name);
    setValue("lastname", user?.lastname);
    setValue("email", user?.email);
  }, [customer]);

  return (
    <div className="w-full flex flex-col justify-center min-h-[70vh] bg- text-white">
      {user?.kycVerified === false ? <KycBanner /> : null}
      <div className="flex flex-col items-center mt-10">
        <ProfileNavBar />
        <div className="w-[100px] h-[100px] border-x-blue-950 avatar rounded-full flex justify-center items-center  ">
          <p className="text-[28px] font-extrabold text-white">KR</p>
        </div>

        <section className="flex flex-col gap-3 pt-8">
          <form onSubmit={handleSubmit(updateInfo)}>
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
            <div className="flex gap-3 pt-8">
              <button
                onClick={() => {
                  deleteItemStorage(STORAGE_CUSTOMER_SESSION);
                  signOut({
                    callbackUrl: "/",
                  });
                }}
                className="w-1/2 px-4 py-2 rounded-full bg-[#e10e0e] font-bold"
              >
                Cerrar sesión
              </button>
              <button
                type="submit"
                className="w-1/2 px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold"
              >
                Guardar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ConfigProfile;
