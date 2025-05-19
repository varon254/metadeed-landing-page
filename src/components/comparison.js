import { Typography } from "@material-tailwind/react";
import React from "react";
import useIsMobile from "./context/useIsMobile";

const traditionalList = [
  {
    text: "Weeks or months with agents, banks, and paperwork",
  },
  {
    text: "Manual, notary-dependent process",
  },
  {
    text: "Limited to local buyers and banks",
  },
  {
    text: "Complicated processes and records",
  },
  {
    text: "Illiquid, hard to exit early",
  },
  {
    text: "Prone to human error and centralization risk",
  },
  {
    text: "Requires brokers, legal teams, and agents",
  },
  {
    text: "Local currency, bank transfer delays",
  },
];

const featureList = [
  {
    text: "Transaction Speed",
  },
  {
    text: "Ownership Transfer",
  },
  {
    text: "Market Access",
  },
  {
    text: "Transparency",
  },
  {
    text: "Liquidity",
  },
  {
    text: "Security & Compliance",
  },
  {
    text: "Intermediaries",
  },
  {
    text: "Payment Options",
  },
];

const metaDeedList = [
  {
    text: "Minutes via smart contracts and verified attestations",
  },
  {
    text: "Instant, secure NFT transfer on Ethereum",
  },
  {
    text: "Global access for verified buyers with a crypto wallet",
  },
  {
    text: "100% on-chain visibility and audit trails",
  },
  {
    text: "Tradeable assets and mortgage tokens on secondary markets",
  },
  {
    text: "EAS-backed identity, KYC, and legal compliance by design",
  },
  {
    text: "Optional—trustless, automated via blockchain",
  },
  {
    text: "Instant settlement in Digital Dirham",
  },
];

function Comparison() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="px-5">
        <div className="w-full pt-5">
          <h1 className="text-[48px] font-bold text-center mt-8 leading-[0.9]">
            Traditional Deals
          </h1>
          <h1 className="text-[22px] font-bold text-center text-[#874FA8]">
            vs
          </h1>
          <h1 className="text-[48px] font-bold text-center mb-8 leading-[0.9]">
            Tokenized Real Estate
          </h1>
        </div>
        <div className="mb-16">
          <div className="w-full">
            <div className="w-full flex items-center h-[77px] rounded-xl border border-[#874FA8] justify-center shadow-customPurple">
              <Typography className="font-medium text-[28px] text-black text-center font-grotesk">
                Traditional Real Estate
              </Typography>
            </div>
            <div className="ui-list mt-8 gap-5">
              {traditionalList.map((item, index) => {
                return (
                  <li key={index} className="flex items-start gap-3 mt-6">
                    <div className="max-h-[26px] rounded-full bg-[#FFF0FA] p-[5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#874FA8"
                        class="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                    </div>
                    {item.text}
                  </li>
                );
              })}
            </div>
          </div>
          <div className="w-full pt-8">
            <div
              className="rounded-xl pb-3"
              style={{
                background:
                  "linear-gradient(to top, rgba(123, 15, 153, 0.1), rgba(100, 15, 153, 0.05))",
              }}
            >
              <div className="w-full flex items-center h-[77px] rounded-xl border border-[#874FA8] justify-center shadow-customPurple bg-white">
                <Typography className="font-medium text-[28px] text-black text-center font-grotesk">
                  Feature
                </Typography>
              </div>
              <div className="ui-list mt-8 gap-5">
                {featureList.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 mb-7 pl-16"
                    >
                      <div className="max-h-[26px] rounded-full bg-[#F2B0DC] p-[5px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#874FA8"
                          class="bi bi-check-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                        </svg>
                      </div>
                      {item.text}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full pt-8">
            <div className="w-full flex items-center h-[77px] rounded-xl border border-[#874FA8] justify-center shadow-customPurple">
              <Typography className="font-medium text-[28px] text-black text-center font-grotesk">
                Powered by MetaDeed
              </Typography>
            </div>
            <div className="ui-list mt-8 gap-5">
              {metaDeedList.map((item, index) => {
                return (
                  <li key={index} className="flex items-start gap-3 mb-3">
                    <div className="max-h-[26px] rounded-full bg-[#FFF0FA] p-[5px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#874FA8"
                        class="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                      </svg>
                    </div>
                    {item.text}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="w-full lg:p-8 px-4 flex items-center justify-center">
        {/* Comparison Section */}
        <div className="w-full lg:px-6 lg:pr-14 pt-5">
          <h1
            className="text-[96px] font-bold"
            style={{
              fontSize: "96px",
              textAlign: "center",
              marginTop: "4rem",
              marginBottom: "-2.5rem",
            }}
          >
            Traditional Deals
          </h1>
          <h1
            className="text-[48px] font-bold"
            style={{
              fontSize: "48px",
              textAlign: "center",
              color: "#874FA8",
            }}
          >
            vs
          </h1>
          <h1
            className="text-[96px] font-bold"
            style={{
              fontSize: "96px",
              textAlign: "center",
              marginBottom: "3rem",
              marginTop: "-2.5rem",
            }}
          >
            Tokenized Real Estate
          </h1>
        </div>
      </div>
      <div className="flex items-start mx-auto justify-center gap-5 py-4 px-4">
        <div className="w-full">
          <div className="w-full flex items-center h-[77px] rounded-xl border border-[#874FA8] justify-center shadow-customPurple">
            <Typography className="font-medium text-[28px] text-black text-center font-grotesk">
              Traditional Real Estate
            </Typography>
          </div>
          <div className="ui-list mt-8 gap-5">
            {traditionalList.map((item, index) => {
              return (
                <li key={index} className="flex items-start gap-3 mt-6">
                  <div className="max-h-[26px] rounded-full bg-[#FFF0FA] p-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#874FA8"
                      class="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </div>
                  {item.text}
                </li>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex items-center h-[77px] rounded-xl border border-[#874FA8] justify-center shadow-customPurple">
            <Typography className="font-medium text-[28px] text-black text-center font-grotesk">
              Feature
            </Typography>
          </div>
          <div className="ui-list mt-8 gap-5">
            {featureList.map((item, index) => {
              return (
                <li key={index} className="flex items-start gap-3 mb-7 pl-16">
                  <div className="max-h-[26px] rounded-full bg-[#F2B0DC] p-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#874FA8"
                      class="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </div>
                  {item.text}
                </li>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex items-center h-[77px] rounded-xl border border-[#874FA8] justify-center shadow-customPurple">
            <Typography className="font-medium text-[28px] text-black text-center font-grotesk">
              Powered by MetaDeed
            </Typography>
          </div>
          <div className="ui-list mt-8 gap-5">
            {metaDeedList.map((item, index) => {
              return (
                <li key={index} className="flex items-start gap-3 mb-3">
                  <div className="max-h-[26px] rounded-full bg-[#FFF0FA] p-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#874FA8"
                      class="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </div>
                  {item.text}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comparison;
