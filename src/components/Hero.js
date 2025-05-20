import React from "react";
import heroImage from "../assets/media/hero-image.webp";
import { Typography } from "@material-tailwind/react";
import useIsMobile from "./context/useIsMobile";
import { RequestDemo } from "./modal/requestDemo";
import { PartnershipPopover } from "./modal/partnerWithUs";
import useIsTablet from "./context/useIsTablet";

function Hero() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (isMobile) {
    return (
      <div className="px-4">
        <div className="pt-8">
          <div className="w-full pt-5">
            <img src={heroImage} alt="Hero" />
          </div>
          <h1 className="text-[48px] font-bold text-left leading-tight px-4 text-[#151314]">
            Buy. Sell. <br />
            Lend. Invest.
          </h1>
          <Typography className="text-[16px] font-inter font-normal mb-3 leading-relaxed text-left py-8 px-4 text-[#151314]">
            MetaDeed enables fully compliant real estate transactions on
            Ethereum — powered by verified attestations and settled in Digital
            Dirham, with every step secured on-chain and aligned with regulatory
            oversight.
          </Typography>
          <div className="px-4">
            <RequestDemo />
            <PartnershipPopover />
          </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="px-4">
        <div className="pt-8">
          <div className="w-full pt-5">
            <img src={heroImage} alt="Hero" />
          </div>
          <h1 className="text-[48px] font-bold text-left leading-tight px-4 text-[#151314]">
            Buy. Sell. <br />
            Lend. Invest.
          </h1>
          <Typography className="text-[16px] font-inter font-normal mb-3 leading-relaxed text-left py-8 px-4 text-[#151314]">
            MetaDeed enables fully compliant real estate transactions on
            Ethereum — powered by verified attestations and settled in Digital
            Dirham, with every step secured on-chain and aligned with regulatory
            oversight.
          </Typography>
          <div className="flex gap-4 mt-4">
            <RequestDemo />
            <PartnershipPopover />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:p-8 px-4 flex items-center justify-between pt-8">
      {/* Left Section */}
      <div className="w-[55%] pt-8">
        <h1 className="text-[96px] font-bold leading-[1.04] text-[#151314]">
          Buy. Sell. <br />
          Lend. Invest.
        </h1>
        <Typography className="text-[16px] font-inter font-normal mr-1 mb-3 leading-relaxed py-6 w-[70%] text-[#151314]">
          MetaDeed enables fully compliant real estate transactions on Ethereum
          — powered by verified attestations and settled in Digital Dirham, with
          every step secured on-chain and aligned with regulatory oversight.
        </Typography>
        <div className="flex gap-4 mt-4">
          <RequestDemo />
          <PartnershipPopover />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[45%] pt-8">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
