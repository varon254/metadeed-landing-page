import { Typography } from "@material-tailwind/react";
import React from "react";

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
  return (
    <div>
      <div className="w-full lg:p-8 px-4 flex items-center justify-center min-h-[80vh]">
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
      <div
        className="flex items-start mx-auto justify-center"
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          gap: "20px",
        }}
      >
        <div className="w-full">
          <div
            className="w-full p-10 flex flex-col items-start"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
              padding: "10px 40px",
              height: "77px",
              borderRadius: "10px",
              border: "1px solid #874FA8",
            }}
          >
            <Typography className="font-medium">
              <h3
                style={{ fontSize: "28px", color: "#000", textAlign: "center" }}
              >
                Traditional Real Estate
              </h3>
            </Typography>
          </div>
          <div className="ui-list" style={{ marginTop: "2rem", gap: "2rem" }}>
            {traditionalList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  style={{ marginBottom: "23px" }}
                >
                  <div
                    style={{
                      padding: "5px",
                      background: "#FFF0FA",
                      borderRadius: "50px",
                      maxHeight: "26px",
                    }}
                  >
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
          <div
            className="w-full p-10 flex flex-col items-start"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
              padding: "10px 40px",
              height: "77px",
              borderRadius: "10px",
              border: "1px solid #874FA8",
            }}
          >
            <Typography className="font-medium">
              <h3
                style={{ fontSize: "28px", color: "#000", textAlign: "center" }}
              >
                Feature
              </h3>
            </Typography>
          </div>
          <div className="ui-list" style={{ marginTop: "2rem", gap: "2rem" }}>
            {featureList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  style={{ marginBottom: "27px", paddingLeft: "4rem" }}
                >
                  <div
                    style={{
                      padding: "5px",
                      background: "#F2B0DC",
                      borderRadius: "50px",
                      maxHeight: "26px",
                    }}
                  >
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
          <div
            className="w-full p-10 flex flex-col items-start"
            style={{
              boxShadow: "4px 10px 0 0 rgba(196, 169, 210, 0.5)",
              padding: "10px 40px",
              height: "77px",
              borderRadius: "10px",
              border: "1px solid #874FA8",
            }}
          >
            <Typography className="font-medium">
              <h3
                style={{ fontSize: "28px", color: "#000", textAlign: "center" }}
              >
                Powered by MetaDeed
              </h3>
            </Typography>
          </div>
          <div className="ui-list" style={{ marginTop: "2rem", gap: "2rem" }}>
            {metaDeedList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  style={{ marginBottom: "12px" }}
                >
                  <div
                    style={{
                      padding: "5px",
                      background: "#FFF0FA",
                      borderRadius: "50px",
                      maxHeight: "26px",
                    }}
                  >
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
