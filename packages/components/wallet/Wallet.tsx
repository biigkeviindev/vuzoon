import { api_wallet_verify } from "@/config/api-links";
import useMetamask from "@/packages/hooks/useMetamask";
import axios from "axios";
import React, { useEffect } from "react";
import { BiStar } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Wallet = () => {
  const { address, connect } = useMetamask();
  const id = useSelector((state: any) => state.user.userData.id);
  const walletAddress = useSelector((state: any) => state.user.userData.wallet);

  const validateWallet = async () => {
    try {
      const validate = await axios.post(api_wallet_verify, {
        id: id,
        walletAddress: address,
      });
      if (validate.status === 200) {
        toast.success("Se ha validado correctamente la wallet.");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-white w-full">
      <div className="flex flex-col items-center pt-[90px] w-[700px] text-center">
        <h1 className="text-[#E0D39C] font-bold text-[30px]">Wallet</h1>
        <p className="text-white text-[14px] mb-5">
          Todos los usuarios tenemos una o más wallets. Con ellas podrás comprar
          tokens, recibir rendimientos y reinvertir. Haz click en las wallets
          registradas para ver el detalle
        </p>
        <p className="flex items-center text-[14px]">
          <CiWarning />
          Tu wallet será tu billetera con la que interactuarás en
          Realtokenfunds.
        </p>
      </div>
      <div className="flex flex-col w-[700px] pt-9">
        <h2 className="text-[#E0D39C] font-bold mb-10 text-[20px]">
          Wallets disponibles
        </h2>
        <div className="w-full">
          <div className="flex justify-between w-full  border-2 border-solid border-[#e0d39c] p-8 rounded-md">
            <div>
              <p className="flex items-center text-white font-bold">
                {" "}
                <BiStar color="#e0d39c" size={24} className="mr-4" />
                {address}
              </p>
            </div>
            {walletAddress === address ? (
              <div
                onClick={() => validateWallet()}
                className="cursor-pointer flex items-center px-4 rounded-full bg-[#e0d39c] text-black font-bold"
              >
                <div className="mr-2 rounded-full w-[15px] h-[15px] bg-green-500"></div>
                <span>Validada</span>
              </div>
            ) : (
              <div
                onClick={() => validateWallet()}
                className="cursor-pointer flex items-center px-4 rounded-full bg-[#e0d39c] text-black font-bold"
              >
                <div className="mr-2 rounded-full w-[15px] h-[15px] bg-yellow-500"></div>
                <span>Validar Wallet</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
