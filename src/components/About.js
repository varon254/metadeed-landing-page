import { Typography } from "@material-tailwind/react";
import React from "react";
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  EyeIcon,
  PercentBadgeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import useIsMobile from "./context/useIsMobile";
import useIsTablet from "./context/useIsTablet";

function About() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (isMobile) {
    return (
      <div id="about-us" className="relative pt-20 px-4">
        <div>
          <Typography className="font-bold text-center font-grotesk text-[48px] ">
            MetaDeed ALL
          </Typography>
          <Typography className="font-bold font-grotesk text-[28px] text-center leading-tight">
            ON-CHAIN COMPLIANT
          </Typography>
          <Typography className="text-[16px] font-inter font-normal my-3 leading-relaxed text-center py-2">
            MetaDeed turns property into on-chain assets you can verify,
            finance, and own—instantly.
          </Typography>
        </div>
        <div className="mt-4">
          <div
            className="w-full rounded-xl my-1 flex flex-col items-center gap-3"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
              padding: "40px 30px",
              textAlign: "center",
              height: "100%",
              margin: "0.5rem 0",
            }}
          >
            <div
              className="p-5 rounded gap-3"
              style={{ backgroundColor: "#FFDCD8" }}
            >
              <ShieldCheckIcon
                className="w-8 h-8"
                style={{ color: "#FF4B37" }}
              />
            </div>
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px" }}>Compliant & Secure</h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px" }}>
                Powered by EAS with attestations issued via UAE Pass and Etihad
                Credit Bureau. No personal data stored—only secure,
                regulator-verified proofs on-chain.
              </span>
            </Typography>
          </div>
          <div
            className="w-full rounded-xl flex flex-col items-center gap-3"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
              padding: "40px 30px",
              textAlign: "center",
              height: "100%",
              margin: "0.5rem 0",
            }}
          >
            <div
              className="p-5 rounded gap-3"
              style={{ backgroundColor: "#DEFFD8" }}
            >
              <RocketLaunchIcon
                className="w-8 h-8"
                style={{ color: "#36E217" }}
              />
            </div>
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px" }}>Built on Ethereum Mainnet</h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px" }}>
                Access $124B+ in stablecoin liquidity. No need to bootstrap new
                capital pools. Composable with leading DeFi protocols like Aave,
                Morpho, and UniSwap.
              </span>
            </Typography>
          </div>
          <div
            className="w-full rounded-xl flex flex-col items-center gap-3"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
              padding: "40px 30px",
              textAlign: "center",
              height: "100%",
              margin: "0.5rem 0",
            }}
          >
            <div
              className="p-5 rounded gap-3"
              style={{ backgroundColor: "#D8FFFD" }}
            >
              <ArrowTrendingUpIcon
                className="w-8 h-8"
                style={{ color: "#0FDAD0" }}
              />
            </div>
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px" }}>Seamless Mortgage Process</h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px" }}>
                MetaDeed automates the full real estate lifecycle—from verified
                buyer onboarding and NFT property listings to deposits, mortgage
                funding, insurance issuance, and ownership transfer.
              </span>
            </Typography>
          </div>
          <div
            className="w-full rounded-xl flex flex-col items-center gap-3"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
              padding: "40px 30px",
              textAlign: "center",
              height: "100%",
              margin: "0.5rem 0",
            }}
          >
            <div
              className="p-5 rounded gap-3"
              style={{ backgroundColor: "#DCD8FF" }}
            >
              <PercentBadgeIcon
                className="w-8 h-8"
                style={{ color: "#4B3AE4" }}
              />
            </div>
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px" }}>Liquidity & Yield</h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px" }}>
                Create, bundle, and trade mortgage-backed NFTs. Unlock
                real-world yield streams through compliant, collateralized,
                on-chain assets.
              </span>
            </Typography>
          </div>
          <div
            className="w-full rounded-xl flex flex-col items-center gap-3"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
              padding: "40px 30px",
              textAlign: "center",
              height: "100%",
              margin: "0.5rem 0",
            }}
          >
            <div
              className="p-5 rounded gap-3"
              style={{ backgroundColor: "#FFD8FE" }}
            >
              <EyeIcon className="w-8 h-8" style={{ color: "#EA22E5" }} />
            </div>
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px" }}>
                On-Chain Real Estate Under the Digital Dirham Framework
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px" }}>
                Acts as a distribution partner for Digital Dirham, connecting
                Dubai’s real estate to the on-chain economy with verified
                ownership, compliance, and smart contract settlement.
              </span>
            </Typography>
          </div>
          <div
            className="w-full rounded-xl flex flex-col items-center gap-3"
            style={{
              boxShadow:
                "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
              padding: "40px 30px",
              textAlign: "center",
              height: "100%",
              margin: "0.5rem 0",
            }}
          >
            <div
              className="p-5 rounded gap-3"
              style={{ backgroundColor: "#FFF5D8" }}
            >
              <BanknotesIcon className="w-8 h-8" style={{ color: "#DEA908" }} />
            </div>
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px" }}>
                Real Utility Meets Digital Finance
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px" }}>
                MetaDeed enables property purchases, lending, insurance, and
                asset trading—all through a single, composable platform secured
                by EAS attestations.
              </span>
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div id="about-us" className="relative px-5 pt-20">
        <div className="w-full lg:p-8 px-4 flex items-start justify-between mt-12">
          <div className="w-[60%] flex flex-col justify-start items-end pt-5">
            <div className="pr-6">
              <Typography className="font-bold -mt-4 text-[60px] font-grotesk text-[#151314]">
                MetaDeed ALL
              </Typography>
              <Typography className="text-[16px] font-inter font-bold mr-1 mb-6 leading-relaxed text-[#151314]">
                MetaDeed turns property into on-chain assets you can verify,
                finance, and own—instantly.
              </Typography>
            </div>
          </div>
          <div className="w-[40%]">
            <Typography className="font-bold font-grotesk leading-[1] text-[36px] text-left mt-[1.8rem] pl-6 text-[#151314]">
              ON-CHAIN <br />
              COMPLIANT
            </Typography>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div
            className="w-1/2 rounded-xl p-10 flex flex-col items-center gap-3 h-[300px] text-center py-10 px-8"
            style={{
              boxShadow:
                "10px 14px 16px -1px rgba(196, 169, 210, 0.12),10px 12px 14px 0px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="p-5 rounded gap-3 bg-[#FFDCD8]">
              <ShieldCheckIcon className="w-8 h-8 text-[#FF4B37]" />
            </div>
            <Typography className="font-medium text-[22px] font-grotesk">
              Compliant & Secure
            </Typography>
            <Typography className="text-[14px] font-inter leading-normal">
              Powered by EAS with attestations issued via UAE Pass and Etihad
              Credit Bureau. No personal data stored—only secure,
              regulator-verified proofs on-chain.
            </Typography>
          </div>

          <div
            className="w-1/2 rounded-xl p-10 flex flex-col items-center gap-3 h-[300px] text-center py-10 px-8"
            style={{
              boxShadow:
                "10px 12px 14px 5px rgba(196, 169, 210, 0.12), 10px 14px 16px 5px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="p-5 rounded gap-3 bg-[#DEFFD8]">
              <RocketLaunchIcon className="w-8 h-8 text-[#36E217]" />
            </div>
            <Typography className="font-medium font-grotesk text-[22px]">
              Built on Ethereum Mainnet
            </Typography>
            <Typography className="text-[14px] font-inter leading-normal">
              Access $124B+ in stablecoin liquidity. No need to bootstrap new
              capital pools. Composable with leading DeFi protocols like Aave,
              Morpho, and UniSwap.
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div
            className="w-1/2 rounded-xl p-10 flex flex-col items-center gap-3 h-[300px] text-center py-10 px-8"
            style={{
              boxShadow:
                "10px 14px 16px -1px rgba(196, 169, 210, 0.12),10px 12px 14px -2px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="p-5 rounded gap-3 bg-[#D8FFFD]">
              <ArrowTrendingUpIcon className="w-8 h-8 text-[#0FDAD0]" />
            </div>
            <Typography className="font-medium text-[22px] font-grotesk">
              Seamless Mortgage Process
            </Typography>
            <Typography className="text-[14px] font-inter">
              MetaDeed automates the full real estate lifecycle—from verified
              buyer onboarding and NFT property listings to deposits, mortgage
              funding, insurance issuance, and ownership transfer.
            </Typography>
          </div>
          <div
            className="w-1/2 rounded-xl p-10 flex flex-col items-center gap-3 h-[300px] text-center py-10 px-8"
            style={{
              boxShadow:
                "10px 14px 16px 10px rgba(196, 169, 210, 0.12),10px 12px 14px -2px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="p-5 rounded gap-3 bg-[#DCD8FF]">
              <PercentBadgeIcon className="w-8 h-8 text-[#4B3AE4]" />
            </div>
            <Typography className="font-medium font-grotesk text-[22px]">
              Liquidity & Yield
            </Typography>
            <Typography className="font-inter text-[14px]">
              Create, bundle, and trade mortgage-backed NFTs. Unlock real-world
              yield streams through compliant, collateralized, on-chain assets.
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-4 pb-12">
          <div
            className="w-1/2 rounded-xl p-10 flex flex-col items-center gap-3 h-[350px] text-center py-10 px-8"
            style={{
              boxShadow:
                "10px 12px 14px 10px rgba(196, 169, 210, 0.12), 10px 14px 16px -1px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="p-5 rounded gap-3 bg-[#FFD8FE]">
              <EyeIcon className="w-8 h-8 text-[#EA22E5]" />
            </div>
            <Typography className="font-medium font-grotesk text-[22px]">
              On-Chain Real Estate Under the Digital Dirham Framework
            </Typography>
            <Typography className="text-[14px] font-inter">
              Acts as a distribution partner for Digital Dirham, connecting
              Dubai’s real estate to the on-chain economy with verified
              ownership, compliance, and smart contract settlement.
            </Typography>
          </div>

          <div
            className="w-1/2 rounded-xl p-10 flex flex-col items-center gap-3 h-[350px] text-center py-10 px-8"
            style={{
              boxShadow:
                "10px 14px 16px 10px rgba(196, 169, 210, 0.12),10px 12px 14px -2px rgba(196, 169, 210, 0.12)",
            }}
          >
            <div className="p-5 rounded gap-3 bg-[#FFF5D8]">
              <BanknotesIcon
                className="w-8 h-8 text-[#DEA908]"
                style={{ color: "#DEA908" }}
              />
            </div>
            <Typography className="font-medium text-[22px] font-grotesk">
              Real Utility Meets Digital Finance
            </Typography>
            <Typography className="text-[14px] font-inter">
              MetaDeed enables property purchases, lending, insurance, and asset
              trading—all through a single, composable platform secured by EAS
              attestations.
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="about-us" className="relative max-w-[85rem] my-0 mx-auto">
      <div className="w-full lg:p-8 px-4 flex items-start justify-between mt-12">
        <div className="w-[60%] flex flex-col justify-start items-end pt-5">
          <div className="pr-6">
            <Typography className="font-bold -mt-4 text-[96px] font-grotesk text-[#151314]">
              MetaDeed ALL
            </Typography>
            <Typography className="text-[16px] font-inter font-bold mr-1 mb-6 leading-relaxed text-[#151314]">
              MetaDeed turns property into on-chain assets you can verify,
              <br />
              finance, and own—instantly.
            </Typography>
          </div>
        </div>
        <div className="w-[40%]">
          <Typography className="font-bold font-grotesk leading-[1] text-[48px] text-left mt-[1.8rem] pl-6 text-[#151314]">
            ON-CHAIN <br />
            COMPLIANT
          </Typography>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3 h-[300px] text-center py-10 px-8"
          style={{
            boxShadow:
              "10px 14px 16px -1px rgba(196, 169, 210, 0.12),10px 12px 14px 0px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="p-5 rounded gap-3 bg-[#FFDCD8]">
            <ShieldCheckIcon className="w-8 h-8 text-[#FF4B37]" />
          </div>
          <Typography className="font-medium text-[22px] font-grotesk">
            Compliant & Secure
          </Typography>
          <Typography className="text-[14px] font-inter leading-normal">
            Powered by EAS with attestations issued via UAE Pass and Etihad
            Credit Bureau. No personal data stored—only secure,
            regulator-verified proofs on-chain.
          </Typography>
        </div>

        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3 h-[300px] text-center py-10 px-8"
          style={{
            boxShadow:
              "10px 12px 14px 5px rgba(196, 169, 210, 0.12), 10px 14px 16px 5px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="p-5 rounded gap-3 bg-[#DEFFD8]">
            <RocketLaunchIcon className="w-8 h-8 text-[#36E217]" />
          </div>
          <Typography className="font-medium font-grotesk text-[22px]">
            Built on Ethereum Mainnet
          </Typography>
          <Typography className="text-[14px] font-inter leading-normal">
            Access $124B+ in stablecoin liquidity. No need to bootstrap new
            capital pools. Composable with leading DeFi protocols like Aave,
            Morpho, and UniSwap.
          </Typography>
        </div>

        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3 h-[300px] text-center py-10 px-8"
          style={{
            boxShadow:
              "10px 14px 16px -1px rgba(196, 169, 210, 0.12),10px 12px 14px -2px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="p-5 rounded gap-3 bg-[#D8FFFD]">
            <ArrowTrendingUpIcon className="w-8 h-8 text-[#0FDAD0]" />
          </div>
          <Typography className="font-medium text-[22px] font-grotesk">
            Seamless Mortgage Process
          </Typography>
          <Typography className="text-[14px] font-inter">
            MetaDeed automates the full real estate lifecycle—from verified
            buyer onboarding and NFT property listings to deposits, mortgage
            funding, insurance issuance, and ownership transfer.
          </Typography>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 pt-4 pb-12">
        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3 h-[350px] text-center py-10 px-8"
          style={{
            boxShadow:
              "10px 14px 16px 10px rgba(196, 169, 210, 0.12),10px 12px 14px -2px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="p-5 rounded gap-3 bg-[#DCD8FF]">
            <PercentBadgeIcon className="w-8 h-8 text-[#4B3AE4]" />
          </div>
          <Typography className="font-medium font-grotesk text-[22px]">
            Liquidity & Yield
          </Typography>
          <Typography className="font-inter text-[14px]">
            Create, bundle, and trade mortgage-backed NFTs. Unlock real-world
            yield streams through compliant, collateralized, on-chain assets.
          </Typography>
        </div>

        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3 h-[350px] text-center py-10 px-8"
          style={{
            boxShadow:
              "10px 12px 14px 10px rgba(196, 169, 210, 0.12), 10px 14px 16px -1px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="p-5 rounded gap-3 bg-[#FFD8FE]">
            <EyeIcon className="w-8 h-8 text-[#EA22E5]" />
          </div>
          <Typography className="font-medium font-grotesk text-[22px]">
            On-Chain Real Estate Under the Digital Dirham Framework
          </Typography>
          <Typography className="text-[14px] font-inter">
            Acts as a distribution partner for Digital Dirham, connecting
            Dubai’s real estate to the on-chain economy with verified ownership,
            compliance, and smart contract settlement.
          </Typography>
        </div>

        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3 h-[350px] text-center py-10 px-8"
          style={{
            boxShadow:
              "10px 14px 16px 10px rgba(196, 169, 210, 0.12),10px 12px 14px -2px rgba(196, 169, 210, 0.12)",
          }}
        >
          <div className="p-5 rounded gap-3 bg-[#FFF5D8]">
            <BanknotesIcon
              className="w-8 h-8 text-[#DEA908]"
              style={{ color: "#DEA908" }}
            />
          </div>
          <Typography className="font-medium text-[22px] font-grotesk">
            Real Utility Meets Digital Finance
          </Typography>
          <Typography className="text-[14px] font-inter">
            MetaDeed enables property purchases, lending, insurance, and asset
            trading—all through a single, composable platform secured by EAS
            attestations.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default About;
