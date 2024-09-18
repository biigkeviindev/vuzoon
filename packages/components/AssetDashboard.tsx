import React, { useEffect } from "react";
import { BsHouseCheckFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HiWallet } from "react-icons/hi2";
import useMetamask from "../hooks/useMetamask";
import { MdVerified } from "react-icons/md";

const AssetDashboard = () => {
  const {
    address,
    balance,
    chainId,
    networkName,
    blockNumber,
    gasPrice,
    txCount,
    error,
    connect,
  } = useMetamask();

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="flex gap-2">
      <div className="px-10 bg-[#ffffff08] rounded-lg py-2">
        <p className="flex">
          <BsHouseCheckFill size={24} className="mr-3" />$ 0
        </p>
      </div>
      <div className="px-10 bg-[#ffffff08] rounded-lg py-2">
        <p className="flex">
          <FaMoneyBillTrendUp size={24} className="mr-3" /> 0,00
        </p>
      </div>
      {address ? (
        <div className="px-10 bg-[#e0d39c] text-black rounded-lg py-2">
          <p className="flex">
            <MdVerified size={24} className="mr-3" />
            {address?.slice(0, 7).toUpperCase()}
          </p>
        </div>
      ) : (
        <div
          onClick={() => connect()}
          className="cursor-pointer px-10 bg-[#ffffff08] rounded-lg py-2"
        >
          <p className="flex">
            <HiWallet size={24} className="mr-3" />
            Wallet
          </p>
        </div>
      )}
    </div>
  );
};

export default AssetDashboard;
