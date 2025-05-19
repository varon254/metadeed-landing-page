import { Typography } from "@material-tailwind/react";
import React from "react";
import useIsMobile from "../context/useIsMobile";
import { RequestDemo } from "../modal/requestDemo";

function GovernementTab() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div>
        <div
          className="w-full rounded-xl flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "20px 20px",
            textAlign: "left",
            height: "100%",
            margin: "0.5rem 0",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "40px", color: "#874FA8", width: "60px" }}
          >
            <h1>1</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "18px", color: "#000" }}>
                Support Attestation Infrastructure
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>
                  Enable verified identity, credit, ownership, <br />
                  and insurance attestations via UAE Pass, <br />
                  Etihad Credit Bureau, and DLD <br />
                  systems—ensuring legal trust and <br />
                  system integrity.{" "}
                </li>{" "}
              </span>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "20px 20px",
            textAlign: "left",
            height: "100%",
            margin: "0.5rem 0",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "40px", color: "#874FA8", width: "60px" }}
          >
            <h1>2</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "18px", color: "#000" }}>
                Drive Digital Dirham Adoption
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>
                  Position the Digital AED as the <br />
                  official settlement currency for on-chain <br />
                  real estate transactions—
                  <br />
                  programmable, compliant, and fast.{" "}
                </li>{" "}
              </span>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "20px 20px",
            textAlign: "left",
            height: "100%",
            margin: "0.5rem 0",
          }}
        >
          <div
            className="font-bold"
            style={{
              fontSize: "40px",
              color: "#874FA8",
              width: "60px",
            }}
          >
            <h1>3</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "18px", color: "#000" }}>
                Ensure Regulatory Oversight
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>
                  Use MetaDeed’s dashboards to <br />
                  monitor transactions, ownership changes, <br />
                  mortgages, and attestations— without <br /> storing private
                  data on-chain.
                </li>
              </span>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "20px 20px",
            textAlign: "left",
            height: "100%",
            margin: "0.5rem 0",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "40px", color: "#874FA8", width: "60px" }}
          >
            <h1>4</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "18px", color: "#000" }}>
                Legal Assurance & Dispute Resolution
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "12px", color: "#000" }}>
                <li>
                  Integrate verified attestations into <br />
                  existing legal frameworks to 
                  <br />
                  streamline dispute resolution and <br />
                  maintain jurisdictional clarity in <br />
                  on-chain transactions.{" "}
                </li>{" "}
              </span>
            </Typography>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        className="flex items-center gap-3 mx-auto justify-center"
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
        }}
      >
        <div
          className="w-full rounded-xl p-10 flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "10px 40px",
            textAlign: "left",
            height: "138px",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "48px", color: "#874FA8", width: "60px" }}
          >
            <h1>1</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>
                Support Attestation Infrastructure
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>
                  Enable verified identity, credit, ownership, and
                  <br /> insurance attestations via UAE Pass, Etihad Credit
                  Bureau, <br />
                  and DLD systems—ensuring legal trust and system integrity.{" "}
                </li>{" "}
              </span>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl p-10 flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "10px 40px",
            textAlign: "left",
            height: "138px",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "48px", color: "#874FA8", width: "60px" }}
          >
            <h1>2</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>
                Drive Digital Dirham Adoption
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>
                  Position the Digital AED as the official settlement currency
                  <br />
                  for on-chain real estate transactions—programmable, <br />
                  compliant, and fast.{" "}
                </li>{" "}
              </span>
            </Typography>
          </div>
        </div>
      </div>
      <div
        className="flex items-center gap-3 mx-auto justify-center"
        style={{
          paddingBottom: "3rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
        }}
      >
        <div
          className="w-full rounded-xl p-10 flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "10px 40px",
            textAlign: "left",
            height: "138px",
          }}
        >
          <div
            className="font-bold"
            style={{
              fontSize: "48px",
              color: "#874FA8",
              width: "60px",
            }}
          >
            <h1>3</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3 style={{ fontSize: "22px", color: "#000" }}>
                Ensure Regulatory Oversight
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>
                  Use MetaDeed’s dashboards to monitor transactions, <br />
                  ownership changes, mortgages, and attestations—
                  <br />
                  without storing private data on-chain.
                </li>
              </span>
            </Typography>
          </div>
        </div>
        <div
          className="w-full rounded-xl p-10 flex items-center"
          style={{
            boxShadow:
              "5px 4px 6px 5px rgba(196, 169, 210, 0.12), 2px 2px 2px 1px rgba(196, 169, 210, 0.12)",
            padding: "10px 40px",
            textAlign: "left",
            height: "138px",
          }}
        >
          <div
            className="font-bold"
            style={{ fontSize: "48px", color: "#874FA8", width: "60px" }}
          >
            <h1>4</h1>
          </div>
          <div className="flex flex-col justify-start">
            <Typography className="font-medium">
              <h3
                style={{ fontSize: "22px", color: "#000", lineHeight: "1.25" }}
              >
                Legal Assurance & Dispute Resolution
              </h3>
            </Typography>
            <Typography>
              <span style={{ fontSize: "14px", color: "#000" }}>
                <li>
                  Integrate verified attestations into existing legal <br />
                  frameworks to streamline dispute resolution and maintain
                  <br />
                  jurisdictional clarity in on-chain transactions.{" "}
                </li>{" "}
              </span>
            </Typography>
          </div>
        </div>
      </div>
      <div
        className="flex items-center gap-3 mx-auto justify-center"
        style={{
          paddingBottom: "3rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
        }}
      >
        <div
          className="w-full p-10 flex items-center justify-center"
          style={{
            padding: "20px 40px",
            textAlign: "left",
            height: "138px",
          }}
        >
          <div>
            <RequestDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovernementTab;
