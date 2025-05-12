import React from "react";
import heroImage from "../assets/media/hero-image.webp";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
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
          <a href="/request-demo">
            <Button
              size="lg"
              variant="outlined"
              className="normal-case font-medium font-grotesk py-3 w-[250px] rounded-md border-2"
              style={{ width: "270px", height: "60px", fontSize: "18px" }}
            >
              <h3>Request a Demo</h3>
            </Button>
          </a>
          <a href="/partner-with-us">
            <Button
              size="lg"
              className="normal-case font-medium w-[250px] rounded-md py-3.5"
              style={{
                width: "270px",
                backgroundColor: "#000",
                height: "60px",
                fontSize: "18px",
              }}
            >
              <h3>Partner with us</h3>
            </Button>
          </a>
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
