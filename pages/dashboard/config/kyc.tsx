import Documents from "@/packages/components/kyc/Documents";
import FinancialInfo from "@/packages/components/kyc/FinancialInfo";
import PersonalInfo from "@/packages/components/kyc/PersonalInfo";
import Resume from "@/packages/components/kyc/Resume";
import Stepper from "@/packages/components/kyc/Stepper";
import Layout from "@/packages/components/Layout";
import { checkCustomerSessionStorage } from "@/utils/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Kyc = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!checkCustomerSessionStorage()) {
      router.push("/sessions/signin");
    }
  }, []);

  if (!session) return null;

  return (
    <div>
      <Layout
        page="Configuración"
        content={
          <div className="flex flex-col w-full">
            <div className="mb-8">
              <h1 className="text-[30px] font-bold text-[#E0D39C]">
                Configuración
              </h1>
              <p className="text-white font-semibold">
                Completa el KYC y empieza a invertir en los inmuebles
                disponibles.
              </p>
            </div>
            <div className="flex mb-16 justify-center">
              <Stepper handler={setStep} />
            </div>
            {step === 0 && <Resume handler={setStep} />}
            {step === 1 && <PersonalInfo handler={setStep} />}
            {step === 2 && <FinancialInfo handler={setStep} />}
            {step === 3 && <Documents handler={setStep} />}
          </div>
        }
      ></Layout>
    </div>
  );
};

export default Kyc;
