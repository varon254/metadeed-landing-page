import { Typography } from "@material-tailwind/react";
import React from "react";
import useIsMobile from "../context/useIsMobile";
import useIsTablet from "../context/useIsTablet";

function LenderTab() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (isMobile) {
    return (
      <div>
        <div
          className="w-full rounded-xl flex items-center p-5 text-left h-full my-2"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[40px] text-[#874FA8] w-[60px]">
            1
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
              Onboard as a Verified Lender
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>Sign in with Eth Wallet </li>{" "}
              <li>Register as institutional or decentralized lender</li>
              <li>List mortgage offers on MetaDeed marketplace</li>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl flex items-center p-5 text-left h-full my-2"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[40px] text-[#874FA8] w-[60px]">
            2
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
              Fund Mortgage Requests
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>Browse verified buyer profiles and property NFTs </li>{" "}
              <li>Approve and transfer mortgage funds to smart contract</li>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl flex items-center p-5 text-left h-full my-2"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[40px] text-[#874FA8] w-[60px]">
            3
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
              Earn Monthly Yield
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>Receive automated repayments + interest</li>{" "}
              <li>Use funds in Digital Dirham</li>
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div>
        <div className="flex items-center gap-3 mx-auto justify-center py-4">
          <div
            className="w-full rounded-xl p-10 flex items-center px-10 py-5 text-left h-[180px]"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="font-bold text-[48px] text-[#874FA8] w-[60px] font-grotesk">
              1
            </div>
            <div className="flex flex-col justify-start">
              <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
                Onboard as a Verified Lender
              </Typography>
              <Typography className="text-[12px] text-[#151314] font-inter">
                <li>Sign in with Eth Wallet </li>{" "}
                <li>Register as institutional or decentralized lender</li>
                <li>List mortgage offers on MetaDeed marketplace</li>
              </Typography>
            </div>
          </div>
          <div
            className="w-full rounded-xl p-10 flex items-center px-10 py-5 text-left h-[180px]"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="font-bold text-[48px] text-[#874FA8] w-[60px] font-grotesk">
              2
            </div>
            <div className="flex flex-col justify-start">
              <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
                Fund Mortgage Requests
              </Typography>
              <Typography className="text-[12px] text-[#151314] font-inter">
                <li>Browse verified buyer profiles and property NFTs </li>{" "}
                <li>Approve and transfer mortgage funds to smart contract</li>
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-auto justify-start pb-4 mr-2">
          <div
            className="w-1/2 rounded-xl p-10 flex items-center h-[180px] text-left px-10 py-5"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="font-bold text-[48px] text-[#874FA8] w-[60px] font-grotesk">
              3
            </div>
            <div className="flex flex-col justify-start">
              <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
                Earn Monthly Yield
              </Typography>
              <Typography className="text-[12px] text-[#151314] font-inter">
                <li>Receive automated repayments + interest</li>{" "}
                <li>Use funds in Digital Dirham</li>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mx-auto justify-center py-4 px-16">
        <div
          className="w-1/2 rounded-xl p-10 flex items-center text-left h-[138px] px-10 py-5"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[48px] text-[#874FA8] w-[60px]">
            1
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium font-grotesk text-[22px] text-[#151314]">
              Onboard as a Verified Lender
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>Sign in with Eth Wallet </li>{" "}
              <li>Register as institutional or decentralized lender</li>
              <li>List mortgage offers on MetaDeed marketplace</li>
            </Typography>
          </div>
        </div>
        <div
          className="w-1/2 rounded-xl p-10 flex items-center text-left h-[138px] px-10 py-5"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[48px] text-[#874FA8] w-[60px]">
            2
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium font-grotesk text-[22px] text-[#151314]">
              Fund Mortgage Requests
            </Typography>
            <Typography className="text-[14px] text-[#151314] font-inter">
              <li>Browse verified buyer profiles and property NFTs </li>{" "}
              <li>Approve and transfer mortgage funds to smart contract</li>
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mx-auto justify-start pb-12 px-16 mr-2">
        <div
          className="w-1/2 rounded-xl p-10 flex items-center text-left h-[138px] px-10 py-5"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[48px] text-[#874FA8] w-[60px]">
            3
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium font-grotesk text-[22px] text-[#151314]">
              Earn Monthly Yield
            </Typography>
            <Typography className="text-[14px] text-[#151314] font-inter">
              <li>Receive automated repayments + interest</li>{" "}
              <li>Use funds in Digital Dirham</li>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LenderTab;
