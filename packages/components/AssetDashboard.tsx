import React from "react";
import { BsHouseCheckFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HiWallet } from "react-icons/hi2";
import useMetamask from "../hooks/useMetamask";

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
  } = useMetamask();
  console.log(
    address,
    balance,
    chainId,
    networkName,
    blockNumber,
    gasPrice,
    txCount,
    error
  );
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
      <div className="px-10 bg-[#ffffff08] rounded-lg py-2">
        <p className="flex">
          <HiWallet size={24} className="mr-3" />
          Wallet
        </p>
      </div>
    </div>
  );
};

export default AssetDashboard;
