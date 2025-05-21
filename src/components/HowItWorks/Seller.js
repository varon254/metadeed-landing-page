import { Typography } from "@material-tailwind/react";
import React from "react";
import useIsMobile from "../context/useIsMobile";
import useIsTablet from "../context/useIsTablet";

function SellerTab() {
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
              Verify & Tokenize Property
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>Sign in with Eth Wallet </li>{" "}
              <li>Get attestation from DLD to get your property listed</li>
              <li>Property is minted as an NFT representing full ownership</li>
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
              List Your Asset
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>Choose terms (fixed price or bidding) </li>{" "}
              <li>Verified property NFT goes live on MetaDeed marketplace</li>
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
              Accept Buyer Offer
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>Receive offer with escrowed deposit</li>{" "}
              <li>NFT enters escrow smart contract during due diligence</li>
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
              Transfer Upon Deal Closure
            </Typography>
            <Typography className="font-inter text-[12px] text-[#151314]">
              <li>NFT is transferred when buyer finalizes financing </li>{" "}
              <li>Seller receives funds directly in Digital Dirham</li>
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
                Verify & Tokenize Property
              </Typography>
              <Typography className="text-[12px] text-[#151314] font-inter">
                <li>Sign in with Eth Wallet </li>{" "}
                <li>Get attestation from DLD to get your property listed</li>
                <li>
                  Property is minted as an NFT representing full ownership
                </li>
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
                List Your Asset
              </Typography>
              <Typography className="text-[12px] text-[#151314] font-inter">
                <li>Choose terms (fixed price or bidding) </li>{" "}
                <li>Verified property NFT goes live on MetaDeed marketplace</li>
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
                Accept Buyer Offer
              </Typography>
              <Typography className="font-inter text-[12px] text-[#151314]">
                <li>Receive offer with escrowed deposit</li>{" "}
                <li>NFT enters escrow smart contract during due diligence</li>
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
                Transfer Upon Deal Closure
              </Typography>
              <Typography className="font-inter text-[12px] text-[#151314]">
                <li>NFT is transferred when buyer finalizes financing </li>{" "}
                <li>Seller receives funds directly in Digital Dirham</li>
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
              Verify & Tokenize Property
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>Sign in with Eth Wallet </li>{" "}
              <li>Get attestation from DLD to get your property listed</li>
              <li>Property is minted as an NFT representing full ownership</li>
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
              List Your Asset
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>Choose terms (fixed price or bidding) </li>{" "}
              <li>Verified property NFT goes live on MetaDeed marketplace</li>
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 mx-auto justify-center pb-12 px-16">
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
              Accept Buyer Offer
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>Receive offer with escrowed deposit</li>{" "}
              <li>NFT enters escrow smart contract during due diligence</li>
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
              Transfer Upon Deal Closure
            </Typography>
            <Typography className="font-inter text-[14px] text-[#151314]">
              <li>NFT is transferred when buyer finalizes financing </li>{" "}
              <li>Seller receives funds directly in Digital Dirham</li>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerTab;
