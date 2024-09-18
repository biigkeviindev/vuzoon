import { useEffect, useState } from "react";
import { ethers } from "ethers";
declare global {
  interface Window {
    ethereum: any;
  }
}

// Define tipos para el estado
interface UseMetamaskData {
  address: string | null;
  balance: string | null;
  chainId: number | null;
  networkName: string | null;
  blockNumber: number | null;
  gasPrice: string | null;
  txCount: number | null;
  error: string | null;
  connect: any | null;
}

const useMetamask = (): UseMetamaskData => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [networkName, setNetworkName] = useState<string | null>(null);
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [gasPrice, setGasPrice] = useState<string | null>(null);
  const [txCount, setTxCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connect = async () => {
    try {
      // Verifica si MetaMask está instalada
      if (window.ethereum) {
        // Solicita acceso a la cuenta de MetaMask
        const accounts: string[] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setAddress(account);

        // Crea un proveedor con ethers usando MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // Obtén el balance de la cuenta en ETH
        const balanceWei = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balanceWei));

        // Obtén la red actual (Chain ID y nombre)
        const network = await provider.getNetwork();
        setChainId(network.chainId);
        setNetworkName(network.name);

        // Obtén el número del bloque actual
        const blockNumber = await provider.getBlockNumber();
        setBlockNumber(blockNumber);

        // Obtén el precio del gas actual
        const gasPrice = await provider.getGasPrice();
        setGasPrice(ethers.utils.formatUnits(gasPrice, "gwei"));

        // Obtén el número de transacciones enviadas desde la cuenta
        const txCount = await provider.getTransactionCount(account);
        setTxCount(txCount);
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
    chainId,
    networkName,
    blockNumber,
    gasPrice,
    txCount,
    error,
    connect,
  };
};

export default useMetamask;
