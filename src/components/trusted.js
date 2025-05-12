import React from "react";
import optimism from "../assets/media/optimism.webp";
import coinbase from "../assets/media/coinbase.webp";
import gitcoin from "../assets/media/gitcoin.webp";
import arbitrum from "../assets/media/arbitrum.webp";
import devfolio from "../assets/media/devfolio.webp";
import ceramic from "../assets/media/ceramic.webp";
import ethglobal from "../assets/media/ethglobal.webp";

function Trusted() {
  return (
    <div id="partners" className="relative scroll-offset">
      <div className="w-full lg:p-8 px-4 flex items-center justify-center min-h-[80vh]">
        {/* Trusted By Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h3
            className="text-[48px] font-bold"
            style={{
              fontSize: "48px",
              textAlign: "center",
              marginBottom: "2rem",
              paddingTop: "5rem",
            }}
          >
            Trusted By
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center px-4">
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            border: "1px solid #874FA8",
            height: "70px",
            width: "158px",
          }}
        >
          <img className="h-10 max-w-14" src={optimism} alt="OPTIMISM" />
        </div>
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            border: "1px solid #874FA8",
            height: "70px",
            width: "158px",
          }}
        >
          <img className="h-10 max-w-14" src={coinbase} alt="Coinbase" />
        </div>
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            border: "1px solid #874FA8",
            height: "70px",
            width: "158px",
          }}
        >
          <img className="h-10 max-w-14" src={gitcoin} alt="Gitcoin" />
        </div>
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            border: "1px solid #874FA8",
            height: "70px",
            width: "158px",
          }}
        >
          <img className="h-10 max-w-14" src={arbitrum} alt="Arbitrum" />
        </div>
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            border: "1px solid #874FA8",
            height: "70px",
            width: "158px",
          }}
        >
          <img className="h-10 max-w-14" src={devfolio} alt="Devfolio" />
        </div>
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            border: "1px solid #874FA8",
            height: "70px",
            width: "158px",
          }}
        >
          <img className="h-10 max-w-14" src={coinbase} alt="Coinbase" />
        </div>
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            border: "1px solid #874FA8",
            height: "70px",
            width: "158px",
          }}
        >
          <img className="h-10 max-w-14" src={ceramic} alt="Ceramic" />
        </div>
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            border: "1px solid #874FA8",
            height: "70px",
            width: "158px",
          }}
        >
          <img className="h-10 max-w-14" src={ethglobal} alt="ETHGlobal" />
        </div>
      </div>
    </div>
  );
}

export default Trusted;
