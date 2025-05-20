import React from "react";
import { RequestDemo } from "./modal/requestDemo";
import useIsMobile from "./context/useIsMobile";
import { PartnershipPopover } from "./modal/partnerWithUs";

function CallToAction() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="px-5 py-14">
        <div className="w-full">
          <h3 className="text-[28px] font-medium text-center pt-16">
            The Future of Real Estate Is On-Chain
          </h3>
        </div>
        <div className="w-full flex flex-col pt-5 justify-center">
          <RequestDemo />
          <PartnershipPopover />
        </div>
      </div>
    );
  }
  return (
    <div className="mt-8 mb-8">
      <div className="w-full lg:p-8 px-4 flex items-center justify-center">
        {/* Call to action By Section */}
        <div className="w-full lg:px-6 lg:pr-14">
          <h3 className="text-[48px] font-bold text-center pt-16">
            The Future of Real Estate Is On-Chain
          </h3>
        </div>
      </div>
      <div className="w-full flex gap-4 mt-1 justify-center">
        <RequestDemo />
        <PartnershipPopover />
      </div>
    </div>
  );
}

export default CallToAction;
