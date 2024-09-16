import { DiAptana } from "react-icons/di";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { HiWallet } from "react-icons/hi2";
import { RiP2pFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { SiHiveBlockchain } from "react-icons/si";

export const NavigationItems = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <RxDashboard size={20} />,
  },
  {
    title: "Inmuebles",
    link: "/dashboard/properties",
    icon: <FaHouseCircleCheck size={20} />,
  },
  {
    title: "P2P",
    link: "/dashboard/p2p",
    icon: <RiP2pFill size={20} />,
  },
  {
    title: "Wallets",
    link: "/dashboard/wallets",
    icon: <HiWallet size={20} />,
  },
  {
    title: "Dapp",
    link: "",
    icon: <SiHiveBlockchain size={20} />,
  },
  {
    title: "Configuración",
    link: "/dashboard/config/profile",
    icon: <DiAptana size={20} />,
  },
];
