import React from "react";
import YieldToClaim from "./YieldToClaim";
import Vault from "./Vault";
import AcomulatedYields from "./AcomulatedYields";
import DistribuidYields from "./DistribuidYields";
import KycBanner from "../kyc/KycBanner";
import TransfersBanner from "../TransfersBanner";
import SubscriptionBanner from "../SubscriptionBanner";
import InvestNowBanner from "../InverstNowBanner";

const DashboardTable = () => {
  return (
    <>
      <div className="w-full mb-5">
        <InvestNowBanner />
      </div>
      <div className="gap-6 flex w-full flex-nowrap mb-5">
        <YieldToClaim />
        <Vault />
      </div>
      <div className="gap-6 flex w-full flex-nowrap mb-5">
        <AcomulatedYields />
        <DistribuidYields />
      </div>
      <div className="gap-6 flex w-full flex-nowrap mb-5">
        <TransfersBanner />
        <SubscriptionBanner />
      </div>
    </>
  );
};

export default DashboardTable;
