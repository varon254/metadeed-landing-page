import React from "react";
import heroImage from "../assets/media/hero-image.webp";
import { Button, Typography } from "@material-tailwind/react";
import useIsMobile from "./context/useIsMobile";
import { RequestDemo } from "./modal/requestDemo";
import { PartnershipPopover } from "./modal/partnerWithUs";

function Hero() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div style={{ padding: "0 1rem" }}>
        <div style={{ paddingTop: "2rem" }}>
          <div className="w-full pt-5">
            <img src={heroImage} alt="Hero" />
          </div>
          <h1
            className="text-[48px] font-bold text-left"
            style={{ fontSize: "48px", lineHeight: "1.2", padding: "0 1rem" }}
          >
            Buy. Sell. <br />
            Lend. Invest.
          </h1>
          <Typography
            className="text-[16px] font-inter font-normal mb-3 leading-relaxed text-left"
            style={{ padding: "2rem 1rem" }}
          >
            MetaDeed enables fully compliant real estate transactions on
            Ethereum — powered by verified attestations and settled in Digital
            Dirham, with every step secured on-chain and aligned with regulatory
            oversight.
          </Typography>
          <div style={{ padding: "0 1rem" }}>
            <a href="/request-demo">
              <Button
                size="lg"
                variant="outlined"
                className="normal-case font-medium font-grotesk py-3 rounded-md border-2"
                style={{
                  width: "100%",
                  height: "60px",
                  fontSize: "18px",
                  margin: "0.5rem 0",
                }}
              >
                <h3>Request a Demo</h3>
              </Button>
            </a>
            <a href="/partner-with-us">
              <Button
                size="lg"
                className="normal-case font-medium  rounded-md py-3.5"
                style={{
                  width: "100%",
                  backgroundColor: "#000",
                  height: "60px",
                  fontSize: "18px",
                  margin: "0.5rem 0",
                }}
              >
                <h3>Partner with us</h3>
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="w-full lg:p-8 px-4 flex items-center justify-between min-h-[80vh]"
      style={{ paddingTop: "2rem" }}
    >
      {/* Left Section */}
      <div className="lg:w-[60%] w-full lg:px-6 lg:pr-14 pt-5">
        <h1 className="text-[96px] font-bold" style={{ fontSize: "96px" }}>
          Buy. Sell. <br />
          Lend. Invest.
        </h1>
        <Typography
          className="text-[16px] font-inter font-normal mr-1 mb-3 leading-relaxed"
          style={{ paddingBottom: "1.5rem", width: "70%" }}
        >
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
      <div className="lg:w-[40%] w-full pt-5">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
