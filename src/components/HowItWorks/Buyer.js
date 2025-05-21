import { Typography } from "@material-tailwind/react";
import React from "react";
import useIsMobile from "../context/useIsMobile";
import useIsTablet from "../context/useIsTablet";

function BuyerTab() {
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
              Create Profile
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>Get attestation from UAE Pass with EAS </li>{" "}
              <li>Sign in with Eth Wallet</li>
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
              Browse & Make Offer
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>Discover verified property </li>{" "}
              <li>Submit your offer with a smart contract deposit</li>
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
              Get Financed (If Needed)
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>Get credit attestation from Etihad Credit Bureau account</li>{" "}
              <li>Choose from registered DeFi or institutional lenders</li>
              <li>Lender transfers funds into the escrow smart contract</li>
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
            4
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
              Pay Mortgage Monthly
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>Smart contract handles automated monthly payments </li>{" "}
              <li>Track balance, interest, and schedule from your dashboard</li>
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
            5
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
              Own It
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>
                Upon full repayment, NFT of title deed is released to your
                wallet
              </li>{" "}
              <li>You're now the on-chain verified property owner</li>
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
                Create Profile
              </Typography>
              <Typography className="text-[12px] text-[#151314] font-inter">
                <li>Get attestation from UAE Pass with EAS </li>{" "}
                <li>Sign in with Eth Wallet</li>
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
                Browse & Make Offer
              </Typography>
              <Typography className="text-[12px] text-[#151314] font-inter">
                <li>Discover verified property </li>{" "}
                <li>Submit your offer with a smart contract deposit</li>
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-auto justify-center pb-4">
          <div
            className="w-full rounded-xl p-10 flex items-center px-10 py-5 text-left h-[180px]"
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
                Get Financed (If Needed)
              </Typography>
              <Typography className="font-inter text-[12px] text-[#151314]">
                <li>
                  Get credit attestation from Etihad Credit Bureau account
                </li>{" "}
                <li>Choose from registered DeFi or institutional lenders</li>
                <li>Lender transfers funds into the escrow smart contract</li>
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
              4
            </div>
            <div className="flex flex-col justify-start">
              <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
                Pay Mortgage Monthly
              </Typography>
              <Typography className="font-inter text-[12px] text-[#151314]">
                <li>Smart contract handles automated monthly payments </li>{" "}
                <li>
                  Track balance, interest, and schedule from your dashboard
                </li>
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-auto justify-start pb-12 mr-2">
          <div
            className="w-1/2 rounded-xl p-10 flex items-center h-[180px] text-left px-10 py-5"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="font-bold text-[48px] text-[#874FA8] w-[60px] font-grotesk">
              5
            </div>
            <div className="flex flex-col justify-start">
              <Typography className="font-medium text-[18px] text-[#151314] font-grotesk">
                Own It
              </Typography>
              <Typography className="text-[12px] text-[#151314] font-inter">
                <li>
                  Upon full repayment, NFT of title deed is released to your
                  wallet
                </li>{" "}
                <li>You're now the on-chain verified property owner</li>
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
          className="w-1/2 rounded-xl p-10 flex items-center px-10 py-5 text-left h-[138px]"
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
              Create Profile
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>Get attestation from UAE Pass with EAS </li>{" "}
              <li>Sign in with Eth Wallet</li>
            </Typography>
          </div>
        </div>
        <div
          className="w-1/2 rounded-xl p-10 flex items-center px-10 py-5 text-left h-[138px]"
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
              Browse & Make Offer
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>Discover verified property </li>{" "}
              <li>Submit your offer with a smart contract deposit</li>
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mx-auto justify-center pb-4 px-16">
        <div
          className="w-1/2 rounded-xl p-10 flex items-center px-10 py-5 text-left h-[138px]"
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
              Get Financed (If Needed)
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>Get credit attestation from Etihad Credit Bureau account</li>{" "}
              <li>Choose from registered DeFi or institutional lenders</li>
              <li>Lender transfers funds into the escrow smart contract</li>
            </Typography>
          </div>
        </div>
        <div
          className="w-1/2 rounded-xl p-10 flex items-center px-10 py-5 text-left h-[138px]"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[48px] text-[#874FA8] w-[60px]">
            4
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium font-grotesk text-[22px] text-[#151314]">
              Pay Mortgage Monthly
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>Smart contract handles automated monthly payments </li>{" "}
              <li>Track balance, interest, and schedule from your dashboard</li>
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mx-auto justify-start pb-12 px-16 mr-2">
        <div
          className="w-1/2 rounded-xl p-10 flex items-center px-10 py-5 text-left h-[138px]"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="font-bold font-grotesk text-[48px] text-[#874FA8] w-[60px]">
            5
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium font-grotesk text-[22px] text-[#151314]">
              Own It
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>
                Upon full repayment, NFT of title deed is released to your
                wallet
              </li>{" "}
              <li>You're now the on-chain verified property owner</li>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerTab;
