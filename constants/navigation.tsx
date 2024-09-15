import { DiAptana } from "react-icons/di";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { HiWallet } from "react-icons/hi2";
import { RiP2pFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { SiHiveBlockchain } from "react-icons/si";

export const NavigationItems = [
  {
    title: "Dashboard",
    link: "",
    icon: <RxDashboard />,
  },
  {
    title: "Inmuebles",
    link: "",
    icon: <FaHouseCircleCheck />,
  },
  {
    title: "P2P",
    link: "",
    icon: <RiP2pFill />,
  },
  {
    title: "Wallets",
    link: "",
    icon: <HiWallet />,
  },
  {
    title: "Dapp",
    link: "",
    icon: <SiHiveBlockchain />,
  },
  {
    title: "Configuración",
    link: "",
    icon: <DiAptana />,
  },
];
