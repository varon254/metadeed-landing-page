import { Typography } from "@material-tailwind/react";
import React from "react";
import useIsMobile from "./context/useIsMobile";

function Connects() {
  const isMobile = useIsMobile();

  const data = [
    {
      title: "Buyer",
      description: "Own property with full transparency and on-chain identity.",
    },
    {
      title: "Seller",
      description:
        "Get liquidity and global visibility through Digital Dirham.",
    },
    {
      title: "Lender",
      description: "Invest in real estate-backed yields with real compliance.",
    },
    {
      title: "Insurer",
      description: "Mitigate lender risk with on-chain mortgage insurance.",
    },
    {
      title: "Government",
      description:
        "Real-time regulation, global reach, and seamless settlement in Digital Dirham.",
    },
  ];

  if (isMobile) {
    return (
      <div className="px-4">
        {/* MetaDeed Connects Section */}
        <div className="w-full pt-5">
          <h1 className="text-[48px] font-bold text-center leading-tight -mb-4">
            MetaDeed Connects
          </h1>
          <h3 className="text-[16px] font-normal text-center text-[#888888] my-4">
            Unlocking real estate assets, capital flows, and stakeholder trust
            through compliant, on-chain infrastructure.
          </h3>
        </div>
        <div className="my-8">
          {data.map(({ title, description }) => (
            <div
              className="w-full p-10 flex flex-col items-center h-[100px] rounded-xl border border-[#874FA8] my-5 py-2 px-5"
              style={{
                boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
              }}
            >
              <Typography className="font-medium text-[22px] text-black">
                <h3>{title}</h3>
              </Typography>
              <Typography>
                <span className="text-center text-black leading-5 text-sm">
                  <p>{description}</p>
                </span>
              </Typography>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full lg:p-8 px-4 flex items-center justify-center">
        {/* MetaDeed Connects Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h1 className="text-[96px] font-bold text-center -mb-4">
            MetaDeed Connects
          </h1>
          <h3 className="text-[22px] font-medium text-[#888888] text-center mb-8">
            Unlocking real estate assets, capital flows, and stakeholder trust
            through
            <br /> compliant, on-chain infrastructure.
          </h3>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 mx-auto justify-center py-4 px-16">
          <div
            className="w-full p-10 flex flex-col items-center border border-[#874FA8] rounded-xl h-[83px] py-2 px-10"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
            }}
          >
            <Typography className="font-medium text-[22px] text-black">
              <h3>Buyers</h3>
            </Typography>
            <Typography className="text-sm text-black font-inter">
              Own property with full transparency and on-chain identity.
            </Typography>
          </div>
          <div
            className="w-full p-10 flex flex-col items-center border border-[#874FA8] rounded-xl h-[83px] py-2 px-10"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
            }}
          >
            <Typography className="font-medium text-[22px] text-black">
              <h3>Sellers</h3>
            </Typography>
            <Typography className="text-sm text-black font-inter">
              Get liquidity and global visibility through Digital Dirham.
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-auto justify-center pt-2 pb-4 px-16">
          <div
            className="w-full p-10 flex flex-col items-center border border-[#874FA8] rounded-xl h-[83px] py-2 px-10"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
            }}
          >
            <Typography className="font-medium text-[22px] text-black">
              <h3>Lenders</h3>
            </Typography>
            <Typography className="text-sm text-black font-inter">
              Invest in real estate-backed yields with real compliance.
            </Typography>
          </div>
          <div
            className="w-full p-10 flex flex-col items-center border border-[#874FA8] rounded-xl h-[83px] py-2 px-10"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
            }}
          >
            <Typography className="font-medium text-[22px] text-black">
              <h3>Insurers</h3>
            </Typography>
            <Typography className="text-sm text-black font-inter">
              Mitigate lender risk with on-chain mortgage insurance.
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-auto justify-center pt-2 pb-4 px-16">
          <div
            className="w-1/2 p-10 flex flex-col items-center border border-[#874FA8] rounded-xl h-[83px] py-2 px-10"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
            }}
          >
            <Typography className="font-medium text-[22px] text-black">
              <h3>Governments</h3>
            </Typography>
            <Typography className="text-sm text-black font-inter">
              Real-time regulation, global reach, and seamless settlement in
              Digital Dirham.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connects;
