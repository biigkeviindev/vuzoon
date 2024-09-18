import { useEffect, useState } from "react";
import { ethers, formatEther } from "ethers";
import { BrowserProvider } from "ethers";
declare global {
  interface Window {
    ethereum: any;
  }
}

// Define tipos para el estado
interface UseMetamaskData {
  address: string | null;
  balance: string | null;
  error: string | null;
  connect: any | null;
}

const useMetamask = (): UseMetamaskData => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connect = async () => {
    try {
      // Verifica si MetaMask está instalada
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);

        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        const balanceOf = await provider.getBalance(address);
        const balanceInEth = formatEther(balanceOf);

        setAddress(address);
        setBalance(balanceInEth);
      } else {
        setError("MetaMask no está instalado. Instálalo para continuar.");
      }
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al conectar la billetera.");
    }
  };

  return {
    address,
    balance,
    error,
    connect,
  };
};

export default useMetamask;
