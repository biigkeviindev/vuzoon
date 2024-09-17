import { api_kyc_financial } from "@/config/api-links";
import { financialQuestions } from "@/constants/kyc";
import useCustomer from "@/packages/hooks/useCustomer";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const FinancialInfo = ({ handler }: any) => {
  const { register, setValue, handleSubmit } = useForm();
  const { customer } = useCustomer();

  const SaveFinancialInfo = async (values: any) => {
    await axios.post(api_kyc_financial, {
      id: customer?.id,
      ...values,
    });
    handler(3);
    try {
    } catch (e) {
      console.error(e);
    }
  };

  console.log(customer?.financial);

  useEffect(() => {
    setValue(`1`, `${customer?.financial[1]}`);
    setValue(`2`, `${customer?.financial[2]}`);
    setValue(`3`, `${customer?.financial[3]}`);
    setValue(`4`, `${customer?.financial[4]}`);
    setValue(`5`, `${customer?.financial[5]}`);
    setValue(`6`, `${customer?.financial[6]}`);
    setValue(`7`, `${customer?.financial[7]}`);
    setValue(`8`, `${customer?.financial[8]}`);
    setValue(`9`, `${customer?.financial[9]}`);
    setValue(`10`, `${customer?.financial[10]}`);
  }, [customer]);
  return (
    <div className="w-full flex flex-col justify-center items-center text-white   mb-9">
      <section className="w-[700px]">
        <div>
          <h1 className="text-[#E0D39C] font-bold text-[30px]">
            Información financiera
          </h1>
          <h2 className="font-bold text-white text-[20px]">
            Registro personal
          </h2>
          <p className="text-white text-[14px]">
            Incluye información sobre tus conocimientos en la materia, renta,
            origen de fondos y demás aspectos financieros.
          </p>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit(SaveFinancialInfo)}
            className="flex flex-col gap-3"
          >
            <div className="py-10 flex justify-center">
              <div className="flex flex-col gap-4">
                {financialQuestions.map((question, index) => {
                  return (
                    <div>
                      <p className="font-semibold">{question.question}</p>
                      <div>
                        {question.opciones.map((res: any) => (
                          <div className="py-1">
                            <input
                              className="mr-3"
                              {...register(`${question.id}`)}
                              value={res.valor}
                              type="radio"
                              name={`${question.id}`}
                            />
                            <label>{res.descripcion}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                // onClick={() => handler(3)}
                className="w-1/2 px-4 py-2 rounded-full bg-[#e0d39c] text-black font-bold"
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FinancialInfo;
