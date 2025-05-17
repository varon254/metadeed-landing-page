import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  EyeIcon,
  PercentBadgeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import useIsMobile from "./context/useIsMobile";

function About() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div
        style={{ marginTop: "4rem" }}
        id="about-us"
        className="relative scroll-offset"
      >
        <div>
          <Typography className="font-bold">
            <h1
              style={{
                fontSize: "24px",
                lineHeight: "1.2",
                marginTop: "1.8rem",
                textAlign: "center",
                color: "#874fa8",
              }}
            >
              ON-CHAIN COMPLIANT
            </h1>
          </Typography>
          <Typography className="font-bold text-center">
            <h1
              style={{
                fontSize: "48px",
                marginBottom: "-1rem",
              }}
            >
              MetaDeed ALL
            </h1>
          </Typography>
          <Typography
            className="text-[16px] font-inter font-bold my-3 leading-relaxed text-center"
            style={{ padding: "1rem 0" }}
          >
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
            <a href="/learn-more">
              <Button
                variant="text"
                className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
              >
                <span style={{ fontSize: "14px", color: "#874FA8" }}>
                  Learn More
                </span>{" "}
                <ArrowRightIcon
                  className="w-4 h-4"
                  style={{ color: "#874FA8" }}
                />
              </Button>
            </a>
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
            <a href="/learn-more">
              <Button
                variant="text"
                className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
              >
                <span style={{ fontSize: "14px", color: "#874FA8" }}>
                  Learn More
                </span>{" "}
                <ArrowRightIcon
                  className="w-4 h-4"
                  style={{ color: "#874FA8" }}
                />
              </Button>
            </a>
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
            <a href="/learn-more">
              <Button
                variant="text"
                className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
              >
                <span style={{ fontSize: "14px", color: "#874FA8" }}>
                  Learn More
                </span>{" "}
                <ArrowRightIcon
                  className="w-4 h-4"
                  style={{ color: "#874FA8" }}
                />
              </Button>
            </a>
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
            <a href="/learn-more">
              <Button
                variant="text"
                className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
              >
                <span style={{ fontSize: "14px", color: "#874FA8" }}>
                  Learn More
                </span>{" "}
                <ArrowRightIcon
                  className="w-4 h-4"
                  style={{ color: "#874FA8" }}
                />
              </Button>
            </a>
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
            <a href="/learn-more">
              <Button
                variant="text"
                className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
              >
                <span style={{ fontSize: "14px", color: "#874FA8" }}>
                  Learn More
                </span>{" "}
                <ArrowRightIcon
                  className="w-4 h-4"
                  style={{ color: "#874FA8" }}
                />
              </Button>
            </a>
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
            <a href="/learn-more">
              <Button
                variant="text"
                className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
              >
                <span style={{ fontSize: "14px", color: "#874FA8" }}>
                  Learn More
                </span>{" "}
                <ArrowRightIcon
                  className="w-4 h-4"
                  style={{ color: "#874FA8" }}
                />
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{ marginTop: "4rem" }}
      id="about-us"
      className="relative scroll-offset"
    >
      <div className="w-full lg:p-8 px-4 flex items-start justify-between min-h-[80vh]">
        <div
          className="lg:w-[70%] w-2/3 lg:px-6 lg:pr-14 pt-5 pl-4"
          style={{ paddingLeft: "5rem" }}
        >
          <Typography className="font-bold">
            <h1
              style={{
                fontSize: "96px",
                marginBottom: "-1rem",
              }}
            >
              MetaDeed ALL
            </h1>
          </Typography>
          <Typography
            className="text-[16px] font-inter font-bold mr-1 mb-3 leading-relaxed"
            style={{ paddingBottom: "1.5rem" }}
          >
            MetaDeed turns property into on-chain assets you can verify,
            <br />
            finance, and own—instantly.
          </Typography>
        </div>
        <div className="lg:w-[30%] w-1/3 pt-5">
          <Typography className="font-bold">
            <h1
              style={{
                fontSize: "48px",
                lineHeight: "1",
                marginTop: "1.8rem",
                textAlign: "left",
              }}
            >
              ON-CHAIN <br />
              COMPLIANT
            </h1>
          </Typography>
        </div>
      </div>
      <div
        className="flex items-center justify-between gap-4"
        style={{ paddingTop: "3rem" }}
      >
        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3"
          style={{
            boxShadow:
              "10px 14px 16px -1px rgba(196, 169, 210, 0.12),10px 12px 14px 0px rgba(196, 169, 210, 0.12)",
            padding: "40px 30px",
            textAlign: "center",
            height: "400px",
          }}
        >
          <div
            className="p-5 rounded gap-3"
            style={{ backgroundColor: "#FFDCD8" }}
          >
            <ShieldCheckIcon className="w-8 h-8" style={{ color: "#FF4B37" }} />
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
          <a href="/learn-more">
            <Button
              variant="text"
              className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
            >
              <span style={{ fontSize: "14px", color: "#874FA8" }}>
                Learn More
              </span>{" "}
              <ArrowRightIcon
                className="w-4 h-4"
                style={{ color: "#874FA8" }}
              />
            </Button>
          </a>
        </div>

        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3"
          style={{
            boxShadow:
              "10px 12px 14px 5px rgba(196, 169, 210, 0.12), 10px 14px 16px 5px rgba(196, 169, 210, 0.12)",
            padding: "40px 30px",
            textAlign: "center",
            height: "400px",
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
          <a href="/learn-more">
            <Button
              variant="text"
              className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
            >
              <span style={{ fontSize: "14px", color: "#874FA8" }}>
                Learn More
              </span>{" "}
              <ArrowRightIcon
                className="w-4 h-4"
                style={{ color: "#874FA8" }}
              />
            </Button>
          </a>
        </div>

        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3"
          style={{
            boxShadow:
              "10px 14px 16px -1px rgba(196, 169, 210, 0.12),10px 12px 14px -2px rgba(196, 169, 210, 0.12)",
            padding: "40px 30px",
            textAlign: "center",
            height: "400px",
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
          <a href="/learn-more">
            <Button
              variant="text"
              className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
            >
              <span style={{ fontSize: "14px", color: "#874FA8" }}>
                Learn More
              </span>{" "}
              <ArrowRightIcon
                className="w-4 h-4"
                style={{ color: "#874FA8" }}
              />
            </Button>
          </a>
        </div>
      </div>

      <div
        className="flex items-center justify-between gap-4"
        style={{ paddingTop: "1rem", paddingBottom: "3rem" }}
      >
        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3"
          style={{
            boxShadow:
              "10px 14px 16px 10px rgba(196, 169, 210, 0.12),10px 12px 14px -2px rgba(196, 169, 210, 0.12)",
            padding: "40px 30px",
            textAlign: "center",
            height: "400px",
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
              Create, bundle, and trade mortgage-backed NFTs. Unlock real-world
              yield streams through compliant, collateralized, on-chain assets.
            </span>
          </Typography>
          <a href="/learn-more">
            <Button
              variant="text"
              className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
            >
              <span style={{ fontSize: "14px", color: "#874FA8" }}>
                Learn More
              </span>{" "}
              <ArrowRightIcon
                className="w-4 h-4"
                style={{ color: "#874FA8" }}
              />
            </Button>
          </a>
        </div>

        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3"
          style={{
            boxShadow:
              "10px 12px 14px 10px rgba(196, 169, 210, 0.12), 10px 14px 16px -1px rgba(196, 169, 210, 0.12)",
            padding: "40px 30px",
            textAlign: "center",
            height: "400px",
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
          <a href="/learn-more">
            <Button
              variant="text"
              className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
            >
              <span style={{ fontSize: "14px", color: "#874FA8" }}>
                Learn More
              </span>{" "}
              <ArrowRightIcon
                className="w-4 h-4"
                style={{ color: "#874FA8" }}
              />
            </Button>
          </a>
        </div>

        <div
          className="w-1/3 rounded-xl p-10 flex flex-col items-center gap-3"
          style={{
            boxShadow:
              "10px 14px 16px 10px rgba(196, 169, 210, 0.12),10px 12px 14px -2px rgba(196, 169, 210, 0.12)",
            padding: "40px 30px",
            textAlign: "center",
            height: "400px",
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
              MetaDeed enables property purchases, lending, insurance, and asset
              trading—all through a single, composable platform secured by EAS
              attestations.
            </span>
          </Typography>
          <a href="/learn-more">
            <Button
              variant="text"
              className="normal-case font-medium flex font-inter gap-1 hover:bg-transparent hover:gap-2 items-center"
            >
              <span style={{ fontSize: "14px", color: "#874FA8" }}>
                Learn More
              </span>{" "}
              <ArrowRightIcon
                className="w-4 h-4"
                style={{ color: "#874FA8" }}
              />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
