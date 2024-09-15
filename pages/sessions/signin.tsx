import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const result = await signIn("credentials", {
        username: email,
        password: password,
        callbackUrl: "/dashboard/properties",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex  min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200">
      <div className="md:w-1/2 min-h-screen bg-[#30d59b]"></div>
      <div className="w-full md:w-1/2 px-2 md:px-24 rounded-md flex justify-center items-center">
        <div className="w-full rounded py-8 px-4 bg-white">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-[#30d59b] font-extrabold text-[24px]">
              Iniciar sesión
            </h2>
            <Link href="/sessions/signup">
              ¿No tienes una cuenta?{" "}
              <span className="font-bold cursor-pointer">Regístrate</span>
            </Link>
          </div>
          <div>
            <form>
              <div className="flex flex-col mb-4">
                <label className="text-[#55565d]">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-[#55565d]">Contraseña</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder=""
                />
              </div>
              <div className="flex py-6">
                <button
                  type="submit"
                  className="w-full bg-[#30d59b] font-bold py-2 rounded-md text-white"
                  onClick={async (e) => {
                    e.preventDefault();
                    login();
                  }}
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
